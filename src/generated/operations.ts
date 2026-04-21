/**
 * Runtime map of every operationId to its HTTP method and path template.
 *
 * AUTO-GENERATED from https://raw.githubusercontent.com/reearth/reearth-cms/main/server/schemas/integration/integration.yml.
 * Do not edit by hand. Run `bun run generate` to refresh.
 */
/* eslint-disable */
export const operationsMap = {
  AssetBatchDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets",
  },
  AssetCommentCreate: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments",
  },
  AssetCommentDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments/{commentId}",
  },
  AssetCommentList: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments",
  },
  AssetCommentUpdate: {
    method: "PATCH",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments/{commentId}",
  },
  AssetContentGet: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{uuid1}/{uuid2}/{filename}",
  },
  AssetCreate: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets",
  },
  AssetDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}",
  },
  AssetFilter: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets",
  },
  AssetGet: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}",
  },
  AssetPublish: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/publish",
  },
  AssetUnpublish: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/unpublish",
  },
  AssetUploadCreate: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/uploads",
  },
  FieldCreate: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields",
  },
  FieldDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields/{fieldIdOrKey}",
  },
  FieldUpdate: {
    method: "PATCH",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields/{fieldIdOrKey}",
  },
  GroupCreate: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups",
  },
  GroupDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}",
  },
  GroupFilter: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups",
  },
  GroupGet: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}",
  },
  GroupUpdate: {
    method: "PATCH",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}",
  },
  ItemCommentCreate: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments",
  },
  ItemCommentDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments/{commentId}",
  },
  ItemCommentList: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments",
  },
  ItemCommentUpdate: {
    method: "PATCH",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments/{commentId}",
  },
  ItemCreate: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items",
  },
  ItemDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}",
  },
  ItemFilter: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items",
  },
  ItemFilterPost: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/filter",
  },
  ItemGet: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}",
  },
  ItemPublish: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/publish",
  },
  ItemsAsCSV: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items.csv",
  },
  ItemsAsGeoJSON: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items.geojson",
  },
  ItemUpdate: {
    method: "PATCH",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}",
  },
  MetadataSchemaByModelAsJSON: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/metadata_schema.json",
  },
  ModelCopy: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/copy",
  },
  ModelCreate: {
    method: "POST",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models",
  },
  ModelDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}",
  },
  ModelFilter: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models",
  },
  ModelGet: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}",
  },
  ModelImport: {
    method: "PUT",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/import",
  },
  ModelUpdate: {
    method: "PATCH",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}",
  },
  ProjectCreate: { method: "POST", path: "/{workspaceIdOrAlias}/projects" },
  ProjectDelete: {
    method: "DELETE",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}",
  },
  ProjectFilter: { method: "GET", path: "/{workspaceIdOrAlias}/projects" },
  ProjectGet: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}",
  },
  ProjectUpdate: {
    method: "PATCH",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}",
  },
  SchemaByModelAsJSON: {
    method: "GET",
    path: "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/schema.json",
  },
} as const;

export type OperationsMap = typeof operationsMap;
