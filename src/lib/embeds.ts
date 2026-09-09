/**
 * Elementor HTML-widget embeds.
 *
 * The two automotive embeds are delivered as self-contained paste-ins — markup,
 * a scoped `<style>`, and a scoped `<script>` in one file. They live in
 * `public/embeds/` so the build has a real URL to copy from, and they are the
 * single source of truth: this module imports the same bytes the Elementor
 * widget gets, so the prototype cannot drift from what ships.
 *
 * Astro's `set:html` uses innerHTML semantics, and a `<script>` inserted that
 * way never executes. So each file is split: the markup and `<style>` go
 * through `set:html`, and the script is re-emitted as `<script is:inline>` by
 * `Embed.astro`. The file itself is never modified.
 */
import lineMapRaw from "../../public/embeds/afimac-auto-line-map.html?raw";
import statBandRaw from "../../public/embeds/afimac-auto-stat-band.html?raw";
import compareMatrixRaw from "../../public/embeds/afimac-cstl-comparison-matrix.html?raw";
import vsDecisionCardsRaw from "../../public/embeds/afimac-vs-decision-cards.html?raw";
import vsThreeWayRaw from "../../public/embeds/afimac-vs-three-way-matrix.html?raw";
import vsPermContractRaw from "../../public/embeds/afimac-vs-permanent-contract.html?raw";
import vsDecisionMatrixRaw from "../../public/embeds/afimac-vs-decision-matrix.html?raw";

export type EmbedKey =
  | "auto-line-map"
  | "auto-stat-band"
  | "cstl-comparison-matrix"
  | "vs-decision-cards"
  | "vs-three-way-matrix"
  | "vs-permanent-contract"
  | "vs-decision-matrix";

export interface EmbedSource {
  /** Path under public/, for the "copy this file" build note. Routed through u(). */
  file: string;
  /** Markup plus the scoped <style>. Safe for set:html. */
  html: string;
  /** The embed's own IIFE, re-emitted as an inline script so it runs. Empty
      for the purely static widgets, which carry no script at all. */
  js: string;
}

/**
 * Peel the trailing `<script>` off a paste-in embed.
 *
 * Two of the seven — the vs. decision cards and decision matrix — are static
 * markup with no behaviour, so a missing script is expected rather than an
 * error. Anything else is passed through untouched.
 */
const split = (raw: string, file: string): EmbedSource => {
  const m = raw.match(/<script>([\s\S]*)<\/script>\s*$/);
  return m ? { file, html: raw.slice(0, m.index), js: m[1] } : { file, html: raw, js: "" };
};

export const EMBEDS: Record<EmbedKey, EmbedSource> = {
  "auto-line-map": split(lineMapRaw, "/embeds/afimac-auto-line-map.html"),
  "auto-stat-band": split(statBandRaw, "/embeds/afimac-auto-stat-band.html"),
  "cstl-comparison-matrix": split(compareMatrixRaw, "/embeds/afimac-cstl-comparison-matrix.html"),
  "vs-decision-cards": split(vsDecisionCardsRaw, "/embeds/afimac-vs-decision-cards.html"),
  "vs-three-way-matrix": split(vsThreeWayRaw, "/embeds/afimac-vs-three-way-matrix.html"),
  "vs-permanent-contract": split(vsPermContractRaw, "/embeds/afimac-vs-permanent-contract.html"),
  "vs-decision-matrix": split(vsDecisionMatrixRaw, "/embeds/afimac-vs-decision-matrix.html"),
};
