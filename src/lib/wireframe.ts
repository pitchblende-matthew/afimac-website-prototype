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
/**
 * A placeholder for an image that does not exist yet.
 *
 * The art direction inside it is wrapped so the stylesheet can label it. It is
 * deliberately NOT treated as a note: notes are observations about the work,
 * and this is the brief for a missing asset — the reviewer needs it in every
 * view, or an empty dashed box is all that says anything is outstanding.
 */
export const photo = (t: string): string => `<div class="photo"><span class="art">${t}</span></div>`;

/**
 * A photograph that has been shot, as opposed to `photo()` which describes one
 * that has not.
 *
 * Deliberately not `figure()`: the green rule marks delivered *diagrams*, whose
 * captions carry build notes a developer has to read. A photograph carries no
 * such instruction, so it renders as the picture alone, and the brief it was
 * shot against is kept as a note for whoever is checking the slot was filled
 * the way it was specified.
 */
export const shot = (o: {
  /** Path under public/, e.g. "/photos/foo.jpg". */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Above the fold — paint it with the page rather than lazily. */
  eager?: boolean;
  /** Cap the rendered width. */
  maxWidth?: number;
  /** Crop to a band, e.g. "2560/800". The source is covered, not squashed. */
  ratio?: string;
  /** Where the crop holds, as an object-position. Defaults to the centre. */
  focus?: string;
  /** The slot's art direction, shown only with notes on. */
  note?: string;
}): string =>
  `<figure class="shot"${o.maxWidth ? ` style="max-width:${o.maxWidth}px"` : ""}>
    <img src="${u(o.src)}" alt="${o.alt}" width="${o.width}" height="${o.height}"${
      o.ratio
        ? ` style="aspect-ratio:${o.ratio};object-fit:cover;object-position:${o.focus ?? "center"}"`
        : ""
    }${
      o.eager
        ? ` fetchpriority="high" decoding="async"`
        : ` loading="lazy" decoding="async"`
    }>
    ${o.note ? `<figcaption>${o.note}</figcaption>` : ""}
  </figure>`;

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
 * The crew module: every station and every crew, all on the page at once.
 *
 * This replaces the interactive line-map widget, which was rejected on two
 * counts — it could not be built with stock Elementor widgets, and it put six
 * of its seven stations behind a click. Both are fixed by not being
 * interactive: there is no JavaScript here, no state, and nothing to reveal.
 *
 * The sequence is carried by the numbering and the eyebrow rather than by a
 * drawn rail. A rail that cannot be clicked is decoration, and it would have
 * been one more thing for the build to reproduce.
 *
 * In Elementor this is a Container set to grid plus one Icon Box per station —
 * stock widgets, no HTML widget, nothing to paste.
 */
export const stationFlow = (o: {
  /** Sequence label, e.g. "Inbound to outbound". */
  eyebrow: string;
  stations: { n: string; title: string; roles: string[] }[];
}): string => {
  const cards = o.stations
    .map(
      (st) =>
        `<div class="stn"><div class="stn-n">${st.n}</div><h3 class="stn-t">${st.title}</h3><ul class="stn-l">${st.roles
          .map((r) => `<li>${r}</li>`)
          .join("")}</ul></div>`,
    )
    .join("");
  const crews = o.stations.reduce((n, st) => n + st.roles.length, 0);
  return `<div class="stationflow">
    <p class="stn-eyebrow">${o.eyebrow} <span>${o.stations.length} stations · ${crews} crews</span></p>
    <div class="stn-grid">${cards}</div>
  </div>`;
};

/** Two-column tick list, used for the role inventories. */
export const roleList = (a: string[]): string =>
  `<ul class="tick" style="columns:2;column-gap:40px">${a
    .map((x) => `<li>${x}</li>`)
    .join("")}</ul>`;

/**
 * Downloadable one-pager card. Built from stock Elementor widgets so it can be
 * rebuilt by hand: Container (2-col, white) · Image (cover, linked to the PDF)
 * · Heading (eyebrow) · Heading · Text Editor · Button (link to the PDF with a
 * `download` custom attribute). The cover is a link too, since people click
 * the picture of a document before they look for a button.
 */
export const downloadCard = (o: {
  /** PDF path under public/. */
  file: string;
  /** Saved filename the browser offers. */
  saveAs: string;
  /** Cover thumbnail path under public/. */
  cover: string;
  coverAlt: string;
  heading: string;
  body: string;
  button: string;
  /** e.g. "PDF · 1 page · 118 KB" */
  meta: string;
}): string =>
  `<div class="dlcard" style="display:flex;gap:32px;align-items:center;background:#fff;border:1px solid #cfdbe2;border-radius:14px;padding:28px;color:#12303f;max-width:880px">
    <a href="${u(o.file)}" download="${o.saveAs}" style="flex:0 0 176px;display:block;line-height:0" aria-label="${o.button}">
      <img src="${u(o.cover)}" alt="${o.coverAlt}" width="176" height="228" loading="lazy" style="width:176px;height:auto;border-radius:6px;box-shadow:0 6px 18px rgba(13,74,124,.18);border:1px solid #dde5e9">
    </a>
    <div style="flex:1;min-width:0">
      <div style="font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#4f6472">Free one-pager · PDF</div>
      <h3 style="margin:8px 0 10px;color:#0d4a7c">${o.heading}</h3>
      <p style="margin:0 0 18px;color:#12303f">${o.body}</p>
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <a class="btn" href="${u(o.file)}" download="${o.saveAs}" style="margin:0">${o.button}</a>
        <span style="font-size:12.5px;color:#4f6472">${o.meta}</span>
      </div>
    </div>
  </div>`;
