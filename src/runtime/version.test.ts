import { afterEach, beforeEach, describe, expect, test } from "bun:test";

import { SPEC_CONTENT_HASH, SPEC_URL } from "../generated/version";

import { checkSpecVersion, runVersionCheckOnce } from "./version";

const ORIGINAL_FETCH = globalThis.fetch;
const ORIGINAL_WARN = console.warn;

function mockFetch(impl: (input: RequestInfo | URL) => Response | Promise<Response>) {
  const calls: Array<RequestInfo | URL> = [];
  globalThis.fetch = (async (input: RequestInfo | URL) => {
    calls.push(input);
    return impl(input);
  }) as typeof fetch;
  return calls;
}

async function sha256Hex(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

describe("checkSpecVersion", () => {
  beforeEach(() => {
    globalThis.fetch = ORIGINAL_FETCH;
  });
  afterEach(() => {
    globalThis.fetch = ORIGINAL_FETCH;
  });

  test("hashes the remote spec and reports against the baked-in hash", async () => {
    const body = "fixed-spec";
    const expected = await sha256Hex(body);
    mockFetch(() => new Response(body, { status: 200 }));

    const result = await checkSpecVersion();
    expect(result.remote).toBe(expected);
    expect(result.local).toBe(SPEC_CONTENT_HASH);
    expect(result.specUrl).toBe(SPEC_URL);
    expect(result.isLatest).toBe(expected === SPEC_CONTENT_HASH);
  });

  test("returns isLatest=false when remote hash differs from local", async () => {
    mockFetch(() => new Response("definitely-not-the-spec", { status: 200 }));
    const result = await checkSpecVersion();
    expect(result.remote).not.toBe(SPEC_CONTENT_HASH);
    expect(result.remote).not.toBeNull();
    expect(result.isLatest).toBe(false);
  });

  test("returns isLatest=true with remote=null when fetch throws (offline)", async () => {
    mockFetch(() => {
      throw new Error("network down");
    });
    const result = await checkSpecVersion();
    expect(result.remote).toBeNull();
    expect(result.isLatest).toBe(true);
  });

  test("returns isLatest=true with remote=null when response is not ok", async () => {
    mockFetch(() => new Response("boom", { status: 500 }));
    const result = await checkSpecVersion();
    expect(result.remote).toBeNull();
    expect(result.isLatest).toBe(true);
  });
});

describe("runVersionCheckOnce", () => {
  beforeEach(() => {
    globalThis.fetch = ORIGINAL_FETCH;
    console.warn = ORIGINAL_WARN;
  });
  afterEach(() => {
    globalThis.fetch = ORIGINAL_FETCH;
    console.warn = ORIGINAL_WARN;
  });

  test("memoizes across calls and warns at most once on drift", async () => {
    const warnings: unknown[][] = [];
    console.warn = (...args: unknown[]) => {
      warnings.push(args);
    };
    const calls = mockFetch(() => new Response("drift-body", { status: 200 }));

    const [a, b, c] = await Promise.all([
      runVersionCheckOnce(),
      runVersionCheckOnce(),
      runVersionCheckOnce(),
    ]);

    expect(calls).toHaveLength(1);
    expect(a).toBe(b);
    expect(b).toBe(c);
    expect(a.isLatest).toBe(false);
    expect(warnings).toHaveLength(1);
    const joined = (warnings[0] as string[]).join(" ");
    expect(joined).toContain("may be out of date");
    expect(joined).toContain(SPEC_CONTENT_HASH);
  });
});
