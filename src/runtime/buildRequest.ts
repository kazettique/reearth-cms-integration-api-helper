import { operationsMap } from "../generated/operations";

import type { OperationId, OperationParams, RequestDescriptor } from "./types";

type RawParams = {
  path?: Record<string, unknown>;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  body?: unknown;
};

/**
 * Build a transport-agnostic request descriptor for the given operation.
 *
 * The returned object contains the HTTP method, resolved URL, headers, and body
 * — but performs no I/O. Feed it into native fetch, axios, ofetch, tanstack-query,
 * or any other HTTP library.
 *
 * @example
 * const req = buildRequest("ItemCreate", {
 *   path: { projectId, modelIdOrKey },
 *   body: { fields: [] },
 * });
 * await fetch(baseUrl + req.url, {
 *   method: req.method,
 *   headers: req.headers,
 *   body: JSON.stringify(req.body),
 * });
 */
export function buildRequest<Op extends OperationId>(
  operationId: Op,
  params: OperationParams<Op>,
): RequestDescriptor {
  const meta = operationsMap[operationId];
  if (!meta) {
    throw new Error(`Unknown operationId: ${String(operationId)}`);
  }

  const raw = (params ?? {}) as RawParams;
  const pathParams = raw.path ?? {};
  const queryParams = raw.query ?? {};
  const headerParams = raw.header ?? {};
  const body = raw.body;

  const resolvedPath = meta.path.replace(
    /\{([^}]+)\}/g,
    (_match, key: string) => {
      const value = pathParams[key];
      if (value === undefined || value === null) {
        throw new Error(
          `Missing path parameter "${key}" for operation "${String(operationId)}"`,
        );
      }
      return encodeURIComponent(String(value));
    },
  );

  const search = new URLSearchParams();
  for (const [k, v] of Object.entries(queryParams)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) {
      for (const item of v) search.append(k, String(item));
    } else {
      search.append(k, String(v));
    }
  }
  const qs = search.toString();
  const url = qs ? `${resolvedPath}?${qs}` : resolvedPath;

  const headers: Record<string, string> = {};
  for (const [k, v] of Object.entries(headerParams)) {
    if (v === undefined || v === null) continue;
    headers[k] = String(v);
  }
  if (body !== undefined) {
    headers["Content-Type"] ??= "application/json";
  }

  return {
    operationId: String(operationId),
    method: meta.method,
    pathTemplate: meta.path,
    path: resolvedPath,
    url,
    pathParams,
    query: queryParams,
    headers,
    body,
  };
}
