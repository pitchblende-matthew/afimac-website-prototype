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
    '<circle cx="12" cy="12" r="4.3"/><circle cx="12" cy="12" r="1.5"/><path d="M12 7.7V5.1M12 16.3v2.6M15.7 9.9l2.3-1.3M6 15.4l2.3-1.3M15.7 14.1l2.3 1.3M6 8.6l2.3 1.3"/>',
  torch:
    '<path d="M4.6 19.4 10 14"/><path d="M10 14l3.4-3.4"/><path d="M16.4 8.2 18.6 6"/><path d="M17.4 12.4h2.8"/><path d="M14.2 5.6V2.8"/>',
  conveyor:
    '<path d="M3 15.2h18"/><circle cx="6.4" cy="18" r="1.7"/><circle cx="12" cy="18" r="1.7"/><circle cx="17.6" cy="18" r="1.7"/><path d="M9 7.4h6v5.4H9z"/>',
  pallet:
    '<path d="M3 17.8h18"/><path d="M5.6 17.8v2.4"/><path d="M18.4 17.8v2.4"/><path d="M5.8 9.2h4.8v5.4H5.8z"/><path d="M13 6.2h5.2v8.4H13z"/>',
  carton:
    '<path d="M12 3.4 20 7.6v8.8L12 20.6 4 16.4V7.6l8-4.2z"/><path d="M4 7.6 12 11.8l8-4.2"/><path d="M12 11.8v8.8"/>',
  droplet: '<path d="M12 3.6S17.4 9.5 17.4 12.9a5.4 5.4 0 0 1-10.8 0C6.6 9.5 12 3.6 12 3.6z"/>',

  /* Sections */
  chain:
    '<circle cx="4.8" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19.2" cy="12" r="2"/><path d="M6.8 12h3.2M14 12h3.2"/>',
  factory: '<path d="M3.4 20.3V11l5.4 3.1V11l5.4 3.1V5.6h6.4v14.7z"/><path d="M8.2 20.3v-3.6M12.6 20.3v-3.6M17 20.3v-3.6"/>',
  people:
    '<circle cx="9.2" cy="8.4" r="2.9"/><path d="M3.7 19.6a5.5 5.5 0 0 1 11 0"/><path d="M16 6.1a2.9 2.9 0 0 1 0 4.6"/><path d="M17.3 14.8a5.5 5.5 0 0 1 3 4.8"/>',
  doc: '<path d="M6.4 3.4h7.4l4 4v13.2H6.4z"/><path d="M13.8 3.4v4h4"/><path d="M9.2 12.6h5.6M9.2 16.2h4"/>',
  truck:
    '<path d="M2.8 6.8h10.6v9.4H2.8z"/><path d="M13.4 10.4h3.8l2.8 3v2.8h-6.6z"/><circle cx="7" cy="18" r="1.8"/><circle cx="16.6" cy="18" r="1.8"/>',
  globe:
    '<circle cx="12" cy="12" r="8.4"/><path d="M3.6 12h16.8"/><path d="M12 3.6c2.2 2.3 3.4 5.3 3.4 8.4S14.2 18.1 12 20.4C9.8 18.1 8.6 15.1 8.6 12S9.8 5.9 12 3.6z"/>',
  building:
    '<path d="M4.6 20.4V5.2h9.6v15.2"/><path d="M14.2 10.6h5.2v9.8"/><path d="M7.6 9h3.4M7.6 12.8h3.4M7.6 16.6h3.4M16.4 14h.01M16.4 17.4h.01"/>',

  /* The Service */
  compass: '<circle cx="12" cy="12" r="8.4"/><path d="M15.4 8.6 13.5 13.5 8.6 15.4l1.9-4.9z"/>',
  book:
    '<path d="M4.4 4.8h5a2.6 2.6 0 0 1 2.6 2.6v11.8a2 2 0 0 0-2-2h-5.6z"/><path d="M19.6 4.8h-5A2.6 2.6 0 0 0 12 7.4v11.8a2 2 0 0 1 2-2h5.6z"/>',
  scales:
    '<path d="M12 4.6v14.8"/><path d="M5.6 7.8h12.8"/><path d="M5.6 7.8 3 13.4h5.2z"/><path d="M18.4 7.8l-2.6 5.6H21z"/><path d="M8.6 19.4h6.8"/>',
  pin: '<path d="M12 21s6.4-6 6.4-10.4a6.4 6.4 0 0 0-12.8 0C5.6 15 12 21 12 21z"/><circle cx="12" cy="10.4" r="2.4"/>',
  flag: '<path d="M6 20.6V4.2"/><path d="M6 5h11.6l-2.2 3.5 2.2 3.5H6z"/>',
  checklist:
    '<path d="M10 7.4h8.6M10 12h8.6M10 16.6h8.6"/><path d="M4.6 7l1.2 1.2 2-2.2"/><path d="M4.6 11.6l1.2 1.2 2-2.2"/><path d="M4.6 16.2l1.2 1.2 2-2.2"/>',
  question:
    '<circle cx="12" cy="12" r="8.4"/><path d="M9.8 9.6a2.3 2.3 0 0 1 4.4.7c0 1.6-2.2 1.9-2.2 3.4"/><path d="M12 16.8h.01"/>',

  /* Industries */
  plane:
    '<path d="M10.6 3.6a1.4 1.4 0 0 1 2.8 0v5l7 4.1v2.2l-7-2.1v3.7l2.4 1.8v1.5L12 19l-3.8.8v-1.5l2.4-1.8v-3.7l-7 2.1v-2.2l7-4.1z"/>',
  car:
    '<path d="M3.4 16.6v-3.2l1.8-4.2a2 2 0 0 1 1.8-1.2h10a2 2 0 0 1 1.8 1.2l1.8 4.2v3.2"/><path d="M3.4 13.4h17.2"/><circle cx="7" cy="16.8" r="1.6"/><circle cx="17" cy="16.8" r="1.6"/>',
  flask:
    '<path d="M9.4 3.6v5.8l-4.6 8.4a2 2 0 0 0 1.8 3h10.8a2 2 0 0 0 1.8-3L14.6 9.4V3.6"/><path d="M8.4 3.6h7.2"/><path d="M7.2 14.8h9.6"/>',
  cart:
    '<circle cx="9.8" cy="19" r="1.5"/><circle cx="17.4" cy="19" r="1.5"/><path d="M2.8 3.8h2.6l2.6 11.4h10.6l2-7.8H6.4"/>',
  cup:
    '<path d="M5.2 6.6h11v6.6a5.5 5.5 0 0 1-11 0z"/><path d="M16.2 8.4h1.9a2.4 2.4 0 0 1 0 4.8h-1.9"/><path d="M4 20.6h13.4"/>',
  derrick:
    '<path d="M4.4 20.6 12 3.4l7.6 17.2"/><path d="M12 3.4v17.2"/><path d="M8.2 12h7.6M6.3 16.4h11.4"/>',

  /* Resources */
  award: '<circle cx="12" cy="9.2" r="5.4"/><path d="M8.6 13.8 7.2 21l4.8-2.4 4.8 2.4-1.4-7.2"/>',
  layers:
    '<path d="M12 3.4 20.6 8 12 12.6 3.4 8z"/><path d="M3.4 12.2 12 16.8l8.6-4.6"/><path d="M3.4 16.2 12 20.8l8.6-4.6"/>',
  chart: '<path d="M4 20.4h16.4"/><path d="M6.8 20.4V12.2"/><path d="M11.6 20.4V6.8"/><path d="M16.4 20.4v-5.4"/>',

  /* Utility */
  plus: '<circle cx="12" cy="12" r="8.4"/><path d="M12 8.4v7.2"/><path d="M8.4 12h7.2"/>',
  bolt: '<path d="M13.2 2.8 5.6 13.4h5.2L10 21.2l7.6-10.6h-5.2l.8-7.8z"/>',
};

/** Inline SVG for one icon. Decorative — the label beside it carries the meaning. */
export const navIcon = (name: keyof typeof PATHS | string, cls = "no-ico"): string =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${
    PATHS[name] ?? ""
  }</svg>`;
