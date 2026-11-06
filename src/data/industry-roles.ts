/**
 * ROLE GRIDS FROM THE INDUSTRY COPY DECKS.
 *
 * Section 04 of each pitchblende industry deck ("Role-Ready … Staffing"),
 * transcribed verbatim — group names, group order and role wording all as the
 * deck has them. These are the industries whose decks exist but whose pages
 * the prototype has not built out; INDUSTRY_COPY holds the three that have.
 *
 * Every one of these grids closes with the same callout card, which is the
 * line the Who We Deploy section already borrows:
 *
 *   "Don't see the role you need? AFIMAC draws on a talent pool of more than
 *    20,000 people, so we can find people for a wide variety of skills. If the
 *    work is in your plant, we can staff it."
 *
 * TWO PAGE SPLITS ARE OPEN, per Maria 10/23, and BOTH ARE NOW DRAFTED ON
 * BOTH SIDES. pitchblende wrote each option in full rather than picking one:
 *
 *   · Chemicals & Plastics — combined v2 deck, or split into Chemicals v1
 *     and Plastics v1. The split decks specify a 301 from the old
 *     /chemicals-plastics/ URL to the Chemicals page.
 *   · Oil & Energy — combined v2 deck, or split into Oil & Gas v1 and
 *     Power & Energy v1. Same arrangement: 301 from /oil-energy/ to the
 *     Oil & Gas page.
 *
 * The combined decks say the structure waits on keyword volumes, so the
 * DECISION IS NOT MADE and this file does not make it. The four split-half
 * decks are HELD, NOT WIRED IN: no nav entry, no route, nothing renders
 * them. Wiring them while the combined pages exist would count plastics and
 * power twice.
 *
 * What changed is that the split is no longer blocked. Every page it needs
 * now has copy. Choosing it means: give the four a nav entry and a route,
 * flip `wired`, narrow "chemicals-plastics" and "oil-energy" to redirects,
 * and the Who We Deploy table follows with no further change.
 */
import type { Station } from "./industry-copy";

export interface DeckRoleGrid {
  /** Deck title and version, so a reader can find the source document. */
  deck: string;
  /** False while the page split behind it is undecided. */
  wired: boolean;
  stations: Station[];
}

export const DECK_ROLE_GRIDS: Record<string, DeckRoleGrid> = {
  "chemicals-plastics": {
    deck: "Chemicals & Plastics Travel Labor — Page Copy v2",
    wired: true,
    stations: [
      { n: "01", title: "Receiving &amp; Raw Materials", roles: ["Material handlers", "Bulk unloading operators", "Forklift operators", "Inventory control specialists"] },
      { n: "02", title: "Compounding &amp; Blending", roles: ["Process operators", "Batch makers", "Compounding line operators", "Dryer &amp; feeder operators"] },
      { n: "03", title: "Molding, Extrusion &amp; Converting", roles: ["Injection mold operators", "Extrusion operators", "Blow mold &amp; converting operators", "Mold setters &amp; changeover techs"] },
      { n: "04", title: "Packaging &amp; Shipping", roles: ["Packaging line operators", "Filling &amp; palletizing operators", "Shipping &amp; receiving clerks", "CDL truck drivers"] },
      { n: "05", title: "Quality &amp; Lab", roles: ["Quality inspectors", "Lab technicians", "Sampling technicians", "Containment &amp; sort techs"] },
      { n: "06", title: "Maintenance &amp; Reliability", roles: ["Maintenance technicians", "Millwrights", "Instrumentation techs", "Industrial electricians"] },
      { n: "07", title: "Turnaround &amp; Facility Support", roles: ["Turnaround support crews", "Industrial cleaning crews", "Scaffold helpers", "Fire watch &amp; hole watch attendants"] },
    ],
  },

  "consumer-goods": {
    deck: "Consumer Goods Manufacturing Travel Labor — Page Copy v2",
    wired: true,
    stations: [
      { n: "01", title: "Processing &amp; Mixing", roles: ["Batch makers", "Mixing &amp; blending operators", "Process operators", "Machine operators"] },
      { n: "02", title: "Filling &amp; Packaging", roles: ["Packaging line operators", "Filler &amp; capper operators", "Labeler operators", "Line associates"] },
      { n: "03", title: "End of Line", roles: ["Case packer operators", "Palletizer operators", "Stretch wrap &amp; labeling operators", "Line-side material handlers"] },
      { n: "04", title: "Warehouse &amp; Distribution", roles: ["Forklift operators", "Order pickers", "Inventory control specialists", "Shipping &amp; receiving clerks"] },
      { n: "05", title: "Changeover &amp; Maintenance", roles: ["Changeover technicians", "Maintenance mechanics", "Robotics &amp; controls techs", "Instrumentation techs"] },
      { n: "06", title: "Quality &amp; Lab", roles: ["Quality inspectors", "Line auditors", "Containment &amp; sort techs", "Lab technicians"] },
      { n: "07", title: "Co-Packing &amp; Rework", roles: ["Hand packers", "Kitting &amp; display builders", "Rework &amp; relabel crews", "Promotional pack assemblers"] },
    ],
  },

  "oil-energy": {
    deck: "Oil & Energy Travel Labor — Page Copy v2",
    wired: true,
    stations: [
      { n: "01", title: "Fabrication &amp; Weld", roles: ["Structural &amp; pipe welders", "Pressure vessel welders", "Fitters", "Fabricators"] },
      { n: "02", title: "Machining", roles: ["CNC machinists", "Vertical &amp; horizontal lathe operators", "Boring mill operators", "Machine operators"] },
      { n: "03", title: "Assembly", roles: ["Mechanical assemblers", "Pump, valve &amp; compressor assemblers", "Switchgear &amp; transformer assemblers", "Hydraulic assemblers"] },
      { n: "04", title: "Test &amp; Inspection", roles: ["Hydrostatic test technicians", "Quality inspectors", "NDT technicians", "Instrumentation techs"] },
      { n: "05", title: "Coating &amp; Shipping", roles: ["Industrial painters &amp; coaters", "Blast technicians", "Crating &amp; packing crews", "Shipping &amp; receiving clerks"] },
      { n: "06", title: "Maintenance &amp; Facilities", roles: ["Maintenance technicians", "Millwrights", "Rigging crews", "Turnaround support crews"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Forklift operators", "Heavy equipment operators", "Inventory control specialists", "CDL truck drivers"] },
    ],
  },

  "aerospace-aviation-defense": {
    deck: "Aerospace, Aviation & Defense Travel Labor — Page Copy v2",
    wired: true,
    stations: [
      { n: "01", title: "Detail Parts &amp; Machining", roles: ["CNC machinists", "Machine operators", "Sheet metal fabricators", "Deburr &amp; finish technicians"] },
      { n: "02", title: "Composites &amp; Bonding", roles: ["Composite layup technicians", "Bond &amp; cure operators", "Composite trim &amp; drill techs", "Sealant applicators"] },
      { n: "03", title: "Structures &amp; Assembly", roles: ["Structures assemblers", "Riveters &amp; fastener installers", "Jig &amp; fixture builders", "Sub-assembly mechanics"] },
      { n: "04", title: "Electrical &amp; Systems", roles: ["Wire harness assemblers", "Electrical installers", "Hydraulic &amp; tubing installers", "Systems test technicians"] },
      { n: "05", title: "Paint &amp; Finish", roles: ["Aerospace painters", "Surface prep technicians", "Masking &amp; coating techs"] },
      { n: "06", title: "Quality &amp; Inspection", roles: ["Quality inspectors", "CMM operators", "NDT technicians", "First article inspection support"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Material handlers", "Kitting &amp; stores clerks", "Forklift operators", "Shipping &amp; receiving clerks"] },
    ],
  },

  "industrial-equipment": {
    deck: "Industrial Equipment Travel Labor — Page Copy v2",
    wired: true,
    stations: [
      { n: "01", title: "Fabrication", roles: ["Fabricators", "Press brake operators", "Laser &amp; plasma cutting operators", "Sheet &amp; plate fitters"] },
      { n: "02", title: "Welding", roles: ["MIG &amp; flux-core welders", "TIG welders", "Weld fitters", "Robotic weld techs"] },
      { n: "03", title: "Machining", roles: ["CNC machinists", "CNC operators", "Horizontal boring mill operators", "Machine operators"] },
      { n: "04", title: "Paint &amp; Finish", roles: ["Industrial painters", "Blast &amp; prep technicians", "Powder coat operators", "Masking techs"] },
      { n: "05", title: "Assembly &amp; Test", roles: ["Mechanical assemblers", "Electrical &amp; control panel assemblers", "Piping &amp; cooling system assemblers", "Test &amp; run-off technicians"] },
      { n: "06", title: "Quality &amp; Maintenance", roles: ["Quality inspectors", "CMM operators", "Maintenance technicians", "Controls &amp; automation techs"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Forklift &amp; overhead crane operators", "Heavy equipment operators", "Kitting &amp; material handlers", "Shipping &amp; receiving clerks"] },
    ],
  },

  // ── Held pending the page splits ──────────────────────────────────────────

  chemicals: {
    deck: "Chemicals Travel Labor — Page Copy v1 (new page, split from Chemicals & Plastics)",
    wired: false,
    stations: [
      { n: "01", title: "Receiving &amp; Raw Materials", roles: ["Material handlers", "Rail &amp; truck unloading operators", "Drum &amp; tote handlers", "Inventory control specialists"] },
      { n: "02", title: "Reaction &amp; Batching", roles: ["Process operators", "Batch operators", "Control room operators", "Weigh &amp; charge operators"] },
      { n: "03", title: "Separation &amp; Finishing", roles: ["Distillation &amp; dryer operators", "Blending &amp; mixing operators", "Filtration operators", "Finishing line operators"] },
      { n: "04", title: "Filling &amp; Shipping", roles: ["Drum &amp; tote fillers", "Bulk loading operators", "Packaging line operators", "Shipping &amp; receiving clerks"] },
      { n: "05", title: "Quality &amp; Lab", roles: ["QC lab technicians", "Sampling technicians", "Quality inspectors", "Batch record reviewers"] },
      { n: "06", title: "Maintenance &amp; Reliability", roles: ["Maintenance technicians", "Millwrights", "Instrumentation &amp; controls techs", "Industrial electricians"] },
      { n: "07", title: "Turnaround &amp; Facility Support", roles: ["Turnaround support crews", "Industrial cleaning crews", "Scaffold helpers", "Fire watch &amp; hole watch attendants"] },
    ],
  },

  "oil-gas": {
    deck: "Oil & Gas Travel Labor — Page Copy v1 (new page, split from Oil & Energy)",
    wired: false,
    stations: [
      { n: "01", title: "Fabrication &amp; Weld", roles: ["Pipe welders", "Pressure vessel welders", "Pipe fitters", "Structural fabricators"] },
      { n: "02", title: "Machining", roles: ["CNC machinists", "Vertical &amp; horizontal lathe operators", "Boring mill operators", "Valve body machinists"] },
      { n: "03", title: "Assembly", roles: ["Pump &amp; valve assemblers", "Compressor &amp; skid assemblers", "Wellhead &amp; pressure control assemblers", "Hydraulic assemblers"] },
      { n: "04", title: "Test &amp; Inspection", roles: ["Hydrostatic test technicians", "NDT technicians", "Quality inspectors", "Instrumentation techs"] },
      { n: "05", title: "Coating &amp; Shipping", roles: ["Industrial painters &amp; coaters", "Blast technicians", "Crating &amp; packing crews", "Shipping &amp; receiving clerks"] },
      { n: "06", title: "Facility &amp; Turnaround Support", roles: ["Turnaround support crews", "Millwrights", "Rigging crews", "Fire watch &amp; hole watch attendants"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Forklift operators", "Heavy equipment operators", "Inventory control specialists", "CDL truck drivers"] },
    ],
  },

  plastics: {
    deck: "Plastics Travel Labor — Page Copy v1 (new page, split from Chemicals & Plastics)",
    wired: false,
    stations: [
      { n: "01", title: "Resin Handling &amp; Drying", roles: ["Material handlers", "Resin dryer &amp; blender operators", "Silo &amp; bulk unloading operators", "Regrind operators"] },
      { n: "02", title: "Injection &amp; Blow Molding", roles: ["Injection mold operators", "Blow mold operators", "Machine tenders", "Robot &amp; automation cell operators"] },
      { n: "03", title: "Extrusion &amp; Thermoforming", roles: ["Extrusion operators", "Film &amp; sheet line operators", "Thermoforming operators", "Pipe &amp; profile line operators"] },
      { n: "04", title: "Secondary Ops &amp; Converting", roles: ["Converting line operators", "Printing &amp; decorating operators", "Ultrasonic welding &amp; assembly techs", "Packers &amp; palletizer operators"] },
      { n: "05", title: "Tooling &amp; Changeover", roles: ["Mold setters", "Process technicians", "Changeover technicians", "Mold maintenance techs"] },
      { n: "06", title: "Quality", roles: ["Quality inspectors", "CMM &amp; dimensional techs", "Containment &amp; sort techs", "First article inspection support"] },
      { n: "07", title: "Maintenance &amp; Material Flow", roles: ["Maintenance technicians", "Industrial electricians", "Forklift operators", "Shipping &amp; receiving clerks"] },
    ],
  },

  "power-energy": {
    deck: "Power & Energy Travel Labor — Page Copy v1 (new page, split from Oil & Energy)",
    wired: false,
    stations: [
      { n: "01", title: "Fabrication &amp; Enclosures", roles: ["Sheet metal fabricators", "Welders", "Press brake operators", "Busbar fabricators"] },
      { n: "02", title: "Coil, Core &amp; Winding", roles: ["Coil winders", "Core stackers", "Transformer assemblers", "Insulation technicians"] },
      { n: "03", title: "Electrical Assembly &amp; Wiring", roles: ["Switchgear assemblers", "Panel wiremen", "Wire harness assemblers", "Electrical assemblers"] },
      { n: "04", title: "Test", roles: ["Electrical test technicians", "High-voltage test techs", "Factory acceptance test support", "Instrumentation techs"] },
      { n: "05", title: "Finish &amp; Ship", roles: ["Industrial painters &amp; coaters", "Crating &amp; packing crews", "Rigging crews", "Shipping &amp; receiving clerks"] },
      { n: "06", title: "Quality", roles: ["Quality inspectors", "Electrical QC inspectors", "Documentation &amp; traveler clerks", "Containment &amp; sort techs"] },
      { n: "07", title: "Material &amp; Logistics", roles: ["Forklift &amp; overhead crane operators", "Kitting &amp; material handlers", "Inventory control specialists", "CDL truck drivers"] },
    ],
  },
};

/** The decks that are wired to a live nav entry, keyed by route. */
export const DECK_STATIONS_BY_ROUTE: Record<string, Station[]> = Object.fromEntries(
  Object.entries(DECK_ROLE_GRIDS)
    .filter(([, g]) => g.wired)
    .map(([slug, g]) => [`/industries/${slug}`, g.stations]),
);

/** Decks held back until the page split is decided, for the prototype's notes. */
export const DECKS_AWAITING_SPLIT: string[] = Object.entries(DECK_ROLE_GRIDS)
  .filter(([, g]) => !g.wired)
  .map(([, g]) => g.deck);
