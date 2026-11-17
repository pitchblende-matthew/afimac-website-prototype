/**
 * THE SIX CLIENT CASES, as the approved sales sheet carries them.
 *
 * Source: "AFIMAC — Client Success Stories", the Critical Situation Travel
 * Labor case-study sheet, supplied 17 Nov 2026. `body` is that sheet's wording
 * verbatim: these are sentences AFIMAC has already approved, so the rule here
 * is the same as the copy decks — use them as they stand rather than improving
 * them, and raise a change rather than making one.
 *
 * Until now the cases lived in three places and agreed in none of them: two
 * bodies hard-typed into the overview carousel, five shorter paraphrases on the
 * Case Studies page written from the pillar's published wording, and a label
 * plus a one-line gist in CASE_ART. This file is the single copy, and the other
 * three read from it.
 *
 * WHAT THE SHEET GETS WRONG, and what is done about it here:
 *
 *   - **The fourth case is mislabelled on the sheet itself.** Its heading says
 *     "Fortune 500 Agricultural Equipment Manufacturer" — copied from the
 *     second case — while its body describes a switchgear manufacturer and a
 *     team of wiring technicians. The body is the substantive description, so
 *     `label` follows the body and `sheetLabel` records what the sheet says.
 *     The live site repeats the sheet's error in its carousel alt text.
 *   - **Two labels appear twice**, which is a consequence of anonymising the
 *     clients rather than a mistake: there are two Global Food Manufacturer
 *     cases and, once the fourth is corrected, one agricultural equipment case.
 *     `label` is therefore not a key. Use `id`.
 *
 * None of these cases name the client. Four of the five rows on the Case
 * Studies page already carry a bracket where a name would go, blocked on
 * written permission; nothing in this sheet unblocks that.
 */

/** Industry page slugs a case can be placed on. */
export type IndustrySlug =
  | "automotive"
  | "food-beverage"
  | "logistics-warehousing"
  | "aerospace-aviation-defense"
  | "chemicals"
  | "consumer-goods"
  | "industrial-equipment"
  | "oil-gas"
  | "plastics"
  | "power-energy";

export interface CaseStudy {
  /** Stable key. `label` is not unique — two cases share each of two labels. */
  id: string;
  /** Client descriptor, corrected where the sheet contradicts itself. */
  label: string;
  /** What the sheet's heading says, where that differs from `label`. */
  sheetLabel?: string;
  /** The sheet's paragraph, verbatim. */
  body: string;
  /** The single number the case turns on, for a stat or a row heading. */
  figure: string;
  /** What that figure counts. */
  figureLabel: string;
  /** Roles deployed, as the body names them. */
  roles: string[];
  /**
   * Industry pages this case belongs on, most relevant first. Empty means no
   * page fits it — which is true of the building materials case, and is the
   * reason six cases do not cover ten industries.
   */
  industries: IndustrySlug[];
  /** Why it sits where it sits, where that is a judgement rather than obvious. */
  placement?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "f500-manufacturer",
    label: "Fortune 500 Manufacturer",
    body: "A Fortune 500 manufacturer faced mounting production delays, with past-due orders peaking at $5.76 million. AFIMAC responded by deploying skilled labor — including assemblers, CNC machinists, and welders — supported by on-site security teams. This strategic intervention led to a 73.4% reduction in past-due sales, restoring performance to previously high levels. The turnaround was credited to increased contract labor and seamless collaboration across departments.",
    figure: "73.4%",
    figureLabel: "Cut in past-due sales",
    roles: ["Assemblers", "CNC machinists", "Welders", "On-site security"],
    industries: [],
    placement:
      "Names no sector, so it is not placed on an industry page. It is the section-level case and already runs on Who We Deploy and the role pages.",
  },
  {
    id: "f500-agricultural-equipment",
    label: "Fortune 500 Agricultural Equipment Manufacturer",
    body: "Confronted with a significant customer order backlog, this Fortune 500 agricultural equipment manufacturer brought in multiple staffing providers. AFIMAC quickly distinguished itself as the sole non-local partner retained, supplying skilled assemblers and machinists. Over a two-year engagement, AFIMAC’s workforce helped stabilize operations and return the company to on-time order fulfillment.",
    figure: "Two years",
    figureLabel: "To on-time fulfillment",
    roles: ["Assemblers", "Machinists"],
    industries: ["industrial-equipment"],
    placement: "Agricultural equipment is built on an industrial equipment floor; the roles match that page's own.",
  },
  {
    id: "global-food-99",
    label: "Global Food Manufacturer",
    body: "A major labor disruption at a global food production facility threatened safety and halted operations. AFIMAC deployed 99 personnel, including security and skilled workers such as packaging operators, forklift drivers, boiler operators, and wastewater treatment technicians. With AFIMAC’s support, the client maintained full production and avoided operational downtime throughout the crisis.",
    figure: "99",
    figureLabel: "Personnel deployed",
    roles: [
      "Packaging operators",
      "Forklift drivers",
      "Boiler operators",
      "Wastewater treatment technicians",
      "Security",
    ],
    industries: ["food-beverage"],
  },
  {
    id: "f500-switchgear",
    label: "Fortune 500 Switchgear Manufacturer",
    sheetLabel: "Fortune 500 Agricultural Equipment Manufacturer",
    body: "Faced with a growing backlog of orders, a Fortune 500 switchgear manufacturer partnered with AFIMAC for specialized support. A team of 12 experienced wiring technicians was deployed for a multi-month assignment. By the end of the engagement, the backlog was fully cleared, and surplus inventory was built to meet future demand.",
    figure: "12",
    figureLabel: "Wiring technicians",
    roles: ["Wiring technicians"],
    industries: ["power-energy"],
    placement: "Switchgear assemblers are on the Power & Energy page's own role list.",
  },
  {
    id: "building-materials",
    label: "Large Building Materials Manufacturer",
    body: "A staffing shortfall at this building materials manufacturer jeopardized critical production lines. AFIMAC stepped in with a team of 24 personnel, including material handlers, fiber formers, and wastewater treatment operators. Their presence ensured uninterrupted production until the client could reestablish normal staffing levels.",
    figure: "24",
    figureLabel: "Personnel deployed",
    roles: ["Material handlers", "Fiber formers", "Wastewater treatment operators"],
    industries: [],
    placement:
      "Building materials is not one of the ten published industries and is not close enough to any of them to borrow. It runs on the overview and the Case Studies page only.",
  },
  {
    id: "global-food-forklift",
    label: "Global Food Manufacturer",
    body: "Struggling with persistent hiring challenges, this food production facility turned to AFIMAC for long-term support. Over a two-year period, AFIMAC provided up to 20 experienced forklift operators, helping the client maintain stable output and meet operational targets despite local labor shortages.",
    figure: "Up to 20",
    figureLabel: "Forklift operators",
    roles: ["Forklift operators"],
    industries: ["food-beverage"],
    placement:
      "Set in a food plant, so it goes to Food & Beverage rather than Logistics & Warehousing — but it is the only case in the set that is purely material handling, and the closest the sheet comes to a logistics story.",
  },
];

/** The sheet's own standfirst, for the Case Studies page. */
export const CASE_SHEET_LEAD =
  "When labor shortages threaten operations, AFIMAC’s Critical Situation Travel Labor (CSTL) service delivers fast, effective workforce solutions. Whether for line start-ups, production gaps, plant moves, or unexpected absences, CSTL provides skilled teams to keep manufacturing and logistics running smoothly.";

/** The cases placed on a given industry page, featured first. */
export const casesFor = (slug: string): CaseStudy[] =>
  CASE_STUDIES.filter((c) => (c.industries as string[]).includes(slug));

/** Industry pages that still have no case behind them. */
export const INDUSTRIES_WITHOUT_A_CASE = (all: string[]): string[] =>
  all.filter((slug) => casesFor(slug).length === 0);
