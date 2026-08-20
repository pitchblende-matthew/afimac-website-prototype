/**
 * Industry cluster template — one layout, three pages.
 *
 * Automotive and F&B run the Numbers band after How We Deploy, matching the
 * copy deck. Logistics runs it directly after the Labor Gap, matching the built
 * mockup — the discrepancy is surfaced as an OPEN ITEM block on that page
 * rather than silently normalised, because it is a live sign-off question.
 */
import { bars, photo, figure } from "./wireframe";
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

  const nums: Block = {
    cls: "blue",
    n: "BLOCK 0" + (numbersFirst ? "4" : "6") + " · AFIMAC BY THE NUMBERS",
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
      h: `
  <h2>${o.rolesTitle}</h2>
  <div style="margin:22px 0">${o.mapArt ? figure(o.mapArt) : photo(o.map)}</div>
  <div class="g3">${o.roles.map((r) => `<div class="card"><div class="ph" style="width:34px;height:34px;margin-bottom:14px"></div><h3>${r}</h3>${bars(2)}</div>`).join("")}</div>
  <div class="btns"><a class="btn ghost" href="${u("/roles")}">See all CSTL roles</a></div>`,
      spec: `<b>Elementor:</b> HTML widget (${o.slug === "food-beverage" ? "seven-station line map" : "line map"}) · Container (3-col) · EK Icon Box ×${o.roles.length} · Button. <b>Role blurbs not written.</b>`,
    },
    {
      cls: "wash",
      n: "BLOCK 0" + (numbersFirst ? "6" : "5") + " · HOW WE DEPLOY",
      h: `
  <h2>How we deploy</h2>
  <div style="margin:22px 0">${photo(o.slug === "food-beverage" ? "Seven-day deployment bar · SVG 2400×600" : "Deployment timeline · SVG 2400×600 (4:1) · reuse the shared asset")}</div>
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
