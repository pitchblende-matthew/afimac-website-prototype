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
 * TWO PAGE SPLITS ARE STILL OPEN, per Maria 10/23, and the decks say so
 * themselves:
 *
 *   · Chemicals & Plastics may become two pages. The combined v2 deck is
 *     below as "chemicals-plastics"; the Plastics v1 deck, written for the
 *     split, is below as "plastics". If the split happens, chemical
 *     processing needs its own page and this entry narrows to it.
 *   · Oil & Energy may become two pages. The combined v2 deck is below as
 *     "oil-energy"; the Power & Energy v1 deck is below as "power-energy".
 *     The Oil & Gas half of that split has no deck yet.
 *
 * So "plastics" and "power-energy" are HELD, NOT WIRED IN. They are not in
 * the nav, they have no route, and nothing renders them. Adding them while
 * the combined pages still exist would count plastics and power twice. When
 * the split is decided, give them nav entries and routes and the Who We
 * Deploy table picks them up with no further change.
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

  // ── Held pending the page splits ──────────────────────────────────────────

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
