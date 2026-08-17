/**
 * Mount-path helper.
 *
 * Webflow Cloud serves this app under a mount path (e.g. `/afimac-cstl`), which
 * Astro exposes as `import.meta.env.BASE_URL`. Every internal href and asset URL
 * has to carry that prefix, so build them all through `u()` rather than writing
 * root-relative paths by hand.
 *
 *   u('/overview')  ->  '/afimac-cstl/overview'   (deployed)
 *   u('/overview')  ->  '/overview'               (base '/')
 */
export const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export const u = (path: string): string => `${BASE}${path}`;
