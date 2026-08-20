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

/**
 * Every blog post the prototype cites, with its real featured image.
 *
 * Keyed on the live title. `aliases` carries the shorter or older wordings the
 * copy decks use, so a deck that says “Ready on Day One” still resolves to the
 * post whose live title runs “Ready on Day One: The Case for Skilled Travel
 * Labor at Your Next Line Launch”. Where a deck's wording differs from the live
 * title, that is itself worth knowing — `postTitleDrift()` reports it.
 *
 * Post IDs and featured-media IDs read from /wp-json/wp/v2/posts on 20 Aug 2026.
 * Every image below is the 1024×536 `large` derivative, not the full-size file:
 * two of these originals are 8000px wide and over 12 MB.
 */
export interface Post {
  /** Title as the live post carries it. */
  title: string;
  /** Wordings used in the copy decks that mean this post. */
  aliases?: string[];
  art: LiveMedia;
}

const thumb = (src: string, alt: string): LiveMedia => ({
  src,
  alt,
  liveAlt: "",
  width: 1024,
  height: 536,
  fallback: "1280×720 featured image",
});

export const POST_LIBRARY: Post[] = [
  {
    title: "The Labor Gap Took Decades to Build. Employers No Longer Have Decades to Solve It.",
    aliases: [
      "The Labor Gap Took Decades to Build. Closing It Requires a New Playbook.",
      "The Labor Gap Took Decades to Build. Solving It Requires a New Playbook.",
    ],
    art: thumb(`${UP}/2026/07/Blog-Post-The-Labor-Gap-Blog-Image-1024x536.jpg`, "The labor gap took decades to build"),
  },
  {
    title: "For U.S. Automotive Manufacturers, Reshoring Depends on Skilled Labor",
    art: thumb(`${UP}/2026/06/Blog-Post-For-U.S.-Automotive-Manufacturers-1-1024x536.jpg`, "Reshoring depends on skilled labor"),
  },
  {
    title: "Ready on Day One: The Case for Skilled Travel Labor at Your Next Line Launch",
    aliases: [
      "Ready on Day One",
      "Ready on Day 1: The Case for Travel Labor at Your Next Line Launch",
    ],
    art: thumb(`${UP}/2026/06/Ready-on-Day-One-Blog-Image-1024x536.webp`, "Ready on day one"),
  },
  {
    title: "When AFIMAC is the Right Fit",
    art: thumb(`${UP}/2026/05/Right-Fit-Blog-Image-1024x536.jpg`, "When AFIMAC is the right fit"),
  },
  {
    title: "Debunking the Top Five Travel Labor Myths",
    art: thumb(`${UP}/2025/08/debunking-travel-labor-myths-2-1024x536.png`, "Debunking the top five travel labor myths"),
  },
  {
    title: "Five Situations Where Travel Labor Makes Sense",
    art: thumb(`${UP}/2025/05/travel-labor-1024x536.webp`, "Five situations where travel labor makes sense"),
  },
  {
    title: "Everything You Need to Know About the Skills Gap in the U.S.",
    art: thumb(`${UP}/2025/05/skills-gap-1024x536.webp`, "The skills gap in the U.S."),
  },
  {
    title: "The Great Manufacturing (Re)Migration: Why Nearshoring and Reshoring Are Reshaping the Supply Chain",
    aliases: ["The Great Manufacturing (Re)Migration"],
    art: thumb(`${UP}/2025/04/Great-Remigration-1024x536.webp`, "The great manufacturing re-migration"),
  },
  {
    title: "Bridging the Manufacturing Labor Gap: A Path to Growth and Resilience",
    aliases: ["Bridging the Manufacturing Labor Gap"],
    art: {
      src: `${UP}/2025/01/bridge-1024x536.webp`,
      alt: "A bridge spanning between two buildings over shark-infested water",
      width: 1024,
      height: 536,
      fallback: "1280×720 featured image",
    },
  },
  {
    title: "From the Desk of the CFO",
    art: thumb(`${UP}/2025/09/From-the-desk-of-CFO-1-1024x536.webp`, "From the desk of the CFO"),
  },
  {
    title: "From the Desk of the CEO",
    art: thumb(`${UP}/2025/09/From-the-desk-of-CEO-1-1024x536.webp`, "From the desk of the CEO"),
  },
  {
    title: "Everything You Need to Know About the Growing Skills Gap (video)",
    art: thumb(`${UP}/2025/06/skills-gap-video-poster@2x-1024x536.webp`, "Video poster · the growing skills gap"),
  },
  {
    title: "What Does the Push for Reshoring Mean for U.S. Automotive Manufacturers?",
    art: thumb(`${UP}/2025/05/reshoring-automotive-1024x536.webp`, "Reshoring and U.S. automotive manufacturing"),
  },
  {
    title: "Manufacturing’s Persistent Labor Challenge",
    art: thumb(`${UP}/2025/05/persistent-challenge-1024x536.webp`, "Manufacturing’s persistent labor challenge"),
  },
];

/** Loose compare — case, punctuation and whitespace are not the point. */
const key = (t: string): string =>
  t
    .replace(/&amp;/g, "&")
    .replace(/[\u2018\u2019\u201c\u201d]/g, "'")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();

const find = (title: string): Post | undefined => {
  const k = key(title);
  return POST_LIBRARY.find(
    (p) => key(p.title) === k || (p.aliases ?? []).some((a) => key(a) === k),
  );
};

/** The featured image for a cited post title, or null if we have no match. */
export const postArt = (title: string): LiveMedia | null => find(title)?.art ?? null;

/**
 * The live title, when the prototype cites a post under a different wording.
 * Null when the wording matches, or when there is no matching post at all.
 */
export const postTitleDrift = (title: string): string | null => {
  const p = find(title);
  if (!p) return null;
  return key(p.title) === key(title) ? null : p.title;
};
