import type { components, operations } from "./generated/schema";

export type { paths, components, operations } from "./generated/schema";
export type { ClientMethods } from "./generated/client";
export { operationsMap } from "./generated/operations";
export type { OperationsMap } from "./generated/operations";

/** The full `components.schemas` map from the OpenAPI spec. */
export type Schemas = components["schemas"];

export type Accessibility = Schemas["accessibility"];
export type ApiKey = Schemas["apiKey"];
export type Asset = Schemas["asset"];
export type AssetEmbedding = Schemas["assetEmbedding"];
export type Comment = Schemas["comment"];
export type Condition = Schemas["condition"];
export type Field = Schemas["field"];
export type FieldSelector = Schemas["fieldSelector"];
export type File = Schemas["file"];
export type GeoJSON = Schemas["GeoJSON"];
export type Group = Schemas["group"];
export type Item = Schemas["item"];
export type JSONSchema = Schemas["JSONSchema"];
export type Model = Schemas["model"];
export type Project = Schemas["project"];
export type ProjectRequestRole = Schemas["projectRequestRole"];
export type PublicationSettings = Schemas["publicationSettings"];
export type RefOrVersion = Schemas["refOrVersion"];
export type Schema = Schemas["schema"];
export type SchemaField = Schemas["schemaField"];
export type TagResponse = Schemas["tagResponse"];
export type ValueType = Schemas["valueType"];
export type Version = Schemas["version"];
export type VersionedItem = Schemas["versionedItem"];

type JsonContent<T> = T extends { content: { "application/json": infer B } }
  ? B
  : never;

/**
 * The JSON request body for a given `operationId`.
 * Resolves to `never` for operations without a JSON body.
 */
export type RequestBody<Op extends keyof operations> = operations[Op] extends {
  requestBody?: infer R;
}
  ? R extends { content: { "application/json": infer B } }
    ? B
    : never
  : never;

/**
 * The 200-response JSON body for a given `operationId`.
 * Resolves to `never` for operations without a JSON 200 response.
 */
export type ResponseBody<Op extends keyof operations> = operations[Op] extends {
  responses: infer R;
}
  ? R extends { 200: infer Ok }
    ? JsonContent<Ok>
    : never
  : never;

/** Path parameters for a given `operationId`. */
export type PathParams<Op extends keyof operations> = operations[Op] extends {
  parameters: { path: infer P };
}
  ? P
  : never;

/** Query parameters for a given `operationId`. */
export type QueryParams<Op extends keyof operations> = operations[Op] extends {
  parameters: { query: infer Q };
}
  ? Q
  : never;

/** Header parameters for a given `operationId`. */
export type HeaderParams<Op extends keyof operations> = operations[Op] extends {
  parameters: { header: infer H };
}
  ? H
  : never;

// --- Runtime: transport-agnostic request builders + pluggable client -------

export { buildRequest } from "./runtime/buildRequest";
export { createClient, type Client } from "./runtime/client";
export { fetchTransport, HttpError } from "./runtime/transport";
export {
  checkSpecVersion,
  runVersionCheckOnce,
  GENERATED_AT,
  SPEC_CONTENT_HASH,
  SPEC_URL,
} from "./runtime/version";
export type { SpecVersionResult } from "./runtime/version";
export type {
  ClientOptions,
  OperationId,
  OperationParams,
  OperationResult,
  Prettify,
  RequestDescriptor,
  Transport,
  TransportContext,
} from "./runtime/types";
