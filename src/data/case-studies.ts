/**
 * THE SIX CLIENT CASES, as the designed v1 sheet carries them.
 *
 * Source: "AFIMAC Client Success Stories v1", the designed Critical Situation
 * Travel Labor case sheet, supplied 17 Nov 2026. It supersedes the redacted
 * draft supplied the same day. `body` is that sheet's wording verbatim: these
 * are sentences AFIMAC has already approved, so the rule here is the same as
 * the copy decks — use them as they stand rather than improving them, and
 * raise a change rather than making one.
 *
 * WHAT v1 CHANGED from the redacted draft, all of it followed here:
 *
 *   - **"past-due sales" became "past-due orders"** in the first case. The
 *     draft used both wordings in the same paragraph; v1 uses orders twice.
 *   - **The fourth case is labelled correctly.** The draft headed it "Fortune
 *     500 Agricultural Equipment Manufacturer" over a body about switchgear
 *     and wiring technicians. v1 heads it Switchgear, which is what the
 *     prototype had already corrected it to.
 *   - **The order changed**: switchgear moves ahead of the first food case.
 *   - **Every case gained two category tags** and a fuller figure label.
 *   - **The standfirst changed**: "Clients rely on CSTL" became "Clients rely
 *     on AFIMAC's flexible workforce solutions".
 *   - **The isometric illustrations are gone**, replaced by photography. That
 *     retires the live carousel's art problem rather than fixing it: three of
 *     those six illustrations sit on the wrong case today.
 *
 * Until now the cases lived in three places and agreed in none of them: two
 * bodies hard-typed into the overview carousel, five shorter paraphrases on the
 * Case Studies page written from the pillar's published wording, and a label
 * plus a one-line gist in CASE_ART. This file is the single copy, and the other
 * three read from it.
 *
 * WHAT IS STILL WORTH KNOWING:
 *
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
  /** Client descriptor, as the sheet heads the case. */
  label: string;
  /** The two category tags above the client name on the sheet. */
  tags: [string, string];
  /** Small kicker above the figure, where the sheet runs one ("UP TO"). */
  kicker?: string;
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
    tags: ["Production recovery", "Skilled trades + security"],
    body: "A Fortune 500 manufacturer faced mounting production delays, with past-due orders peaking at $5.76 million. AFIMAC responded by deploying skilled labor, including assemblers, CNC machinists, and welders, supported by on-site security teams. This strategic intervention led to a 73.4% reduction in past-due orders, restoring performance to previously high levels. The turnaround was credited to increased contract labor and seamless collaboration across departments.",
    figure: "73.4%",
    figureLabel: "reduction in past-due orders",
    roles: ["Assemblers", "CNC machinists", "Welders", "On-site security"],
    industries: [],
    placement:
      "Names no sector, so it is not placed on an industry page. It is the section-level case and already runs on Who We Deploy and the role pages.",
  },
  {
    id: "f500-agricultural-equipment",
    label: "Fortune 500 Agricultural Equipment Manufacturer",
    tags: ["Backlog recovery", "Specialized trades"],
    body: "Confronted with a significant customer order backlog, this Fortune 500 agricultural equipment manufacturer brought in multiple staffing providers. AFIMAC quickly distinguished itself as the sole non-local partner retained, supplying skilled assemblers and machinists. Over a two-year engagement, AFIMAC\u2019s workforce helped stabilize operations and return the company to on-time order fulfillment.",
    figure: "2-year",
    figureLabel: "engagement as the sole non-local partner retained",
    roles: ["Assemblers", "Machinists"],
    industries: ["industrial-equipment"],
    placement: "Agricultural equipment is built on an industrial equipment floor; the roles match that page's own.",
  },
  {
    id: "f500-switchgear",
    label: "Fortune 500 Switchgear Manufacturer",
    tags: ["Capacity increase", "Specialized skills"],
    body: "Faced with a growing backlog of orders, a Fortune 500 switchgear manufacturer partnered with AFIMAC for specialized support. A team of 12 experienced wiring technicians was deployed for a multi-month assignment. By the end of the engagement, the backlog was fully cleared, and surplus inventory was built to meet future demand.",
    figure: "12",
    figureLabel: "experienced wiring technicians deployed",
    roles: ["Wiring technicians"],
    industries: ["power-energy"],
    placement: "Switchgear assemblers are on the Power & Energy page's own role list.",
  },
  {
    id: "global-food-99",
    label: "Global Food Manufacturer",
    tags: ["Continuity", "Labor disruption"],
    body: "A major labor disruption at a global food production facility threatened safety and halted operations. AFIMAC deployed 99 personnel, including security and skilled workers such as packaging operators, forklift drivers, boiler operators, and wastewater treatment technicians. With AFIMAC\u2019s support, the client maintained full production and avoided operational downtime throughout the crisis.",
    figure: "99",
    figureLabel: "personnel deployed, including security and skilled workers",
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
    id: "building-materials",
    label: "Large Building Materials Manufacturer",
    tags: ["Continuity", "Staffing shortfall"],
    body: "A staffing shortfall at this building materials manufacturer jeopardized critical production lines. AFIMAC stepped in with a team of 24 personnel, including material handlers, fiber formers, and wastewater treatment operators. Their presence ensured uninterrupted production until the client could reestablish normal staffing levels.",
    figure: "24",
    figureLabel: "personnel deployed to critical production lines",
    roles: ["Material handlers", "Fiber formers", "Wastewater treatment operators"],
    industries: [],
    placement:
      "Building materials is not one of the ten published industries and is not close enough to any of them to borrow. It runs on the overview and the Case Studies page only.",
  },
  {
    id: "global-food-forklift",
    label: "Global Food Manufacturer",
    tags: ["Capacity", "Long-term support"],
    kicker: "Up to",
    body: "Struggling with persistent hiring challenges, this food production facility turned to AFIMAC for long-term support. Over a two-year period, AFIMAC provided up to 20 experienced forklift operators, helping the client maintain stable output and meet operational targets despite local labor shortages.",
    figure: "20",
    figureLabel: "experienced forklift operators over two years",
    roles: ["Forklift operators"],
    industries: ["food-beverage"],
    placement:
      "Set in a food plant, so it goes to Food & Beverage rather than Logistics & Warehousing — but it is the only case in the set that is purely material handling, and the closest the sheet comes to a logistics story.",
  },
];

/** The sheet's own standfirst, for the Case Studies page. */
export const CASE_SHEET_LEAD =
  "When labor shortages threaten operations, AFIMAC’s Critical Situation Travel Labor (CSTL) service delivers fast, effective workforce solutions. Whether for line start-ups, production gaps, plant moves, or unexpected absences, CSTL provides skilled teams to keep manufacturing and logistics running smoothly. Clients rely on AFIMAC’s flexible workforce solutions to maintain productivity, protect their reputation, and avoid costly delays, proving the value of having the right support, exactly when it’s needed.";

/**
 * One case rendered as the v1 sheet lays it out. Every surface that shows a
 * case uses this, so the design cannot drift between the three of them.
 */
export const caseCard = (c: CaseStudy): string =>
  [
    '<div class="casestudy">',
    '<div class="cs-fig">',
    c.kicker ? `<span class="cs-kicker">${c.kicker}</span>` : "",
    `<div class="cs-num">${c.figure}</div>`,
    `<div class="cs-numlabel">${c.figureLabel}</div>`,
    "</div>",
    '<div class="cs-rule"></div>',
    "<div>",
    `<div class="cs-tags">${c.tags.join(" &nbsp;|&nbsp; ")}</div>`,
    `<h3>${c.label}</h3>`,
    `<p>${c.body}</p>`,
    "</div>",
    "</div>",
  ].join("");

/**
 * The cases as a scrolling carousel: one card per slide, snapped, with the
 * arrows and dots added by the layout's script once it sees `data-cscar`.
 *
 * A single case is returned as a bare card. A carousel of one is a control
 * strip over nothing, and two of the three industry pages that have a case
 * have exactly one.
 */
export const caseCarousel = (
  cases: CaseStudy[],
  opts: { label?: string; perView?: 1 | 2 } = {},
): string => {
  if (cases.length < 2) return cases.map(caseCard).join("");
  const label = opts.label ?? "Client cases";
  return [
    `<div class="cscar" data-cscar data-per="${opts.perView ?? 1}"`,
    ` role="group" aria-roledescription="carousel" aria-label="${label}">`,
    '<div class="cscar-track" data-cscar-track>',
    ...cases.map(
      (c, i) =>
        `<div class="cscar-slide" role="group" aria-roledescription="slide"` +
        ` aria-label="${i + 1} of ${cases.length}">${caseCard(c)}</div>`,
    ),
    "</div>",
    "</div>",
  ].join("");
};

/** The cases placed on a given industry page, featured first. */
export const casesFor = (slug: string): CaseStudy[] =>
  CASE_STUDIES.filter((c) => (c.industries as string[]).includes(slug));

/** Industry pages that still have no case behind them. */
export const INDUSTRIES_WITHOUT_A_CASE = (all: string[]): string[] =>
  all.filter((slug) => casesFor(slug).length === 0);
