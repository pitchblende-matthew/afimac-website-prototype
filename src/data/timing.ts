/**
 * Timing language for the Travel Labor section — the soft/directional option.
 *
 * Three options were put up in "How AFIMAC Delivers Teams · Timeline
 * Comparison": hard day ranges per phase, soft named windows with qualifying
 * language, or the four phases with no timeframes at all. The soft option was
 * chosen, 25 Sep 2026, and this file is the one place it is written down so the
 * section cannot drift back into per-page numbers.
 *
 * Two things follow from that choice, and both are the point of this file:
 *
 * 1 · The section had four different answers to "how fast". Assessment ran
 *     1–2 days on How It Works and 2–3 in the industry decks; deployment ran
 *     5–7 on Logistics, 6–7 on Automotive and F&B, and 72 hours on the live
 *     overview and the June-05 package. Soft language retires all of it — see
 *     RETIRED below, which is what the brand-check page reads.
 *
 * 2 · The option's own stated risk is that "as little as" needs at least one
 *     verified anchor point or it reads as unsubstantiated. The 72-hour figure
 *     is that anchor. It is the only hard number the section still makes about
 *     AFIMAC's own speed, so it carries the whole argument and must stay
 *     sourced.
 */

export interface SoftPhase {
  /** Phase name as the section uses it. */
  name: string;
  /** The directional line, from the approved option. */
  timing: string;
  /** True where the line rests on the verified anchor rather than a hedge. */
  anchored?: boolean;
}

/** The four phases with their directional timing, as approved. */
export const SOFT_PHASES: SoftPhase[] = [
  { name: "Assessment", timing: "Timing varies by engagement" },
  { name: "Mobilization", timing: "Can begin rapidly once approved" },
  { name: "Deployment", timing: "Teams can mobilize in as little as 72 hours", anchored: true },
  { name: "Demobilization", timing: "Demobilize in as little as 48 hours", anchored: true },
];

/** Phrases used inline, so body copy and cards cannot word it differently. */
export const SOFT = {
  /** The one verified number the section still states about AFIMAC's speed. */
  anchor: "72 hours",
  /** For "on site in …" sentences. */
  onSite: "in as little as 72 hours",
  /** For release-of-crew sentences. */
  demob: "in as little as 48 hours",
  /** Where a sentence needs a duration and no anchor applies. */
  hedge: "within days of a signed plan",
  /** The single sentence that explains the approach, where a page needs one. */
  stance:
    "Exact timing depends on role, headcount, location, and compliance requirements — so the section states what can be committed to rather than a fixed schedule.",
} as const;

/**
 * Market figures for the alternatives. These are claims about other routes to
 * labor, not AFIMAC commitments, so the soft direction does not cover them and
 * they keep their ranges — the comparison would say nothing without them.
 */
export const MARKET = {
  directHire: "45–90 days",
  agency: "21–35 days",
} as const;

export interface RetiredFigure {
  /** The figure as it read before. */
  figure: string;
  /** Where it appeared. */
  where: string;
  /** What it is replaced by. */
  now: string;
}

/**
 * Every hard AFIMAC timing figure the soft direction replaces, and where it
 * was. The brand-check page renders this, so the change is auditable and the
 * conflicts it retires are visible rather than simply gone.
 */
export const RETIRED: RetiredFigure[] = [
  { figure: "1–2 days", where: "How It Works · phase 1 card, and the delivered four-phase timeline", now: "Timing varies by engagement" },
  { figure: "2–3 days", where: "Live overview · phase 1 card; Automotive and F&amp;B decks · Consultation", now: "Timing varies by engagement" },
  { figure: "1–2 days", where: "Logistics deck · Consultation", now: "Timing varies by engagement" },
  { figure: "2–3 days", where: "Every deck and card · Mobilization", now: "Can begin rapidly once approved" },
  { figure: "6–7 days", where: "Automotive and F&amp;B decks, their hero chips and speed graphics, the FAQ", now: "As little as 72 hours" },
  { figure: "5–7 days", where: "Logistics deck, its hero chip and deployment timeline, the FAQ", now: "As little as 72 hours" },
  { figure: "6–12 days", where: "The hard-timeline option's stated total", now: "No total is stated" },
  { figure: "2–3 days", where: "Every deck and card · Demobilization", now: "As little as 48 hours" },
];

/**
 * Delivered artwork that still has a hard figure drawn into it. Copy can be
 * changed here; a delivered SVG cannot be re-lettered without a re-run, so each
 * one is listed rather than quietly left contradicting the page around it.
 */
export const RECUT: { file: string; carries: string; where: string }[] = [
  { file: "afimac-cstl-process-timeline.svg (+ mobile)", carries: "Assessment one to two days, Mobilization two to three, Demobilization two to three", where: "How It Works, and the How We Deploy block on every industry page" },
  { file: "afimac-auto-speed-comparison.svg (+ mobile)", carries: "AFIMAC travel labor 6 to 7 days", where: "Automotive" },
  { file: "afimac-auto-deployment-timeline.svg (+ mobile)", carries: "a seven-day scale, crew on the floor by day 6 to 7", where: "Automotive" },
  { file: "afimac-auto-seven-day-deployment.svg", carries: "a labelled DAY 1–7 scale", where: "superseded, still in public/graphics/" },
  { file: "afimac-fb-deployment-timeline.svg (+ mobile)", carries: "a seven-day scale, crew on the line by day 6", where: "Food &amp; Beverage" },
  { file: "afimac-log-deployment-timeline.svg (+ mobile)", carries: "a seven-day scale, crew on the floor by day 5", where: "Logistics" },
  { file: "afimac-vs-speed-comparison.svg (+ mobile)", carries: "AFIMAC travel labor 6 to 7 days", where: "Travel Labor vs. Local Staffing" },
  { file: "afimac-vs-permanent-contract.html", carries: "6–7 days — already corrected, being HTML rather than outlined type", where: "Travel Labor vs. Local Staffing · done" },
  { file: "afimac-log-hero-chip.svg", carries: "5–7 days from call to crew on your floor", where: "Logistics — already not placed" },
  { file: "afimac-fb-hero-chip.svg", carries: "6–7 days from call to crew on your line", where: "Food &amp; Beverage — already not placed" },
  { file: "afimac-auto-hero-chip.svg", carries: "a day figure from call to crew", where: "Automotive — not placed" },
];

/**
 * All of the above have their text outlined to paths — the words exist only in
 * each file's aria-label. None can be re-lettered in this repository; every one
 * needs a re-run from the design source.
 */
export const RECUT_NOTE =
  "Text in the delivered SVGs is outlined to paths, so none of these can be edited here — each needs a re-run from the design source.";
