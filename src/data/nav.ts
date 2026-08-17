/**
 * CSTL sub-nav — structure per the IA deck, slides 5–6.
 *
 * Every entry carries two facts, both rendered into its dot in the sub-nav:
 *
 *   work — how far our copy and wireframes have got
 *   live — whether the page already exists on afimacglobal.com
 *
 * The two are independent, and the combination is the thing that matters:
 * seven industry pages are live, so the CSTL work there is an UPDATE to
 * existing content, not a new page. Only Logistics & Warehousing is new.
 *
 * The dots are prototype chrome, not proposed site UI.
 */

export type Work = "settled" | "ready" | "partial" | "todo";

export const WORK_LABEL: Record<Work, string> = {
  settled: "Live · no change planned",
  ready: "Copy written &amp; wireframed",
  partial: "Wireframed, copy outstanding",
  todo: "Not started",
};

/** Short form, for the dropdown count captions. */
export const WORK_SHORT: Record<Work, string> = {
  settled: "unchanged",
  ready: "ready",
  partial: "part-written",
  todo: "to write",
};

export interface NavKid {
  label: string;
  route: string;
  work: Work;
  /** True when the page is already live — so the work is an update. */
  live?: boolean;
}

export interface NavItem extends NavKid {
  kids?: NavKid[];
}

/** Live CSTL section root on afimacglobal.com — the URL structure under review. */
export const B = "/solutions/critical-situation-travel-labor/";

const k = (label: string, route: string, work: Work, live = false): NavKid => ({
  label,
  route,
  work,
  live,
});

export const NAV: NavItem[] = [
  { label: "Overview", route: "/overview", work: "settled", live: true },

  {
    label: "How It Works",
    route: "/how-it-works",
    work: "ready",
    kids: [
      k("What Is Travel Labor", "/what-is-travel-labor", "ready"),
      k("How Travel Labor Works", "/how-it-works", "ready"),
      k("Travel vs. Traditional Labor", "/vs-traditional", "todo"),
      k("Travel Labor vs. Local Staffing", "/vs-local-staffing", "partial"),
      k("Day 1 Ready", "/day-1-ready", "todo"),
      k("Pre-Deployment Checklist", "/pre-deployment", "todo"),
      k("Travel Labor FAQ — needs a slot", "/faq", "ready"),
    ],
  },

  {
    // Seven of these eight are live pages. The CSTL work updates them.
    label: "Industries",
    route: "/industries",
    work: "settled",
    live: true,
    kids: [
      k("Aerospace, Aviation &amp; Defense", "/industries/aerospace-aviation-defense", "todo", true),
      k("Automotive", "/industries/automotive", "partial", true),
      k("Chemicals &amp; Plastics", "/industries/chemicals-plastics", "todo", true),
      k("Consumer Goods", "/industries/consumer-goods", "todo", true),
      k("Food &amp; Beverage", "/industries/food-beverage", "partial", true),
      k("Industrial Equipment", "/industries/industrial-equipment", "todo", true),
      k("Oil &amp; Energy", "/industries/oil-energy", "todo", true),
      k("Logistics &amp; Warehousing — needs a slot", "/industries/logistics-warehousing", "partial"),
    ],
  },

  {
    label: "Roles",
    route: "/roles",
    work: "ready",
    kids: [
      k("CNC Operators", "/roles/cnc-operators", "ready"),
      k("Forklift Operators", "/roles/forklift-operators", "ready"),
      k("Welders &amp; Fabricators", "/roles/welders", "ready"),
      k("Machinists", "/roles/machinists", "ready"),
      k("Assemblers &amp; Production", "/roles/assemblers-production", "ready"),
      k("Packaging Operations", "/roles/packaging-operations", "ready"),
      k("Sanitation Crews", "/roles/sanitation-crews", "ready"),
      k("Warehouse &amp; Logistics — no copy yet", "/roles", "todo"),
    ],
  },

  {
    label: "Resources",
    route: "/resources",
    work: "todo",
    kids: [
      k("White Papers", "/resources", "todo"),
      k("Named Case Studies", "/resources", "todo"),
      k("Salesheets &amp; One-Pagers", "/resources", "todo"),
    ],
  },

  { label: "Pricing &amp; ROI", route: "/pricing-roi", work: "todo" },
];

/** Dropdown caption: "2 part-written · 5 to write · 7 live". */
export function statusCaption(kids: NavKid[]): string {
  const order: Work[] = ["settled", "ready", "partial", "todo"];
  const counts = new Map<Work, number>();
  for (const kid of kids) counts.set(kid.work, (counts.get(kid.work) ?? 0) + 1);
  const parts = order
    .filter((w) => counts.has(w))
    .map((w) => `${counts.get(w)} ${WORK_SHORT[w]}`);
  const live = kids.filter((kid) => kid.live).length;
  if (live) parts.push(`${live} already live`);
  return parts.join(" · ");
}

export interface Totals {
  work: Record<Work, number>;
  /** Pages already live — the work on them is an update. */
  live: number;
}

/** Every distinct page in the section, counted — used by the WIP-bar legend. */
export function sectionTotals(): Totals {
  const work: Record<Work, number> = { settled: 0, ready: 0, partial: 0, todo: 0 };
  let live = 0;
  const seen = new Set<string>();
  for (const item of NAV) {
    for (const entry of [item, ...(item.kids ?? [])] as NavKid[]) {
      if (seen.has(entry.route)) continue;
      seen.add(entry.route);
      work[entry.work]++;
      if (entry.live) live++;
    }
  }
  return { work, live };
}
