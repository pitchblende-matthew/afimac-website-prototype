/**
 * Content assets from the AFIMAC - Content Development board in monday.com,
 * mapped to the prototype pages they belong on.
 *
 * Board: https://pitchblende.monday.com/boards/18406372299
 *
 * Only assets that are finished, nearly finished, or specifically scoped for a
 * page in this section are listed. `state` reflects the board's Copy Status and
 * Design Status together:
 *
 *   ready   both approved or completed, and a file exists — placeable today
 *   nearly  copy settled, design not finished — placeable this cycle
 *   planned scoped on the board, not yet produced
 *
 * Status was read on 18 Aug 2026. Re-check the board before acting on it.
 */

export type AssetState = "ready" | "nearly" | "planned";

export type AssetKind =
  | "White paper"
  | "Infographic"
  | "Video"
  | "Checklist"
  | "One-pager";

export interface Asset {
  title: string;
  kind: AssetKind;
  state: AssetState;
  /** Copy Status · Design Status, verbatim from the board. */
  status: string;
  /** monday.com item. */
  monday: string;
  /** Finished file, where one exists. */
  file?: string;
  /** Prototype routes this asset belongs on. */
  places: string[];
  /** Why it belongs there — this is the recommendation, not board data. */
  why: string;
}

export const STATE_LABEL: Record<AssetState, string> = {
  ready: "Ready to place",
  nearly: "Design not final",
  planned: "Scoped, not produced",
};

const M = (id: string) => `https://pitchblende.monday.com/boards/18406372299/pulses/${id}`;

export const ASSETS: Asset[] = [
  {
    title: "What Is Travel Labor? — category-defining white paper",
    kind: "White paper",
    state: "ready",
    status: "Copy Approved · Design Approved",
    monday: M("12130514529"),
    file: "https://www.dropbox.com/scl/fi/65tbxskhx6kw91uaalr8q/Travel-Labor-v2.pdf?rlkey=4itxrjy8x63tmpt8n2kvfra0a&dl=0",
    places: [
      "/what-is-travel-labor",
      "/overview",
      "/how-it-works",
      "/vs-local-staffing",
      "/faq",
      "/resources",
    ],
    why: "The finished asset for the exact query this section is built to win. It should be the section's primary gated download, and the What Is Travel Labor page currently offers a different eBook in its place.",
  },
  {
    title: "Travel vs. Traditional Labor comparison sheet",
    kind: "Infographic",
    state: "ready",
    status: "Copy Approved · Design Approved",
    monday: M("12130531875"),
    file: "https://www.dropbox.com/scl/fo/ra97etfvv19pj64ox9d6k/AJOE4LwQ8JXnVdKpL2btwaw?rlkey=44r21j7b7de0lhim9xxtlmf36&dl=0",
    places: ["/vs-local-staffing", "/what-is-travel-labor", "/resources", "/how-it-works"],
    why: "This is the “Compare 3 Ways to Fill a Workforce Gap” sheet the prototype already promises in two CTAs. It exists and is approved — the CTAs just have nowhere to point.",
  },
  {
    title: "Common Misconceptions in Solving Workforce Disruptions",
    kind: "White paper",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("11630290029"),
    file: "https://www.dropbox.com/scl/fi/nlv6vsvjz67ko0gkjccr6/Workforce-Disruptions-v2.pdf?rlkey=1mmudxk9soufujdfof2r6se1w&dl=0",
    places: ["/resources", "/vs-local-staffing", "/faq"],
    why: "Objection-handling content, which is what the comparison and FAQ pages are for. Nothing on the site links to it.",
  },
  {
    title: "Decision-stage infographic — when AFIMAC is the right fit",
    kind: "Infographic",
    state: "ready",
    status: "Copy Approved · Design Approved",
    monday: M("12130514822"),
    file: "https://www.dropbox.com/scl/fo/3lndkk9aehhk0ltb2eycw/AH0goRzcXrpwyFs8Ml3-bQY?rlkey=peyvekc3dxl0vsfqr7r391mdx&dl=0",
    places: ["/vs-local-staffing", "/how-it-works"],
    why: "The comparison page's Block 08 “Which should you choose?” is a placeholder table with no copy written. This asset already answers that question in approved form.",
  },
  {
    title: "One Partner. Every Site.",
    kind: "Infographic",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("11630334776"),
    file: "https://www.dropbox.com/scl/fo/0c3dij74r4apk61hxt9g0/AFW7RXbwonEwbNMcf11P2tw?rlkey=0jiqh8q12zn1ldiqmchpo7t1m&dl=0",
    places: ["/overview", "/how-it-works"],
    why: "National-coverage proof. Both pages currently spec a bespoke mobilization map that has not been drawn; this may cover the same ground for free.",
  },
  {
    title: "CSTL vs Local Labor (video)",
    kind: "Video",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("11705227892"),
    file: "https://www.dropbox.com/scl/fi/vnycc1zst6od9k4waepbj/2026_Q2_Afimac_AFIMAC-CSTL-vs-Local-Labor-v3.mp4?rlkey=sb7af1fem7d8gam0grb52vx35&dl=0",
    places: ["/vs-local-staffing", "/what-is-travel-labor"],
    why: "A finished film that matches the comparison page exactly. The page has no video block at all.",
  },
  {
    title: "AFIMAC Keeps Production Moving (video)",
    kind: "Video",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("11705208415"),
    file: "https://www.dropbox.com/scl/fi/9ddo5qz8wq126juzmp0qn/2026_Q2_Afimac_Day_1_Ready_v2.mp4?rlkey=827f1kz5h54ouum3763lowg6m&dl=0",
    places: ["/day-1-ready", "/overview", "/how-it-works"],
    why: "Produced for the Day 1 Ready package — the page it belongs on has no copy written yet, but the hero asset is already finished.",
  },
  {
    title: "AFIMAC is the Choice for Workforce Reliability (video case study)",
    kind: "Video",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("11705253200"),
    file: "https://www.dropbox.com/scl/fi/0v1nd1tvi12fl4q30tboh/2026_Q2_Afimac_AFIMAC-is-the-Choice-for-Workforce-Reliability_v3.mp4?rlkey=n5124z78sk7yiw5hjn9x40ubt&dl=0",
    places: ["/overview", "/resources"],
    why: "Board notes call it a video case study. Every industry page has a Client Success block that is blocked pending real cases — this is one, already made.",
  },
  {
    title: "Bridging the Manufacturing Labor Gap",
    kind: "White paper",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("12074239617"),
    file: "https://www.dropbox.com/scl/fi/asw3p9jzvufo0c3pkt1ec/Bridging-the-Manufacturing-Labor-Gap-v4.pdf?rlkey=tadfpb0onk3528oeh437ephtm&dl=0",
    places: ["/overview", "/roles/welders", "/resources", "/industries"],
    why: "Already live on the site and already used by the prototype. Listed so the library is complete — note the board carries v4, newer than what the live page serves.",
  },
  {
    title: "A Snapshot of Manufacturing Labor in America",
    kind: "White paper",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("12074264740"),
    file: "https://www.dropbox.com/scl/fi/3cyf7p78g32aehtejtic5/Manufacturing-Labor-in-America-FINAL.pdf?rlkey=3kcjjkxohud5fqy5torl4fagw&dl=0",
    places: ["/resources", "/what-is-travel-labor"],
    why: "Supports the “why skilled labor gaps are growing” argument the page already makes from cited data.",
  },
  {
    title: "Reshaping the Manufacturing Supply Chain",
    kind: "White paper",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("12074292498"),
    file: "https://www.dropbox.com/scl/fi/5ixd19c5l8jzqrrs1uarz/Reshaping-the-Manufactuing-Supply-Chain-v2.pdf?rlkey=vi2c9tqg7a4cc0yke4goabuzl&dl=0",
    places: ["/resources"],
    why: "Reshoring content, matching the reshoring post that appears in three Related Insights rails.",
  },
  {
    title: "Industry cuts — Labor Gap · Snapshot · Reshaping (7 PDFs)",
    kind: "White paper",
    state: "ready",
    status: "Copy Completed · Design Completed",
    monday: M("12171133967"),
    places: ["/industries", "/industries/automotive", "/industries/food-beverage", "/industries/logistics-warehousing", "/resources"],
    why: "Automotive, Food & Beverage and Logistics versions of the three legacy papers are all finished. Every industry page has an empty Related Insights rail and no gated asset — these are the obvious fill, industry by industry.",
  },
  {
    title: "AFIMAC turnover vs industry",
    kind: "Infographic",
    state: "nearly",
    status: "Copy Approved · Design Ready for Approval",
    monday: M("11630076371"),
    file: "https://www.dropbox.com/scl/fo/7ovgjm1yaxxzax5azcm1q/AATLfZhj12ehEFNg1hTakEg?rlkey=8nbij3vlh3dpijb3qb31sbncg&dl=0",
    places: ["/overview", "/vs-local-staffing"],
    why: "A retention proof point the section does not currently make anywhere. One approval away.",
  },
  {
    title: "Skills profile of AFIMAC's deployed workforce",
    kind: "Infographic",
    state: "nearly",
    status: "Copy Approved · Design Paused",
    monday: M("11630262776"),
    file: "https://www.dropbox.com/scl/fi/dhfmb2csze8uwv2muelkl/AFIMAC-Workforce-Skills-Profile-1080x1350-v6.png?rlkey=z99xv3ch4iqe462irerql189g&dl=0",
    places: ["/roles", "/overview", "/what-is-travel-labor"],
    why: "The roles hub is a list of eight links with no evidence behind it. This is the asset that shows what the 20,000+ network actually consists of. Design is paused at v6, not blocked.",
  },
  {
    title: "Operational Continuity Stack ecosystem map",
    kind: "Infographic",
    state: "nearly",
    status: "Copy Approved · Design Edits Required",
    monday: M("11630311117"),
    file: "https://www.dropbox.com/scl/fi/t2qldxw1zdx9yco44knzy/Operational-Continuity-Stack-v1.png?rlkey=15cuj8ga1hyvggxap6jnrx1dn&dl=0",
    places: ["/how-it-works", "/overview"],
    why: "Shows labor and security as one coordinated response — the integrated-model differentiator, which the CSTL section never illustrates.",
  },
  {
    title: "Self-qualification one-pager",
    kind: "One-pager",
    state: "nearly",
    status: "Copy Ready for Approval · Design Paused",
    monday: M("12130491928"),
    file: "https://www.dropbox.com/scl/fi/ndi30hgj3c4k11rdgzlej/Self-Qualification-Workforce-Partner-One-Pager-v1.pdf?rlkey=i0ylnw9tw9y7vpw6xxcy9dlyc&dl=0",
    places: ["/vs-local-staffing", "/resources"],
    why: "Directly serves the comparison page's “Go local when… / Call AFIMAC when…” block, which has no copy written.",
  },
  {
    title: "Labor Gap: Heavy Machinery white paper",
    kind: "White paper",
    state: "nearly",
    status: "Copy Approved · Design In Progress",
    monday: M("12682215430"),
    places: ["/resources", "/industries"],
    why: "August addition. Industrial Equipment is one of the five live industry pages with no CSTL update — this would give it something of its own.",
  },
  {
    title: "Inside your pre-deployment — step-by-step + timeline",
    kind: "Infographic",
    state: "planned",
    status: "Copy Ready for Approval · Design Not Started",
    monday: M("11629952273"),
    places: ["/pre-deployment", "/how-it-works"],
    why: "The Pre-Deployment Checklist page is marked not started in this prototype, but its lead asset already has copy awaiting approval. The page is closer than the nav suggests.",
  },
  {
    title: "What Is Day 1 Ready?",
    kind: "Infographic",
    state: "planned",
    status: "Copy Edits Required · Design Not Started",
    monday: M("11753021953"),
    places: ["/day-1-ready"],
    why: "Same again — Day 1 Ready reads as not started here, but it has a named hero asset, a finished video, and a checklist in progress.",
  },
  {
    title: "What to do before we arrive (checklist)",
    kind: "Checklist",
    state: "planned",
    status: "Copy In Progress · Design Not Started",
    monday: M("11630175048"),
    places: ["/pre-deployment"],
    why: "The page is literally named Pre-Deployment Checklist and this is the checklist.",
  },
  {
    title: "Cost-of-inaction series (×3, one per vertical)",
    kind: "Infographic",
    state: "planned",
    status: "Not started",
    monday: M("11630415629"),
    places: ["/industries/automotive", "/industries/food-beverage", "/industries/logistics-warehousing", "/pricing-roi"],
    why: "Each industry page's Labor Gap block has a “What it costs you” column with no copy. This series is scoped to fill exactly that, one per vertical.",
  },
  {
    title: "ABM industry infographics — line-down hour · downtime by SKU · peak-season timeline",
    kind: "Infographic",
    state: "planned",
    status: "Not started",
    monday: M("12490213408"),
    places: ["/industries/automotive", "/industries/food-beverage", "/industries/logistics-warehousing"],
    why: "One per industry page, and each is the quantified argument its page is missing.",
  },
  {
    title: "True Cost of Disruption white paper (gated)",
    kind: "White paper",
    state: "planned",
    status: "Not started",
    monday: M("12130541917"),
    places: ["/pricing-roi", "/resources"],
    why: "The Pricing & ROI page has no scope and no calculator logic. A gated cost paper is a far cheaper first step than building a calculator.",
  },
];

/** Assets recommended for a given prototype route. */
export function assetsFor(route: string): Asset[] {
  return ASSETS.filter((a) => a.places.includes(route));
}

/** Ready · nearly · planned counts across the whole inventory. */
export function assetTotals(): Record<AssetState, number> {
  const t: Record<AssetState, number> = { ready: 0, nearly: 0, planned: 0 };
  for (const a of ASSETS) t[a.state]++;
  return t;
}
