/**
 * Alternatives to the "Roles" sub-nav entry, for the site-structure conversation.
 *
 * The client does not want a nav entry that reads as a list of job titles.
 * Two directions were asked for: rename the entry, or give it a second level
 * that categorises the roles. This file holds the groupings each option needs,
 * kept separate from nav.ts so none of it can leak into the real sub-nav.
 *
 * The eight pages are fixed — seven written, one still to write. Only the way
 * into them changes.
 */

export interface RoleLink {
  label: string;
  route: string;
  /** False for Warehouse & Logistics, which has nothing written yet. */
  written?: boolean;
  /** Icon key in src/lib/nav-icons.ts. Set where the tier shows cards. */
  icon?: string;
  /** One line on what the page covers. Set where the tier shows cards. */
  blurb?: string;
}

/** The eight role pages, in the order the hub lists them. */
export const ROLE_PAGES: RoleLink[] = [
  { label: "CNC Operators", route: "/roles/cnc-operators", written: true },
  { label: "Machinists", route: "/roles/machinists", written: true },
  { label: "Welders &amp; Fabricators", route: "/roles/welders", written: true },
  { label: "Assemblers &amp; Production", route: "/roles/assemblers-production", written: true },
  { label: "Packaging Operations", route: "/roles/packaging-operations", written: true },
  { label: "Sanitation Crews", route: "/roles/sanitation-crews", written: true },
  { label: "Forklift Operators", route: "/roles/forklift-operators", written: true },
  { label: "Warehouse &amp; Logistics", route: "/roles" },
];

const byLabel = (l: string): RoleLink =>
  ROLE_PAGES.find((r) => r.label === l) ?? { label: l, route: "/roles" };

export interface RoleGroup {
  label: string;
  /** Icon key in src/lib/nav-icons.ts. Rendered by the tier panels only. */
  icon?: string;
  /** One line explaining what the group covers, for the wider panels. */
  gist: string;
  roles: RoleLink[];
}

/**
 * By what the crew does. Every page lands in exactly one group, which is the
 * property the industry grouping below does not have.
 */
export const BY_FUNCTION: RoleGroup[] = [
  {
    label: "Machining &amp; Fabrication",
    icon: "torch",
    gist: "The hardest seats on the floor to fill",
    roles: ["CNC Operators", "Machinists", "Welders &amp; Fabricators"].map(byLabel),
  },
  {
    label: "Production &amp; Line",
    icon: "conveyor",
    gist: "Crews that keep a line running a shift at a time",
    roles: ["Assemblers &amp; Production", "Packaging Operations", "Sanitation Crews"].map(byLabel),
  },
  {
    label: "Warehouse &amp; Material Handling",
    icon: "pallet",
    gist: "Everything that moves goods through the building",
    roles: ["Forklift Operators", "Warehouse &amp; Logistics"].map(byLabel),
  },
];

/**
 * By the industry that asks for them. The same page appears under more than
 * one heading — Forklift Operators under all three — because a forklift
 * operator is a forklift operator whoever is hiring. That repetition is the
 * finding this option exists to show, not a mistake in the data.
 */
export const BY_INDUSTRY: RoleGroup[] = [
  {
    label: "Automotive",
    gist: "Body, paint, assembly, powertrain",
    roles: ["Welders &amp; Fabricators", "CNC Operators", "Machinists", "Assemblers &amp; Production", "Forklift Operators"].map(byLabel),
  },
  {
    label: "Food &amp; Beverage",
    gist: "Processing, packaging, sanitation, cold chain",
    roles: ["Packaging Operations", "Sanitation Crews", "Assemblers &amp; Production", "Forklift Operators"].map(byLabel),
  },
  {
    label: "Logistics &amp; Warehousing",
    gist: "Inbound, pick and pack, outbound",
    roles: ["Forklift Operators", "Warehouse &amp; Logistics", "Packaging Operations"].map(byLabel),
  },
];

/** Label candidates for the rename-only option. */
export const LABEL_CANDIDATES: { label: string; note: string }[] = [
  { label: "Skilled Trades", note: "Names the category the buyer already uses internally. Narrow, though — it undersells sanitation, packaging and warehouse crews, which are not trades." },
  { label: "Who We Deploy", note: "Starts with a verb, like the rest of the section. Says people rather than vacancies, and covers every page without strain." },
  { label: "Our Workforce", note: "Broadest of the three, and the closest to the live site's own language. Risks sounding like a careers page rather than a service." },
  { label: "Crews &amp; Trades", note: "Covers both halves of the list explicitly. Two nouns is more to read in a nav, and it is the only candidate here with an ampersand." },
];

/** Every option, so the page and its summary table cannot drift apart. */
export interface NavOption {
  id: string;
  n: string;
  title: string;
  /** How the entry reads in the bar. */
  label: string;
  works: string;
  limits: string;
  /** True where a second level is introduced. */
  nested?: boolean;
}

export const OPTIONS: NavOption[] = [
  {
    id: "rename",
    n: "A",
    title: "Rename the entry, keep the flat list",
    label: "Who We Deploy",
    works: "Smallest possible change — one word in the header template, no new pages, no new URLs, nothing to re-test. Ships inside the existing phase 4.",
    limits: "The dropdown is still eight job titles in a column. If what the client dislikes is the list itself rather than the word above it, this does not fix it.",
  },
  {
    id: "grouped",
    n: "B",
    title: "One panel, roles grouped under headings",
    label: "Who We Deploy",
    works: "Reads as three capabilities rather than eight vacancies, and the headings do the explaining. Still one level, so it works on touch and needs no new interaction.",
    limits: "A wider panel than the other dropdowns in the bar, so the header template needs a second dropdown style.",
  },
  {
    id: "flyout-function",
    n: "C",
    title: "Second level, categorised by what the crew does",
    label: "Who We Deploy",
    nested: true,
    works: "The literal brief: a further dropdown. Each page sits in exactly one category, so nothing repeats and the structure maps cleanly to URLs if the categories ever become pages.",
    limits: "A chain of hovers. On touch there is no hover, so the first tap opens the category and the second has to reach a second panel that may be off-screen — this is the option most likely to fail on a phone.",
  },
  {
    id: "flyout-industry",
    n: "D",
    title: "Second level, categorised by industry",
    label: "Who We Deploy",
    nested: true,
    works: "Matches how a buyer arrives — they have a plant, not a job title — and mirrors the Industries entry directly above it.",
    limits: "The same page appears under several industries. Forklift Operators is under all three, which makes the nav look larger than the site is and gives three routes to one URL.",
  },
  {
    id: "twopane",
    n: "E",
    title: "Two-pane panel — categories left, roles right",
    label: "Who We Deploy",
    works: "Everything option C offers, without the chain of hovers: one panel, categories on the left, roles swapping on the right. Works on touch because nothing is nested.",
    limits: "The most Elementor work of the five, and the widest panel. Needs its own HTML widget rather than a stock dropdown.",
  },
  {
    id: "mega",
    n: "G",
    title: "Primary-nav mega menu — tiers running across",
    label: "Who We Deploy — a column inside Solutions",
    works: "Three levels in one panel — solution, section, pages — so the whole site fits behind one nav item without a single list growing long. The roles become a section you step into rather than a dropdown you are confronted with, and CSTL gets room for all 28 of its pages while the other four areas keep the same shape.",
    limits: "The largest build on the page and the only one that changes the global header, so it touches every page on the site. Three tiers is also three chances to lose the pointer: it only works if the tiers answer to click and keyboard as well as hover, which is the thing to insist on rather than assume. Below about 900px it has to become a stacked accordion.",
  },
  {
    id: "mega-down",
    n: "H",
    title: "Primary-nav mega menu — tiers running down",
    label: "Who We Deploy — a band inside Solutions",
    works: "The same three tiers as G, stacked into full-width bands instead of side-by-side rails. Every tier gets the whole width of the panel, so long names sit on one line and the pages below can run four or five columns wide — the most room of any option here. It also reads in the order people scan, top to bottom.",
    limits: "The panel grows downward as you go, so by the third tier it covers most of the viewport — and the choices you made in tiers one and two scroll out of sight on a short screen. Deeper pointer travel than G, and the same risk of losing the pointer if the bands are not built to answer click and keyboard too.",
  },
];

/* ------------------------------------------------------------------ *
 * Option G — the primary-nav mega menu
 *
 * A different kind of change from A–E. Those all change the Roles entry inside the
 * CSTL sub-nav; this one moves the question up to the global header, where
 * the whole section opens at once and the roles are one column among several.
 * The claim being tested: surrounded by the service, the industries and the
 * resources, a grouped roles column reads as a capability map rather than a
 * list of vacancies — which is the objection A–E are all working around.
 * ------------------------------------------------------------------ */

export interface MegaCol {
  label: string;
  links: RoleLink[];
}

/** The CSTL pages, as the mega panel would group them. Routes are the real ones. */
export const MEGA_CSTL: MegaCol[] = [
  {
    label: "The Service",
    links: [
      { icon: "compass", blurb: "What the service covers, in one page", label: "Overview", route: "/overview", written: true },
      { icon: "book", blurb: "The model, explained from scratch", label: "What Is Travel Labor", route: "/what-is-travel-labor", written: true },
      { icon: "chain", blurb: "Assessment to demobilization, step by step", label: "How It Works", route: "/how-it-works", written: true },
      { icon: "scales", blurb: "Where travel crews beat a local hire", label: "Travel vs. Traditional", route: "/vs-traditional", written: true },
      { icon: "pin", blurb: "Why an agency cannot fill these seats", label: "Travel vs. Local Staffing", route: "/vs-local-staffing", written: true },
      { icon: "flag", blurb: "Badged, trained and on the floor", label: "Day 1 Ready", route: "/day-1-ready", written: true },
      { icon: "checklist", blurb: "What we need before we mobilize", label: "Pre-Deployment Checklist", route: "/pre-deployment", written: true },
      { icon: "question", blurb: "The questions buyers ask first", label: "FAQ", route: "/faq", written: true },
    ],
  },
  {
    label: "Industries",
    links: [
      { icon: "plane", blurb: "Cleared crews for controlled environments", label: "Aerospace, Aviation &amp; Defense", route: "/industries/aerospace-aviation-defense", written: true },
      { icon: "car", blurb: "Line work and tier-one suppliers", label: "Automotive", route: "/industries/automotive", written: true },
      { icon: "flask", blurb: "Process plants and continuous runs", label: "Chemicals &amp; Plastics", route: "/industries/chemicals-plastics", written: true },
      { icon: "cart", blurb: "High-volume packaging and assembly", label: "Consumer Goods", route: "/industries/consumer-goods", written: true },
      { icon: "cup", blurb: "Sanitation and audited production floors", label: "Food &amp; Beverage", route: "/industries/food-beverage", written: true },
      { icon: "gear", blurb: "Heavy fabrication and machining", label: "Industrial Equipment", route: "/industries/industrial-equipment", written: true },
      { icon: "derrick", blurb: "Refinery turnarounds and field work", label: "Oil &amp; Energy", route: "/industries/oil-energy", written: true },
      { icon: "truck", blurb: "Pick, pack, ship and material handling", label: "Logistics &amp; Warehousing", route: "/industries/logistics-warehousing", written: true },
    ],
  },
  {
    label: "Resources",
    links: [
      { icon: "doc", blurb: "The research behind the model", label: "White Papers", route: "/resources/white-papers", written: true },
      { icon: "award", blurb: "Named clients, numbers and outcomes", label: "Named Case Studies", route: "/resources/case-studies", written: true },
      { icon: "layers", blurb: "One page to take into a meeting", label: "Salesheets &amp; One-Pagers", route: "/resources/sales-sheets", written: true },
      { icon: "chart", blurb: "What it costs against what it saves", label: "Pricing &amp; ROI", route: "/pricing-roi" },
    ],
  },
];

/**
 * The other four solution areas. No prototype routes exist for them — this
 * build is the CSTL section only — so they render as labels rather than
 * links, which is also the honest state of the work.
 */
export const OTHER_SOLUTIONS: { label: string; gist: string }[] = [
  { label: "Labor Dispute Security + Support", gist: "Strike security, continuity planning, logistics" },
  { label: "Global Protective Services", gist: "Executive protection, travel security, business security" },
  { label: "Disaster Relief + Emergency Aid", gist: "Rapid response teams, mobile assets, base camps" },
  { label: "Corporate Investigations", gist: "Surveillance, workplace investigations, OSINT" },
];

/* ------------------------------------------------------------------ *
 * The tiers behind option G.
 *
 * Three levels inside one panel: the five solution areas, the sections
 * inside the one you are on, and the pages inside that section. CSTL is the
 * only area this build covers, so it is the only one with pages behind its
 * sections — the other four carry their real sub-pages from the live site as
 * labels, which is what makes the depth of the CSTL section visible.
 * ------------------------------------------------------------------ */

export interface TierSection {
  label: string;
  /**
   * A line under the tier saying the list above it is what we are asked for
   * most, not the limit of what AFIMAC does. Industries and the crews both
   * carry one, because both read as a closed list without it.
   */
  reach?: string;
  /** Icon key in src/lib/nav-icons.ts. */
  icon: string;
  gist: string;
  /** A flat list of pages, capability groups, or the role families. */
  pages?: RoleLink[];
  groups?: RoleGroup[];
  families?: RoleFamily[];
}

export interface TierSolution {
  label: string;
  /** Icon key in src/lib/nav-icons.ts. */
  icon: string;
  /**
   * What the band layout shows when the five full names no longer fit on one
   * line. Shortening them is the honest fix below about 1090px — the
   * alternative is type small enough that the icons stop helping.
   */
  short: string;
  gist: string;
  /** True only for CSTL — the one area this prototype has pages for. */
  built?: boolean;
  sections: TierSection[];
}

export const SOLUTION_TIERS: TierSolution[] = [
  {
    label: "Critical Situation Travel Labor",
    short: "Travel Labor",
    icon: "hardhat",
    gist: "Travel-ready crews on your floor in days",
    built: true,
    sections: [
      { label: "The Service", icon: "chain", gist: "What it is, how it runs, and what arrives", pages: MEGA_CSTL[0].links },
      { label: "Industries", icon: "factory", gist: "Where a labor gap stops the line", pages: MEGA_CSTL[1].links,
        reach: "AFIMAC staffs well beyond the sectors above — if a labor gap is stopping your line, the industry is rarely the obstacle." },
      { label: "Who We Deploy", icon: "people", gist: "The crews, grouped by what they do", groups: BY_FUNCTION,
        reach: "AFIMAC deploys across many more seats than the titles above — if the one you need is not listed, it is still one we fill." },
      { label: "Resources", icon: "doc", gist: "Papers, named results and the numbers", pages: MEGA_CSTL[2].links },
    ],
  },
  {
    label: "Labor Dispute Security + Support",
    short: "Labor Dispute",
    icon: "picket",
    gist: "Strike security, continuity planning, logistics",
    sections: [
      { label: "Labor Dispute Security", icon: "picket", gist: "Securing facilities, people and supply through a dispute" },
      { label: "Labor Dispute Logistical Support", icon: "truck", gist: "Transport, equipment, temporary facilities" },
    ],
  },
  {
    label: "Global Protective Services",
    short: "Protective Services",
    icon: "shield",
    gist: "Protecting executives, personnel and premises",
    sections: [
      { label: "Executive Protection", icon: "shield", gist: "Close protection for leadership and their families" },
      { label: "Corporate Travel Security", icon: "globe", gist: "Vetted local agents wherever the business goes" },
      { label: "Business Security", icon: "building", gist: "Incident response and standing site security" },
    ],
  },
  {
    label: "Disaster Relief + Emergency Aid",
    short: "Disaster Relief",
    icon: "alert",
    gist: "Rapid response teams and mobile assets",
    sections: [
      { label: "Disaster Relief &amp; Emergency Aid", icon: "alert", gist: "Base camps, mobile kitchens, medical, power" },
    ],
  },
  {
    label: "Corporate Investigations",
    short: "Investigations",
    icon: "search",
    gist: "Surveillance, workplace cases, open-source research",
    sections: [
      { label: "Workplace &amp; Business Investigations", icon: "search", gist: "Misconduct, fraud, due diligence, open-source research" },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Role families.
 *
 * The client's newer thinking: name the family, and let the job titles sit
 * underneath as illustration rather than as things you click. It is a change
 * to what the roles tier contains, not to which option carries it — the same
 * six families drop into B, E, G or H unchanged.
 *
 * `roles` is the client's list verbatim. `pages` is what already exists
 * behind each family, which is the part worth looking at: six families over
 * eight pages, and twenty-six job titles that are mostly not pages at all.
 * ------------------------------------------------------------------ */

export interface RoleFamily {
  label: string;
  /** Icon key in src/lib/nav-icons.ts. */
  icon: string;
  /** Illustrative job titles, as supplied. Not necessarily pages. */
  roles: string[];
  /** The existing role pages that would sit behind this family. */
  pages: RoleLink[];
}

export const ROLE_FAMILIES: RoleFamily[] = [
  {
    label: "Machining &amp; Precision Manufacturing",
    icon: "gear",
    roles: ["CNC Operators", "CNC Machinists", "CNC Programmers", "Manual Machinists", "Setup Technicians", "Toolroom Machinists"],
    pages: ["CNC Operators", "Machinists"].map(byLabel),
  },
  {
    label: "Welding &amp; Fabrication",
    icon: "torch",
    roles: ["Welders", "Fabricators", "Robotic Welding Technicians"],
    pages: ["Welders &amp; Fabricators"].map(byLabel),
  },
  {
    label: "Production &amp; Assembly",
    icon: "conveyor",
    roles: ["Assemblers", "Machine Operators", "Production Workers", "General Laborers"],
    pages: ["Assemblers &amp; Production"].map(byLabel),
  },
  {
    label: "Material Handling &amp; Warehouse Operations",
    icon: "pallet",
    roles: ["Forklift Operators", "Reach Truck Operators", "Order Selectors", "Material Handlers"],
    pages: ["Forklift Operators", "Warehouse &amp; Logistics"].map(byLabel),
  },
  {
    label: "Packaging Operations",
    icon: "carton",
    roles: ["Packaging Operators", "Packaging Machine Operators", "Case Packers", "Palletizers", "Kitting Workers"],
    pages: ["Packaging Operations"].map(byLabel),
  },
  {
    label: "Sanitation &amp; Facility Support",
    icon: "droplet",
    roles: ["Sanitation Workers", "Industrial Cleaners", "CIP Operators", "Sanitation Technicians"],
    pages: ["Sanitation Crews"].map(byLabel),
  },
];

/** Counted rather than written down, so the prose cannot drift from the data. */
export const FAMILY_STATS = {
  families: ROLE_FAMILIES.length,
  titles: ROLE_FAMILIES.reduce((n, f) => n + f.roles.length, 0),
  pages: new Set(ROLE_FAMILIES.flatMap((f) => f.pages.map((pg) => pg.route))).size,
  /** Families whose whole content is one existing page. */
  oneToOne: ROLE_FAMILIES.filter((f) => f.pages.length === 1).length,
  /** Families that would merge two existing pages into one entry. */
  merging: ROLE_FAMILIES.filter((f) => f.pages.length > 1).length,
};
