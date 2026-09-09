/**
 * The seven live industry pages, as they exist today.
 *
 * Phase 0 of the rollout is "current state", and until now the prototype
 * approximated these pages from one generic template. This is the real content,
 * read off afimacglobal.com on 9 Sep 2026, so what a reviewer sees under Phase 0
 * is what is actually published rather than a sketch of it.
 *
 * The shared blocks below are shared on the live site too — identical on all
 * seven pages, word for word. That is the single most useful thing this file
 * records: it shows exactly how much of each "industry" page is not about the
 * industry at all.
 */

/** Identical on all seven pages. */
export const LIVE_SITUATIONS = [
  "Initial line start-up",
  "Production shortfalls",
  "Plant relocation",
  "Health emergencies",
  "Disaster response",
];

/** Identical on all seven pages — fifteen roles, in three groups. */
export const LIVE_ROLE_GROUPS: [string, string[]][] = [
  ["MANUFACTURING", ["CNC Operators", "Fabricators", "Injection Mold Operators", "Instrumentation Techs", "Machine Operators &amp; Technicians"]],
  ["WAREHOUSING", ["Forklift Operators", "Heavy Equipment Operators", "Inventory Control Specialists", "Material Handlers", "Shipping and Receiving Clerks"]],
  ["LOGISTICS", ["Logistics Coordinators", "Supply Chain Managers", "Transportation Managers", "Shipping and Receiving Clerks", "CDL Truck Drivers"]],
];

/** The generic risk list five of the seven pages share. */
const GENERIC_RISKS = [
  "Operational inefficiency",
  "Production delays",
  "Supply chain disruptions",
  "Quality control &amp; regulatory compliance",
  "Delayed technology adoption",
];

/** Identical on all seven pages, and on the hub. */
export const LIVE_CREDIBILITY_BODY =
  "AFIMAC is the premier resource for Fortune 500 manufacturing, warehousing, and logistics organizations facing labor shortages with critical time constraints. We deliver on-demand specialized labor crews to help businesses ensure operational continuity and reduce financial risk.";

/** The four counters. They animate up from zero, so the figures are not in the page text. */
export const LIVE_COUNTERS = ["Years", "Industry Deployments", "Companies Served", "Laborers Provided"];

/** The two posts every industry page carries alongside its own. */
export const GENERIC_POSTS = [
  "How Smart Labor is Changing Manufacturing – And Why Specialized Temporary Workers Matter More Than Ever",
  "Dynamic Staffing: Offense is the Best Defense Against the Labor Shortage Crisis",
];

export interface LiveIndustry {
  h1: string;
  /** The line under the H1. */
  tagline: string;
  intro: string;
  seoTitle: string;
  /** The industry-analyst section heading. */
  headwindsH2: string;
  headwindsBody: string;
  source: string;
  /** "Leading X call on AFIMAC when…" */
  situationsIntro: string;
  risks: string[];
  gapsH2: string;
  /** "We bring unmatched responsiveness, expertise, and resources to X." */
  credibilityLead: string;
  /** The page's own related post; the two generic ones follow it. */
  ownPost: string;
  /** Five pages say "Talk to AFIMAC."; two say "Get the Numbers". */
  formHeading: string;
}

export const LIVE_INDUSTRIES: Record<string, LiveIndustry> = {
  "aerospace-aviation-defense": {
    h1: "Aerospace, Aviation &amp; Defense Travel Labor",
    tagline: "Keeping Operations On Target",
    intro: "When timing is critical, AFIMAC is the premier resource for leading aerospace, aviation, and defense companies looking to bridge skill gaps and overcome labor shortages.",
    seoTitle: "Aerospace, Aviation &amp; Defense Travel Labor | AFIMAC Global",
    headwindsH2: "Challenging Headwinds for Aerospace, Aviation &amp; Defense",
    headwindsBody: "Attrition, skill gaps, and employee retention are persistent challenges for the ever-evolving aerospace, aviation, and defense industries. A recent report from Avionics International indicates an aging workforce is a major concern, since 29% of the industry’s employees are over the age of 55, and upcoming retirements anticipated will leave a gap of 3.5 million workers by 2026.* This workforce shortfall creates a host of challenges from reduced operational efficiency and capacity issues to an inability to deliver on contracts or realize profitable growth. When everything is on the line, leading companies trust AFIMAC to deliver skilled travel labor to keep their North American manufacturing, warehousing, and logistics operations running strong.",
    source: "Avionics International",
    situationsIntro: "Leading aerospace, aviation, and defense organizations call on AFIMAC when labor resources pose a significant risk to the business and timing is critical.",
    risks: ["Slowed R&amp;D", "Production delays", "Delayed technology adoption", "Inability to remain competitive", "Declining profits"],
    gapsH2: "Aerospace Workforce Gaps We Fill",
    credibilityLead: "We bring unmatched responsiveness, expertise, and resources to aerospace, aviation, and defense.",
    ownPost: "Turbulence Ahead: Navigating Manufacturing Risks in Aerospace, Aviation &amp; Defense",
    formHeading: "Talk to AFIMAC.",
  },

  automotive: {
    h1: "Automotive Travel Labor",
    tagline: "Driving Productivity",
    intro: "When timing is critical, AFIMAC is the premier resource for leading automotive manufacturers looking to bridge labor gaps and overcome shortages.",
    seoTitle: "Automotive Travel Labor &amp; Plant Staffing | AFIMAC Global",
    headwindsH2: "Automotive Faces Growing Workforce Continuity Challenges",
    headwindsBody: "A recent report from S&amp;P Global Mobility asked top senior executives about the pressing challenges facing the automotive industry. The answer: Supply chain disruptions, labor shortages, and regulatory challenges.* Attrition, turnover, talent scarcity, and skill gaps have put many automotive manufacturers in the hot seat for labor resources. What’s on the line? Effective adoption of the host of technology innovations disrupting the industry, along with difficulty delivering on contracts, remaining competitive, or realizing profitable growth. To overcome worker shortages, leading companies trust AFIMAC to deliver skilled travel labor that keeps their North American manufacturing, warehousing, and logistics operations running strong.",
    source: "S&amp;P Global Mobility",
    situationsIntro: "Leading automotive manufacturers call on AFIMAC when labor resources pose a significant risk to the business and timing is critical.",
    risks: ["Production bottlenecks", "R&amp;D + EV transition delays", "Supply chain disruptions", "Quality + safety issues", "Market share loss"],
    gapsH2: "Automotive Workforce Gaps We Fill",
    credibilityLead: "We bring unmatched responsiveness, expertise, and resources to the automotive industry.",
    ownPost: "Navigating the Road Ahead: Manufacturing Risks and Workforce Challenges in the Automotive Industry",
    formHeading: "Talk to AFIMAC.",
  },

  "chemicals-plastics": {
    h1: "Chemicals &amp; Plastics Travel Labor",
    tagline: "A Catalyst for Productivity",
    intro: "When timing is critical, AFIMAC is the premier resource for leading chemical and plastics companies looking to bridge skill gaps and overcome labor shortages.",
    seoTitle: "Chemicals &amp; Plastics Travel Labor | AFIMAC Global",
    headwindsH2: "Labor Shortages Multiply for Chemical and Plastics Manufacturers",
    headwindsBody: "It’s no secret that attrition, skill gaps, and turnover aren’t a formula for success. Yet these troubling realities have chemical and plastics manufacturers wanting labor resources. A report from Accenture says the industries will experience a retirement boom with 30% of employees aged 50 years or more. This is further complicated by the other end of the workforce supply chain, with student enrollment declining in related disciplines.* This workforce shortfall creates safety and quality issues while reducing operational efficiency and capacity. What’s on the line? Timely delivery on contracts along with the difficulty scaling or realizing profitable growth. To overcome labor barriers, leading companies trust AFIMAC to deliver skilled travel labor to keep their North American manufacturing, warehousing, and logistics operations running strong.",
    source: "Accenture",
    situationsIntro: "Leading chemical and plastics companies call on AFIMAC when labor resources pose a significant risk to the business and timing is critical.",
    risks: GENERIC_RISKS,
    gapsH2: "Chemicals &amp; Plastics Workforce Gaps We Fill",
    credibilityLead: "We bring unmatched responsiveness, expertise, and resources to the chemical &amp; plastics industry.",
    ownPost: "Navigating Risk in the U.S. Chemicals &amp; Plastics Industries: Challenges, Change, and the Power of a Flexible Workforce",
    formHeading: "Talk to AFIMAC.",
  },

  "consumer-goods": {
    h1: "Consumer Goods Manufacturing Travel Labor",
    tagline: "Keeping Goods in Motion",
    intro: "When timing is critical, AFIMAC is the premier resource for leading consumer goods manufacturers looking to bridge labor gaps and overcome shortages.",
    seoTitle: "Consumer Goods Manufacturing Travel Labor | AFIMAC Global",
    headwindsH2: "Consumer Goods Manufacturers Struggle to Reach Capacity",
    headwindsBody: "U.S. consumer goods manufacturers continue to struggle with labor shortages that impact capacity and timely delivery. A recent report from Supply Chain Management Review indicates 20.6% of manufacturing plants in the U.S. failed to produce at full capacity and cited insufficient labor as a key production constraint.* This workforce shortfall reduces operational efficiency and capacity, making profitable growth increasingly difficult. When everything is on the line, leading companies trust AFIMAC to deliver skilled travel labor to keep their North American manufacturing, warehousing, and logistics operations running strong.",
    source: "Supply Chain Management Review",
    situationsIntro: "Leading consumer goods manufacturers call on AFIMAC when labor resources pose a significant risk to the business and timing is critical.",
    risks: GENERIC_RISKS,
    gapsH2: "Consumer Goods Workforce Gaps We Fill",
    credibilityLead: "We bring unmatched responsiveness, expertise, and resources to the consumer goods industry.",
    ownPost: "The Shifting Ground Beneath U.S. Manufacturing: Challenges Confronting Consumer Goods Producers Today",
    formHeading: "Get the Numbers",
  },

  "food-beverage": {
    h1: "Food &amp; Beverage Travel Labor",
    tagline: "Satisfy the Thirst for Labor Resources",
    intro: "When timing is critical, AFIMAC is the premier resource for leading food and beverage companies looking to bridge labor gaps and overcome shortages.",
    seoTitle: "Food &amp; Beverage Travel Labor &amp; Plant Staffing | AFIMAC Global",
    headwindsH2: "Growing Labor Gaps for Food and Beverage Manufacturers",
    headwindsBody: "Worker shortages, high turnover rates, and growing skill gaps have many food and beverage manufacturers starving for labor resources. A recent report from The Manufacturing Institute predicts that by 2030, there could be 2.1 million unfilled manufacturing jobs due to growing labor gaps.* This workforce shortfall reduces operational efficiency and capacity, making technology adoption, contract delivery, scaling, or profitability increasingly challenging. When everything is on the line, leading companies trust AFIMAC to deliver skilled travel labor to keep their North American manufacturing, warehousing, and logistics operations running strong.",
    source: "The Manufacturing Institute",
    situationsIntro: "Leading food and beverage companies call on AFIMAC when labor resources pose a significant risk to the business and timing is critical.",
    risks: GENERIC_RISKS,
    gapsH2: "Food &amp; Beverage Workforce Gaps We Fill",
    credibilityLead: "We bring unmatched responsiveness, expertise, and resources to food &amp; beverage manufacturers.",
    ownPost: "Feeding the Future: Navigating the Risks Facing U.S. Food &amp; Beverage Manufacturing in 2025",
    formHeading: "Get the Numbers",
  },

  "industrial-equipment": {
    h1: "Industrial Equipment Travel Labor",
    tagline: "Removing Barriers to Productivity",
    intro: "When timing is critical, AFIMAC is the premier resource for leading industrial equipment manufacturers looking to bridge labor gaps and overcome shortages.",
    seoTitle: "Industrial Equipment Travel Labor | AFIMAC Global",
    headwindsH2: "Growing Labor Pressures for Industrial Equipment Manufacturers",
    headwindsBody: "Attrition, scarcity, high turnover, and the need for reskilling have left many industrial equipment manufacturers with unmet labor needs. Nearly 60% of manufacturers in a recent National Association of Manufacturers (NAM) outlook survey cited the inability to attract and retain employees as their top challenge.* This labor shortfall creates safety and quality issues that reduce operational efficiency and capacity. And that puts timely delivery on contracts, scaling, and profitability on the line. To overcome labor shortages, leading companies trust AFIMAC to deliver skilled travel labor that keeps their North American manufacturing, warehousing, and logistics operations running strong.",
    source: "National Association of Manufacturers",
    situationsIntro: "Leading industrial equipment manufacturers call on AFIMAC when labor resources pose a significant risk to the business and timing is critical.",
    risks: GENERIC_RISKS,
    gapsH2: "Industrial Workforce Gaps We Fill",
    credibilityLead: "We bring unmatched responsiveness, expertise, and resources to industrial equipment manufacturing.",
    ownPost: "Forged in Uncertainty: How Industrial Equipment Manufacturers Can Overcome 2025’s Biggest Risks",
    formHeading: "Talk to AFIMAC.",
  },

  "oil-energy": {
    h1: "Oil &amp; energy Travel Labor",
    tagline: "Powering Up Productivity",
    intro: "When timing is critical, AFIMAC is the premier resource for leading oil and energy companies looking to bridge labor gaps and overcome shortages.",
    seoTitle: "Oil &amp; Energy Travel Labor &amp; Skilled Trades | AFIMAC Global",
    headwindsH2: "Labor Shortages Threaten Productivity in Oil and Energy",
    headwindsBody: "The U.S. manufacturing industry continues to face significant labor shortages throughout the value chain, from production to transportation and warehousing. A recent survey from Deloitte revealed that over 80% of manufacturing professionals experienced production disruptions due to labor turnover, leading to delays and increased costs.¹ Meanwhile, on the logistics side, transportation experts predict that truck driver shortages may double by 2028.² Attrition, skill gaps, and turnover are persistent challenges. This shortfall creates safety and quality issues while reducing operational efficiency and capacity. What’s on the line? Timely delivery, difficulty scaling, and realizing profitability. To overcome labor shortages, leading companies trust AFIMAC to deliver skilled travel labor to keep their North American manufacturing, warehousing, and logistics operations running strong.",
    source: "1: Deloitte · 2: IRU",
    situationsIntro: "Leading oil and energy organizations call on AFIMAC when labor resources pose a significant risk to the business and timing is critical.",
    risks: GENERIC_RISKS,
    gapsH2: "Oil &amp; Energy Workforce Gaps We Fill",
    credibilityLead: "We bring unmatched responsiveness, expertise, and resources to oil and energy.",
    ownPost: "Fueling the Future: How Energy Manufacturers Can Thrive Amid Uncertainty",
    formHeading: "Talk to AFIMAC.",
  },
};

/** Tiles on the live hub, in the order it lists them. */
export const LIVE_HUB_TILES = [
  "aerospace-aviation-defense",
  "automotive",
  "chemicals-plastics",
  "consumer-goods",
  "food-beverage",
  "industrial-equipment",
  "oil-energy",
];

/**
 * What the live hub carries beyond its tiles.
 *
 * Note `credibilityLead`: the hub runs the aerospace page's line verbatim,
 * naming that one industry on a page about all seven. It was copied and never
 * localised.
 */
export const LIVE_HUB = {
  h1: "Critical Situation Travel Labor: Industries We Serve",
  seoTitle: "Critical Situation Travel Labor: Industries | AFIMAC Global",
  credibilityLead: "We bring unmatched responsiveness, expertise, and resources to aerospace, aviation, and defense.",
  ebookTitle: "Bridging the Manufacturing Labor Gap",
  ebookBody: "Uncover the strategies business leaders are leveraging to overcome workforce shortages and unlock growth potential.",
  formHeading: "Get the Numbers",
};
