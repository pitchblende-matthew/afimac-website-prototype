/** SEO block shown in the PAGE META table on BUILD pages. */
export interface PageMetaData {
  /** SEO title — target 50–60 characters. */
  t: string;
  /** Meta description — target 145–160 characters. */
  d: string;
  /** Target keyword set. */
  k: string;
}

/** One wireframe band on a page. */
export interface Block {
  /** Band modifier classes: wash · blue · dark · readiness · sky · hero · center */
  cls?: string;
  /** Block label, e.g. "BLOCK 03 · HOW THE CSTL PROCESS WORKS". */
  n?: string;
  /** Anchor id, for in-page jump links. */
  id?: string;
  /** The block markup. */
  h: string;
  /** Elementor build note, hidden by the "Show Elementor build notes" toggle. */
  spec?: string;
  /** Full-bleed block: render without the `.wrap` / blocknum / spec scaffolding. */
  raw?: boolean;
}

/** Everything the Prototype layout needs to frame a page. */
export interface PageProps {
  title: string;
  crumb: string;
  /** Intended production URL, shown in the breadcrumb bar. */
  url: string;
  status: "live" | "build";
  meta?: PageMetaData;
  /** Sub-nav route this page should highlight. */
  active?: string;
}
