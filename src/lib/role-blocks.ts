/**
 * Blocks the seven role-page copy decks share verbatim in structure.
 *
 * What is NOT here, on purpose: each deck specifies its own presentation of
 * the four-phase process and its own middle-of-page argument, and names the
 * devices already taken by its siblings. Those live in the page files so the
 * differences stay visible rather than being flattened into options on a
 * template.
 */
import { photo, liveImg } from "./wireframe";
import { postArt, postTitleDrift } from "../data/live-media";
import { u } from "./base";
import { FAMILY_INTRO, ROLE_FAMILIES, ROLE_NOTES } from "../data/nav-options";
import type { Block } from "./types";

/** Hero — same shape on all seven role pages, dark band, full-bleed photo. */
export function roleHero(o: {
  h1: string;
  sub: string;
  body: string;
  /** Second button label; the first is always "Talk to AFIMAC". */
  cta2: string;
  /** In-page anchor the second button points at. */
  cta2Href: string;
  img: string;
  spec: string;
  note?: string;
}): Block {
  return {
    cls: "dark",
    n: "BLOCK 01 · HERO",
    h: `
  <p class="eyebrow">Critical Situation Travel Labor · Who We Deploy</p>
  <h1>${o.h1}</h1>
  <p class="sub"><b>${o.sub}</b></p>
  <p class="lead">${o.body}</p>
  <div class="btns"><a class="btn" href="${u("/get-in-touch")}">Talk to AFIMAC</a><a class="btn ghost" href="${o.cta2Href}">${o.cta2}</a></div>
  <div style="margin-top:34px">${photo(o.img)}</div>
  ${o.note ? `<div class="note">${o.note}</div>` : ""}`,
    spec: o.spec,
  };
}

/**
 * The job titles the nav lists under a family, read from the same data the
 * menu renders.
 *
 * A dropdown that promises six titles and a page that then shows a different
 * five is drift nobody notices until a client does. Taking both from
 * ROLE_FAMILIES makes that impossible rather than merely unlikely.
 */
/**
 * The deck's own role lines, kept visible under the grid that replaced them.
 *
 * The approved decks carry detail the nav's titles do not — processes, truck
 * classes, what "support" covers. Dropping it silently would lose approved
 * copy; printing it here leaves the choice on the page where it can be made.
 */
export const deckRoles = (lines: string[]): string =>
  `<div class="note"><b>The grid above is the nav's list. The deck's is not the same list.</b> The approved deck specs ${lines.length}: ${lines
    .map((l) => `<i>${l}</i>`)
    .join(" · ")}. That detail is worth keeping — <b>decide whether the grid shows the family's job titles or the deck's lines</b>, because the dropdown promises the first and the copy was written for the second.</div>`;

export const familyRoles = (family: string): string[] => {
  const f = ROLE_FAMILIES.find((x) => x.label === family);
  if (!f) throw new Error(`No role family named "${family}" in ROLE_FAMILIES`);
  return f.roles;
};

/**
 * Role list rendered as an icon grid — the decks all spec 96×96 line icons.
 *
 * Each card carries a line saying what the seat actually does, because a grid
 * of bare job titles reads as a word list rather than a capability.
 */
export function roleGrid(roles: string[]): string {
  return `<div class="g3 rolegrid" style="margin-top:22px">${roles
    .map(
      (r) =>
        `<div class="card"><div class="ph" style="width:34px;height:34px;margin-bottom:12px"></div><h3 style="margin-bottom:${
          ROLE_NOTES[r] ? "7px" : "0"
        }">${r}</h3>${ROLE_NOTES[r] ? `<p class="rolenote">${ROLE_NOTES[r]}</p>` : ""}</div>`,
    )
    .join("")}</div>`;
}

/**
 * The whole block: a line of context, the grid, and the flag that the lines
 * under the titles are ours rather than the client's.
 */
export function roleSection(family: string, heading: string, extra = ""): string {
  return `
  <h2>${heading}</h2>
  ${FAMILY_INTRO[family] ? `<p class="lead">${FAMILY_INTRO[family]}</p>` : ""}
  ${extra}
  ${roleGrid(familyRoles(family))}
  <div class="note stop"><b>The line under each job title is ours, not the deck's.</b> The titles are the client's and are settled; what each seat does was written here so the section could be judged at the right density. <b>Every line is an operational claim — certifications, equipment classes, what a seat is and is not responsible for — and needs AFIMAC ops to confirm it before build.</b></div>`;
}

/** FAQ accordion. First item open, matching the hub and the industry pages. */
export function faqBlock(o: {
  n: string;
  h2: string;
  items: [string, string][];
  spec: string;
  note?: string;
  cls?: string;
}): Block {
  return {
    cls: o.cls ?? "wash",
    n: o.n,
    h: `
  <h2>${o.h2}</h2>
  <div class="acc" style="margin-top:22px">
  ${o.items
    .map(
      ([q, a], i) =>
        `<details${i === 0 ? " open" : ""}><summary>${q}</summary><div class="ans">${a}</div></details>`,
    )
    .join("")}
  </div>
  <p style="margin-top:22px"><a href="${u("/faq")}">See the full Travel Labor FAQ →</a></p>
  ${o.note ? `<div class="note">${o.note}</div>` : ""}`,
    spec: o.spec,
  };
}

/**
 * Flags where the deck cites a post under a wording the live site does not use.
 * Rendered under the insights grid, because a card whose title does not match
 * the post it links to is a broken link waiting to happen.
 */
function drift(titles: string[]): string {
  const off = titles
    .map((t) => [t, postTitleDrift(t)] as const)
    .filter((x): x is readonly [string, string] => x[1] !== null);
  if (!off.length) return "";
  return `<div class="note stop">${off.length === 1 ? "<b>One title here is not the live title.</b>" : `<b>${off.length} titles here are not the live titles.</b>`} ${off
    .map(([cited, live]) => `The deck says “${cited}”; the post is published as “${live}”.`)
    .join(" ")} Cite the live wording, or the card links to a post it does not name.</div>`;
}

/** Related insights — three live posts, a different combination on every page. */
export function insightsBlock(o: { n: string; titles: string[]; spec: string }): Block {
  return {
    n: o.n,
    h: `
  <h2>Related insights</h2>
  <div class="g3" style="margin-top:22px">
   ${o.titles
     .map((t) => {
       const a = postArt(t);
       return `<div class="card">${a ? liveImg(a) : photo("1280×720 (16:9) · post featured image")}<h3 style="margin-top:16px">${t}</h3><a class="readmore" href="${u("/overview")}">Read More »</a></div>`;
     })
     .join("")}
  </div>${drift(o.titles)}`,
    spec: o.spec,
  };
}

/** Lead form — identical fields on all seven pages, Mobilization Sky band. */
export function leadFormBlock(o: {
  n: string;
  h2: string;
  bullets: string[];
  illo: string;
  spec: string;
}): Block {
  return {
    cls: "sky",
    n: o.n,
    h: `
  <div class="g2">
   <div>
    <h2>${o.h2}</h2>
    <p>Tell us what you’re facing and we’ll come back with:</p>
    <ul class="tick">${o.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    <p style="margin-top:22px"><b style="color:#fff">Urgent line</b> · 1.800.554.4622</p>
    <div style="margin-top:22px">${photo(o.illo)}</div>
   </div>
   <div>
    <div class="form">
     <input placeholder="First name"><input placeholder="Last name">
     <input class="full" placeholder="Company">
     <input placeholder="Work email"><input placeholder="Phone">
     <input class="full" placeholder="Site location (City, State/Province)">
     <textarea class="full" rows="4" placeholder="Tell us about your situation"></textarea>
     <div class="full"><a class="btn" href="${u("/get-in-touch")}">Talk to a specialist</a></div>
     <p class="full" style="font-size:12.5px">By submitting, you agree to AFIMAC’s Privacy Policy. We respond within one business day.</p>
    </div>
   </div>
  </div>`,
    spec: o.spec,
  };
}

/**
 * The flag every family page carries in its hero.
 *
 * The H1, the title and the meta on these pages are no longer the deck's —
 * they follow the family the nav puts the page under. That is a real
 * departure from approved copy and is said on the page rather than left for
 * someone to discover at build.
 */
export const FAMILY_RETITLE = `<b>The H1, the page title and the meta here are not the deck's.</b> The nav entry is <i>Who We Deploy</i> and this page sits under its family rather than under one job title, so the title follows the family. <b>The deck's own wording is unchanged and still approved.</b> If the family titles are right, the decks need re-issuing to match; if the decks are right, the nav is what moves. <b>One or the other has to give.</b>`;

/** The naming flag every role deck carries into its cost answer. */
export const CONSULTATION_FLAG = `“Consultation” in the cost answer carries the same naming flag as the hub — <a href="${u("/brand-check")}">still open</a>, pending Maria.`;

/** The cost answer, worded identically across all seven decks. */
export const COST_ANSWER =
  "Cost depends on roles, headcount, shift coverage, location, and duration. AFIMAC provides a scoped estimate during the consultation, including the risk-avoided impact.";

/** The supervision answer, worded identically across six of the seven decks. */
export const SUPERVISION_ANSWER =
  "AFIMAC provides on-site supervision and a single point of contact, working alongside your team.";
