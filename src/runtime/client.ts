import type { ClientMethods } from "../generated/client";
import { operationsMap } from "../generated/operations";

import { buildRequest } from "./buildRequest";
import { fetchTransport } from "./transport";
import type {
  ClientOptions,
  OperationId,
  OperationParams,
  OperationResult,
} from "./types";
import { runVersionCheckOnce } from "./version";

type CallOptions = { signal?: AbortSignal };

/**
 * Fully-typed client surface: one method per operationId.
 *
 * Each method is declared explicitly in the generated `ClientMethods`
 * interface so editors can land on a specific line when the user hits
 * "Go to Definition" on e.g. `client.ProjectGet`.
 *
 * @example
 * const client = createClient({ baseUrl, token });
 * const item = await client.ItemCreate({
 *   path: { projectId, modelIdOrKey },
 *   body: { fields: [...] },
 * });
 */
export type Client = ClientMethods;

/**
 * Build a typed client for the reearth-cms integration API.
 *
 * By default requests are made with the global `fetch`. Pass a `transport`
 * to delegate to axios, ofetch, ky, or any other HTTP library — see the
 * README for copy-pasteable adapters.
 */
export function createClient(options: ClientOptions): Client {
  const transport = options.transport ?? fetchTransport;

  if (!options.skipVersionCheck) {
    // Fire-and-forget: one HEAD per process, never blocks real requests.
    void runVersionCheckOnce();
  }

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
  return client as unknown as Client;
}
