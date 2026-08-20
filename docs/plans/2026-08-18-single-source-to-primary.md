---
title: "Plan: taking the single-source corpus to primary sources, and publishing what survives"
subtitle: "Sixteen distillations of the MDL 3047 trial coverage produced 112 claims tagged NEEDS-PRIMARY. This is the plan for resolving them in the cheapest defensible order, and for correcting the three flaws the first research pass exposed in the corpus itself."
status: "EXECUTED 2026-08-18, then AUDITED and SWEPT the same day. The audit's eight findings are in Part V, and so is the follow-up sweep that worked every remaining item: four closed, one found (the Ninth Circuit opinion, which is not the First Amendment ruling its lead described), three confirmed still open with the evidence for saying so. All five phases complete, plus a second publication pass and the Ninth Circuit publication. Merged across PRs #59 through #68. The plan's central prediction held (the New Mexico block was already established) and its central caution was vindicated (the bifurcation it warned against publishing is unconfirmable). Phase 2 reversed the press on the $200 billion figure, and the second pass published the strongest single finding of the whole exercise, a court recording that the child-safety relief it was granting was inadequate. LIVE as of 2026-08-20: the upstream GitHub outage cleared, the queue drained on its own, and production serves this work. This line has now been corrected three times and every stale version is preserved in Part V, which is the argument for not writing live-incident status into frontmatter at all: it said production had not deployed since 2026-08-14 (wrong, #57 shipped), then that clearing the wedge needed a dashboard action (wrong, the GraphQL API did it), then that the queue would not serve (wrong within hours). **A status line summarising a live incident goes stale faster than any other sentence in a plan**, and the durable home for one is an issue with a trigger, which is where it now lives."
date: 2026-08-18
site: "de-amplify.com"
document: "Self-contained operational plan with a research brief. Every rule needed to execute is written here rather than linked, because a rule that is referenced but absent during execution gets violated. Every task names the artifact that closes it and the surface it would change."
sources:
  - "docs/research/single-source/ (sixteen single-source distillations, 2026-08-18)"
  - "docs/distillations/sources/new-mexico-2026-08-06-final-judgment.txt (already cached, read directly in this pass)"
  - "CourtListener docket 67908468, People of the State of California v. Meta Platforms, Inc., 4:23-cv-05448-YGR (N.D. Cal.)"
---

# Plan: taking the single-source corpus to primary sources

## Status at a glance (2026-08-18)

| Phase | Outcome |
| --- | --- |
| **0. Dedupe against the ledgers** | **DONE.** All 112 classified in `docs/research/dedupe-2026-08-18.md`. A fifth outcome had to be invented, `CACHE`, for claims closable from a primary already in this repository. |
| **1. Cheap externals** | **DONE.** All four confirmed. **Three of the four needed a posture correction**, and in every case the primary was more useful than the report. |
| **2. Docket work** | **DONE, and it reversed the reporting.** Six documents fetched, four cached. The $200 billion figure does not mean what four outlets said it means. |
| **3. Corpus corrections** | **DONE.** All three applied; `check:distillations` caught the arithmetic drift the plan predicted it would. |
| **4. Ledger-first re-seed and publish** | **DONE.** Ledger, both curated pages, the policy paper, the share card, and the `mdl-3047` quote allowlist. |
| **Second publication pass** | **DONE.** Four verified primaries were found sitting unpublished. Two shipped, two deliberately did not, both decisions recorded. |
| **Implementation audit** | **DONE.** Eight findings, no factual error in the published record. Three reached a reader (a stale `Scheduled:` label on the hub, a ledger asserting both tenses, a reader summary never re-seeded); one was this repo's own documented blind spot reproduced (`check:quotes` scoped past the pass's most consequential claims); one census was wrong in every cell and is now machine-asserted. See Part V. |
| **Follow-up sweep** | **DONE.** Four closed, one found, three confirmed still open with the evidence. The Ninth Circuit opinion turned up at docket entry 541 and is not the First Amendment ruling its lead described. |
| **Quote coverage** | **CLOSED.** All eleven ledgers registered in `check:quotes`, no unguarded ledger left. Caching the last four primaries caught six defects and one bad cache; none was visible by reading. |
| **Second audit** | **DONE.** Twelve stale statements, most written earlier the same day: corrections whose moment had ended. |
| **Third pass** | **DONE.** The same defect once more, in the two most-read docs in the repo: the front-page README still described eight-of-eleven coverage, and CONTRIBUTING listed three of the five guards. **The span count now has one declared home and the other three docs are asserted to stay silent about it.** |
| **Deploy** | **RESOLVED 2026-08-20.** The wedged build was cancelled via the Railway GraphQL API; the queue was then held by an upstream GitHub outage, which cleared on its own. Production serves this work. Tracked to its close in `docs/issues/2026-08-18-railway-deploy-queue-blocked.md` rather than here, which is the point of that directory. |

**Everything here has been merged, and none of it is live.** The MDL ledger now carries
`as_of: 2026-08-18` and describes the openings in the past tense, the curated pages are re-seeded,
and the policy paper carries the French comparative point. The production site still serves the build from PR #57. That is an infrastructure fault, not a content one, and it is the single open
item in this plan. See Part V, "The one thing that is not done".

**Read Part V before acting on Parts I to IV.** Those parts are the plan as approved and are left
unedited so the predictions can be checked against what happened. Part V is what happened.

---

# Part I: orientation

Skip this only if you have the whole project in your head today. It exists because a plan whose
rationale lives somewhere else is a list of chores, and chores get done wrong.

## What this site argues

de-amplify.com makes one argument: the accelerator on engagement products works and **the brake
does not**. Platforms ship controls that look like brakes ("Take a Break", "Show me less", time
limits, parental controls) and those controls are frequently unmeasured, easy to defeat, or
decorative. The site's proposed remedy is a **brake integrity standard**, a seven-part test in
section 3 of the policy paper that asks whether a control actually stops the thing it claims to
stop.

The site's secondary claim, which this research bears on directly, is that **litigation is not the
fix**. Courts award money and occasionally order narrow product changes, but they cannot write a
market-wide design standard. That claim is the reason the trial coverage matters here: not for the
verdict, but for what the proceedings reveal about the ceiling on judicial remedies.

## What the case is

**MDL 3047** is federal multidistrict litigation, *In re: Social Media Adolescent
Addiction/Personal Injury Products Liability Litigation*, consolidated in the Northern District of
California before U.S. District Judge Yvonne Gonzalez Rogers. An MDL gathers thousands of similar
lawsuits before one judge for common pretrial handling. Named defendants across its tracks are
Meta (Facebook, Instagram), Google/Alphabet (YouTube), ByteDance (TikTok) and Snap.

A **bellwether** is a test case tried first, to show the parties how similar claims are likely to
fare. The trial that opened on 2026-08-18 in Oakland is the **state attorneys general bellwether**,
against **Meta alone**. It combines:

- **COPPA claims from 29 states.** COPPA is the Children's Online Privacy Protection Act, the federal statute requiring parental consent before collecting personal data from children under 13.
- **State consumer-protection claims from four of those states**: California, Colorado, Kentucky and New Jersey. These are deception and unfair-practices claims: that Meta designed for compulsive use and told the public its platforms were safe.

The trial uses an **advisory jury**. That is a jury whose verdict is a recommendation rather than a
binding finding. Judge Gonzalez Rogers determines liability and any remedy herself. This matters
constantly below: a headline saying "jury finds Meta liable" would be wrong about this proceeding.

## What happened, and why the corpus exists

Opening statements were delivered on 2026-08-18. The site's MDL ledger was last updated
2026-07-25 and describes that date in the future tense.

Rather than re-seed from news reports directly, the coverage was first put through **single-source
distillation**: sixteen articles and broadcasts, each extracted into atomic claims, each claim
tagged, producing **384 claims** in `docs/research/single-source/`. That corpus is working
analysis, deliberately not published, and its job is to be the disciplined middle step between
reading the news and changing a ledger.

This plan resolves what that corpus surfaced.

## Vocabulary you need to execute

### The corpus tags

Each claim in `docs/research/single-source/` carries an **evidence basis** and an **actionability**
tag. The basis dimension answers how many removes the claim sits from the record:

| Basis | Meaning |
| --- | --- |
| `RECORD` | Traceable to a filing, order or docket event the reporter names |
| `COURTROOM` | Reporter present, reporting what was said in open court |
| `PARTY` | An assertion by a party, its counsel or its spokesperson |
| `EXPERT` | A named non-party's opinion |
| `REPORTER` | The journalist's own framing or unsourced background |
| `CAPTION-ASR` | Machine speech-to-text of a broadcast |
| `CAPTION-STENO` | Live human stenography transmitted as broadcast closed captions |

Actionability is the decision the basis serves:

| Tag | Meaning | Count as approved | Measured 2026-08-18 |
| --- | --- | --- | --- |
| `PUBLISHABLE` | May be stated on the site with its tier label | 89 | 99 |
| `NEEDS-PRIMARY` | Real and material, verify against the record before publishing | **112** | **135** |
| `ATTRIBUTE-ONLY` | May appear only as "X said", never as fact | 70 | 121 |
| `DO-NOT-PUBLISH` | Fails the site's evidence rule | 13 | 20 |
| (none) | The pass-2 and pass-3 tables use an Action column of `engage` | not counted | 9 |

**Every number in the "as approved" column was wrong, and the audit that found it is in Part V.**
They summed to 284 against a corpus of 384 claims, so a hundred claims were unaccounted for and
nothing noticed, because the counts lived in prose here while the claims lived in another
directory. The measured column is now recomputed by `npm run check:distillations` against a
declared table in the corpus README, so it cannot drift again. The plan's body below is left at the
approved numbers, since Parts I to IV exist to be graded rather than corrected.

The `NEEDS-PRIMARY` set is the subject of this plan.

### Ledger-first

The site's content pipeline for litigation runs one direction and only one direction:

1. `docs/distillations/<slug>.md` is the **evidence ledger**, the source of truth. Every claim in it carries an evidence tier in brackets, `[ESTABLISHED]` for claims traced to a primary source, `[ASSUMED]` for the drafter's characterisation, and so on.
2. `content/lawsuits/<slug>.md` and `content/lawsuits.md` are **curated pages seeded from** the ledger. They are not a one-to-one render.

**A correction lands in the ledger first, verified against a primary source, and the page is
re-seeded afterwards on a dated pass. Never fix a fact only on the page.** The ledger also
publishes directly at `/distillations/<slug>`, so a ledger correction reaches readers with no
re-seed at all; only the curated pages need the pass.

`as_of` is a frontmatter field on each ledger recording the date its record was last verified.
Every figure on this site carries a date because figures date quickly.

### The TLDR block and the one-consumer rule

Each ledger carries a block of budgeted summary variants: a label, a nav-label, an og-title, a
search-snippet, a ledger-snippet, a one-sentence and a one-paragraph. **Each variant has exactly
one consumer**, and the strings are used verbatim:

| Variant | Consumer |
| --- | --- |
| One line (label) | The hub card in `content/lawsuits.md` |
| Nav label | The `/distillations` index card and breadcrumb |
| OG title | The share card |
| Search snippet | The **curated page's** meta description |
| Ledger snippet | The **`/distillations/<slug>` page's** meta description |
| One sentence | JSON-LD description |
| One paragraph | The curated page's opener |

The one-consumer rule is load-bearing for search, not just for tidiness: the search snippet once had
two consumers, which shipped identical meta descriptions on two indexable URLs about the same case.
**Copy verbatim. Never hand-adapt a summary**, because an adapted copy is a third unvalidated
variant. If a consumer needs a length the ledger lacks, add that variant to the ledger.

This matters to Phase 4 because several TLDR variants describe the August trial in the future tense
and all of them will need rewriting together.

### The guards, and what each does not prove

| Command | Proves | Does NOT prove |
| --- | --- | --- |
| `npm run check:ledgers` | The hand-copied TLDR variants reach their consumers verbatim | Anything about accuracy |
| `npm run check:quotes` | Every double-quoted span in a registered ledger is a verbatim substring of its cached source | **Who said it.** Attribution stays a by-eye check |
| `npm run check:surfaces` | Dollar figures on share cards appear in the case's ledger, and undecided-posture words are allowlisted with a reason | Prose. It is scoped hard to share cards and structured data |
| `npm run check:distillations` | The single-source corpus is internally consistent: no dangling claim IDs, declared orphans match computed, arithmetic matches | Whether any claim is **true** |
| `npm run check:dates` | `content-dates.json` matches git author dates | Anything about content |

**No guard in this repository proves a fact is true.** They catch drift, staleness and internal
inconsistency. Accuracy is human, which is the entire reason this plan exists.

### Positive controls

The standing rule, from `CLAUDE.md`: **a search that returns nothing is a claim about your query,
not a fact about the record.** Before reporting an absence, run the query against a string you
already know is present. If the control comes back empty, the query is broken, not the corpus.

This is not theoretical. In 2026-07-25 a case-sensitive grep for prepared-statement markers
returned zero against a record containing seven, and the zero was believed because it agreed with
the expected answer. Section 2.2 below records three more instances from this very research pass.

### The 2026-07-24 defect, referenced below

A re-seed put a witness's line in a senator's mouth on the hearings page and passed every automated
check, because the quoted string really was in the transcript. Machine verification proves
verbatim, never attribution. Keep it in mind whenever this plan says "attribution".

---

# Part II: the finding that sets the order

## The corpus does not know what the project already knows

`docs/research/single-source/2026-08-17-cnbc.md` records, as synthesis output S1, that a court
declined the infinite-scroll and recommendation-algorithm remedies, tags the underlying claims
`NEEDS-PRIMARY`, and calls it "the highest-value claim in the batch for this project."

**It was already established, verified against the primary, and published**, in
`content/lawsuits/new-mexico-v-meta.md`, in `content/lawsuits.md`, and as claim 36 of
`docs/distillations/new-mexico-v-meta.md`. The primary was already cached in this repository at
`docs/distillations/sources/new-mexico-2026-08-06-final-judgment.txt`, and reading it directly in
this pass showed the record is **richer than the reporting that prompted the lead**.

For context, because it is the single most important passage this project has found and Phase 4.3
depends on understanding it: *State of New Mexico v. Meta* was tried in Santa Fe under the state's
Unfair Practices Act. A jury returned 375 million dollars in March 2026; the court then held a
second, equitable phase and on 2026-08-06 ordered 567 million dollars into an **abatement fund**,
which is money directed at remedying an ongoing public harm rather than compensating a plaintiff.
Total 942 million.

In that judgment, at paragraphs 160 through 166, the court held in substance:

- regulation of industry-wide features such as infinite scroll and autoplay **requires legislative or executive branch action**;
- ordering them would risk competitively damaging Meta's platforms, given the absence of Meta's competitors in this litigation;
- those features, plus algorithmic recommendation, are most closely tied to content presentation and so carry **Section 230 and First Amendment implications** (Section 230 of the Communications Decency Act shields platforms from liability for what users post);
- push notifications and like counts are **least connected with platform content**, and those are the ones the court ordered.

That is this site's thesis, delivered by a judge who wanted to go further and concluded a court is
the wrong instrument. It is already on the site. **The distillation added nothing except a second,
weaker rendering of it, tagged as though it were an open question.**

Generalised, and this is the rule Phase 3.2 writes into the corpus README: **a single-source
distillation is built from one document and is structurally blind to the project's existing
record.** Every `NEEDS-PRIMARY` tag is a claim about what *that document* did not establish, never
about what the repository has not established. Treating the tag as a research queue without a
dedupe pass would re-verify finished work and report old findings as new.

---

# Part III: the phases

## Phase 0: dedupe the 112 against the existing record

**Do this before any external research.** It costs nothing and it shrinks the expensive phases.

### 0.1 The method, and the version that must not be used

A keyword pass was built first: for each `NEEDS-PRIMARY` claim, grep `content/` and
`docs/distillations/*.md` for a distinctive term, mark resolved on a hit. **That pass was run,
checked, and rejected.** Of the entries it marked already-in-repo, five flipped back to open when
the hits were read in context:

| Claim | Why the keyword hit was false |
| --- | --- |
| The states' 200 billion figure | Both hits were the May 2026 hearing ledger quoting Meta's annual **revenue** |
| A Ninth Circuit ruling on the First Amendment defence | All hits were California SB 976 and Section 230 doctrine in the policy paper |
| Bejar as the states' first trial witness | All hits were Arturo Bejar's **November 2023 Senate testimony**, which the site already covers as a hearing |
| The Kids Online Safety Act advancing out of committee | Hits were the bill package discussed at the December 2025 House hearing |
| Meta's filing of 2026-08-17 | Hits were the LAUSD case, which shares the date |

This is the repository's documented failure mode inverted. The standing rule is that a null result
is a claim about the query. The corollary this pass establishes is that **a hit is not confirmation
either**, and on a corpus this dense with dates, dollar figures and party names the false-positive
rate is high enough to make the shortcut useless.

**So the dedupe is a reading pass, not a grep pass.** Grep to locate candidates; then read the
surrounding paragraph before recording an outcome.

### 0.2 Outcomes to record

- `ESTABLISHED`, with the file and line where the project already carries it and the primary the ledger cites. Remove from the research queue, correct the distillation per Phase 3.
- `OPEN`, with one line naming the document that would close it.
- `SUPERSEDED`, where the project holds a better-sourced version of the same fact. The New Mexico material above is the model.

### 0.3 Expected shape

The New Mexico material is the largest `ESTABLISHED` block: the remedy ceiling, the granted
overnight notification restriction, the like-count reasoning, the age-assurance order, the 942
million total and the two-phase structure are all published and primary-verified. Most of the MDL
trial material is genuinely open, because the trial began after the last ledger pass.

### 0.4 Done when

Every one of the 112 carries one of the three outcomes, and the `OPEN` set is a list of named
documents rather than a list of topics.

## Phase 1: the cheap externals

Four claims, each closable by one fetch against an official source, none requiring docket access.
Highest ratio of resolved claims to effort, so do them before Phase 2.

| # | Claim | Source that closes it | Corpus origin |
| --- | --- | --- | --- |
| 1.1 | The Kids Online Safety Act was voted out of the Senate Commerce Committee on a bipartisan basis in the week before trial | congress.gov bill actions, or the committee's own records | Channel 4, claim C20, single-sourced to an interviewee |
| 1.2 | Meta's legal expenses for Q2 2026 | Meta's Form 10-Q on SEC EDGAR | ABC News says 2.4 billion, NYT says more than 2 billion. One filed document settles both |
| 1.3 | France's constitutional court struck a bill banning under-15s from social media on freedom-of-expression grounds in August 2026, after parliament approved it in July | The Conseil constitutionnel decision text | BBC, claim D17 |
| 1.4 | Australia's under-16 ban commenced December 2025, the first nationally | Australian legislation or the eSafety Commissioner | BBC, claim D14. Partly in the repo already; confirm scope in Phase 0 first |

**1.3 is the one that matters most, and the reason is the whole argument.** Phase 0 established
that a New Mexico court declined feed-design remedies partly on First Amendment and Section 230
grounds. If a constitutional court in a different legal system has also struck a design-side
mandate on expression grounds, then the constraint on brake mandates is **constitutional rather
than merely political, in two systems**. That is an addition to the policy paper's constitutional
section, not a news item, and it strengthens the site's case that a standard has to be written
rather than litigated.

**Watch the posture on 1.3.** "Blocked a bill" is not "struck down a law", and a decision on a
referral before promulgation is not a ruling on an operative statute. The site was burned once by a
posture error, publishing a verdict as "upheld on appeal" when it was not. Get the procedural
posture exactly right or this fails the site's own precision rule.

### Done when

Each of the four is either published with its primary cited, or recorded as not confirmed with the
reason. A claim that could not be confirmed is a finding, not a gap to leave silent.

## Phase 2: the docket

### 2.1 Access, established

The trial docket is **4:23-cv-05448-YGR**, *People of the State of California v. Meta Platforms,
Inc.*, N.D. Cal., before Judge Gonzalez Rogers, CourtListener docket **67908468**. It is live, its
last known filing is 2026-08-18, and it is the same PACER case the repository already cites for
Meta's penalty filing at entry 455. Related MDL entries carry the 4:22-md-03047-YGR caption.

CourtListener returns HTTP 403 to the plain fetch tool. The browser session reaches it normally.
The docket page paginates; `?order_by=desc` puts the newest entries on page 1.

Working query shape, which took several attempts to get right:

```
https://www.courtlistener.com/?type=r&q=&court=cand&docket_number=4%3A23-cv-05448
   &entry_date_filed_after=08%2F05%2F2026&order_by=entry_date_filed+desc
```

RECAP does not mirror everything in PACER, so an absent document may be unfetched rather than
nonexistent. Say which.

### 2.2 A trap that produced three false nulls in one hour

Three queries in the first pass returned zero results and **every zero was the query's fault**:

1. `filed_after` on CourtListener filters the **case** filing date, not the docket entry date. On a case filed in 2023 it excludes the whole docket. The correct parameter is `entry_date_filed_after`.
2. A regex written for a two-digit year found nothing on a page that writes `8/18/2026`.
3. A regex anchored to a standalone line found nothing because the dates sit mid-line.

Each zero agreed with a plausible expectation, which is exactly why each was nearly believed.
**Run a positive control against a string known to be present before reporting any absence from
this docket**, and confirm the page actually reloaded: a cached page will return the previous
query's results under a new URL, which happened here and briefly looked like a real null.

### 2.3 Documents to pull, in priority order

| # | Document | What it closes |
| --- | --- | --- |
| 2.3.1 | Entry 540, transcript of proceedings, filed 2026-08-17 | The 200 billion figure and the conflict over its provenance. Reuters and CNBC say it was said at a hearing; NYT attributes it to a court filing. A transcript settles which, and gives the exact words |
| 2.3.2 | Entry 549, Order Governing Trial Protocol, filed 2026-08-18 | The trial structure, including the bifurcation question in 2.4 |
| 2.3.3 | The states' penalty submission | Whether 200 billion is a filed figure, what it covers, and whether it is conditional as NYT reports |
| 2.3.4 | Meta's filing of 2026-08-17 | Reported by one broadcast source as arguing the claims are narrow against an attempted broad referendum. Entry 542 is a bench brief on witness objections; the referenced filing may be a different entry |
| 2.3.5 | The order on Meta's motion regarding Bejar's testimony | Whether Meta sought to exclude him and on what ground. Note the ambiguity in the Reuters sentence: it is unclear whether the allegation is that Bejar deleted messages or that this was Meta's stated ground. One reading impeaches the witness, the other does not |
| 2.3.6 | The Ninth Circuit disposition of Meta's First Amendment motion to dismiss | Single-sourced to NYT. High value, since it bears on the speech constraint that Phase 1.3 also touches |
| 2.3.7 | The four states' remedy list as pleaded | Replaces three partially overlapping journalistic renderings with one document. Includes the reported ask that Meta delete the models trained on unlawfully collected child data, which two sources give independently and which is materially larger than a data purge |
| 2.3.8 | Michigan's withdrawal from the coalition | Sourced only to a local station quoting a spokesperson. Seek the docket entry and the AG office statement |

### 2.4 A new posture fact that no source in the corpus carries

The docket shows motions in limine directed at the **"Advisory Jury Phase Of Trial"** in June, and
Meta filing a **"Supplemental Witness List For Remedies Phase"** on 2026-08-17. All sixteen sources
describe a single undifferentiated trial.

If the proceeding is bifurcated into an advisory jury phase and a remedies phase, then several
claims the corpus carries as facts about "the trial" are facts about **a phase**: its expected
length, who testifies, and what the advisory jury decides. That is the posture-precision error
class this project was burned by once already.

**Do not publish the bifurcation until 2.3.2 confirms the structure.** A witness-list caption is
strong evidence and is not a holding.

### Done when

Each of 2.3.1 through 2.3.8 is either fetched and cited, or recorded as unavailable with the reason
distinguishing "not in RECAP" from "does not exist".

## Phase 3: correct the corpus

Three defects in `docs/research/single-source/`. All were found by the research pass rather than by
`check:distillations`, because that guard proves internal consistency and none of these is an
inconsistency. This is a worked example of the limit stated in the vocabulary section: no guard
here proves a fact.

- **3.1** `2026-08-17-cnbc.md` presents an established, published finding as the batch's highest-value open question. Correct synthesis output S1 and the `NEEDS-PRIMARY` tags on claims B18, B19 and B20 to point at the ledger and the cached judgment. **Do not delete the entry.** Record that the distillation independently surfaced a fact the project already held, which is a mild positive signal about the method and a strong negative signal about reading a single-source tag as a research queue.
- **3.2** Add the dedupe rule to `docs/research/single-source/README.md`: a `NEEDS-PRIMARY` tag is a statement about the source document, never about the repository, and must be checked against the existing record before it becomes work.
- **3.3** Add the three false nulls from 2.2 to that README as a dated live instance. `CLAUDE.md` already teaches the positive-control rule; this pass is evidence that it recurs under time pressure, three times in one hour, and that each null agreed with an expectation.

**Guard impact:** none of 3.1 through 3.3 changes a claim ID, a cluster or a synthesis word count,
so `npm run check:distillations` should stay green throughout. If it goes red, the edit changed
more than intended. Note that editing a Step 6 synthesis **does** change its measured word count
and therefore its declared compression ratio, so 3.1 requires updating both numbers in that file's
Step 9.

## Phase 4: ledger-first re-seed, and publish

Reached only once Phases 1 and 2 have produced primary sources. Order is fixed: **ledger first,
verified against a primary, then the curated page on a dated pass.**

### 4.1 `docs/distillations/mdl-3047.md`

- Flip the trial claims from scheduled to occurred. Claim 14 currently states openings begin August 18; that is now past.
- Close the open Tension at claim 22, which records that the number the states will actually seek is **not established** in the reviewed record. Phase 2.3.1 or 2.3.3 closes it. This is the single most satisfying item in the plan: the ledger predicted its own gap and named it.
- Add the trial-structure claims: bifurcation if 2.3.2 confirms it, the advisory jury composition, the first witness.
- Update `as_of` from 2026-07-25 to the pass date.
- Rewrite the TLDR block. Several variants describe the August trial in the future tense, and per the one-consumer rule they are wired verbatim into consumers, so they change together.

### 4.2 Curated pages, same dated pass

`content/lawsuits/mdl-3047.md` and `content/lawsuits.md`. The case file currently says openings are
**scheduled** for August 18.

### 4.3 The policy paper, only if Phase 1.3 lands

If the French decision holds, `content/proposal.md` gains a comparative point in its constitutional
section: two legal systems have now constrained design mandates on expression grounds, which
strengthens the argument that the standard must be legislated rather than litigated. **That is a
deliberate human edit to the argument, not a re-seed**, and should be made as one. The paper is not
generated from anything.

### 4.4 Surfaces no re-seed touches

The lesson `check:surfaces` was built for applies directly. After any status change, check the OG
card components and the FAQ JSON-LD under `src/app/lawsuits/`, which are TSX and which the
ledger-first pass does not edit. That gap is exactly how five surfaces spent three weeks telling
crawlers and social previews that New Mexico's abatement phase was still open. The guard will catch
a stale posture word or an unsupported figure; it cannot catch prose that has quietly gone stale.

### 4.5 The guard gap worth closing in the same pass

`npm run check:quotes` does **not** cover three ledgers, because no allowlist has been authored for
them: `mdl-3047`, `california-state-bellwethers` and `tennessee-v-meta`. The script names them on
every run so the gap stays visible.

Phase 4.1 adds quoted spans to exactly one of those three. **Author the `mdl-3047` allowlist as
part of this pass**, which requires caching whatever primary documents Phase 2 obtains into
`docs/distillations/sources/` and registering the ledger in the checker. That converts the largest
unguarded ledger into a guarded one at the moment it acquires the most new quotations.

### Done when

The ledger, the case file and the hub agree; `as_of` is current; the TLDR variants match their
consumers verbatim; and every guard below passes.

---

# Part IV: verification, risks, exclusions

## Verification at every close

```bash
npm run check:distillations   # the corpus stays internally consistent
npm run check:ledgers         # verbatim TLDR variants reach their consumers
npm run check:quotes          # quoted spans verbatim against the caches
npm run check:surfaces        # share cards and structured data vs the record
npm run dates && npm run check:dates
npm run lint && npm run build
```

Plus the house-style sweep, which needs one exact codepoint per pattern under the C locale because
the naive bracket-class grep over-reports badly on macOS:

```bash
LC_ALL=C grep -rn --exclude-dir=sources --exclude-dir=reviews -e $'\u2014' -e $'\u2018' -e $'\u2019' -e $'\u201c' -e $'\u201d' src/ content/ docs/ *.md
```

The escape form above is deliberate and is equivalent to the literal characters under bash
4.2+ and zsh. **Do not paste the literal codepoints into any file under `docs/`.** CI runs this
sweep with `--exclude=CLAUDE.md` only, because that file documents the rule by quoting the
characters and so always self-matches. A second self-matching file turns CI red, which is exactly
what the first draft of this plan did.

Merging is what deploys. `main` is protected and takes pull requests, not direct pushes.

## Risks and traps specific to this work

- **Openings are argument, not evidence.** Internal documents characterised by counsel in an opening are two removes from the record. Publish as "the states told the court", never as what the documents say. This applies to every quotable phrase the corpus captured on August 18.
- **Verbatim is not attribution.** `check:quotes` proves a span exists in a cache; it cannot tell you who said it. See the 2026-07-24 defect in Part I.
- **Auto-captions and stenographic captions are not quotable at all.** Five corpus items have no artifact except a machine or live-steno transcript with demonstrated failures on names, numbers, and in one case the identity of the parties: one transcript states that the *defendants* are seeking penalties. Nothing from those files reaches a page as a quotation.
- **The 1.4 trillion figure has four referents** across the corpus: Meta's own penalty ceiling, the states' present demand, a superseded initial ask, and Meta's market capitalisation, which is close enough in magnitude to be confused with the first. The site's published framing traces it to Meta's own filing and is the best supported of the four. Both a public broadcaster and a hostile editorial board got it wrong in the same direction from opposite politics, which is evidence the error is structural. **Do not let a new source's phrasing quietly change it.**
- **Event date is not coverage date**, and this batch is dense with the error. One outlet previewed "Tuesday" on Monday; another reported it as having happened. One editorial's photo caption says the trial began Monday while its body says Tuesday.
- **Punctuation that is not in the source goes outside the closing quote.** A period inside a quotation is a claim that the source's sentence ended there. Four spans in another ledger drifted exactly this way while looking perfectly ordinary.
- **A non-English source is translated, not quoted.** If any Phase 1 item lands in French, the quoted span in the ledger is the original-language text so the checker can verify it, with the English beside it labelled as a translation. On reader-facing pages, paraphrase and cite the paragraph number.
- **Do not regenerate `content/lawsuits.md` from `docs/proposals/2026-07-15-the-social-media-addiction-lawsuits-explained.md`.** It is superseded, its frontmatter says so, and regenerating from it would revert months of ledger-first corrections.

## What is deliberately not in this plan

- **The three commentary videos and the two Meta AI items** excluded from the broadcast batch. They sit four removes from the record and would file next to the wire-service distillation. If the project ever wants to study how the trial is narrated to large audiences, that is a separate corpus with its own output goal and its own directory.
- ~~**The attorneys general press conference**, still unobtained.~~ **OBTAINED 2026-08-20 and no longer excluded**, by hosted ASR on a **different recording of the same event**. This bullet was the second of two places this file described that item, and it was missed when the other was corrected on 2026-08-18, which is the same one-fact-two-homes defect the audits below keep naming. What it said is also wrong twice over: the 1 hour 47 minutes was the live stream and the published archive is 23:26, and the official channel's version **omits the entire Q&A**, which is where the answer was. See the third addendum.
- **Any change to the scorecard.** The seven brake-integrity criteria are held in lockstep with section 3 of the policy paper, and there is an open revision proposal. Nothing in this research bears on them, and the standard moves only when the paper does.

---

# Part V: what actually happened

Written 2026-08-18 after execution. Parts I to IV are left exactly as approved so the plan's
predictions can be graded against the outcome. This part is the record.

Merged as PR #59, commit `cd05039`, all three CI jobs green.

## The scoreboard against the plan's own predictions

| The plan said | What happened |
| --- | --- |
| The New Mexico material would be the largest `ESTABLISHED` block | **Correct.** It was, and one of its claims was the corpus's self-declared top lead |
| Phase 2 would shrink after the dedupe | **Correct.** 41 of 112 stayed genuinely open, collapsing onto roughly six documents |
| Do not publish the bifurcation until an order confirms it | **Vindicated.** No order confirms it. Had it been published on the strength of the docket captions, the site would have asserted a trial structure the record does not establish |
| Watch the posture on the French decision | **Vindicated twice over.** The posture was right in the coverage, and the *reasoning* was not, in a way that reverses the inference built on it |
| Editing a Step 6 synthesis changes its word count and ratio | **Correct, and the guard caught it** within seconds of the edit |
| Phase 1 was "the cheap externals" | **Half right.** They were cheap to fetch and three of four were wrong enough to need rewriting |
| 4.5 called `mdl-3047` "the largest unguarded ledger" and said registering it converts it "at the moment it acquires the most new quotations" | **Right, and it undersold itself.** Registration was worth more than the plan claimed: closing all three remaining ledgers caught six defects and one bad cache, and every single one of them was invisible by reading |
| Part IV listed the guards and what each does not prove | **The list was correct and incomplete.** No entry said that the guards' own coverage numbers were unguarded prose, which is what drifted three times. That is now closed |
| The plan named the Ninth Circuit item its highest-value single open lead | **Right about the value, wrong about the subject**, because its source was. It was one fetch away on a docket this project already reads |

## The findings, ordered by how much they change

### 1. The $200 billion figure does not mean what the coverage says

The states' reply on penalty and disgorgement charts (Dkt 473, 2026-07-13) uses "$200 billion" for
**Meta's 2025 revenue**, cited to Meta's own Form 10-K, in a passage about the scale at which
deterrence has to operate. The same filing says the AGs will present their final requests for
monetary relief at trial and do not seek double recovery.

Four outlets reported that number as the states' demand. Two placed it at a hearing in the week of
August 10; one attributed it to a court filing.

**The site publishes neither reading**, states what the filings show, and names the transcript
(Dkt 540, not mirrored in the free archive) as the document that settles it. Recorded as ledger
claims 22a to 22c and as an open Tension.

**Why this matters beyond one number.** It is the *same defect* as the $1.4 trillion error this
project already documents, running the other way. There, the defendant's exposure estimate became
the plaintiffs' demand. Here, a revenue figure became a penalty. Two different numbers, two
different directions, one mechanism: a large dollar amount in a filing gets attached to whichever
party the story is about. That is now a documented pattern in this litigation's coverage, not a
one-off.

### 2. France argues for calibration, not against regulation

Decision 2026-911 DC struck article 1 of the minors-protection law on freedom of expression grounds.
The reasoning, at paragraph 17, is that the legislature could not institute a prohibition **of
general scope**, imposed without regard to the individual minor's situation or to the risks
specific to each service. **The defect was bluntness, not the attempt.**

The corpus had inferred from the BBC summary that the speech objection to design mandates had
succeeded in two legal systems. **That inference is wrong and was dropped rather than published.**

What the two decisions say together is better for this project than what the inference claimed. New
Mexico declined feed-design remedies because a court is the wrong instrument and because ordering
one firm while its competitors are absent is unfair. France struck a legislature's answer because it
was undifferentiated. The workable instrument is calibrated, service-specific and market-wide, which
is a description of a standard and of neither a lawsuit nor a ban. It arrives from a jurisdiction
with no Section 230 and no First Amendment, which is what makes it worth having.

Added to section 4 of the policy paper as a deliberate edit to the review copy, body regenerated.

### 3. Three of four "cheap" externals were mischaracterised in the coverage

- **KOSA** was ordered to be reported favorably on **August 5**, not "last week", and with an amendment in the nature of a substitute, so the reported text is not the introduced text. No vote tally appears in the action record, so "bipartisan" is not publishable from it. The bill's 76 cross-party cosponsors are evidence about the bill, not about the committee vote.
- **Meta's 10-Q** reports **$2.40 billion of charges related to legal proceedings**, an accrual. Both outlets called it money spent on legal expenses. The accurate version is worse for Meta: an accrual is the company's own estimate of what it expects to lose.
- **Australia** imposes a platform duty to take reasonable steps, with carve-outs and a civil penalty, not a ban on users. For a project proposing a duty-shaped standard, describing the closest existing analogue as a ban would misrepresent it.

### 4. The court's own minutes settled three things the press disagreed about

Dkt 550 records that trial was held on 2026-08-18 for 5 hours 17 minutes, that the states' first
witness was Arturo Bejar, and the names of counsel. One outlet in the corpus rendered the deputy
attorney general's first name with an h. A court record outranks a newsroom.

### 5. A fifth dedupe outcome had to be invented

The plan specified three: `ESTABLISHED`, `OPEN`, `SUPERSEDED`. Execution needed **`CACHE`**, for a
claim that is open against the ledgers but closable from a primary **already sitting in this
repository**, with no external research at all.

Four New Mexico age-assurance claims landed there. The ledger's own coverage note says the Age
Assurance section is "not yet distilled", while the judgment containing it has been cached since
2026-08-13. Reading it confirmed all four and surfaced something none of the coverage carried:
at paragraph 142 the court adopted the age-assurance relief **proposed by Meta**, describing it as
far from ideal or sufficient but most appropriate given its lack of jurisdiction over other parties.

**A court calling the child-safety remedies it is granting inadequate, on the record, is stronger
evidence for this site's thesis than the refusal at paragraphs 160 to 166.** The refusal says a
court cannot reach the feed. This says that what a court *can* reach, it knows is not enough.

That is now the highest-value unpublished item this project holds. It is not in this pass because
distilling it belongs to the New Mexico ledger, not the MDL one. See the follow-up plan below.

## Insights about the method, which are the durable part

### The `NEEDS-PRIMARY` tag was doing two jobs and should do one

Of 112 tagged claims, **22 were never research at all**: reporter framing, drafter inference,
market commentary, editorial assertion, expectations about the future. They are correctly excluded
from publication, and they should never have carried a tag that reads like a work queue.

The tag conflates "this document did not establish it" with "someone should go and establish it".
Those are different, and only the second is a task. The corpus README now carries the rule.

### A hit is not confirmation, and this is now as documented as the null rule

`CLAUDE.md` teaches that a search returning nothing is a claim about the query. This pass
establishes the corollary in both directions. The keyword dedupe was built, run, and **rejected**:
five of its already-in-repo verdicts flipped when read in context, because a corpus dense with
dates, dollar figures and party names produces plausible false hits at a high rate.

### Five false results in one session, every one of them agreeing with expectation

Four nulls and one stale cache, recorded in the corpus README with mechanisms:

1. `filed_after` on CourtListener filters the case date, not the entry date.
2. A date regex written for a two-digit year against a page writing `8/18/2026`.
3. A regex anchored to a standalone line where the dates sit mid-line.
4. A search for "witness" in a filed **Witness List** returning zero, because the PDF has no text layer: 17 pages, about 1,200 characters, all CM/ECF header stamps. Same failure class as the GPO TIFF problem already documented for hearing transcripts.
5. A browser navigation returning the previous query's results from cache under the new URL, with the old query still in the page title.

Number 4 is the instructive one, and only the positive control caught it. A document titled Witness
List containing no instance of "witness" is a broken extraction, not a finding.

### Verifying a fact and publishing it are different steps, and this plan only had the first

Phase 1 verified four externals against official sources. **No phase said where any of them goes.**
The result was that three sat verified and unused until a later re-read went looking, and one of
them, the New Mexico age-assurance material, was the highest-value item in the entire exercise.

The plan had a research pipeline and a publication pipeline and did not connect them. A future plan
of this shape should carry, for every claim it sets out to verify, **the surface that will carry it
if it checks out, or an explicit statement that there is not one yet.**

That second half matters as much as the first. Two of the four are deliberately unpublished: KOSA
because the policy paper has no section about federal bills, and Meta's quarterly legal charge
because the paper has no deterrence-cost argument. Both are true, both are primary-sourced, and
**neither has anywhere to live.** Publishing a fact into a page that was not arguing anything it
bears on is how a site accumulates trivia with citations.

**Verified is not the same as publishable.** The difference is whether the site has somewhere for
it to live, and that question is answerable before the research, not after.

### A claim about a gap needs the same reading pass as a claim about a source

The coverage note added to the New Mexico ledger during Phase 4 asserted that the ledger did not
carry the age-assurance claims. The reasoning was already there, at claims 41 to 48, and the finding
the note said to add was already claim 48. Only the enumerated remedy list was genuinely missing.

This is the `NEEDS-PRIMARY` error one level up. There, a tag about what a *document* did not
establish was read as a claim about what the *repository* had not established. Here, a claim about
what the repository lacked was written without reading what it already held. Same shape, same cost:
work proposed against a gap that was smaller than stated.

### A correction is written against a moment, and it does not know when its moment ends

**Three audits, three passes, and the same defect class each time**, which is what makes it worth a
rule rather than a fix. Not one instance was a factual error about the record. Every one was a
**true sentence that a later pass falsified and nobody re-read**:

- `(e.1)` said Dkt 455 "is not cached", true for the hour between the subsection's creation and the cache landing, published either way.
- The New Mexico Tensions section said Age Assurance was "not yet distilled" three lines under a bullet saying it had been.
- The `check:quotes` registry comment explained why the lawsuit ledgers were absent, hours after they stopped being absent.
- This plan's frontmatter demanded a dashboard action the sweep had already performed, which is the frontmatter contradicting Part V **for the second time**, after PR #63 existed to fix the first.
- The repo's front-page README described eight-of-eleven coverage a day after it was eleven of eleven.

**Append-only correction is the right discipline and it is only half a discipline.** Landing a
correction as a new dated block preserves the record, which is why this project does it. But the
pass that lands it has to **re-read what it contradicts**, or the document carries both readings and
the reader picks. The mechanical version, which found most of these: **after any pass that changes a
fact's status, grep for the fact's old status words in every file that names it.**

### One number, one home, and everything else points at it

The span count drifted **three times in one day** across four prose homes. Twice it was written in
the same session as the sentence "a number no tool recomputes will drift, and prose is where it
drifts", which is about as clean a demonstration as a project gets that knowing a rule is not
keeping it.

It is now guarded in **both directions**, and the second direction is the one that was missing.
`sources/README.md` declares the count and `check:quotes` asserts it. `README.md`,
`CONTRIBUTING.md` and `CLAUDE.md` are asserted to contain **no span count at all**, because
asserting a number in five places does not make five guards, it makes five things to forget. The
first run of that rule failed on two files, one of which had been "fixed" by hand an hour earlier.

**`docs/plans/` is exempt and must stay exempt.** Those are dated records, and "took coverage 404 to
432" is a true sentence about July that a guard updating itself would vandalise. A checker that
rewrites history to stay green is worse than no checker.

### A citation is not a cache, and the gap between them is where defects live

This is the sweep's most transferable finding. Meta's Dkt 455 is the source of the **$1.4 trillion
figure, the most-quoted number on this site**. The ledger had cited it, with a docket number, a
filing date, a RECAP URL and a note that it was "verified in the RECAP PDF on 2026-07-16". Everything
about that citation was true. **The PDF was not in the repository**, so nothing could re-check it,
and it held two defects: an exhibit quoted by a title read off the **docket listing** rather than
from the filing, and the filing's sentence-initial capital silently lowercased to fit the ledger's
own sentence.

Both had been on the site for a month. Both are invisible at reading size. Both were found within
seconds of the file landing in `sources/`.

The same thing happened three more times in the same afternoon: caching the LA Superior Court notice
caught two more, in a ledger of four spans. **Four caches, six defects, and not one of them was
found by reading.** The rule that follows is not "cache more"; it is that **a citation records where
you looked, and a cache records what you saw**, and only the second can be checked by anyone,
including your future self.

### Guarding thinly is more honest than not guarding

`california-state-bellwethers` is now registered at **four spans**, because the Los Angeles Superior
Court has no free archive and the Court of Appeal portal blocks automated lookups. The court's own
public notice is the only primary this project can hold for that entire proceeding.

Four spans looks like a rounding error and the number is the point. Before, the checker printed
"NOT checked, no allowlist authored", which reads as **undone work**. Now it prints "PARTIALLY
checked, only section (a)", which states **the shape of the evidence**: this case is the site's most
coverage-dependent record. It is also the case where the project once published "upheld on appeal"
about a verdict no appellate court had reviewed. A guard that measures four spans and says so is
worth more than a to-do that implies eighty are coming.

### An allowlist and a known deviation say opposite things, and the difference is not cosmetic

Registering Tennessee produced this repository's first case of a **cache** being at fault rather than
a ledger. The complaint's extraction carries the tagged-PDF artifact `Lbl` 364 times, and at
paragraph 411 it lands mid-word with the page footer beside it, so a perfectly faithful quotation
cannot verify.

The tempting fix was an allowlist entry. **That would have asserted something false.** An allowlist
entry means "this span is deliberately not from the cached source"; this span is from it. It went to
`KNOWN_DEVIATIONS`, which means "from the source and unverifiable, here is why, here is how to
close it". Keeping those two apart is what stops an allowlist becoming the place defects go to hide,
which the FTC allowlist's own header already warns about.

It is also a **sixth failure mode** beside the five documented normalizations, and unlike the other
five no normalization reaches it, because the interposed text is real page furniture. Grep `^Lbl` on
any new tagged-PDF cache, the way the TIFF marker gets grepped on a new GPO transcript.

### A single-sourced lead can be wrong about what KIND of thing it is

The plan chased "the Ninth Circuit disposition of Meta's **First Amendment** motion to dismiss",
listed as the highest-value single open item, single-sourced to one newspaper. The opinion exists,
it is published, and it is about **Section 230 and appellate jurisdiction**. It records in terms
that "Meta does not identify any constitutional interests at stake."

The posture-precision rule this project already keeps is about *stage*: announced is not filed is
not affirmed. This is a level above that. The lead was not wrong about how far along the ruling was;
it was wrong about **what the ruling was about**, and a re-seed that trusted it would have published
a First Amendment holding that does not exist. Both errors are cheap to make and only one of them is
covered by the existing rule.

The fix is the same as always and worth restating because it kept paying: the document was **one
fetch away**, at a predictable URL, on a docket this project already reads.

### A field that disagrees with a config file is a question, not a finding

While diagnosing the deploy, the Railway service manifest reported `builder: RAILPACK` with
`nixpacksConfigPath: null`. Taken at face value that is a serious finding: `nixpacks.toml` would be
dead config, and the Node 20 pin that CI's build job exists to mirror would not be applied, meaning
CI verifies an environment production does not have.

It is false. The last successful build's log opens `using build driver nixpacks-v1.41.0` and prints
a plan whose setup phase reads `nodejs_20, git`. The manifest reports **dashboard-level service
settings**, which `railway.toml` overrides at build time, exactly as it does for the build command,
start command and healthcheck, all three of which the same manifest also reports as null while
plainly working.

This belongs beside the two rules this repository already keeps. A search returning nothing is a
claim about the query. A search returning something is not confirmation. And now: **a configuration
field is a claim about a layer, not about the system**, and the only thing that settles which layer
won is the artifact the system actually produced.

### Registering a ledger in `check:quotes` immediately earns its keep

`mdl-3047` is now registered with four cached docket documents, taking the unguarded ledger count
from three to two. Registration caught two spans on its first run: claim 37 was quoting **docket
entry captions**, which are text on the docket listing and not in any document. The ledger was
changed to describe them instead. The checker's own instruction, that the record is never edited to
match the ledger, was followed.

## The one thing that is not done

**Nothing in this plan is live.** The cause was diagnosed from the Railway deploy queue on
2026-08-18 and it is **not** what this file first recorded. The first diagnosis is corrected below,
because how it went wrong is worth keeping.

### What is actually happening

Deployment records map one to one onto the merge times:

| Commit | Merged | Deployment | Status |
| --- | --- | --- | --- |
| `c9b50b0` (PR #57) | 14:40 | `84a05b9e` | **SUCCESS**, healthcheck passed |
| `483cb82` (PR #58) | 15:01 | `f4ff3f51` | **BUILDING since 15:01, zero build log lines** |
| `cd05039` (PR #59) | 15:23 | `02808871` | QUEUED |
| `ba9bbf5` (PR #60) | 15:35 | `e6d580ef` | QUEUED |
| `1c8d4cf` (PR #61) | 15:43 | `4f3315f2` | QUEUED |
| (redeploy from source) | 15:44 | `8f5ed7ba` | QUEUED |
| `f758ee7` (PR #62) | 15:56 | `3a44fc4d` | QUEUED |

**A redeploy was authorised and run** (`railway redeploy --from-source -y`, chosen over plain
`redeploy` because the latter re-runs the last successful build and would ship PR #57's content).
**It did not help.** It queued behind the wedge as a sixth deployment and changed nothing else.

**The CLI cannot clear this.** `railway down` removes "the most recent deployment", which is now a
queued deploy carrying current content, not the wedged one. There is no cancel or abort subcommand;
`railway deployment` offers only `list`, `up` and `redeploy`. **Cancelling build `f4ff3f51`
specifically requires the Railway dashboard.**

> **Corrected later the same day, and the correction is in the follow-up sweep below.** The
> paragraph above surveyed the CLI's *subcommands* and stopped there. `railway api` reaches the
> public GraphQL API, the API carries a `deploymentCancel` mutation, and the wedged build was
> cancelled with it, no dashboard involved. The claim was a null result over the wrong search
> space: "the CLI has no cancel subcommand" was true, "the CLI cannot clear this" did not follow.
> Left in place because the reasoning error is the useful part.

**The queue is head-of-line blocked.** One build wedged before its builder emitted a single line,
and everything behind it waits, including the content change this plan exists to ship. A normal
build here takes 45 seconds to 2 minutes and produces a full nixpacks log ending in a healthcheck.

**The stuck build carries a single added markdown file.** PR #58 is the plan document and nothing
else. That is the least demanding change this repository can produce, which is the strongest
available evidence that the fault is in Railway's builder and not in anything about this repo.

### The first diagnosis was wrong, and the way it was wrong is instructive

This file originally recorded that PRs #57, #58 and #59 had all failed to deploy, inferred from
`/api/health` reporting `manifestGenerated: 2026-08-14`.

The health endpoint was telling the truth; **the inference drawn from it was not**. That field
changes only when `content-dates.json` changes, and of those three pull requests only #59 touched
it. A perfectly successful deploy of #57 leaves the field reading 2026-08-14. The observation was
consistent with the conclusion and also consistent with the opposite, and it was treated as
diagnostic anyway.

**This is the same failure this repository documents twice already, in a third costume.** A search
returning nothing is a claim about the query. A search returning something is not confirmation. And
now: **a field that would not have changed under either hypothesis cannot distinguish between
them.** The deploy queue was the evidence, and it took one command to read.

The earlier hypothesis in this file, that a transitive dependency may have moved under a caret range
because `railway.toml` deletes the lockfile before install, is **much less likely** and should not
be chased first: #57 built successfully from the same `package.json` twenty minutes earlier, and the
stuck build adds one markdown file.

### What to do

Cancel or retry the wedged build so the queue drains. `railway deployment redeploy` exists, and
this repository holds the linked project. **That is an action on production infrastructure and was
deliberately not taken here without a decision from the maintainer.** Once the queue drains, the
content lands with no further work: the commits are already on `main` and CI is green on all of
them.

Verify afterwards with `/api/health`, whose `manifestGenerated` should read 2026-08-18, and by
checking that `/lawsuits/mdl-3047` names Arturo Bejar.

## Second publication pass, 2026-08-18

A re-read of this plan asked what else was publishable. Four verified primaries were sitting
unused, which is a gap in the plan: Phase 1 verified them and no phase said where they go.

### Published

- **The New Mexico age-assurance remedies**, follow-up 2 below, now distilled at ledger section (g.2), claims 49 to 54, and carried onto the curated case page as a dated pass. The strongest of them is claim 54: the court ordered nine measures, all Meta's own proposals, and recorded that this relief was "far from ideal or sufficient" because better options were outside its jurisdiction. **A refusal shows a limit; a grant labelled inadequate shows the same limit from the inside.** That is a stronger argument for writing the standard than the refusal at claims 36 to 38, and it is now on the page.
- **Australia**, added to section 4 of the policy paper beside France. It is the closest existing analogue to this paper's own proposal: a duty on operators to take reasonable steps, with a defined scope and carve-outs, rather than a prohibition on users. It demonstrates that the calibrated, operator-facing form is drafts-able and enactable, which is the objection most often made to it.

### Verified and deliberately NOT published, with reasons

- **The Kids Online Safety Act** advancing out of committee on 2026-08-05. Verified against the congressional record. **The policy paper does not mention KOSA anywhere**, so there is no gap to fill, and a bill ordered to be reported is weak evidence: most die there, the reported text is a substitute nobody here has read, and the fact dates fast. Adding it would be a stray fact wearing a citation.
- **Meta's $2.40 billion of charges related to legal proceedings** in Q2 2026. Verified against the Form 10-Q. It is a genuinely useful deterrence datapoint and **there is no section it belongs to**: the paper has no deterrence-cost argument, and the lawsuits hub tracks awards rather than defence economics. A quarterly figure with no home would need refreshing every quarter to stay true.

Both are recorded in `docs/research/primary-findings-2026-08-18.md` with their primaries, so a future
pass that builds the right section can pick them up without redoing the work. **Verified is not the
same as publishable**, and the difference is whether the site has somewhere for it to live.

### A correction this pass produced

The coverage note added to the New Mexico ledger on 2026-08-18 said that ledger did not carry the
age-assurance claims, and that the paragraph 142 finding should be added with them. **The reasoning
was already there**, at claims 41 to 48, and the paragraph 142 finding was already claim 48. Only
the enumerated remedy list was missing.

That note is a worked example of the failure it was written about. It made a claim about what this
repository lacked without reading what the repository already held, which is the same error, one
level up, as reading a `NEEDS-PRIMARY` tag as a work queue. **A claim about a gap needs the same
reading pass as a claim about a source.**

## The implementation audit, 2026-08-18

A code review of this plan's own implementation, run after everything above had merged. It found
eight things. **None of them is a factual error in the published record**, which is the part that
matters: every quoted span verifies, every posture is right, and the $200 billion finding survives
re-reading against the cache. What it found was the shape this project keeps hitting, drift that
looks exactly like correctness.

### The two that reached a reader

- **The hub kept a `Scheduled:` label on an event that had happened**, in the same sentence that
  said the proceeding opened on August 18. `/lawsuits` is the page that ranks; the re-seed had
  updated the case file and left the hub half-done. The page's own label vocabulary defines
  `scheduled` as "a current court date, subject to change", so the contradiction was in its own
  terms. **No guard could see it**: `check:surfaces` is scoped hard to share cards and structured
  data, and its posture vocabulary does not include "scheduled". That scoping is still right, and
  the residue is that hub prose has no automated backstop at all.
- **The ledger asserted both tenses at once.** The trial-flip pass corrected claim 14 and left
  claim 25, so `/distillations/mdl-3047` said openings "were delivered on August 18" and, eight
  claims later, that the case was "headed to trial" and "begins with jury selection August 12". The
  section heading above it read "Current status (as of 2026-07-16)". Fixed, and the second heading
  lettered `(g)` is now `(h)`: the ledger had two `(g)` sections and no `(h)`, which a reader saw.
- **The MDL ledger's Reader summary was never re-seeded at all**, and it is the first paragraph a
  reader meets on `/distillations/mdl-3047`. It said the claims "are headed to trial", that "a first
  trial starts in August 2026", and closed "(Everything below is current as of July 16, 2026)" under
  a frontmatter `as_of` of 2026-08-18. The trial-flip pass rewrote the TLDR block and claim 14 and
  stopped there. A sweep of the other ten ledgers' reader summaries found no second instance.

### The one that mattered most, and it is this script's own documented blind spot

**`check:quotes` was scoped past the most consequential new claims in the pass.** The MDL ledger was
registered with four cached documents and scoped to section (i), where the new trial-day quotes
were. Claims 22a to 22c, in section (e), quote Dkt 473, whose cache is in that very list, and were
verified by nothing. That is the exact defect `CLAUDE.md` records from 2026-08-14, when the FTC and
Bits of Freedom ledgers were scoped to `Quotes` while their Claims sections quietly absorbed four
punctuation errors. **Scope to what the cache covers, not to where you expect the quotes to be.**

The claims are now under their own `(e.1)` subsection, which is scoped in. Section (e) proper still
cannot be: claims 19 to 21 quote Meta's Dkt 455, which is not cached, and widening to the whole
section produces eight red lines that are not fidelity defects. **All spans verified on the first
run after widening**, so this was an unguarded surface rather than a defect. It would not have
stayed that way.

### The census nobody could check

The corpus tag counts published in Part I were wrong in all four cells and summed to a hundred
short. `check:distillations` now recomputes them against a declared table in the corpus README, in
the same two-directional shape as the orphan check, and it is fault-injected on three faults
including the exact 112-for-135 miscount. The dedupe record's own denominator is corrected, and the
nine claims it never mentioned are classified.

Two vocabulary leaks came out of the same thread and are closed: three claims carried the literal
tag `ESTABLISHED`, a dedupe outcome, in an actionability column, while a fourth that depends on
them was left at `NEEDS-PRIMARY`; and the dedupe record classifies one group with
`ATTRIBUTE-ONLY`, which is a corpus tag rather than one of its own five outcomes. **Mixing two
vocabularies is how a count stops being countable**, which is why the census check needed the
retag before it could reconcile.

### One more dating miss, in the other ledger

The New Mexico ledger gained six primary-verified claims on 2026-08-18 and kept `as_of: 2026-08-13`,
while the curated page it feeds said "Updated August 18, 2026". `as_of` records the date a ledger's
record was last verified, and six claims had just been verified against the cached judgment. Bumped.
Nothing downstream moved: the agent card derives its own `as_of` from the newest ledger, which was
already the MDL one.

### The gap the audit did not close

The dedupe record cannot be mechanically recounted, and that is a property of the document rather
than a defect to fix: it classifies some claims per-row in tables and others by a hedged prose
heading ("Mostly `NOT-RESEARCH`"). A parser has to over-assign or under-assign; one reaches 115 of
135. Its per-outcome counts are now labelled as the reading estimate they are, and the mechanical
number lives in the corpus README where a checker asserts it.

## The follow-up sweep, 2026-08-18 evening

Every follow-up below was worked rather than left. Four closed, one was found and turned out not to
be what its lead said, three are confirmed still open with the evidence for saying so, and the
deploy has a cause at last.

### The deploy was never a repo problem, and now it has a name

`railway api` exposes the public GraphQL API, which the CLI's own subcommands do not reach, and it
carries a `deploymentCancel` mutation. The build wedged since 15:01 was cancelled that way; it is
gone from the queue. **The queue still does not drain**, and querying a queued deployment says why:

    "queuedReason": "Deployment queued due to upstream GitHub issues"

**Railway cannot fetch from GitHub.** That explains every symptom at once: a build that ran for
nearly two hours without emitting one log line, deploys that queue and never start, and a repo whose
CI is green on every commit. Nothing here is fixable from this side, and **each redeploy only
lengthens the queue**, so stop triggering them.

One thing was checked and found NOT to be a problem, which is worth recording because it looked
like one. The service manifest reports `builder: RAILPACK` with `nixpacksConfigPath: null`, which
would mean `nixpacks.toml` is dead config and the Node 20 pin that CI's build job exists to mirror
is not applied. **It is applied.** The last successful build's log opens `using build driver
nixpacks-v1.41.0` and prints a Nixpacks plan whose setup phase reads `nodejs_20, git`. The manifest
shows dashboard-level service settings; `railway.toml` overrides them at build time, exactly as it
does for the build command, start command and healthcheck, all three of which the same manifest
also reports as null while plainly taking effect. **A field that disagrees with a config file is a
question, not a finding**, and the build log is the positive control that answers it.

### The Ninth Circuit opinion exists, and it is not a First Amendment ruling

Follow-up 5 had sat single-sourced to one newspaper and "never located". It is **docket entry 541**,
a **published** opinion filed **2026-08-10**, eight days before the trial opened.

It is about **Section 230 and appellate jurisdiction**, not the First Amendment. The panel dismissed
Meta's and TikTok's appeals, and the states' conditional cross-appeals, for lack of jurisdiction,
holding that Section 230 is "a defense to liability, not immunity from suit" and so an order denying
it fails the collateral-order test. Being published, that reading now binds the circuit.

**The opinion records that "Meta does not identify any constitutional interests at stake."** So the
lead's framing was wrong in the way this project's evidence rules exist to catch, and the ledger
says so rather than quietly restating it. Whether a separate appellate ruling on Meta's First
Amendment arguments exists is not established; what is established is that this is not it.

Two things fell out of it that no one was looking for. A footnote denies **Meta's emergency motion
to stay the trial** as moot, which is a second refusal to stay, in a second court, distinct from
Pretrial Order No. 6. And the opinion **describes the district court's Section 230 rulings
directly**, which closes most of a Tension open since 2026-07-24: the hub had been calling the
narrowing background because nothing in the ledger anchored it. A federal appellate court's account
is a better anchor than coverage and a weaker one than the orders, and the ledger now says exactly
that. The order numbers are still missing.

Now claims 38 to 42 of the ledger, section (j), with the opinion cached and all seven of its quoted
spans verifying on the first run.

### Three that are still open, and the evidence for saying so

- **The trial transcript, Dkt 540, is still not in RECAP.** Probed 2026-08-18 along with entries 541 to 553. Positive control: Dkt 550, known present, returns HTTP 200 and 133 KB, so the query works. 540, 542, 543, 551, 552 and 553 return 404. **The $200 billion Tension stays open**, and it stays open for the reason the ledger already gives.
- **Nothing establishes the bifurcation.** No order addressing trial structure appeared in that same probe. Claim 37 stands as written.
- **Michigan's withdrawal is still sourced to one local station.** Michigan is absent from the Ninth Circuit caption, and **that is not evidence**: the caption is from an appeal docketed in 2024 and reflects the parties then. Recorded as checked, not as found. This is exactly the shape of a hit that is not confirmation.

### The press conference has not failed at all, and calling it a failure twice was the error

Retried with `yt-dlp`. YouTube advertises `en vtt` **automatic** captions for the recording and
then serves no fragments: the run ends `ERROR: Did not get any data blocks` and leaves a
**zero-byte** `.part` file. Unchanged from the first attempt, and the corpus README's instruction
to check file size rather than exit status is what makes that legible.

> **Corrected 2026-08-18, latest, and prompted by a question rather than by a check.** Both this
> heading and follow-up 7 originally recorded a repeated **failure**. The symptom was right and the
> framing was wrong: YouTube reports `live_status: post_live` for this video, so the stream has
> ended and the archive is still being processed, and caption fragments are not served during that
> window. **It is a fetch that is too early, not a fetch that failed.**
>
> The sharp part is where the correct answer already was. The corpus README reasoned its way to it
> on the very first pass, writing "caption generation still in progress on a long recording, not a
> permanent absence". **Two later summaries, both mine, kept the symptom and dropped the
> mechanism**, which flattened a diagnosed wait into an unexplained failure and left the item
> looking like dead research. There is now a one-command, positive-controlled trigger in the README
> so the reasoning cannot be lost again.
>
> **A summary that drops the mechanism turns a solved problem back into an open one.** That is the
> same shape as the stale-correction defect the audits kept finding, running in the other
> direction: not a true sentence that went false, but a true sentence compressed until it stopped
> carrying the thing that made it useful.

Worth noting what it would have been worth if it had worked. Automatic captions are `CAPTION-ASR`,
and this corpus's own rule is that a `CAPTION-ASR` claim is **never** publishable. It would have
been a pointer, useful mainly for asking whether the AGs said "$200 billion" out loud, and then the
transcript would still have had to settle it.

> **Third correction, 2026-08-20, and the mechanism was right for the third time while the
> conclusion was wrong for the third time.** `live_status` did reach `was_live` exactly as predicted,
> and the video then reported **no captions at all**: the advertised track was provisional and did
> not survive processing. So waiting was never going to work, and the diagnosis that made waiting
> look rational was correct about YouTube and irrelevant to the outcome.
>
> **The thing none of the three passes did was ask whether this was the only recording of the
> event.** It was not. The California Department of Justice published 23:26 that ends on the words
> inviting questions; PBS NewsHour published 52:20 of the same press conference including the whole
> Q&A. Every retry above was aimed at a truncated video, and the reason is worth stating plainly:
> **the official channel was treated as the best source, and best was silently read as most
> complete.** Those are different properties. One search sorted by duration would have found it on
> day one.
>
> The transcript answered what this section says only Dkt 540 could: at 32:24 a Reuters reporter
> asked the AGs about both figures, and the answer is now claims 22d to 22h of the MDL ledger. It
> did not need the $200 billion question settled by a hearing transcript after all, because the
> attorneys general answered it at a podium.

## The second audit, 2026-08-18 late

A re-run of the implementation review after the sweep merged, asked the same way: gaps, issues,
missing enhancements. Every guard was green at the start of it, and it still found **twelve stale
statements, most of them written earlier the same day.** None is a factual error about the record;
every one is a true sentence that a later pass falsified and nobody re-read. That is a different
defect class from the first audit's, and it has a name now:

**A correction is written against a moment, and it does not know when its moment ends.** The MDL
ledger's (e.1) intro said Dkt 455 "is not cached", true at 17:00 and false by 18:00, published
either way. The NM Tensions bullet said Age Assurance was "not yet distilled" three lines below a
new bullet saying it had been, because the correction landed as an append and never revisited what
it corrected. The check:quotes registry comment explained why the lawsuit ledgers were absent,
hours after they stopped being absent. This plan's own frontmatter demanded a dashboard action the
sweep had already performed via the API, which is the frontmatter contradicting Part V **a second
time**, after PR #63 existed specifically to fix the first.

The instances, fixed in this pass:

- **Published pages**: the (e.1) intro; the NM Tensions self-contradiction; the MDL coverage note counting "four documents cached" against six; the case file and hub quoting Dkt 473, Dkt 550 and the opinion while their Sources sections listed none of them; the paper's Sources list missing the opinion its section 4 now relies on.
- **Prose counts**: the span count written as 476 in CLAUDE.md, sources/README.md and this plan's own text, stale within hours at 483. **The count now has one declared home, the coverage line in sources/README.md, and `check:quotes` asserts it on every run**, fault-injected on the exact stale-count defect, on the line being absent, and on a wrong ledger count. CLAUDE.md no longer states the number at all, and says why.
- **Records**: the dedupe's Group H still read as the highest-value open item (pointer added, classification kept); primary-findings closed before the biggest find (index addendum, ledger stays the home); the NYT corpus's S4 still presented the First Amendment framing the primary disproved (contested in place, N11/N28 barred from promotion, and `check:distillations` caught the synthesis word-count change within seconds, exactly as Part III predicted for the cnbc file).

**What this changes about method**: an append-only correction discipline needs one more verb.
Landing a correction as a new dated block is right, but the pass that lands it has to re-read what
the block contradicts, or the page carries both. The cheap mechanical version, used here: after any
pass that changes a fact's status, grep for the fact's old status words in every file that names
it. That is how eleven of the twelve were found.

## The third pass, 2026-08-18 latest

The second audit's own lesson, applied once more and immediately productive. Having written that
"a number no tool recomputes will drift", the obvious next question was which documents still
restate one. Two, and they are **the two most-read files in the repository**.

- **`README.md`**, the project's front page, still described `check:quotes` as covering "432 spans across eight of the eleven ledgers" and said the script "names the three it covers not at all on every run". Eleven of eleven had been registered the previous evening. Anyone assessing this project's evidence discipline reads that paragraph first.
- **`CONTRIBUTING.md`** listed **three of the five guards**. `check:surfaces` had been missing for four days and `check:distillations` for one, so a contributor doing exactly what the file says runs 60% of the checks and finds out the rest at review. CI catches it, which is the safety net working and the documentation failing.

Both are fixed, and the rule they broke is now mechanical. `sources/README.md` declares the count
and `check:quotes` asserts it; **`README.md`, `CONTRIBUTING.md` and `CLAUDE.md` are asserted to
contain no span count at all.** Fault-injected in both directions. Its first real run failed on two
files, one of them `CLAUDE.md`, which had been hand-corrected an hour earlier and still carried a
"404 -> 432 spans" historical aside that the rule cannot distinguish from a live claim.

**`docs/plans/` is exempt on purpose.** Those are dated records; "took coverage 404 to 432" is a true
sentence about July, and a guard that edited it to stay green would be destroying evidence to
protect a number.

## Follow-ups, in priority order

> **Migrated 2026-08-18 to `docs/issues/`.** Seven of the threads below now have standing files,
> because a plan is a dated record and its follow-up list stops being read once the plan is
> historical, which is exactly when a long-lived thread still needs a home. The list stays here
> unedited as the record of what this exercise found; the files are where the work is tracked.
> Nothing that belongs to a ledger moved: the transcript at Dkt 540 and the bifurcation question are
> Tensions in `docs/distillations/mdl-3047.md` and stay there.

1. ~~**Unblock the deploy.**~~ **The wedged build is cancelled and the cause is external.** Railway reports `queuedReason: "Deployment queued due to upstream GitHub issues"`, so it cannot fetch the repository. **Wait, do not redeploy**; each attempt adds to a queue that is not being served. Verify when it clears with `/api/health` reading `manifestGenerated: 2026-08-18` and `/lawsuits/mdl-3047` naming Arturo Bejar. If it is still queued after the GitHub incident resolves, that is the point at which a support ticket is warranted, and the ticket should say that the same project built successfully at 14:40 from the same `package.json`. **Note that the Railway CLI session has since expired** (`Unauthorized. Please run \`railway login\` again`), so the first step of any further diagnosis is re-authenticating; the queue state readings in this file were taken before that and are as of 2026-08-18 evening.
2. ~~**Distil the New Mexico Age Assurance section.**~~ **DONE 2026-08-18**, see the second publication pass above. Ledger section (g.2), claims 49 to 54, plus a dated pass on the curated page.
3. **Obtain the trial transcript** (Dkt 540) when it reaches the free archive, and close the $200 billion Tension. Re-probed 2026-08-18 with a passing positive control: still 404.
4. **Confirm or drop the bifurcation** when an order addresses trial structure. Nothing in entries 541 to 553 addresses it.
5. ~~**The Ninth Circuit First Amendment disposition.**~~ **FOUND 2026-08-18**, at docket entry 541 on the trial docket rather than the appellate one, and it is a Section 230 appealability opinion, not a First Amendment ruling. Ledger claims 38 to 42. What remains open is narrower and worth naming: whether any separate appellate ruling on Meta's First Amendment arguments exists at all.
6. ~~**Michigan's withdrawal**, still sourced to one station quoting a spokesperson.~~ **RESEARCHED AND RELOCATED 2026-08-20.** It was **four** states, not one, and they left in **January 2025** over discovery burden, which accounts for the whole 33-to-29 drop. Now claim 17a of the MDL ledger with the unread filings as a Tension there, because once researched it is plainly a question about that record. The Ninth Circuit caption, which proved nothing on its own, became corroboration once there was a dated withdrawal to read it against.
7. ~~**The attorneys general press conference**, still unobtained.~~ **OBTAINED 2026-08-20; see the third addendum. This was the THIRD place in this one file describing this item, after the exclusion bullet and the diagnosis section, and it was the last of the three to be found.** Three homes for one fact, in the file whose central finding is that a fact with more than one home goes stale in the homes nobody re-reads. **What follows is superseded, including its closing sentence that only Dkt 540 could settle the $200 billion question: the attorneys general answered it at a podium on the day, and the answer is claims 22d to 22h of the MDL ledger.** **The `post_live` diagnosis below was right about the mechanism and wrong about the outcome**: on 2026-08-20 the archive finished processing, `live_status` reached `was_live`, and the video then reported **no automatic captions and no subtitles at all**, positive-controlled. The advertised track was provisional and did not survive processing, so waiting is no longer a route. Tracked in `docs/issues/2026-08-18-ag-press-conference-captions.md`. Original entry follows, unedited. **It is not a failed fetch, it is a fetch that is too early.** Retried 2026-08-18 with the identical symptom (captions advertised, no fragments, zero-byte `.part`), and then diagnosed: YouTube reports `live_status: post_live`, meaning the stream has ended and the archive is still processing into a final VOD. Caption fragments are not served in that window. **There is a one-command trigger**, `yt-dlp --skip-download --print "%(live_status)s" <url>`: `post_live` means wait, `was_live` means go. Positive-controlled the same day, because a status string that never varies proves nothing: an ordinary finished upload returns `not_live`. Procedure and retry command are in the corpus README. The ceiling is unchanged: automatic captions are `CAPTION-ASR`, never `PUBLISHABLE`, so this is the batch's best **pointer** and not a quotable source. The most valuable thing it could point at is whether the AGs said "$200 billion" out loud, which only Dkt 540 can settle.
8. ~~**Author allowlists for the last two unguarded ledgers.**~~ **DONE 2026-08-18.** All eleven ledgers are registered; 483 spans; there is no unguarded ledger left. Registering them caught six defects and one bad cache.
9. ~~**Cache Meta's Dkt 455.**~~ **DONE 2026-08-18**, and it caught two defects in the `$1.4 trillion` claims on its first run.
10. **Consider whether hub prose needs any backstop.** `content/lawsuits.md` carried a stale posture label for as long as it did because nothing reads it: `check:surfaces` is deliberately scoped to share cards, `check:ledgers` checks only the four hand-copied TLDR variants, and prose is allowed to discuss scheduled things. This is a real gap and a blunt vocabulary gate over prose is a known bad answer here, one comment becoming a standing multi-file gate. Recorded as an open question, not a task.

### Parked, verified, waiting on a home

Neither is a research task. Both are primary-sourced in
`docs/research/primary-findings-2026-08-18.md` and both are waiting for a section of the site that
would carry them. Pick them up when that section exists, not before.

11. **The Kids Online Safety Act**, ordered to be reported favorably by Senate Commerce on 2026-08-05, with an amendment in the nature of a substitute. Needs a place in the paper that tracks federal legislative posture, which does not exist today. Note when writing it that no vote tally appears in the action record, so "bipartisan" is not available from it, and that the reported text is a substitute nobody here has read.
12. **Meta's $2.40 billion of charges related to legal proceedings** in the quarter ended 2026-06-30, per its Form 10-Q. Needs a deterrence-economics argument to attach to. It is an accrual, the company's own estimate of expected loss, not defence spending, and it is quarterly, so whatever carries it has to be willing to refresh it.
