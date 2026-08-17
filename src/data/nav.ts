/**
 * CSTL sub-nav — structure per the IA deck, slides 5–6.
 *
 * Every entry carries a build status, rendered as a dot in the sub-nav so the
 * state of the whole section is readable without opening pages. The dots are
 * prototype chrome, not proposed site UI.
 */

export type PageStatus = "live" | "ready" | "partial" | "todo";

export const STATUS_LABEL: Record<PageStatus, string> = {
  live: "Live on afimacglobal.com",
  ready: "New · copy written &amp; wireframed",
  partial: "New · wireframed, copy outstanding",
  todo: "Not started · needs copy &amp; design",
};

/** Short form, for the dropdown count captions. */
export const STATUS_SHORT: Record<PageStatus, string> = {
  live: "live",
  ready: "ready",
  partial: "part-written",
  todo: "to write",
};

export interface NavKid {
  label: string;
  route: string;
  status: PageStatus;
}

export interface NavItem {
  label: string;
  route: string;
  status: PageStatus;
  kids?: NavKid[];
}

/** Live CSTL section root on afimacglobal.com — the URL structure under review. */
export const B = "/solutions/critical-situation-travel-labor/";

const k = (label: string, route: string, status: PageStatus): NavKid => ({ label, route, status });

export const NAV: NavItem[] = [
  { label: "Overview", route: "/overview", status: "live" },

  {
    label: "How It Works",
    route: "/how-it-works",
    status: "ready",
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
    label: "Industries",
    route: "/industries",
    status: "live",
    kids: [
      k("Aerospace &amp; Defense", "/industries", "todo"),
      k("Automotive", "/industries/automotive", "partial"),
      k("Chemicals &amp; Plastics", "/industries", "todo"),
      k("Consumer Goods", "/industries", "todo"),
      k("Food &amp; Beverage", "/industries/food-beverage", "partial"),
      k("Industrial Equipment", "/industries", "todo"),
      k("Oil &amp; Energy", "/industries", "todo"),
      k("Logistics &amp; Warehousing — needs a slot", "/industries/logistics", "partial"),
    ],
  },

  {
    label: "Roles",
    route: "/roles",
    status: "ready",
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
    status: "todo",
    kids: [
      k("White Papers", "/resources", "todo"),
      k("Named Case Studies", "/resources", "todo"),
      k("Salesheets &amp; One-Pagers", "/resources", "todo"),
    ],
  },

  { label: "Pricing &amp; ROI", route: "/pricing-roi", status: "todo" },
];

/** Dropdown caption: "3 ready · 1 part-written · 3 to write". */
export function statusCaption(kids: NavKid[]): string {
  const order: PageStatus[] = ["live", "ready", "partial", "todo"];
  const counts = new Map<PageStatus, number>();
  for (const kid of kids) counts.set(kid.status, (counts.get(kid.status) ?? 0) + 1);
  return order
    .filter((s) => counts.has(s))
    .map((s) => `${counts.get(s)} ${STATUS_SHORT[s]}`)
    .join(" · ");
}

/** Every page in the section, counted by status — used by the WIP-bar legend. */
export function sectionTotals(): Record<PageStatus, number> {
  const totals: Record<PageStatus, number> = { live: 0, ready: 0, partial: 0, todo: 0 };
  const seen = new Set<string>();
  for (const item of NAV) {
    for (const entry of [item, ...(item.kids ?? [])]) {
      if (seen.has(entry.route)) continue;
      seen.add(entry.route);
      totals[entry.status]++;
    }
  }
  return totals;
}
