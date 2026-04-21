import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import openapiTS, { astToString } from "openapi-typescript";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SPEC = resolve(
  __dirname,
  "../../reearth-cms-3/server/schemas/integration/integration.yml",
);
const OUT = resolve(__dirname, "../src/generated/schema.ts");

const ast = await openapiTS(pathToFileURL(SPEC));
const body = astToString(ast);

const header = `/**
 * AUTO-GENERATED from reearth-cms-3/server/schemas/integration/integration.yml.
 * Do not edit by hand. Run \`yarn generate\` to refresh.
 */
/* eslint-disable */
`;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, header + body);

console.log(`wrote ${OUT}`);
