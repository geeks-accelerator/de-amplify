import fs from "fs";
import path from "path";
import { DISTILLATIONS, distillationRawMarkdown } from "@/lib/distillations";

// /llms-full.txt: the "deep ingestion" companion to /llms.txt (llmstxt.org).
// The full text of every rendered document, concatenated into one markdown
// file so an agent can read the whole substance in a single fetch. The index
// with orientation lives at /llms.txt.

export const dynamic = "force-static";

const SITE_URL = "https://de-amplify.com";

const DOCS: [title: string, file: string, url: string][] = [
  ["The Brake Integrity Standard (policy paper)", "content/proposal.md", `${SITE_URL}/proposal`],
  ["Experimental appendix: the wedge hypothesis", "content/notes.md", `${SITE_URL}/notes`],
  ["The social media addiction lawsuits, explained", "content/lawsuits.md", `${SITE_URL}/lawsuits`],
  ["MDL 3047 (case file)", "content/lawsuits/mdl-3047.md", `${SITE_URL}/lawsuits/mdl-3047`],
  ["K.G.M. v. Meta and Google (case file)", "content/lawsuits/kgm-v-meta.md", `${SITE_URL}/lawsuits/kgm-v-meta`],
  ["State of New Mexico v. Meta (case file)", "content/lawsuits/new-mexico-v-meta.md", `${SITE_URL}/lawsuits/new-mexico-v-meta`],
  ["State of Tennessee v. Meta (case file)", "content/lawsuits/tennessee-v-meta.md", `${SITE_URL}/lawsuits/tennessee-v-meta`],
  ["The hearings: the mechanism, on the record", "content/hearings.md", `${SITE_URL}/hearings`],
  // The three audience briefings. These are gamma.app deck source rather than
  // web essays, but they are rendered documents with their own raw .md routes,
  // so "every rendered document" in the header above has to include them.
  ["For policymakers (briefing deck)", "docs/proposals/2026-07-16-brake-integrity-pitch-policymakers.md", `${SITE_URL}/for/policymakers`],
  ["For parents (briefing deck)", "docs/proposals/2026-07-16-brake-integrity-pitch-parents.md", `${SITE_URL}/for/parents`],
  ["For press and organizers (briefing deck)", "docs/proposals/2026-07-16-brake-integrity-pitch-press-organizers.md", `${SITE_URL}/for/press`],
];

// Read a document by its LITERAL path, not by a variable joined at runtime.
//
// The obvious version, fs.readFileSync(path.join(process.cwd(), file)) over the
// DOCS array, makes `file` opaque to static analysis, and Turbopack responds by
// tracing THE WHOLE PROJECT into the server bundle: "Dynamic filesystem access
// causes tracing of the whole project ... leads to all source files (including
// the public folder) to be deployed as part of the server code." That is every
// megabyte of docs/distillations/sources/ shipped to the server for no reason.
// Every other markdown route escapes this by passing literal path segments; this
// route was the only one that did not.
//
// The literal has to be AT THE CALL SITE. An intermediate lookup does not help:
// a Record<string, string> of prebuilt literal paths still leaves readFileSync(p)
// opaque and the warning stands (measured, not assumed). Thunks are what work,
// because each fs.readFileSync then has its full literal argument in place. The
// DOCS table above stays the readable list; this is just the reader for it.
const DOC_READERS: Record<string, () => string> = {
  "content/proposal.md": () => fs.readFileSync(path.join(process.cwd(), "content", "proposal.md"), "utf-8"),
  "content/notes.md": () => fs.readFileSync(path.join(process.cwd(), "content", "notes.md"), "utf-8"),
  "content/lawsuits.md": () => fs.readFileSync(path.join(process.cwd(), "content", "lawsuits.md"), "utf-8"),
  "content/hearings.md": () => fs.readFileSync(path.join(process.cwd(), "content", "hearings.md"), "utf-8"),
  "content/lawsuits/mdl-3047.md": () => fs.readFileSync(path.join(process.cwd(), "content", "lawsuits", "mdl-3047.md"), "utf-8"),
  "content/lawsuits/kgm-v-meta.md": () => fs.readFileSync(path.join(process.cwd(), "content", "lawsuits", "kgm-v-meta.md"), "utf-8"),
  "content/lawsuits/new-mexico-v-meta.md": () => fs.readFileSync(path.join(process.cwd(), "content", "lawsuits", "new-mexico-v-meta.md"), "utf-8"),
  "content/lawsuits/tennessee-v-meta.md": () => fs.readFileSync(path.join(process.cwd(), "content", "lawsuits", "tennessee-v-meta.md"), "utf-8"),
  "docs/proposals/2026-07-16-brake-integrity-pitch-policymakers.md": () => fs.readFileSync(path.join(process.cwd(), "docs", "proposals", "2026-07-16-brake-integrity-pitch-policymakers.md"), "utf-8"),
  "docs/proposals/2026-07-16-brake-integrity-pitch-parents.md": () => fs.readFileSync(path.join(process.cwd(), "docs", "proposals", "2026-07-16-brake-integrity-pitch-parents.md"), "utf-8"),
  "docs/proposals/2026-07-16-brake-integrity-pitch-press-organizers.md": () => fs.readFileSync(path.join(process.cwd(), "docs", "proposals", "2026-07-16-brake-integrity-pitch-press-organizers.md"), "utf-8"),
};

function readDoc(file: string): string {
  const reader = DOC_READERS[file];
  if (!reader) return "(source unavailable)";
  try {
    return reader().trim();
  } catch {
    return "(source unavailable)";
  }
}

export function GET() {
  const header =
    `# de-amplify.com: full text\n\n` +
    `> The complete text of every rendered document on de-amplify.com, ` +
    `concatenated for AI ingestion. The curated index is at ${SITE_URL}/llms.txt. ` +
    `This file is generated from the source markdown and is current as of the deploy.\n\n`;

  const body = DOCS.map(([title, file, url]) => {
    const md = readDoc(file);
    return `---\n\n# ${title}\n\nSource: ${url}\n\n${md}\n`;
  }).join("\n");

  // the evidence ledgers (the distillations), same reader-facing body
  // the /distillations pages render, each headed by its tier notes
  const ledgers = DISTILLATIONS.map((d) => {
    let md = "(source unavailable)";
    try {
      md = distillationRawMarkdown(d.slug, `${SITE_URL}/distillations/${d.slug}`).trim();
    } catch {
      /* leave the placeholder */
    }
    return `---\n\n${md}\n`;
  }).join("\n");

  return new Response(header + body + "\n" + ledgers, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${SITE_URL}/llms-full.txt>; rel="self", <${SITE_URL}/>; rel="up", <${SITE_URL}/llms.txt>; rel="index"`,
    },
  });
}
