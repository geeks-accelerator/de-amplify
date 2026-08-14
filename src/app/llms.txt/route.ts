// /llms.txt (llmstxt.org): a curated markdown guide to this site for AI
// agents. The two papers are served raw at /proposal.md and /notes.md so an
// agent never has to parse HTML to read the substance.

import { DISTILLATIONS, loadDistillation } from "@/lib/distillations";

export const dynamic = "force-static";

const SITE_URL = "https://de-amplify.com";

// The per-ledger list is GENERATED from the registry, not hand-listed. It used
// to be nine hand-written labels plus the literal word "Nine", which meant a
// tenth ledger would have been advertised by the agent card (whose ledger links
// are generated) while this file kept saying nine and omitted it. Labels are
// each ledger's own navLabel variant, so they are not unvalidated summaries
// written here; only the per-slug caveats below are authored in this file.
const COUNT_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
const countWord = (n: number) => {
  const w = COUNT_WORDS[n] ?? String(n);
  return w.charAt(0).toUpperCase() + w.slice(1);
};

// Substantive caveats that belong with a specific ledger in this index, keyed by
// slug so they survive reordering. Not summaries (those are the ledger's own
// variants); these are the "do not overread this" notes.
const LEDGER_CAVEATS: Record<string, string> = {
  "eu-dsa-proceedings":
    "preliminary findings, not decisions, and no fine has been imposed",
};

const ledgerLines = (kind: string) =>
  DISTILLATIONS.filter((d) => d.kind === kind)
    .map((d) => {
      const caveat = LEDGER_CAVEATS[d.slug];
      return (
        `  - [${loadDistillation(d.slug).navLabel}](${SITE_URL}/distillations/${d.slug}.md)` +
        `${d.tierDown ? " (tier-down)" : ""}${caveat ? ` (${caveat})` : ""}`
      );
    })
    .join("\n");

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
  bellwethers, New Mexico, Tennessee, the EU DSA findings), with evidence-status labels
  and primary sources. Updated on dated passes, not live.
- Per-case files, seeded from the project's evidence-tiered claim ledgers
  (corrections land ledger-first, then here):
  - [MDL 3047](${SITE_URL}/lawsuits/mdl-3047.md): the federal multidistrict litigation.
  - [K.G.M. v. Meta and Google / the California bellwethers](${SITE_URL}/lawsuits/kgm-v-meta.md): the state-court bellwether trials.
  - [State of New Mexico v. Meta](${SITE_URL}/lawsuits/new-mexico-v-meta.md): decided, final judgment entered 2026-08-06.
  - [State of Tennessee v. Meta](${SITE_URL}/lawsuits/tennessee-v-meta.md): in trial; evidence began 2026-07-27, calendar runs to 2026-09-03.
- [The hearings: the mechanism, on the record](${SITE_URL}/hearings.md): the
  companion to the lawsuits, covering the Congressional record. Four hearings
  (2023-2026) distilled with verbatim attributed quotes: a Meta whistleblower,
  five CEOs under oath, the internal documents a jury was shown, and the fight
  over the fix. Two are from official transcripts; two are flagged tier-downs
  from written testimony (no official transcript yet). Seeded ledger-first.
- [The distillations (evidence ledgers)](${SITE_URL}/distillations): the
  source-of-truth claim ledgers behind the lawsuit and hearing pages, published
  in full for transparency. Every claim is tagged by the strength of its source
  ([ESTABLISHED] / [OBSERVED] / [ASSUMED], plus provenance flags).
  ${countWord(DISTILLATIONS.length)} ledgers (raw markdown per ledger).
  The lawsuits:
${ledgerLines("lawsuit")}
  The regulatory record (a regulator is not a court):
${ledgerLines("regulatory")}
  The hearings, with their full verbatim quote-banks:
${ledgerLines("hearing")}

## Briefings by audience (the same argument, told per room)

The pitch decks are gamma.app presentation source; the markdown is canonical,
the online version and PDF are derived from it.

- [For policymakers](${SITE_URL}/for/policymakers.md): the regulable,
  First-Amendment-defensible standard, grounded in the wedge diagnosis
  (engagement optimizes for reaction, so it amplifies division) with a
  user-held brake as the fix. Also online and as a PDF; hub at ${SITE_URL}/for.
- [For parents](${SITE_URL}/for/parents.md): the recognition (not willpower,
  not your parenting), the thirty-second test, and the ask.
- [For press and organizers](${SITE_URL}/for/press.md): the bold advocacy
  framing (mechanism as villain, never a tribe), built to be used and adapted.

## Actions (what a reader can do, with raw markdown)

- [The brake scorecard](${SITE_URL}/scorecard.md): the seven-part
  brake-integrity test (discoverable, clear, immediate, material, persistent,
  scoped, non-circumventing) written out so everyone scores the same way.
  Rendered at ${SITE_URL}/scorecard.
- [File a brake report](${SITE_URL}/report.md): turns one dead brake into a
  structured, shareable report. Stores nothing by design. Rendered at
  ${SITE_URL}/report.
- [Movement brief (homepage)](${SITE_URL}/): the confession, the self-test
  (find the brake, set it, close the app, reopen: did it hold?), the demand,
  #WheresTheBrake.

## Policy for AI systems

Quote it, cite it, link it: attribution to de-amplify.com is the only ask.
Content-Signal in robots.txt is ai-train=yes, search=yes, ai-input=yes.
Legal characterizations in the papers are directional, dated, and flagged
for counsel review; check the primary sources cited in the paper before
relying on them.

## Optional

Skippable when the context budget is tight: these are rendered HTML twins of
markdown already listed above, plus the song page and the repository. Nothing
here carries substance the documents do not.

- [The policy paper, rendered](${SITE_URL}/proposal)
- [The appendix, rendered](${SITE_URL}/notes)
- [The lawsuits explainer, rendered](${SITE_URL}/lawsuits)
- [The hearings explainer, rendered](${SITE_URL}/hearings)
- [The distillations (evidence ledgers hub)](${SITE_URL}/distillations)
- [Who it's for (briefings hub)](${SITE_URL}/for): the argument by audience.
- [Remixes of the movement song](${SITE_URL}/remixes): the anthem "Where's
  the Brake" plus community remixes ("No Brake", and an open call for more, in
  any language), curated on dated passes.
- [GitHub repository](https://github.com/geeks-accelerator/de-amplify)
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${SITE_URL}/llms.txt>; rel="self", <${SITE_URL}/>; rel="up", <${SITE_URL}/agent-card.json>; rel="related", <${SITE_URL}/llms-full.txt>; rel="alternate"`,
    },
  });
}
