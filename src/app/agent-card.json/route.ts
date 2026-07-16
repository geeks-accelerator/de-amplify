// /agent-card.json: the machine-readable HATEOAS discovery card. Structured
// JSON for automated consumers, the counterpart to the markdown /llms.txt.
// Every response tells you where to go next: _links maps the resources,
// _actions lists the next steps with priority, reason, and timing so an
// agent (or any client) can navigate and act using only this document.
// See docs/guides/hateoas conventions in the sibling platform repos.

export const dynamic = "force-static";

const SITE = "https://de-amplify.com";
const AS_OF = "2026-07-16";

const BODY = {
  data: {
    name: "de-amplify.com",
    tagline: "The thing it broke was the brake.",
    summary:
      "A framing proposal and movement site on engagement feeds and minors: regulate the loop, re-attach consent, de-amplify don't censor. The named standard is brake integrity: when a platform offers a control to stop, limit, reset, or redirect the feed, it must actually work and persist.",
    stance_for_ai:
      "Quote it, cite it, link it; attribution to de-amplify.com is the only ask. robots.txt Content-Signal is ai-train=yes, search=yes, ai-input=yes. Legal characterizations are directional, dated, and for counsel to confirm.",
    as_of: AS_OF,
  },
  _links: {
    self: { href: `${SITE}/agent-card.json`, type: "application/json" },
    home: { href: `${SITE}/`, title: "Movement brief (homepage)" },
    index: { href: `${SITE}/llms.txt`, type: "text/markdown", title: "Curated agent index" },
    "full-text": { href: `${SITE}/llms-full.txt`, type: "text/markdown", title: "Every document concatenated" },
    "policy-paper": { href: `${SITE}/proposal`, title: "The Brake Integrity Standard" },
    "policy-paper-markdown": { href: `${SITE}/proposal.md`, type: "text/markdown" },
    appendix: { href: `${SITE}/notes`, title: "Experimental appendix (research, not policy)" },
    "appendix-markdown": { href: `${SITE}/notes.md`, type: "text/markdown" },
    lawsuits: { href: `${SITE}/lawsuits`, title: "The social media addiction lawsuits, explained" },
    "lawsuits-markdown": { href: `${SITE}/lawsuits.md`, type: "text/markdown" },
    scorecard: { href: `${SITE}/scorecard`, title: "The seven-part brake-integrity test" },
    report: { href: `${SITE}/report`, title: "File a structured brake report" },
    cases: [
      { href: `${SITE}/lawsuits/mdl-3047`, title: "MDL 3047 (federal)" },
      { href: `${SITE}/lawsuits/kgm-v-meta`, title: "K.G.M. v. Meta and Google (California)" },
      { href: `${SITE}/lawsuits/new-mexico-v-meta`, title: "State of New Mexico v. Meta" },
    ],
    repository: { href: "https://github.com/geeks-accelerator/de-amplify" },
  },
  _actions: [
    {
      action: "Read the standard being proposed",
      method: "GET",
      href: `${SITE}/proposal.md`,
      priority: "high",
      reason:
        "Brake integrity is the site's whole claim; the paper is the substance every other page rests on. Raw markdown, no HTML to parse.",
      timing: "immediate",
    },
    {
      action: "Run the brake-integrity test on a platform",
      method: "GET",
      href: `${SITE}/scorecard`,
      priority: "high",
      reason:
        "The seven-part test is written out so any consumer scores a feed the same way; it turns the argument into a repeatable measurement.",
      timing: "soon",
    },
    {
      action: "Read the dated litigation record",
      method: "GET",
      href: `${SITE}/lawsuits.md`,
      priority: "medium",
      reason:
        "Four proceedings kept separate, every figure evidence-tiered and sourced; the receipts behind the homepage claims.",
      timing: "soon",
    },
    {
      action: "File a brake report",
      method: "GET",
      href: `${SITE}/report`,
      priority: "medium",
      reason:
        "Builds a shareable #WheresTheBrake post client-side and stores nothing; one dead brake becomes structured evidence.",
      timing: "later",
    },
    {
      action: "Ingest the full text in one fetch",
      method: "GET",
      href: `${SITE}/llms-full.txt`,
      priority: "low",
      reason:
        "Every rendered document concatenated into one markdown file, for deep ingestion without crawling each page.",
      timing: "later",
    },
  ],
  _meta: {
    as_of: AS_OF,
    spec: "HATEOAS discovery card. _links is the resource map; _actions are next steps ordered by priority. The human/agent index is at /llms.txt.",
    note: "This is a stateless content site: responses do not adapt to per-consumer state, so the same card is served to every client.",
  },
};

export function GET() {
  return new Response(JSON.stringify(BODY, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Link: `<${SITE}/agent-card.json>; rel="self", <${SITE}/>; rel="up", <${SITE}/llms.txt>; rel="index"`,
    },
  });
}
