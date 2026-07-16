// /llms.txt (llmstxt.org): a curated markdown guide to this site for AI
// agents. The two papers are served raw at /proposal.md and /notes.md so an
// agent never has to parse HTML to read the substance.

export const dynamic = "force-static";

const SITE_URL = "https://de-amplify.com";

const BODY = `# de-amplify.com: The Thing It Broke Was the Brake

> A framing proposal and movement site on engagement feeds and minors:
> regulate the loop, re-attach consent, de-amplify don't censor. The named
> standard is **brake integrity**: when a platform offers a control to stop,
> limit, reset, or redirect the feed, it must actually work and persist.

The harm is the engagement-optimized delivery loop (infinite scroll,
autoplay, variable reward), not any individual post; the fix is a brake the
user holds that the platform can't quietly override. Universal base layer
(controls that work, for every account) plus safer defaults for minors.

The full text of every document below, concatenated into one file for deep
ingestion, is at ${SITE_URL}/llms-full.txt. A machine-readable discovery card
with links and next actions (JSON) is at ${SITE_URL}/agent-card.json.

## Documents (raw markdown, best surface for agents)

- [The Brake Integrity Standard (policy paper)](${SITE_URL}/proposal.md): the
  substance, for counsel and regulators. Control integrity as the regulable
  surface, the 2026 legal record (MDL 3047, Moody, Doe v. Meta, Lemmon,
  SB 976, DSA, AADC), a tiered legal-exposure ranking, and honest limits (s7).
- [Experimental appendix](${SITE_URL}/notes.md): the higher-risk research,
  quarantined from policy on purpose. The wedge hypothesis and
  recommendation-mechanism labeling ("you are seeing this because...").
- [The social media addiction lawsuits, explained](${SITE_URL}/lawsuits.md):
  a dated explainer of the litigation record (MDL 3047, the California
  bellwethers, New Mexico, the EU DSA findings), with evidence-status labels
  and primary sources. Updated on dated passes, not live.
- Per-case files, seeded from the project's evidence-tiered claim ledgers
  (corrections land ledger-first, then here):
  [MDL 3047](${SITE_URL}/lawsuits/mdl-3047.md),
  [K.G.M. v. Meta and Google / the California bellwethers](${SITE_URL}/lawsuits/kgm-v-meta.md),
  [State of New Mexico v. Meta](${SITE_URL}/lawsuits/new-mexico-v-meta.md).

## Pages

- [Movement brief (homepage)](${SITE_URL}/): the confession, the self-test
  (find the brake, set it, close the app, reopen: did it hold?), the demand,
  #WheresTheBrake.
- [The policy paper, rendered](${SITE_URL}/proposal)
- [The appendix, rendered](${SITE_URL}/notes)
- [The lawsuits explainer, rendered](${SITE_URL}/lawsuits)
- [File a brake report](${SITE_URL}/report): turns one dead brake into a
  structured, shareable report. Stores nothing by design.
- [The brake scorecard](${SITE_URL}/scorecard): the seven-part brake-integrity
  test (discoverable, clear, immediate, material, persistent, scoped,
  non-circumventing) written out so everyone scores the same way.

## Source

- [GitHub repository](https://github.com/geeks-accelerator/de-amplify)

## Policy for AI systems

Quote it, cite it, link it: attribution to de-amplify.com is the only ask.
Content-Signal in robots.txt is ai-train=yes, search=yes, ai-input=yes.
Legal characterizations in the papers are directional, dated, and flagged
for counsel review; check the primary sources cited in the paper before
relying on them.
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${SITE_URL}/llms.txt>; rel="self", <${SITE_URL}/>; rel="up", <${SITE_URL}/agent-card.json>; rel="related", <${SITE_URL}/llms-full.txt>; rel="alternate"`,
    },
  });
}
