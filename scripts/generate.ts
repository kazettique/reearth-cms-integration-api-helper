import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import openapiTS, { astToString } from "openapi-typescript";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SPEC_URL = new URL(
  "https://raw.githubusercontent.com/reearth/reearth-cms/main/server/schemas/integration/integration.yml",
);
const OUT = resolve(__dirname, "../src/generated/schema.ts");

const probe = await fetch(SPEC_URL, { method: "HEAD" });
if (!probe.ok) {
  throw new Error(
    `Failed to fetch OpenAPI spec at ${SPEC_URL}: HTTP ${probe.status} ${probe.statusText}`,
  );
}

const ast = await openapiTS(SPEC_URL);
const body = astToString(ast);

const header = `/**
 * AUTO-GENERATED from ${SPEC_URL}.
 * Do not edit by hand. Run \`yarn generate\` to refresh.
 */
/* eslint-disable */
`;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, header + body);

console.log(`wrote ${OUT}`);
