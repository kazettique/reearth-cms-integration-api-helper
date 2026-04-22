# Use from plain HTML (CDN + types)

Use the library straight from a CDN inside `<script type="module">`, with full
type hints in **VS Code** and **Monaco**. No bundler, no `npm install`.

## Why the plain CDN import has no types

The usual snippet works at runtime:

```html
<script type="module">
  import { createClient } from "https://esm.sh/reearth-cms-integration-api-helper";
</script>
```

…but editors see URL imports as opaque strings. `esm.sh` does emit an
`X-TypeScript-Types` header, which **Deno** follows automatically, but
VS Code and Monaco don't. The fix is to point the editor at a flat,
single-file `.d.ts` bundle that this site hosts at a stable URL.

## Where the `.d.ts` lives

| Purpose | URL |
|---|---|
| Latest (tracks `main`) | `https://kazettique.github.io/reearth-cms-integration-api-helper/types/reearth-cms-integration-api-helper.d.ts` |
| Current release (pinned to the latest published version) | `https://kazettique.github.io/reearth-cms-integration-api-helper/types/reearth-cms-integration-api-helper-vX.Y.Z.d.ts` |
| Any historical version (via unpkg) | `https://unpkg.com/reearth-cms-integration-api-helper@X.Y.Z/dist/bundled.d.ts` |
| Manifest (version metadata) | `https://kazettique.github.io/reearth-cms-integration-api-helper/types/manifest.json` |

For long-term version pinning, prefer the **unpkg** URL — it mirrors every
published version automatically. The GH Pages versioned URL is replaced on
each deploy.

## VS Code — local HTML

Three steps. No `node_modules` needed.

### 1. Download the bundled `.d.ts` once

```sh
mkdir -p types
curl -L \
  https://kazettique.github.io/reearth-cms-integration-api-helper/types/reearth-cms-integration-api-helper.d.ts \
  -o types/reearth-cms-integration-api-helper.d.ts
```

Or pin to a version with unpkg:

```sh
curl -L \
  https://unpkg.com/reearth-cms-integration-api-helper@0.1.0/dist/bundled.d.ts \
  -o types/reearth-cms-integration-api-helper.d.ts
```

### 2. Drop a `jsconfig.json` next to your HTML

```json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "bundler",
    "checkJs": true,
    "paths": {
      "https://esm.sh/reearth-cms-integration-api-helper": [
        "./types/reearth-cms-integration-api-helper.d.ts"
      ],
      "https://unpkg.com/reearth-cms-integration-api-helper/dist/bundled.d.ts": [
        "./types/reearth-cms-integration-api-helper.d.ts"
      ]
    }
  },
  "include": ["**/*.html", "**/*.js", "types/**/*.d.ts"]
}
```

::: info Using TypeScript?
Rename to `tsconfig.json` and the same `paths` mapping applies.
:::

### 3. Author the HTML with `// @ts-check`

```html
<!doctype html>
<html>
  <body>
    <script type="module">
      // @ts-check
      import { createClient } from "https://esm.sh/reearth-cms-integration-api-helper";

      const cms = createClient({
        baseUrl: "https://cms.example.com/api",
        token: "your-integration-token",
      });

      const { items } = await cms.ItemFilter({
        path: { projectIdOrAlias: "my-proj", modelIdOrKey: "posts" },
        query: { page: 1, perPage: 20 },
      });

      console.log(items);
    </script>
  </body>
</html>
```

Hover `createClient`, `ItemFilter`, or `items` — VS Code's built-in HTML
language service runs TypeScript on `<script type="module">` and resolves
everything through the local `.d.ts`. Autocomplete lists all 48 operations.

## Monaco (web editor)

Fetch the bundled `.d.ts` once when you wire up the editor, and register it
as an extra lib plus an alias for the CDN URLs your users will import from.

```ts
import * as monaco from "monaco-editor";

const DTS_URL =
  "https://kazettique.github.io/reearth-cms-integration-api-helper/types/reearth-cms-integration-api-helper.d.ts";

const dts = await fetch(DTS_URL).then((r) => r.text());

// 1. Register the package as an ambient module.
monaco.languages.typescript.typescriptDefaults.addExtraLib(
  dts,
  "file:///node_modules/reearth-cms-integration-api-helper/index.d.ts",
);

// 2. Alias every CDN URL users might import from, so Monaco resolves
//    `import ... from "https://esm.sh/..."` to the same types.
monaco.languages.typescript.typescriptDefaults.addExtraLib(
  `declare module "https://esm.sh/reearth-cms-integration-api-helper" {
     export * from "reearth-cms-integration-api-helper";
   }
   declare module "https://unpkg.com/reearth-cms-integration-api-helper/dist/bundled.d.ts" {
     export * from "reearth-cms-integration-api-helper";
   }`,
  "file:///cdn-alias.d.ts",
);

// 3. Compiler options — allow URL imports and modern ES.
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.ESNext,
  module: monaco.languages.typescript.ModuleKind.ESNext,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
  allowNonTsExtensions: true,
  allowSyntheticDefaultImports: true,
});
```

Make sure Monaco's TypeScript **worker** is registered the usual way (via
`MonacoEnvironment.getWorker`) — without it, `addExtraLib` has nothing to
run against. See the
[Monaco integration guide](https://github.com/microsoft/monaco-editor/tree/main/docs)
for the standard boilerplate.

## The `manifest.json`

If your web editor needs to resolve the current version programmatically
(e.g. to show "pinned to vX.Y.Z" in a status bar), fetch the manifest:

```ts
const manifest = await fetch(
  "https://kazettique.github.io/reearth-cms-integration-api-helper/types/manifest.json",
).then((r) => r.json());

// { name, version, latest, versioned, bundledAt }
```

## Troubleshooting

- **No hints in VS Code.** Make sure the `jsconfig.json` (or `tsconfig.json`)
  is in the folder VS Code has open as the workspace root, not buried inside
  a subdirectory. Reload the window after creating it.
- **`ItemFilter` shows as `any` in Monaco.** The TypeScript worker isn't
  registered — check `MonacoEnvironment.getWorker` returns the TS worker for
  `typescript`/`javascript` model languages.
- **Types feel stale.** The latest GH Pages `.d.ts` updates on every tagged
  release; for an even fresher signal, pull from the `main`-tracking
  bundled file in the repo's `dist/` output.
