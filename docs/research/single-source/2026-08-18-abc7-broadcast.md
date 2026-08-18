# Single-source distillation: ABC7 News Bay Area (broadcast, auto-caption)

- **Source:** ABC7 News Bay Area, "Meta Platforms faces pivotal trial as opening statements begin in Oakland", reporter live from Oakland
- **URL:** https://www.youtube.com/watch?v=Ad_PhMPjioc (duration 180s)
- **Published:** 2026-08-18. **Transcript obtained:** 2026-08-18, YouTube automatic captions.
- **Type:** local television segment. **Basis tier for every claim: `CAPTION`.**
- **Matter:** MDL 3047, courthouse exterior and opening statements

## Step 0: The transcript is machine-generated and that changes everything

This file exists partly to demonstrate the failure mode. In 180 seconds the captioning produced:

- one attorney general's surname reduced to a shorter word, twice
- an executive's surname replaced with an unrelated word
- one reporter given two different surnames, once by the anchor and once in his own sign-off
- a dollar figure rendered as a doubled, malformed token

The prose between those tokens is fine. That is precisely the danger: the transcript reads fluent
and fails exactly on names and numbers, which is all a legal record consists of. **No claim in this
file is `PUBLISHABLE`.** The best available tag is `NEEDS-PRIMARY`, and the honest use of this
source is as a pointer to events worth confirming elsewhere.

## Step 1: Structure

1. Anchor introduction, framing
2. Reporter live: the parents' press conference outside the courthouse
3. Reporter reading a parents' coalition statement
4. Reporter: the case, the numbers, the schedule

## Steps 2 and 3: Atomic claims, tagged

Pass 1, obvious.

| ID | Claim | Basis | Stance | Action | Locator |
|----|-------|-------|--------|--------|---------|
| A1 | Opening statements are underway in Oakland | CAPTION | assert | NEEDS-PRIMARY | S1 |
| A2 | A coalition of parents held a press conference outside the courthouse as the trial got underway | CAPTION | assert | NEEDS-PRIMARY | S2 |
| A3 | Parents rolled out a banner carrying more than 130 children's names outside the courthouse | CAPTION | assert | NEEDS-PRIMARY | S2 |
| A4 | Parents attributed deaths to suicide following depression they associate with targeting algorithms, and to sextortion by adults posing as peers | CAPTION | assert | ATTRIBUTE-ONLY | S2 |
| A5 | The parents' statement addressed Zuckerberg and Mosseri directly, arguing power does not excuse harm | CAPTION | assert | ATTRIBUTE-ONLY | S3 |
| A6 | The suit was filed by 29 state attorneys general | CAPTION | assert | NEEDS-PRIMARY | S4 |
| A7 | Meta denies the allegations and says it has developed dozens of tools to support teens and families | CAPTION | deny | NEEDS-PRIMARY | S4 |
| A8 | **Meta lawyers said the states are seeking $1.4 trillion** | CAPTION | assert | NEEDS-PRIMARY | S4 |
| A9 | Meta characterised that amount with words the caption renders as staggering and untethered from reality | CAPTION | assert | **DO-NOT-PUBLISH** | S4 |
| A10 | The trial is expected to last seven weeks | CAPTION | assert | **DO-NOT-PUBLISH** | S4 |
| A11 | Zuckerberg could testify | CAPTION | assert | NEEDS-PRIMARY | S4 |
| A12 | Bonta is expected to speak after court ends today | CAPTION | assert | NEEDS-PRIMARY | S4 |

Pass 2, implicit.

| ID | Implicit assumption | Action |
|----|--------------------|--------|
| A13 | A8's construction is the important one: it attributes the $1.4T to Meta's lawyers as a *description of what the states seek*, which is the exact ambiguity that produces the batch-wide misattribution | NEEDS-PRIMARY |
| A14 | The segment treats the parents' account as the frame for the legal proceeding, so causation is presented as established rather than as the contested question | ATTRIBUTE-ONLY |
| A15 | A9 suggests Meta filed or said something using language this project has not seen; the ledger carries different phrases from Meta's Dkt 455 | NEEDS-PRIMARY |

Pass 3, negative.

| ID | Denial | Action |
|----|--------|--------|
| A16 | Meta denies the allegations | NEEDS-PRIMARY |
| A17 | Parents deny that wealth or influence places a company above the law | ATTRIBUTE-ONLY |

## Step 4: Clusters

- **C-A The courthouse exterior** (A2, A3, A4, A5, A17): unique to broadcast, absent from most print in this batch.
- **C-B The number** (A8, A9, A13, A15).
- **C-C Logistics** (A1, A6, A10, A11, A12).

## Step 5: Tensions (internal)

1. **A10 against the batch.** Seven weeks here, six in four sources, six to eight in two. This is now a four-way spread on one schedule, and this source is the least reliable of the four, so its figure should be discarded rather than averaged.
2. **A9 against the record this project already holds.** The ledger carries Meta's Dkt 455 language verified against the primary filing. The caption's phrasing resembles it without matching it. Either Meta said something new, or the caption is paraphrasing, or the reporter was paraphrasing. Three possibilities, no way to distinguish from the caption alone, hence DO-NOT-PUBLISH.
3. **The reporter's own surname changes between the anchor introduction and the sign-off.** Recorded because it is the cleanest available demonstration that this transcript cannot be trusted on proper nouns.
4. **A8 says lawyers for Meta described what the states seek.** Whether that is Meta characterising the states' ask or the reporter compressing is unresolvable here.

## Step 6: Synthesis

**S1. The courthouse exterior is a documented event with a countable artifact.**
A parents' coalition press conference, and a banner of more than 130 names. *Basis: CAPTION.*
Confirmable from photographs and other outlets, and worth confirming, because a countable artifact
is the kind of detail that either checks out exactly or falls apart.

**S2. The attribution ambiguity is visible in the grammar itself.**
"Meta lawyers said the states are seeking $1.4 trillion" is the sentence shape that converts a
defendant's exposure estimate into a plaintiff's demand. *Basis: CAPTION.* This is the mechanism
of the batch-wide error, caught in the act.

**S3. Meta may have used new language about the figure, and this project cannot tell from here.**
*Basis: CAPTION. Action: check the docket for filings on or about 2026-08-17.* CNBC's television
segment independently reports a Meta motion filed that day, which makes this worth a docket pull
rather than a shrug.

**S4. Auto-captions are a distinct source class that fails on exactly the load-bearing tokens.**
*Basis: demonstrated in this file.* Recorded as a methodological finding for the corpus.

## Step 7: Traceability and orphans

Orphans: anchor chatter, station identification, the cross-reference to a second reporter inside
the courthouse. That last one is retained as a pointer: a second ABC7 reporter was in the courtroom,
so a fuller ABC7 report may exist and would outrank this segment.

**Unsynthesised claims (declared):** A7, A14, A16. 3 of 17 (17.6%). Predominantly baseline posture claims and party denials: recorded in the inventory for completeness, deliberately not carried into an output. This list is machine-computed and enforced by `npm run check:distillations`.

## Step 8: Quality

Low, by source class rather than by effort. The reporting appears competent; the artifact this
project can actually read is a machine transcription with known, demonstrated failures on names and
numbers. Its unique contribution is the courthouse exterior and the banner count.

## Step 9: Validation

- **Source length:** approx. 500 words of caption text (estimated, no cache). **Synthesis (Step 6):** 178 words (measured).
- **Claim compression:** 17 atomic claims to 4 outputs.
- **Traceability:** complete.
- **Regeneration test:** passes on the exterior event, the attribution mechanism and the open docket question.
- **Not machine verified, and additionally not human verified**, since the transcript itself is machine output. This is the weakest source in the corpus and is labelled as such.
