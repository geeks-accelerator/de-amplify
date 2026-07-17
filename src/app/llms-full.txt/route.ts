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
  ["The hearings: the mechanism, on the record", "content/hearings.md", `${SITE_URL}/hearings`],
];

export function GET() {
  const header =
    `# de-amplify.com: full text\n\n` +
    `> The complete text of every rendered document on de-amplify.com, ` +
    `concatenated for AI ingestion. The curated index is at ${SITE_URL}/llms.txt. ` +
    `This file is generated from the source markdown and is current as of the deploy.\n\n`;

  const body = DOCS.map(([title, file, url]) => {
    let md = "(source unavailable)";
    try {
      md = fs.readFileSync(path.join(process.cwd(), file), "utf-8").trim();
    } catch {
      /* leave the placeholder */
    }
    return `---\n\n# ${title}\n\nSource: ${url}\n\n${md}\n`;
  }).join("\n");

  // the seven evidence ledgers (the distillations), same reader-facing body
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
