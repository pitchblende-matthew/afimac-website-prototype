/**
 * Industry cluster template — one layout, three pages.
 *
 * Automotive and F&B run the Numbers band after How We Deploy, matching the
 * copy deck. Logistics runs it directly after the Labor Gap, matching the built
 * mockup — the discrepancy is surfaced as an OPEN ITEM block on that page
 * rather than silently normalised, because it is a live sign-off question.
 */
import { bars, photo, figure } from "./wireframe";
import { PHASE_TIMELINE } from "../data/graphics";
import { u } from "./base";
import type { Industry } from "../data/industries";
import type { Block, PageProps } from "./types";

export function industryPage(o: Industry): PageProps & { blocks: Block[] } {
  const numbersFirst = o.slug === "logistics-warehousing";
  const isNew = o.liveH1 === null;

  /** Says plainly whether this page replaces live copy or creates a new page. */
  const scope: Block = {
    n: isNew ? "SCOPE · NEW PAGE" : "SCOPE · UPDATE TO A LIVE PAGE",
    h: isNew
      ? `<div class="note stop" style="margin-top:0"><b>This is the only new page in the industry cluster.</b> There is no live ${o.short} page and no slot for one in the agreed CSTL sub-nav. Everything below is new copy and new layout at a new URL, <code>${o.url}</code>.</div>`
      : `<div class="note" style="margin-top:0"><b>This updates a page that is already live, it does not replace it.</b> The live page sits at <code>${o.url}</code> and its H1 today reads “${o.liveH1}”. It keeps that URL — see the <a href="${u("/industries")}">URL conflict</a> raised on the hub. What changes is the argument: the live page runs the same fifteen generic roles as every other industry page, and the update below replaces them with ${o.roles.length} that are actually ${o.short}.</div>`,
    spec: isNew
      ? `Needs a sub-nav slot, a URL sign-off, and the full asset set — nothing can be inherited.`
      : `Everything the live page already has — hero, situations cards, credibility block, post grid, form — stays in place unless a block below explicitly replaces it.`,
  };

  const gap: Block = {
    cls: "wash",
    n: "BLOCK 03 · THE " + o.short.toUpperCase() + " LABOR GAP",
    h: `
  <h2>The ${o.short} labor gap</h2>
  <div class="ph t"></div>${bars(2)}
  <div class="g2" style="margin-top:28px">
   <div><h3>What’s happening on the floor</h3>${bars(5)}</div>
   <div><h3>What it costs you</h3>${bars(5)}
     <div style="margin-top:20px">${["", "", ""].map(() => `<div class="ph" style="height:9px"></div>`).join("")}</div></div>
  </div>`,
    spec: `<b>Elementor:</b> Container (2-col) · EK Icon List ×2 · EK Progress Bar ×3. <b>Copy not written.</b>`,
  };

  const numsN = "BLOCK 0" + (numbersFirst ? "4" : "6") + " · AFIMAC BY THE NUMBERS";

  /**
   * Where a stat-band embed exists it replaces the EK Funfact row outright —
   * and brings its own navy background, so the block drops the `blue` class
   * rather than stacking two navy bands.
   */
  const nums: Block = o.statBandEmbed
    ? {
        n: numsN,
        h: "",
        embed: {
          name: o.statBandEmbed,
          caption: `<b>Live embed, delivered.</b> This is the HTML widget itself, not a picture of it — the prototype renders the same file the build pastes into Elementor. The counters run once when the band scrolls into view and then hold; they respect <code>prefers-reduced-motion</code> and fall back to the static figures where <code>IntersectionObserver</code> is missing.`,
        },
        hEnd: `
  <div class="note stop"><b>Three figures here, four in the approved package, and four different ones on the live page.</b> This band runs <b>40+ years · 20,000+ skilled laborers · 18+ industries served</b>. The June-05 package approved <b>40+ years · 20,000+ skilled laborers · 72 hrs or less on site · 1–500+ scalable crew size</b> — so the embed drops the two figures carrying the speed and the scale arguments, and adds <b>18+ industries served</b>, which is in neither that package nor anywhere else in this section and has no source attached. The live page's own credibility block runs a fourth set again: Years · Industry Deployments · Companies Served · Laborers Provided. <b>One set has to win before this ships.</b> <a href="${u("/brand-check")}">All conflicts →</a></div>
  <div class="note"><b>Build note.</b> The lede above the figures — “For four decades, Fortune 500 manufacturers have called AFIMAC…” — is body copy living inside the widget. Whoever edits copy in Elementor will not find it in a Text Editor; it is only reachable by opening the HTML.</div>`,
        spec: `<b>Elementor:</b> HTML widget — paste <code>/embeds/afimac-auto-stat-band.html</code> whole. It is self-contained: no libraries, no external requests, no browser storage. It replaces the EK Funfact / Counter ×4 row this block specs on the other industry pages, and paints its own navy, so the section needs no background colour. <b>Figures still need sourcing.</b>`,
      }
    : {
        cls: "blue",
        n: numsN,
        h: `
  <div class="g4">
   ${["40+ / Years", "20,000+ / Skilled laborers", "72 hrs / Or less, on site", "1–500+ / Scalable crew size"]
     .map((x) => {
       const [a, b] = x.split(" / ");
       return `<div><div class="stat">${a}</div><p>${b}</p></div>`;
     })
     .join("")}
  </div>`,
        spec: `<b>Elementor:</b> Container · EK Funfact / Counter ×4, blue band. Figures are the four already approved in the June-05 package — no new stats without sourcing.`,
      };

  const rest: Block[] = [
    {
      n: "BLOCK 05 · " + o.rolesTitle.toUpperCase(),
      h:
        `<h2>${o.rolesTitle}</h2>` +
        (o.lineMapEmbed ? "" : `<div style="margin:22px 0">${o.mapArt ? figure(o.mapArt) : photo(o.map)}</div>`),
      ...(o.lineMapEmbed
        ? {
            embed: {
              name: o.lineMapEmbed,
              caption: `<b>Live embed, delivered.</b> This is the HTML widget itself, not a picture of it — the prototype renders the same file the build pastes into Elementor, so the two cannot drift apart. Click a station, or arrow-key along the rail, to change the panel. It supersedes the flat <code>afimac-auto-assembly-sequence.png</code> in this slot; that file stays in <code>public/graphics/</code> as the fallback for print, email and PDF, where nothing is clickable.`,
            } as const,
          }
        : {}),
      hEnd: `
  ${
    o.lineMapEmbed
      ? `<div class="note stop"><b>This block now states its role inventory twice.</b> The embed names <b>twenty-nine crews across seven stations</b>; the six cards below are the six roles the copy deck approved. All six do appear inside the embed, under longer and different names — CNC Operators as “CNC machinists”, Welders as “Spot &amp; MIG welders”, Material Handlers as “Line-side material handlers” — plus twenty-three the cards never mention. <b>Two levels of detail and two sets of wording for one list.</b> Decide which is canonical, and whether the cards survive at all now the embed carries the detail.</div>
  <div class="note"><b>Two CTAs in one block.</b> The embed ends with its own callout card — “Don’t see the role you need?” with an <b>Ask about a role</b> button — and the block ends with <b>See all CSTL roles</b>. The embed’s own build comment says to delete that callout where it is built as a separate Elementor element; <b>that is the recommendation here</b>, since the callout targets <code>#get-the-numbers</code> further down this same page while the block button goes to the roles hub.</div>
  <div class="note"><b>Colour.</b> The embed and all four automotive graphics use <code>#E8701A</code> orange; the live site’s CTAs are <code>#ff5544</code> coral and the brand guide says <code>#ed6344</code>. On top of that the embed’s <b>Ask about a role</b> button is navy, so it will not match the coral <b>Get the Numbers</b> button further down this page. <a href="${u("/brand-check")}">All conflicts →</a></div>`
      : ""
  }
  <div class="g3">${o.roles.map((r) => `<div class="card"><div class="ph" style="width:34px;height:34px;margin-bottom:14px"></div><h3>${r}</h3>${bars(2)}</div>`).join("")}</div>
  <div class="btns"><a class="btn ghost" href="${u("/roles")}">See all CSTL roles</a></div>`,
      spec: o.lineMapEmbed
        ? `<b>Elementor:</b> HTML widget — paste <code>/embeds/afimac-auto-line-map.html</code> whole, directly under the H2. Self-contained: no libraries, no external requests, no browser storage, all styles scoped to <code>.afx-lm</code>. Its two <code>--afx-*</code> font stacks were pointed at the Museo / Museo Sans Custom Fonts already loaded in Elementor. Then Container (3-col) · EK Icon Box ×${o.roles.length} · Button. <b>Role blurbs not written.</b>`
        : `<b>Elementor:</b> HTML widget (${o.slug === "food-beverage" ? "seven-station line map" : "line map"}) · Container (3-col) · EK Icon Box ×${o.roles.length} · Button. <b>Role blurbs not written.</b>`,
    },
    {
      cls: "wash",
      n: "BLOCK 0" + (numbersFirst ? "6" : "5") + " · HOW WE DEPLOY",
      h: `
  <h2>How we deploy</h2>
  <div style="margin:22px 0">${figure(PHASE_TIMELINE)}</div>
  <div class="note">${
    o.slug === "food-beverage"
      ? `<b>The shared timeline, standing in.</b> The F&amp;B deck specs a bespoke seven-day deployment bar, which does not exist. Given this one carries the same four phases and real durations, <b>the bespoke version is hard to justify</b> — drop it unless F&amp;B genuinely deploys on a different clock.`
      : `<b>The shared four-phase timeline, exactly as this block's spec asks</b> — one asset across the section rather than a new one per industry.`
  }</div>
  ${
    o.deployArt
      ? `<div style="margin:30px 0 22px">${figure(o.deployArt)}</div>
  <div class="note stop"><b>Two timelines for the same deployment, on the same block, disagreeing.</b> The shared graphic above runs <b>four</b> phases, calls phase 1 <b>Assessment</b> and puts no day numbers on anything. The ${o.short} one runs <b>three</b>, calls phase 1 <b>Consultation</b>, pins a hard day range to each, and demotes Demobilization to a footnote. Between them this page answers the open phase-1 naming question in both directions at once. It also puts the crew on your floor partway through <b>day 6</b> — the same “6–7 days” commitment the speed graphic makes at the top of this page, where the written copy deliberately hedges to “within days”. <b>Ship one of these two.</b></div>`
      : ""
  }
  <div class="note stop"><b>Its phase names must match the ones below it before this ships.</b> The graphic says Assessment · Mobilization · Deployment · Demobilization; the cards under it say the same, but the live <a href="${u("/overview")}">overview</a> calls phase 1 Consultation. That decision is still open.</div>
  <div class="g4">${["Assessment", "Mobilization", "Deployment", "Demobilization"].map((x, i) => `<div class="card"><div class="blocknum">PHASE 0${i + 1}</div><h3>${x}</h3>${bars(3)}</div>`).join("")}</div>`,
      spec: `<b>Elementor:</b> HTML widget (timeline) or EK Advanced Timeline · EK Icon Box ×4. Phase names must match How It Works — pending the Assessment/Consultation decision.`,
    },
    {
      n: "BLOCK 07 · CLIENT SUCCESS",
      h: `
  <h2>Client success</h2>
  <div class="g2" style="margin-top:22px">
   <div>${photo("Featured case image · 1200×800")}</div>
   <div><div class="ph t"></div>${bars(4)}<div class="g3" style="margin-top:24px">${[1, 2, 3].map(() => `<div><div class="stat" style="color:var(--ph)">—</div><div class="ph xs"></div></div>`).join("")}</div></div>
  </div>
  <div class="g3" style="margin-top:26px">${[1, 2, 3].map(() => `<div class="card"><div class="ph t"></div>${bars(3)}</div>`).join("")}</div>
  <div class="note"><b>Blocked.</b> This section stays empty until real AFIMAC cases are confirmed — one featured plus two or three supporting per industry. No placeholder figures go live.</div>`,
      spec: `<b>Elementor:</b> Heading · Text Editor · EK Funfact ×3 · Image · EK Icon Box ×3.`,
    },
    {
      n: "BLOCK 08 · RELATED INSIGHTS",
      h: `<h2>Related insights</h2>
  <div class="g3" style="margin-top:22px">${[1, 2, 3].map(() => `<div class="card">${photo("1280×720")}<div class="ph t" style="margin-top:16px"></div>${bars(2)}</div>`).join("")}</div>`,
      spec: `<b>Elementor:</b> EK Post Grid (3-up, category filter). Needs a “${o.short}” blog category before it can filter.`,
    },
    {
      cls: "sky",
      // The line-map embed's callout button targets this anchor.
      id: "get-the-numbers",
      n: "BLOCK 09 · GET THE NUMBERS",
      h: `
  <div class="g2"><div><h2>Get the numbers</h2><p class="lead">Shared lead-form block, navy band.</p>
  <ul class="tick"><li>Available labor resources</li><li>Rapid deployment timing</li><li>Ballpark costs</li><li>Estimated ROI impact</li></ul>
  <div class="btns"><a class="btn" href="${u("/get-in-touch")}">Get the Numbers</a></div></div>
  <div class="form"><input placeholder="First name"><input placeholder="Last name"><input class="full" placeholder="Company"><input placeholder="Work email"><input placeholder="Phone"><textarea class="full" rows="3" placeholder="Tell us about your situation"></textarea></div></div>`,
      spec: `<b>Elementor:</b> Metform · EK Icon List · Button. Global block.`,
    },
  ];

  const ordered = numbersFirst
    ? [gap, nums, rest[0], rest[1], rest[2], rest[3], rest[4]]
    : [gap, rest[0], rest[1], nums, rest[2], rest[3], rest[4]];

  const openItems: Block[] = numbersFirst
    ? [
        {
          cls: "wash",
          n: "OPEN ITEM",
          h: `<div class="note" style="margin-top:0"><b>Sequencing.</b> This prototype follows the built Logistics mockup, which runs the Numbers band directly after the Labor Gap. The copy deck — and Automotive and F&amp;B — run it after How We Deploy. <b>We recommend moving it in the mockup to match.</b> Toggle below to compare.</div>
     <div class="btns"><a class="btn ghost" href="${u("/industries/automotive")}">Compare against Automotive</a></div>`,
          spec: `Decision needed at structure sign-off.`,
        },
        {
          cls: "wash",
          n: "OPEN ITEM",
          h: `<div class="note" style="margin-top:0"><b>Sub-nav slot.</b> Logistics &amp; Warehousing has no entry under Industries in the agreed CSTL sub-nav. It needs one before launch.</div>`,
          spec: `Add to the Industries dropdown in the Elementor header template.`,
        },
      ]
    : [];

  return {
    title: o.title,
    crumb: "Solutions › CSTL › Industries › " + o.short,
    url: o.url,
    status: "build",
    active: `/industries/${o.slug}`,
    meta: {
      t: o.title + " | AFIMAC Global",
      d: "[meta description not written]",
      k: "[keyword set from the SEO audit]",
    },
    blocks: [
      scope,
      ...(o.speedArt
        ? [
            {
              n: "BLOCK 02a · SPEED TO PRODUCTION",
              h: `
    <h2>Time to a working crew on your floor</h2>
    <div class="g2" style="margin-top:24px;align-items:start">
     ${figure(o.speedArt)}
     <div>
      <p class="lead">The first real graphic delivered for this cluster, and the page's sharpest argument: the alternatives are measured in months, this is measured in days.</p>
      <div class="pullstat"><span class="pullstat-n">6–7 days</span><span class="pullstat-l">from call to crew on your line</span></div>
      <div class="note"><b>The pull-stat above is markup, not artwork.</b> It was supplied as a picture of a type lockup; built as type it stays selectable, searchable, translatable and legible at any zoom, and it inherits Museo automatically. <b>Do not place it as an image.</b> In Elementor it is a Heading plus a Text Editor in a container with a left orange border — no HTML widget needed.</div>
      <div class="note"><b>A landscape cut of this chart was also supplied</b> — same three bars, same figures, laid out wide rather than tall. It would suit a full-bleed row better than this two-column split does. <b>That file has not reached the repo</b>, so the 1200×1296 portrait version is what renders here; drop the landscape export into <code>public/graphics/</code> and repoint <code>speedArt</code> in <code>src/data/industries.ts</code>.</div>
      <div class="note stop"><b>Its three figures do not all match the copy.</b> The graphic says a temp or contract agency takes <b>21 to 35 days</b>; the <a href="${u("/how-it-works")}">How It Works</a> table and the <a href="${u("/faq")}">FAQ</a> both say <b>14 to 35</b>. It says direct hire is <b>45 to 90 days</b>; <a href="${u("/vs-local-staffing")}">CSTL vs. Local Staffing</a> says <b>30 to 90</b>. One of each pair is wrong.</div>
      <div class="note stop"><b>And it commits to “6–7 days”</b> — one of the five deployment-speed figures already in circulation, where the surrounding copy deliberately hedges to “within days”. Placing this graphic settles that argument by accident. <a href="${u("/brand-check")}">All conflicts →</a></div>
     </div>
    </div>`,
              spec: `<b>Elementor:</b> Image, 2-col container. <b>Resolve the two number mismatches before this goes live</b> — a graphic and a table on the same site disagreeing about the same benchmark is worse than either alone.`,
            } as Block,
          ]
        : []),
      {
        cls: "dark",
        n: "BLOCK 02 · HERO",
        h: `
    <p class="eyebrow">Critical Situation Travel Labor · Industries</p>
    <h1>${o.title}</h1>
    <div class="g2" style="margin-top:22px">
     <div>${
       o.heroQs
         ? `<p class="sub">${o.heroQs}</p><div class="ph t" style="background:rgba(255,255,255,.17)"></div>${bars(3)}`
         : `<div class="ph t" style="background:rgba(255,255,255,.17)"></div>${bars(4)}`
     }
      <div class="btns"><a class="btn" href="${u("/get-in-touch")}">Get the Numbers</a><a class="btn ghost" href="${u("/how-it-works")}">See how it works</a></div></div>
     ${photo(o.heroImg)}
    </div>`,
        spec: `<b>Elementor:</b> Container (2-col, bg image + navy overlay) · Heading ×3 · Text Editor · Button ×2. <b>Headline and body copy not written.</b>`,
      },
      ...ordered,
      ...openItems,
    ],
  };
}
