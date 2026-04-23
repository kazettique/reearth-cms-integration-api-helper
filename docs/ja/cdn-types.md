# プレーン HTML から利用する (CDN + 型)

`<script type="module">` から CDN 経由で読み込みつつ、**VS Code** と
**Monaco** で型ヒントを得る方法です。バンドラーも `npm install` も不要です。

## 素の CDN インポートでは型が効かない理由

実行時は動きます:

```html
<script type="module">
  import { createClient } from "https://esm.sh/reearth-cms-integration-api-helper";
</script>
```

ただしエディタにとって URL インポートは単なる文字列です。`esm.sh` は
`X-TypeScript-Types` ヘッダを返し、**Deno** はこれに従って型を解決しますが、
VS Code と Monaco は従いません。このページでは、このサイトが安定した URL で
公開しているフラットな単一ファイル `.d.ts` をエディタに参照させる方法を
解説します。

## `.d.ts` の配置場所

| 用途                                    | URL                                                                                                                    |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 最新版 (`main` に追随)                  | `https://kazettique.github.io/reearth-cms-integration-api-helper/types/reearth-cms-integration-api-helper.d.ts`        |
| 直近リリース (最新公開バージョンに固定) | `https://kazettique.github.io/reearth-cms-integration-api-helper/types/reearth-cms-integration-api-helper-vX.Y.Z.d.ts` |
| 過去の任意バージョン (unpkg 経由)       | `https://unpkg.com/reearth-cms-integration-api-helper@X.Y.Z/dist/bundled.d.ts`                                         |
| マニフェスト (バージョンメタデータ)     | `https://kazettique.github.io/reearth-cms-integration-api-helper/types/manifest.json`                                  |

長期的にバージョンを固定するなら **unpkg** を推奨します。公開済みの
全バージョンが自動でミラーされます。GH Pages のバージョン付き URL は
デプロイごとに置き換わります。

## VS Code — ローカルの HTML

3 ステップ。`node_modules` は不要です。

### 1. バンドル済み `.d.ts` を一度ダウンロード

```sh
mkdir -p types
curl -L \
  https://kazettique.github.io/reearth-cms-integration-api-helper/types/reearth-cms-integration-api-helper.d.ts \
  -o types/reearth-cms-integration-api-helper.d.ts
```

unpkg でバージョン固定する場合:

```sh
curl -L \
  https://unpkg.com/reearth-cms-integration-api-helper@0.1.0/dist/bundled.d.ts \
  -o types/reearth-cms-integration-api-helper.d.ts
```

### 2. HTML の隣に `jsconfig.json` を配置

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

::: info TypeScript を使う場合
`tsconfig.json` にリネームすればそのまま同じ `paths` が機能します。
:::

### 3. 処理は隣接する `main.js` に書く

```html
<!-- index.html -->
<!doctype html>
<html>
  <body>
    <pre id="out">running…</pre>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

```js
// main.js
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

document.getElementById("out").textContent = JSON.stringify(items, null, 2);
```

`main.js` を開いて `createClient` や `cms.ItemFilter` にホバーしてみて
ください。VS Code の JS 言語サービスが `paths` マッピングを介して CDN URL
を ローカルの `.d.ts` に解決するため、補完には 48 個すべての operation が
表示されます。

::: warning なぜインラインの `<script>` ではなく外部 `main.js` なのか
VS Code の HTML 内蔵 JS 言語サービスは `<script>` ブロックごとに独立した
簡易 TS プロジェクトを動かすため、`jsconfig.json` の `paths` や ambient
な `declare module` 宣言を継承しません。結果として、インラインの
`<script type="module">` 内で URL インポートすると型は `any` になります。
コードを `main.js` に分け、`<script type="module" src="./main.js">` で
読み込むと、JS 言語サービスが `jsconfig` をそのまま適用できるため、この
制限を回避できます。
:::

## Monaco (Web エディタ)

エディタ初期化時にバンドル済み `.d.ts` を一度 fetch し、extra lib と
CDN URL のエイリアスを登録します。

```ts
import * as monaco from "monaco-editor";

const DTS_URL =
  "https://kazettique.github.io/reearth-cms-integration-api-helper/types/reearth-cms-integration-api-helper.d.ts";

const dts = await fetch(DTS_URL).then((r) => r.text());

// 1. パッケージを ambient module として登録
monaco.languages.typescript.typescriptDefaults.addExtraLib(
  dts,
  "file:///node_modules/reearth-cms-integration-api-helper/index.d.ts",
);

// 2. 利用者がインポートする CDN URL をエイリアスし、
//    `import ... from "https://esm.sh/..."` が同じ型を解決できるようにする
monaco.languages.typescript.typescriptDefaults.addExtraLib(
  `declare module "https://esm.sh/reearth-cms-integration-api-helper" {
     export * from "reearth-cms-integration-api-helper";
   }
   declare module "https://unpkg.com/reearth-cms-integration-api-helper/dist/bundled.d.ts" {
     export * from "reearth-cms-integration-api-helper";
   }`,
  "file:///cdn-alias.d.ts",
);

// 3. コンパイラオプション — URL インポートと最新 ES を許可
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.ESNext,
  module: monaco.languages.typescript.ModuleKind.ESNext,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
  allowNonTsExtensions: true,
  allowSyntheticDefaultImports: true,
});
```

Monaco の TypeScript **Worker** を通常の手順(`MonacoEnvironment.getWorker`)
で登録してください。Worker が無いと `addExtraLib` は何にも効きません。
標準的な手順は
[Monaco integration guide](https://github.com/microsoft/monaco-editor/tree/main/docs)
を参照してください。

## `manifest.json`

現在のバージョンをプログラムから解決したい場合(例: Web エディタの
ステータスバーに "pinned to vX.Y.Z" と表示するなど)、マニフェストを
取得します:

```ts
const manifest = await fetch(
  "https://kazettique.github.io/reearth-cms-integration-api-helper/types/manifest.json",
).then((r) => r.json());

// { name, version, latest, versioned, bundledAt }
```

## トラブルシューティング

- **VS Code で型が出ない.** `jsconfig.json`(または `tsconfig.json`)が
  VS Code がワークスペースとして開いているルートフォルダに置かれていることを
  確認してください。サブフォルダに埋もれていると機能しません。作成後は
  VS Code ウィンドウを再読み込みしてください。
- **Monaco で `ItemFilter` が `any` として扱われる.** TypeScript Worker が
  登録されていません。`MonacoEnvironment.getWorker` が `typescript` /
  `javascript` 言語のモデルに対して TS Worker を返していることを確認して
  ください。
- **型が古く感じる.** GH Pages の最新 `.d.ts` はタグ付きリリースごとに
  更新されます。さらに最新が欲しい場合はリポジトリの `dist/` に出力される
  ブランチ追随バンドルを参照してください。
