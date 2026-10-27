/**
 * Small line icons for the nav mocks on the nav-options page.
 *
 * Drawn here rather than delivered. The supplied icon sheet in
 * public/graphics/icons/ is the CSTL process set — recruiting, screening,
 * travel and so on — which is the wrong subject for a nav, and cut at 96px
 * for page graphics rather than 18px for a menu. These follow the same
 * drawing language (no fill, round caps and joins, one stroke weight) so the
 * two sit together, but they are prototype artwork: if the tiered menu goes
 * ahead, this set wants redrawing by whoever cut the delivered one.
 *
 * Stroke is currentColor so an icon inverts with its tab or badge.
 */

const PATHS: Record<string, string> = {
  /* Solution areas */
  hardhat:
    '<path d="M4 15a8 8 0 0 1 16 0"/><path d="M2.4 15h19.2"/><path d="M10 7.6V5.2A1.2 1.2 0 0 1 11.2 4h1.6A1.2 1.2 0 0 1 14 5.2v2.4"/>',
  picket:
    '<path d="M3 10h18"/><path d="M3 14h18"/><path d="M6.5 7v10"/><path d="M12 7v10"/><path d="M17.5 7v10"/>',
  shield: '<path d="M12 3.2 19 6.2V11c0 4.2-2.9 7.6-7 8.6C7.9 18.6 5 15.2 5 11V6.2l7-3z"/>',
  alert: '<path d="M12 4.6 20.8 19.4H3.2L12 4.6z"/><path d="M12 10.2v4"/><path d="M12 16.7h.01"/>',
  search: '<circle cx="10.6" cy="10.6" r="5.9"/><path d="M14.9 14.9 20 20"/>',

  /* Role families */
  gear:
    '<circle cx="12" cy="12" r="3.4"/><path d="M17.2 12h2.1M4.7 12h2.1M12 17.2v2.1M12 4.7v2.1M15.7 15.7l1.5 1.5M6.8 6.8l1.5 1.5M15.7 8.3l1.5-1.5M6.8 17.2l1.5-1.5"/>',
  torch:
    '<path d="M4.6 19.4 10 14"/><path d="M10 14l3.4-3.4"/><path d="M16.4 8.2 18.6 6"/><path d="M17.4 12.4h2.8"/><path d="M14.2 5.6V2.8"/>',
  conveyor:
    '<path d="M3 15.2h18"/><circle cx="6.4" cy="18" r="1.7"/><circle cx="12" cy="18" r="1.7"/><circle cx="17.6" cy="18" r="1.7"/><path d="M9 7.4h6v5.4H9z"/>',
  pallet:
    '<path d="M3 17.8h18"/><path d="M5.6 17.8v2.4"/><path d="M18.4 17.8v2.4"/><path d="M5.8 9.2h4.8v5.4H5.8z"/><path d="M13 6.2h5.2v8.4H13z"/>',
  carton:
    '<path d="M12 3.4 20 7.6v8.8L12 20.6 4 16.4V7.6l8-4.2z"/><path d="M4 7.6 12 11.8l8-4.2"/><path d="M12 11.8v8.8"/>',
  droplet: '<path d="M12 3.6S17.4 9.5 17.4 12.9a5.4 5.4 0 0 1-10.8 0C6.6 9.5 12 3.6 12 3.6z"/>',

  /* Utility */
  plus: '<circle cx="12" cy="12" r="8.4"/><path d="M12 8.4v7.2"/><path d="M8.4 12h7.2"/>',
  bolt: '<path d="M13.2 2.8 5.6 13.4h5.2L10 21.2l7.6-10.6h-5.2l.8-7.8z"/>',
};

/** Inline SVG for one icon. Decorative — the label beside it carries the meaning. */
export const navIcon = (name: keyof typeof PATHS | string, cls = "no-ico"): string =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${
    PATHS[name] ?? ""
  }</svg>`;
