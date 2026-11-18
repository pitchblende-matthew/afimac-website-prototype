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
  /** Block 07's featured case photograph, once supplied. */
  casePhoto?: Art;
  /** Block 08's three insight thumbnails, in the deck's post order. */
  insightPhotos?: (Art | undefined)[];
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
    casePhoto: {
      src: "/photos/afimac-auto-featured-case.jpg",
      alt: "A manager walking the aisle of an automated vehicle assembly hall lined with robots",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries Automotive B, 17 Nov 2026. Matches the slot size (1200×800).",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-auto-insight-1.jpg",
        alt: "Close-up of a car headlight",
        width: 1280,
        height: 720,
        caption: "Industries Automotive C, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-auto-insight-2.jpg",
        alt: "Two technicians working on machinery, one in a white hard hat",
        width: 1280,
        height: 720,
        caption: "Industries Automotive D, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-auto-insight-3.jpg",
        alt: "A machinist in a hard hat and safety glasses at a lathe",
        width: 1280,
        height: 720,
        caption: "Industries Automotive E, 17 Nov 2026.",
      },
    ],
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
    casePhoto: {
      src: "/photos/afimac-fb-featured-case.jpg",
      alt: "A worker in a hairnet and mask filling a stainless tank in a food plant",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries FB B, 17 Nov 2026. Matches the slot size (1200×800).",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-fb-insight-1.jpg",
        alt: "A quality technician in a hairnet, mask and gloves checking a clipboard beside food processing equipment",
        width: 1280,
        height: 720,
        caption: "Industries FB C, 18 Nov 2026.",
      },
      {
        src: "/photos/afimac-fb-insight-2.jpg",
        alt: "Cans moving along a conveyor",
        width: 1280,
        height: 720,
        caption: "Industries FB D, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-fb-insight-3.jpg",
        alt: "A technician with a tablet among stainless process piping",
        width: 1280,
        height: 720,
        caption: "Industries FB E, 17 Nov 2026.",
      },
    ],
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
    heroPhoto: {
      src: "/photos/afimac-aero-hero.jpg",
      alt: "A technician in blue coveralls and safety glasses working on an open jet engine under an aircraft wing in a hangar",
      width: 2560,
      height: 1440,
      caption: "Delivered as Industries Aerospace A.",
      placed: "16 Nov 2026",
      flag: "<b>This is engine maintenance, not assembly.</b> The brief asks for an assembly bay or structures line, and Maria's 10/23 note keeps MRO and airline maintenance off this page in favour of manufacturers. The photograph reads as MRO, so it sits here as delivered until a manufacturing shot replaces it or Maria says it works.",
    },
    casePhoto: {
      src: "/photos/afimac-aero-featured-case.jpg",
      alt: "A technician in a hard hat and safety glasses servicing the base of an industrial robot arm on a plant floor",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries Aerospace B, 16 Nov 2026. Matches the slot size. A general manufacturing shot rather than an aerospace one, which suits a case that has not been chosen yet.",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-aero-insight-1.jpg",
        alt: "An engineer behind a turbine engine on a test stand, its fan blades in the foreground",
        width: 1280,
        height: 720,
        caption: "Industries Aerospace C. The aerospace post.",
      },
      {
        src: "/photos/afimac-aero-insight-2.jpg",
        alt: "A technician in a hard hat and safety glasses checking a robot arm against a tablet",
        width: 1280,
        height: 720,
        caption: "Industries Aerospace D. A skilled tech at work, for the manufacturing post.",
      },
      {
        src: "/photos/afimac-aero-insight-3.jpg",
        alt: "Two colleagues in conversation across a desk",
        width: 1280,
        height: 720,
        caption: "Industries Aerospace E. A workforce scene, for the staffing post.",
      },
    ],
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
    heroPhoto: {
      src: "/photos/afimac-chem-hero.jpg",
      alt: "A chemical plant processing area, tanks and piping, with operators in hard hats and coveralls",
      width: 2560,
      height: 1440,
      caption: "Delivered as Industries Chemicals A.",
      placed: "17 Nov 2026",
    },
    casePhoto: {
      src: "/photos/afimac-chem-featured-case.jpg",
      alt: "Operators in hard hats talking among tanks and piping at a chemical plant",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries Chemicals B, 17 Nov 2026. Matches the slot size (1200×800).",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-chem-insight-1.jpg",
        alt: "Two technicians in cleanroom suits beside a stainless process vessel",
        width: 1280,
        height: 720,
        caption: "Industries Chemicals C, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-chem-insight-2.jpg",
        alt: "Blue robotic arms on an automated production line",
        width: 1280,
        height: 720,
        caption: "Industries Chemicals D, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-chem-insight-3.jpg",
        alt: "A team in hi-vis and lab coats reviewing a tablet together",
        width: 1280,
        height: 720,
        caption: "Industries Chemicals E, 17 Nov 2026.",
      },
    ],
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
    heroPhoto: {
      src: "/photos/afimac-cg-hero.jpg",
      alt: "Operators in hairnets and gloves on a bottle filling line",
      width: 2560,
      height: 1440,
      caption: "Delivered as Industries Consumer Goods A.",
      placed: "17 Nov 2026",
    },
    casePhoto: {
      src: "/photos/afimac-cg-featured-case.jpg",
      alt: "Two operators in hard hats and hi-vis checking bottles on a filling line",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries Consumer Goods B, 17 Nov 2026. Matches the slot size (1200×800).",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-cg-insight-1.jpg",
        alt: "A shopper checking her phone in a store aisle",
        width: 1280,
        height: 720,
        caption: "Industries Consumer Goods C, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-tech-laptop.jpg",
        alt: "A technician in a hard hat and hi-vis vest working on a laptop on a factory floor",
        width: 1280,
        height: 720,
        caption: "Industries Consumer Goods D, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-phone-call.jpg",
        alt: "A man in a suit on a phone call",
        width: 1280,
        height: 720,
        caption: "Industries Consumer Goods E, 17 Nov 2026.",
      },
    ],
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
    heroPhoto: {
      src: "/photos/afimac-ie-hero.jpg",
      alt: "A heavy fabrication bay, a large steel frame under an overhead crane with welders at work",
      width: 2560,
      height: 1440,
      caption: "Delivered as Industries Industrial Equipment A.",
      placed: "17 Nov 2026",
    },
    casePhoto: {
      src: "/photos/afimac-ie-featured-case.jpg",
      alt: "A steel frame lifted by an overhead crane while welders work below",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries Industrial Equipment B, 17 Nov 2026. Matches the slot size (1200×800).",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-ie-insight-1.jpg",
        alt: "Machinists and welders along a row of machine tools",
        width: 1280,
        height: 720,
        caption: "Industries Industrial Equipment C, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-tech-laptop.jpg",
        alt: "A technician in a hard hat and hi-vis vest working on a laptop on a factory floor",
        width: 1280,
        height: 720,
        caption: "Industries Industrial Equipment D, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-phone-call.jpg",
        alt: "A man in a suit on a phone call",
        width: 1280,
        height: 720,
        caption: "Industries Industrial Equipment E, 17 Nov 2026.",
      },
    ],
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
    heroPhoto: {
      src: "/photos/afimac-og-hero.jpg",
      alt: "Welders at a large pressure vessel and valve body in a fabrication bay",
      width: 2560,
      height: 1440,
      caption: "Delivered as Industries Oil Gas A.",
      placed: "17 Nov 2026",
    },
    casePhoto: {
      src: "/photos/afimac-og-featured-case.jpg",
      alt: "A worker in hi-vis with a tablet in front of a refinery at dusk",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries Oil Gas B, 17 Nov 2026. Matches the slot size (1200×800).",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-og-insight-1.jpg",
        alt: "Two workers in hi-vis looking over a processing facility",
        width: 1280,
        height: 720,
        caption: "Industries Oil Gas C, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-tech-laptop.jpg",
        alt: "A technician in a hard hat and hi-vis vest working on a laptop on a factory floor",
        width: 1280,
        height: 720,
        caption: "Industries Oil Gas D, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-phone-call.jpg",
        alt: "A man in a suit on a phone call",
        width: 1280,
        height: 720,
        caption: "Industries Oil Gas E, 17 Nov 2026.",
      },
    ],
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
    heroPhoto: {
      src: "/photos/afimac-plas-hero.jpg",
      alt: "Operators at a row of injection molding presses on a plant floor",
      width: 2560,
      height: 1440,
      caption: "Delivered as Industries Plastics A.",
      placed: "17 Nov 2026",
    },
    casePhoto: {
      src: "/photos/afimac-plas-featured-case.jpg",
      alt: "Operators handling parts beside a row of injection molding presses",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries Plastics B, 17 Nov 2026. Matches the slot size (1200×800). <b>The press maker’s logo (JSW) is legible on the machine.</b> It is equipment, not a customer brand, so it does not break the brief, but it is worth a look before launch.",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-plas-insight-1.jpg",
        alt: "White plastic bottles on a conveyor",
        width: 1280,
        height: 720,
        caption: "Industries Plastics C, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-tech-laptop.jpg",
        alt: "A technician in a hard hat and hi-vis vest working on a laptop on a factory floor",
        width: 1280,
        height: 720,
        caption: "Industries Plastics D, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-phone-call.jpg",
        alt: "A man in a suit on a phone call",
        width: 1280,
        height: 720,
        caption: "Industries Plastics E, 17 Nov 2026.",
      },
    ],
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
    heroPhoto: {
      src: "/photos/afimac-pe-hero.jpg",
      alt: "A technician wiring a switchgear cabinet beside transformer coils",
      width: 2560,
      height: 1440,
      caption: "Delivered as Industries Power Energy A.",
      placed: "17 Nov 2026",
    },
    casePhoto: {
      src: "/photos/afimac-pe-featured-case.jpg",
      alt: "An engineer in a hard hat and hi-vis with a tablet outside a power facility",
      width: 1200,
      height: 800,
      caption: "Delivered as Industries Power Energy B, 17 Nov 2026. Matches the slot size (1200×800).",
    },
    insightPhotos: [
      {
        src: "/photos/afimac-pe-insight-1.jpg",
        alt: "Cooling towers at a power plant at dusk",
        width: 1280,
        height: 720,
        caption: "Industries Power Energy C, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-tech-laptop.jpg",
        alt: "A technician in a hard hat and hi-vis vest working on a laptop on a factory floor",
        width: 1280,
        height: 720,
        caption: "Industries Power Energy D, 17 Nov 2026.",
      },
      {
        src: "/photos/afimac-insight-phone-call.jpg",
        alt: "A man in a suit on a phone call",
        width: 1280,
        height: 720,
        caption: "Industries Power Energy E, 17 Nov 2026.",
      },
    ],
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
