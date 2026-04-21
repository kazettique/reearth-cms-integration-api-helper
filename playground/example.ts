/**
 * TypeScript playground.
 *
 * Run:  `bun playground/example.ts`
 *
 * Try:
 *   1. Hover any identifier to see its type.
 *   2. Inside `client.`... press Ctrl+Space to see all 48 operationIds.
 *   3. Mistype a path param name — the editor should underline it.
 *   4. Replace `"ItemCreate"` with another operationId and watch the
 *      `params` shape change to match.
 */
import {
  buildRequest,
  checkSpecVersion,
  createClient,
  SPEC_CONTENT_HASH,
  type Client,
  type Item,
  type OperationParams,
  type OperationResult,
  type Project,
  type ResponseBody,
} from "../src";

// 1. buildRequest — no I/O, just builds a descriptor.
const req = buildRequest("ProjectFilter", {
  path: { workspaceIdOrAlias: "ws-1" },
  query: { page: 1, perPage: 20 },
});
console.log("ProjectFilter descriptor:\n", req);

// 2. createClient — typed method per operationId.
const cms: Client = createClient({
  baseUrl: "https://cms.example.com/api",
  token: "demo-token",
  skipVersionCheck: true, // don't phone home from the playground
});

async function demo() {
  // Uncomment these to actually hit the API once you have a real baseUrl:
  //
  // const list: ResponseBody<"ProjectFilter"> = await cms.ProjectFilter({
  //   path: { workspaceIdOrAlias: "ws-1" },
  // });
  // const first: Project | undefined = list.projects?.[0];
  //
  // const created: Item = await cms.ItemCreate({
  //   path: { workspaceIdOrAlias: "ws-1", projectIdOrAlias: "proj-1", modelIdOrKey: "posts" },
  //   body: { fields: [{ key: "title", value: "Hello" }] },
  // });

  void cms;
  type _CreateParams = OperationParams<"ItemCreate">;
  type _CreateResult = OperationResult<"ItemCreate">;
}

void demo;

// 3. Version drift — manually check.
const version = await checkSpecVersion();
console.log("Spec version check:", {
  baked: SPEC_CONTENT_HASH,
  remote: version.remote,
  isLatest: version.isLatest,
});
