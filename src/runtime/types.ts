import type { operations } from "../generated/schema";

/** Every operationId defined in the OpenAPI spec. */
export type OperationId = keyof operations;

type ParamsOf<Op extends OperationId> = operations[Op] extends {
  parameters: infer P;
}
  ? P
  : never;

type JsonBodyOf<Op extends OperationId> =
  operations[Op] extends { requestBody: { content: { "application/json": infer B } } }
    ? { body: B }
    : operations[Op] extends { requestBody?: { content: { "application/json": infer B } } }
      ? { body?: B }
      : { body?: never };

type PickDefined<T, K extends PropertyKey> = T extends Record<K, infer V>
  ? [V] extends [never]
    ? object
    : { [P in K]: V }
  : object;

type PickOptional<T, K extends PropertyKey> = T extends Partial<Record<K, infer V>>
  ? [V] extends [never]
    ? object
    : { [P in K]?: V }
  : object;

/**
 * Typed parameters for a given operation.
 * Only includes the fields the operation actually accepts.
 *
 * @example
 * type P = OperationParams<"ItemCreate">;
 * //   ^? { path: { projectId: string; modelIdOrKey: string }, body: { fields?: ... } }
 */
export type OperationParams<Op extends OperationId> = PickDefined<
  ParamsOf<Op>,
  "path"
> &
  PickOptional<ParamsOf<Op>, "query"> &
  PickOptional<ParamsOf<Op>, "header"> &
  JsonBodyOf<Op>;

/** 200-response JSON body for an operation, or `void` if the operation has no JSON body. */
export type OperationResult<Op extends OperationId> = operations[Op] extends {
  responses: { 200: { content: { "application/json": infer R } } };
}
  ? R
  : void;

/** Plain description of an outgoing HTTP request — no library-specific types. */
export interface RequestDescriptor {
  /** The operationId this request was built from. */
  operationId: string;
  /** HTTP method in upper case, e.g. "GET". */
  method: string;
  /** Raw path template, e.g. "/{workspaceIdOrAlias}/projects". */
  pathTemplate: string;
  /** Resolved path with `{placeholders}` substituted (no query string), e.g. "/ws-123/projects". */
  path: string;
  /** Resolved path + query string, relative to the baseUrl. */
  url: string;
  /** Path parameters as provided by the caller. */
  pathParams: Record<string, unknown>;
  /** Query parameters as provided by the caller (undefined values omitted). */
  query: Record<string, unknown>;
  /** Request headers to send. `Content-Type: application/json` is set when a body is present. */
  headers: Record<string, string>;
  /** JSON-serializable body, or `undefined` if the request has no body. */
  body?: unknown;
}

/** Context handed to a Transport when invoking a request. */
export interface TransportContext {
  baseUrl: string;
  descriptor: RequestDescriptor;
  signal?: AbortSignal;
}

/**
 * Transport function — receives a request descriptor and returns the parsed response data.
 * Swap this out to delegate to axios, ofetch, ky, or any other HTTP library.
 */
export type Transport = <T>(ctx: TransportContext) => Promise<T>;

/** Options for `createClient()`. */
export interface ClientOptions {
  /** Base URL of the integration API, e.g. "https://cms.example.com/api". */
  baseUrl: string;
  /**
   * Bearer token, either a static string or a (possibly async) function returning one.
   * When set, each request gets `Authorization: Bearer <token>`.
   */
  token?: string | (() => string | Promise<string>);
  /** Default headers merged into every request (request-specific headers take precedence). */
  headers?: Record<string, string>;
  /** Custom transport. Defaults to a native-fetch implementation. */
  transport?: Transport;
}
