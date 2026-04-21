# reearth-cms-integration-api-helper

TypeScript types **and** transport-agnostic fetch utilities for the
**reearth-cms Integration REST API**. Both are auto-generated from
[`server/schemas/integration/integration.yml`](https://github.com/reearth/reearth-cms/blob/main/server/schemas/integration/integration.yml)
in the reearth-cms repo.

- **Zero runtime dependencies.** Works with native `fetch`, axios, ofetch, ky,
  tanstack-query, or anything else.
- **Fully typed.** Every operation's path params, query, body and response body
  are typed off the spec.
- **Two layers:**
  1. `buildRequest()` — returns a plain `{ method, url, headers, body, ... }`
     descriptor. No HTTP call. Feed it into whatever.
  2. `createClient()` — convenience factory with one typed method per
     operationId (e.g. `client.ItemCreate(...)`). Uses native fetch by
     default, accepts a pluggable `transport`.

## Documentation site

A VitePress site with English + 日本語 localization lives in [`docs/`](./docs/).
Run it locally:

```sh
bun run docs          # dev server
bun run docs:build    # static build → docs/.vitepress/dist/
bun run docs:preview  # preview the static build
```

## Install

```sh
bun add reearth-cms-integration-api-helper
# or
yarn add reearth-cms-integration-api-helper
# or
npm install reearth-cms-integration-api-helper
```

## Quick start — typed client with default fetch

```ts
import { createClient } from "reearth-cms-integration-api-helper";

const cms = createClient({
  baseUrl: "https://cms.example.com/api",
  token: process.env.REEARTH_CMS_TOKEN, // -> Authorization: Bearer <token>
});

const { items } = await cms.ItemFilter({
  path: { projectIdOrAlias: "my-proj", modelIdOrKey: "posts" },
  query: { page: 1, perPage: 20 },
});

const created = await cms.ItemCreate({
  path: {
    workspaceIdOrAlias: "ws-1",
    projectIdOrAlias: "my-proj",
    modelIdOrKey: "posts",
  },
  body: { fields: [{ key: "title", value: "Hello" }] },
});
```

Every operationId from the OpenAPI spec is a method on the client — see
[`src/generated/operations.ts`](./src/generated/operations.ts) for the full
list (48 operations).

## Layer 1 — library-agnostic request descriptors

`buildRequest(operationId, params)` resolves the URL and returns a descriptor.
It performs no I/O, so you can hand it to any HTTP library.

```ts
import { buildRequest } from "reearth-cms-integration-api-helper";

const req = buildRequest("ItemCreate", {
  path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p", modelIdOrKey: "m" },
  body: { fields: [] },
});
// req = {
//   method: "POST",
//   url: "/ws/projects/p/models/m/items",
//   headers: { "Content-Type": "application/json" },
//   body: { fields: [] },
//   ...
// }
```

## Layer 2 — `createClient()` with a pluggable transport

The default transport uses global `fetch` (Node 18+, Bun, Deno, browsers, edge
runtimes). To use a different library, supply a `transport`:

### axios

```ts
import axios from "axios";
import {
  createClient,
  type Transport,
} from "reearth-cms-integration-api-helper";

const axiosTransport: Transport = async ({ baseUrl, descriptor, signal }) => {
  const { data } = await axios.request({
    baseURL: baseUrl,
    url: descriptor.url,
    method: descriptor.method,
    headers: descriptor.headers,
    data: descriptor.body,
    signal,
  });
  return data;
};

const cms = createClient({ baseUrl, token, transport: axiosTransport });
```

### ofetch

```ts
import { ofetch } from "ofetch";
import {
  createClient,
  type Transport,
} from "reearth-cms-integration-api-helper";

const ofetchTransport: Transport = ({ baseUrl, descriptor, signal }) =>
  ofetch(descriptor.url, {
    baseURL: baseUrl,
    method: descriptor.method,
    headers: descriptor.headers,
    body: descriptor.body,
    signal,
  });

const cms = createClient({ baseUrl, token, transport: ofetchTransport });
```

### ky

```ts
import ky from "ky";
import {
  createClient,
  type Transport,
} from "reearth-cms-integration-api-helper";

const kyTransport: Transport = ({ baseUrl, descriptor, signal }) =>
  ky(descriptor.url.replace(/^\//, ""), {
    prefixUrl: baseUrl,
    method: descriptor.method,
    headers: descriptor.headers,
    json: descriptor.body,
    signal,
  }).json();

const cms = createClient({ baseUrl, token, transport: kyTransport });
```

### @tanstack/react-query

Use the request descriptor directly as a `queryFn`:

```ts
import { useQuery } from "@tanstack/react-query";
import {
  buildRequest,
  fetchTransport,
} from "reearth-cms-integration-api-helper";

function useProjects(workspaceIdOrAlias: string) {
  return useQuery({
    queryKey: ["ProjectFilter", workspaceIdOrAlias],
    queryFn: ({ signal }) => {
      const descriptor = buildRequest("ProjectFilter", {
        path: { workspaceIdOrAlias },
      });
      return fetchTransport({
        baseUrl: "https://cms.example.com/api",
        descriptor,
        signal,
      });
    },
  });
}
```

Or plug axios / ofetch into the `queryFn` the same way.

## Error handling

The default transport throws `HttpError` for non-2xx responses:

```ts
import { HttpError } from "reearth-cms-integration-api-helper";

try {
  await cms.ProjectGet({
    path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "nope" },
  });
} catch (e) {
  if (e instanceof HttpError) {
    e.status; // 404
    e.body; // parsed JSON or text response
    e.descriptor; // the request that failed
  }
}
```

Custom transports can throw anything they want — e.g. axios throws `AxiosError`.

## Using from JavaScript

The package ships ESM `.js` + `.d.ts` files, so JS consumers get the same
hover docs and types as TypeScript consumers. No TypeScript required:

```js
// example.mjs
// @ts-check  ← opt into editor type-checking
import { buildRequest, createClient } from "reearth-cms-integration-api-helper";

const cms = createClient({
  baseUrl: "https://cms.example.com/api",
  token: process.env.REEARTH_CMS_TOKEN,
});

const { items } = await cms.ItemFilter({
  path: { projectIdOrAlias: "my-proj", modelIdOrKey: "posts" },
});
```

With `// @ts-check` at the top of a `.js` / `.mjs` file, VS Code (and any TS
LSP) will flag bad path-param names or wrong body shapes, just like in TS.

## Playground

Two runnable examples live in `playground/`:

```sh
bun run playground       # playground/example.ts (TypeScript)
bun run playground:js    # playground/example.mjs (JS with @ts-check)
```

Both import from `../src` so bun runs them straight from source — no build step.
Hover any identifier for types; uncomment the marked lines to see the editor
surface type errors on intentionally-bad calls.

## Postman collection

A ready-to-import Postman Collection v2.1 is regenerated alongside the types
and committed at
[`exports/integration.postman_collection.json`](./exports/integration.postman_collection.json).

**In Postman:** _File → Import → Upload Files →_ `exports/integration.postman_collection.json`.
Requests are organized by tag (Projects, Models, Items, Assets, …).

## Version drift check

Each `bun run generate` bakes a sha256 of the spec contents into
`src/generated/version.ts`. At runtime, `createClient()` fires a single
best-effort HEAD-then-GET against the spec URL, hashes the response, and
warns **once per process** on mismatch:

```
[reearth-cms-integration-api-helper] Integration API spec may be out of date.
  local  sha256: d9ad15577e5a...
  remote sha256: 3e2b8f01aa4c...
  source:        https://raw.githubusercontent.com/reearth/reearth-cms/main/server/schemas/integration/integration.yml
  Run `bun run generate` in reearth-cms-integration-api-helper to refresh the generated types.
```

Opt out for tests / air-gapped builds:

```ts
createClient({ baseUrl, token, skipVersionCheck: true });
```

Or check manually:

```ts
import {
  checkSpecVersion,
  SPEC_CONTENT_HASH,
  GENERATED_AT,
} from "reearth-cms-integration-api-helper";

const { local, remote, isLatest } = await checkSpecVersion();
if (!isLatest) console.warn("Types are behind main:", { local, remote });
```

The check never throws — offline / CORS-blocked requests return `isLatest: true`
with `remote: null`, so nothing ever breaks because of it.

## Dynamic authorization

Pass a (possibly async) function as `token` when the token needs to be fetched
or refreshed per-request:

```ts
createClient({
  baseUrl,
  token: async () => await refreshIfNeeded(),
});
```

## Regenerating from the spec

```sh
bun install
bun run generate
```

This fetches the latest `integration.yml` from `reearth-cms/main` on GitHub
and regenerates:

- `src/generated/schema.ts` — types
- `src/generated/operations.ts` — runtime operationId → `{ method, path }` map
- `src/generated/version.ts` — baked sha256 for the drift check
- `exports/integration.postman_collection.json` — Postman Collection v2.1

All four are committed so consumers don't need to run codegen themselves.
The generator throws if GitHub is unreachable — run with network access.

## Scripts

| script          | description                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| `generate`      | Refetch the spec and regenerate all files under `src/generated/` + `exports/` |
| `build`         | Emit `.js` + `.d.ts` into `dist/`                                             |
| `type-check`    | `tsc --noEmit` on `src/` and the playground                                   |
| `playground`    | `bun playground/example.ts`                                                   |
| `playground:js` | `bun playground/example.mjs`                                                  |
| `format`        | Prettier over the whole package                                               |

## Package exports

```ts
// Types (from the OpenAPI spec)
import type {
  paths,
  components,
  operations, // raw openapi-typescript output
  Schemas, // alias for components["schemas"]
  Project,
  Item,
  Asset,
  GeoJSON /* ...all 24 named aliases */,
  RequestBody,
  ResponseBody, // <Op> -> JSON body types
  PathParams,
  QueryParams,
  HeaderParams, // <Op> -> param types
} from "reearth-cms-integration-api-helper";

// Runtime
import {
  createClient,
  buildRequest,
  fetchTransport,
  HttpError,
  operationsMap,
  checkSpecVersion,
  runVersionCheckOnce,
  SPEC_URL,
  SPEC_CONTENT_HASH,
  GENERATED_AT,
} from "reearth-cms-integration-api-helper";
import type {
  Client,
  ClientOptions,
  Transport,
  TransportContext,
  RequestDescriptor,
  OperationId,
  OperationParams,
  OperationResult,
  SpecVersionResult,
} from "reearth-cms-integration-api-helper";
```

## Source of truth

All types and the operation map descend from
[`reearth-cms/server/schemas/integration/integration.yml`](https://github.com/reearth/reearth-cms/blob/main/server/schemas/integration/integration.yml).
The backend consumes the same spec via `oapi-codegen`, so both sides stay
aligned.
