import {
  GENERATED_AT,
  SPEC_CONTENT_HASH,
  SPEC_URL,
} from "../generated/version";

export { GENERATED_AT, SPEC_CONTENT_HASH, SPEC_URL };

export interface SpecVersionResult {
  /** sha256 of the spec contents at `bun run generate` time. */
  local: string;
  /** sha256 of the live spec, or `null` if the check couldn't reach it. */
  remote: string | null;
  /**
   * `true` when the baked and live hashes match, OR when the remote couldn't
   * be read (we don't want to scream at users when they're offline).
   */
  isLatest: boolean;
  specUrl: string;
}

async function sha256Hex(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Best-effort check comparing the baked-in spec hash with the live one on
 * GitHub. Never throws — returns `isLatest: true` when the remote can't be
 * read (e.g. offline, CORS-blocked).
 */
export async function checkSpecVersion(): Promise<SpecVersionResult> {
  let remote: string | null = null;
  try {
    const response = await fetch(SPEC_URL);
    if (response.ok) {
      const text = await response.text();
      remote = await sha256Hex(text);
    }
  } catch {
    // network error, CORS, etc. — silently skip.
  }
  return {
    local: SPEC_CONTENT_HASH,
    remote,
    isLatest: remote === null ? true : remote === SPEC_CONTENT_HASH,
    specUrl: SPEC_URL,
  };
}

let checkPromise: Promise<SpecVersionResult> | null = null;

/**
 * Runs `checkSpecVersion()` at most once per process and, on mismatch, emits
 * a single `console.warn` nudging the user to regenerate. Subsequent calls
 * reuse the same promise — no extra network traffic, no repeated warnings.
 */
export function runVersionCheckOnce(): Promise<SpecVersionResult> {
  if (checkPromise) return checkPromise;
  checkPromise = (async () => {
    const result = await checkSpecVersion();
    if (!result.isLatest && result.remote) {
      const lines = [
        "[@reearth/cms-integration-interface] Integration API spec may be out of date.",
        `  local  sha256: ${result.local}`,
        `  remote sha256: ${result.remote}`,
        `  source:        ${result.specUrl}`,
        "  Run `bun run generate` in @reearth/cms-integration-interface to refresh the generated types.",
      ];
      console.warn(lines.join("\n"));
    }
    return result;
  })();
  return checkPromise;
}
