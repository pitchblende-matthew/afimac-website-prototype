/**
 * Approved page copy for the industry cluster, from the WordPress handoff decks.
 *
 * The industry template was wireframed before this copy existed, so it drew grey
 * bars where headlines and body were still to be written. The copy is written —
 * "final page copy … drop it into the Elementor template as-is" — so the bars
 * are gone and the words are here, in deck section order.
 *
 * Sources, read 10 Sep 2026:
 *   Automotive      · "Automotive Travel Labor - Page Copy.docx" (v1)
 *   Food & Beverage · "Food Beverage Manufacturing Labor - Page Copy.docx" (v1)
 *
 * Logistics & Warehousing has its own deck and its own page, which already runs
 * this copy — see src/pages/industries/logistics-warehousing.astro.
 *
 * Text is stored exactly as the deck writes it, entity-escaped for HTML. Where a
 * figure here conflicts with one elsewhere in the section, the conflict is
 * surfaced on the page rather than silently reconciled here.
 */

export interface Station {
  /** "01", "02" … as the deck numbers them. */
  n: string;
  title: string;
  roles: string[];
}

export interface DeployPhase {
  n: string;
  title: string;
  /** "2–3 days", "live in 6–7 days". */
  days: string;
  bullets: string[];
}

export interface IndustryCopy {
  eyebrow: string;
  heroSub: string;
  heroBody: string;
  ctas: [string, string];
  gapEyebrow: string;
  gapH2: string;
  gapBody: string;
  situationsH3: string;
  situations: string[];
  risksH3: string;
  risks: string[];
  /** The infographic label and its three bars, as the deck states them. */
  speedLabel: string;
  speedBars: [string, string][];
  rolesSectionTitle: string;
  rolesH2: string;
  rolesBody: string;
  stations: Station[];
  calloutText: string;
  calloutButton: string;
  deployH2: string;
  phases: DeployPhase[];
  numbersH2: string;
  numbersBody: string;
  stats: [string, string][];
  successTitle: string;
  successNote: string;
  insights: [string, string][];
  formSectionTitle: string;
  formH2: string;
  formIntro: string;
  formBullets: string[];
  formFields: string[];
  formButton: string;
  urgentLine: string;
  consent: string;
  seo: { slug: string; title: string; desc: string; primary: string; secondary: string };
}

const SHARED_FIELDS = [
  "First name · Last name",
  "Company",
  "Work email · Phone",
];

const CONSENT =
  "By submitting, you agree to AFIMAC’s Privacy Policy. We respond within one business day.";

export const INDUSTRY_COPY: Record<string, IndustryCopy> = {
  automotive: {
    eyebrow: "Critical Situation Travel Labor · Automotive",
    heroSub: "New Plant Launch? / Past-Due Backlog? / Model Changeover?",
    heroBody:
      "AFIMAC delivers skilled automotive plant staffing — assemblers, welders, and line technicians — on demand, so your North American production stays on schedule when local hiring can’t keep up.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "The Automotive Labor Gap",
    gapH2: "When the line can’t wait for local hiring",
    gapBody:
      "You manage plant labor every day, addressing turnover, absenteeism, and seasonal peaks. But when a launch date is at risk or past-due orders start stacking up, local recruiting can’t move fast enough. AFIMAC rapidly delivers a turnkey automotive workforce when labor puts your production — and your OEM relationships — on the line.",
    situationsH3: "Critical situations we handle",
    situations: [
      "New plant &amp; EV line start-up",
      "Model changeover &amp; retooling",
      "Production shortfalls &amp; past-due backlog",
      "Plant relocation &amp; consolidation",
      "Tier 1 / Tier 2 supplier surge",
      "Reshoring &amp; new North American capacity",
    ],
    risksH3: "Risks we help you mitigate",
    risks: [
      "Line-down penalties &amp; chargebacks",
      "Missed start-of-production (SOP) dates",
      "OEM customer defection",
      "Launch &amp; PPAP delays",
      "Reputational damage",
      "Lost market share",
    ],
    speedLabel: "Time to a working crew on your floor",
    speedBars: [
      ["Direct local hire", "45–90 days"],
      ["Temp / contract agency", "21–35 days"],
      ["AFIMAC travel labor", "6–7 days"],
    ],
    rolesSectionTitle: "Automotive Plant Staffing, Role-Ready",
    rolesH2: "The skilled crews that keep the plant moving",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and unskilled workers, who are vetted, mobile, and ready to work.",
    stations: [
      { n: "01", title: "Body &amp; Weld", roles: ["Weld line operators", "Spot &amp; MIG welders", "Body-in-white assemblers", "Fixture &amp; jig setters", "Robotic weld techs"] },
      { n: "02", title: "Paint &amp; Finish", roles: ["Paint line operators", "Prep &amp; sand technicians", "E-coat operators", "Sealer &amp; masking techs"] },
      { n: "03", title: "General Assembly", roles: ["Trim &amp; final assemblers", "Torque &amp; fastening operators", "Sub-assembly builders", "Line associates"] },
      { n: "04", title: "Powertrain &amp; Machining", roles: ["CNC machinists", "Engine &amp; transmission assemblers", "EV battery module assemblers", "Machine operators"] },
      { n: "05", title: "Quality &amp; Launch", roles: ["Quality inspectors", "CMM operators", "Containment &amp; sort techs", "Launch / PPAP support"] },
      { n: "06", title: "Automation &amp; Maintenance", roles: ["Robotics &amp; controls techs", "Maintenance technicians", "PLC troubleshooters", "Instrumentation techs"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Forklift operators", "Line-side material handlers", "Sequencing &amp; kitting", "Shipping &amp; receiving"] },
    ],
    calloutText: "Don’t see the role you need? If it runs on your floor, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "A crew on your floor in 6–7 days",
    phases: [
      { n: "01", title: "Consultation", days: "2–3 days", bullets: ["Assess plant labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "2–3 days", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing", "Plant-specific safety training"] },
      { n: "03", title: "Deployment", days: "live in 6–7 days", bullets: ["Crew works your line", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "2–3 days", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for automotive labor under pressure",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when a labor gap threatens production and the clock is running.",
    stats: [["40+", "Years of Experience"], ["20,000+", "Skilled Laborers"], ["18+", "Industries Served"]],
    successTitle: "Automotive Client Success",
    successNote:
      "Run this section on real automotive engagements pulled from AFIMAC’s records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential. Good spread: an EV plant start-up, a model changeover or retooling gap, and a backlog recovery.",
    insights: [
      ["What the push for reshoring means for U.S. automotive manufacturers", "Automotive"],
      ["Ready on day one: the case for skilled travel labor at your next line launch", "Workforce"],
      ["Why manufacturing workforce gaps become operational problems", "Manufacturing"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let’s talk today, and we’ll match a solution to your plant.",
    formIntro: "Tell us about your situation and we’ll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your plant",
      "Ballpark costs",
      "Estimated ROI &amp; risk-avoided impact",
    ],
    formFields: [...SHARED_FIELDS, "Plant location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: CONSENT,
    seo: {
      slug: "/solutions/critical-situation-travel-labor/automotive-manufacturing/",
      title: "Automotive Manufacturing Travel Labor &amp; Plant Staffing | AFIMAC Global",
      desc: "AFIMAC delivers skilled automotive plant staffing and travel labor — assemblers, welders, and line techs — deployed to your North American plant in days to protect launch dates and clear backlogs.",
      primary: "automotive manufacturing travel labor · automotive plant staffing",
      secondary: "EV line start-up staffing · automotive assemblers &amp; welders · reshoring workforce · Tier 1 supplier staffing",
    },
  },

  "food-beverage": {
    eyebrow: "Critical Situation Travel Labor · Food &amp; Beverage",
    heroSub: "Seasonal Peak? / Sanitation Shortfall? / New Line Launch?",
    heroBody:
      "AFIMAC delivers skilled food and beverage plant staffing — production, sanitation, and packaging crews — on demand, so your output, food-safety standards, and ship dates hold when local hiring can’t keep up.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "The Food &amp; Beverage Labor Gap",
    gapH2: "When the line can’t wait for local hiring",
    gapBody:
      "You manage plant labor every day, which means dealing with turnover, absenteeism, and seasonal peaks. But when demand spikes, a sanitation crew comes up short, or a new line has to launch on schedule, local recruiting can’t move fast enough. AFIMAC rapidly delivers a turnkey, food-safety-ready workforce when labor puts your production — and your retail commitments — on the line.",
    situationsH3: "Critical situations we handle",
    situations: [
      "Seasonal &amp; peak-season demand surges",
      "New product &amp; new line launch",
      "Production shortfalls &amp; past-due orders",
      "Sanitation &amp; deep-clean staffing gaps",
      "Co-packing &amp; private-label surge",
      "Plant expansion, relocation &amp; consolidation",
    ],
    risksH3: "Risks we help you mitigate",
    risks: [
      "Missed retailer ship windows &amp; chargebacks",
      "Food-safety &amp; sanitation lapses",
      "Spoilage &amp; lost perishable inventory",
      "Audit &amp; compliance findings (GMP, HACCP)",
      "Retail customer defection",
      "Lost shelf space &amp; market share",
    ],
    speedLabel: "Time to a working crew on your floor",
    speedBars: [
      ["Direct local hire", "45–90 days"],
      ["Temp / contract agency", "21–35 days"],
      ["AFIMAC travel labor", "6–7 days"],
    ],
    rolesSectionTitle: "Food &amp; Beverage Plant Staffing, Role-Ready",
    rolesH2: "The skilled crews that keep the plant running",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and unskilled workers, who are vetted, mobile, and ready to work.",
    stations: [
      { n: "01", title: "Receiving &amp; Raw Materials", roles: ["Ingredient &amp; material handlers", "Receiving &amp; put-away crew", "Weigh &amp; batch prep", "Inventory &amp; scale operators"] },
      { n: "02", title: "Processing &amp; Production", roles: ["Production line operators", "Mixing, blending &amp; batching techs", "Cooking, baking, &amp; thermal operators", "Process &amp; machine operators"] },
      { n: "03", title: "Packaging &amp; Labeling", roles: ["Packaging line associates", "Fill, seal &amp; cap operators", "Labeling &amp; date-code techs", "Case pack &amp; palletizers"] },
      { n: "04", title: "Sanitation &amp; GMP", roles: ["Sanitation (SSOP) crews", "Deep-clean &amp; changeover teams", "Wash-down &amp; CIP operators", "GMP compliance support"] },
      { n: "05", title: "Quality &amp; Food Safety", roles: ["QA / QC inspectors", "HACCP &amp; food-safety techs", "Line audit &amp; hold/release", "Lab &amp; sampling support"] },
      { n: "06", title: "Maintenance &amp; Automation", roles: ["Maintenance technicians", "Packaging-line mechanics", "Controls &amp; PLC troubleshooters", "Refrigeration support techs"] },
      { n: "07", title: "Cold Chain &amp; Logistics", roles: ["Forklift &amp; reach-truck operators", "Cold-storage &amp; freezer crews", "Sequencing, kitting, &amp; staging", "Shipping &amp; receiving"] },
    ],
    calloutText: "Don’t see the role you need? If it runs on your floor, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "A crew on your floor in 6–7 days",
    phases: [
      { n: "01", title: "Consultation", days: "2–3 days", bullets: ["Assess plant labor needs", "Align on roles, shifts &amp; food-safety requirements", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "2–3 days", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing", "Plant-specific GMP &amp; safety training"] },
      { n: "03", title: "Deployment", days: "live in 6–7 days", bullets: ["Crew works your line", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "2–3 days", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for food &amp; beverage labor under pressure",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when a labor gap threatens production and the clock is running.",
    stats: [["40+", "Years of Experience"], ["20,000+", "Skilled Laborers"], ["18+", "Industries Served"]],
    successTitle: "Food &amp; Beverage Client Success",
    successNote:
      "Run this section on real food &amp; beverage engagements pulled from AFIMAC’s records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential. Good spread: a seasonal peak-season surge, a sanitation / deep-clean staffing gap, and a backlog or ship-window recovery.",
    insights: [
      ["Staffing the peak: how food &amp; beverage plants protect ship windows in demand surges", "Food &amp; Beverage"],
      ["Ready on day one: the case for skilled travel labor at your next line launch", "Workforce"],
      ["Why manufacturing workforce gaps become operational problems", "Manufacturing"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let’s talk today, and we’ll match a solution to your plant.",
    formIntro: "Tell us about your situation and we’ll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your plant",
      "Ballpark costs",
      "Estimated ROI &amp; risk-avoided impact",
    ],
    formFields: [...SHARED_FIELDS, "Plant location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: CONSENT,
    seo: {
      slug: "/solutions/critical-situation-travel-labor/food-beverage-manufacturing/",
      title: "Food &amp; Beverage Manufacturing Staffing &amp; Plant Labor | AFIMAC Global",
      desc: "AFIMAC delivers skilled food and beverage manufacturing staffing — production, sanitation, and packaging crews — deployed to your plant in days to protect output, hold food-safety standards, and clear backlog.",
      primary: "food and beverage manufacturing staffing · F&amp;B plant labor",
      secondary: "food production line staffing · sanitation &amp; GMP crews · seasonal &amp; peak-season labor · co-packing surge staffing · food-safety compliant workforce",
    },
  },
};
