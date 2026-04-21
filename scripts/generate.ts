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
const specDoc = parseYaml(specText) as {
  paths: Record<string, Record<string, { operationId?: string } | undefined>>;
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

const entries: Array<{ id: string; method: string; path: string }> = [];
for (const [pathTemplate, pathItem] of Object.entries(specDoc.paths)) {
  if (!pathItem) continue;
  for (const method of HTTP_METHODS) {
    const op = pathItem[method as HttpMethod];
    if (op?.operationId) {
      entries.push({
        id: op.operationId,
        method: method.toUpperCase(),
        path: pathTemplate,
      });
    }
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

// 4. Emit the baked version identifier for the runtime drift check.
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

// 5. Emit a Postman Collection v2.1 for direct import.
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
