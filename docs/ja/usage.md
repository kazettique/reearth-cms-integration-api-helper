# 基本的な使い方

このパッケージは、生成された型の上に 2 つのレイヤーを提供します:

1. `createClient()` — `operationId` ごとにメソッドを持つ型付きクライアント。デフォルトではネイティブ fetch を使います。
2. `buildRequest()` — `{ method, url, headers, body }` というプレーンなディスクリプタを返します。**任意の** HTTP ライブラリに渡せます。

## 型付きクライアント

```ts
import { createClient } from "reearth-cms-integration-api-helper";

const cms = createClient({
  baseUrl: "https://cms.example.com/api",
  token: process.env.REEARTH_CMS_TOKEN, // → Authorization: Bearer <token>
});

// GET — モデル配下のアイテム一覧を取得
const { items } = await cms.ItemFilter({
  path: { projectIdOrAlias: "my-proj", modelIdOrKey: "posts" },
  query: { page: 1, perPage: 20 },
});

// POST — アイテムを作成
const created = await cms.ItemCreate({
  path: {
    workspaceIdOrAlias: "ws-1",
    projectIdOrAlias: "my-proj",
    modelIdOrKey: "posts",
  },
  body: { fields: [{ key: "title", value: "こんにちは" }] },
});
```

OpenAPI 仕様に定義されたすべての `operationId`(全 48 種)がクライアントの
メソッドとして利用できます。`cms.` と入力すればエディタの補完に一覧が表示
されます。

## HTTP ライブラリを差し替える

`createClient` は `transport` オプションを受け取ります。リクエスト
ディスクリプタを受け取り、パース済みデータを返す単一の関数です。型の
快適さはそのままに、既存の HTTP スタック(リトライやインターセプターなど)を
活かせます。

```ts
import axios from "axios";
import { createClient, type Transport } from "reearth-cms-integration-api-helper";

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

**ofetch**、**ky**、**@tanstack/react-query** 用のアダプタはパッケージの
README を参照してください。いずれも 3〜5 行で実装できます。

## ライブラリ非依存のディスクリプタ

クライアント抽象を挟まず URL とメソッドだけ欲しい場合:

```ts
import { buildRequest } from "reearth-cms-integration-api-helper";

const req = buildRequest("ItemCreate", {
  path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p", modelIdOrKey: "m" },
  body: { fields: [] },
});
// req = { method: "POST", url: "/ws/projects/p/models/m/items", headers: {...}, body: {...} }

// 任意のライブラリで利用可能:
await fetch(baseUrl + req.url, {
  method: req.method,
  headers: req.headers,
  body: JSON.stringify(req.body),
});
```

## JavaScript から使う

TypeScript は必須ではありません。`.js` / `.mjs` ファイルの先頭に
`// @ts-check` を記述すると、同梱の `.d.ts` によってエディタが型チェック
してくれます:

```js
// @ts-check
import { createClient } from "reearth-cms-integration-api-helper";

const cms = createClient({
  baseUrl: "https://cms.example.com/api",
  token: process.env.REEARTH_CMS_TOKEN,
});
```

## 次のステップ

- [Postman コレクションをダウンロード →](./postman)
