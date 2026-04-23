# Postman コレクション

TypeScript 型と同時に、Postman Collection v2.1 も OpenAPI 仕様から再生成されます。Postman にインポートするだけで、コードを書かずに 48 のエンドポイントを試せます。

## ダウンロード

<a href="/integration.postman_collection.json" download>
  <strong>integration.postman_collection.json</strong>
</a>

## Postman へのインポート手順

1. Postman を開きます。
2. **File → Import**(あるいは `⌘ + O` / `Ctrl + O`)を選択します。
3. ダウンロードした `integration.postman_collection.json` をダイアログにドラッグ&ドロップして確定します。

OpenAPI のタグに合わせたフォルダ(**Projects**、**Models**、**Items**、**Assets**、**Comments** など)が表示され、それぞれに対応するリクエストが並びます。

## 環境変数の設定

Postman の環境(Environment)を作成し、以下の変数を用意してからリクエストを送信してください:

| 変数名               | 値の例                          |
| -------------------- | ------------------------------- |
| `baseUrl`            | `https://cms.example.com/api`   |
| `bearerToken`        | 発行済みの integration トークン |
| `workspaceIdOrAlias` | `ws-1`                          |
| `projectIdOrAlias`   | `my-proj`                       |

`Authorization: Bearer {{bearerToken}}` をコレクションレベルで設定しておくと、配下のすべてのリクエストに引き継がれます。
