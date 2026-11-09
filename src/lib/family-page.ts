/**
 * THE WHO WE DEPLOY PAGE TEMPLATE.
 *
 * All six family pages render from here. Before this, each page carried its
 * own block order and its own process device — seven distinct presentations,
 * which was deliberate while the decks were being written and is a liability
 * now that the six are a set: a reader moving between them had to re-learn
 * the page each time, and a change to the shared parts had to be made six
 * times and was twice forgotten.
 *
 * The order is the Machining & Precision Manufacturing page's, which was the
 * fullest of the six:
 *
 *   01 Hero · 02 The labor gap · 03 Roles we deploy · 04 How it works
 *   05 What's included · 06 Proof it works · 07 FAQ · 08 Related insights
 *   09 Talk to AFIMAC
 *
 * What a page supplies is copy. What it cannot vary is the order, the
 * devices, or the parts of the service that are the same whoever is deployed.
 */
import { photo, artPair, figure } from "./wireframe";
import type { Art, ArtPair } from "../data/graphics";
import { u } from "./base";
import {
  roleHero, roleSection, deckRoles, faqBlock, insightsBlock, leadFormBlock,
  CONSULTATION_FLAG, FAMILY_RETITLE,
} from "./role-blocks";
import type { Block as BlockType } from "./types";

/** One phase of the four: its band label, its name, and what it covers. */
export type Phase = [label: string, name: string, items: string[]];

export interface FamilyPageData {
  /** The family exactly as ROLE_FAMILIES spells it — the roles grid keys off it. */
  family: string;
  /** Path under /who-we-deploy/, no slashes. */
  slug: string;

  hero: { h1: string; sub: string; body: string; cta2: string; img: string; note?: string };
  /**
   * Block 02 — why the seats are hard to fill, in this family's terms.
   *
   * `triggers` is the "when to call" list four of the six pages carried as a
   * block of their own. It rides inside the gap rather than being dropped:
   * a template that loses approved content is not a template, it is a cut.
   */
  gap: { h2: string; paras: string[]; photo: string; triggers?: { label: string; items: string[] } };
  /** Block 03 — heading only; the grid and its flag come from the family. */
  rolesHeading: string;
  /** Block 04 — the same four phases, in this family's words. */
  process: { h2: string; lead: string; phases: Phase[]; photo: string; art?: ArtPair };
  /**
   * Block 05 — the lead and the artwork vary; the seven items do not.
   *
   * `context` carries the argument some pages made in a block of their own —
   * packaging's deadline scoping, sanitation's nightly reset — so that
   * content survives the move to one order.
   */
  included: { h2: string; lead: string; context?: string; photo: string; art?: Art };
  /** Block 06 — one featured case, optionally a supporting one. */
  proof: { h2: string; photo: string; featured: string; supporting?: string; note: string };
  faq: { h2: string; items: [string, string][] };
  insights: { titles: string[]; note?: string };
  form: { h2: string; bullets: string[]; illo: string };
  meta: { t: string; d: string; k: string };
  /** The deck's own role lines, kept under the grid that replaced them. */
  deckRoles: string[];
}

/**
 * What AFIMAC includes, whoever is deployed.
 *
 * This list does not vary by family and must not: it is the same engagement,
 * and the How It Works page carries the same seven. Holding it here is what
 * stops the six pages drifting apart on the one block that is a promise.
 */
export const INCLUDED = [
  "Recruiting and sourcing from a national skilled talent network",
  "Background, credential, and role screening",
  "Travel, lodging, and logistics",
  "Site-specific safety and compliance onboarding",
  "On-site supervision and a single point of contact",
  "Daily reporting, with crews that scale up or down",
  "Demobilization and transition support",
];

/* The build notes. One page's spec is every page's spec now, which is the
   point of the template — the Elementor work is done once. */
const SPEC = {
  hero: `<b>Elementor:</b> Container (centred, bg image + navy overlay) · Breadcrumbs · Heading ×3 · Text Editor · Button ×2. <b>One saved section for all six pages</b>, copy swapped per family.`,
  gap: `<b>Elementor:</b> Heading · Text Editor · Image. Article-intro pattern, identical on all six.`,
  roles: `<b>Elementor:</b> Container (3-col) · EK Icon Box, one per job title. <b>Asset gap:</b> 96×96 line icons in the existing CSTL style — twenty-six across the six pages, not yet drawn. <b>Commission the set once.</b>`,
  process: `<b>Elementor:</b> Container (4-col) · EK Icon Box ×4 · Image (SVG). Four across is tight at 1180px and drops to 2×2 under 1080px. Link the H2 to <a href="${u("/how-it-works")}">How It Works</a>. <b>The six pages used seven different process devices before this; they now use one.</b>`,
  included: `<b>Elementor:</b> Container (2-col) · EK Icon List · Image (SVG). <b>The seven items are the same list as How It Works — build it as a global widget</b> so the seven places it appears cannot drift.`,
  proof: `<b>Elementor:</b> Container (2-col) · Image · Heading · Text Editor. The same three published cases carry the whole cluster; check each page's framing at build.`,
  faq: `<b>Elementor:</b> EK Accordion + FAQPage structured data. The shared questions also appear on the cluster <a href="${u("/faq")}">FAQ page</a> — keep the wording identical in both places.`,
  insights: `<b>Elementor:</b> EK Post Grid (3-up). Live posts only. Each family runs a different combination on purpose.`,
  form: `<b>Elementor:</b> Metform · EK Icon List · Button, Mobilization Sky band. <b>Identical fields on all six pages</b> — one global section, six headlines.`,
};

/** The whole page, in the one order. */
export function familyPage(d: FamilyPageData): BlockType[] {
  return [
    roleHero({
      h1: d.hero.h1,
      sub: d.hero.sub,
      body: d.hero.body,
      cta2: d.hero.cta2,
      cta2Href: "#process",
      img: d.hero.img,
      note: d.hero.note ? `${FAMILY_RETITLE}<br><br>${d.hero.note}` : FAMILY_RETITLE,
      spec: SPEC.hero,
    }),

    {
      n: "BLOCK 02 · THE LABOR GAP",
      h: `
  <h2>${d.gap.h2}</h2>
  <div class="g2" style="margin-top:24px">
   <div>${d.gap.paras.map((p) => `<p>${p}</p>`).join("")}</div>
   ${photo(d.gap.photo)}
  </div>
  ${
    d.gap.triggers
      ? `<h3 style="margin-top:34px">${d.gap.triggers.label}</h3><ul class="warn">${d.gap.triggers.items
          .map((i) => `<li>${i}</li>`)
          .join("")}</ul>`
      : ""
  }`,
      spec: SPEC.gap,
    },

    {
      cls: "wash",
      id: "roles",
      n: "BLOCK 03 · ROLES WE DEPLOY",
      h: `${roleSection(d.family, d.rolesHeading)}
  ${deckRoles(d.deckRoles)}`,
      spec: SPEC.roles,
    },

    {
      id: "process",
      n: "BLOCK 04 · HOW IT WORKS",
      h: `
  <h2>${d.process.h2}</h2>
  <p class="lead">${d.process.lead}</p>
  <div class="g4" style="margin-top:28px">
   ${d.process.phases
     .map(
       ([label, name, items]) =>
         `<div class="card"><div class="blocknum">${label}</div><h3>${name}</h3>${
           /* Some decks wrote a phase as a sentence and some as a checklist.
              Both survive: one line stays a line rather than becoming a
              one-item list, which reads as a mistake. */
           items.length === 1
             ? `<p style="margin:0">${items[0]}</p>`
             : `<ul class="tick">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`
         }</div>`,
     )
     .join("")}
  </div>
  <div style="margin-top:32px">${d.process.art ? artPair(d.process.art) : photo(d.process.photo)}</div>
  <div class="note">Phase names and durations match the approved process doc, including its open <b>Assessment vs. Consultation</b> naming flag. <a href="${u("/brand-check")}">All conflicts →</a></div>`,
      spec: SPEC.process,
    },

    {
      cls: "blue",
      n: "BLOCK 05 · WHAT’S INCLUDED",
      h: `
  <h2>${d.included.h2}</h2>
  <p class="lead">${d.included.lead}</p>
  ${d.included.context ? `<p>${d.included.context}</p>` : ""}
  <div class="g2" style="margin-top:24px">
   <ul class="tick">${INCLUDED.slice(0, 4).map((i) => `<li>${i}</li>`).join("")}</ul>
   <ul class="tick">${INCLUDED.slice(4).map((i) => `<li>${i}</li>`).join("")}</ul>
  </div>
  <div style="margin-top:28px">${d.included.art ? figure(d.included.art) : photo(d.included.photo)}</div>`,
      spec: SPEC.included,
    },

    {
      n: "BLOCK 06 · PROOF IT WORKS",
      h: `
  <h2>${d.proof.h2}</h2>
  <div class="casecard">
   ${photo(d.proof.photo)}
   <div class="body">
    <div class="blocknum">FEATURED CASE</div>
    <p>${d.proof.featured}</p>
   </div>
  </div>
  ${
    d.proof.supporting
      ? `<div class="card" style="margin-top:26px"><div class="blocknum">SUPPORTING CASE</div><p style="margin:0">${d.proof.supporting}</p></div>`
      : ""
  }
  <div class="note">${d.proof.note}</div>`,
      spec: SPEC.proof,
    },

    faqBlock({
      n: "BLOCK 07 · FAQ",
      h2: d.faq.h2,
      items: d.faq.items,
      note: CONSULTATION_FLAG,
      spec: SPEC.faq,
    }),

    insightsBlock({
      n: "BLOCK 08 · RELATED INSIGHTS",
      titles: d.insights.titles,
      spec: SPEC.insights,
    }),

    leadFormBlock({
      n: "BLOCK 09 · TALK TO AFIMAC (LEAD FORM)",
      h2: d.form.h2,
      bullets: d.form.bullets,
      illo: d.form.illo,
      spec: SPEC.form,
    }),
  ];
}

/** The chrome around the blocks, so a page cannot spell its own URL wrong. */
export const familyPageProps = (d: FamilyPageData, base: string) => ({
  title: d.family,
  crumb: `Solutions › CSTL › Who We Deploy › ${d.family}`,
  url: `${base}who-we-deploy/${d.slug}/`,
  status: "build" as const,
  active: `/who-we-deploy/${d.slug}`,
  meta: d.meta,
});
