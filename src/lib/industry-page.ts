/**
 * Industry cluster template — one layout, three pages.
 *
 * Automotive and F&B run the Numbers band after How We Deploy, matching the
 * copy deck. Logistics runs it directly after the Labor Gap, matching the built
 * mockup — the discrepancy is surfaced as an OPEN ITEM block on that page
 * rather than silently normalised, because it is a live sign-off question.
 */
import { bars, photo, figure, artPair } from "./wireframe";
import { PHASE_TIMELINE } from "../data/graphics";
import { LIVE_INDUSTRIES, LIVE_ROLE_GROUPS, LIVE_SITUATIONS } from "../data/live-industries";
import { u } from "./base";
import type { Industry } from "../data/industries";
import { INDUSTRY_COPY } from "../data/industry-copy";
import type { Block, PageProps } from "./types";

export function industryPage(o: Industry): PageProps & { blocks: Block[] } {
  const numbersFirst = o.slug === "logistics-warehousing";
  /**
   * The approved page copy, where the deck has been written. Before it existed
   * this template drew grey bars for every headline and paragraph; the decks say
   * "final page copy … drop it into the Elementor template as-is", so where `c`
   * is present the words go in and the bars come out.
   */
  const c = INDUSTRY_COPY[o.slug];
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

  /** Plain-text length, so entities count as the one character a crawler sees. */
  const chars = (t: string) => t.replace(/&amp;/g, "&").replace(/<[^>]+>/g, "").length;

  /**
   * The deck's SEO values against the section's own three formulas. Both
   * overshoot on both pages, and the deck's slug is not the URL the page keeps —
   * all three are decisions, so they are stated rather than quietly normalised.
   */
  const seoNote: Block[] = c
    ? [
        {
          n: "OPEN ITEM · THE DECK'S SEO VALUES DO NOT MEET THE SECTION'S OWN TARGETS",
          h: `
  <div class="tscroll" style="margin-top:0"><table class="cmp"><thead><tr><th>Field</th><th>The deck</th><th class="hl">The section's formula</th></tr></thead><tbody>
   <tr><th>SEO title</th><td>${chars(c.seo.title)} characters</td><td class="hl">50–60</td></tr>
   <tr><th>Meta description</th><td>${chars(c.seo.desc)} characters</td><td class="hl">145–160</td></tr>
   <tr><th>URL slug</th><td><code>${c.seo.slug}</code></td><td class="hl">The page keeps <code>${o.url}</code></td></tr>
  </tbody></table></div>
  <div class="note stop"><b>All three need a decision before this ships.</b> The title and description are ${chars(c.seo.title) - 60} and ${chars(c.seo.desc) - 160} characters over, so both will be truncated in results — the description loses roughly a fifth of its length. <b>The slug is the bigger one</b>: the deck proposes a new URL one level up, which would replace a page that is already live and indexed rather than update it. <a href="${u("/industries")}">The URL conflict in full →</a></div>`,
          spec: `The meta table above this block shows the deck's values as written, with their counts. Nothing here has been trimmed to fit — that is a copy decision, not a build one.`,
        },
      ]
    : [];

  /**
   * What this page carries today, for the two industries whose update copy is
   * already written. The five without an update render the live page in full
   * from [slug].astro; here a condensed version is enough — the point is the
   * delta, not a second copy of the page.
   */
  const live = LIVE_INDUSTRIES[o.slug];
  const asLive: Block[] = live
    ? [
        {
          cls: "wash",
          n: "PHASE 0 · WHAT THIS PAGE CARRIES TODAY",
          h: `
  <p class="lead">Everything below this block is the <a href="${u("/launch-phases")}">phase 2</a> update. This is <b>phase 0</b> — the page as published, read off afimacglobal.com on 9 Sep 2026.</p>
  <div class="tscroll" style="margin-top:20px"><table class="cmp"><thead><tr><th>Block</th><th>As live today</th><th class="hl">After the update</th></tr></thead><tbody>
   <tr><th>H1</th><td>${live.h1}<br><span style="color:var(--spec)">${live.tagline}</span></td><td class="hl">${o.title}</td></tr>
   <tr><th>Roles</th><td>The same <b>15</b> generic roles as every other industry page, in three groups: ${LIVE_ROLE_GROUPS.map(([g]) => g).join(" · ")}</td><td class="hl">${o.roles.length} written for ${o.short}</td></tr>
   <tr><th>Situations</th><td>The same five on all seven pages: ${LIVE_SITUATIONS.join(" · ")}</td><td class="hl">Industry-specific</td></tr>
   <tr><th>Risks</th><td>${live.risks.join(" · ")}</td><td class="hl">Industry-specific</td></tr>
   <tr><th>Analyst citation</th><td>${live.source}</td><td class="hl">Keep it</td></tr>
   <tr><th>Form heading</th><td>${live.formHeading}</td><td class="hl">Get the Numbers, section-wide</td></tr>
  </tbody></table></div>
  <div class="note"><b>The live page's one genuinely industry-specific block is its analyst citation</b> — ${live.source}. Everything else above is either shared verbatim with the other six pages or, on this page, written for the industry and worth keeping. <b>Do not lose the citation in the rewrite.</b></div>
  <div class="note"><b>See it in full on a page without an update:</b> <a href="${u("/industries/chemicals-plastics")}">Chemicals &amp; Plastics</a> renders the live page block for block.</div>`,
          spec: `Live SEO title: <code>${live.seoTitle}</code>. This block is prototype chrome — it does not ship.`,
        },
      ]
    : [];

  /** Bars for the deck's speed infographic, where the deck states one. */
  const speedRows = c
    ? c.speedBars
        .map(
          ([label, value], i) =>
            `<tr${i === 2 ? ' class="hl"' : ""}><th>${label}</th><td>${value}</td></tr>`,
        )
        .join("")
    : "";

  const gap: Block = {
    cls: "wash",
    n: "BLOCK 03 · " + (c ? c.gapEyebrow.replace(/&amp;/g, "&").toUpperCase() : "THE " + o.short.toUpperCase() + " LABOR GAP"),
    h: c
      ? `
  <p class="eyebrow">${c.gapEyebrow}</p>
  <h2>${c.gapH2}</h2>
  <p class="lead">${c.gapBody}</p>
  <div class="g2" style="margin-top:28px">
   <div class="duo"><div class="duohead">${c.situationsH3}</div>
    <div class="duobody"><ul class="check">${c.situations.map((x) => `<li>${x}</li>`).join("")}</ul></div></div>
   <div class="duo risk"><div class="duohead">${c.risksH3}</div>
    <div class="duobody"><ul class="warn">${c.risks.map((x) => `<li>${x}</li>`).join("")}</ul></div></div>
  </div>
  ${
    o.speedArt
      ? `<div class="note"><b>The deck specs the speed comparison here, under this block.</b> It is built, and runs as its own block below so the artwork gets the width it needs.</div>`
      : `<div class="tscroll" style="margin-top:26px"><table class="cmp" style="max-width:640px"><thead><tr><th>${c.speedLabel}</th><th>Time to a working crew</th></tr></thead><tbody>${speedRows}</tbody></table></div>
  <div class="note stop"><b>These bars are specified and not built.</b> The deck carries the label “${c.speedLabel}” with the three figures above; no speed graphic was delivered for this page. Shown as a table so the figures are reviewable and nothing reads as a missing asset. <a href="${u("/brand-check")}">All conflicts →</a></div>`
  }`
      : `
  <h2>The ${o.short} labor gap</h2>
  <div class="ph t"></div>${bars(2)}
  <div class="g2" style="margin-top:28px">
   <div><h3>What’s happening on the floor</h3>${bars(5)}</div>
   <div><h3>What it costs you</h3>${bars(5)}</div>
  </div>`,
    spec: c
      ? `<b>Elementor:</b> Container (2-col) · Heading ×3 · Text Editor · EK Icon List ×2${o.speedArt ? "" : " · EK Progress Bar ×3"}. Copy is deck section 03, verbatim.`
      : `<b>Elementor:</b> Container (2-col) · EK Icon List ×2 · EK Progress Bar ×3. <b>Copy not written.</b>`,
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
        h: c ? `<h2>${c.numbersH2}</h2>` : "",
        embed: {
          name: o.statBandEmbed,
          caption: `<b>Live embed, delivered.</b> This is the HTML widget itself, not a picture of it — the prototype renders the same file the build pastes into Elementor. The counters run once when the band scrolls into view and then hold; they respect <code>prefers-reduced-motion</code> and fall back to the static figures where <code>IntersectionObserver</code> is missing.`,
        },
        hEnd: `
  <div class="note stop"><b>Three figures here, four in the approved package, and four different ones on the live page.</b> This band runs <b>40+ years · 20,000+ skilled laborers · 18+ industries served</b>. The June-05 package approved <b>40+ years · 20,000+ skilled laborers · 72 hrs or less on site · 1–500+ scalable crew size</b> — so the embed drops the two figures carrying the speed and the scale arguments, and adds <b>18+ industries served</b>, which is in neither that package nor anywhere else in this section and has no source attached. The live page's own credibility block runs a fourth set again: Years · Industry Deployments · Companies Served · Laborers Provided. <b>One set has to win before this ships.</b> <a href="${u("/brand-check")}">All conflicts →</a></div>
  <div class="note stop"><b>The widget drops the deck’s H2.</b> It carries the lede — “For four decades, Fortune 500 manufacturers have called AFIMAC…” — but not the heading above it, which the deck writes as <b>“${
          c ? c.numbersH2 : "The premier resource for … labor under pressure"
        }”</b>. That heading is supplied as a separate Elementor Heading above the widget here. <b>Either add it to the widget or keep the Heading element</b>, but the block cannot ship headless.</div>
  <div class="note"><b>Build note.</b> The lede lives inside the widget’s HTML. Whoever edits copy in Elementor will not find it in a Text Editor; it is only reachable by opening the file.</div>`,
        spec: `<b>Elementor:</b> HTML widget — paste <code>/embeds/afimac-auto-stat-band.html</code> whole. It is self-contained: no libraries, no external requests, no browser storage. It replaces the EK Funfact / Counter ×4 row this block specs on the other industry pages, and paints its own navy, so the section needs no background colour. <b>Figures still need sourcing.</b>`,
      }
    : {
        cls: "blue",
        n: numsN,
        h: `${c ? `<h2>${c.numbersH2}</h2><p class="lead">${c.numbersBody}</p>` : ""}
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

  /**
   * The deck's station grid. Hoisted out of the block below because the Astro
   * compiler cannot parse a third level of nested template interpolation.
   */
  const stationCards = c
    ? c.stations
        .map(
          (st) =>
            `<div class="card"><div class="blocknum">${st.n}</div><h3 style="margin-top:6px">${st.title}</h3><ul class="check" style="margin-top:12px">${st.roles
              .map((r) => `<li>${r}</li>`)
              .join("")}</ul></div>`,
        )
        .join("")
    : "";

  /** The deck's four deployment phases, with their durations and bullets. */
  const phaseCards = c
    ? c.phases
        .map(
          (ph) =>
            `<div class="card"><div class="blocknum">PHASE ${ph.n}</div><h3>${ph.title}</h3><p style="font-size:13px;color:var(--cstl-blue);font-weight:700;margin:6px 0 10px">${ph.days}</p><ul class="check">${ph.bullets
              .map((x) => `<li>${x}</li>`)
              .join("")}</ul></div>`,
        )
        .join("")
    : "";

  /** The deck's three related-insight titles and their categories. */
  const insightCards = c
    ? c.insights
        .map(
          ([t, cat]) =>
            `<div class="card">${photo("1280×720")}<h3 style="margin-top:16px;font-size:17px">${t}</h3><p style="font-size:12.5px;color:var(--spec)">${cat}</p></div>`,
        )
        .join("")
    : "";

  const rest: Block[] = [
    {
      n: "BLOCK 05 · " + (c ? c.rolesSectionTitle.replace(/&amp;/g, "&").toUpperCase() : o.rolesTitle.toUpperCase()),
      h:
        (c ? `<h2>${c.rolesH2}</h2><p class="lead">${c.rolesBody}</p>` : `<h2>${o.rolesTitle}</h2>`) +
        // The flat roles map and the live widget are the same content. The
        // delivery says to pick one: the widget where it can be embedded, the
        // image where pictures are being placed. So the image renders only when
        // there is no embed to carry it.
        (o.lineMapEmbed
          ? ""
          : `<div style="margin:22px 0">${o.rolesArt ? figure(o.rolesArt) : o.mapArt ? figure(o.mapArt) : photo(o.map)}</div>`),
      ...(o.lineMapEmbed
        ? {
            embed: {
              name: o.lineMapEmbed,
              caption: `<b>Live embed, delivered.</b> This is the HTML widget itself, not a picture of it — the prototype renders the same file the build pastes into Elementor, so the two cannot drift apart. Click a station, or arrow-key along the rail, to change the panel. It supersedes the flat <code>afimac-auto-assembly-sequence.png</code> in this slot; that file stays in <code>public/graphics/</code> as the fallback for print, email and PDF, where nothing is clickable. <b>The flat roles map ships with it and is deliberately not rendered here</b> — the delivery calls them one choice, not two elements: the widget reveals one station at a time, which is right on the page; the image is the same content flat, for placing pictures rather than embedding.`,
            } as const,
          }
        : {}),
      hEnd: `
  ${
    o.lineMapEmbed
      ? `<div class="note"><b>The station cards below are the deck's own role inventory, not a summary of it</b> — ${
        c ? `${c.stations.length} stations and ${c.stations.reduce((n, st) => n + st.roles.length, 0)} crews` : "seven stations"
      }, in the deck's order and wording. They previously showed six generic roles with grey bars for blurbs, which is what made this block look thin. <b>The embed above carries the same list</b>, one station at a time; the cards make all of it visible at once and are what a printed or emailed version would use.</div>
  <div class="note"><b>Two CTAs in one block.</b> The embed ends with its own callout card — “Don’t see the role you need?” with an <b>Ask about a role</b> button — and the block ends with <b>See all CSTL roles</b>. The embed’s own build comment says to delete that callout where it is built as a separate Elementor element; <b>that is the recommendation here</b>, since the callout targets <code>#get-the-numbers</code> further down this same page while the block button goes to the roles hub.</div>
  <div class="note"><b>Colour.</b> The embed and all four automotive graphics use <code>#E8701A</code> orange; the live site’s CTAs are <code>#ff5544</code> coral and the brand guide says <code>#ed6344</code>. On top of that the embed’s <b>Ask about a role</b> button is navy, so it will not match the coral <b>Get the Numbers</b> button further down this page. <a href="${u("/brand-check")}">All conflicts →</a></div>`
      : ""
  }
  ${
    c
      ? `<div class="g3" style="margin-top:26px">${stationCards}</div>
  <div class="card" style="margin-top:26px;border-color:var(--cstl-blue);border-width:2px">
   <h3 style="margin-top:0">${c.calloutText}</h3>
   <div class="btns" style="margin-top:12px"><a class="btn ghost" href="${u("/get-in-touch")}">${c.calloutButton}</a></div>
  </div>`
      : `<div class="g3">${o.roles.map((r) => `<div class="card"><div class="ph" style="width:34px;height:34px;margin-bottom:14px"></div><h3>${r}</h3>${bars(2)}</div>`).join("")}</div>`
  }
  <div class="btns"><a class="btn ghost" href="${u("/roles")}">See all CSTL roles</a></div>`,
      spec: o.lineMapEmbed
        ? `<b>Elementor:</b> HTML widget — paste <code>/embeds/afimac-auto-line-map.html</code> whole, directly under the H2. Self-contained: no libraries, no external requests, no browser storage, all styles scoped to <code>.afx-lm</code>. Its two <code>--afx-*</code> font stacks were pointed at the Museo / Museo Sans Custom Fonts already loaded in Elementor. Then Container (3-col) · EK Icon Box ×${c ? c.stations.length : o.roles.length}${
            c ? ", one per station" : ""
          } · Button.${c ? " Station names and crew lists are deck section 04, verbatim." : " <b>Role blurbs not written.</b>"}`
        : `<b>Elementor:</b> HTML widget (${o.slug === "food-beverage" ? "seven-station line map" : "line map"}) · Container (3-col) · EK Icon Box ×${c ? c.stations.length : o.roles.length} · Button.${c ? " Station names and crew lists are deck section 04, verbatim." : " <b>Role blurbs not written.</b>"}`,
    },
    {
      cls: "wash",
      // The hero's second CTA — "See how we deploy" — targets this anchor.
      id: "deploy",
      n: "BLOCK 0" + (numbersFirst ? "6" : "5") + " · HOW WE DEPLOY",
      h: `
  <h2>${c ? c.deployH2 : "How we deploy"}</h2>
  <div style="margin:22px 0">${artPair(PHASE_TIMELINE)}</div>
  ${
    o.slug === "food-beverage"
      ? `<div class="note stop"><b>The durations do not reconcile on this page.</b> The copy doc says <b>Consultation: 2–3 days</b>, but the day scale in the graphic runs Consultation across <b>D1–2</b> — two days of slot for three days of work. <a href="${u("/industries/logistics-warehousing")}">Logistics</a> has this right, at 1–2 days against D1–2, so F&amp;B is the outlier. Fix the copy or re-cut the scale.</div>`
      : ""
  }
  <div class="note">${
    o.slug === "food-beverage"
      ? `<b>The shared timeline, standing in.</b> The F&amp;B deck specs a bespoke seven-day deployment bar, which does not exist. Given this one carries the same four phases and real durations, <b>the bespoke version is hard to justify</b> — drop it unless F&amp;B genuinely deploys on a different clock.`
      : `<b>The shared four-phase timeline, exactly as this block's spec asks</b> — one asset across the section rather than a new one per industry.`
  }</div>
  ${
    o.deployArt
      ? `<div style="margin:30px 0 22px">${artPair(o.deployArt)}</div>
  <div class="note stop"><b>Two timelines for the same deployment, on the same block, disagreeing.</b> The shared graphic above runs <b>four</b> phases, calls phase 1 <b>Assessment</b> and puts no day numbers on anything. The ${o.short} one runs <b>three</b>, calls phase 1 <b>Consultation</b>, pins a hard day range to each, and demotes Demobilization to a footnote. Between them this page answers the open phase-1 naming question in both directions at once. It also puts the crew on your floor partway through <b>day 6</b> — the same “6–7 days” commitment the speed graphic makes at the top of this page, where the written copy deliberately hedges to “within days”. <b>Ship one of these two.</b></div>`
      : ""
  }
  ${
    c
      ? `<div class="note stop"><b>The graphic and the cards under it now disagree in writing.</b> The shared timeline says <b>Assessment</b>; the deck’s own phase cards, below, say <b>${c.phases[0].title}</b> — and so does the live <a href="${u("/overview")}">overview</a>. Two of the three say Consultation. <b>This is the naming decision, no longer hypothetical.</b> <a href="${u("/brand-check")}">All conflicts →</a></div>`
      : `<div class="note stop"><b>Its phase names must match the ones below it before this ships.</b> The graphic says Assessment · Mobilization · Deployment · Demobilization; the cards under it say the same, but the live <a href="${u("/overview")}">overview</a> calls phase 1 Consultation. That decision is still open.</div>`
  }
  <div class="g4">${c ? phaseCards : ["Assessment", "Mobilization", "Deployment", "Demobilization"].map((x, i) => `<div class="card"><div class="blocknum">PHASE 0${i + 1}</div><h3>${x}</h3>${bars(3)}</div>`).join("")}</div>`,
      spec: `<b>Elementor:</b> HTML widget (timeline) or EK Advanced Timeline · EK Icon Box ×4. Phase names must match How It Works — pending the Assessment/Consultation decision.`,
    },
    {
      n: "BLOCK 07 · " + (c ? c.successTitle.replace(/&amp;/g, "&").toUpperCase() : "CLIENT SUCCESS"),
      h: `
  <h2>${c ? c.successTitle : "Client success"}</h2>
  <div class="g2" style="margin-top:22px">
   <div>${photo("Featured case image · 1200×800")}</div>
   <div><div class="ph t"></div>${bars(4)}<div class="g3" style="margin-top:24px">${[1, 2, 3].map(() => `<div><div class="stat" style="color:var(--ph)">—</div><div class="ph xs"></div></div>`).join("")}</div></div>
  </div>
  <div class="g3" style="margin-top:26px">${[1, 2, 3].map(() => `<div class="card"><div class="ph t"></div>${bars(3)}</div>`).join("")}</div>
  <div class="note"><b>Blocked, and the deck says so too.</b> ${c ? c.successNote : "This section stays empty until real AFIMAC cases are confirmed — one featured plus two or three supporting per industry."} <b>The deck’s instruction is explicit: “Use approved AFIMAC figures only. Leave this section out until those cases are confirmed rather than running placeholder numbers.”</b></div>`,
      spec: `<b>Elementor:</b> Heading · Text Editor · EK Funfact ×3 · Image · EK Icon Box ×3.`,
    },
    {
      n: "BLOCK 08 · RELATED INSIGHTS",
      h: `<h2>Related insights</h2>
  <div class="g3" style="margin-top:22px">${c ? insightCards : [1, 2, 3].map(() => `<div class="card">${photo("1280×720")}<div class="ph t" style="margin-top:16px"></div>${bars(2)}</div>`).join("")}</div>
  ${c ? `<div class="note"><b>The three titles are the deck’s own, and it says they map to existing articles</b> — “Pull the three most relevant live posts from the AFIMAC blog”. <b>None of the three has been matched to a live URL yet</b>, so they are shown as written and need checking against the blog before the rail is built.</div>` : ""}`,
      spec: `<b>Elementor:</b> EK Post Grid (3-up, category filter). Needs a “${o.short}” blog category before it can filter.`,
    },
    {
      cls: "sky",
      // The line-map embed's callout button targets this anchor.
      id: "get-the-numbers",
      n: "BLOCK 09 · " + (c ? c.formSectionTitle.replace(/&amp;/g, "&").toUpperCase() : "GET THE NUMBERS"),
      h: `
  <div class="g2"><div><h2>${c ? c.formH2 : "Get the numbers"}</h2><p class="lead">${c ? c.formIntro : "Shared lead-form block, navy band."}</p>
  <ul class="tick">${(c ? c.formBullets : ["Available labor resources", "Rapid deployment timing", "Ballpark costs", "Estimated ROI impact"]).map((x) => `<li>${x}</li>`).join("")}</ul>
  <div class="btns"><a class="btn" href="${u("/get-in-touch")}">${c ? c.formButton : "Get the Numbers"}</a></div>
  ${c ? `<p style="margin-top:16px"><b>Urgent line:</b> ${c.urgentLine}</p>` : ""}</div>
  <div class="form"><input placeholder="First name"><input placeholder="Last name"><input class="full" placeholder="Company"><input placeholder="Work email"><input placeholder="Phone">${
    c ? `<input class="full" placeholder="${c.formFields[3]}">` : ""
  }<textarea class="full" rows="3" placeholder="${c ? c.formFields[4] : "Tell us about your situation"}"></textarea></div></div>
  ${
    c
      ? `<p style="font-size:12.5px;color:var(--spec);margin-top:18px">${c.consent}</p>
  <div class="note stop"><b>The urgent line here is 1.844.99.AFIMAC, and the contact page says that number is wrong.</b> The <a href="${u("/get-in-touch")}">contact deck</a> gives the published number as <b>1.800.554.4622</b> and flags 1.844.99.AFIMAC as inherited from an older document. All three industry decks carry the older one. <a href="${u("/brand-check")}">All conflicts →</a></div>
  <div class="note"><b>Two fields this block did not have.</b> The deck specs a location field and names the message field — “${c.formFields[3]}” and “${c.formFields[4]}” — so the form is six fields, not five. The consent line above it is the deck’s and is required copy, not a note.</div>`
      : ""
  }`,
      spec: c
        ? `<b>Elementor:</b> Metform · EK Icon List · Button. Copy is deck section 09, verbatim, including the consent line. Global block — <b>but the heading, bullets and button label are page-specific here</b>, so they cannot come from the global instance.`
        : `<b>Elementor:</b> Metform · EK Icon List · Button. Global block.`,
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
    meta: c
      ? { t: c.seo.title, d: c.seo.desc, k: `${c.seo.primary} · ${c.seo.secondary}` }
      : {
          t: o.title + " | AFIMAC Global",
          d: "[meta description not written]",
          k: "[keyword set from the SEO audit]",
        },
    blocks: [
      scope,
      ...seoNote,
      ...asLive,
      ...(o.speedArt
        ? [
            {
              n: "BLOCK 02a · SPEED TO PRODUCTION",
              h: `
    <h2>Time to a working crew on your floor</h2>
    <div style="margin-top:24px">${artPair(o.speedArt)}</div>
    <div class="g2" style="margin-top:26px;align-items:start">
     <div>
      <p class="lead">The first real graphic delivered for this cluster, and the page's sharpest argument: the alternatives are measured in months, this is measured in days.</p>
      <div class="pullstat"><span class="pullstat-n">6–7 days</span><span class="pullstat-l">from call to crew on your line</span></div>
      <div class="note"><b>The pull-stat above is markup, not artwork.</b> It was supplied as a picture of a type lockup; built as type it stays selectable, searchable, translatable and legible at any zoom, and it inherits Museo automatically. <b>Do not place it as an image.</b> In Elementor it is a Heading plus a Text Editor in a container with a left orange border — no HTML widget needed.</div>
      <div class="note"><b>The landscape cut has arrived and is what renders here.</b> Wide rather than tall, so it now runs full width instead of fighting the two-column split — and a separately laid-out narrow version swaps in under 780px.</div>
      <div class="note"><b>Its figures are now the ruled ones, and the copy is what needs correcting.</b> Editorial confirmed 45–90 / 21–35 / 6–7 as defendable on 21 Aug 2026 and the artwork was cut to match. Where a page still says 14–35 for an agency — <a href="${u("/how-it-works")}">How It Works</a>, the <a href="${u("/faq")}">FAQ</a>, <a href="${u("/vs-traditional")}">Travel vs. Traditional</a> — <b>the copy is the thing that is out of date.</b> <a href="${u("/brand-check")}">All conflicts →</a></div>
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
    <p class="eyebrow">${c ? c.eyebrow : "Critical Situation Travel Labor · Industries"}</p>
    <h1>${o.title}</h1>
    <div class="g2" style="margin-top:22px">
     <div>${
       c
         ? `<p class="sub"><b>${c.heroSub}</b></p><p class="lead">${c.heroBody}</p>`
         : o.heroQs
           ? `<p class="sub">${o.heroQs}</p><div class="ph t" style="background:rgba(255,255,255,.17)"></div>${bars(3)}`
           : `<div class="ph t" style="background:rgba(255,255,255,.17)"></div>${bars(4)}`
     }
      <div class="btns"><a class="btn" href="${u("/get-in-touch")}">${c ? c.ctas[0] : "Get the Numbers"}</a><a class="btn ghost" href="${c ? "#deploy" : u("/how-it-works")}">${c ? c.ctas[1] : "See how it works"}</a></div></div>
     <div>${photo(o.heroImg)}${
       o.heroChip
         ? `<div class="note"><b>The delivered hero overlay chip is not placed.</b> <code>${o.heroChip.src.split("/").pop()}</code> is built to sit <i>on</i> the photograph, over the navy scrim. With no photograph yet it can only float in an empty box, which reads as a stray graphic rather than a design. It stays in <code>public/graphics/</code> for whoever builds the hero in Elementor. <b>Decided 9 Sep 2026.</b></div>`
         : ""
     }</div>
    </div>`,
        spec: c
          ? `<b>Elementor:</b> Container (2-col, bg image + navy overlay) · Heading ×3 · Text Editor · Button ×2. Copy is deck section 02, verbatim. <b>The deck offers three hero layouts</b> (bold / editorial / overlay) and says the copy is layout-agnostic — the layout choice is still open.`
          : `<b>Elementor:</b> Container (2-col, bg image + navy overlay) · Heading ×3 · Text Editor · Button ×2. <b>Headline and body copy not written.</b>`,
      },
      ...ordered,
      ...openItems,
    ],
  };
}
