/**
 * Alternatives to the "Roles" sub-nav slot, for the IA conversation.
 *
 * The client does not want a nav entry that reads as a list of job titles.
 * Two directions were asked for: rename the slot, or give it a second level
 * that categorises the roles. This file holds the groupings each option needs,
 * kept separate from nav.ts so none of it can leak into the real sub-nav.
 *
 * The eight pages are fixed — seven written, one still to write. Only the way
 * into them changes.
 */

export interface RoleLink {
  label: string;
  route: string;
  /** False for Warehouse & Logistics, which has no copy deck yet. */
  written?: boolean;
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
    gist: "The hardest seats on the floor to fill",
    roles: ["CNC Operators", "Machinists", "Welders &amp; Fabricators"].map(byLabel),
  },
  {
    label: "Production &amp; Line",
    gist: "Crews that keep a line running a shift at a time",
    roles: ["Assemblers &amp; Production", "Packaging Operations", "Sanitation Crews"].map(byLabel),
  },
  {
    label: "Warehouse &amp; Material Handling",
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
  { label: "Who We Deploy", note: "Verb-led and on-brand with the rest of the section. Says people rather than vacancies, and covers every page without strain." },
  { label: "Our Workforce", note: "Broadest of the three, and the closest to the live site's own language. Risks sounding like a careers page rather than a service." },
  { label: "Crews &amp; Trades", note: "Covers both halves of the list explicitly. Two nouns is more to read in a nav, and it is the only candidate here with an ampersand." },
];

/** Every option, so the page and its summary table cannot drift apart. */
export interface NavOption {
  id: string;
  n: string;
  title: string;
  /** How the slot reads in the bar. */
  label: string;
  buys: string;
  costs: string;
  /** True where a second level is introduced. */
  nested?: boolean;
}

export const OPTIONS: NavOption[] = [
  {
    id: "rename",
    n: "A",
    title: "Rename the slot, keep the flat list",
    label: "Who We Deploy",
    buys: "Smallest possible change — one word in the header template, no new pages, no new URLs, nothing to re-test. Ships inside the existing phase 4.",
    costs: "The dropdown is still eight job titles in a column. If what the client dislikes is the list itself rather than the word above it, this does not fix it.",
  },
  {
    id: "grouped",
    n: "B",
    title: "One panel, roles grouped under headings",
    label: "Who We Deploy",
    buys: "Reads as three capabilities rather than eight vacancies, and the headings do the explaining. Still one level, so it works on touch and needs no new interaction.",
    costs: "A wider panel than the other dropdowns in the bar, so the header template needs a second dropdown style.",
  },
  {
    id: "flyout-function",
    n: "C",
    title: "Second level, categorised by what the crew does",
    label: "Who We Deploy",
    nested: true,
    buys: "The literal brief: a further dropdown. Each page sits in exactly one category, so nothing repeats and the structure maps cleanly to URLs if the categories ever become pages.",
    costs: "A hover-chain. On touch there is no hover, so the first tap opens the category and the second has to reach a flyout that may be off-screen — this is the option most likely to fail on a phone.",
  },
  {
    id: "flyout-industry",
    n: "D",
    title: "Second level, categorised by industry",
    label: "Who We Deploy",
    nested: true,
    buys: "Matches how a buyer arrives — they have a plant, not a job title — and mirrors the Industries slot directly above it.",
    costs: "The same page appears under several industries. Forklift Operators is under all three, which makes the nav look larger than the site is and gives three routes to one URL.",
  },
  {
    id: "twopane",
    n: "E",
    title: "Two-pane panel — categories left, roles right",
    label: "Who We Deploy",
    buys: "Everything option C offers, without the hover-chain: one panel, categories on the left, roles swapping on the right. Works on touch because nothing is nested.",
    costs: "The most Elementor work of the five, and the widest panel. Needs its own HTML widget rather than a stock dropdown.",
  },
  {
    id: "fold",
    n: "F",
    title: "No slot — roles live under Industries",
    label: "— removed —",
    buys: "Removes the argument entirely and shortens the bar to four items. The role content still exists; each industry page's station map already lists its crews.",
    costs: "Eight written pages with no nav entry, reachable only from inside an industry page. It is the option that loses the most work, and the role pages are the section's deepest SEO surface.",
  },
  {
    id: "mega",
    n: "G",
    title: "Primary-nav mega menu — the whole section at once",
    label: "Who We Deploy — a column inside Solutions",
    buys: "Moves the question off the sub-nav entirely. The roles sit as one grouped column beside the service, the industries and the resources, so the panel reads as a capability map rather than a list of openings — and the same panel shape serves all five solution areas, so the header stops being CSTL-specific.",
    costs: "The largest build on the page and the only one that changes the global header, so it affects every page on the site rather than the CSTL section alone. Needs a considered mobile pattern — a full-width panel has to become an accordion under about 900px — and the other four solution areas need their own content written before it can ship.",
  },
];

/* ------------------------------------------------------------------ *
 * Option G — the primary-nav mega menu
 *
 * A different surface from A–F. Those all change the Roles slot inside the
 * CSTL sub-nav; this one moves the question up to the global header, where
 * the whole section opens at once and the roles are one column among several.
 * The claim being tested: surrounded by the service, the industries and the
 * resources, a grouped roles column reads as a capability map rather than a
 * list of vacancies — which is the objection A–F are all working around.
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
      { label: "Overview", route: "/overview", written: true },
      { label: "What Is Travel Labor", route: "/what-is-travel-labor", written: true },
      { label: "How It Works", route: "/how-it-works", written: true },
      { label: "Travel vs. Traditional", route: "/vs-traditional", written: true },
      { label: "Travel vs. Local Staffing", route: "/vs-local-staffing", written: true },
      { label: "Day 1 Ready", route: "/day-1-ready", written: true },
      { label: "Pre-Deployment Checklist", route: "/pre-deployment", written: true },
      { label: "FAQ", route: "/faq", written: true },
    ],
  },
  {
    label: "Industries",
    links: [
      { label: "Aerospace, Aviation &amp; Defense", route: "/industries/aerospace-aviation-defense", written: true },
      { label: "Automotive", route: "/industries/automotive", written: true },
      { label: "Chemicals &amp; Plastics", route: "/industries/chemicals-plastics", written: true },
      { label: "Consumer Goods", route: "/industries/consumer-goods", written: true },
      { label: "Food &amp; Beverage", route: "/industries/food-beverage", written: true },
      { label: "Industrial Equipment", route: "/industries/industrial-equipment", written: true },
      { label: "Oil &amp; Energy", route: "/industries/oil-energy", written: true },
      { label: "Logistics &amp; Warehousing", route: "/industries/logistics-warehousing", written: true },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "White Papers", route: "/resources/white-papers", written: true },
      { label: "Named Case Studies", route: "/resources/case-studies", written: true },
      { label: "Salesheets &amp; One-Pagers", route: "/resources/sales-sheets", written: true },
      { label: "Pricing &amp; ROI", route: "/pricing-roi" },
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
