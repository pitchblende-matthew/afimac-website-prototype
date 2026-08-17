# AFIMAC · CSTL Section Prototype

Astro app for **Webflow Cloud**. It is the clickable prototype for the AFIMAC
Critical Situation Travel Labor (CSTL) section — the sub-nav component, the
wireframed pages, the approved copy where it exists, and the open decisions
flagged in place.

**This is a review artifact, not a production site.** Every page renders
`noindex, nofollow`. The intended production URLs are shown in the breadcrumb
bar of each page; the live section lives at
`afimacglobal.com/solutions/critical-situation-travel-labor/`.

Ported from the single-file prototype `AFIMAC CSTL Prototype v0.3.html`. The
port is pixel-identical to that file — verified by full-page screenshot diff at
1440px across all 12 pages (0 differing pixels), plus a mobile-nav behaviour
check at 390px.

## Reading the wireframes

| Element | Means |
| :--- | :--- |
| Grey bars | Copy not written yet |
| Dashed panel | Photography or illustration still to source — the caption is the art direction |
| Gold `note` | An observation or a link opportunity |
| Coral `note stop` | A conflict that blocks final copy |
| `LIVE` / `BUILD` tag | Whether the page exists on the site today |
| Dashed "Elementor:" line | Build note — which widgets the block maps to. Toggle off with the checkbox in the pink bar |

Colours were sampled off the live CSTL page and checked against the Brand
Identity guide (22 July 2025). Where they disagree it is flagged — see
[`/brand-check`](src/pages/brand-check.astro), which also carries the four
unresolved content conflicts.

Type: the live site runs Museo and Museo Sans (commercial exljbris faces,
already loaded as Elementor Custom Fonts). The prototype asks for those first
and falls back to Zilla Slab / Mulish, so it renders for anyone without them
installed.

## Pages

| Route | Status | Notes |
| :--- | :--- | :--- |
| `/overview` | LIVE | The live page, matched section for section |
| `/how-it-works` | BUILD | Full approved copy |
| `/what-is-travel-labor` | BUILD | Full approved copy (June-05 package) |
| `/vs-local-staffing` | BUILD | Comparison tables written, surrounding copy not |
| `/industries/automotive` | BUILD | Industry cluster template |
| `/industries/food-beverage` | BUILD | Industry cluster template |
| `/industries/logistics` | BUILD | Industry cluster template + 2 open items |
| `/roles`, `/resources`, `/pricing-roi`, `/get-in-touch` | BUILD | Hub placeholders |
| `/vs-traditional`, `/day-1-ready`, `/pre-deployment`, `/industries` | BUILD | On the build sheet, not wireframed |
| `/brand-check` | — | Internal working page, not part of the site IA |

`/` redirects to `/overview`.

## Project structure

```text
src/
├── layouts/Prototype.astro     header, CSTL sub-nav, breadcrumb, WIP bar, footer, page scripts
├── components/
│   ├── Block.astro             one wireframe band (label + content + build note)
│   ├── SubNav.astro            the CSTL sub-nav component under review
│   ├── PageMeta.astro          the SEO / setup table on BUILD pages
│   ├── Stub.astro              hub placeholder page
│   └── NotBuilt.astro          "on the build sheet, no wireframe yet" page
├── data/
│   ├── nav.ts                  sub-nav structure (IA deck, slides 5–6)
│   └── industries.ts           the three industry cluster configs
├── lib/
│   ├── base.ts                 u() — mount-path-aware URL helper
│   ├── wireframe.ts            bars() · photo() · cards() · roleList()
│   ├── industry-page.ts        the industry cluster template
│   └── types.ts
├── pages/                      one file per route
└── styles/prototype.css        all styling, carried over verbatim
```

Page content is authored as HTML strings inside each page's frontmatter, exactly
as in the source prototype, and rendered through `Block.astro`. That keeps the
markup one-to-one with the original while giving every page a real URL and its
own file.

### Internal links

The app is served under a Webflow Cloud **mount path**, so never write a
root-relative href by hand — build it with `u()`:

```astro
---
import { u } from "../lib/base";
---
<a href={u("/how-it-works")}>How it works</a>
```

## Local development

Requires Node ≥ 22.12 (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321/CLOUD_MOUNT_PATH/
npm run build    # production build
npm run preview  # build, then serve through wrangler
npm run check    # astro check (typecheck)
```

`CLOUD_MOUNT_PATH` in the dev URL is not a mistake — see below.

## Webflow Cloud

This repo follows Webflow's official Astro contract
(`Webflow-Examples/hello-world-astro`, branch `v3`):

- **`webflow.json`** — declares `{"cloud": {"framework": "astro"}}`. Bindings
  (KV / R2 / D1) would also be declared here rather than in `wrangler.json`.
- **`astro.config.mjs`** — `base` is the literal token `CLOUD_MOUNT_PATH`.
  Webflow Cloud substitutes it with the environment's configured mount path at
  build time. **Do not** replace it with a hardcoded path or an env lookup, or
  the substitution and every generated asset URL will break. Locally this is why
  the dev server serves under `/CLOUD_MOUNT_PATH/`.
- **`output: "server"`** with the `@astrojs/cloudflare` adapter — the app runs
  as a Cloudflare Worker.
- **`wrangler.json`** — static assets are served from `./dist/client`.

### Deploying

[![Deploy to Webflow](https://webflow.com/img/deploy-dark.svg)](https://webflow.com/dashboard/cloud/deploy?repo=https://github.com/pitchblende-matthew/afimac-website-prototype)

Creating the Cloud project and connecting the repo is a dashboard step — it
needs the GitHub App authorization, so there is no API or CLI shortcut for it.
In the Webflow dashboard, under the **pitchblende.net** site → **Webflow Cloud**:

1. Create a project and connect this GitHub repo.
2. Set the environment's mount path (e.g. `/afimac-cstl`) and point it at the
   branch that environment should track.
3. Publish the site once after creating the project, so the mount path is served.

Pushes to the tracked branch then build and deploy automatically. Once the
project exists, `npm run deploy` (`webflow cloud deploy`) deploys from the CLI,
and `webflow apps env-vars` manages environment variables.

---

pitchblende · v0.3 · not for publication
