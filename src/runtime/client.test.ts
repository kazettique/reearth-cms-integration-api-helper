import { describe, expect, test } from "bun:test";

import { operationsMap } from "../generated/operations";

import { createClient } from "./client";
import type { Transport, TransportContext } from "./types";

function recordingTransport(result: unknown) {
  const calls: TransportContext[] = [];
  const transport: Transport = async <T>(ctx: TransportContext): Promise<T> => {
    calls.push(ctx);
    return result as T;
  };
  return { transport, calls };
}

describe("createClient", () => {
  test("exposes one method per operationId in operationsMap", () => {
    const client = createClient({
      baseUrl: "https://x",
      skipVersionCheck: true,
    }) as unknown as Record<string, unknown>;

    for (const op of Object.keys(operationsMap)) {
      expect(typeof client[op]).toBe("function");
    }
  });

  test("invokes the provided transport with descriptor built from buildRequest", async () => {
    const { transport, calls } = recordingTransport({ ok: true });
    const client = createClient({
      baseUrl: "https://cms.example.com",
      skipVersionCheck: true,
      transport,
    });

    await client.ProjectGet({
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" },
    });

    expect(calls).toHaveLength(1);
    const ctx = calls[0]!;
    expect(ctx.baseUrl).toBe("https://cms.example.com");
    expect(ctx.descriptor.method).toBe("GET");
    expect(ctx.descriptor.path).toBe("/ws/projects/p");
    expect(ctx.descriptor.operationId).toBe("ProjectGet");
  });

  test("merges options.headers under descriptor headers (descriptor wins)", async () => {
    const { transport, calls } = recordingTransport({});
    const client = createClient({
      baseUrl: "https://x",
      skipVersionCheck: true,
      transport,
      headers: { "X-App": "client", "Content-Type": "text/plain" },
    });

    await client.ItemCreate({
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p", modelIdOrKey: "m" },
      body: {},
    });

    const headers = calls[0]!.descriptor.headers;
    expect(headers["X-App"]).toBe("client");
    expect(headers["Content-Type"]).toBe("application/json");
  });

  test("adds Authorization: Bearer <token> when token is a string", async () => {
    const { transport, calls } = recordingTransport({});
    const client = createClient({
      baseUrl: "https://x",
      skipVersionCheck: true,
      transport,
      token: "static-token",
    });

    await client.ProjectGet({
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" },
    });

    expect(calls[0]!.descriptor.headers["Authorization"]).toBe(
      "Bearer static-token",
    );
  });

  test("awaits async token function for each call", async () => {
    const { transport, calls } = recordingTransport({});
    let n = 0;
    const client = createClient({
      baseUrl: "https://x",
      skipVersionCheck: true,
      transport,
      token: async () => `t-${++n}`,
    });

    await client.ProjectGet({
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" },
    });
    await client.ProjectGet({
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" },
    });

    expect(calls[0]!.descriptor.headers["Authorization"]).toBe("Bearer t-1");
    expect(calls[1]!.descriptor.headers["Authorization"]).toBe("Bearer t-2");
  });

  test("accepts a sync token function", async () => {
    const { transport, calls } = recordingTransport({});
    const client = createClient({
      baseUrl: "https://x",
      skipVersionCheck: true,
      transport,
      token: () => "sync-token",
    });

    await client.ProjectGet({
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" },
    });
    expect(calls[0]!.descriptor.headers["Authorization"]).toBe(
      "Bearer sync-token",
    );
  });

  test("omits Authorization header when token is undefined", async () => {
    const { transport, calls } = recordingTransport({});
    const client = createClient({
      baseUrl: "https://x",
      skipVersionCheck: true,
      transport,
    });

    await client.ProjectGet({
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" },
    });
    expect(calls[0]!.descriptor.headers["Authorization"]).toBeUndefined();
  });

  test("forwards call-level signal to transport", async () => {
    const { transport, calls } = recordingTransport({});
    const client = createClient({
      baseUrl: "https://x",
      skipVersionCheck: true,
      transport,
    });

    const controller = new AbortController();
    await client.ProjectGet(
      { path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" } },
      { signal: controller.signal },
    );
    expect(calls[0]!.signal).toBe(controller.signal);
  });

  test("returns the transport's resolved value", async () => {
    const { transport } = recordingTransport({ projects: [{ id: "1" }] });
    const client = createClient({
      baseUrl: "https://x",
      skipVersionCheck: true,
      transport,
    });

    const result = await client.ProjectFilter({
      path: { workspaceIdOrAlias: "ws" },
    });
    expect(result).toEqual({ projects: [{ id: "1" }] } as unknown as typeof result);
  });
});
