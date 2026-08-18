---
title: "Plan: taking the single-source corpus to primary sources, and publishing what survives"
subtitle: "Sixteen distillations of the MDL 3047 trial coverage produced 112 claims tagged NEEDS-PRIMARY. This is the plan for resolving them in the cheapest defensible order, and for correcting the three flaws the first research pass exposed in the corpus itself."
status: "EXECUTED 2026-08-18. All five phases complete and merged as PR #59 (cd05039), CI green. The plan's central prediction held and its central caution was vindicated: the New Mexico block was already established, and the bifurcation it warned against publishing turned out to be unconfirmable. Phase 2 produced a finding that reverses the press on the $200 billion figure. One item is NOT closed and is not closeable here: the site has not deployed since 2026-08-14, so none of this is live. See Part V."
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
| **Deploy** | **BLOCKED, and not by this work.** Production has not rebuilt since 2026-08-14. |

**Everything here has been merged, and none of it is live.** The MDL ledger now carries
`as_of: 2026-08-18` and describes the openings in the past tense, the curated pages are re-seeded,
and the policy paper carries the French comparative point. The production site still serves the
2026-08-14 build. That is an infrastructure fault, not a content one, and it is the single open
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

| Tag | Meaning | Count in corpus |
| --- | --- | --- |
| `PUBLISHABLE` | May be stated on the site with its tier label | 89 |
| `NEEDS-PRIMARY` | Real and material, verify against the record before publishing | **112** |
| `ATTRIBUTE-ONLY` | May appear only as "X said", never as fact | 70 |
| `DO-NOT-PUBLISH` | Fails the site's evidence rule | 13 |

The 112 are the subject of this plan.

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
- **The attorneys general press conference**, still unobtained. YouTube advertises an English caption track for the 1 hour 47 minute recording and serves no fragments. It is the highest-value item on the video list, being party officials on the record on an official channel, and it should be retried. The command is in the corpus README; check the resulting file size rather than the exit status, because a failed run leaves a zero-byte part file.
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
| `483cb82` (PR #58) | 15:01 | `f4ff3f51` | **BUILDING for 40 minutes, zero build log lines** |
| `cd05039` (PR #59) | 15:23 | `02808871` | QUEUED |
| `ba9bbf5` (PR #60) | 15:35 | `e6d580ef` | QUEUED |

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

## Follow-ups, in priority order

1. **Unblock the deploy.** Everything below is moot until production rebuilds.
2. ~~**Distil the New Mexico Age Assurance section.**~~ **DONE 2026-08-18**, see the second publication pass above. Ledger section (g.2), claims 49 to 54, plus a dated pass on the curated page.
3. **Obtain the trial transcript** (Dkt 540) when it reaches the free archive, and close the $200 billion Tension.
4. **Confirm or drop the bifurcation** when an order addresses trial structure.
5. **The Ninth Circuit First Amendment disposition**, still single-sourced to one newspaper and never located. It sits on the appellate docket, not the trial one.
6. **Michigan's withdrawal**, still sourced to one station quoting a spokesperson.
7. **The attorneys general press conference**, still unobtained: YouTube advertises an English caption track for the 1 hour 47 minute recording and serves no fragments. Party officials on the record on an official channel outranks every secondary source in the corpus.
8. **Author allowlists for the last two unguarded ledgers**, `california-state-bellwethers` and `tennessee-v-meta`.
