/**
 * The option-H mega menu — the tiered panel with its tiers running down.
 *
 * Lifted out of nav-options.astro so the same menu can also run as a page
 * header. Both render from this file, so a change to the menu reaches both.
 *
 * The markup keeps its `no-` class prefix, which means "mock chrome" in this
 * prototype. Nothing here touches the real SubNav, so the proposed header can
 * be shown without replacing the prototype's own navigation underneath it.
 *
 * The tiers respond to hover, click and keyboard focus. A hover-only cascade
 * has no touch equivalent and cannot be retrofitted cheaply once a header is
 * built around hover. See the script in MegaNavH.astro.
 */
import { u } from "./base";
import { navIcon } from "./nav-icons";
import { SOLUTION_TIERS, type RoleLink, type TierSection, type TierSolution } from "../data/nav-options";

const mlink = (r: RoleLink): string =>
  `<a href="${u(r.route)}"${r.written ? "" : ' class="no-todo"'}>${r.label}</a>`;

/** One card: icon badge, link, and a line saying what is behind it. */
export const card = (
  href: string,
  icon: string,
  name: string,
  under: string,
  todo = false,
): string =>
  `<a class="no-fam${todo ? " no-todo" : ""}" href="${href}"><span class="no-fambadge">${navIcon(
    icon,
  )}</span><span class="no-famtext"><span class="no-famname">${name}</span><span class="no-famroles">${under}</span></span></a>`;

/**
 * The line under a tier saying the list above it is not the limit of what
 * AFIMAC does. Industries and the crews both need one: a panel of eight
 * sectors or a handful of families reads as the whole offer unless it says so.
 */
export const reachNote = (sec: TierSection): string =>
  sec.reach
    ? `<p class="no-famreach">${navIcon("plus", "no-ico no-ico-sm")}<span>${sec.reach} <a href="${u(
        "/get-in-touch",
      )}">Tell us what you need</a></span></p>`
    : "";

export const tierPages = (sec: TierSection): string => {
  if (sec.families)
    return `<div class="no-tierbody">${sec.families
      .map((f) => card(u(f.pages[0].route), f.icon, f.label, f.roles.join(" · ")))
      .join("")}</div>${reachNote(sec)}`;
  if (sec.groups)
    return `<div class="no-tierbody">${sec.groups
      .map(
        (g) =>
          `<div class="no-rolegrp"><div class="no-grpname">${g.icon ? navIcon(g.icon, "no-ico no-ico-sm") : ""}${g.label}</div><p class="no-grpgist">${g.gist}</p><div class="no-rolerow">${g.roles
            .map(mlink)
            .join('<span class="no-sep">\u00b7</span>')}</div></div>`,
      )
      .join("")}</div>${reachNote(sec)}`;
  // Pages carrying an icon and a line get the card treatment; the rest stay a
  // plain list, which is all the other solution areas would need.
  if (sec.pages?.some((pg) => pg.icon))
    return `<div class="no-tierbody">${sec.pages
      .map((pg) => card(u(pg.route), pg.icon ?? "doc", pg.label, pg.blurb ?? "", !pg.written))
      .join("")}</div>${reachNote(sec)}`;
  if (sec.pages)
    return `<div class="no-tierbody"><div class="no-pagelist">${sec.pages.map(mlink).join("")}</div></div>${reachNote(sec)}`;
  return `<div class="no-tierbody"><p class="no-empty">This prototype is the CSTL section only. On the live site this tier opens the pages under <b>${sec.label}</b> — the panel shape is the same, the content is not written here.</p></div>`;
};


/**
 * The menu itself. `tiers` lets the roles tier be swapped for the family
 * treatment without a second copy of the markup.
 */
export const megaNavDown = (
  tiers: TierSolution[] = SOLUTION_TIERS,
  /**
   * `bare` drops the mock logo and the bar's own chrome, so the items can
   * replace the real header's nav list and sit beside the real logo and social
   * icons — the menu at the size and in the place it would run.
   */
  opts: { bare?: boolean } = {},
): string =>
  `<div class="no-top${opts.bare ? " no-top-bare" : ""}">
    ${opts.bare ? "" : '<span class="no-logo">AFIMAC</span>'}
    <div class="no-titem">Home</div>
    <div class="no-titem no-hasmega is-mega"><span class="no-live">Solutions</span><span class="no-caret">▾</span>
      <div class="no-mega no-tier no-tierdown">
        <div class="no-band">
          <div class="no-bandhead">Solution</div>
          <div class="no-bandbody"><div class="no-tabs">${tiers.map(
            (so, i) =>
              `<button type="button" class="no-tab${i === 0 ? " on" : ""}" data-sol="${i}" data-first="${i}-0">${navIcon(so.icon, "no-ico no-ico-sm")}<span class="no-tlong">${so.label}</span><span class="no-tshort">${so.short}</span></button>`,
          ).join("")}</div></div>
        </div>
        <div class="no-band no-band2">
          <div class="no-bandhead">Section</div>
          <div class="no-bandrow">
          <div class="no-bandbody">${tiers.map(
            (so, i) =>
              `<div class="no-secs${i === 0 ? " on" : ""}" data-sol="${i}"><div class="no-tabs">${so.sections
                .map(
                  (sec, j) =>
                    `<button type="button" class="no-tab${j === 0 ? " on" : ""}" data-sec="${i}-${j}">${navIcon(sec.icon, "no-ico no-ico-sm")}<span>${sec.label}</span></button>`,
                )
                .join("")}</div></div>`,
          ).join("")}</div>
          <a class="no-bandcta" href="${u("/get-in-touch")}">${navIcon("bolt", "no-ico no-ico-sm")}<span>Critical labor situation?</span><b>Get in Touch</b></a>
          </div>
        </div>
        <div class="no-band no-bandpages">
          <div class="no-downmain">${tiers.map((so, i) =>
              so.sections
                .map(
                  (sec, j) =>
                    `<div class="no-pagepane${i === 0 && j === 0 ? " on" : ""}" data-pane="${i}-${j}"><div class="no-colhead">${navIcon(sec.icon, "no-ico no-ico-sm")}<span>${sec.label}</span></div>${sec.gist ? `<p class="no-grpgist">${sec.gist}</p>` : ""}${tierPages(sec)}</div>`,
                )
                .join(""),
            ).join("")}</div>
        </div>
      </div>
    </div>
    <div class="no-titem">Insights</div>
    <div class="no-titem">About<span class="no-caret">▾</span></div>
    <div class="no-titem">Contact</div>
  </div>`;
