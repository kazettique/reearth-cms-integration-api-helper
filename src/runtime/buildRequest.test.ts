import { describe, expect, test } from "bun:test";

import { operationsMap } from "../generated/operations";

import { buildRequest } from "./buildRequest";
import type { OperationId, OperationParams } from "./types";

describe("buildRequest", () => {
  test("resolves path params and returns a descriptor matching operationsMap", () => {
    const req = buildRequest("ProjectGet", {
      path: { workspaceIdOrAlias: "ws-1", projectIdOrAlias: "proj-1" },
    });

    expect(req.operationId).toBe("ProjectGet");
    expect(req.method).toBe(operationsMap.ProjectGet.method);
    expect(req.pathTemplate).toBe(operationsMap.ProjectGet.path);
    expect(req.path).toBe("/ws-1/projects/proj-1");
    expect(req.url).toBe("/ws-1/projects/proj-1");
    expect(req.pathParams).toEqual({
      workspaceIdOrAlias: "ws-1",
      projectIdOrAlias: "proj-1",
    });
    expect(req.query).toEqual({});
    expect(req.headers).toEqual({});
    expect(req.body).toBeUndefined();
  });

  test("sets Content-Type: application/json when a body is provided", () => {
    const body = { fields: [{ key: "title", value: "Hello" }] };
    const req = buildRequest("ItemCreate", {
      path: {
        workspaceIdOrAlias: "ws",
        projectIdOrAlias: "p",
        modelIdOrKey: "m",
      },
      body,
    });

    expect(req.method).toBe("POST");
    expect(req.path).toBe("/ws/projects/p/models/m/items");
    expect(req.headers["Content-Type"]).toBe("application/json");
    expect(req.body).toBe(body);
  });

  test("URL-encodes path param values", () => {
    const req = buildRequest("ProjectGet", {
      path: { workspaceIdOrAlias: "a/b", projectIdOrAlias: "c d" },
    });
    expect(req.path).toBe("/a%2Fb/projects/c%20d");
  });

  test("throws when a required path param is missing", () => {
    expect(() =>
      buildRequest("ProjectGet", {
        path: { workspaceIdOrAlias: "ws" },
      } as unknown as OperationParams<"ProjectGet">),
    ).toThrow(/Missing path parameter "projectIdOrAlias"/);
  });

  test("throws when a path param is null", () => {
    expect(() =>
      buildRequest("ProjectGet", {
        path: {
          workspaceIdOrAlias: "ws",
          projectIdOrAlias: null,
        },
      } as unknown as OperationParams<"ProjectGet">),
    ).toThrow(/Missing path parameter "projectIdOrAlias"/);
  });

  test("throws on unknown operationId", () => {
    expect(() =>
      buildRequest("NotARealOp" as never, {} as never),
    ).toThrow(/Unknown operationId: NotARealOp/);
  });

  test("serializes scalar query params and skips undefined/null", () => {
    const req = buildRequest("ProjectFilter", {
      path: { workspaceIdOrAlias: "ws" },
      query: {
        page: 2,
        perPage: 20,
        keyword: undefined,
      },
    });

    expect(req.url).toBe("/ws/projects?page=2&perPage=20");
  });

  test("skips null query values at runtime", () => {
    const req = buildRequest("ProjectFilter", {
      path: { workspaceIdOrAlias: "ws" },
      query: { page: 1, keyword: null } as unknown as OperationParams<"ProjectFilter">["query"],
    });
    expect(req.url).toBe("/ws/projects?page=1");
  });

  test("appends each array element for array query params", () => {
    const req = buildRequest("ProjectFilter", {
      path: { workspaceIdOrAlias: "ws" },
      query: { keyword: ["a", "b", "c"] } as unknown as OperationParams<"ProjectFilter">["query"],
    });
    expect(req.url).toBe("/ws/projects?keyword=a&keyword=b&keyword=c");
  });

  test("does not add a Content-Type header when no body is provided", () => {
    const req = buildRequest("ProjectGet", {
      path: { workspaceIdOrAlias: "ws", projectIdOrAlias: "p" },
    });
    expect(req.headers["Content-Type"]).toBeUndefined();
  });

  test("caller-supplied header params pass through", () => {
    const req = buildRequest("ItemCreate", {
      path: {
        workspaceIdOrAlias: "ws",
        projectIdOrAlias: "p",
        modelIdOrKey: "m",
      },
      body: {},
      header: { "X-Trace": "abc" },
    } as unknown as OperationParams<"ItemCreate">);
    expect(req.headers["X-Trace"]).toBe("abc");
    expect(req.headers["Content-Type"]).toBe("application/json");
  });

  test("builds every op in operationsMap without leaving placeholders", () => {
    for (const [op, meta] of Object.entries(operationsMap)) {
      const placeholders = [...meta.path.matchAll(/\{([^}]+)\}/g)].map(
        (m) => m[1] as string,
      );
      const path = Object.fromEntries(placeholders.map((k) => [k, "x"]));
      const req = buildRequest(
        op as OperationId,
        { path } as unknown as OperationParams<OperationId>,
      );
      expect(req.method).toBe(meta.method);
      expect(req.path).not.toMatch(/[{}]/);
      expect(req.path.startsWith("/")).toBe(true);
    }
  });
});
