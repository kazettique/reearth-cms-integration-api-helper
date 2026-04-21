# @reearth/cms-integration-interface

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

## Install

```sh
bun add @reearth/cms-integration-interface
# or
yarn add @reearth/cms-integration-interface
# or
npm install @reearth/cms-integration-interface
```

## Quick start — typed client with default fetch

```ts
import { createClient } from "@reearth/cms-integration-interface";

const cms = createClient({
  baseUrl: "https://cms.example.com/api",
  token: process.env.REEARTH_CMS_TOKEN, // -> Authorization: Bearer <token>
});

const { items } = await cms.ItemFilter({
  path: { projectIdOrAlias: "my-proj", modelIdOrKey: "posts" },
  query: { page: 1, perPage: 20 },
});

const created = await cms.ItemCreate({
  path: { workspaceIdOrAlias: "ws-1", projectIdOrAlias: "my-proj", modelIdOrKey: "posts" },
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
import { buildRequest } from "@reearth/cms-integration-interface";

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
import { createClient, type Transport } from "@reearth/cms-integration-interface";

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
import { createClient, type Transport } from "@reearth/cms-integration-interface";

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
import { createClient, type Transport } from "@reearth/cms-integration-interface";

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
import { buildRequest, fetchTransport } from "@reearth/cms-integration-interface";

function useProjects(workspaceIdOrAlias: string) {
  return useQuery({
    queryKey: ["ProjectFilter", workspaceIdOrAlias],
    queryFn: ({ signal }) => {
      const descriptor = buildRequest("ProjectFilter", { path: { workspaceIdOrAlias } });
      return fetchTransport({ baseUrl: "https://cms.example.com/api", descriptor, signal });
    },
  });
}
```

Or plug axios / ofetch into the `queryFn` the same way.

## Error handling

The default transport throws `HttpError` for non-2xx responses:

```ts
import { HttpError } from "@reearth/cms-integration-interface";

try {
  await cms.ProjectGet({ path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "nope" } });
} catch (e) {
  if (e instanceof HttpError) {
    e.status;     // 404
    e.body;       // parsed JSON or text response
    e.descriptor; // the request that failed
  }
}
```

Custom transports can throw anything they want — e.g. axios throws `AxiosError`.

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
and regenerates both `src/generated/schema.ts` (types) and
`src/generated/operations.ts` (runtime map). Both files are committed.

The generator throws if GitHub is unreachable — run with network access.

## Scripts

| script       | description                                                |
| ------------ | ---------------------------------------------------------- |
| `generate`   | Refetch the spec and regenerate the two `generated/` files |
| `build`      | Emit `.js` + `.d.ts` into `dist/`                          |
| `type-check` | `tsc --noEmit` — verify types compile                      |
| `format`     | Prettier over the whole package                            |

## Package exports

```ts
// Types (from the OpenAPI spec)
import type {
  paths, components, operations,   // raw openapi-typescript output
  Schemas,                          // alias for components["schemas"]
  Project, Item, Asset, GeoJSON, /* ...all 24 named aliases */
  RequestBody, ResponseBody,        // <Op> -> JSON body types
  PathParams, QueryParams, HeaderParams, // <Op> -> param types
} from "@reearth/cms-integration-interface";

// Runtime
import {
  createClient,
  buildRequest,
  fetchTransport,
  HttpError,
  operationsMap,
} from "@reearth/cms-integration-interface";
import type {
  Client,
  ClientOptions,
  Transport,
  TransportContext,
  RequestDescriptor,
  OperationId,
  OperationParams,
  OperationResult,
} from "@reearth/cms-integration-interface";
```

## Source of truth

All types and the operation map descend from
[`reearth-cms/server/schemas/integration/integration.yml`](https://github.com/reearth/reearth-cms/blob/main/server/schemas/integration/integration.yml).
The backend consumes the same spec via `oapi-codegen`, so both sides stay
aligned.
