# Basic usage

The package ships two layers on top of the generated types:

1. `createClient()` — typed client, one method per `operationId`, with the
   default native-fetch transport.
2. `buildRequest()` — returns a plain `{ method, url, headers, body }`
   descriptor you can feed into **any** HTTP library.

## Typed client

```ts
import { createClient } from "@reearth/cms-integration-interface";

const cms = createClient({
  baseUrl: "https://cms.example.com/api",
  token: process.env.REEARTH_CMS_TOKEN, // → Authorization: Bearer <token>
});

// GET — list items in a model
const { items } = await cms.ItemFilter({
  path: { projectIdOrAlias: "my-proj", modelIdOrKey: "posts" },
  query: { page: 1, perPage: 20 },
});

// POST — create an item
const created = await cms.ItemCreate({
  path: {
    workspaceIdOrAlias: "ws-1",
    projectIdOrAlias: "my-proj",
    modelIdOrKey: "posts",
  },
  body: { fields: [{ key: "title", value: "Hello" }] },
});
```

Every `operationId` in the OpenAPI spec is a method on the client (48 in
total). Your editor's autocomplete will list them when you type `cms.`.

## Swap in another HTTP library

`createClient` accepts a custom `transport` — a single function that receives
a request descriptor and returns the parsed data. This keeps the typed
ergonomics while letting your existing stack handle retries, interceptors, etc.

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

Adapters for **ofetch**, **ky**, and **@tanstack/react-query** live in the
package README — they're three-to-five lines each.

## Library-agnostic descriptor

When you just want the URL and method without any client abstraction:

```ts
import { buildRequest } from "@reearth/cms-integration-interface";

const req = buildRequest("ItemCreate", {
  path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p", modelIdOrKey: "m" },
  body: { fields: [] },
});
// req = { method: "POST", url: "/ws/projects/p/models/m/items", headers: {...}, body: {...} }

// Use with anything:
await fetch(baseUrl + req.url, {
  method: req.method,
  headers: req.headers,
  body: JSON.stringify(req.body),
});
```

## Using from JavaScript

No TypeScript required. Add `// @ts-check` at the top of a `.js` / `.mjs` file
and your editor will type-check against the shipped `.d.ts`:

```js
// @ts-check
import { createClient } from "@reearth/cms-integration-interface";

const cms = createClient({
  baseUrl: "https://cms.example.com/api",
  token: process.env.REEARTH_CMS_TOKEN,
});
```

## Next

- [Download the Postman collection →](./postman)
