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
import type { Art, ArtPair } from "./graphics";
import { AUTO_SPEED, AUTO_DEPLOY_TIMELINE, FB_PLANT_FLOW } from "./graphics";
import type { EmbedKey } from "../lib/embeds";

export type { Art, ArtPair };

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
  /** The hero photograph, once supplied. Replaces the heroImg placeholder. */
  heroPhoto?: Art;
  rolesTitle: string;
  /** Line-map art-direction note, used when no real artwork exists yet. */
  map: string;
  /**
   * Sequence label above the crew module, e.g. "Body shop to shipping". Says
   * which way the floor runs, now that the module carries no drawn rail.
   */
  flowEyebrow?: string;
  /** Real line-map artwork, once it has been produced. */
  mapArt?: Art;
  /** The full station-and-role grid, every station and role in one image. */
  rolesArt?: Art;
  /** Overlay chip for the hero photograph. */
  heroChip?: Art;
  /** Real speed-comparison artwork, rendered as its own block. */
  speedArt?: ArtPair;
  /**
   * An industry-specific deployment timeline, shown alongside the shared
   * four-phase one rather than instead of it — the two disagree, and that
   * disagreement is the finding.
   */
  deployArt?: ArtPair;
  /**
   * Elementor HTML-widget embeds built for this industry. Where one exists it
   * renders live in place of the flat artwork it supersedes — the prototype
   * runs the same file the build pastes into WordPress.
   */
  lineMapEmbed?: EmbedKey;
  statBandEmbed?: EmbedKey;
  roles: string[];
}

export const INDUSTRIES: Record<string, Industry> = {
  automotive: {
    title: "Automotive Manufacturing Travel Labor",
    short: "Automotive",
    slug: "automotive",
    url: `${B}industries/automotive/`,
    liveH1: "Automotive Travel Labor Driving Productivity",
    heroImg: "Hero photo, right column · plant-floor / body shop · muted industrial tone",
    heroPhoto: {
      src: "/photos/afimac-auto-hero.jpg",
      alt: "Assembly technicians in navy coveralls and safety glasses fitting doors and checking the engine bay on a vehicle assembly line",
      width: 2000,
      height: 1125,
      caption: "<b>Delivered photography.</b> Hero photograph, placed 19 Oct 2026. In the Elementor build it becomes the container's background image under the navy overlay.",
    },
    rolesTitle: "Plant staffing, role-ready",
    map: "Line map · HTML widget · assembly sequence with the six staffed stations called out",
    mapArt: {
      src: "/graphics/afimac-auto-line-map-static.svg",
      alt: "Automotive assembly sequence: Body & Weld, Paint & Finish, General Assembly, Powertrain & Machining, Quality & Launch, Automation & Maintenance, Material & Logistics",
      width: 2400,
      height: 440,
      caption:
        "<b>Delivered artwork.</b> The slim sequence rail, now as a real SVG — it replaces the PNG that stood in for it. It runs <b>seven</b> stations where the brief said six, and they are process stages rather than the six roles listed below; the two do not map one to one.",
    },
    rolesArt: {
      src: "/graphics/afimac-auto-line-map-roles.png",
      alt: "Automotive assembly sequence across seven stations, with all twenty-nine roles listed beneath each station",
      width: 2400,
      height: 1220,
      caption:
        "<b>Delivered artwork, and the one to use if you go with images.</b> Seven stations and all <b>29</b> roles. The delivery built it because the interactive widget shows one station at a time, so a screenshot of that drops 24 of them. PNG only — the slim rail above is the SVG alternative.",
    },
    speedArt: AUTO_SPEED,
    deployArt: AUTO_DEPLOY_TIMELINE,
    flowEyebrow: "Body shop to shipping",
    lineMapEmbed: "auto-line-map",
    statBandEmbed: "auto-stat-band",
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
    heroPhoto: {
      src: "/photos/afimac-fb-hero.jpg",
      alt: "Production worker in a hairnet and blue gloves packing bottled juice from a conveyor line into a case",
      width: 2000,
      height: 1125,
      caption: "<b>Delivered photography.</b> Hero photograph, placed 19 Oct 2026. In the Elementor build it becomes the container's background image under the navy overlay.",
    },
    rolesTitle: "Plant staffing, role-ready",
    map: "Seven-station production line map · HTML widget · sits above the role grid",
    rolesArt: FB_PLANT_FLOW,
    deployArt: {
      src: "/graphics/afimac-fb-deployment-timeline.svg",
      mobile: "/graphics/afimac-fb-deployment-timeline-mobile.svg",
      alt: "Assessment: timing varies by engagement. Mobilization: can begin rapidly once approved. Deployment: teams can mobilize in as little as 72 hours. De-Mobilization: demobilize in as little as 48 hours.",
      width: 2400,
      height: 600,
      caption:
        "<b>Delivered artwork.</b> <b>Re-cut 5 Oct 2026, reworded 12 Oct</b> to the option card verbatim. Four phases on equal segments, Assessment first, no day scale. Stacked version under 780px.",
    },
    /** NOT PLACED — see the hero block note. Kept so the file stays findable. */
    heroChip: {
      src: "/graphics/afimac-fb-hero-chip.svg",
      alt: "Overlay chip: teams can mobilize in as little as 72 hours",
      width: 501,
      height: 310,
      caption: "<b>Delivered artwork.</b> <b>Re-cut 5 Oct 2026, reworded 12 Oct</b>, now reading as little as 72 hours for teams to mobilize. Sits on the hero photograph over the navy scrim.",
      maxWidth: 300,
    },
    flowEyebrow: "Receiving to cold chain",
    lineMapEmbed: "fb-line-map",
    statBandEmbed: "fb-stat-band",
    roles: ["Packaging Operators", "Sanitation Crews", "Line Prep", "Forklift Operators", "Quality Control Inspectors", "Boiler Operators", "Wastewater Techs"],
  },

  "logistics-warehousing": {
    title: "Logistics &amp; Warehouse Travel Labor",
    short: "Logistics &amp; Warehousing",
    slug: "logistics-warehousing",
    url: `${B}industries/logistics-warehousing/`,
    liveH1: null,
    heroImg: "Hero photo, right column · DC / dock · muted industrial tone",
    heroPhoto: {
      src: "/photos/afimac-log-hero.jpg",
      alt: "Warehouse associate in a hi-vis vest scanning a carton at a pack station, with pallet racking, forklifts and open dock doors behind him",
      width: 2000,
      height: 1125,
      caption: "<b>Delivered photography.</b> Hero photograph, placed 19 Oct 2026. In the Elementor build it becomes the container's background image under the navy overlay.",
    },
    rolesTitle: "Warehouse staffing, role-ready",
    map: "Line map · HTML widget · receiving → put-away → pick → pack → ship",
    roles: ["Forklift Operators", "Material Handlers", "Inventory Control Specialists", "Shipping &amp; Receiving Clerks", "CDL Truck Drivers", "Logistics Coordinators"],
  },

  "aerospace-aviation-defense": {
    title: "Aerospace, Aviation &amp; Defense Travel Labor",
    short: "Aerospace, Aviation &amp; Defense",
    slug: "aerospace-aviation-defense",
    url: `${B}industries/aerospace-aviation-defense/`,
    liveH1: "Aerospace, Aviation &amp; Defense Travel Labor",
    heroImg: "Wide shot inside an aircraft assembly bay or structures line, technicians in PPE working a fuselage or wing section. No identifiable military aircraft, tail numbers, or program markings. Cool/industrial tone to sit under the navy scrim. Landscape, min 2000px wide.",
    rolesTitle: "Role-Ready Aerospace Staffing",
    map: "Displayed as a build-flow map above a role grid: five build stages (01 → 05) left to right, with Quality &amp; Inspection (06) and Material &amp; Logistics (07) as bands running under every stage. Aerospace builds by position rather than on a moving line, so this replaces the linear rail used on the Automotive page.",
    roles: ["CNC machinists", "Composite layup technicians", "Structures assemblers", "Wire harness assemblers", "Aerospace painters", "Quality inspectors", "Material handlers"],
  },

  "chemicals": {
    title: "Chemicals Travel Labor",
    short: "Chemicals",
    slug: "chemicals",
    url: `${B}industries/chemicals/`,
    liveH1: null,
    heroImg: "Wide shot of a chemical plant processing area, tanks, reactors, and piping, operators in PPE (hard hats, safety glasses, FR clothing). No visible spills, flares, or hazard signage that reads as an incident. Cool/industrial tone to sit under the navy scrim. Landscape, min 2000px wide.",
    rolesTitle: "Role-Ready Chemicals Staffing",
    map: "Displayed as a process map above a role grid: material moves left to right from Receiving &amp; Raw Materials (01) through Reaction &amp; Batching (02) and Separation &amp; Finishing (03) to Filling &amp; Shipping (04), with Quality &amp; Lab (05), Maintenance &amp; Reliability (06), and Turnaround &amp; Facility Support (07) as bands running under all four. Chemical processing runs through vessels and transfer lines rather than stations, so this replaces the linear rail used on the Automotive page and is drawn differently from the Plastics press-floor map.",
    roles: ["Material handlers", "Process operators", "Distillation &amp; dryer operators", "Drum &amp; tote fillers", "QC lab technicians", "Maintenance technicians", "Turnaround support crews"],
  },

  "consumer-goods": {
    title: "Consumer Goods Manufacturing Travel Labor",
    short: "Consumer Goods",
    slug: "consumer-goods",
    url: `${B}industries/consumer-goods/`,
    liveH1: "Consumer Goods Manufacturing Travel Labor",
    heroImg: "Wide shot of a high-speed filling or packaging line, operators in PPE, bottles or cartons of household or personal care product moving on conveyor. No visible retail brands or logos. Cool/industrial tone to sit under the navy scrim. Landscape, min 2000px wide.",
    rolesTitle: "Role-Ready Consumer Goods Plant Staffing",
    map: "Displayed as a multi-line map above a role grid: two parallel production lines run through stations 01 → 03 and merge into a shared warehouse zone (04), with Changeover &amp; Maintenance (05), Quality &amp; Lab (06), and Co-Packing &amp; Rework (07) as shared support around them. Consumer goods plants usually run several lines into one end-of-line area, so this replaces the single rail used on the Automotive page.",
    roles: ["Batch makers", "Packaging line operators", "Case packer operators", "Forklift operators", "Changeover technicians", "Quality inspectors", "Hand packers"],
  },

  "industrial-equipment": {
    title: "Industrial Equipment Travel Labor",
    short: "Industrial Equipment",
    slug: "industrial-equipment",
    url: `${B}industries/industrial-equipment/`,
    liveH1: "Industrial Equipment Travel Labor",
    heroImg: "Wide shot of a heavy fabrication or assembly bay, a large equipment frame under an overhead crane, welders or assemblers in PPE. Cool/industrial tone to sit under the navy scrim. Landscape, min 2000px wide.",
    rolesTitle: "Role-Ready Industrial Equipment Staffing",
    map: "Displayed as a cellular shop map above a role grid: Fabrication (01), Welding (02), and Machining (03) cells feed a shared Paint &amp; Finish bay (04), which feeds Assembly &amp; Test (05), with Quality &amp; Maintenance (06) and Material &amp; Logistics (07) running alongside. Industrial equipment is built in cells and bays rather than on one moving line, so this replaces the linear rail used on the Automotive page.",
    roles: ["Fabricators", "MIG &amp; flux-core welders", "CNC machinists", "Industrial painters", "Mechanical assemblers", "Quality inspectors", "Forklift &amp; overhead crane operators"],
  },

  "oil-gas": {
    title: "Oil &amp; Gas Travel Labor",
    short: "Oil &amp; Gas",
    slug: "oil-gas",
    url: `${B}industries/oil-gas/`,
    liveH1: null,
    heroImg: "Wide shot of a heavy fabrication bay with a large pressure vessel, valve body, or compressor skid under an overhead crane, welders in PPE. No flares, spills, or rig imagery that reads as an incident. Cool/industrial tone to sit under the navy scrim. Landscape, min 2000px wide.",
    rolesTitle: "Role-Ready Oil &amp; Gas Staffing",
    map: "Displayed as a heavy-bay map above a role grid: a large unit (a vessel, skid, or compressor package) moves through five bays under an overhead crane rail (01 → 05), with Facility &amp; Turnaround Support (06) and Material &amp; Logistics (07) as tiles off the main flow. Oil and gas equipment is built one heavy unit at a time in bays, so this replaces the line rail used on the Automotive page.",
    roles: ["Pipe welders", "CNC machinists", "Pump &amp; valve assemblers", "Hydrostatic test technicians", "Industrial painters &amp; coaters", "Turnaround support crews", "Forklift operators"],
  },

  "plastics": {
    title: "Plastics Travel Labor",
    short: "Plastics",
    slug: "plastics",
    url: `${B}industries/plastics/`,
    liveH1: null,
    heroImg: "Wide shot of an injection molding or extrusion floor, a row of presses or a film line, operators in PPE. No visible customer brands or part logos. Cool/industrial tone to sit under the navy scrim. Landscape, min 2000px wide.",
    rolesTitle: "Role-Ready Plastics Staffing",
    map: "Displayed as a press-floor map above a role grid: a top-down plant with Resin Handling &amp; Drying (01) feeding a bank of molding presses (02) and extrusion lines (03), which feed Secondary Ops &amp; Converting (04), with Tooling &amp; Changeover (05), Quality (06), and Maintenance &amp; Material Flow (07) as zones around the floor. A molding plant runs many machines side by side rather than one line, so this replaces the linear rail used on the Automotive page and is drawn differently from the Chemicals process map.",
    roles: ["Material handlers", "Injection mold operators", "Extrusion operators", "Converting line operators", "Mold setters", "Quality inspectors", "Maintenance technicians"],
  },

  "power-energy": {
    title: "Power &amp; Energy Travel Labor",
    short: "Power &amp; Energy",
    slug: "power-energy",
    url: `${B}industries/power-energy/`,
    liveH1: null,
    heroImg: "Wide shot of a switchgear or transformer assembly floor, technicians in PPE wiring cabinets or working a core and coil. No utility logos or customer markings. Cool/industrial tone to sit under the navy scrim. Landscape, min 2000px wide.",
    rolesTitle: "Role-Ready Power &amp; Energy Staffing",
    map: "Displayed as a build-and-test map above a role grid: Fabrication &amp; Enclosures (01) and Coil, Core &amp; Winding (02) feed an Electrical Assembly &amp; Wiring floor (03), which feeds a fenced high-voltage Test bay (04) and then Finish &amp; Ship (05), with Quality (06) and Material &amp; Logistics (07) as bands running underneath. Power equipment is wired and tested unit by unit before it ships, so the test bay is the visual anchor, and the map is drawn differently from the Oil &amp; Gas heavy-bay map.",
    roles: ["Sheet metal fabricators", "Coil winders", "Switchgear assemblers", "Electrical test technicians", "Industrial painters &amp; coaters", "Quality inspectors", "Forklift &amp; overhead crane operators"],
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
  "chemicals",
  "consumer-goods",
  "food-beverage",
  "industrial-equipment",
  "oil-gas",
  "plastics",
  "power-energy",
  "logistics-warehousing",
];

/**
 * The two live URLs the split retires, and where each one goes.
 *
 * Chemicals & Plastics becomes Chemicals and Plastics; Oil & Energy becomes
 * Oil & Gas and Power & Energy. Both split decks specify a 301 from the old
 * URL to the first of its pair, so the old slugs keep rendering here — a
 * prototype that 404s the page a reviewer has bookmarked is no use — with a
 * redirect note on top.
 */
export const INDUSTRY_REDIRECTS: Record<string, { to: string; sibling: string }> = {
  "chemicals-plastics": { to: "chemicals", sibling: "plastics" },
  "oil-energy": { to: "oil-gas", sibling: "power-energy" },
};
