---
title: "Plan: remediating the two external reviews of 2026-08-14"
subtitle: "One confirmed live defect, five correctness fixes, four questions that need a primary source, and a register of findings that are deliberate so nobody re-litigates them."
status: "Prepared and FULLY EXECUTED 2026-08-14. All of Tier 1 applied, all four Tier 2 questions answered against their primary sources, the deferred guard built and shipped as `npm run check:surfaces`, and every Tier 3 item resolved (implemented, closed by research, or declined with a reason). 2.1 came back against the site and the A2A conformance claim was withdrawn; 2.4 came back for the site and nothing changed. Two Tier 3 items are deliberately NOT built and are recorded below as open product decisions: the interactive scorecard and the printable checklist PDF. This file is now the record of why, not a pending queue."
date: 2026-08-14
site: "de-amplify.com"
document: "Operational checklist plus a research brief. It locates every affected string and states what it becomes; where the answer depends on an external specification it says so and stops."
sources:
  - "docs/reviews/2026-08-14-codex-external-review.md (filed verbatim, triaged on receipt)"
  - "docs/reviews/2026-08-14-gemini-external-review.md (filed verbatim, triaged on receipt)"
---

# Plan: remediating the two external reviews of 2026-08-14

## Status at a glance (2026-08-14, end of day)

| Tier | State |
| --- | --- |
| **1. Correctness** | All six applied. |
| **2. Research** | All four answered against primary sources. 2.1 went against the site (A2A claim withdrawn); 2.4 went for it (no change). |
| **3. Decisions** | All resolved: four built, three closed without change, two declined with reasons, one deferred to an open proposal. |
| **4. Register** | No action by design. Read it before "fixing" the lockfile or `engines`. |
| **Guard** | Built and shipped as `npm run check:surfaces`, wired into CI, fault-injected three ways, then tightened in code review after its figure check was found to accept bare integers. |

**One finding from either review is still open**, and it is the only one: Codex Agent 1, that
no HTML page advertises its markdown twin (`rel="describedby"` to `/llms.txt`, per-page
`rel="alternate" type="text/markdown"`). Discovery runs one way today: the raw `.md` routes
point back to HTML, but nothing points forward.

**Two items are deliberately not built** and are product decisions, not defects: the
interactive scorecard (blocked on an open proposal, see Tier 3) and the printable checklist
PDF.

**Verification at close:** `check:dates` 30 paths, `check:ledgers` 42 checks across 11
ledgers, `check:quotes` 432 spans across 8, `check:surfaces` 13 figures and 3 posture words
across 6 surfaces, house style clean, lint clean, cold production build clean.

## Why this file exists

Two external models reviewed this repository on the same day and disagreed about almost
everything. One concluded that no changes were required. The other found, with file and
line citations, a live correctness defect on the site's structured data and share cards.
On triage the second was largely right and the first was largely decorative.

That split is the useful part, and it is worth stating before the checklist: **the review
that praised the project found nothing, and the review that distrusted it found the thing
two of my own passes had missed.** This file exists so the finding gets fixed, so the
three or four claims that rest on external specifications get checked against those
specifications rather than against confidence, and so the handful of findings that are
accurate but deliberate are recorded as deliberate before someone "fixes" them and breaks
a deploy.

## How to use this document

Tier 1 is mechanical. Every string is located below and the replacement is derivable from
a source this repo already holds. Do it in one pass, verify with the existing checks, ship.

Tier 2 is **blocked on reading a primary source**. Each item names the document, the exact
question, and what each possible answer licenses. Do not implement a Tier 2 item from
memory of a specification. That is the failure mode this repo has recorded more than once:
a plausible belief that agrees with the expected answer and was never tested.

Tier 3 is a decision list. It contains no defects. Nothing in it should be built because
it appeared in a review; a review is evidence about the reviewer's priorities, not a
mandate.

Tier 4 exists so that findings which are correct but deliberate stop being re-discovered.

---

## Tier 1: correctness. Mechanical, no research needed.

### 1.1 The New Mexico posture is stale on five machine-read surfaces [APPLIED 2026-08-14]

**The defect.** On 2026-08-06 the First Judicial District Court entered final judgment:
a **$567 million** abatement fund on top of the jury's **$375 million**, for **$942
million** total. The ledger and the curated pages carry this correctly, and the ledger
explicitly marks the superseded claim. Five surfaces still describe the abatement decision
as pending, using the **$953 million figure that was the state's request**.

**Why it is worse than a stale number.** The $953M was never wrong as a statement about
the *request*. It is wrong only as a statement about the *posture*, which is the precise
distinction this project's evidence discipline exists to police: announced intent is not
filed is not decided. A reader who trusts the share card is told a decided case is open.

**Why the re-seed missed it, which is the generalisable part.** OG cards and JSON-LD are
**TSX, not markdown**. The ledger-first re-seed pass operates on `content/`, and no guard
script reads a share card. `check:ledgers` proves the TLDR variants reach their consumers;
nothing proves a chip on an OG card still matches the record. The surfaces that went stale
are exactly the ones crawlers, AI agents and social previews ingest, and exactly the ones
no human re-reads.

**The strings, located.**

| File | Line | Current | Becomes |
| --- | --- | --- | --- |
| `src/app/lawsuits/page.tsx` | 76 | `a separate judge-decided phase is weighing about $953 million more plus product-design changes` | the decided posture: a $567M abatement fund entered Aug 6, 2026, $942M total, plus the five-year minors' order. Keep the appeal sentence, which is still true. |
| `src/app/lawsuits/new-mexico-v-meta/opengraph-image.tsx` | 4 | alt: `with a $953 million abatement request pending` | `with a $567 million abatement fund entered August 6, 2026` |
| `src/app/lawsuits/new-mexico-v-meta/opengraph-image.tsx` | 12 | chips: `~$953M requested`, `decision pending` | `$567M abatement`, `judgment entered aug 2026` (final wording to fit the chip width) |
| `src/app/lawsuits/opengraph-image.tsx` | 12 | chip: `~$953M requested` | `$567M court-ordered` |
| `content/lawsuits/tennessee-v-meta.md` | 67 | `Alongside New Mexico's pending abatement decision, this is one of only two live American proceedings positioned to order...` | New Mexico is no longer pending, so Tennessee's framing changes: it is now the remaining live proceeding of that kind, or the sentence cites New Mexico as the decided precedent. This is a substantive re-framing, not a find-and-replace. |
| `docs/distillations/tennessee-v-meta.md` | 137 | same phrase inside claim 27 | **Ledger first.** Fix here, then re-seed the case file above. Claim 27 is `[ASSUMED]`; check whether the assumption still holds now that New Mexico resolved. |

**Order of operations.** The Tennessee ledger is the source of truth for the last two
rows, so it changes first and the case file is re-seeded from it. The three TSX surfaces
have no ledger relationship and are edited directly against the New Mexico ledger's
established claims.

**Verification.** `npm run check:ledgers` (the TLDR consumers must still match),
`npm run check:quotes` (the Tennessee ledger is not registered, so this proves nothing
about it; state that rather than treating green as coverage), `npm run dates`, then load
`/lawsuits` and both OG routes and read them. **The OG cards must be looked at, not
curl'd for a 200.** A share card that renders successfully with the wrong words is the
exact failure being fixed.

**A caution for the copy.** The five-year minors' order and the algorithm refusal are both
in the judgment. Do not let the correction quietly upgrade the win: the court **declined**
to order algorithmic changes, and the ledger's own label says so. The corrected FAQ answer
should not read as a bigger victory than the ledger states.

### 1.2 `robots.txt` blocks Googlebot from the assets it needs to render [APPLIED 2026-08-14]

**The defect.** `src/app/robots.txt/route.ts` emits `Disallow: /_next/` inside the
`User-agent: *` group. There is no Googlebot-specific group, so Googlebot follows it. The
homepage alone references **31** `/_next/static/` URLs, including the stylesheet. Google
is being told not to fetch the files required to render the page it is indexing.

**Verified how.** The complete served `robots.txt` was read end to end, not truncated. An
earlier truncated read of the same file appeared to show only `Disallow: /api/`, which
would have produced a confident all-clear on a broken query. The count of blocked asset
references was taken from the rendered homepage.

**The fix, pending Tier 2.2.** Allow the static subtree while keeping any genuinely
private path blocked. The exact directive is a Tier 2 question because the right answer
depends on current guidance, but the shape is: permit `/_next/static/`.

**The second half of the finding, which is a decision and not a defect.** The 22 named AI
crawler groups each carry only `Allow: /` with no `Disallow` lines, so they are not
subject to the `/api/` or `/_next/` restrictions at all. Per the robots standard a crawler
obeys only its own most-specific group, so this is real. It is also arguably intended: the
site's stated posture is that AI crawlers are welcome to everything. **Decide explicitly
and write the decision into the route file as a comment**, so the asymmetry reads as a
choice rather than an oversight.

### 1.3 Three sitemap entries and four more report a borrowed date [APPLIED 2026-08-14]

**The defect.** `src/app/sitemap.ts` gives `/report`, `/scorecard` and `/remixes` the
value `proposalDate`, and gives all four `/for` pages the policymaker deck's date. Those
seven URLs claim a modification date belonging to a different document.

**Why this one stings.** This repo built `content-dates.json`, a committed git-author-date
manifest, plus `npm run dates` and `npm run check:dates`, specifically because false
freshness signals were being served to crawlers for three weeks without a single failing
build. This is the same class of error, surviving by hand in the same file the manifest
was built to feed.

**The fix.** Date each route from a file that actually changes when the route changes.
`/report`, `/scorecard` and `/remixes` are hand-built React with no `content/` body, so
either date them from their own `page.tsx` or add them to the manifest's covered paths.
The `/for` decks each have a source file in `docs/proposals/`; use each deck's own.

**Watch the manifest coverage field.** `/api/health` reports `coverage`, which asks the
shipped manifest whether it carries every content path the dated surfaces need. If new
paths are added to `contentDate()` call sites, they must be added to the manifest
generator too, or `coverage.ok` goes false. That is the mechanism working; do not silence it.

### 1.4 `llms-full.txt` omits the two pages the agent card tells agents to use [APPLIED 2026-08-14]

**The defect.** `src/app/llms-full.txt/route.ts` bundles the documents and all eleven
ledgers, but not `/scorecard` or `/report`. The agent card's `_actions` direct agents to
run the scorecard test and file a report. The bundle an agent is told to read does not
contain the instructions for the actions it is told to take.

**The fix, and the trap in it.** Adding them means adding raw markdown sources for two
hand-built React pages. **Read the `DOC_READERS` comment in that route file before
touching it.** The explicit per-file thunks exist because dynamic `fs.readFileSync` over a
computed path defeats Next's file tracing and pulls the entire `docs/distillations/sources/`
transcript cache into the deployment bundle. Any new entry must follow the same literal
thunk pattern. This is documented in the repo and was independently praised by the other
reviewer, which is a reason to preserve it, not to refactor it.

**Wire-up.** A new raw route is a new discovery surface: `sitemap.ts`, `llms.txt`,
`llms-full.txt`, and `_links` in the agent card, per the "adding or changing a route"
rules in `CLAUDE.md`.

### 1.5 `JsonLd` does not escape the less-than character before injecting JSON [APPLIED 2026-08-14]

**The finding.** `src/components/JsonLd.tsx:9` passes `JSON.stringify(data)` straight to
`dangerouslySetInnerHTML`. A literal `</script>` inside any structured-data string would
terminate the script element.

**Status: hardening, not a live hole.** No content currently contains that sequence, and
all structured data is repo-authored. It is a one-line change and the content is edited
constantly, which is exactly when this class of bug arrives.

**The fix.** Replace every less-than character in the serialized output with its JSON
unicode escape, `\u003c`, which is inert inside a script element and parses to the
identical object.

**A trap that already bit twice while writing this file.** The escape sequence does not
survive being pasted or retyped through several tools: it silently loses its backslash and
becomes a bare `<`, which is exactly the character the fix exists to remove. The
reviewer's own recommendation arrived here already mangled that way, and the first draft of
this paragraph was mangled the same way before it was caught by reading the file's bytes
rather than its rendering. **Verify the committed source contains the backslash**, by byte
inspection and not by eye, because the broken and correct forms look nearly identical. Verify by planting a string
containing `</script>` in a page's JSON-LD, confirming the page still parses, then removing
it. **Fault-inject it.** An escaping fix that is not tested against the character it
escapes is a guess.

### 1.6 The header nav has no `aria-label` and no `aria-current` [APPLIED IN FULL 2026-08-14]

**The finding.** `src/components/Header.tsx` contains zero occurrences of either. There is
no programmatic indication of which page is current, and the nav landmark is unnamed.

**Why it belongs in Tier 1 rather than Tier 3.** This project made an explicit
accessibility commitment: a WCAG AA contrast floor enforced repo-wide, decorative glyphs
carrying `aria-hidden`, an `sr-only` polite status on the report form. Navigation
semantics are the same standard applied to a surface that has not had the pass yet. The
report form shows the bar this project sets for itself.

**The fix.** `aria-label="Primary"` on the nav, `aria-current="page"` on the active route,
and a visible `focus-visible` state consistent with the existing palette. Keep the
contrast floor: any new state colour must clear 4.5:1, and `text-bone/50` is the floor.

---

## Tier 2: blocked on a primary source. Do not implement from memory.

Each item names the document to read and what each answer licenses. The reason this
section exists at all is that three of the reviewer's recommendations are assertions about
external specifications, and this project's standard for an external assertion is the same
whether it comes from a news article or a model: read the source.

### 2.1 Does the agent card actually conform to A2A? [ANSWERED: NO. Claim withdrawn 2026-08-14]

**The question.** The site asserts conformance in two public places: `robots.txt` header
comments say "A2A + HATEOAS", and the card's own `spec` field says its top-level fields
are A2A-spec. The served card has `name`, `description`, `url`, `version`, `capabilities`,
`skills`, `defaultInputModes` and `defaultOutputModes`. It **lacks** `protocolVersion`,
`supportedInterfaces` and `preferredTransport`.

**Read:** the A2A specification, Agent Card section, at
`https://github.com/a2aproject/A2A/blob/main/docs/specification.md`. Determine which
fields are REQUIRED, and whether an agent card that exposes no callable interface is
conformant or merely well-formed.

**What each answer licenses.**
- If the missing fields are required: the site is **overclaiming about itself**, and that
  is a defect of the same class this project polices in its legal copy. Fix by either
  adding the fields honestly or downgrading the claim to "HATEOAS discovery card" in both
  places. Downgrading is not a defeat; it is accuracy.
- If they are optional: the card is conformant, the reviewer's finding is a preference,
  and the answer gets recorded here so it is not re-raised.

**Do not skip the second half of the question.** The reviewer's sharper point is that the
`_actions` are plain GET content links rather than A2A task or message operations. A card
can carry every required field and still describe capabilities it does not implement.

### 2.2 What does Google actually say about blocking `/_next/`? [ANSWERED and APPLIED 2026-08-14]

**The question.** Tier 1.2 establishes that Googlebot is blocked from 31 render-critical
assets. The remaining question is the right directive: allow `/_next/static/` only, allow
all of `/_next/`, or drop the disallow entirely.

**Read:** Google's robots.txt documentation and the guidance on blocking resource files,
at `https://developers.google.com/search/docs/crawling-indexing/robots/intro`. Confirm
precedence rules for `Allow` and `Disallow` on overlapping paths, because the fix depends
on a more-specific `Allow` beating a broader `Disallow`.

**Note the deploy interaction.** Whatever is chosen must be verified on the live site
after deploy, not only in the local build, and re-checked in Search Console rather than
assumed from the file's text.

### 2.3 Is the llms.txt format claim a specification or a preference? [ANSWERED: specified. APPLIED 2026-08-14]

**The question.** The reviewer says several resources are inline comma-separated links
rather than one bullet per resource, and that rendered HTML and remixes belong under an
`## Optional` heading.

**Read:** the llms.txt proposal at `https://llmstxt.org/`. Determine whether one resource
per list item and the `## Optional` section are specified, and what `## Optional` means to
a consumer (it is believed to mark content that can be skipped when the context budget is
tight, which would be a substantive routing decision here, not cosmetics).

**What it licenses.** If specified, this is a conformance fix and cheap. If not, weigh it
against the fact that the current file is generated from the registry, which is what keeps
its ledger list and count from going stale. **Do not trade a generated surface for a
hand-written one to gain formatting.** That regression is documented in `CLAUDE.md`.

### 2.4 Does an `Article` need a `Person` author for this content class? [ANSWERED: NO. No change needed]

**The question.** Both reviewers independently flagged that `Article` schemas set the
organization as author and there is no `Person` node anywhere in `src/`. Convergence
between two models that agreed on little else is the reason this is worth checking rather
than dismissing.

**Read:** Google's Article structured data documentation at
`https://developers.google.com/search/docs/appearance/structured-data/article`, and its
guidance on author markup. Establish whether `Person` is required, recommended, or one
valid option alongside `Organization`.

**The half that research cannot settle.** Even if `Person` is recommended, adopting it is
an editorial decision about whether this site speaks institutionally or personally. That
choice is currently consistent across the whole site. **Research settles the SEO half
only**; the voice question goes to Tier 3.

---

## Tier 3: decisions, not defects. Nothing here is broken. [ALL RESOLVED 2026-08-14]

These are recorded so they can be chosen deliberately. A review is evidence about the
reviewer's priorities. None of these should be built merely because it was suggested.

1. **The primary journey.** The reviewer argues it should be home to scorecard to report,
   and notes `/scorecard` appears zero times in the header. Counter-consideration: the
   report form is the low-friction action and the scorecard is the standard, so the
   current ordering may be deliberate. Decide the intent first, then the navigation.
2. **Making `/scorecard` actionable.** Today it explains the seven criteria; it does not
   let a user check items off, compute a result, or carry it into the report. This is the
   largest single build in this document and would make the scorecard a tool rather than a
   specification. Note the interaction with the standard's lockstep rule: the seven
   criteria live in the policy paper and on the page together, and a scoring UI is a third
   place the standard would then exist.
3. **A table of contents on long documents.** Headings already carry slugs via
   `rehype-slug`, so a compact TOC is derivable. Constraint: the markdown renderer is a
   server component deliberately and must not gain `"use client"`.
4. **Report form detail.** Conditional text fields for "Other", a visible fallback when
   the clipboard write fails, and a share option that is not X-only. The clipboard failure
   being silent is the most defensible of the three.
5. **A `Person` or provenance node** (see 2.4). Editorial as much as technical.
6. **The three suggestions from the other review**: an audio affordance beside the
   homepage song link, passing a platform slug from `/scorecard` into `/report`, and a
   printable one-page brake-integrity checklist. The third is the most aligned with the
   project's stated purpose, since it puts the standard in a parent's or teacher's hand.

---

## Tier 4: register of findings that are correct and deliberate

Recorded so they stop being re-discovered and so nobody "fixes" one.

- **`railway.toml` deletes the lockfile and runs `npm install` while CI runs `npm ci`.**
  Accurate. Deliberate: the lockfile is deleted so native dependencies resolve for Linux
  rather than macOS. The consequence, that the exact versions in `package.json` are the
  only real production pins, is documented in `CLAUDE.md` and is the reason those pins are
  exact. The reviewer's concern is the correct reading of the trade-off, not a
  misunderstanding of it.
- **`engines` says Node >=20 while `check:ledgers` needs 22.6+.** Accurate. Deliberate:
  `engines` is right about the app, since production runs `nodejs_20` and never runs that
  script, and raising it would put a false constraint on the install. The floor lives in
  `CLAUDE.md` and in CI's two-job split.
- **The default build "fails under Turbopack".** **Does not reproduce.** Run from a cold
  `.next` on this machine it exits 0, and CI ran the same script on Node 20 the same day
  and passed. Environment-specific to the reviewer's sandbox. **Do not change the build
  script on the strength of this**, and if it ever does reproduce here, reproduce it twice
  before editing `package.json`.
- **The "45.8 KB gzipped / 19% of bundle" figure**, and the related 8.2% and 44 KB
  numbers, from the other review. Not this project's numbers. The measured figure recorded
  in two places here is **42 KB gzipped**. Do not cite the others.
- **The `MODULE_TYPELESS_PACKAGE_JSON` warning on `tailwind.config.ts`.** Real,
  build-time only, cosmetic. Adding `"type": "module"` would change module resolution for
  every file in the workspace to fix a warning that costs nothing at runtime.

---

## The generalisable question this raises, and a proposed guard [BUILT 2026-08-14]

Defect 1.1 was invisible to every automated check in the repo because **no guard reads a
TSX surface for factual currency**. `check:ledgers` proves the TLDR variants reach their
consumers verbatim. `check:quotes` proves quoted spans are verbatim. Neither can notice
that a share-card chip describes a decided case as pending.

Two candidate guards, neither obviously right:

1. **Forbid stale posture vocabulary near a case name.** Grep the OG and JSON-LD surfaces
   for words like `pending`, `requested`, `weighing`, `awaiting` and require each hit to
   be justified. Cheap, and it would have caught this. It is also a vocabulary gate, which
   this repo has been burned by before: one comment becoming a standing multi-file rule.
2. **Give the OG cards and the FAQ JSON-LD a ledger relationship.** Chips and answers
   about a case would be parsed from, or checked against, that case's ledger, the way the
   TLDR variants already are. Structurally correct and much more work, and it would extend
   the one-consumer discipline to the surfaces that currently have none.

**Recommendation: do not build either until Tier 1.1 is fixed by hand.** Fixing it first
gives a known-good state to fault-inject against, which is how every other checker in this
repo was validated. Then decide whether the class is frequent enough to automate. A guard
written against a defect that is still present cannot be proven to catch it.


## What was actually decided, 2026-08-14

Recorded because several of these went the opposite way from what the reviews assumed.

**1.6 got its `aria-current` after all, by reading the rule instead of obeying its wording.**
`CLAUDE.md` allowed two client components. The rule's stated reason is that a client
markdown renderer reships a 45.8 KB parser, so it is a rule about shipping a parser, not a
ban on interactivity. `HeaderNav` imports no library, and `next/link` already puts the
router context in the client bundle, so the measured cost was **301 bytes gzipped**
(177,796 -> 178,097, built both ways from a cold `.next`). The rule now says three, with
the measurement and the test to apply to a fourth.

**2.3's fix landed, and the caution held.** Every resource is now its own list item, the
generated ledger list is still generated, and an `## Optional` section carries the rendered
HTML twins, the song page and the repository, which is what the spec means by links an
agent can skip on a tight context budget.

**The guard exists: `npm run check:surfaces`.** It does two different things on share cards
and structured data only: every dollar figure on a case's card must appear in that case's
ledger (structural), and words asserting a matter is undecided must be allowlisted with a
reason (vocabulary, blunt on purpose). It found three legitimate posture words on its first
run, all of which stayed, because Tennessee really is in trial and the $1.4T answer exists
to say that figure is a request. Fault-injected three ways: the original 2026-08-14 defect,
an invented figure, and a deliberately broken matcher, which makes it abort rather than
report green. Wired into `package.json` and the CI guards job.

**Tier 3, item by item.**

- **Primary journey:** `/scorecard` is now in the header as `test`, hidden on mobile like
  `notes` so the single-line mobile layout survives. The homepage CTA was NOT restructured;
  that is a larger editorial decision about whether the low-friction action or the standard
  comes first.
- **Interactive scorecard: NOT BUILT, and there is a sequencing reason as well as a design
  one.** It is the largest item in either review. Two things argue for waiting. First the
  lockstep rule: the seven criteria live in the policy paper and on the page together, and a
  scoring UI with its own state would be a third place the standard exists. Second, and more
  decisive, **`docs/proposals/2026-07-16-scorecard-v2-brake-performance-test.md` is an open
  proposal to change the dimensions themselves.** Building the instrument now means building
  it against a standard that may be revised. Resolve the proposal, then build it once. That
  proposal now carries a note pointing back here.

  Worth recording what checking this turned up: **that proposal described the live standard
  incorrectly.** Its status line said "the current six-part test remains operative", and the
  live test has been seven-part since commit `9e0ce6e` closed exactly the gap the proposal
  itself had identified. An open proposal about the standard was inviting reviewers to
  compare against a version that no longer existed. Corrected 2026-08-14, with the
  pre-reconciliation state kept in place because the rest of the argument rests on it.
- **Rename `standard` to `policy`: DECLINED.** The project's entire proposition is that it
  names a standard. Renaming the nav item to `policy` would trade the argument for
  familiarity.
- **Table of contents: BUILT**, server-side, from the same markdown string the renderer
  already receives, on `/proposal`, `/notes`, `/lawsuits` and `/hearings`. Collapsed by
  default so it does not push the opening paragraph off a phone screen. The anchor slugs
  have to agree with `rehype-slug` or every link silently does nothing, so they were
  verified against the ids actually in the DOM: 13 of 13 on `/lawsuits`, 15 of 15 on
  `/proposal`.
- **Report form clipboard: FIXED, and it was a real bug.** `navigator.clipboard?.writeText(x).then(...)`
  optional-chains the METHOD, not the promise, so in a non-secure context it called `.then`
  on `undefined` and threw. A failed copy now says so, with a `role="alert"` and manual
  instructions. Verified by removing `navigator.clipboard` in a live page.
- **Conditional "Other" text fields and non-X sharing: NOT BUILT.** Both are form-design
  changes rather than defects, and the copy-to-clipboard path already covers any
  destination.
- **`Person` schema: CLOSED BY RESEARCH, no change.** See 2.4. Google allows Organization
  and says to use it for organizations, and this site's Organization node already carries
  the `url` and `sameAs` that the author best-practice guidance actually asks for. Both
  reviewers raised this independently and both were wrong, which is a useful reminder that
  agreement between two models is not corroboration.
- **Audio affordance on the homepage: ALREADY SATISFIED, no change.** The suggestion
  described a "listen to the song" link that does not exist. The song section carries the
  click-to-load player itself, with a play triangle, an accessible label naming what will
  load, and the line "nothing loads until you press play".
- **Printable scorecard PDF: NOT BUILT.** The most aligned of the soft suggestions, since it
  would put the standard in a parent's or teacher's hand, but it is a new artifact with its
  own maintenance burden rather than a fix.


## Observations and insights, recorded because they generalise

These are the parts worth keeping after the checklist above stops being interesting.

### The same failure shape appeared twice in one day, in two unrelated systems

Both times, **the checker's own scope was where the defect was hiding**, and both times the
scope had been drawn by guessing where the risk was instead of by asking what the evidence
covered.

1. **Morning:** `check:quotes` was scoped to the `Quotes` sections of two ledgers, on the
   reasoning that quote-banks hold the record quotes. The **Claims** sections quote the same
   caches, were unchecked, and had absorbed sentence punctuation inside four quotation
   marks. Widening the scope surfaced all four at once.
2. **Afternoon:** every guard in the repo reads markdown. OG cards and JSON-LD are TSX, so
   the ledger-first re-seed could not reach them, and five surfaces spent three weeks
   telling crawlers a decided case was pending.

The rule that falls out, now in `CLAUDE.md` for the quote checker and enforced by
`check:surfaces` for the share cards: **scope a checker to what the evidence covers, not to
where you expect the defect to be.** A green check over half a corpus reads exactly like a
green check over all of it.

### Agreement between two reviewers is not corroboration

Both models independently said the `Article` schema needed a `Person` author. That
convergence was the strongest signal in either review, and it was **wrong**: Google's own
documentation says author is recommended not required, says to use `Organization` for
organizations, and asks for the `url` / `sameAs` this site already has. Two systems trained
on overlapping material agreeing is one observation, not two. The primary source settled in
one fetch what the convergence had made look obvious.

### A prose specification page can be a rendered shell

The A2A specification page answers "which AgentCard fields are required?" with a
`proto_to_table("AgentCard")` directive, not a table. Reading it yields a confident summary
built from examples, which is how a card missing a REQUIRED field could look conformant.
The normative answer was in `specification/a2a.proto`, one hop away, and it was unambiguous:
`supported_interfaces` is REQUIRED and this site does not have it. **When a spec page says
where the normative definition lives, go there before concluding anything.**

### The triage that got a figure wrong, and why

While filing the Gemini review, its "45.8 KB / 19% of bundle" figures were checked against
`CLAUDE.md`, `README.md` and `docs/`, not found, and written up as unverified with a note
telling the reader not to cite them. **They are this repo's own numbers**, in the header
comment of `src/app/proposal/ProposalContent.tsx`, with the raw byte counts behind them. The
search never touched `src/`. This is the documented failure mode of this repository,
committed while triaging a review that was more careful than the triage. The correction is
in the filed review, kept rather than quietly patched, because the lesson is the point.

**A real inconsistency survived it:** `CLAUDE.md` says 42 KB, `ProposalContent.tsx` says
45.8 KB and shows its arithmetic. Both in-repo, same trade-off, only one showing its work.
Cite the figure with its source until someone re-measures.

### Programmatic inspection lied; one screenshot did not

The header focus ring was verified eight ways through `getComputedStyle` and the CSSOM,
which consistently reported the outline colour as `currentColor` while the rule was present,
matching, in the right layer, and uncontested. Even an inline style appeared not to apply.
A single screenshot showed the ring rendering in brake red the entire time. Two lessons,
both cheap: **when a programmatic read disagrees with a rule you can see in the stylesheet,
look at the pixels before debugging the cascade**, and a CSSOM walk that reports 82 rules
for a 74 KB stylesheet is a broken walk, not a small stylesheet.

### Two probes that were weak in the same way

- Grepping minified client chunks for `SCORECARD_DIMENSIONS` returned zero, which proves
  nothing: minifiers rename identifiers and preserve string literals. Re-probing on
  `"Can you find the control without googling it"` with a positive control gave the real
  answer (tree-shaking does drop the scorecard half of the shared lib).
- A `head -8` on the served `robots.txt` appeared to show only `Disallow: /api/`, which
  would have been a confident all-clear on a truncated read. The full file had
  `Disallow: /_next/` on the next line.

Both are the house rule restated: **prove the query before believing a negative.**

### A rule is worth reading for its reason, not its wording

`CLAUDE.md` said the site has exactly two client components. Taken literally, `aria-current`
was unbuildable. The rule's stated reason is that a client markdown renderer reships a
45.8 KB parser, which makes it a rule about **shipping a parser**, not about interactivity.
`HeaderNav` imports nothing and cost **301 bytes gzipped**, measured both ways from a cold
`.next`. The rule now records the number and the test to apply to a fourth candidate, which
is more useful than either obeying or ignoring the original wording.

### What the guard deliberately does not do

`check:surfaces` proves the currency of **figures and posture words** on share cards and
structured data. It cannot read prose, cannot check attribution, and its vocabulary half is
scoped hard to those surfaces on purpose: prose is allowed to discuss pending things, and
this repo has been burned before by one comment becoming a standing multi-file gate. Three
allowlist entries exist and all three are legitimate, which is the behaviour a blunt
instrument should have: **a false alarm costs one line with a reason, a false all-clear
ships a decided case as open.**


## Code review of this work, same day, and what it found

The changes above were reviewed before commit. **Two defects were found in the remediation
itself**, which is worth recording: the work fixing a review is not exempt from review.

**1. The new guard's figure check could be satisfied by a page number.** `corpusHasFigure`
made the dollar sign optional (`\$?`), which reduced "does the ledger assert this dollar
amount" to "does this number appear anywhere". Tested directly, the string
`see page 567 of the order` satisfied a `$567M` chip, and the ledgers are dense with claim
numbers, paragraph references and dates. **A guard against stale figures that any bare
integer can satisfy is not a guard.** The `$` is now required, and the self-test carries a
third control asserting that a bare integer does NOT satisfy a money figure, so the
degradation cannot return quietly. The fault injections still fire.

**2. The focus ring was copy-pasted into four components.** `Header`, `HeaderNav` and twice
inside `Toc`. This repo enforces a contrast floor repo-wide; four literal copies is exactly
how such a rule stops being repo-wide, because someone adjusts one and the other three keep
the old value while still looking deliberate. Extracted to `src/lib/focus.ts` with the
6.21:1 measurement recorded next to it.

**Four things were verified rather than assumed**, each of which could have failed silently:

- The scripted edit that moved the scorecard arrays out of `page.tsx` left no residue, and
  the page still renders all seven dimensions with a 7-step `HowTo`.
- `aria-[current=page]:text-bone` genuinely styles (full bone against bone/63). The probe
  that said otherwise was looking for `current=page` in a selector the CSS escapes as
  `current\=page`.
- The slugger's duplicate-heading path is not exercised by any current document, so it was
  unit-tested directly: `sources`, `sources-1`, `sources-2`, matching github-slugger.
- The guard's `sectionRe` really does capture the whole FAQ object (all five questions),
  rather than stopping at the first nested brace and checking almost nothing.

**One thing was checked and deliberately not changed.** `llms-full.txt` prints each action
page's H1 twice, once as the wrapper title and once from the document itself. That looked
like a bug introduced here until the existing documents were checked: `/lawsuits` does the
same thing. It is the established convention, so the new entries match it rather than
diverge from it.

## Sequencing

1. **Tier 1.1 first, alone, and verify the OG cards by eye.** It is the only item that is
   currently wrong in public.
2. Tier 1.3, 1.5, 1.6 together. Small, independent, no external dependency.
3. Tier 2.2, then Tier 1.2, since the directive depends on the reading.
4. Tier 2.1 and 2.3, then whatever they license. Tier 2.1 may produce a copy change to
   `robots.txt` and the agent card rather than a code change.
5. Tier 1.4 last of the Tier 1 items, because it adds routes and therefore touches every
   discovery surface.
6. Tier 3 only after the maintainer has chosen from it.

---

## Addendum, 2026-08-18: the coverage numbers in this file are historical now

This plan records guard coverage as it stood on 2026-08-14, including that
`check:quotes` covered eight of eleven ledgers and that Tennessee was unregistered so a run over it
"proves nothing". **Both were true on the day and neither is true now**: every ledger was registered
on 2026-08-18, including Tennessee and the California bellwethers, and the count has moved twice
since.

**Nothing above is edited.** This file is a dated record of a remediation, and a plan that quietly
updates its own numbers stops being evidence of what was done when. The live figure has exactly one
home, the coverage line in `docs/distillations/sources/README.md`, which `npm run check:quotes`
asserts on every run; `README.md`, `CONTRIBUTING.md` and `CLAUDE.md` are now asserted to contain no
span count at all, and `docs/plans/` is deliberately exempt from that rule so entries like this one
stay readable.

Worth recording alongside it: this file's section on what `check:quotes` **cannot** notice was
right, and the 2026-08-18 audits found the next layer down. The guards could not notice that their
own coverage figures, restated in prose across four documents, had gone stale. See the third pass in
`docs/plans/2026-08-18-single-source-to-primary.md`.
