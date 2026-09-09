import { u } from "./base";

/**
 * Wireframe primitives — the key on slide 3 of the IA deck.
 *
 * Grey bars  = copy not written yet
 * Dashed box = photography / illustration still to source
 *
 * These return HTML strings because the prototype's page content is authored as
 * markup blocks rather than components; keeping the helpers string-based lets a
 * block interpolate them inline exactly as the original single-file prototype did.
 */

/** `n` copy placeholder bars, the last one short. */
export const bars = (n: number, cls = ""): string =>
  Array.from(
    { length: n },
    (_, i) => `<div class="ph ${i === n - 1 ? "s" : ""} ${cls}"></div>`,
  ).join("");

/** A heading placeholder followed by `n` copy bars. */
export const copyPh = (n = 4): string => `<div class="ph t"></div>${bars(n)}`;

/** A dashed photo/illustration panel carrying its art-direction note. */
export const photo = (t: string): string => `<div class="photo">${t}</div>`;

/** A 3-up grid of numbered placeholder cards, with a spec caption. */
export const cards = (n: number, label: string): string =>
  `<div class="g3">${Array.from(
    { length: n },
    (_, i) =>
      `<div class="card"><div class="blocknum">${String(i + 1).padStart(2, "0")}</div><div class="ph t" style="max-width:80%"></div>${bars(3)}</div>`,
  ).join("")}</div>
  <div class="spec">${label}</div>`;

/**
 * Real artwork that exists, as opposed to `photo()` which describes art still
 * to be made. Rendered with a green rule, the same signal the monday.com asset
 * bands use.
 */
export const figure = (o: {
  /** Path under public/, e.g. "/graphics/foo.png". */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Cap the rendered width — portrait art should not run full-bleed. */
  maxWidth?: number;
  /** Rebuilt here rather than delivered — renders amber and dashed, not green. */
  standIn?: boolean;
}): string =>
  `<figure class="figure${o.standIn ? " standin" : ""}">
    <img src="${u(o.src)}" alt="${o.alt}" width="${o.width}" height="${o.height}" loading="lazy" decoding="async"${o.maxWidth ? ` style="max-width:${o.maxWidth}px"` : ""}>
    ${o.caption ? `<figcaption>${o.caption}</figcaption>` : ""}
  </figure>`;

/**
 * An image that already exists on the live site, referenced by absolute URL.
 *
 * Not routed through u() — these are afimacglobal.com assets, not app assets.
 * If the image cannot load (offline, hotlink protection, a CSP on the host) it
 * degrades to the dashed art-direction panel the prototype showed before, so a
 * failure looks like an unfinished wireframe rather than a broken page.
 */
export const liveImg = (o: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fallback: string;
  /** Extra inline style on the wrapper, e.g. a min-width for the spot art. */
  style?: string;
}): string =>
  `<div class="liveimg"${o.style ? ` style="${o.style}"` : ""}>
    <img src="${o.src}" alt="${o.alt}"${o.width ? ` width="${o.width}"` : ""}${o.height ? ` height="${o.height}"` : ""} loading="lazy" decoding="async" onerror="this.closest('.liveimg').classList.add('failed')">
    <div class="photo">${o.fallback}</div>
  </div>`;

/**
 * Delivered artwork that ships as a desktop/mobile pair.
 *
 * The decks all spec "stacks vertically under 768px" and the delivery includes
 * a separately laid-out narrow version of most graphics — a wide bar chart
 * cannot simply be scaled down and stay readable. `<picture>` does the swap
 * natively, so the browser only ever fetches the one it needs.
 *
 * Breakpoint is 780px rather than 768: the mobile files are cut for "under
 * ~780px" per the delivery's own placement notes.
 */
export const artPair = (o: {
  /** Wide asset, path under public/. */
  src: string;
  /** Narrow asset, path under public/. */
  mobile: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  standIn?: boolean;
}): string =>
  `<figure class="figure${o.standIn ? " standin" : ""}">
    <picture>
      <source media="(max-width:780px)" srcset="${u(o.mobile)}">
      <img src="${u(o.src)}" alt="${o.alt}" width="${o.width}" height="${o.height}" loading="lazy" decoding="async">
    </picture>
    ${o.caption ? `<figcaption>${o.caption}</figcaption>` : ""}
  </figure>`;

/**
 * The hero photograph with its overlay chip sitting on it.
 *
 * The chip is not a separate graphic stacked under the hero — the delivery is
 * explicit that it "sits over the hero photo, on top of the navy scrim". So it
 * renders positioned inside the photo panel, which is also the only way a
 * reviewer can judge whether it works there. Below ~600px it drops out of the
 * overlay and sits under the panel, because a chip over a phone-width photo
 * covers most of the picture.
 */
export const heroPhotoWithChip = (o: {
  /** Art-direction line for the photograph still to be sourced. */
  photo: string;
  chip: { src: string; alt: string; width: number; height: number };
}): string =>
  `<div class="herophoto">
    ${photo(o.photo)}
    <img class="herochip" src="${u(o.chip.src)}" alt="${o.chip.alt}" width="${o.chip.width}" height="${o.chip.height}" loading="lazy" decoding="async">
  </div>`;

/** Two-column tick list, used for the role inventories. */
export const roleList = (a: string[]): string =>
  `<ul class="tick" style="columns:2;column-gap:40px">${a
    .map((x) => `<li>${x}</li>`)
    .join("")}</ul>`;
