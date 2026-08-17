import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
//
// `base` is the literal token `CLOUD_MOUNT_PATH`. Webflow Cloud substitutes it
// with the mount path configured for the environment at build time — do not
// replace it with a hardcoded path or an env lookup, or the substitution and
// every generated asset URL will break.
//
// Locally, `npm run dev` therefore serves the app under
// http://localhost:4321/CLOUD_MOUNT_PATH/. That is expected.
export default defineConfig({
  base: "CLOUD_MOUNT_PATH",
  output: "server",
  compressHTML: true,
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
