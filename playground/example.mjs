// @ts-check
/**
 * JavaScript playground — proves non-TS consumers get a good experience.
 *
 * Run:  `bun playground/example.mjs`
 *
 * The `@ts-check` pragma above makes your editor type-check this file using
 * the `.d.ts` we ship. Hover `client.` or `buildRequest(` and you should see
 * full signatures and docstrings, same as TypeScript consumers.
 */
import { buildRequest, createClient } from "../src/index.ts";

const req = buildRequest("ProjectFilter", {
  path: { workspaceIdOrAlias: "ws-1" },
  query: { page: 1, perPage: 20 },
});
console.log("descriptor:", req);

const cms = createClient({
  baseUrl: "https://cms.example.com/api",
  token: "demo-token",
  skipVersionCheck: true,
});

// Uncomment to hit a real API:
// const list = await cms.ProjectFilter({ path: { workspaceIdOrAlias: "ws-1" } });
// console.log(list.projects?.[0]);

void cms;

// Intentional typo demo — uncomment to see the editor underline `projectId`:
// buildRequest("ItemCreate", { path: { projectId: "nope" }, body: { fields: [] } });
