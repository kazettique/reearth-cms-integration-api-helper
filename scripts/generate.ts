import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import openapiTS, { astToString } from "openapi-typescript";
import Converter from "openapi-to-postmanv2";
import { parse as parseYaml } from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SPEC_URL =
  "https://raw.githubusercontent.com/reearth/reearth-cms/main/server/schemas/integration/integration.yml";

const SCHEMA_OUT = resolve(__dirname, "../src/generated/schema.ts");
const OPS_OUT = resolve(__dirname, "../src/generated/operations.ts");
const CLIENT_OUT = resolve(__dirname, "../src/generated/client.ts");
const VERSION_OUT = resolve(__dirname, "../src/generated/version.ts");
const POSTMAN_OUT = resolve(
  __dirname,
  "../docs/public/integration.postman_collection.json",
);

// 1. Fetch the spec + hash it locally for version-drift detection.
// Hashing the decoded content (instead of comparing ETags) keeps the
// identifier stable across HTTP clients, gzip encoding, and CDN edges.
const getResponse = await fetch(SPEC_URL);
if (!getResponse.ok) {
  throw new Error(
    `Failed to fetch ${SPEC_URL}: HTTP ${getResponse.status} ${getResponse.statusText}`,
  );
}
const specText = await getResponse.text();
const specHash = createHash("sha256").update(specText, "utf8").digest("hex");
interface SpecParameter {
  in: "path" | "query" | "header" | "cookie";
  name: string;
  required?: boolean;
}
interface SpecRequestBody {
  required?: boolean;
  content?: Record<string, unknown>;
}
interface SpecResponse {
  content?: Record<string, unknown>;
}
interface SpecOperation {
  operationId?: string;
  parameters?: ParamOrRef[];
  requestBody?: SpecRequestBody;
  responses?: Record<string, SpecResponse>;
}
type ParamOrRef = SpecParameter | { $ref: string };
interface SpecPathItem {
  parameters?: ParamOrRef[];
  get?: SpecOperation;
  post?: SpecOperation;
  put?: SpecOperation;
  patch?: SpecOperation;
  delete?: SpecOperation;
  options?: SpecOperation;
  head?: SpecOperation;
}
const specDoc = parseYaml(specText) as {
  paths: Record<string, SpecPathItem>;
  components?: { parameters?: Record<string, SpecParameter> };
};

const resolveParam = (p: ParamOrRef): SpecParameter | null => {
  if ("$ref" in p) {
    const refName = p.$ref.replace(/^#\/components\/parameters\//, "");
    return specDoc.components?.parameters?.[refName] ?? null;
  }
  return p;
};

const genHeader = (title: string) => `/**
 * ${title}
 *
 * AUTO-GENERATED from ${SPEC_URL}.
 * Do not edit by hand. Run \`bun run generate\` to refresh.
 */
/* eslint-disable */
`;

mkdirSync(dirname(SCHEMA_OUT), { recursive: true });
mkdirSync(dirname(POSTMAN_OUT), { recursive: true });

// 2. Emit the typed schema via openapi-typescript.
const ast = await openapiTS(specDoc as never);
writeFileSync(SCHEMA_OUT, genHeader("OpenAPI types.") + astToString(ast));
console.log(`wrote ${SCHEMA_OUT}`);

// 3. Emit the runtime operationId -> { method, path } map.
const HTTP_METHODS = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "options",
  "head",
] as const;
type HttpMethod = (typeof HTTP_METHODS)[number];

interface OpEntry {
  id: string;
  method: string;
  path: string;
  hasPath: boolean;
  hasQuery: boolean;
  hasHeader: boolean;
  hasBody: boolean;
  bodyRequired: boolean;
  hasJsonResponse: boolean;
}
const entries: OpEntry[] = [];
for (const [pathTemplate, pathItem] of Object.entries(specDoc.paths)) {
  if (!pathItem) continue;
  // Path-level parameters apply to every operation on this path; $refs resolved.
  const pathLevelIn = new Set(
    (pathItem.parameters ?? [])
      .map(resolveParam)
      .filter((p): p is SpecParameter => p !== null)
      .map((p) => p.in),
  );
  // Any `{placeholder}` in the URL template implies `parameters.path` exists in
  // the resolved type, regardless of how it's declared in the YAML.
  const hasPathFromTemplate = /\{[^}]+\}/.test(pathTemplate);
  for (const method of HTTP_METHODS) {
    const op = pathItem[method as HttpMethod];
    if (!op?.operationId) continue;
    const opIn = new Set<string>(pathLevelIn);
    for (const p of op.parameters ?? []) {
      const resolved = resolveParam(p);
      if (resolved) opIn.add(resolved.in);
    }
    const jsonBody = op.requestBody?.content?.["application/json"];
    entries.push({
      id: op.operationId,
      method: method.toUpperCase(),
      path: pathTemplate,
      hasPath: opIn.has("path") || hasPathFromTemplate,
      hasQuery: opIn.has("query"),
      hasHeader: opIn.has("header"),
      hasBody: jsonBody !== undefined,
      bodyRequired: jsonBody !== undefined && op.requestBody?.required === true,
      hasJsonResponse:
        op.responses?.["200"]?.content?.["application/json"] !== undefined,
    });
  }
}
entries.sort((a, b) => a.id.localeCompare(b.id));

const opsBody = `export const operationsMap = {
${entries
  .map(
    (e) =>
      `  ${e.id}: { method: ${JSON.stringify(e.method)}, path: ${JSON.stringify(e.path)} },`,
  )
  .join("\n")}
} as const;

export type OperationsMap = typeof operationsMap;
`;
writeFileSync(
  OPS_OUT,
  genHeader(
    "Runtime map of every operationId to its HTTP method and path template.",
  ) + opsBody,
);
console.log(`wrote ${OPS_OUT} (${entries.length} operations)`);

// 4. Emit the per-operation client interface so editors can land on a specific
//    line when the user hits "Go to Definition" on e.g. `cms.ProjectGet`.
const buildParamsLiteral = (e: OpEntry): string => {
  const fields: string[] = [];
  if (e.hasPath) {
    fields.push(`    path: operations["${e.id}"]["parameters"]["path"];`);
  }
  if (e.hasQuery) {
    fields.push(`    query?: operations["${e.id}"]["parameters"]["query"];`);
  }
  if (e.hasHeader) {
    fields.push(`    header?: operations["${e.id}"]["parameters"]["header"];`);
  }
  if (e.hasBody) {
    const opt = e.bodyRequired ? "" : "?";
    fields.push(
      `    body${opt}: NonNullable<operations["${e.id}"]["requestBody"]>["content"]["application/json"];`,
    );
  }
  if (fields.length === 0) return "{}";
  return `{\n${fields.join("\n")}\n  }`;
};

const buildReturnType = (e: OpEntry): string =>
  e.hasJsonResponse
    ? `Promise<operations["${e.id}"]["responses"][200]["content"]["application/json"]>`
    : "Promise<void>";

const clientBody = `import type { operations } from "./schema";

// Re-export so the {@link operations.X} JSDoc links below stay resolvable
// after dts-bundle-generator inlines this file.
export type { operations };

export interface ClientMethods {
${entries
  .map(
    (e) =>
      `  /**
   * ${e.method} ${e.path}
   *
   * @see {@link operations.${e.id}} for the raw OpenAPI operation (response codes, schemas).
   */
  ${e.id}(
    params: ${buildParamsLiteral(e)},
    options?: { signal?: AbortSignal },
  ): ${buildReturnType(e)};`,
  )
  .join("\n\n")}
}
`;
writeFileSync(
  CLIENT_OUT,
  genHeader("Per-operation typed client surface.") + clientBody,
);
console.log(`wrote ${CLIENT_OUT} (${entries.length} methods)`);

// 5. Emit the baked version identifier for the runtime drift check.
const generatedAt = new Date().toISOString();
const versionBody = `export const SPEC_URL = ${JSON.stringify(SPEC_URL)};
export const SPEC_CONTENT_HASH = ${JSON.stringify(specHash)};
export const GENERATED_AT = ${JSON.stringify(generatedAt)};
`;
writeFileSync(
  VERSION_OUT,
  genHeader("Spec identifier baked at generation time.") + versionBody,
);
console.log(`wrote ${VERSION_OUT} (sha256=${specHash.slice(0, 12)}…)`);

// 6. Emit a Postman Collection v2.1 for direct import.
type PostmanResult =
  | { result: true; output: Array<{ data: unknown }> }
  | { result: false; reason: string };

const postmanCollection = await new Promise<unknown>(
  (resolvePromise, rejectPromise) => {
    Converter.convert(
      { type: "string", data: specText },
      { folderStrategy: "Tags" },
      (err: Error | null, result: PostmanResult) => {
        if (err) return rejectPromise(err);
        if (!result.result) return rejectPromise(new Error(result.reason));
        resolvePromise(result.output[0]?.data);
      },
    );
  },
);
writeFileSync(POSTMAN_OUT, JSON.stringify(postmanCollection, null, 2) + "\n");
console.log(`wrote ${POSTMAN_OUT}`);
