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

export type EmbedKey = "auto-line-map" | "auto-stat-band";

export interface EmbedSource {
  /** Path under public/, for the "copy this file" build note. Routed through u(). */
  file: string;
  /** Markup plus the scoped <style>. Safe for set:html. */
  html: string;
  /** The embed's own IIFE, re-emitted as an inline script so it runs. */
  js: string;
}

/** Peel the trailing `<script>` off a paste-in embed. */
const split = (raw: string, file: string): EmbedSource => {
  const m = raw.match(/<script>([\s\S]*)<\/script>\s*$/);
  if (!m) throw new Error(`Embed ${file} has no trailing <script> block`);
  return { file, html: raw.slice(0, m.index), js: m[1] };
};

export const EMBEDS: Record<EmbedKey, EmbedSource> = {
  "auto-line-map": split(lineMapRaw, "/embeds/afimac-auto-line-map.html"),
  "auto-stat-band": split(statBandRaw, "/embeds/afimac-auto-stat-band.html"),
};
