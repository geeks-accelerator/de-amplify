// /agent-card.json: the machine-readable HATEOAS discovery card. Structured
// JSON for automated consumers, the counterpart to the markdown /llms.txt.
// Every response tells you where to go next: _links maps the resources,
// _actions lists the next steps with priority, reason, and timing so an
// agent (or any client) can navigate and act using only this document.
// HATEOAS (hypermedia as the engine of application state) means the response
// itself carries the navigation, so no out-of-band API knowledge is needed.

export const dynamic = "force-static";

const SITE = "https://de-amplify.com";
const AS_OF = "2026-07-16";

const BODY = {
  // A2A Agent Card fields (the /.well-known/agent-card.json spec shape), so
  // A2A-aware clients read a conformant card; the HATEOAS _links/_actions
  // below are de-amplify extensions for "where to go next".
  name: "de-amplify.com",
  description:
    "A framing proposal and movement site on engagement feeds and minors: regulate the loop, re-attach consent, de-amplify don't censor. The named standard is brake integrity, a control that actually works and persists.",
  version: "1.0.0",
  url: SITE,
  provider: { organization: "de-amplify.com", url: SITE },
  documentationUrl: `${SITE}/llms.txt`,
  capabilities: { streaming: false, pushNotifications: false, stateTransitionHistory: false },
  defaultInputModes: ["text/plain"],
  defaultOutputModes: ["text/markdown", "text/html"],
  skills: [
    {
      id: "read-standard",
      name: "Read the Brake Integrity Standard",
      description:
        "The policy paper: control integrity as the regulable surface, the 2026 legal record, and honest limits.",
      tags: ["policy", "standard", "brake-integrity", "section-230", "first-amendment"],
      examples: ["What is brake integrity?", "Summarize the policy paper", `GET ${SITE}/proposal.md`],
      inputModes: ["text/plain"],
      outputModes: ["text/markdown"],
    },
    {
      id: "score-a-platform",
      name: "Score a platform's brake",
      description:
        "The seven-part brake-integrity test written out so any consumer scores a feed the same way.",
      tags: ["scorecard", "test", "measurement"],
      examples: ["How do I test whether a feed's controls work?", `GET ${SITE}/scorecard`],
      inputModes: ["text/plain"],
      outputModes: ["text/html"],
    },
    {
      id: "read-litigation-record",
      name: "Read the dated litigation record",
      description:
        "The social media addiction lawsuits explained: four proceedings, evidence-tiered and sourced.",
      tags: ["lawsuits", "litigation", "mdl-3047", "meta"],
      examples: ["What are the social media addiction lawsuits?", `GET ${SITE}/lawsuits.md`],
      inputModes: ["text/plain"],
      outputModes: ["text/markdown"],
    },
    {
      id: "read-hearings-record",
      name: "Read the Congressional hearings, distilled",
      description:
        "Four hearings (2023-2026) with verbatim, attributed quotes: a Meta whistleblower, five CEOs under oath, the internal documents a jury was shown, and the fight over the fix.",
      tags: ["hearings", "congress", "testimony", "mechanism", "section-230"],
      examples: ["What did the CEOs admit to the Senate?", `GET ${SITE}/hearings.md`],
      inputModes: ["text/plain"],
      outputModes: ["text/markdown"],
    },
    {
      id: "read-evidence-ledgers",
      name: "Read the evidence ledgers (distillations)",
      description:
        "The source-of-truth claim ledgers behind the lawsuit and hearing pages: every claim tiered ([ESTABLISHED]/[OBSERVED]/[ASSUMED]) and traced, with the hearings' full verbatim quote-banks.",
      tags: ["distillation", "evidence", "transparency", "ledger", "sources"],
      examples: ["What is the evidence behind the $375M New Mexico verdict?", `GET ${SITE}/distillations`],
      inputModes: ["text/plain"],
      outputModes: ["text/html"],
    },
    {
      id: "file-brake-report",
      name: "File a brake report",
      description:
        "Build a shareable #WheresTheBrake post from one dead control. Client-side, stores nothing.",
      tags: ["report", "participation", "wheresthebrake"],
      examples: ["I set a control and it reset, how do I report it?", `GET ${SITE}/report`],
      inputModes: ["text/plain"],
      outputModes: ["text/html"],
    },
  ],

  // de-amplify HATEOAS extensions: every response says where to go next.
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
    hearings: { href: `${SITE}/hearings`, title: "The Congressional hearings, distilled (the mechanism, on the record)" },
    "hearings-markdown": { href: `${SITE}/hearings.md`, type: "text/markdown" },
    distillations: { href: `${SITE}/distillations`, title: "The evidence ledgers (distillations) behind the lawsuit and hearing pages" },
    scorecard: { href: `${SITE}/scorecard`, title: "The seven-part brake-integrity test" },
    report: { href: `${SITE}/report`, title: "File a structured brake report" },
    remixes: { href: `${SITE}/remixes`, title: "The movement song and its remixes" },
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
    spec: "Dual A2A Agent Card + HATEOAS discovery card. Top-level fields (name, skills, capabilities) are A2A-spec; _links is the resource map and _actions are next steps ordered by priority. Served at /agent-card.json and the A2A-canonical /.well-known/agent-card.json. The human/agent index is at /llms.txt.",
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
