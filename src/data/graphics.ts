/**
 * Delivered artwork vendored into public/graphics/.
 *
 * Distinct from src/data/live-media.ts, which references images already on
 * afimacglobal.com. These are files supplied to this repo, so they ship with
 * the app and render through figure() or artPair().
 *
 * Everything here is from the 2026-08-20 pitchblende delivery: real SVGs with
 * text converted to outlines, transparent backgrounds, cut for the #E4ECEF
 * section tint. Most ship as a desktop/mobile pair because a wide bar chart
 * cannot just be scaled down — the narrow versions are separately laid out.
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

/* ---------------- How It Works ---------------- */

export const PHASE_TIMELINE: ArtPair = {
  src: "/graphics/afimac-cstl-process-timeline.svg",
  mobile: "/graphics/afimac-cstl-process-timeline-mobile.svg",
  alt: "Four-phase deployment timeline: Assessment 1 to 2 days, Mobilization 2 to 3 days, Deployment with the team on site for as long as the gap lasts, Demobilization 2 to 3 days",
  width: 2400,
  height: 600,
  caption:
    `${DELIVERED} Four-phase timeline, 2400×600, with a separately laid-out stacked version under 780px. <b>This is the real SVG</b> — it replaces the PNG that arrived misnamed as a mobilization map.`,
};

export const MOBILIZATION_MAP: Art = {
  src: "/graphics/afimac-cstl-mobilization-map.svg",
  alt: "Crews sourced from across the United States converging on one site, above the six things AFIMAC handles: recruits, screens, travels, houses, manages, deploys",
  width: 960,
  height: 960,
  caption:
    `${DELIVERED} Mobilization map, 960×960 SVG. <b>This replaces the reconstruction that stood in for it</b> — the real artwork uses an Albers projection of the North America outline rather than the approximation the stand-in carried.`,
};

export const FORM_ILLUSTRATION: Art = {
  src: "/graphics/afimac-cstl-form-illustration.svg",
  alt: "Flat isometric illustration: routes converging on a facility",
  width: 1200,
  height: 1200,
  caption: `${DELIVERED} Form illustration, 1200×1200 SVG.`,
  maxWidth: 520,
};

/* ---------------- Automotive ---------------- */

export const AUTO_SPEED: ArtPair = {
  src: "/graphics/afimac-auto-speed-comparison.svg",
  mobile: "/graphics/afimac-auto-speed-comparison-mobile.svg",
  alt: "Time to an on-site crew: direct local hire 45 to 90 days, temp or contract agency 21 to 35 days, AFIMAC travel labor 6 to 7 days",
  width: 2400,
  height: 1072,
  caption:
    `${DELIVERED} Speed comparison, re-cut after the 2026-08-21 editorial ruling: the axis label and the “measured from first call” footnote were dropped, because both framed 6–7 days as a measurement rather than a stated capability. Canvas re-cropped to 2400×1072 as a result.`,
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
  alt: "Automotive deployment timeline from first call to a crew on the floor",
  width: 2400,
  height: 600,
  caption: `${DELIVERED} Deployment timeline, 2400×600, stacked version under 780px.`,
};

export const AUTO_HERO_CHIP: Art = {
  src: "/graphics/afimac-auto-hero-chip.svg",
  alt: "Overlay chip: a crew on your floor in 6 to 7 days",
  width: 588,
  height: 277,
  caption: `${DELIVERED} Hero overlay chip, sits on the hero photograph.`,
  maxWidth: 300,
};

/* ---------------- CSTL vs. Local Staffing ---------------- */

export const VS_SPEED: ArtPair = {
  src: "/graphics/afimac-vs-speed-comparison.svg",
  mobile: "/graphics/afimac-vs-speed-comparison-mobile.svg",
  alt: "Lead time to a productive crew: direct local hire 45 to 90 days, temp or contract agency 21 to 35 days, AFIMAC travel labor 6 to 7 days",
  width: 2400,
  height: 1072,
  caption:
    `${DELIVERED} Lead-time bars, matching Automotive. <b>Lead time moved out of the comparison table and became this chart</b>, which is what the prototype's own build note asked for — the table is six rows as a result.`,
};

/* ---------------- Food & Beverage · Logistics ---------------- */

export const LOG_DEPLOY: ArtPair = {
  src: "/graphics/afimac-log-deployment-timeline.svg",
  mobile: "/graphics/afimac-log-deployment-timeline-mobile.svg",
  alt: "Warehouse deployment timeline on a seven-day scale: Consultation days 1 to 2, Mobilization days 3 to 4, Deployment with the crew live from day 5",
  width: 2400,
  height: 600,
  caption:
    `${DELIVERED} Deployment timeline on the seven-day scale, with a separately laid-out stacked version under 780px. The crew-live marker sits at <b>day 5</b>, built to this page's own 5–7 figure rather than the ruled 6–7.`,
};

export const LOG_HERO_CHIP: Art = {
  src: "/graphics/afimac-log-hero-chip.svg",
  alt: "Overlay chip: 5 to 7 days from call to crew on your floor",
  width: 602,
  height: 277,
  caption: `${DELIVERED} Hero overlay chip, sits on the hero photograph over the navy scrim.`,
  maxWidth: 310,
};

export const LOG_ROLES_MAP: Art = {
  src: "/graphics/afimac-log-line-map-roles.svg",
  alt: "Warehouse line map across seven stations from Inbound & Receiving to Equipment & Facility, with every crew listed beneath each station",
  width: 2400,
  height: 1220,
  caption:
    `${DELIVERED} Every station and every crew in one image. The interactive widget below reveals one station at a time, which is right on the page but means a screenshot of it drops six of the seven — this is the version for placing pictures rather than embedding.`,
};
