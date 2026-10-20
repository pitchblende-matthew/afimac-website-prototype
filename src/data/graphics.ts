/**
 * Delivered artwork vendored into public/graphics/.
 *
 * Distinct from src/data/live-media.ts, which references images already on
 * afimacglobal.com. These are files supplied to this repo, so they ship with
 * the app and render through figure() or artPair().
 *
 * First delivered 2026-08-20 by pitchblende: real SVGs with text converted to
 * outlines, transparent backgrounds, cut for the #E4ECEF section tint. Most
 * ship as a desktop/mobile pair because a wide bar chart cannot just be scaled
 * down — the narrow versions are separately laid out.
 *
 * Re-cut 2026-10-05 for the directional timing adopted 25 Sep 2026: every
 * asset that drew a day count or a day scale was rebuilt to the approved
 * wording (Assessment · timing varies by engagement / Mobilization · can begin
 * rapidly once approved / Deployment · as little as 72 hours / Demobilization ·
 * as little as 48 hours), phase 1 is Assessment in every graphic, and the
 * Day 1 Ready set, the How It Works icons and two new static maps were added.
 */

/** A finished graphic sitting in public/graphics/. */
export interface Art {
  /** Path under public/, e.g. "/graphics/foo.svg". Routed through u(). */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** Cap the rendered width — portrait art should not run full-bleed. */
  maxWidth?: number;
  /** Rebuilt in this repo rather than delivered. */
  standIn?: boolean;
}

/** A graphic with a separately laid-out narrow version. */
export interface ArtPair extends Art {
  mobile: string;
}

const DELIVERED = "<b>Delivered artwork.</b>";
const RECUT_1005 = "<b>Re-cut 5 Oct 2026</b> to the directional timing, <b>reworded 12 Oct 2026</b> to the approved option card verbatim.";

/* ---------------- How It Works ---------------- */

export const PHASE_TIMELINE: ArtPair = {
  src: "/graphics/afimac-cstl-process-timeline.svg",
  mobile: "/graphics/afimac-cstl-process-timeline-mobile.svg",
  alt: "Assessment: timing varies by engagement. Mobilization: can begin rapidly once approved. Deployment: teams can mobilize in as little as 72 hours. De-Mobilization: demobilize in as little as 48 hours.",
  width: 2400,
  height: 600,
  caption:
    `${DELIVERED} ${RECUT_1005} Four phases on equal segments, so the bar reads as a sequence rather than a measured duration, with each phase’s name and line exactly as the option card words them, including <b>De-Mobilization</b>. The <b>as little as 72 hours</b> flag now sits below the bar, which fixes the overlap with the Deployment heading in the 5 Oct cut. Stacked version under 780px.`,
};

export const MOBILIZATION_MAP: Art = {
  src: "/graphics/afimac-cstl-mobilization-map.svg",
  alt: "Crews sourced from across the United States converging on one site, above the six things AFIMAC handles: recruits, screens, travels, houses, manages, deploys",
  width: 960,
  height: 960,
  caption:
    `${DELIVERED} Mobilization map, 960×960 SVG. <b>This replaces the reconstruction that stood in for it</b> — the real artwork uses an Albers projection of the North America outline rather than the approximation the stand-in carried. Unchanged in the 5 Oct re-cut, since it carries no timing.`,
};

export const FORM_ILLUSTRATION: Art = {
  src: "/graphics/afimac-cstl-form-illustration.svg",
  alt: "Flat isometric illustration: routes converging on a facility",
  width: 1200,
  height: 1200,
  caption: `${DELIVERED} Form illustration, 1200×1200 SVG.`,
  maxWidth: 520,
};

/** One What's Included icon. 96×96 SVG, one stroke weight, one orange accent. */
export interface Icon {
  src: string;
  /** The checklist item it sits beside, verbatim from the copy. */
  label: string;
}

/** Block 06 · What's Included — one icon per checklist item, in copy order. */
export const INCLUDED_ICONS: Icon[] = [
  { src: "/graphics/icons/afimac-cstl-icon-01-recruiting.svg", label: "Recruiting and sourcing from a national skilled and semi-skilled talent network" },
  { src: "/graphics/icons/afimac-cstl-icon-02-screening.svg", label: "Background, credential, and role screening" },
  { src: "/graphics/icons/afimac-cstl-icon-03-travel.svg", label: "Travel, lodging, and logistics" },
  { src: "/graphics/icons/afimac-cstl-icon-04-onboarding.svg", label: "Site-specific safety and compliance onboarding" },
  { src: "/graphics/icons/afimac-cstl-icon-05-supervision.svg", label: "On-site supervision and a single point of contact" },
  { src: "/graphics/icons/afimac-cstl-icon-06-reporting.svg", label: "Daily reporting, with crews that scale up or down" },
  { src: "/graphics/icons/afimac-cstl-icon-07-demobilization.svg", label: "Demobilization and transition support" },
];

/** All seven icons on one sheet, for review or as a single image. Not rendered. */
export const INCLUDED_ICONS_SHEET: Art = {
  src: "/graphics/afimac-cstl-icons-sheet.svg",
  alt: "The seven What's Included icons on one sheet",
  width: 1400,
  height: 750,
  caption: `${DELIVERED} Contact sheet of all seven icons.`,
};

/* ---------------- Day 1 Ready ---------------- */

export const D1R_SEAL: Art = {
  src: "/graphics/afimac-d1r-seal.svg",
  alt: "The AFIMAC Day 1 Ready seal: a navy stamp reading Day 1 Ready, ringed by five checks — Screened, Credentialed, Housed, Safety-onboarded, Supervised",
  width: 1000,
  height: 1000,
  caption:
    `<b>Redrawn seal, supplied 19 Oct 2026.</b> 1000×1000 SVG. Solid navy, the five labels set on a curve inside the ring with the check marks on the ring itself, replacing the earlier version’s outer labels and spokes. <b>No orange</b>, where the earlier seal carried it. <b>The standalone crop no longer shares its geometry</b> — <code>afimac-d1r-seal-standalone.svg</code> is still cut from the old drawing, so the two marks have diverged and the crop needs re-running from this one.`,
  maxWidth: 420,
};

/** Same art, centre only — for LinkedIn and the package pieces. Not rendered on the page. */
export const D1R_SEAL_STANDALONE: Art = {
  src: "/graphics/afimac-d1r-seal-standalone.svg",
  alt: "The Day 1 Ready standard",
  width: 600,
  height: 600,
  caption: `${DELIVERED} Standalone crop of the seal, 600×600, spokes and outer labels removed. <b>Cut from the superseded drawing</b> — re-run it from the redrawn seal before it goes anywhere.`,
  maxWidth: 260,
};

export const D1R_TIMELINE: ArtPair = {
  src: "/graphics/afimac-d1r-pre-deployment-timeline.svg",
  mobile: "/graphics/afimac-d1r-pre-deployment-timeline-mobile.svg",
  alt: "From first call to first shift. Assessment, timing varies by engagement: roles, shift coverage, site requirements. Mobilization, can begin rapidly once approved: sourcing and screening, credential and role checks, travel and housing, safety onboarding. Deployment, teams can mobilize in as little as 72 hours: crew badged and briefed, supervisor on site.",
  width: 2400,
  height: 600,
  caption:
    `${DELIVERED} ${RECUT_1005} Pre-deployment timeline, 2400×600, stacked version under 780px. Runs <b>first call to first shift</b> with each phase’s steps listed under it, so it answers “what is already done when the crew arrives” rather than “when does it arrive”. No day scale.`,
};

export const D1R_FORM_ILLUSTRATION: Art = {
  src: "/graphics/afimac-d1r-form-illustration.svg",
  alt: "Flat isometric illustration: sunrise over a facility, with a crew at the door",
  width: 1200,
  height: 1200,
  caption: `${DELIVERED} Form illustration, 1200×1200 SVG. Sunrise over the facility with a crew at the door; shares no device with the How It Works or Travel vs. Traditional illustrations.`,
  maxWidth: 520,
};

/* ---------------- Automotive ---------------- */

export const AUTO_SPEED: ArtPair = {
  src: "/graphics/afimac-auto-speed-comparison.svg",
  mobile: "/graphics/afimac-auto-speed-comparison-mobile.svg",
  alt: "Time to a working crew on your floor: direct local hire 45 to 90 days, temp or contract agency 21 to 35 days, AFIMAC travel labor in as little as 72 hours, timing varies by engagement",
  width: 2400,
  height: 1072,
  caption:
    `${DELIVERED} ${RECUT_1005} The AFIMAC bar now reads <b>as little as 72 hours</b> and runs solid to the 72-hour line, then fades out labelled <i>timing varies by engagement</i>, since a capped bar would read as “never longer than”. The two market bars are unchanged.`,
};

export const AUTO_LINE_MAP_ROLES: Art = {
  src: "/graphics/afimac-auto-line-map-roles.png",
  alt: "Automotive assembly sequence across seven stations, with all twenty-nine roles listed beneath each station",
  width: 2400,
  height: 1220,
  caption:
    `${DELIVERED} The full role grid — seven stations and all <b>29</b> roles. Built because the interactive widget shows one station at a time, so a screenshot of it drops 24 of them. PNG only; the slim sequence-rail alternative is an SVG.`,
};

export const AUTO_LINE_MAP_STATIC: Art = {
  src: "/graphics/afimac-auto-line-map-static.svg",
  alt: "Automotive assembly sequence: Body & Weld, Paint & Finish, General Assembly, Powertrain & Machining, Quality & Launch, Automation & Maintenance, Material & Logistics",
  width: 2400,
  height: 440,
  caption: `${DELIVERED} The slim alternative: the sequence rail only, no roles. Real SVG, replacing the PNG that stood in for it.`,
};

export const AUTO_DEPLOY_TIMELINE: ArtPair = {
  src: "/graphics/afimac-auto-deployment-timeline.svg",
  mobile: "/graphics/afimac-auto-deployment-timeline-mobile.svg",
  alt: "Assessment: timing varies by engagement. Mobilization: can begin rapidly once approved. Deployment: teams can mobilize in as little as 72 hours. De-Mobilization: demobilize in as little as 48 hours.",
  width: 2400,
  height: 600,
  caption: `${DELIVERED} ${RECUT_1005} Four phases, Assessment first, no day scale. Stacked version under 780px.`,
};

export const AUTO_HERO_CHIP: Art = {
  src: "/graphics/afimac-auto-hero-chip.svg",
  alt: "Overlay chip: teams can mobilize in as little as 72 hours",
  width: 501,
  height: 310,
  caption: `${DELIVERED} ${RECUT_1005} Hero overlay chip, now reading <b>as little as 72 hours for teams to mobilize</b>, the card’s claim rather than the old “from call to crew”. Not placed until the hero photograph exists.`,
  maxWidth: 300,
};

/* ---------------- CSTL vs. Local Staffing ---------------- */

export const VS_SPEED: ArtPair = {
  src: "/graphics/afimac-vs-speed-comparison.svg",
  mobile: "/graphics/afimac-vs-speed-comparison-mobile.svg",
  alt: "Lead time to a working crew: traditional hiring 45 to 90 days, local staffing agencies 21 to 35 days, AFIMAC travel labor in as little as 72 hours, timing varies by engagement",
  width: 2400,
  height: 1072,
  caption:
    `${DELIVERED} ${RECUT_1005} Lead-time bars, matching Automotive. <b>Lead time moved out of the comparison table and became this chart</b>, which is what the prototype's own build note asked for — the table is six rows as a result. The AFIMAC bar now reads <b>as little as 72 hours</b> and fades out rather than capping; the two market bars are unchanged.`,
};

/* ---------------- Food & Beverage ---------------- */

/**
 * Static version of the F&B line map. Not on the page, since the widget carries
 * the same stations and crews; rendered collapsed under the widget for review.
 */
export const FB_PLANT_FLOW: Art = {
  src: "/graphics/afimac-fb-plant-flow.svg",
  alt: "Food and beverage plant flow: Receiving & Raw Materials, Processing & Production, Packaging & Labeling and Cold Chain & Logistics along the material path, with Sanitation & GMP, Quality & Food Safety and Maintenance & Automation running across all four stages, and the crews in each",
  width: 2400,
  height: 1442,
  caption:
    `${DELIVERED} <b>New, 5 Oct 2026.</b> Replaces the flat seven-station roles map. Material moves through four stages; sanitation, quality and maintenance touch all four, so they run as bands under the path instead of sitting on the rail as stations 04 to 06. The copy doc’s numbering is kept, which is why the top row reads 01 · 02 · 03 · 07. <b>This departs from the copy doc’s “stations run left to right in order”</b>, and the delivery offers the plain rail back on request.`,
};

/* ---------------- Logistics ---------------- */

export const LOG_DEPLOY: ArtPair = {
  src: "/graphics/afimac-log-deployment-timeline.svg",
  mobile: "/graphics/afimac-log-deployment-timeline-mobile.svg",
  alt: "Assessment: timing varies by engagement. Mobilization: can begin rapidly once approved. Deployment: teams can mobilize in as little as 72 hours. De-Mobilization: demobilize in as little as 48 hours.",
  width: 2400,
  height: 600,
  caption:
    `${DELIVERED} ${RECUT_1005} The seven-day scale and the day-5 crew-live pin are gone: four phases on equal segments, Assessment first, an <b>as little as 72 hours</b> flag at the start of Deployment. Stacked version under 780px.`,
};

/**
 * NOT PLACED, decided 9 Sep 2026. Built to sit on the hero photograph over the
 * navy scrim; with no photograph sourced it can only float in an empty box,
 * which reads as a stray graphic. Kept for whoever builds the hero in Elementor.
 */
export const LOG_HERO_CHIP: Art = {
  src: "/graphics/afimac-log-hero-chip.svg",
  alt: "Overlay chip: teams can mobilize in as little as 72 hours",
  width: 501,
  height: 310,
  caption: `${DELIVERED} ${RECUT_1005} Hero overlay chip, now reading <b>as little as 72 hours for teams to mobilize</b> where it used to say 5–7 days. Not placed; see the hero block.`,
  maxWidth: 310,
};

/**
 * Static version of the Logistics line map. Not on the page, since the widget
 * carries the same zones and crews; rendered collapsed under the widget for review.
 * Supersedes afimac-log-line-map-roles.svg, which stays in public/graphics/.
 */
/**
 * NOT PLACED, 16 Oct 2026. Its right-hand half lists all seven zones and their
 * crews, which is the station grid on the page a second time. Kept for decks
 * and PDFs, where the plan and the list travel together usefully.
 */
export const LOG_FLOOR_PLAN: Art = {
  src: "/graphics/afimac-log-floor-plan.svg",
  alt: "Top-down distribution centre floor plan: inbound docks, then Inbound & Receiving, Put-away & Storage, Picking & Fulfillment, Packing & Kitting and Loading & Outbound, then outbound docks, with Inventory & Cycle Count over the racks and Equipment & Facility under the floor, and the crews in each of the seven zones",
  width: 2400,
  height: 1540,
  caption:
    `${DELIVERED} <b>New, 5 Oct 2026.</b> Replaces the flat seven-station roles map. A distribution centre is a building rather than a line, so the five flow zones sit between the inbound and outbound docks, with cycle count and facility crews drawn as dashed bands because they cover the whole floor. <b>This departs from “seven stations in a rail”</b>, and the delivery offers the plain rail back on request.`,
};

/** Superseded by LOG_FLOOR_PLAN. The entry stays so the file is findable. */
export const LOG_ROLES_MAP: Art = {
  src: "/graphics/afimac-log-line-map-roles.svg",
  alt: "Warehouse line map across seven stations from Inbound & Receiving to Equipment & Facility, with every crew listed beneath each station",
  width: 2400,
  height: 1220,
  caption:
    `${DELIVERED} Every station and every crew in one image. Superseded by the floor plan in the 5 Oct 2026 delivery.`,
};

/* ---------------- Travel vs. Traditional ---------------- */

export const TVT_PLAYBOOK_STRIP: ArtPair = {
  src: "/graphics/afimac-tvt-playbook-strip.svg",
  mobile: "/graphics/afimac-tvt-playbook-strip-mobile.svg",
  alt: "The traditional playbook, time to people on the floor: hire and train 45 to 90 days, temp agency 21 to 35 days, overtime immediate but time-limited",
  width: 2400,
  height: 600,
  caption:
    `<b>Delivered artwork, 12 Oct 2026.</b> Playbook clock strip, 2400×600, with a stacked version under 780px. Floating range bars on one day scale, since “45 to 90 days” is a span rather than a total, so the three plays land at three different points on the clock. Overtime starts at zero and fades out. <b>No AFIMAC bar and no orange</b>, as the script asks: this is the one graphic in the cluster that makes no AFIMAC claim.`,
};

export const TVT_DECISION_TREE: Art = {
  src: "/graphics/afimac-tvt-decision-tree.svg",
  alt: "Decision tree. A labor gap opens. Is time on your side? Yes: hire locally. No: can the local market supply the skills? Yes: local hire or agency. No: is the gap large or time-critical? Yes: travel labor. No: agency or overtime, short term.",
  width: 960,
  height: 960,
  caption:
    `<b>Delivered artwork, 12 Oct 2026.</b> Decision tree, 960×960 SVG, holds up down to 640px. Three yes/no questions in the script’s order and wording, each with an honest exit. Orange marks only the travel labor outcome. <b>Drawn flat rather than isometric</b>, a deliberate departure from the brief: a tree on an isometric plane is much harder to follow, and the logic being easy to read is the whole job.`,
  maxWidth: 640,
};

/* ---------------- Pre-Deployment Checklist ---------------- */

export const PDC_SWIMLANE: ArtPair = {
  src: "/graphics/afimac-pdc-swimlane.svg",
  mobile: "/graphics/afimac-pdc-swimlane-mobile.svg",
  alt: "Pre-deployment swimlane from first call to first shift, in two lanes, You and AFIMAC, across Assessment, Mobilization and Deployment, with each checklist item placed in its lane",
  width: 2400,
  height: 600,
  caption:
    `<b>Delivered artwork, 12 Oct 2026.</b> Pre-deployment swimlane, 2400×600, with a stacked version under 780px that keeps the two lanes as side-by-side columns. Both sides against the same sequence: open markers are yours, filled are AFIMAC’s, and the one shared step straddles the lanes. Item labels are condensed from the checklist, which runs in full directly beneath. <b>No day scale</b>: the script asked for one, but the directional timing retired day counts, so the phases sit on equal segments. Phase names and lines follow the approved option card: Assessment, Mobilization, Deployment. <b>The page’s own phase headings below still read “Before the crew travels” and “Day one morning”</b>, which is page copy rather than artwork.`,
};
