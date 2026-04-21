# @reearth/cms-integration-interface

TypeScript types for the **reearth-cms Integration REST API**, generated from the
OpenAPI spec at `reearth-cms-3/server/schemas/integration/integration.yml`.

This package ships **types only** — there is no runtime client. Consumers bring their
own fetch / axios / ky and use these types to describe request bodies, response bodies,
path params and query params in a type-safe way.

## Install

From another package in this monorepo:

```jsonc
// package.json
{
  "dependencies": {
    "@reearth/cms-integration-interface": "*"
  }
}
```

## Usage

```ts
import type {
  RequestBody,
  ResponseBody,
  PathParams,
  QueryParams,
  Project,
  Item,
  Schemas,
} from "@reearth/cms-integration-interface";

// Request body for the ProjectCreate operation
type CreateProjectBody = RequestBody<"ProjectCreate">;

// 200-response body for the ProjectFilter operation
type ListProjectsResponse = ResponseBody<"ProjectFilter">;

// Path + query params for ItemFilter
type ItemFilterPath  = PathParams<"ItemFilter">;
type ItemFilterQuery = QueryParams<"ItemFilter">;

// Named schema aliases
const project: Project = { /* ... */ };
const item: Item = { /* ... */ };

// Or pull anything out of the raw components map
type Asset = Schemas["asset"];
```

For advanced use, the raw generated shapes are exported as well:

```ts
import type { paths, components, operations } from "@reearth/cms-integration-interface";
```

## Regenerating types

The generated file at `src/generated/schema.ts` is committed to git. Regenerate it
whenever `integration.yml` changes:

```sh
yarn install
yarn generate
```

Then commit the diff.

## Scripts

| script       | description                                             |
| ------------ | ------------------------------------------------------- |
| `generate`   | Regenerate `src/generated/schema.ts` from the spec      |
| `build`      | Emit `.js` + `.d.ts` into `dist/`                       |
| `type-check` | `tsc --noEmit` — verify types compile                   |
| `format`     | Prettier over the whole package                         |

## Source of truth

All types descend from `reearth-cms-3/server/schemas/integration/integration.yml`.
The backend consumes the same spec via `oapi-codegen` in
`reearth-cms-3/server/internal/adapter/integration/`, so both sides stay aligned.
