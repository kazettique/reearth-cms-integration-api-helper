import { operationsMap } from "../generated/operations";

import { buildRequest } from "./buildRequest";
import { fetchTransport } from "./transport";
import type {
  ClientOptions,
  OperationId,
  OperationParams,
  OperationResult,
} from "./types";

type CallOptions = { signal?: AbortSignal };

/**
 * Fully-typed client surface: one method per operationId.
 *
 * @example
 * const client = createClient({ baseUrl, token });
 * const item = await client.ItemCreate({
 *   path: { projectId, modelIdOrKey },
 *   body: { fields: [...] },
 * });
 */
export type Client = {
  [Op in OperationId]: (
    params: OperationParams<Op>,
    options?: CallOptions,
  ) => Promise<OperationResult<Op>>;
};

/**
 * Build a typed client for the reearth-cms integration API.
 *
 * By default requests are made with the global `fetch`. Pass a `transport`
 * to delegate to axios, ofetch, ky, or any other HTTP library — see the
 * README for copy-pasteable adapters.
 */
export function createClient(options: ClientOptions): Client {
  const transport = options.transport ?? fetchTransport;

  const invoke = async <Op extends OperationId>(
    op: Op,
    params: OperationParams<Op>,
    call?: CallOptions,
  ): Promise<OperationResult<Op>> => {
    const descriptor = buildRequest(op, params);

    const mergedHeaders: Record<string, string> = {
      ...(options.headers ?? {}),
      ...descriptor.headers,
    };
    if (options.token !== undefined) {
      const token =
        typeof options.token === "function"
          ? await options.token()
          : options.token;
      mergedHeaders["Authorization"] = `Bearer ${token}`;
    }
    descriptor.headers = mergedHeaders;

    return transport<OperationResult<Op>>({
      baseUrl: options.baseUrl,
      descriptor,
      signal: call?.signal,
    });
  };

  const client = {} as Record<string, unknown>;
  for (const op of Object.keys(operationsMap) as OperationId[]) {
    client[op] = (params: OperationParams<OperationId>, call?: CallOptions) =>
      invoke(op, params, call);
  }
  return client as Client;
}
