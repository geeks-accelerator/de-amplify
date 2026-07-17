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

  // keep only the reader-facing sections, in document order; the lawsuit
  // ledgers also open with their own bolded "Tier key" calibration paragraph
  // before the first heading, which is reader-facing (it carries each record's
  // exact tier semantics) and is kept for fidelity
  const parts = body.split(/\n(?=## )/);
  const preamble =
    parts[0] && !parts[0].startsWith("## ") && parts[0].trim().startsWith("**Tier key")
      ? parts[0].trim()
      : "";
  const bodySections = parts.filter((p) => {
    const h = p.match(/^## (.+)/);
    return h ? KEEP_SECTIONS.some((k) => h[1].startsWith(k)) : false;
  });
  let bodyMarkdown = [preamble, ...bodySections].filter(Boolean).join("\n\n").trim();

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

// Self-contained raw markdown of a ledger, served at /distillations/<slug>.md
// (the agent-facing surface, like every other document's raw route) and
// concatenated into /llms-full.txt. Same reader-facing body the page renders,
// headed by the title, subject, as-of date, and the tier / tier-down notes so
// the file stands alone.
export function distillationRawMarkdown(slug: string, sourceUrl?: string): string {
  const d = loadDistillation(slug);
  return (
    `# ${d.title}\n\n` +
    (sourceUrl ? `Source: ${sourceUrl}\n\n` : "") +
    (d.subject ? `> ${d.subject}\n\n` : "") +
    `As of ${d.asOf}. This is the evidence-tiered claim ledger behind ${d.related.label} ` +
    `on de-amplify.com, published in full for transparency. Tiers: ESTABLISHED (stated in a ` +
    `primary source, or said on the official record at a hearing; a fact about what was filed ` +
    `or said, not necessarily adjudicated true), OBSERVED (secondary coverage, or a document ` +
    `read into the record), ASSUMED (the distiller's inference, flagged). Provenance flags ` +
    `([interested-party], [advocacy-witness], [single-witness], [lawmaker characterization]) ` +
    `mark claims resting on one interested voice: reported, not adjudicated.\n\n` +
    (d.tierDown
      ? `TIER-DOWN: this hearing's official transcript is not published yet, so this ledger ` +
        `is built from the witnesses' written testimony, not the live question-and-answer. ` +
        `Treat it as the weaker-evidence tier it is; it will be rebuilt to the full standard ` +
        `when the official transcript publishes.\n\n`
      : "") +
    d.bodyMarkdown +
    "\n"
  );
}
