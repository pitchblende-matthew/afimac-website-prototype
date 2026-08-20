/**
 * Industry cluster.
 *
 * Seven industry pages are already live on afimacglobal.com under
 * /industries/. The CSTL work UPDATES those pages — it does not replace them —
 * so each keeps its existing URL. Only Logistics & Warehousing is a genuinely
 * new page, and it is also the one with no slot in the agreed sub-nav.
 *
 * Prototype route segments mirror the live slugs exactly, so the URL structure
 * under review is the URL structure that ships.
 */
import { B } from "./nav";

/** An industry page with CSTL update copy written and wireframed. */
export interface Industry {
  /** H1 proposed by the CSTL copy deck. */
  title: string;
  /** Short label for crumbs and headings. */
  short: string;
  /** Route segment — matches the live slug. */
  slug: string;
  /** Production URL. Existing page for six of the seven; proposed for Logistics. */
  url: string;
  /** The live page's current H1, or null where no live page exists. */
  liveH1: string | null;
  heroQs?: string;
  heroImg: string;
  rolesTitle: string;
  /** Line-map art-direction note, used when no real artwork exists yet. */
  map: string;
  /** Real line-map artwork, once it has been produced. */
  mapArt?: Art;
  /** Real speed-comparison artwork, rendered as its own block. */
  speedArt?: Art;
  roles: string[];
}

/** A finished graphic sitting in public/graphics/. */
export interface Art {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** Cap the rendered width — portrait art should not run full-bleed. */
  maxWidth?: number;
}

export const INDUSTRIES: Record<string, Industry> = {
  automotive: {
    title: "Automotive Manufacturing Travel Labor",
    short: "Automotive",
    slug: "automotive",
    url: `${B}industries/automotive/`,
    liveH1: "Automotive Travel Labor Driving Productivity",
    heroImg: "Hero photo, right column · plant-floor / body shop · muted industrial tone",
    rolesTitle: "Plant staffing, role-ready",
    map: "Line map · HTML widget · assembly sequence with the six staffed stations called out",
    mapArt: {
      src: "/graphics/afimac-auto-assembly-sequence.png",
      alt: "Automotive assembly sequence: Body & Weld, Paint & Finish, General Assembly, Powertrain & Machining, Quality & Launch, Automation & Maintenance, Material & Logistics",
      width: 2400,
      height: 440,
      caption:
        "<b>Real artwork, delivered.</b> Assembly sequence, 2400×440. Note it runs <b>seven</b> stations where the brief said six, and they are process stages rather than the six roles listed below — the two do not map one to one. Supplied as a PNG named <code>.svg</code>; an actual SVG would hold up better at this width.",
    },
    speedArt: {
      src: "/graphics/afimac-auto-speed-comparison.png",
      alt: "Time to a working crew on your floor: direct local hire 45 to 90 days, temp or contract agency 21 to 35 days, AFIMAC travel labor 6 to 7 days",
      width: 1200,
      height: 1296,
      caption:
        "<b>Real artwork, delivered.</b> Speed to production, 1200×1296 portrait. Supplied as a PNG named <code>.svg</code>.",
      maxWidth: 620,
    },
    roles: ["CNC Operators", "Welders", "Assemblers", "Machinists", "Material Handlers", "Quality Inspectors"],
  },

  "food-beverage": {
    title: "Food &amp; Beverage Manufacturing Travel Labor",
    short: "Food &amp; Beverage",
    slug: "food-beverage",
    url: `${B}industries/food-beverage/`,
    liveH1: "Food &amp; Beverage Travel Labor",
    heroQs: "Seasonal peak? Sanitation shortfall? New line launch?",
    heroImg: "Hero photo, right column · F&amp;B production floor · muted industrial tone",
    rolesTitle: "Plant staffing, role-ready",
    map: "Seven-station production line map · HTML widget · sits above the role grid",
    roles: ["Packaging Operators", "Sanitation Crews", "Line Prep", "Forklift Operators", "Quality Control Inspectors", "Boiler Operators", "Wastewater Techs"],
  },

  "logistics-warehousing": {
    title: "Logistics &amp; Warehouse Travel Labor",
    short: "Logistics &amp; Warehousing",
    slug: "logistics-warehousing",
    url: `${B}industries/logistics-warehousing/`,
    liveH1: null,
    heroImg: "Hero photo, right column · DC / dock · muted industrial tone",
    rolesTitle: "Warehouse staffing, role-ready",
    map: "Line map · HTML widget · receiving → put-away → pick → pack → ship",
    roles: ["Forklift Operators", "Material Handlers", "Inventory Control Specialists", "Shipping &amp; Receiving Clerks", "CDL Truck Drivers", "Logistics Coordinators"],
  },
};

/**
 * Industry pages live on the site with no CSTL update copy written yet.
 * Titles and descriptions below are what the live pages carry today.
 */
export interface ExistingIndustry {
  label: string;
  slug: string;
  url: string;
  /** Current SEO title on the live page. */
  seoTitle: string;
  /** Current meta description on the live page. */
  seoDesc: string;
  /** Note on what the live page needs, beyond the CSTL update. */
  note?: string;
}

export const EXISTING: Record<string, ExistingIndustry> = {
  "aerospace-aviation-defense": {
    label: "Aerospace, Aviation &amp; Defense",
    slug: "aerospace-aviation-defense",
    url: `${B}industries/aerospace-aviation-defense/`,
    seoTitle: "Aerospace, Aviation &amp; Defense Travel Labor",
    seoDesc: "AFIMAC is the premier resource for leading aerospace, aviation, and defense companies looking to bridge skill gaps and overcome labor shortages.",
    note: "The sub-nav calls this <b>Aerospace &amp; Defense</b> and the overview’s industry row splits it into <b>Aerospace &amp; Defense</b> and <b>Aviation Defense</b>. The live page is one entry, <b>Aerospace, Aviation &amp; Defense</b>. Three namings for one industry.",
  },
  "chemicals-plastics": {
    label: "Chemicals &amp; Plastics",
    slug: "chemicals-plastics",
    url: `${B}industries/chemicals-plastics/`,
    seoTitle: "Chemicals &amp; Plastics Travel Labor | AFIMAC Global",
    seoDesc: "When timing is critical, AFIMAC is the premier resource for leading chemical and plastics companies looking to bridge skill gaps and overcome labor shortages.",
  },
  "consumer-goods": {
    label: "Consumer Goods",
    slug: "consumer-goods",
    url: `${B}industries/consumer-goods/`,
    seoTitle: "Consumer Goods Manufacturing Travel Labor",
    seoDesc: "Skilled travel crews for consumer goods manufacturing — production associates, packaging operators, and skilled trades. Rapid deployment for labor gaps.",
    note: "The only one of the seven whose meta description is written for the industry rather than lifted from the boilerplate. Use it as the model when the others are rewritten.",
  },
  "industrial-equipment": {
    label: "Industrial Equipment",
    slug: "industrial-equipment",
    url: `${B}industries/industrial-equipment/`,
    seoTitle: "Industrial Equipment",
    seoDesc: "AFIMAC is the premier resource for leading industrial equipment manufacturers looking to bridge labor gaps and overcome shortages.",
    note: "<b>SEO title is 20 characters</b> against the 50–60 formula, with no descriptor and no brand suffix.",
  },
  "oil-energy": {
    label: "Oil &amp; Energy",
    slug: "oil-energy",
    url: `${B}industries/oil-energy/`,
    seoTitle: "Oil &amp; Energy",
    seoDesc: "AFIMAC is the premier resource for Fortune 500 manufacturing, warehousing, and logistics organizations facing labor shortages with critical time constraints.",
    note: "<b>Worst of the seven.</b> SEO title is 12 characters, and the meta description is the generic AFIMAC boilerplate — it never mentions oil or energy.",
  },
};

/** Every industry in nav order, live-first as the hub presents them. */
export const INDUSTRY_ORDER = [
  "aerospace-aviation-defense",
  "automotive",
  "chemicals-plastics",
  "consumer-goods",
  "food-beverage",
  "industrial-equipment",
  "oil-energy",
  "logistics-warehousing",
];
