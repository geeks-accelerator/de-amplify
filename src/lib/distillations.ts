import fs from "fs";
import path from "path";

// The distillation pages render the project's evidence-tiered claim ledgers
// (docs/distillations/*.md) directly, for transparency: the source of truth for
// the lawsuits and hearings, shown with its tiers intact. This module is the
// single place that reads a ledger, parses the bits the page needs from its
// frontmatter and TLDR block, and returns only the reader-facing body sections
// (the frontmatter, the TLDR authoring scaffolding, and the internal
// correction/audit sections are excluded; the reader-facing scope and caveats
// already live in each Reader summary).

export type DistillationKind = "lawsuit" | "hearing";

export interface DistillationMeta {
  slug: string;
  kind: DistillationKind;
  tierDown: boolean;
  /** short label for the index and cross-links */
  navLabel: string;
  /** short title for the OG card (the ledger titles run long) */
  ogTitle: string;
  /** the curated surface this ledger sits behind */
  related: { href: string; label: string };
}

export const DISTILLATIONS: DistillationMeta[] = [
  {
    slug: "mdl-3047",
    kind: "lawsuit",
    tierDown: false,
    navLabel: "MDL 3047 (the federal case)",
    ogTitle: "MDL 3047: the evidence ledger",
    related: { href: "/lawsuits/mdl-3047", label: "the MDL 3047 case file" },
  },
  {
    slug: "california-state-bellwethers",
    kind: "lawsuit",
    tierDown: false,
    navLabel: "K.G.M. and the California bellwethers",
    ogTitle: "The California bellwethers: the evidence ledger",
    related: { href: "/lawsuits/kgm-v-meta", label: "the K.G.M. case file" },
  },
  {
    slug: "new-mexico-v-meta",
    kind: "lawsuit",
    tierDown: false,
    navLabel: "State of New Mexico v. Meta",
    ogTitle: "New Mexico v. Meta: the evidence ledger",
    related: { href: "/lawsuits/new-mexico-v-meta", label: "the New Mexico case file" },
  },
  {
    slug: "hearing-2023-11-07-teen-mental-health",
    kind: "hearing",
    tierDown: false,
    navLabel: "Nov 2023: the Bejar hearing",
    ogTitle: "The 2023 Bejar hearing: the full ledger",
    related: { href: "/hearings", label: "the hearings hub" },
  },
  {
    slug: "hearing-2024-01-31-big-tech-child-safety",
    kind: "hearing",
    tierDown: false,
    navLabel: "Jan 2024: the five-CEO hearing",
    ogTitle: "The 2024 five-CEO hearing: the full ledger",
    related: { href: "/hearings", label: "the hearings hub" },
  },
  {
    slug: "hearing-2026-05-13-courtroom-to-congress",
    kind: "hearing",
    tierDown: true,
    navLabel: "May 2026: the verdicts hearing",
    ogTitle: "The 2026 verdicts hearing: the full ledger",
    related: { href: "/hearings", label: "the hearings hub" },
  },
  {
    slug: "hearing-2025-12-02-legislative-solutions",
    kind: "hearing",
    tierDown: true,
    navLabel: "Dec 2025: the legislative hearing",
    ogTitle: "The 2025 legislative hearing: the full ledger",
    related: { href: "/hearings", label: "the hearings hub" },
  },
];

export function distillationMeta(slug: string): DistillationMeta | undefined {
  return DISTILLATIONS.find((d) => d.slug === slug);
}

// The reader-facing sections we render (matched by heading prefix, since the
// exact headings carry parentheticals). Everything else (TLDR, Discrepancies vs
// the verified baseline, Coverage note) is authoring/QA scaffolding and stays
// out; Sources is rebuilt from the frontmatter list below.
const KEEP_SECTIONS = [
  "Reader summary",
  "Brake-integrity relevance",
  "Claims",
  "Quotes",
  "Tensions",
];

export interface LoadedDistillation extends DistillationMeta {
  title: string;
  subject: string;
  asOf: string;
  /** budgeted summary variants, parsed from the TLDR block (not rendered) */
  searchSnippet: string;
  oneSentence: string;
  sources: string[];
  bodyMarkdown: string;
}

function stripQuotes(s: string): string {
  const t = s.trim();
  return t.replace(/^"([\s\S]*)"$/, "$1").trim();
}

export function loadDistillation(slug: string): LoadedDistillation {
  const meta = distillationMeta(slug);
  if (!meta) throw new Error(`Unknown distillation: ${slug}`);

  const raw = fs.readFileSync(
    path.join(process.cwd(), "docs", "distillations", `${slug}.md`),
    "utf-8",
  );
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const front = fm ? fm[1] : "";
  const body = fm ? fm[2] : raw;

  const title = stripQuotes((front.match(/^title:\s*(.+)$/m) || [])[1] || slug);
  const subject = stripQuotes((front.match(/^subject:\s*(.+)$/m) || [])[1] || "");
  const asOf = ((front.match(/^as_of:\s*(.+)$/m) || [])[1] || "").trim();

  // sources: the YAML list under `sources:`, up to the next top-level key
  const sources: string[] = [];
  let inSources = false;
  for (const ln of front.split("\n")) {
    if (/^sources:\s*$/.test(ln)) {
      inSources = true;
      continue;
    }
    if (inSources) {
      if (/^\S/.test(ln)) break; // next top-level key ends the list
      const m = ln.match(/^\s*-\s*(.+?)\s*$/);
      if (m) sources.push(stripQuotes(m[1]));
    }
  }

  // budgeted summary variants from the TLDR block (parsed for metadata, not rendered)
  const tldr = (body.match(/## TLDR[\s\S]*?(?=\n## )/) || [""])[0];
  const grab = (re: RegExp) => ((tldr.match(re) || [])[1] || "").trim();
  const searchSnippet = grab(/Search snippet[^:]*:\*\*\s*(.+)/);
  const oneSentence = grab(/One sentence[^:]*:\*\*\s*(.+)/);

  // keep only the reader-facing sections, in document order
  const bodySections = body
    .split(/\n(?=## )/)
    .filter((p) => {
      const h = p.match(/^## (.+)/);
      return h ? KEEP_SECTIONS.some((k) => h[1].startsWith(k)) : false;
    });
  let bodyMarkdown = bodySections.join("\n\n").trim();

  if (sources.length) {
    bodyMarkdown +=
      "\n\n## Sources\n\n" + sources.map((s) => `- ${s}`).join("\n") + "\n";
  }

  return {
    ...meta,
    title,
    subject,
    asOf,
    searchSnippet,
    oneSentence,
    sources,
    bodyMarkdown,
  };
}
