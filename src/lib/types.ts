import type { EmbedKey } from "./embeds";

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
  /**
   * A live Elementor HTML-widget embed, dropped in after `h` and before
   * `hEnd`. The embed renders from the same file the build pastes into
   * WordPress — see src/lib/embeds.ts.
   */
  embed?: { name: EmbedKey; caption?: string };
  /** Markup rendered after `h` and after the embed, if there is one. */
  hEnd?: string;
  /** Elementor build note, hidden by the "Show Elementor build notes" toggle. */
  spec?: string;
  /** Full-bleed block: render without the `.wrap` / blocknum / spec scaffolding. */
  raw?: boolean;
  /**
   * A photograph behind the whole band, with the navy scrim over it and the
   * copy on top — the hero treatment every hero spec in the cluster asks for
   * ("Container, bg image + navy overlay"). The band keeps its own navy as the
   * fallback, so a missing file degrades to the plain dark band rather than to
   * unreadable text.
   */
  bg?: {
    /** Path under public/. */
    src: string;
    /** Where the crop holds, as a background-position. */
    focus?: string;
    /** Override the scrim, e.g. to weight it towards the copy column. */
    scrim?: string;
  };
}

/** Everything the Prototype layout needs to frame a page. */
export interface PageProps {
  title: string;
  crumb: string;
  /** Intended production URL, shown in the breadcrumb bar. */
  url: string;
  status: "live" | "build";
  meta?: PageMetaData;
  /**
   * The page's meta as published today. Set only on the industry pages that
   * carry both versions — it is shown at launch phases 0, 1 and 2, where the page
   * body is the live one, so the meta table can never describe the update
   * while the copy below it is the live page.
   */
  metaPre?: PageMetaData;
  /** Sub-nav route this page should highlight. */
  active?: string;
  /**
   * Replace the header's five nav items with the option-H mega menu, keeping
   * the real logo and social icons either side of it. For trying the proposed
   * header on at full size rather than mocking it in the page body.
   */
  megaNav?: boolean;
}
