/**
 * Per-operation typed client surface.
 *
 * AUTO-GENERATED from https://raw.githubusercontent.com/reearth/reearth-cms/main/server/schemas/integration/integration.yml.
 * Do not edit by hand. Run `bun run generate` to refresh.
 */
/* eslint-disable */
import type { operations } from "./schema";
import type { OperationParams, OperationResult } from "../runtime/types";

// Re-export so the {@link operations.X} JSDoc links below stay resolvable
// after dts-bundle-generator inlines this file.
export type { operations };

export interface ClientMethods {
  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets
   *
   * @see {@link operations.AssetBatchDelete}
   */
  AssetBatchDelete(
    params: OperationParams<"AssetBatchDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetBatchDelete">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments
   *
   * @see {@link operations.AssetCommentCreate}
   */
  AssetCommentCreate(
    params: OperationParams<"AssetCommentCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetCommentCreate">>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments/{commentId}
   *
   * @see {@link operations.AssetCommentDelete}
   */
  AssetCommentDelete(
    params: OperationParams<"AssetCommentDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetCommentDelete">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments
   *
   * @see {@link operations.AssetCommentList}
   */
  AssetCommentList(
    params: OperationParams<"AssetCommentList">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetCommentList">>;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments/{commentId}
   *
   * @see {@link operations.AssetCommentUpdate}
   */
  AssetCommentUpdate(
    params: OperationParams<"AssetCommentUpdate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetCommentUpdate">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{uuid1}/{uuid2}/{filename}
   *
   * @see {@link operations.AssetContentGet}
   */
  AssetContentGet(
    params: OperationParams<"AssetContentGet">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetContentGet">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets
   *
   * @see {@link operations.AssetCreate}
   */
  AssetCreate(
    params: OperationParams<"AssetCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetCreate">>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}
   *
   * @see {@link operations.AssetDelete}
   */
  AssetDelete(
    params: OperationParams<"AssetDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetDelete">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets
   *
   * @see {@link operations.AssetFilter}
   */
  AssetFilter(
    params: OperationParams<"AssetFilter">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetFilter">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}
   *
   * @see {@link operations.AssetGet}
   */
  AssetGet(
    params: OperationParams<"AssetGet">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetGet">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/publish
   *
   * @see {@link operations.AssetPublish}
   */
  AssetPublish(
    params: OperationParams<"AssetPublish">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetPublish">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/unpublish
   *
   * @see {@link operations.AssetUnpublish}
   */
  AssetUnpublish(
    params: OperationParams<"AssetUnpublish">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetUnpublish">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/uploads
   *
   * @see {@link operations.AssetUploadCreate}
   */
  AssetUploadCreate(
    params: OperationParams<"AssetUploadCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"AssetUploadCreate">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields
   *
   * @see {@link operations.FieldCreate}
   */
  FieldCreate(
    params: OperationParams<"FieldCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"FieldCreate">>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields/{fieldIdOrKey}
   *
   * @see {@link operations.FieldDelete}
   */
  FieldDelete(
    params: OperationParams<"FieldDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"FieldDelete">>;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields/{fieldIdOrKey}
   *
   * @see {@link operations.FieldUpdate}
   */
  FieldUpdate(
    params: OperationParams<"FieldUpdate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"FieldUpdate">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups
   *
   * @see {@link operations.GroupCreate}
   */
  GroupCreate(
    params: OperationParams<"GroupCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"GroupCreate">>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}
   *
   * @see {@link operations.GroupDelete}
   */
  GroupDelete(
    params: OperationParams<"GroupDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"GroupDelete">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups
   *
   * @see {@link operations.GroupFilter}
   */
  GroupFilter(
    params: OperationParams<"GroupFilter">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"GroupFilter">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}
   *
   * @see {@link operations.GroupGet}
   */
  GroupGet(
    params: OperationParams<"GroupGet">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"GroupGet">>;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}
   *
   * @see {@link operations.GroupUpdate}
   */
  GroupUpdate(
    params: OperationParams<"GroupUpdate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"GroupUpdate">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments
   *
   * @see {@link operations.ItemCommentCreate}
   */
  ItemCommentCreate(
    params: OperationParams<"ItemCommentCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemCommentCreate">>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments/{commentId}
   *
   * @see {@link operations.ItemCommentDelete}
   */
  ItemCommentDelete(
    params: OperationParams<"ItemCommentDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemCommentDelete">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments
   *
   * @see {@link operations.ItemCommentList}
   */
  ItemCommentList(
    params: OperationParams<"ItemCommentList">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemCommentList">>;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments/{commentId}
   *
   * @see {@link operations.ItemCommentUpdate}
   */
  ItemCommentUpdate(
    params: OperationParams<"ItemCommentUpdate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemCommentUpdate">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items
   *
   * @see {@link operations.ItemCreate}
   */
  ItemCreate(
    params: OperationParams<"ItemCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemCreate">>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}
   *
   * @see {@link operations.ItemDelete}
   */
  ItemDelete(
    params: OperationParams<"ItemDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemDelete">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items
   *
   * @see {@link operations.ItemFilter}
   */
  ItemFilter(
    params: OperationParams<"ItemFilter">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemFilter">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/filter
   *
   * @see {@link operations.ItemFilterPost}
   */
  ItemFilterPost(
    params: OperationParams<"ItemFilterPost">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemFilterPost">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}
   *
   * @see {@link operations.ItemGet}
   */
  ItemGet(
    params: OperationParams<"ItemGet">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemGet">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/publish
   *
   * @see {@link operations.ItemPublish}
   */
  ItemPublish(
    params: OperationParams<"ItemPublish">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemPublish">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items.csv
   *
   * @see {@link operations.ItemsAsCSV}
   */
  ItemsAsCSV(
    params: OperationParams<"ItemsAsCSV">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemsAsCSV">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items.geojson
   *
   * @see {@link operations.ItemsAsGeoJSON}
   */
  ItemsAsGeoJSON(
    params: OperationParams<"ItemsAsGeoJSON">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemsAsGeoJSON">>;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}
   *
   * @see {@link operations.ItemUpdate}
   */
  ItemUpdate(
    params: OperationParams<"ItemUpdate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ItemUpdate">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/metadata_schema.json
   *
   * @see {@link operations.MetadataSchemaByModelAsJSON}
   */
  MetadataSchemaByModelAsJSON(
    params: OperationParams<"MetadataSchemaByModelAsJSON">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"MetadataSchemaByModelAsJSON">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/copy
   *
   * @see {@link operations.ModelCopy}
   */
  ModelCopy(
    params: OperationParams<"ModelCopy">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ModelCopy">>;

  /**
   * POST /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models
   *
   * @see {@link operations.ModelCreate}
   */
  ModelCreate(
    params: OperationParams<"ModelCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ModelCreate">>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}
   *
   * @see {@link operations.ModelDelete}
   */
  ModelDelete(
    params: OperationParams<"ModelDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ModelDelete">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models
   *
   * @see {@link operations.ModelFilter}
   */
  ModelFilter(
    params: OperationParams<"ModelFilter">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ModelFilter">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}
   *
   * @see {@link operations.ModelGet}
   */
  ModelGet(
    params: OperationParams<"ModelGet">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ModelGet">>;

  /**
   * PUT /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/import
   *
   * @see {@link operations.ModelImport}
   */
  ModelImport(
    params: OperationParams<"ModelImport">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ModelImport">>;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}
   *
   * @see {@link operations.ModelUpdate}
   */
  ModelUpdate(
    params: OperationParams<"ModelUpdate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ModelUpdate">>;

  /**
   * POST /{workspaceIdOrAlias}/projects
   *
   * @see {@link operations.ProjectCreate}
   */
  ProjectCreate(
    params: OperationParams<"ProjectCreate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ProjectCreate">>;

  /**
   * DELETE /{workspaceIdOrAlias}/projects/{projectIdOrAlias}
   *
   * @see {@link operations.ProjectDelete}
   */
  ProjectDelete(
    params: OperationParams<"ProjectDelete">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ProjectDelete">>;

  /**
   * GET /{workspaceIdOrAlias}/projects
   *
   * @see {@link operations.ProjectFilter}
   */
  ProjectFilter(
    params: OperationParams<"ProjectFilter">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ProjectFilter">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}
   *
   * @see {@link operations.ProjectGet}
   */
  ProjectGet(
    params: OperationParams<"ProjectGet">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ProjectGet">>;

  /**
   * PATCH /{workspaceIdOrAlias}/projects/{projectIdOrAlias}
   *
   * @see {@link operations.ProjectUpdate}
   */
  ProjectUpdate(
    params: OperationParams<"ProjectUpdate">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"ProjectUpdate">>;

  /**
   * GET /{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/schema.json
   *
   * @see {@link operations.SchemaByModelAsJSON}
   */
  SchemaByModelAsJSON(
    params: OperationParams<"SchemaByModelAsJSON">,
    options?: { signal?: AbortSignal },
  ): Promise<OperationResult<"SchemaByModelAsJSON">>;
}
