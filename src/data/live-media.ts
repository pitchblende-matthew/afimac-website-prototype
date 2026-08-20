/**
 * Images already on the live CSTL overview page.
 *
 * These are referenced from afimacglobal.com rather than vendored, for the same
 * reason as the logo: no copy of the asset was supplied to this repo, and the
 * live media library is the source of truth. Read out of the WordPress REST API
 * (`/wp-json/wp/v2/pages/427`) on 20 Aug 2026 — re-check before acting on the
 * alt text, which is the part most likely to have been fixed since.
 *
 * `alt` is what the prototype ships. `liveAlt` is what the live page carries
 * today, recorded only where the two differ — that gap is a finding, not a
 * detail, and the overview surfaces it in a note.
 */

const UP = "https://afimacglobal.com/wp-content/uploads";

export interface LiveMedia {
  /** Absolute URL on afimacglobal.com. Never passed through u(). */
  src: string;
  /** Alt text the prototype proposes. */
  alt: string;
  /** Alt text the live page has today, where it differs from `alt`. */
  liveAlt?: string;
  width?: number;
  height?: number;
  /** Art direction shown if the image cannot load. */
  fallback: string;
}

/** BLOCK 03 · the three workforce-gap category illustrations. */
export const GAP_ART: Record<"mfg" | "whs" | "log", LiveMedia> = {
  mfg: {
    src: `${UP}/2025/01/manufacturing-1.svg`,
    alt: "Isometric robotic assembly line",
    liveAlt: "",
    width: 792,
    height: 612,
    fallback: "Isometric illustration · robotic assembly line on a pale blue ellipse",
  },
  whs: {
    src: `${UP}/2025/01/warehousing-1.svg`,
    alt: "Isometric forklift moving a pallet in a warehouse",
    liveAlt: "",
    width: 792,
    height: 612,
    fallback: "Isometric illustration · forklift and pallet handling",
  },
  log: {
    src: `${UP}/2025/01/logistics.svg`,
    alt: "Isometric box truck with a dispatch pair",
    liveAlt: "",
    width: 792,
    height: 612,
    fallback: "Isometric illustration · box truck and dispatch pair",
  },
};

/** BLOCK 04 · the four-stage circular process infographic. */
export const PROCESS_ART: LiveMedia = {
  src: `${UP}/2025/02/CSTL-process-1024x925.webp`,
  alt: "Four-stage CSTL process: Assessment + Consultation, Mobilization, Rapid Deployment, Hassle-Free Demobilization",
  liveAlt: "Process workflow image related to AFIMAC's Critical Situation Travel Labor service.",
  width: 1024,
  height: 925,
  fallback:
    "Circular four-stage process infographic · numbered 1–4 around a red→yellow→green arc · North America map, aircraft, forklift",
};

/** BLOCK 07 · the gated eBook cover. */
export const EBOOK_ART: LiveMedia = {
  src: `${UP}/2025/02/Manuf_Labor_Gap-1-1024x923.webp`,
  alt: "Bridging the Manufacturing Labor Gap eBook cover",
  liveAlt: "",
  width: 1024,
  height: 923,
  fallback: "eBook cover mockup · angled two-page spread",
};

/**
 * BLOCK 06 · the six client-success illustrations, in carousel order.
 *
 * `art` is the file the live page pairs with that case. Three of the six pair
 * badly and two carry the wrong alt text — see `ART_MISMATCH` below.
 */
export interface CaseArt {
  /** The client label the case runs under. */
  label: string;
  /** One line on what the case is about, for the strip caption. */
  gist: string;
  art: LiveMedia;
}

export const CASE_ART: CaseArt[] = [
  {
    label: "Fortune 500 Manufacturer",
    gist: "Assemblers, CNC machinists and welders · 73.4% cut in past-due sales",
    art: {
      src: `${UP}/2025/06/tractor.webp`,
      alt: "Isometric green tractor with a trailer",
      liveAlt: "Fortune 500 Manufacturer",
      fallback: "Isometric spot illustration · tractor",
    },
  },
  {
    label: "Fortune 500 Agricultural Equipment Manufacturer",
    gist: "Sole non-local partner retained · two-year engagement",
    art: {
      src: `${UP}/2025/06/earthmover.webp`,
      alt: "Isometric earthmover",
      liveAlt: "Fortune 500 Agricultural Equipment Manufacturer",
      fallback: "Isometric spot illustration · earthmover",
    },
  },
  {
    label: "Global Food Manufacturer",
    gist: "99 personnel through a labor disruption · full production maintained",
    art: {
      src: `${UP}/2025/06/food-manufacturing.webp`,
      alt: "Isometric food production line",
      liveAlt: "Global Food Manufacturer",
      fallback: "Isometric spot illustration · food production line",
    },
  },
  {
    label: "Fortune 500 Switchgear Manufacturer",
    gist: "12 wiring technicians · backlog cleared, surplus built",
    art: {
      src: `${UP}/2025/06/forklift.webp`,
      alt: "Isometric forklift",
      liveAlt: "Fortune 500 Agricultural Equipment Manufacturer",
      fallback: "Isometric spot illustration · forklift",
    },
  },
  {
    label: "Large Building Materials Manufacturer",
    gist: "24 material handlers, fiber formers and wastewater operators",
    art: {
      src: `${UP}/2025/06/builder.webp`,
      alt: "Isometric builder on a construction lift",
      liveAlt: "Large Building Materials Manufacturer",
      fallback: "Isometric spot illustration · builder",
    },
  },
  {
    label: "Global Food Manufacturer",
    gist: "Up to 20 forklift operators over two years · stable output",
    art: {
      src: `${UP}/2025/06/baker.webp`,
      alt: "Isometric chef at a refrigerated meat display",
      liveAlt: "Global Food Manufacturer",
      fallback: "Isometric spot illustration · chef and display case",
    },
  },
];

/** BLOCK 08 · featured images on the five posts the live grid renders first. */
export const POST_ART: (LiveMedia | null)[] = [
  {
    src: `${UP}/2025/09/From-the-desk-of-CFO-1-1024x536.webp`,
    alt: "From the Desk of the CFO",
    liveAlt: "",
    width: 1024,
    height: 536,
    fallback: "1280×720 featured image",
  },
  {
    src: `${UP}/2025/09/From-the-desk-of-CEO-1-1024x536.webp`,
    alt: "From the Desk of the CEO",
    liveAlt: "",
    width: 1024,
    height: 536,
    fallback: "1280×720 featured image",
  },
  {
    src: `${UP}/2025/06/skills-gap-video-poster@2x-1024x536.webp`,
    alt: "Video poster · the growing skills gap",
    liveAlt: "",
    width: 1024,
    height: 536,
    fallback: "1280×720 featured image",
  },
  {
    src: `${UP}/2025/05/reshoring-automotive-1024x536.webp`,
    alt: "Reshoring and U.S. automotive manufacturing",
    liveAlt: "",
    width: 1024,
    height: 536,
    fallback: "1280×720 featured image",
  },
  {
    src: `${UP}/2025/05/persistent-challenge-1024x536.webp`,
    alt: "Manufacturing’s persistent labor challenge",
    liveAlt: "",
    width: 1024,
    height: 536,
    fallback: "1280×720 featured image",
  },
  // Sixth card: the page response was truncated before this card's image, so it
  // is deliberately left as a placeholder rather than guessed at.
  null,
];
