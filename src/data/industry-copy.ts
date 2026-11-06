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
 * Logistics & Warehousing has its own deck and its own page, so only its station
 * list lives here — LOG_STATIONS, below — because the crew module is shared
 * across all three industry pages and has to read from one place.
 *
 * Text is stored exactly as the deck writes it, entity-escaped for HTML. Where a
 * figure here conflicts with one elsewhere in the section, the conflict is
 * surfaced on the page rather than silently reconciled here.
 */

import { SOFT_PHASES } from "./timing";

export interface Station {
  /** "01", "02" … as the deck numbers them. */
  n: string;
  title: string;
  roles: string[];
}

export interface DeployPhase {
  n: string;
  title: string;
  /** The directional window for this phase, from SOFT_PHASES. */
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
  /**
   * The speed-comparison infographic label and its three bars.
   *
   * Only the Automotive and Food & Beverage decks carry one. The nine decks
   * written since drop it — they state speed in the hero and again in How We
   * Deploy instead — so it is optional, and the note that cites it is skipped
   * where there is none.
   */
  speedLabel?: string;
  speedBars?: [string, string][];
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
      ["AFIMAC travel labor", "As little as 72 hours"],
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
    deployH2: "A crew on your floor in as little as 72 hours",
    phases: [
      { n: "01", title: "Consultation", days: SOFT_PHASES[0].timing, bullets: ["Assess plant labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: SOFT_PHASES[1].timing, bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing", "Plant-specific safety training"] },
      { n: "03", title: "Deployment", days: SOFT_PHASES[2].timing, bullets: ["Crew works your line", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: SOFT_PHASES[3].timing, bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for automotive labor under pressure",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when a labor gap threatens production and the clock is running.",
    stats: [["40+", "Years of Experience"], ["20,000+", "Skilled Laborers"], ["26+", "Industries Served"]],
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
      ["AFIMAC travel labor", "As little as 72 hours"],
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
    deployH2: "A crew on your floor in as little as 72 hours",
    phases: [
      { n: "01", title: "Consultation", days: SOFT_PHASES[0].timing, bullets: ["Assess plant labor needs", "Align on roles, shifts &amp; food-safety requirements", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: SOFT_PHASES[1].timing, bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing", "Plant-specific GMP &amp; safety training"] },
      { n: "03", title: "Deployment", days: SOFT_PHASES[2].timing, bullets: ["Crew works your line", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: SOFT_PHASES[3].timing, bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for food &amp; beverage labor under pressure",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when a labor gap threatens production and the clock is running.",
    stats: [["40+", "Years of Experience"], ["20,000+", "Skilled Laborers"], ["26+", "Industries Served"]],
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

  "aerospace-aviation-defense": {
    eyebrow: "Critical Situation Travel Labor · Aerospace, Aviation &amp; Defense",
    heroSub: "Meet Rate Increases. / Staff New Programs. / Growth Without the Hiring Lag.",
    heroBody:
      "AFIMAC brings skilled travel labor to aircraft OEMs, component and systems suppliers, and defense equipment manufacturers when a rate increase, a new program, or a new facility calls for more people than the local labor market can supply. That includes structures assemblers, machinists, and quality inspectors, along with a wide range of other trades drawn from a talent pool of more than 20,000 people, so the build stays on schedule as volume climbs.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "Staffing Aerospace Growth",
    gapH2: "When the build is growing faster than local hiring",
    gapBody:
      "Aerospace and defense manufacturers are ramping up, from OEM final assembly down through the suppliers building structures, components, and systems, and the skills behind that work take years to build. When a customer raises the rate, a new program moves into production, or a new facility comes online, there often aren't enough of the right trades nearby to staff it on time. AFIMAC brings in a vetted travel crew, selected for the roles you need and ready to contribute, so you can say yes to more work and keep your milestones where they are. Some manufacturers bring a crew in for one ramp, and others keep travel labor on as a standing part of their workforce.",
    situationsH3: "Growth moments we staff",
    situations: [
      "Production rate increases",
      "New program &amp; line start-up",
      "New facility &amp; capacity expansion",
      "Reshoring &amp; new North American capacity",
      "Supplier ramps behind OEM rate increases",
      "Contract wins &amp; added shifts",
    ],
    risksH3: "What growth looks like with AFIMAC",
    risks: [
      "Rate increases met on schedule",
      "New programs staffed from the first shift",
      "Delivery milestones held as volume climbs",
      "Your core team focused on the highest-skill work",
      "Capacity to bid on more programs",
      "Flexible capacity that scales with the build",
    ],
    rolesSectionTitle: "Role-Ready Aerospace Staffing",
    rolesH2: "The skilled crews that keep the build moving",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and general workers, who are vetted, mobile, and ready to contribute.",
    stations: [
      { n: "01", title: "Detail Parts &amp; Machining", roles: ["CNC machinists", "Machine operators", "Sheet metal fabricators", "Deburr &amp; finish technicians"] },
      { n: "02", title: "Composites &amp; Bonding", roles: ["Composite layup technicians", "Bond &amp; cure operators", "Composite trim &amp; drill techs", "Sealant applicators"] },
      { n: "03", title: "Structures &amp; Assembly", roles: ["Structures assemblers", "Riveters &amp; fastener installers", "Jig &amp; fixture builders", "Sub-assembly mechanics"] },
      { n: "04", title: "Electrical &amp; Systems", roles: ["Wire harness assemblers", "Electrical installers", "Hydraulic &amp; tubing installers", "Systems test technicians"] },
      { n: "05", title: "Paint &amp; Finish", roles: ["Aerospace painters", "Surface prep technicians", "Masking &amp; coating techs"] },
      { n: "06", title: "Quality &amp; Inspection", roles: ["Quality inspectors", "CMM operators", "NDT technicians", "First article inspection support"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Material handlers", "Kitting &amp; stores clerks", "Forklift operators", "Shipping &amp; receiving clerks"] },
    ],
    calloutText: "Don't see the role you need? AFIMAC draws on a talent pool of more than 20,000 people, so we can find people for a wide variety of skills. If the work is in your build, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "From first call to a crew on your floor",
    phases: [
      { n: "01", title: "Assessment", days: "timing varies by engagement", bullets: ["Assess facility labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "can begin rapidly once approved", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing"] },
      { n: "03", title: "Deployment", days: "teams can mobilize in as little as 72 hours", bullets: ["Crew works your build", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "demobilize in as little as 48 hours", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for growing aerospace and defense manufacturers",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when they need skilled people quickly to launch, expand, and take on more work.",
    stats: [
      ["40+", "Years of Experience"],
      ["20,000+", "Skilled Laborers"],
      ["18+", "Industries Served"],
    ],
    successTitle: "Aerospace Client Success",
    successNote:
      "Run this section on real aerospace, aviation, or defense engagements pulled from AFIMAC's records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential.",
    insights: [
      ["Turbulence Ahead: Navigating Manufacturing Risks in Aerospace, Aviation &amp; Defense", "Aerospace"],
      ["How Smart Labor is Changing Manufacturing – And Why Specialized Temporary Workers Matter More Than Ever", "Manufacturing"],
      ["Dynamic Staffing: Offense is the Best Defense Against the Labor Shortage Crisis", "Workforce"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let's talk today, and we'll match a solution to your facility.",
    formIntro: "Tell us about your situation and we'll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your facility",
      "Ballpark costs",
      "Estimated ROI &amp; growth impact",
    ],
    formFields: [...SHARED_FIELDS, "Facility location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: "By submitting, you agree to AFIMAC's Privacy Policy. We respond within one business day.",
    seo: {
      slug: "/solutions/critical-situation-travel-labor/industries/aerospace-aviation-defense/",
      title: "Aerospace, Aviation &amp; Defense Travel Labor | AFIMAC Global",
      desc: "Skilled travel labor for aerospace and defense manufacturers, from structures assemblers to machinists and inspectors, to meet rate increases.",
      primary: "aerospace travel labor · aerospace manufacturing staffing",
      secondary: "defense manufacturing staffing · aircraft structures assemblers · aerospace machinists · composite technicians · aerospace component manufacturing staffing",
    },
  },

  "chemicals": {
    eyebrow: "Critical Situation Travel Labor · Chemicals",
    heroSub: "Bring New Capacity Online. / Staff Your Most Advanced Units. / Take On New Contracts.",
    heroBody:
      "AFIMAC brings skilled travel labor to specialty chemical, resin, coatings, and adhesives plants when a new unit, an expansion, or a new contract calls for more trained operators than the local labor market can supply. That includes process and batch operators, lab techs, and maintenance crews, along with a wide range of other roles drawn from a talent pool of more than 20,000 people, so new capacity comes online when the business needs it.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "Staffing Chemicals Growth",
    gapH2: "When a new unit needs operators you don't have yet",
    gapBody:
      "Chemical producers are adding reactors and process units, debottlenecking existing lines, and bringing new formulations to market, and every one of those moves needs operators who can follow written procedures and run a process safely. That kind of experience is hard to find locally, especially when a new unit is starting up or a new contract adds shifts on a tight schedule. AFIMAC sends a vetted travel crew that's ready to work, so new capacity reaches its output rates on schedule.",
    situationsH3: "Growth moments we staff",
    situations: [
      "New unit &amp; reactor start-up",
      "Debottlenecking &amp; plant expansions",
      "New formulations &amp; product introductions",
      "Planned maintenance turnarounds",
      "Toll processing &amp; contract manufacturing wins",
      "Added shifts for new customer demand",
    ],
    risksH3: "What growth looks like with AFIMAC",
    risks: [
      "New units up to rate faster",
      "Turnarounds finished on schedule",
      "New formulations into production on time",
      "Room to take on toll and contract work",
      "Flexible capacity that scales with demand",
    ],
    rolesSectionTitle: "Role-Ready Chemicals Staffing",
    rolesH2: "The skilled crews that keep the process running",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and general workers, who are vetted, mobile, and ready to contribute.",
    stations: [
      { n: "01", title: "Receiving &amp; Raw Materials", roles: ["Material handlers", "Rail &amp; truck unloading operators", "Drum &amp; tote handlers", "Inventory control specialists"] },
      { n: "02", title: "Reaction &amp; Batching", roles: ["Process operators", "Batch operators", "Control room operators", "Weigh &amp; charge operators"] },
      { n: "03", title: "Separation &amp; Finishing", roles: ["Distillation &amp; dryer operators", "Blending &amp; mixing operators", "Filtration operators", "Finishing line operators"] },
      { n: "04", title: "Filling &amp; Shipping", roles: ["Drum &amp; tote fillers", "Bulk loading operators", "Packaging line operators", "Shipping &amp; receiving clerks"] },
      { n: "05", title: "Quality &amp; Lab", roles: ["QC lab technicians", "Sampling technicians", "Quality inspectors", "Batch record reviewers"] },
      { n: "06", title: "Maintenance &amp; Reliability", roles: ["Maintenance technicians", "Millwrights", "Instrumentation &amp; controls techs", "Industrial electricians"] },
      { n: "07", title: "Turnaround &amp; Facility Support", roles: ["Turnaround support crews", "Industrial cleaning crews", "Scaffold helpers", "Fire watch &amp; hole watch attendants"] },
    ],
    calloutText: "Don't see the role you need? AFIMAC draws on a talent pool of more than 20,000 people, so we can find people for a wide variety of skills. If the work is in your plant, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "From first call to a crew in your plant",
    phases: [
      { n: "01", title: "Assessment", days: "timing varies by engagement", bullets: ["Assess plant labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "can begin rapidly once approved", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing"] },
      { n: "03", title: "Deployment", days: "teams can mobilize in as little as 72 hours", bullets: ["Crew works your process", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "demobilize in as little as 48 hours", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for growing chemical producers",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when they need skilled people quickly to launch, expand, and take on more work.",
    stats: [
      ["40+", "Years of Experience"],
      ["20,000+", "Skilled Laborers"],
      ["18+", "Industries Served"],
    ],
    successTitle: "Chemicals Client Success",
    successNote:
      "Run this section on real chemical plant engagements pulled from AFIMAC's records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential.",
    insights: [
      ["Navigating Risk in the U.S. Chemicals &amp; Plastics Industries: Challenges, Change, and the Power of a Flexible Workforce", "Chemicals &amp; Plastics"],
      ["How Smart Labor is Changing Manufacturing – And Why Specialized Temporary Workers Matter More Than Ever", "Manufacturing"],
      ["Dynamic Staffing: Offense is the Best Defense Against the Labor Shortage Crisis", "Workforce"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let's talk today, and we'll match a solution to your plant.",
    formIntro: "Tell us about your situation and we'll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your plant",
      "Ballpark costs",
      "Estimated ROI &amp; growth impact",
    ],
    formFields: [...SHARED_FIELDS, "Plant location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: "By submitting, you agree to AFIMAC's Privacy Policy. We respond within one business day.",
    seo: {
      slug: "/solutions/critical-situation-travel-labor/industries/chemicals/",
      title: "Chemical Plant Travel Labor &amp; Staffing | AFIMAC Global",
      desc: "Skilled chemical plant staffing, from process and batch operators to lab techs and maintenance crews, for expansions and new products.",
      primary: "chemicals travel labor · chemical plant staffing",
      secondary: "chemical process operators · batch operator staffing · specialty chemical manufacturing staffing · coatings &amp; resin plant staffing · chemical plant maintenance staffing",
    },
  },

  "consumer-goods": {
    eyebrow: "Critical Situation Travel Labor · Consumer Goods",
    heroSub: "Fill Every Order. / Launch on Time. / Grow Into New Markets.",
    heroBody:
      "AFIMAC brings skilled travel labor to household, personal care, and cleaning products plants when a launch, a new retail win, or a seasonal peak calls for more people than your crew can cover. That includes line operators, mechanics, and material handlers, along with a wide range of other roles drawn from a talent pool of more than 20,000 people, so every order goes out complete and on time as you grow.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "Staffing Consumer Goods Growth",
    gapH2: "When demand grows faster than local hiring",
    gapBody:
      "Launches, promotions, and new retail and online channels bring growth for makers of household goods, personal care products, and cleaning products, and each of those wins lands on the plant floor as more volume on a fixed date. When the volume, the deadline, or the skills the line needs go past what's available locally, AFIMAC sends a vetted travel crew to staff the extra work, so orders ship complete and on time and you can say yes to the next opportunity.",
    situationsH3: "Growth moments we staff",
    situations: [
      "Seasonal &amp; promotional peaks",
      "New product &amp; SKU launches",
      "New line &amp; co-packing start-up",
      "New retail &amp; online channel wins",
      "Plant expansion &amp; added shifts",
      "Reshoring &amp; new North American capacity",
    ],
    risksH3: "What growth looks like with AFIMAC",
    risks: [
      "Every order filled through the peak",
      "Launches on shelf on time",
      "Retail delivery windows met",
      "Strong fill rates &amp; retailer standing",
      "Capacity to take on new channels",
      "Flexible capacity for every peak",
    ],
    rolesSectionTitle: "Role-Ready Consumer Goods Plant Staffing",
    rolesH2: "The skilled crews that keep orders filling",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and general workers, who are vetted, mobile, and ready to contribute.",
    stations: [
      { n: "01", title: "Processing &amp; Mixing", roles: ["Batch makers", "Mixing &amp; blending operators", "Process operators", "Machine operators"] },
      { n: "02", title: "Filling &amp; Packaging", roles: ["Packaging line operators", "Filler &amp; capper operators", "Labeler operators", "Line associates"] },
      { n: "03", title: "End of Line", roles: ["Case packer operators", "Palletizer operators", "Stretch wrap &amp; labeling operators", "Line-side material handlers"] },
      { n: "04", title: "Warehouse &amp; Distribution", roles: ["Forklift operators", "Order pickers", "Inventory control specialists", "Shipping &amp; receiving clerks"] },
      { n: "05", title: "Changeover &amp; Maintenance", roles: ["Changeover technicians", "Maintenance mechanics", "Robotics &amp; controls techs", "Instrumentation techs"] },
      { n: "06", title: "Quality &amp; Lab", roles: ["Quality inspectors", "Line auditors", "Containment &amp; sort techs", "Lab technicians"] },
      { n: "07", title: "Co-Packing &amp; Rework", roles: ["Hand packers", "Kitting &amp; display builders", "Rework &amp; relabel crews", "Promotional pack assemblers"] },
    ],
    calloutText: "Don't see the role you need? AFIMAC draws on a talent pool of more than 20,000 people, so we can find people for a wide variety of skills. If the work is in your plant, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "From first call to a crew on your line",
    phases: [
      { n: "01", title: "Assessment", days: "timing varies by engagement", bullets: ["Assess plant labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "can begin rapidly once approved", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing"] },
      { n: "03", title: "Deployment", days: "teams can mobilize in as little as 72 hours", bullets: ["Crew works your line", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "demobilize in as little as 48 hours", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for growing consumer goods manufacturers",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when they need skilled people quickly to launch, expand, and take on more work.",
    stats: [
      ["40+", "Years of Experience"],
      ["20,000+", "Skilled Laborers"],
      ["18+", "Industries Served"],
    ],
    successTitle: "Consumer Goods Client Success",
    successNote:
      "Run this section on real consumer goods engagements pulled from AFIMAC's records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential.",
    insights: [
      ["The Shifting Ground Beneath U.S. Manufacturing: Challenges Confronting Consumer Goods Producers Today", "Consumer Goods"],
      ["How Smart Labor is Changing Manufacturing – And Why Specialized Temporary Workers Matter More Than Ever", "Manufacturing"],
      ["Dynamic Staffing: Offense is the Best Defense Against the Labor Shortage Crisis", "Workforce"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let's talk today, and we'll match a solution to your plant.",
    formIntro: "Tell us about your situation and we'll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your plant",
      "Ballpark costs",
      "Estimated ROI &amp; growth impact",
    ],
    formFields: [...SHARED_FIELDS, "Plant location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: "By submitting, you agree to AFIMAC's Privacy Policy. We respond within one business day.",
    seo: {
      slug: "/solutions/critical-situation-travel-labor/industries/consumer-goods/",
      title: "Consumer Goods Manufacturing Travel Labor | AFIMAC Global",
      desc: "Skilled consumer goods plant staffing, from packaging line operators to mechanics, to grow output through every peak.",
      primary: "consumer goods manufacturing travel labor · consumer goods plant staffing",
      secondary: "CPG packaging line staffing · household &amp; personal care manufacturing staffing · co-packing labor · production line operators · changeover technicians",
    },
  },

  "industrial-equipment": {
    eyebrow: "Critical Situation Travel Labor · Industrial Equipment",
    heroSub: "Take On More Orders. / Launch New Models on Schedule. / Keep Every Cell Running.",
    heroBody:
      "AFIMAC brings skilled industrial equipment travel labor to your plant when a growing order book, a new model, or a new cell calls for more trades than the local labor market can supply. That includes welders, machinists, and mechanical and electrical assemblers, along with a wide range of other roles drawn from a talent pool of more than 20,000 people, so more units move through the plant and out the door.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "Staffing Industrial Equipment Growth",
    gapH2: "When the order book grows faster than local hiring",
    gapBody:
      "Industrial equipment makers are adding capacity, launching new models, and bringing work back to North America. That includes heavy machinery OEMs, along with component suppliers, engineered assembly shops, and companies building electrical gear, cooling systems, automation, and modular or prefabricated units for infrastructure and large capital projects. All of it runs on welders, machinists, and assemblers. When orders climb, a new model goes into production, or a new cell comes online, local recruiting can take months to catch up. AFIMAC sends a travel crew with the trade skills you need, so you can take on more work and deliver it when promised.",
    situationsH3: "Growth moments we staff",
    situations: [
      "Order growth &amp; added shifts",
      "New model &amp; product introduction",
      "New line &amp; cell start-up",
      "Plant expansion &amp; new facilities",
      "Reshoring &amp; new North American capacity",
      "Infrastructure &amp; capital project orders",
    ],
    risksH3: "What growth looks like with AFIMAC",
    risks: [
      "More units out the door each month",
      "New models into production on schedule",
      "Delivery dates held as the order book grows",
      "Capital project orders delivered on schedule",
      "Capacity to win larger contracts",
      "Flexible capacity that scales with orders",
    ],
    rolesSectionTitle: "Role-Ready Industrial Equipment Staffing",
    rolesH2: "The skilled trades that keep units moving",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and general workers, who are vetted, mobile, and ready to contribute.",
    stations: [
      { n: "01", title: "Fabrication", roles: ["Fabricators", "Press brake operators", "Laser &amp; plasma cutting operators", "Sheet &amp; plate fitters"] },
      { n: "02", title: "Welding", roles: ["MIG &amp; flux-core welders", "TIG welders", "Weld fitters", "Robotic weld techs"] },
      { n: "03", title: "Machining", roles: ["CNC machinists", "CNC operators", "Horizontal boring mill operators", "Machine operators"] },
      { n: "04", title: "Paint &amp; Finish", roles: ["Industrial painters", "Blast &amp; prep technicians", "Powder coat operators", "Masking techs"] },
      { n: "05", title: "Assembly &amp; Test", roles: ["Mechanical assemblers", "Electrical &amp; control panel assemblers", "Piping &amp; cooling system assemblers", "Test &amp; run-off technicians"] },
      { n: "06", title: "Quality &amp; Maintenance", roles: ["Quality inspectors", "CMM operators", "Maintenance technicians", "Controls &amp; automation techs"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Forklift &amp; overhead crane operators", "Heavy equipment operators", "Kitting &amp; material handlers", "Shipping &amp; receiving clerks"] },
    ],
    calloutText: "Don't see the role you need? AFIMAC draws on a talent pool of more than 20,000 people, so we can find people for a wide variety of skills. If the work is in your plant, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "From first call to a crew in your shop",
    phases: [
      { n: "01", title: "Assessment", days: "timing varies by engagement", bullets: ["Assess plant labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "can begin rapidly once approved", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing"] },
      { n: "03", title: "Deployment", days: "teams can mobilize in as little as 72 hours", bullets: ["Crew works your shop", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "demobilize in as little as 48 hours", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for growing industrial equipment manufacturers",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when they need skilled people quickly to launch, expand, and take on more work.",
    stats: [
      ["40+", "Years of Experience"],
      ["20,000+", "Skilled Laborers"],
      ["18+", "Industries Served"],
    ],
    successTitle: "Industrial Equipment Client Success",
    successNote:
      "Run this section on real industrial equipment engagements pulled from AFIMAC's records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential.",
    insights: [
      ["Forged in Uncertainty: How Industrial Equipment Manufacturers Can Overcome 2025's Biggest Risks", "Industrial Equipment"],
      ["How Smart Labor is Changing Manufacturing – And Why Specialized Temporary Workers Matter More Than Ever", "Manufacturing"],
      ["Dynamic Staffing: Offense is the Best Defense Against the Labor Shortage Crisis", "Workforce"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let's talk today, and we'll match a solution to your plant.",
    formIntro: "Tell us about your situation and we'll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your plant",
      "Ballpark costs",
      "Estimated ROI &amp; growth impact",
    ],
    formFields: [...SHARED_FIELDS, "Plant location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: "By submitting, you agree to AFIMAC's Privacy Policy. We respond within one business day.",
    seo: {
      slug: "/solutions/critical-situation-travel-labor/industries/industrial-equipment/",
      title: "Industrial Equipment Manufacturing Travel Labor | AFIMAC Global",
      desc: "Skilled industrial equipment staffing, from welders and machinists to assemblers and test techs, to grow output.",
      primary: "industrial equipment travel labor · industrial equipment manufacturing staffing",
      secondary: "heavy equipment assemblers · fabrication &amp; welding staffing · CNC machinist staffing · electrical equipment manufacturing staffing · reshoring workforce",
    },
  },

  "oil-gas": {
    eyebrow: "Critical Situation Travel Labor · Oil &amp; Gas",
    heroSub: "Win Bigger Projects. / Deliver Equipment on Schedule. / Staff Up for Every Peak.",
    heroBody:
      "AFIMAC brings skilled oil and gas travel labor to equipment makers, refineries, and processing facilities when a project award, a new product line, or a busy season calls for more people than the local labor market can supply. That includes pipe and pressure vessel welders, fitters, and assemblers, along with a wide range of other roles drawn from a talent pool of more than 20,000 people, so the equipment and the projects keep to schedule.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "Staffing Oil &amp; Gas Growth",
    gapH2: "When project awards outpace local hiring",
    gapBody:
      "Oil and gas work comes in big orders, like a run of pumps, valves, compressors, or pressure vessels, a new processing facility, or an expansion at a refinery. Each one needs qualified welders, fitters, and assemblers on a fixed schedule, and those trades are often already tied up on other projects. AFIMAC sends a travel crew sized to the work and brings it home when the work is done, so you can take on the project without adding permanent headcount you may not need next year.",
    situationsH3: "Growth moments we staff",
    situations: [
      "Large project awards &amp; order growth",
      "Pump, valve &amp; compressor orders",
      "Pressure vessel &amp; process skid builds",
      "Refinery &amp; processing facility expansions",
      "Turnaround &amp; outage support",
      "Added shifts for peak demand",
    ],
    risksH3: "What growth looks like with AFIMAC",
    risks: [
      "Project milestones met",
      "Equipment delivered on schedule",
      "Capacity to bid on larger projects",
      "Peak demand staffed without permanent headcount",
      "Crew size that flexes project to project",
    ],
    rolesSectionTitle: "Role-Ready Oil &amp; Gas Staffing",
    rolesH2: "The skilled crews that keep oil and gas projects moving",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and general workers, who are vetted, mobile, and ready to contribute.",
    stations: [
      { n: "01", title: "Fabrication &amp; Weld", roles: ["Pipe welders", "Pressure vessel welders", "Pipe fitters", "Structural fabricators"] },
      { n: "02", title: "Machining", roles: ["CNC machinists", "Vertical &amp; horizontal lathe operators", "Boring mill operators", "Valve body machinists"] },
      { n: "03", title: "Assembly", roles: ["Pump &amp; valve assemblers", "Compressor &amp; skid assemblers", "Wellhead &amp; pressure control assemblers", "Hydraulic assemblers"] },
      { n: "04", title: "Test &amp; Inspection", roles: ["Hydrostatic test technicians", "NDT technicians", "Quality inspectors", "Instrumentation techs"] },
      { n: "05", title: "Coating &amp; Shipping", roles: ["Industrial painters &amp; coaters", "Blast technicians", "Crating &amp; packing crews", "Shipping &amp; receiving clerks"] },
      { n: "06", title: "Facility &amp; Turnaround Support", roles: ["Turnaround support crews", "Millwrights", "Rigging crews", "Fire watch &amp; hole watch attendants"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Forklift operators", "Heavy equipment operators", "Inventory control specialists", "CDL truck drivers"] },
    ],
    calloutText: "Don't see the role you need? AFIMAC draws on a talent pool of more than 20,000 people, so we can find people for a wide variety of skills. If the work is at your site, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "From first call to a crew at your site",
    phases: [
      { n: "01", title: "Assessment", days: "timing varies by engagement", bullets: ["Assess site labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "can begin rapidly once approved", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing"] },
      { n: "03", title: "Deployment", days: "teams can mobilize in as little as 72 hours", bullets: ["Crew works your site", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "demobilize in as little as 48 hours", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for growing oil and gas operations",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when they need skilled people quickly to launch, expand, and take on more work.",
    stats: [
      ["40+", "Years of Experience"],
      ["20,000+", "Skilled Laborers"],
      ["18+", "Industries Served"],
    ],
    successTitle: "Oil &amp; Gas Client Success",
    successNote:
      "Run this section on real oil and gas engagements pulled from AFIMAC's records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential.",
    insights: [
      ["Fueling the Future: How Energy Manufacturers Can Thrive Amid Uncertainty", "Oil &amp; Energy"],
      ["How Smart Labor is Changing Manufacturing – And Why Specialized Temporary Workers Matter More Than Ever", "Manufacturing"],
      ["Dynamic Staffing: Offense is the Best Defense Against the Labor Shortage Crisis", "Workforce"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let's talk today, and we'll match a solution to your site.",
    formIntro: "Tell us about your situation and we'll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your site",
      "Ballpark costs",
      "Estimated ROI &amp; growth impact",
    ],
    formFields: [...SHARED_FIELDS, "Site location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: "By submitting, you agree to AFIMAC's Privacy Policy. We respond within one business day.",
    seo: {
      slug: "/solutions/critical-situation-travel-labor/industries/oil-gas/",
      title: "Oil &amp; Gas Travel Labor &amp; Staffing | AFIMAC Global",
      desc: "Skilled oil and gas travel labor, from pipe and pressure vessel welders to assemblers and test techs, for equipment makers and facilities.",
      primary: "oil &amp; gas travel labor · oil and gas manufacturing staffing",
      secondary: "oilfield equipment manufacturing staffing · pressure vessel welders · pipe fitters · valve &amp; pump assemblers · refinery turnaround support",
    },
  },

  "plastics": {
    eyebrow: "Critical Situation Travel Labor · Plastics",
    heroSub: "Bring New Presses Online. / Staff Your Most Advanced Lines. / Take On New Programs.",
    heroBody:
      "AFIMAC brings skilled travel labor to injection molders, extruders, blow molders, and converters when new presses, a new line, or a new customer program calls for more people than the local labor market can supply. That includes machine operators, mold setters, and extrusion techs, along with a wide range of other roles drawn from a talent pool of more than 20,000 people, so new capacity starts producing parts when your customers need them.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "Staffing Plastics Growth",
    gapH2: "When new presses arrive faster than new hires",
    gapBody:
      "Plastics manufacturers are adding presses and extrusion lines, bringing molds in from other plants, and picking up new programs from automotive, consumer, and packaging customers. Every one of those wins needs operators who can keep a press running and setup techs who can change a mold and bring a line back up, and that experience is hard to find locally once the new equipment is already on the floor. AFIMAC sends a vetted travel crew that's ready to work, so new presses and lines start producing on schedule.",
    situationsH3: "Growth moments we staff",
    situations: [
      "New press &amp; line installations",
      "New customer programs &amp; tool transfers",
      "Reshoring &amp; new North American capacity",
      "Plant expansion &amp; added shifts",
      "Plastic packaging demand growth",
      "Seasonal &amp; program-driven peaks",
    ],
    risksH3: "What growth looks like with AFIMAC",
    risks: [
      "New presses producing parts sooner",
      "Program launches met on time",
      "Changeovers covered on every shift",
      "Room to quote more programs",
      "Flexible capacity that scales with demand",
    ],
    rolesSectionTitle: "Role-Ready Plastics Staffing",
    rolesH2: "The skilled crews that keep presses and lines running",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and general workers, who are vetted, mobile, and ready to contribute.",
    stations: [
      { n: "01", title: "Resin Handling &amp; Drying", roles: ["Material handlers", "Resin dryer &amp; blender operators", "Silo &amp; bulk unloading operators", "Regrind operators"] },
      { n: "02", title: "Injection &amp; Blow Molding", roles: ["Injection mold operators", "Blow mold operators", "Machine tenders", "Robot &amp; automation cell operators"] },
      { n: "03", title: "Extrusion &amp; Thermoforming", roles: ["Extrusion operators", "Film &amp; sheet line operators", "Thermoforming operators", "Pipe &amp; profile line operators"] },
      { n: "04", title: "Secondary Ops &amp; Converting", roles: ["Converting line operators", "Printing &amp; decorating operators", "Ultrasonic welding &amp; assembly techs", "Packers &amp; palletizer operators"] },
      { n: "05", title: "Tooling &amp; Changeover", roles: ["Mold setters", "Process technicians", "Changeover technicians", "Mold maintenance techs"] },
      { n: "06", title: "Quality", roles: ["Quality inspectors", "CMM &amp; dimensional techs", "Containment &amp; sort techs", "First article inspection support"] },
      { n: "07", title: "Maintenance &amp; Material Flow", roles: ["Maintenance technicians", "Industrial electricians", "Forklift operators", "Shipping &amp; receiving clerks"] },
    ],
    calloutText: "Don't see the role you need? AFIMAC draws on a talent pool of more than 20,000 people, so we can find people for a wide variety of skills. If the work is in your plant, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "From first call to a crew in your plant",
    phases: [
      { n: "01", title: "Assessment", days: "timing varies by engagement", bullets: ["Assess plant labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "can begin rapidly once approved", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing"] },
      { n: "03", title: "Deployment", days: "teams can mobilize in as little as 72 hours", bullets: ["Crew works your presses &amp; lines", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "demobilize in as little as 48 hours", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for growing plastics manufacturers",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when they need skilled people quickly to launch, expand, and take on more work.",
    stats: [
      ["40+", "Years of Experience"],
      ["20,000+", "Skilled Laborers"],
      ["18+", "Industries Served"],
    ],
    successTitle: "Plastics Client Success",
    successNote:
      "Run this section on real plastics engagements pulled from AFIMAC's records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential.",
    insights: [
      ["Navigating Risk in the U.S. Chemicals &amp; Plastics Industries: Challenges, Change, and the Power of a Flexible Workforce", "Chemicals &amp; Plastics"],
      ["How Smart Labor is Changing Manufacturing – And Why Specialized Temporary Workers Matter More Than Ever", "Manufacturing"],
      ["Dynamic Staffing: Offense is the Best Defense Against the Labor Shortage Crisis", "Workforce"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let's talk today, and we'll match a solution to your plant.",
    formIntro: "Tell us about your situation and we'll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your plant",
      "Ballpark costs",
      "Estimated ROI &amp; growth impact",
    ],
    formFields: [...SHARED_FIELDS, "Plant location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: "By submitting, you agree to AFIMAC's Privacy Policy. We respond within one business day.",
    seo: {
      slug: "/solutions/critical-situation-travel-labor/industries/plastics/",
      title: "Plastics Manufacturing Travel Labor &amp; Staffing | AFIMAC Global",
      desc: "Skilled plastics manufacturing staffing, from injection mold and extrusion operators to setup techs, for new presses and programs.",
      primary: "plastics travel labor · plastics manufacturing staffing",
      secondary: "injection molding operators · extrusion operators · blow molding staffing · mold setup technicians · plastic packaging manufacturing staffing",
    },
  },

  "power-energy": {
    eyebrow: "Critical Situation Travel Labor · Power &amp; Energy",
    heroSub: "Meet Grid Demand. / Deliver Critical Power on Schedule. / Take On Bigger Orders.",
    heroBody:
      "AFIMAC brings skilled travel labor to makers of switchgear, transformers, generators, and critical power equipment when a large order, a new line, or a plant expansion calls for more people than the local labor market can supply. That includes electrical assemblers, panel wiremen, and test techs, along with a wide range of other roles drawn from a talent pool of more than 20,000 people, so orders ship when your customers need them.",
    ctas: ["Get the Numbers", "See how we deploy"],
    gapEyebrow: "Staffing Power &amp; Energy Growth",
    gapH2: "When the order book grows faster than your electrical workforce",
    gapBody:
      "Grid modernization, new generation capacity, and the build-out of data centers are filling order books for switchgear, transformers, generators, UPS systems, and power distribution equipment. Most of that equipment is built and wired by hand, and it takes electrical assemblers, wiremen, and test technicians who can work from a schematic. Those people are hard to find locally. When a large order lands, a new line comes up, or a plant expands, AFIMAC sends a vetted travel crew to build and test it, so you can take the order and hold the delivery date.",
    situationsH3: "Growth moments we staff",
    situations: [
      "Grid modernization &amp; utility orders",
      "Data center &amp; critical power orders",
      "Power generation equipment orders",
      "New line &amp; plant expansion",
      "Reshoring &amp; new North American capacity",
      "Added shifts for large orders",
    ],
    risksH3: "What growth looks like with AFIMAC",
    risks: [
      "Delivery dates held as orders grow",
      "New lines producing on schedule",
      "Capacity to quote larger utility and data center projects",
      "Large orders staffed without permanent headcount",
      "Flexible capacity that scales with orders",
    ],
    rolesSectionTitle: "Role-Ready Power &amp; Energy Staffing",
    rolesH2: "The skilled crews that build and test power equipment",
    rolesBody:
      "Drawn from our network of 20,000+ skilled and general workers, who are vetted, mobile, and ready to contribute.",
    stations: [
      { n: "01", title: "Fabrication &amp; Enclosures", roles: ["Sheet metal fabricators", "Welders", "Press brake operators", "Busbar fabricators"] },
      { n: "02", title: "Coil, Core &amp; Winding", roles: ["Coil winders", "Core stackers", "Transformer assemblers", "Insulation technicians"] },
      { n: "03", title: "Electrical Assembly &amp; Wiring", roles: ["Switchgear assemblers", "Panel wiremen", "Wire harness assemblers", "Electrical assemblers"] },
      { n: "04", title: "Test", roles: ["Electrical test technicians", "High-voltage test techs", "Factory acceptance test support", "Instrumentation techs"] },
      { n: "05", title: "Finish &amp; Ship", roles: ["Industrial painters &amp; coaters", "Crating &amp; packing crews", "Rigging crews", "Shipping &amp; receiving clerks"] },
      { n: "06", title: "Quality", roles: ["Quality inspectors", "Electrical QC inspectors", "Documentation &amp; traveler clerks", "Containment &amp; sort techs"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Forklift &amp; overhead crane operators", "Kitting &amp; material handlers", "Inventory control specialists", "CDL truck drivers"] },
    ],
    calloutText: "Don't see the role you need? AFIMAC draws on a talent pool of more than 20,000 people, so we can find people for a wide variety of skills. If the work is in your plant, we can staff it.",
    calloutButton: "Ask about a role",
    deployH2: "From first call to a crew in your plant",
    phases: [
      { n: "01", title: "Assessment", days: "timing varies by engagement", bullets: ["Assess plant labor needs", "Align on roles &amp; shift coverage", "Finalize deployment plan"] },
      { n: "02", title: "Mobilization", days: "can begin rapidly once approved", bullets: ["Select &amp; screen candidates", "Finalize travel &amp; housing"] },
      { n: "03", title: "Deployment", days: "teams can mobilize in as little as 72 hours", bullets: ["Crew works your build &amp; test floor", "Establish feedback loop", "Measure &amp; optimize output"] },
      { n: "04", title: "Demobilization", days: "demobilize in as little as 48 hours", bullets: ["Final performance assessment", "Support transition planning", "Release travel crews"] },
    ],
    numbersH2: "The premier resource for growing power and electrical equipment manufacturers",
    numbersBody:
      "For four decades, Fortune 500 manufacturers have called AFIMAC when they need skilled people quickly to launch, expand, and take on more work.",
    stats: [
      ["40+", "Years of Experience"],
      ["20,000+", "Skilled Laborers"],
      ["18+", "Industries Served"],
    ],
    successTitle: "Power &amp; Energy Client Success",
    successNote:
      "Run this section on real power and electrical equipment engagements pulled from AFIMAC's records. Lead with one featured case, then add two or three shorter supporting cases. Keep the client anonymous where the work is confidential.",
    insights: [
      ["Fueling the Future: How Energy Manufacturers Can Thrive Amid Uncertainty", "Oil &amp; Energy"],
      ["How Smart Labor is Changing Manufacturing – And Why Specialized Temporary Workers Matter More Than Ever", "Manufacturing"],
      ["Dynamic Staffing: Offense is the Best Defense Against the Labor Shortage Crisis", "Workforce"],
    ],
    formSectionTitle: "Get the Numbers (Lead Form)",
    formH2: "Let's talk today, and we'll match a solution to your plant.",
    formIntro: "Tell us about your situation and we'll come back with:",
    formBullets: [
      "Available labor resources for your roles",
      "Rapid deployment timing to your plant",
      "Ballpark costs",
      "Estimated ROI &amp; growth impact",
    ],
    formFields: [...SHARED_FIELDS, "Plant location (City, State/Province)", "Tell us about your situation (roles, timing, shift coverage)"],
    formButton: "Get the Numbers",
    urgentLine: "1.844.99.AFIMAC",
    consent: "By submitting, you agree to AFIMAC's Privacy Policy. We respond within one business day.",
    seo: {
      slug: "/solutions/critical-situation-travel-labor/industries/power-energy/",
      title: "Power &amp; Energy Equipment Travel Labor | AFIMAC Global",
      desc: "Skilled travel labor for power and electrical equipment makers, from switchgear and transformer assemblers to test techs and welders.",
      primary: "power &amp; energy travel labor · electrical equipment manufacturing staffing",
      secondary: "switchgear assemblers · transformer manufacturing staffing · critical power equipment staffing · power generation equipment staffing · grid equipment manufacturing labor",
    },
  },
};

/**
 * Logistics & Warehousing stations, from that page's own deck (section 04).
 *
 * Lifted verbatim out of afimac-log-line-map.html when the interactive widget
 * was retired, so the content survived the module change unchanged — seven
 * stations, twenty-nine crews, in deck order.
 */
/**
 * The section-level pair, as published on the overview page today.
 *
 * This is the default both modules fall back to: the general version of the
 * argument, before any industry narrows it. Every live industry page carries
 * the same five situations, so this list is also what six of the eight
 * industries are effectively running.
 */
export const GENERAL_SITUATIONS = [
  "Initial line start-up",
  "Production shortfalls",
  "Plant relocation",
  "Health emergencies",
  "Disaster response",
];

export const GENERAL_RISKS = [
  "Loss of revenue",
  "Key client defection",
  "Missed growth opportunity",
  "Reputational damage",
  "Closure",
];

/**
 * Logistics & Warehousing's own pair, from its copy deck.
 *
 * Written for that page rather than inherited, which makes it the third
 * industry with a bespoke module — it just lived in the page file rather than
 * here, so nothing else could see it.
 */
export const LOG_SITUATIONS = [
  "Peak &amp; holiday season demand surges",
  "New DC &amp; fulfillment center launch",
  "E-commerce &amp; order-volume spikes",
  "Shipment backlog &amp; order recovery",
  "Facility relocation, consolidation &amp; ramp-up",
  "3PL client onboarding &amp; contract surge",
];

export const LOG_RISKS = [
  "Missed SLAs &amp; retailer ship windows",
  "Chargebacks &amp; carrier penalties",
  "Order backlog &amp; aging inventory",
  "Safety &amp; OSHA incidents",
  "Retail / customer defection",
  "Lost shelf space &amp; market share",
];

export const LOG_STATIONS: Station[] = [
  { n: "01", title: "Inbound &amp; Receiving", roles: ["Dock &amp; unload crew", "Receiving associates", "Freight handlers", "Returns processors", "Cross-dock crew"] },
  { n: "02", title: "Put-away &amp; Storage", roles: ["Stockers &amp; put-away crew", "Reach-truck operators", "Slotting &amp; replenishment", "Bulk &amp; rack handlers"] },
  { n: "03", title: "Picking &amp; Fulfillment", roles: ["Order pickers", "Batch &amp; wave pickers", "RF scanner operators", "Zone &amp; case pickers"] },
  { n: "04", title: "Packing &amp; Kitting", roles: ["Packers &amp; sorters", "Kitting &amp; assembly crew", "Label &amp; scan techs", "Value-add / VAS crew"] },
  { n: "05", title: "Loading &amp; Outbound", roles: ["Loaders &amp; dock workers", "Palletizers &amp; wrappers", "Shipping associates", "Yard &amp; trailer crew"] },
  { n: "06", title: "Inventory &amp; Cycle Count", roles: ["Cycle counters", "Inventory clerks", "Audit &amp; reconciliation", "WMS data entry support"] },
  { n: "07", title: "Equipment &amp; Facility", roles: ["Forklift operators", "Cherry-picker operators", "Maintenance technicians", "Janitorial &amp; housekeeping"] },
];
