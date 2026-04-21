import type { RequestDescriptor, Transport, TransportContext } from "./types";

/** Thrown by the default fetch transport for non-2xx responses. */
export class HttpError extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly body: unknown;
  public readonly descriptor: RequestDescriptor;

  constructor(
    status: number,
    statusText: string,
    body: unknown,
    descriptor: RequestDescriptor,
  ) {
    super(`HTTP ${status} ${statusText} — ${descriptor.method} ${descriptor.path}`);
    this.name = "HttpError";
    this.status = status;
    this.statusText = statusText;
    this.body = body;
    this.descriptor = descriptor;
  }
}

function joinUrl(baseUrl: string, path: string): string {
  const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const rel = path.startsWith("/") ? path : `/${path}`;
  return `${base}${rel}`;
}

async function parseBody(response: Response): Promise<unknown> {
  if (response.status === 204 || response.headers.get("content-length") === "0") {
    return undefined;
  }
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

/**
 * Default transport backed by the global `fetch`. Throws `HttpError` on non-2xx responses.
 * Works in modern browsers, Node 18+, Bun, Deno, and edge runtimes.
 */
export const fetchTransport: Transport = async <T>(ctx: TransportContext) => {
  const { baseUrl, descriptor, signal } = ctx;
  const response = await fetch(joinUrl(baseUrl, descriptor.url), {
    method: descriptor.method,
    headers: descriptor.headers,
    body:
      descriptor.body === undefined
        ? undefined
        : JSON.stringify(descriptor.body),
    signal,
  });

  const payload = await parseBody(response);
  if (!response.ok) {
    throw new HttpError(response.status, response.statusText, payload, descriptor);
  }
  return payload as T;
};
