// Table of contents for the long markdown documents.
//
// SERVER-SIDE ONLY, and that is the whole design constraint. The markdown
// renderer is deliberately a server component (see ProposalContent), so a TOC
// that needed a hook would reship the parser this project measured at 45.8 KB to
// every document route. This derives the headings from the same markdown string
// the renderer already receives, at render time, and ships nothing.
//
// THE ANCHOR IDS MUST MATCH rehype-slug, which uses github-slugger. If they drift,
// every TOC link becomes a silent no-op: the page still renders, the link still
// looks fine, and nothing scrolls. That failure is invisible to a build, so the
// slugger below is verified against the ids actually emitted in the DOM rather
// than assumed to agree.

export type TocEntry = { depth: 2 | 3; text: string; id: string };

/** github-slugger's algorithm, as used by rehype-slug, including its de-duplication. */
export function slugger() {
  const seen = new Map<string, number>();
  return (text: string): string => {
    const base = text
      .toLowerCase()
      .trim()
      // strip everything that is not a word character, whitespace or hyphen,
      // which is what github-slugger does after removing emoji
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    const n = seen.get(base);
    if (n === undefined) {
      seen.set(base, 0);
      return base;
    }
    seen.set(base, n + 1);
    return `${base}-${n + 1}`;
  };
}

/**
 * Headings from a markdown body, h2 and h3 only.
 *
 * Fenced code blocks are skipped, because a `#` at the start of a line inside a
 * shell fence is a comment, not a heading, and this repo's documents are full of
 * them. Getting that wrong would put "# regenerate the manifest" in the contents.
 */
export function tableOfContents(markdown: string): TocEntry[] {
  const slug = slugger();
  const out: TocEntry[] = [];
  let inFence = false;
  for (const line of markdown.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    // strip inline markdown so the label reads as text, not as syntax
    const text = m[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "")
      .trim();
    out.push({ depth: m[1].length as 2 | 3, text, id: slug(text) });
  }
  return out;
}
