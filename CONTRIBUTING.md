# Contributing to de-amplify

Thanks for showing up. This is a movement site and a framing proposal, so the
most valuable contributions are usually to the *argument*, not just the code.

## The best contribution: attack the limits

The proposal is deliberately blunt about where it breaks (the honest-limits
section of the policy paper). If the diagnosis is right, make it stronger by
attacking it:

- Find a hole in the reasoning, the legal analysis, or the standard.
- Correct a fact. This site is about a live public issue and cites primary
  sources; if a claim is wrong or a citation is stale, open an issue with the
  primary source. **Corrections land in the ledger first, not on the page.**
  See "Fixing a fact" below; a PR that patches only the visible page is the
  exact drift the architecture exists to prevent.
- Sharpen the framing, the self-test, or the campaign-safety rules.

Open an issue, or open a PR. Small, focused changes are easier to review and
merge than sweeping rewrites.

## Ground rules

- **Accuracy is load-bearing.** Legal and factual claims must trace to a
  primary source (a court order or filing, an official release). Secondary
  coverage is tiered down and flagged. Everything carries an as-of date.
- **Posture precision.** "Announced intent" is not "filed" is not "affirmed";
  a summary-judgment ruling is not a motion to dismiss; a jury verdict is not
  "upheld on appeal." This project was burned once by a "$6M upheld on appeal"
  error, so this class of edit gets read closely.
- **Event date is not coverage date.** An order "filed June 29" may be
  "announced June 30", and a settlement "reported June 23" was not necessarily
  agreed that day. Record the event date; note the coverage date separately.
- **House style: no em-dashes.** Use commas, colons, parentheses, or
  restructure. Straight quotes only. **Two directories are exempt and must not
  be "fixed":** `docs/distillations/sources/` holds verbatim official
  transcripts, and `docs/distillations/reviews/` holds raw output from external
  review models. Normalizing punctuation in either edits a record of what
  someone else said, and would break the line-anchored quote locators the
  hearing ledgers depend on.
- **Aim at the loop, not at people.** The movement targets a mechanism, never
  a company or a person. Keep contributions the same way: show the behavior,
  never a person.
- **Standalone.** This repo is self-contained; do not add references to other
  repositories.

## Fixing a fact (read this before opening a content PR)

The lawsuit and hearing content is **ledger-first**. The evidence-tiered claim
ledgers in [`docs/distillations/`](docs/distillations/) are the source of truth;
the pages you read on the site are *seeded from* them, curated, not a 1:1
render. So:

1. Land the correction in the ledger, against a primary source, with its
   evidence tier ([ESTABLISHED] / [OBSERVED] / [ASSUMED]).
2. Then re-seed the curated page (`content/lawsuits.md`, `content/hearings.md`,
   `content/lawsuits/*.md`) on a dated pass.

The `/distillations` pages publish the ledger directly, so step 1 alone already
corrects a public surface. Never fix a fact only on the page: that leaves the
ledger and the page disagreeing, with nothing to say which is right.

Two cautions learned the hard way:

- A quote being **verbatim** and being **correctly attributed** are different
  facts, and only the first is checked by tooling. In the hearing ledgers'
  witness quote-banks, the senator named in the parenthetical is the
  *questioner*, not the speaker.
- If you report that something is **not** in a source, prove your search first
  by running it against a string you know is there. A search that finds nothing
  is a claim that the search was right, and that claim is easy to skip past
  because an empty result looks like a finding.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:3333
npm run build    # typecheck + compile; run before opening a PR
npm run lint     # eslint . (flat config); run before opening a PR
npm run check:ledgers        # verbatim-TLDR drift; run if you touched a ledger or a curated page
npm run check:quotes         # quoted spans verbatim against the committed source caches
npm run check:surfaces       # share cards and structured data vs the record; run after any case-status change
npm run check:distillations  # internal consistency of the single-source research corpus
npm run dates                # regenerate content-dates.json if you changed any content file
npm run check:dates          # fails if that manifest drifted from git history
```

`check:surfaces` and `check:distillations` were missing from this list for four
days and one day respectively after they started running in CI, which is a small
example of the thing this project keeps finding: **a guard nobody is told about
is a guard that only fails at review time.** If you add one, add it here in the
same commit.

You do not have to remember all of these: CI runs every one of them, plus the
house-style sweep, on your pull request. Running them locally just gets you the
answer sooner.

One version floor to know about: `npm run check:ledgers` needs **Node 22.6 or
newer**. It imports the site's own TypeScript module so the checker can never
disagree with the build, which means it passes `--experimental-strip-types`. On
Node 20 that fails with `node: bad option: --experimental-strip-types`, which
looks like a broken script and is really just an old Node. Everything else in
the list runs fine on Node 20.

If you touched styling, check contrast: real text must clear WCAG AA 4.5:1
against the `#070709` background, which means `text-bone/50` is the floor.
Anything dimmer has to be genuinely decorative and marked `aria-hidden="true"`.

See [CLAUDE.md](CLAUDE.md) for the repo's conventions (the content pipelines,
the discovery layer, the deploy gotchas) and [README.md](README.md) for what
the project is.

## License

By contributing, you agree that your contributions are licensed under this
repository's license, CC-BY-4.0.
