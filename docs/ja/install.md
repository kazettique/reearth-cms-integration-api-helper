# インストール

## npm から

::: code-group

```sh [bun]
bun add reearth-cms-integration-api-helper
```

```sh [yarn]
yarn add reearth-cms-integration-api-helper
```

```sh [npm]
npm install reearth-cms-integration-api-helper
```

:::

動作環境: Node **20.11 以上**、Bun、Deno、もしくは `fetch` と
`URLSearchParams` をサポートするモダンブラウザ / エッジランタイム。
このパッケージは **ESM 専用** (`"type": "module"`) です。

## CDN から

ブラウザやプロトタイピング用途では [esm.sh](https://esm.sh) から直接
インポートできます:

```html
<script type="module">
  import { createClient } from "https://esm.sh/reearth-cms-integration-api-helper";

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

特定のバージョンに固定したい場合:

```js
import { createClient } from "https://esm.sh/reearth-cms-integration-api-helper@0.1.0";
```

## 次のステップ

- [基本的な使い方 →](./usage)
- [Postman コレクションをダウンロード →](./postman)
