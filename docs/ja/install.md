# インストール

## npm から

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

動作環境: Node **20.11 以上**、Bun、Deno、もしくは `fetch` と
`URLSearchParams` をサポートするモダンブラウザ / エッジランタイム。
このパッケージは **ESM 専用** (`"type": "module"`) です。

## CDN から

ブラウザやプロトタイピング用途では [esm.sh](https://esm.sh) から直接
インポートできます:

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

特定のバージョンに固定したい場合:

```js
import { createClient } from "https://esm.sh/@reearth/cms-integration-interface@0.1.0";
```

::: info まだ公開されていません
このパッケージは npm レジストリにはまだ公開されていません。上記のコマンドは
最終的なインストール方法で、最初のリリースが作成され次第そのまま利用できます。
:::

## 次のステップ

- [基本的な使い方 →](./usage)
- [Postman コレクションをダウンロード →](./postman)
