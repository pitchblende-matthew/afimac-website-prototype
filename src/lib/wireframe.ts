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

/** Two-column tick list, used for the role inventories. */
export const roleList = (a: string[]): string =>
  `<ul class="tick" style="columns:2;column-gap:40px">${a
    .map((x) => `<li>${x}</li>`)
    .join("")}</ul>`;
