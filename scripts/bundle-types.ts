import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { generateDtsBundle } from "dts-bundle-generator";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const ENTRY = resolve(ROOT, "src/index.ts");
const TSCONFIG = resolve(ROOT, "tsconfig.json");

const DIST_OUT = resolve(ROOT, "dist/bundled.d.ts");
const DOCS_TYPES_DIR = resolve(ROOT, "docs/public/types");

const pkg = JSON.parse(
  readFileSync(resolve(ROOT, "package.json"), "utf8"),
) as { name: string; version: string; homepage?: string };

const [bundled] = generateDtsBundle(
  [
    {
      filePath: ENTRY,
      output: { noBanner: true, sortNodes: false },
    },
  ],
  { preferredConfigPath: TSCONFIG },
);

if (!bundled) {
  throw new Error("dts-bundle-generator produced no output for src/index.ts");
}

const generatedAt = new Date().toISOString();
const banner = `/**
 * ${pkg.name} v${pkg.version}
 *
 * Single-file TypeScript declaration bundle for use from a CDN in editors
 * (VS Code, Monaco) that can't follow the \`X-TypeScript-Types\` header.
 *
 * Bundled at: ${generatedAt}
 * @see ${pkg.homepage ?? "https://github.com/kazettique/reearth-cms-integration-api-helper"}cdn-types
 */
`;

const output = banner + bundled;

mkdirSync(dirname(DIST_OUT), { recursive: true });
writeFileSync(DIST_OUT, output);
console.log(`wrote ${DIST_OUT}`);

mkdirSync(DOCS_TYPES_DIR, { recursive: true });

const LATEST_NAME = `${pkg.name}.d.ts`;
const VERSIONED_NAME = `${pkg.name}-v${pkg.version}.d.ts`;

const LATEST_OUT = resolve(DOCS_TYPES_DIR, LATEST_NAME);
const VERSIONED_OUT = resolve(DOCS_TYPES_DIR, VERSIONED_NAME);
const MANIFEST_OUT = resolve(DOCS_TYPES_DIR, "manifest.json");

writeFileSync(LATEST_OUT, output);
console.log(`wrote ${LATEST_OUT}`);

writeFileSync(VERSIONED_OUT, output);
console.log(`wrote ${VERSIONED_OUT}`);

const manifest = {
  name: pkg.name,
  version: pkg.version,
  latest: LATEST_NAME,
  versioned: VERSIONED_NAME,
  bundledAt: generatedAt,
};
writeFileSync(MANIFEST_OUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(`wrote ${MANIFEST_OUT}`);
