/**
 * Industry cluster pages — one layout, three pages.
 *
 * `slug` is the prototype route segment; `slug2` is the intended production
 * slug on afimacglobal.com (they deliberately differ — the production slugs
 * carry the keyword, the routes stay short).
 */

export interface Industry {
  /** H1 and SEO title stem. */
  title: string;
  /** Short label used in crumbs, headings and blog-category notes. */
  short: string;
  /** Prototype route segment. */
  slug: string;
  /** Intended production slug. */
  slug2: string;
  /** Optional hero question stack, where the copy exists. */
  heroQs?: string;
  /** Hero art-direction note. */
  heroImg: string;
  rolesTitle: string;
  /** Line-map art-direction note. */
  map: string;
  roles: string[];
}

export const INDUSTRIES: Record<string, Industry> = {
  automotive: {
    title: "Automotive Manufacturing Travel Labor",
    short: "Automotive",
    slug: "automotive",
    slug2: "automotive-manufacturing",
    heroImg: "Hero photo, right column · plant-floor / body shop · muted industrial tone",
    rolesTitle: "Plant staffing, role-ready",
    map: "Line map · HTML widget · assembly sequence with the six staffed stations called out",
    roles: ["CNC Operators", "Welders", "Assemblers", "Machinists", "Material Handlers", "Quality Inspectors"],
  },

  "food-beverage": {
    title: "Food &amp; Beverage Manufacturing Travel Labor",
    short: "Food &amp; Beverage",
    slug: "food-beverage",
    slug2: "food-beverage-manufacturing",
    heroQs: "Seasonal peak? Sanitation shortfall? New line launch?",
    heroImg: "Hero photo, right column · F&amp;B production floor · muted industrial tone",
    rolesTitle: "Plant staffing, role-ready",
    map: "Seven-station production line map · HTML widget · sits above the role grid",
    roles: ["Packaging Operators", "Sanitation Crews", "Line Prep", "Forklift Operators", "Quality Control Inspectors", "Boiler Operators", "Wastewater Techs"],
  },

  logistics: {
    title: "Logistics &amp; Warehouse Travel Labor",
    short: "Logistics &amp; Warehousing",
    slug: "logistics",
    slug2: "logistics-warehousing",
    heroImg: "Hero photo, right column · DC / dock · muted industrial tone",
    rolesTitle: "Warehouse staffing, role-ready",
    map: "Line map · HTML widget · receiving → put-away → pick → pack → ship",
    roles: ["Forklift Operators", "Material Handlers", "Inventory Control Specialists", "Shipping &amp; Receiving Clerks", "CDL Truck Drivers", "Logistics Coordinators"],
  },
};
