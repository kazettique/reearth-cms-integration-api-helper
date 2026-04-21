# Postman collection

A Postman Collection v2.1 is regenerated alongside the TypeScript types every
time the OpenAPI spec is refreshed. Import it into Postman to explore the 48
endpoints without writing a single line of code.

## Download

<a href="/integration.postman_collection.json" download>
  <strong>integration.postman_collection.json</strong>
</a>

## Import into Postman

1. Open Postman.
2. **File → Import** (or press `⌘ + O` / `Ctrl + O`).
3. Drop the downloaded `integration.postman_collection.json` into the modal
   and confirm.

You'll see folders matching the spec tags — **Projects**, **Models**,
**Items**, **Assets**, **Comments**, etc. — each containing the relevant
requests.

## Set your environment

Create a Postman environment with these variables and select it before
sending requests:

| Variable             | Example value                      |
| -------------------- | ---------------------------------- |
| `baseUrl`            | `https://cms.example.com/api`      |
| `bearerToken`        | your integration token             |
| `workspaceIdOrAlias` | `ws-1`                             |
| `projectIdOrAlias`   | `my-proj`                          |

Attach `Authorization: Bearer {{bearerToken}}` at the collection level so
every request inherits it.
