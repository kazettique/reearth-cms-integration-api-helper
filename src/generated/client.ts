/**
 * Per-operation typed client surface.
 *
 * AUTO-GENERATED from https://raw.githubusercontent.com/reearth/reearth-cms/main/server/schemas/integration/integration.yml.
 * Do not edit by hand. Run `bun run generate` to refresh.
 */
/* eslint-disable */
import type { operations } from "./schema";

// Re-export so the {@link operations.X} JSDoc links below stay resolvable
// after dts-bundle-generator inlines this file.
export type { operations };

export interface ClientMethods {
  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets
   *
   * @see {@link operations.AssetBatchDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetBatchDelete(
    params: {
      path: operations["AssetBatchDelete"]["parameters"]["path"];
      body: NonNullable<
        operations["AssetBatchDelete"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetBatchDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments
   *
   * @see {@link operations.AssetCommentCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetCommentCreate(
    params: {
      path: operations["AssetCommentCreate"]["parameters"]["path"];
      body: NonNullable<
        operations["AssetCommentCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetCommentCreate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments/{commentId}
   *
   * @see {@link operations.AssetCommentDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetCommentDelete(
    params: {
      path: operations["AssetCommentDelete"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetCommentDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments
   *
   * @see {@link operations.AssetCommentList} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetCommentList(
    params: {
      path: operations["AssetCommentList"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetCommentList"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments/{commentId}
   *
   * @see {@link operations.AssetCommentUpdate} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetCommentUpdate(
    params: {
      path: operations["AssetCommentUpdate"]["parameters"]["path"];
      body: NonNullable<
        operations["AssetCommentUpdate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetCommentUpdate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{uuid1}/{uuid2}/{filename}
   *
   * @see {@link operations.AssetContentGet} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetContentGet(
    params: {
      path: operations["AssetContentGet"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<void>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets
   *
   * @see {@link operations.AssetCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetCreate(
    params: {
      path: operations["AssetCreate"]["parameters"]["path"];
      body?: NonNullable<
        operations["AssetCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetCreate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}
   *
   * @see {@link operations.AssetDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetDelete(
    params: {
      path: operations["AssetDelete"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets
   *
   * @see {@link operations.AssetFilter} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetFilter(
    params: {
      path: operations["AssetFilter"]["parameters"]["path"];
      query?: operations["AssetFilter"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetFilter"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}
   *
   * @see {@link operations.AssetGet} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetGet(
    params: {
      path: operations["AssetGet"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetGet"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/publish
   *
   * @see {@link operations.AssetPublish} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetPublish(
    params: {
      path: operations["AssetPublish"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetPublish"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/unpublish
   *
   * @see {@link operations.AssetUnpublish} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetUnpublish(
    params: {
      path: operations["AssetUnpublish"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetUnpublish"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/uploads
   *
   * @see {@link operations.AssetUploadCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  AssetUploadCreate(
    params: {
      path: operations["AssetUploadCreate"]["parameters"]["path"];
      body?: NonNullable<
        operations["AssetUploadCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["AssetUploadCreate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields
   *
   * @see {@link operations.FieldCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  FieldCreate(
    params: {
      path: operations["FieldCreate"]["parameters"]["path"];
      body: NonNullable<
        operations["FieldCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["FieldCreate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields/{fieldIdOrKey}
   *
   * @see {@link operations.FieldDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  FieldDelete(
    params: {
      path: operations["FieldDelete"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["FieldDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields/{fieldIdOrKey}
   *
   * @see {@link operations.FieldUpdate} for the raw OpenAPI operation (response codes, schemas).
   */
  FieldUpdate(
    params: {
      path: operations["FieldUpdate"]["parameters"]["path"];
      body: NonNullable<
        operations["FieldUpdate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["FieldUpdate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups
   *
   * @see {@link operations.GroupCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  GroupCreate(
    params: {
      path: operations["GroupCreate"]["parameters"]["path"];
      query?: operations["GroupCreate"]["parameters"]["query"];
      body: NonNullable<
        operations["GroupCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<void>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}
   *
   * @see {@link operations.GroupDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  GroupDelete(
    params: {
      path: operations["GroupDelete"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["GroupDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups
   *
   * @see {@link operations.GroupFilter} for the raw OpenAPI operation (response codes, schemas).
   */
  GroupFilter(
    params: {
      path: operations["GroupFilter"]["parameters"]["path"];
      query?: operations["GroupFilter"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["GroupFilter"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}
   *
   * @see {@link operations.GroupGet} for the raw OpenAPI operation (response codes, schemas).
   */
  GroupGet(
    params: {
      path: operations["GroupGet"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["GroupGet"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}
   *
   * @see {@link operations.GroupUpdate} for the raw OpenAPI operation (response codes, schemas).
   */
  GroupUpdate(
    params: {
      path: operations["GroupUpdate"]["parameters"]["path"];
      body: NonNullable<
        operations["GroupUpdate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["GroupUpdate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments
   *
   * @see {@link operations.ItemCommentCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemCommentCreate(
    params: {
      path: operations["ItemCommentCreate"]["parameters"]["path"];
      body: NonNullable<
        operations["ItemCommentCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemCommentCreate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments/{commentId}
   *
   * @see {@link operations.ItemCommentDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemCommentDelete(
    params: {
      path: operations["ItemCommentDelete"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemCommentDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments
   *
   * @see {@link operations.ItemCommentList} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemCommentList(
    params: {
      path: operations["ItemCommentList"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemCommentList"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments/{commentId}
   *
   * @see {@link operations.ItemCommentUpdate} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemCommentUpdate(
    params: {
      path: operations["ItemCommentUpdate"]["parameters"]["path"];
      body: NonNullable<
        operations["ItemCommentUpdate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemCommentUpdate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items
   *
   * @see {@link operations.ItemCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemCreate(
    params: {
      path: operations["ItemCreate"]["parameters"]["path"];
      body: NonNullable<
        operations["ItemCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemCreate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}
   *
   * @see {@link operations.ItemDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemDelete(
    params: {
      path: operations["ItemDelete"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items
   *
   * @see {@link operations.ItemFilter} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemFilter(
    params: {
      path: operations["ItemFilter"]["parameters"]["path"];
      query?: operations["ItemFilter"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemFilter"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/filter
   *
   * @see {@link operations.ItemFilterPost} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemFilterPost(
    params: {
      path: operations["ItemFilterPost"]["parameters"]["path"];
      query?: operations["ItemFilterPost"]["parameters"]["query"];
      body: NonNullable<
        operations["ItemFilterPost"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemFilterPost"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}
   *
   * @see {@link operations.ItemGet} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemGet(
    params: {
      path: operations["ItemGet"]["parameters"]["path"];
      query?: operations["ItemGet"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemGet"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/publish
   *
   * @see {@link operations.ItemPublish} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemPublish(
    params: {
      path: operations["ItemPublish"]["parameters"]["path"];
      query?: operations["ItemPublish"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemPublish"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items.csv
   *
   * @see {@link operations.ItemsAsCSV} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemsAsCSV(
    params: {
      path: operations["ItemsAsCSV"]["parameters"]["path"];
      query?: operations["ItemsAsCSV"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<void>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items.geojson
   *
   * @see {@link operations.ItemsAsGeoJSON} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemsAsGeoJSON(
    params: {
      path: operations["ItemsAsGeoJSON"]["parameters"]["path"];
      query?: operations["ItemsAsGeoJSON"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<void>;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}
   *
   * @see {@link operations.ItemUpdate} for the raw OpenAPI operation (response codes, schemas).
   */
  ItemUpdate(
    params: {
      path: operations["ItemUpdate"]["parameters"]["path"];
      body: NonNullable<
        operations["ItemUpdate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ItemUpdate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/metadata_schema.json
   *
   * @see {@link operations.MetadataSchemaByModelAsJSON} for the raw OpenAPI operation (response codes, schemas).
   */
  MetadataSchemaByModelAsJSON(
    params: {
      path: operations["MetadataSchemaByModelAsJSON"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["MetadataSchemaByModelAsJSON"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/copy
   *
   * @see {@link operations.ModelCopy} for the raw OpenAPI operation (response codes, schemas).
   */
  ModelCopy(
    params: {
      path: operations["ModelCopy"]["parameters"]["path"];
      body?: NonNullable<
        operations["ModelCopy"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ModelCopy"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models
   *
   * @see {@link operations.ModelCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  ModelCreate(
    params: {
      path: operations["ModelCreate"]["parameters"]["path"];
      query?: operations["ModelCreate"]["parameters"]["query"];
      body: NonNullable<
        operations["ModelCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ModelCreate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}
   *
   * @see {@link operations.ModelDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  ModelDelete(
    params: {
      path: operations["ModelDelete"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ModelDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models
   *
   * @see {@link operations.ModelFilter} for the raw OpenAPI operation (response codes, schemas).
   */
  ModelFilter(
    params: {
      path: operations["ModelFilter"]["parameters"]["path"];
      query?: operations["ModelFilter"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ModelFilter"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}
   *
   * @see {@link operations.ModelGet} for the raw OpenAPI operation (response codes, schemas).
   */
  ModelGet(
    params: {
      path: operations["ModelGet"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ModelGet"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * PUT /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/import
   *
   * @see {@link operations.ModelImport} for the raw OpenAPI operation (response codes, schemas).
   */
  ModelImport(
    params: {
      path: operations["ModelImport"]["parameters"]["path"];
      body: NonNullable<
        operations["ModelImport"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ModelImport"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}
   *
   * @see {@link operations.ModelUpdate} for the raw OpenAPI operation (response codes, schemas).
   */
  ModelUpdate(
    params: {
      path: operations["ModelUpdate"]["parameters"]["path"];
      body: NonNullable<
        operations["ModelUpdate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ModelUpdate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * POST /{workspaceIdOrAlias}/projects
   *
   * @see {@link operations.ProjectCreate} for the raw OpenAPI operation (response codes, schemas).
   */
  ProjectCreate(
    params: {
      path: operations["ProjectCreate"]["parameters"]["path"];
      query?: operations["ProjectCreate"]["parameters"]["query"];
      body: NonNullable<
        operations["ProjectCreate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<void>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}
   *
   * @see {@link operations.ProjectDelete} for the raw OpenAPI operation (response codes, schemas).
   */
  ProjectDelete(
    params: {
      path: operations["ProjectDelete"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ProjectDelete"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects
   *
   * @see {@link operations.ProjectFilter} for the raw OpenAPI operation (response codes, schemas).
   */
  ProjectFilter(
    params: {
      path: operations["ProjectFilter"]["parameters"]["path"];
      query?: operations["ProjectFilter"]["parameters"]["query"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ProjectFilter"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}
   *
   * @see {@link operations.ProjectGet} for the raw OpenAPI operation (response codes, schemas).
   */
  ProjectGet(
    params: {
      path: operations["ProjectGet"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ProjectGet"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}
   *
   * @see {@link operations.ProjectUpdate} for the raw OpenAPI operation (response codes, schemas).
   */
  ProjectUpdate(
    params: {
      path: operations["ProjectUpdate"]["parameters"]["path"];
      body: NonNullable<
        operations["ProjectUpdate"]["requestBody"]
      >["content"]["application/json"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["ProjectUpdate"]["responses"][200]["content"]["application/json"]
  >;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/schema.json
   *
   * @see {@link operations.SchemaByModelAsJSON} for the raw OpenAPI operation (response codes, schemas).
   */
  SchemaByModelAsJSON(
    params: {
      path: operations["SchemaByModelAsJSON"]["parameters"]["path"];
    },
    options?: { signal?: AbortSignal },
  ): Promise<
    operations["SchemaByModelAsJSON"]["responses"][200]["content"]["application/json"]
  >;
}
