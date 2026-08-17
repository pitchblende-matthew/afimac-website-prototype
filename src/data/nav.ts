/**
 * CSTL sub-nav — structure per the IA deck, slides 5–6.
 *
 * `head` is the build-status caption shown at the top of each dropdown, and is
 * prototype chrome rather than site copy.
 */

export interface NavItem {
  label: string;
  route: string;
  /** Build-status caption at the head of the dropdown. */
  head?: string;
  /** [label, route] pairs. */
  kids?: [string, string][];
}

/** Live CSTL section root on afimacglobal.com — the URL structure under review. */
export const B = "/solutions/critical-situation-travel-labor/";

export const NAV: NavItem[] = [
  { label: "Overview", route: "/overview" },
  {
    label: "How It Works",
    route: "/how-it-works",
    head: "6 · build · FAQ needs a slot",
    kids: [
      ["What Is Travel Labor", "/what-is-travel-labor"],
      ["How Travel Labor Works", "/how-it-works"],
      ["Travel vs. Traditional Labor", "/vs-traditional"],
      ["Travel Labor vs. Local Staffing", "/vs-local-staffing"],
      ["Day 1 Ready", "/day-1-ready"],
      ["Pre-Deployment Checklist", "/pre-deployment"],
      ["Travel Labor FAQ — needs a slot", "/faq"],
    ],
  },
  {
    label: "Industries",
    route: "/industries",
    head: "7 live · 1 needs a slot",
    kids: [
      ["Aerospace &amp; Defense", "/industries"],
      ["Automotive", "/industries/automotive"],
      ["Chemicals &amp; Plastics", "/industries"],
      ["Consumer Goods", "/industries"],
      ["Food &amp; Beverage", "/industries/food-beverage"],
      ["Industrial Equipment", "/industries"],
      ["Oil &amp; Energy", "/industries"],
      ["Logistics &amp; Warehousing — needs a slot", "/industries/logistics"],
    ],
  },
  {
    label: "Roles",
    route: "/roles",
    head: "8 · 7 written · 1 to go",
    kids: [
      ["CNC Operators", "/roles/cnc-operators"],
      ["Forklift Operators", "/roles/forklift-operators"],
      ["Welders &amp; Fabricators", "/roles/welders"],
      ["Machinists", "/roles/machinists"],
      ["Assemblers &amp; Production", "/roles/assemblers-production"],
      ["Packaging Operations", "/roles/packaging-operations"],
      ["Sanitation Crews", "/roles/sanitation-crews"],
      ["Warehouse &amp; Logistics — no copy yet", "/roles"],
    ],
  },
  {
    label: "Resources",
    route: "/resources",
    head: "3 · build · gated",
    kids: [
      ["White Papers", "/resources"],
      ["Named Case Studies", "/resources"],
      ["Salesheets &amp; One-Pagers", "/resources"],
    ],
  },
  { label: "Pricing &amp; ROI", route: "/pricing-roi" },
];
