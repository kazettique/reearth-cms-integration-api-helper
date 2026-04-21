import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import openapiTS, { astToString } from "openapi-typescript";
import { parse as parseYaml } from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SPEC_URL =
  "https://raw.githubusercontent.com/reearth/reearth-cms/main/server/schemas/integration/integration.yml";
const SCHEMA_OUT = resolve(__dirname, "../src/generated/schema.ts");
const OPS_OUT = resolve(__dirname, "../src/generated/operations.ts");

const response = await fetch(SPEC_URL);
if (!response.ok) {
  throw new Error(
    `Failed to fetch OpenAPI spec at ${SPEC_URL}: HTTP ${response.status} ${response.statusText}`,
  );
}
const specText = await response.text();
const specDoc = parseYaml(specText) as {
  paths: Record<
    string,
    Record<string, { operationId?: string } | undefined>
  >;
};

const schemaHeader = `/**
 * AUTO-GENERATED from ${SPEC_URL}.
 * Do not edit by hand. Run \`bun run generate\` to refresh.
 */
/* eslint-disable */
`;
const opsHeader = `/**
 * AUTO-GENERATED from ${SPEC_URL}.
 * Do not edit by hand. Run \`bun run generate\` to refresh.
 *
 * Runtime map of every operationId to its HTTP method and path template.
 * Used by buildRequest() and createClient() to dispatch requests.
 */
/* eslint-disable */
`;

mkdirSync(dirname(SCHEMA_OUT), { recursive: true });

// 1. Emit the typed schema via openapi-typescript.
const ast = await openapiTS(specDoc as never);
writeFileSync(SCHEMA_OUT, schemaHeader + astToString(ast));
console.log(`wrote ${SCHEMA_OUT}`);

// 2. Emit the runtime operationId -> { method, path } map.
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

writeFileSync(OPS_OUT, opsHeader + opsBody);
console.log(`wrote ${OPS_OUT} (${entries.length} operations)`);
