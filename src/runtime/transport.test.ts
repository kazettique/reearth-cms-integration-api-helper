import { afterEach, beforeEach, describe, expect, test } from "bun:test";

import { buildRequest } from "./buildRequest";
import { HttpError, fetchTransport } from "./transport";

const ORIGINAL_FETCH = globalThis.fetch;

function mockFetch(impl: (input: RequestInfo | URL, init?: RequestInit) => Response | Promise<Response>) {
  const calls: Array<{ input: RequestInfo | URL; init?: RequestInit }> = [];
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ input, init });
    return impl(input, init);
  }) as typeof fetch;
  return calls;
}

const descriptor = buildRequest("ProjectGet", {
  path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" },
});

describe("HttpError", () => {
  test("carries status, statusText, body, descriptor", () => {
    const err = new HttpError(404, "Not Found", { message: "nope" }, descriptor);
    expect(err.name).toBe("HttpError");
    expect(err.status).toBe(404);
    expect(err.statusText).toBe("Not Found");
    expect(err.body).toEqual({ message: "nope" });
    expect(err.descriptor).toBe(descriptor);
    expect(err.message).toContain("404");
    expect(err.message).toContain(descriptor.method);
    expect(err.message).toContain(descriptor.path);
  });
});

describe("fetchTransport", () => {
  beforeEach(() => {
    globalThis.fetch = ORIGINAL_FETCH;
  });
  afterEach(() => {
    globalThis.fetch = ORIGINAL_FETCH;
  });

  test("joins baseUrl + descriptor.url with trailing/leading slash handling", async () => {
    const calls = mockFetch(
      () =>
        new Response("{}", {
          status: 200,
          headers: { "content-type": "application/json" },
        }),
    );

    await fetchTransport({ baseUrl: "https://example.com/api/", descriptor });
    expect(calls[0]!.input).toBe("https://example.com/api/ws/projects/p");

    await fetchTransport({ baseUrl: "https://example.com/api", descriptor });
    expect(calls[1]!.input).toBe("https://example.com/api/ws/projects/p");
  });

  test("sends method, headers, and JSON-stringified body", async () => {
    const postDescriptor = buildRequest("ItemCreate", {
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p", modelIdOrKey: "m" },
      body: { fields: [] },
    });
    postDescriptor.headers["Authorization"] = "Bearer t";

    const calls = mockFetch(
      () => new Response(null, { status: 204 }),
    );

    await fetchTransport({ baseUrl: "https://x", descriptor: postDescriptor });

    const init = calls[0]!.init!;
    expect(init.method).toBe("POST");
    expect(init.headers).toEqual({
      "Content-Type": "application/json",
      Authorization: "Bearer t",
    });
    expect(init.body).toBe(JSON.stringify({ fields: [] }));
  });

  test("sends undefined body when descriptor.body is undefined", async () => {
    const calls = mockFetch(() => new Response("{}"));
    await fetchTransport({ baseUrl: "https://x", descriptor });
    expect(calls[0]!.init!.body).toBeUndefined();
  });

  test("parses JSON response body", async () => {
    mockFetch(
      () =>
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        }),
    );
    const result = await fetchTransport<{ ok: boolean }>({
      baseUrl: "https://x",
      descriptor,
    });
    expect(result).toEqual({ ok: true });
  });

  test("falls back to text() for non-JSON content types", async () => {
    mockFetch(
      () =>
        new Response("hello", {
          status: 200,
          headers: { "content-type": "text/plain" },
        }),
    );
    const result = await fetchTransport<string>({
      baseUrl: "https://x",
      descriptor,
    });
    expect(result).toBe("hello");
  });

  test("returns undefined on 204 No Content", async () => {
    mockFetch(() => new Response(null, { status: 204 }));
    const result = await fetchTransport({ baseUrl: "https://x", descriptor });
    expect(result).toBeUndefined();
  });

  test("returns undefined when content-length is 0", async () => {
    mockFetch(
      () =>
        new Response(null, {
          status: 200,
          headers: { "content-length": "0" },
        }),
    );
    const result = await fetchTransport({ baseUrl: "https://x", descriptor });
    expect(result).toBeUndefined();
  });

  test("throws HttpError with parsed payload + descriptor on non-2xx", async () => {
    mockFetch(
      () =>
        new Response(JSON.stringify({ message: "not found" }), {
          status: 404,
          statusText: "Not Found",
          headers: { "content-type": "application/json" },
        }),
    );

    try {
      await fetchTransport({ baseUrl: "https://x", descriptor });
      throw new Error("should have thrown");
    } catch (e) {
      expect(e).toBeInstanceOf(HttpError);
      const err = e as HttpError;
      expect(err.status).toBe(404);
      expect(err.body).toEqual({ message: "not found" });
      expect(err.descriptor).toBe(descriptor);
    }
  });

  test("forwards AbortSignal to fetch", async () => {
    const calls = mockFetch(() => new Response(null, { status: 204 }));
    const controller = new AbortController();
    await fetchTransport({
      baseUrl: "https://x",
      descriptor,
      signal: controller.signal,
    });
    expect(calls[0]!.init!.signal).toBe(controller.signal);
  });
});
