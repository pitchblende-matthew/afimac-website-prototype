/**
 * Delivered artwork vendored into public/graphics/.
 *
 * Distinct from src/data/live-media.ts, which references images that already
 * sit on afimacglobal.com. These are files supplied to this repo, so they ship
 * with the app and render through figure() rather than liveImg().
 */

/** A finished graphic sitting in public/graphics/. */
export interface Art {
  /** Path under public/, e.g. "/graphics/foo.png". Routed through u(). */
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

/**
 * The four-phase deployment timeline.
 *
 * Supplied as `afimaccstlmobilizationmap.svg`; it is neither a mobilization map
 * nor an SVG. Stored under a name that says what it is. It answers the
 * "Deployment timeline · SVG 2400×600 (4:1) · day-scale bar with tick marks ·
 * crew-live marker at the Deployment tick" spec on How It Works line for line,
 * which is why it lands there rather than in the mobilization-map slot.
 */
export const MOBILIZATION_MAP: Art = {
  src: "/graphics/afimac-cstl-mobilization-map.svg",
  alt: "Crews sourced from twelve points across the United States converging on one site, above the six things AFIMAC handles: recruits, screens, travels, houses, manages, deploys",
  width: 960,
  height: 960,
  standIn: true,
  caption:
    "<b>Rebuilt here, not delivered.</b> The supplied artwork could not be transferred, so this is a reconstruction from the design — same structure, same six waypoints, same copy, drawn as a real 960×960 SVG. <b>The coastline is cruder than the original and it is not the approved asset.</b> Drop the real export at <code>public/graphics/afimac-cstl-mobilization-map.svg</code> and it swaps in with no code change.",
};

export const PHASE_TIMELINE: Art = {
  src: "/graphics/afimac-cstl-four-phase-timeline.png",
  alt: "Four-phase deployment timeline: Assessment 1 to 2 days, Mobilization 2 to 3 days, Deployment with the team on site for as long as the gap lasts, Demobilization 2 to 3 days",
  width: 2400,
  height: 600,
  caption:
    "<b>Real artwork, delivered.</b> Four-phase timeline, 2400×600. Supplied as a PNG named <code>.svg</code>, and named a mobilization map — it is the deployment timeline. At this width a real SVG would hold up better.",
};
