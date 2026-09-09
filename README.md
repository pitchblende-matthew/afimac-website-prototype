# AFIMAC · CSTL Section Prototype

Astro app for **Webflow Cloud**. It is the clickable prototype for the AFIMAC
Critical Situation Travel Labor (CSTL) section — the sub-nav component, the
wireframed pages, the approved copy where it exists, and the open decisions
flagged in place.

**Deployed:** https://www.pitchblende.net/client-apps/afimac-website-prototype/overview

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
| Green-ruled figure | Artwork that has been delivered and is placed on the page — or a delivered HTML widget, running live |
| Amber dashed figure | Artwork rebuilt in this repo as a stand-in — not the approved asset |
| A real image | Already live on the site — pulled from afimacglobal.com, see below |
| Gold `note` | An observation or a link opportunity |
| Coral `note stop` | A conflict that blocks final copy |
| `LIVE` / `BUILD` tag | Whether the page exists on the site today |
| Dashed "Elementor:" line | Build note — which widgets the block maps to |

### The control bar

A pink bar sits above the site chrome on every page — prototype controls, not
proposed site UI. Five independent toggles hide each kind of annotation:

| Toggle | Hides |
| :--- | :--- |
| Build notes | The dashed "Elementor:" line under each block, and the hero photo spec |
| Notes & conflicts | The gold and coral callouts |
| SEO & page meta | The title / description / slug table at the top of BUILD pages |
| Block labels | The `BLOCK 01 · HERO` captions |
| Content assets | The green monday.com asset bands (see below) |

### The sub-nav label

The bar is labelled **Travel Labor**, not the internal “CSTL”. That is nearly
three times the width of the acronym it replaced, so the nav is tightened
between 1001px and 1180px and collapses to its menu button at **1000px** rather
than the 940px the rest of the page layout uses — only the nav's content got
wider, so only the nav's breakpoint moved. 940px had no slack left even with the
old four-letter mark. `CSTL` stays as the internal shorthand in the repo, the
build notes and the file names.

### Launch phases

The section ships in six cumulative steps, and the pink bar carries a **launch
phase** selector to preview each one. Picking a phase sets `data-phase` on
`<body>`; the stylesheet then hides every sub-nav entry that has not shipped by
then, so the nav shows what the section actually looks like at that point. Phase
0 is today — the Overview and the seven industry pages are live, but no sub-nav
links them, so the bar is empty and says so. The choice persists across pages,
like the toggles.

| Phase | Adds |
| :--- | :--- |
| 0 | Nothing new in the nav. The seven live industry pages render their **real published copy**, read off the site — see `src/data/live-industries.ts`. |
| 1 | Overview, Industries, Contact |
| 2 | How It Works |
| 3 | Roles |
| 4 | Resources |
| 5 | Pricing & ROI |

`phase` lives on each top-level entry in `src/data/nav.ts`; children inherit it
unless they set their own. [`/launch-phases`](src/pages/launch-phases.astro) is
the plan and a readiness check against it — **the phase order is the client's,
every status column on that page is derived from the build data**, so it cannot
drift from the dots in the sub-nav.

The word is overloaded: these launch phases are unrelated to the four
*deployment* phases (Assessment, Mobilization, Deployment, Demobilization) the
service itself runs on. Worth keeping the labels distinct in client-facing work.

**Clean view** switches them all off, which renders the pages as a real site with
no annotation — the view to share when the point is the design rather than the
build. **Show everything** switches them back on. Choices persist across pages
and sessions, and are applied before first paint so nothing flashes.

### Content assets

A green band on each page lists the finished assets from the **AFIMAC · Content
Development** board in monday.com that belong on it, with the board's own copy
and design status, links to the item and the file, and why it fits there. Green
rather than gold or coral on purpose: unlike the notes and conflicts, these are
things that already exist and just need placing.

The inventory lives in `src/data/assets.ts` and drives both the per-page bands
and the full library on `/resources`. Statuses were read on 18 Aug 2026 —
re-check the board before acting on them.

The same bar carries the build-status legend: dot fill is how far the work has
got, a green ring means the page is already live so the work is an update.

Colours were sampled off the live CSTL page and checked against the Brand
Identity guide (22 July 2025). Where they disagree it is flagged — see
[`/brand-check`](src/pages/brand-check.astro), which also carries the four
unresolved content conflicts.

### Delivered artwork

Finished graphics live in `public/graphics/`, HTML widgets in `public/embeds/`.
The 2026-08-20 pitchblende delivery replaced every PNG stand-in with a real SVG
and added the widgets:

| Asset | Where |
| :--- | :--- |
| `afimac-cstl-process-timeline` | How It Works · What Is Travel Labor · all three industry pages |
| `afimac-cstl-mobilization-map` | How It Works · BLOCK 02 |
| `afimac-cstl-form-illustration` | How It Works · BLOCK 10 |
| `afimac-auto-speed-comparison` | Automotive · BLOCK 02a |
| `afimac-auto-line-map-static` / `-roles` | Automotive · BLOCK 05 |
| `afimac-auto-deployment-timeline` | Automotive · How We Deploy |
| `afimac-vs-speed-comparison` | CSTL vs. Local Staffing · BLOCK 04 |
| `afimac-fb-*` | Food &amp; Beverage · line map, deployment timeline, hero chip |
| `afimac-log-*` | Logistics &amp; Warehousing · line map, deployment timeline, hero chip |

Most ship as a **desktop/mobile pair** — a wide bar chart cannot just be scaled
down, so the narrow versions are separately laid out. `artPair()` renders them
through `<picture>` with a 780px `media` query, so the browser fetches only the
one it needs; `figure()` still handles single assets. Both are in
`src/lib/wireframe.ts`, and `src/data/graphics.ts` holds the inventory.

Eleven HTML widgets render live through `Embed.astro`, byte-for-byte the file the
Elementor build pastes in. Two carry no script, which is expected — they are static markup. The delivered font stacks (Zilla Slab / Jost) were
swapped for the site's Museo faces in every widget, originals kept as fallbacks,
so all seven render in one type system. **The SVGs have their text converted to
outlines**, so those keep the delivered faces — worth knowing if the theme fonts
are ever confirmed as something else.

**Editorial ruled the speed figures on 21 Aug 2026** — direct hire 45–90 days,
agency 21–35, AFIMAC 6–7 — and the artwork was cut to match. Several pages of
copy were not: "as fast as 72 hours" and "14–35" are still in the text. The
prototype renders the copy as approved and flags the disagreement wherever a
graphic and its page contradict each other, rather than quietly correcting
either. See [`/brand-check`](src/pages/brand-check.astro) item 03.

### Live page images

Fifty-two images across the prototype are the real ones from the live site,
**referenced from afimacglobal.com rather than vendored**, for the same reason
as the logo: no copies were supplied to this repo, and the live media library is
the source of truth.

| Asset | Where it lands |
| :--- | :--- |
| Three category isometrics | Overview · How It Works industry tiles |
| Four-stage process circle | Overview · How It Works · What Is Travel Labor · all three industry pages |
| Six client-success illustrations | Overview, two in the carousel and all six as a strip |
| eBook cover | Overview · Industries hub · Welders |
| Fourteen post featured images | Every Related Insights grid that names its posts |

The inventory is `src/data/live-media.ts`, read out of the WordPress REST API
(`/wp-json/wp/v2/pages/427` and `/posts`) on 20 Aug 2026. It records both the alt
text the prototype proposes and the alt text the live page carries, wherever
those differ — that gap is the finding, and the overview surfaces it in a note.

Post thumbnails resolve **by title**, not by position: `postArt(title)` matches a
cited title against the live post library, including the shorter wordings the
copy decks use. So a new insights grid gets real thumbnails just by naming real
posts. `postTitleDrift()` is the other half — where a deck cites a post under a
wording the live site does not use, the page says so in a coral note rather than
linking a card to a post it does not name. Four pages currently trip it.

`liveImg()` in `src/lib/wireframe.ts` renders them, keeping the old dashed
art-direction panel in the markup as an `onerror` fallback. If an image cannot
load — offline, hotlink protection, a CSP on the host — the block degrades to
the wireframe it showed before rather than to a broken-image icon. Both paths
are verified at 390/940/1440px.

Everything still showing a dashed panel is art that genuinely does not exist —
the role-page infographics, the hero photography, the industry tiles on the hub,
and the Get the Numbers illustration, which has no image in the live page's
markup at all. Nothing was force-fitted to fill a slot; where a live image is
standing in for a different medium than the block specs, the page says so.

### The logo

Header and footer use the official AFIMAC SVGs from afimacglobal.com — the same
two files the live site serves, so the prototype cannot drift from the real
mark:

| Variant | File |
| :--- | :--- |
| Primary | `/wp-content/uploads/2025/01/AFIMAC-logo-5.svg` |
| Reversed (white) | `/wp-content/uploads/2025/01/AFIMAC-logo-rev.svg` |

They are **referenced, not vendored**, because no copy of the asset was supplied
to this repo. If one is dropped into `public/`, change `SRC` in
`src/components/Logo.astro` to `u("/afimac-logo.svg")` and nothing else moves.

The old text wordmark is kept as an automatic fallback: if the image cannot
load — offline, hotlink protection, a CSP on the host — the mark degrades to
type rather than to a broken-image icon. Both paths are verified.

Type: the live site runs Museo and Museo Sans (commercial exljbris faces,
already loaded as Elementor Custom Fonts). The prototype asks for those first
and falls back to Zilla Slab / Mulish, so it renders for anyone without them
installed.

## Pages

| Route | Status | Notes |
| :--- | :--- | :--- |
| `/overview` | LIVE | The live page, matched section for section · carries the live imagery |
| `/how-it-works` | BUILD | Full approved copy · live process graphic and industry tiles |
| `/what-is-travel-labor` | BUILD | Full approved copy (June-05 package) · shares the four-phase timeline |
| `/vs-local-staffing` | BUILD | Full approved copy · settles direct hire at 45–90 days |
| `/industries/automotive` | BUILD | Industry cluster template · the only page with delivered artwork, and the only one running live HTML widgets |
| `/industries/food-beverage` | BUILD | Industry cluster template |
| `/industries/logistics-warehousing` | BUILD | Full approved copy · its own page, not the shared template · the one new industry page |
| `/industries` | LIVE | The live hub, replicated · five untouched industry pages beneath it |
| `/roles` | BUILD | Role-cluster hub + the cluster's open items |
| `/roles/cnc-operators` | BUILD | Full approved copy · process as a card row |
| `/roles/forklift-operators` | BUILD | Full approved copy · process as a vertical rail |
| `/roles/welders` | BUILD | Full approved copy · process as a chip strip |
| `/roles/machinists` | BUILD | Full approved copy · process as a numbered strip |
| `/roles/assemblers-production` | BUILD | Full approved copy · process as a table |
| `/roles/sanitation-crews` | BUILD | Full approved copy · process as a definition list |
| `/roles/packaging-operations` | BUILD | Full approved copy · process as a dot stepper |
| `/faq` | BUILD | Cluster FAQ · 33 questions in 8 grouped sections |
| `/get-in-touch` | BUILD | Full approved copy · production URL is `/contact/`, outside the CSTL branch |
| `/pricing-roi` | BUILD | Hub placeholder |
| `/resources` | BUILD | The gated library + the full monday.com asset inventory |
| `/vs-traditional` | BUILD | Full approved copy · editorial article treatment, the only one in the cluster |
| `/day-1-ready` | BUILD | Full approved copy · two blocks held pending assets |
| `/pre-deployment` | BUILD | Full approved copy · shares its checklist with Day 1 Ready |
| `/resources/white-papers` | BUILD | Full approved copy · two of five covers already published |
| `/resources/case-studies` | BUILD | Full approved copy · four of five rows blocked on client permissions |
| `/resources/sales-sheets` | BUILD | Full approved copy · no finished asset behind any download yet |
| `/brand-check` | — | Internal working page, not part of the site IA |
| `/launch-phases` | — | Internal working page · the rollout plan and its readiness check |

`/` redirects to `/overview`.

## Project structure

```text
src/
├── layouts/Prototype.astro     header, CSTL sub-nav, breadcrumb, WIP bar, footer, page scripts
├── components/
│   ├── Block.astro             one wireframe band (label + content + build note)
│   ├── SubNav.astro            the sub-nav component under review, labelled “Travel Labor”
│   ├── PageMeta.astro          the SEO / setup table on BUILD pages
│   ├── AssetBand.astro         monday.com assets that belong on this page
│   ├── Logo.astro              the AFIMAC mark, with a text fallback
│   ├── Stub.astro              hub placeholder page
│   └── NotBuilt.astro          "on the build sheet, no wireframe yet" page
├── data/
│   ├── nav.ts                  sub-nav structure + per-page build status + launch phases
│   ├── industries.ts           live industry pages + the CSTL update configs
│   ├── live-media.ts           images already on the live overview page
│   ├── live-industries.ts      the seven live industry pages, as published
│   ├── day1.ts                 copy shared by Day 1 Ready and the Pre-Deployment Checklist
│   └── assets.ts               monday.com content inventory, mapped to routes
├── lib/
│   ├── base.ts                 u() — mount-path-aware URL helper
│   ├── wireframe.ts            bars() · photo() · figure() · liveImg() · cards() · roleList()
│   ├── industry-page.ts        the industry cluster template (Automotive and F&B only)
│   ├── role-blocks.ts          the blocks the seven role decks share
│   └── types.ts
├── pages/                      one file per route
└── styles/prototype.css        all styling, carried over verbatim

public/graphics/                delivered artwork, served under the mount path
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
2. Set the environment's mount path and point it at the branch that environment
   should track. This project is mounted at `/client-apps/afimac-website-prototype`.
3. Publish the site once after creating the project, so the mount path is served.

Pushes to the tracked branch then build and deploy automatically. Once the
project exists, `npm run deploy` (`webflow cloud deploy`) deploys from the CLI,
and `webflow apps env-vars` manages environment variables.

---

pitchblende · v0.3 · not for publication
