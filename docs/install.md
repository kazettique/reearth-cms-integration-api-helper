# Install

## From npm

::: code-group

```sh [bun]
bun add @reearth/cms-integration-interface
```

```sh [yarn]
yarn add @reearth/cms-integration-interface
```

```sh [npm]
npm install @reearth/cms-integration-interface
```

:::

Requirements: Node **20.11+**, Bun, Deno, or any modern browser / edge runtime
that supports `fetch` and `URLSearchParams`. The package is **ESM-only**
(`"type": "module"`).

## From a CDN

For browser / prototype use, import straight from [esm.sh](https://esm.sh):

```html
<script type="module">
  import { createClient } from "https://esm.sh/@reearth/cms-integration-interface";

  const cms = createClient({
    baseUrl: "https://cms.example.com/api",
    token: "your-integration-token",
  });

  const { projects } = await cms.ProjectFilter({
    path: { workspaceIdOrAlias: "ws-1" },
  });
  console.log(projects);
</script>
```

To pin to a specific version:

```js
import { createClient } from "https://esm.sh/@reearth/cms-integration-interface@0.1.0";
```

::: info Not published yet
The package is not yet on the public npm registry. These commands are the final
install surface — they'll work as soon as the first release is tagged.
:::

## Next

- [Basic usage →](./usage)
- [Download the Postman collection →](./postman)
