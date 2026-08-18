# Single-source distillation: CNBC Television (broadcast, auto-caption)

- **Source:** CNBC Television, "Opening statements begin in landmark Meta trial", correspondent Julia Boorstin
- **URL:** https://www.youtube.com/watch?v=XDzdkWH35l4 (duration 198s)
- **Published:** 2026-08-18. **Transcript obtained:** 2026-08-18, YouTube automatic captions.
- **Type:** business television segment. **Basis tier for every claim: `CAPTION`.**
- **Matter:** MDL 3047, live from the market desk while openings proceed

## Step 0: Caption caveat

Same class as the ABC7 file. This transcript garbles the correspondent's own surname and at least
one interviewee's. Its prose is otherwise coherent and its substance is unusually specific for
broadcast, which makes it the more dangerous of the two: it is quotable-sounding and unverifiable.
**No claim here is `PUBLISHABLE`.**

## Step 1: Structure

1. Correspondent summary of the plaintiffs' three-part theory
2. Bonta statement
3. The numbers, and a Meta filing
4. Torrez quotation, market reaction
5. Anchor exchange on remedies versus damages

## Steps 2 and 3: Atomic claims, tagged

Pass 1, obvious.

| ID | Claim | Basis | Stance | Action | Locator |
|----|-------|-------|--------|--------|---------|
| T1 | Opening arguments are proceeding in Oakland and plaintiffs' lawyers are speaking | CAPTION | assert | NEEDS-PRIMARY | S1 |
| T2 | The plaintiffs allege Meta illegally collected and used data of under-13 users | CAPTION | assert | NEEDS-PRIMARY | S1 |
| T3 | The plaintiffs allege design decisions drove excessive use and put young users at risk | CAPTION | assert | NEEDS-PRIMARY | S1 |
| T4 | The plaintiffs allege Meta lied to users, families and the public about platform safety | CAPTION | assert | NEEDS-PRIMARY | S1 |
| T5 | Bonta framed California as having a particular opportunity and obligation to be a catalyst for change | CAPTION | assert | ATTRIBUTE-ONLY | S2 |
| T6 | The coalition demands changes to Meta's algorithm | CAPTION | assert | NEEDS-PRIMARY | S2 |
| T7 | **The states say they are looking for about $200 billion in damages** | CAPTION | assert | NEEDS-PRIMARY | S3 |
| T8 | **Meta says the AGs initially asked for $1.4 trillion** | CAPTION | assert | NEEDS-PRIMARY | S3 |
| T9 | **Meta filed a motion the previous day** highlighting the limited scope of the plaintiffs' claims | CAPTION | assert | NEEDS-PRIMARY | S3 |
| T10 | That motion contrasts the limited claims against what Meta calls an attempted broad referendum on social media | CAPTION | assert | NEEDS-PRIMARY | S3 |
| T11 | Torrez said a California judgment alone could be large enough to change Meta's ability to finance its future | CAPTION | assert | ATTRIBUTE-ONLY | S4 |
| T12 | Meta shares were down about 2.5% intraday and about 28% over the past year | CAPTION | assert | NEEDS-PRIMARY | S4 |
| T13 | Specific features in focus include infinite scroll and engagement-focused content targeting | CAPTION | assert | NEEDS-PRIMARY | S5 |
| T14 | After the New Mexico ruling Meta shares rose, because Meta was not ordered to change its algorithm wholesale but only to make child-safety changes | CAPTION | assert | NEEDS-PRIMARY | S5 |
| T15 | YouTube, TikTok and Snap are watching this case closely | CAPTION | assert | ATTRIBUTE-ONLY | S5 |

Pass 2, implicit.

| ID | Implicit assumption | Action |
|----|--------------------|--------|
| T16 | T8's "initially asked for" makes the $1.4T a superseded plaintiff demand rather than a defendant estimate. That is a third distinct account of the same figure and cannot be reconciled with Reuters or with this project's ledger without the docket. | NEEDS-PRIMARY |
| T17 | T14 encodes the market's read of the New Mexico outcome: the algorithm was the thing at stake, and it survived. That is the strongest available evidence that a court declining the algorithm remedy is understood as a defendant win. | NEEDS-PRIMARY |
| T18 | T7 uses "damages" where Reuters uses "penalties", inheriting the same vocabulary problem | NEEDS-PRIMARY |

Pass 3, negative.

| ID | Denial | Action |
|----|--------|--------|
| T19 | Meta denies the $1.4T is a reasonable amount and denies the allegations are substantiated | NEEDS-PRIMARY |
| T20 | Meta's motion denies that the case is a broad referendum on social media, asserting the claims are narrow | NEEDS-PRIMARY |

T20 is the most interesting claim in this file. It is a defendant arguing that its own case is
*smaller* than the plaintiffs are presenting, which is the mirror image of the states' framing and
would be visible in a docket document filed the day before openings.

## Step 4: Clusters

- **C-A The three-part theory** (T2, T3, T4).
- **C-B The numbers** (T7, T8, T16, T18).
- **C-C The August 17 motion** (T9, T10, T20).
- **C-D The algorithm remedy and the market** (T13, T14, T17, T12).

## Step 5: Tensions (internal)

1. **T8 against Reuters and against the project's ledger.** Reuters: Meta says the ceiling is $1.4T. This caption: Meta says the AGs *asked* for $1.4T. The ledger, from Dkt 455, has Meta characterising the states' exposure under the states' own counting method. These are three subtly different claims and the difference decides who owns the number.
2. **T12 against the CNBC written article from the previous day**, which said the stock was down 11% this year, and against Reuters, which reported a 4.4% close. Three windows, three numbers, no reconciliation, and a reader taking any one of them out of context would misstate it.
3. **T14 against the plaintiffs' framing throughout the batch.** The market read New Mexico as a Meta win on the point that mattered. Nobody in the print coverage says this.

## Step 6: Synthesis

**S1. A Meta filing dated the day before openings is reported here and nowhere else in the batch.**
It reportedly argues the plaintiffs' claims are narrow and that the states are attempting a broad
referendum. *Basis: CAPTION. Action: pull the docket for 2026-08-17.* Independently makes the ABC7
suggestion of new Meta language worth checking, since two broadcast sources point at the same day.

**S2. There are now three incompatible accounts of who owns the $1.4 trillion figure.**
Meta's own ceiling estimate (Reuters, and this project's ledger from the primary filing); the
states' present demand (NPR, the two editorials); the states' superseded initial ask (this source).
*Basis: CAPTION plus batch comparison.* Only the docket settles it, and the project's existing
position rests on the primary filing, so it stands until the docket says otherwise.

**S3. The market treated the New Mexico algorithm remedy as the thing that mattered, and as a Meta win.**
Shares rose on an outcome where the court ordered child-safety changes but not wholesale algorithm
change. *Basis: CAPTION.* If it holds, it is a market-priced measurement of exactly the gap this
project argues about: safety features are cheap, the feed is not.

**S4. Damages versus penalties remains unresolved across the whole batch.**
*Basis: CAPTION, consistent with the NYT and Guardian usage and inconsistent with Reuters.*

## Step 7: Traceability and orphans

Orphans: the anchor banter and the reference to an earlier guest interview. That reference is
retained as a pointer to a separate CNBC segment that may carry more.

**Unsynthesised claims (declared):** T1, T5, T6, T11, T15, T19. 6 of 20 (30.0%). Predominantly baseline posture claims and party denials: recorded in the inventory for completeness, deliberately not carried into an output. This list is machine-computed and enforced by `npm run check:distillations`.

## Step 8: Quality

Low by source class, high in lead value. Two of its four outputs are actionable docket leads that
no print source in the batch surfaced. Nothing in it can be published; several things in it should
be chased.

## Step 9: Validation

- **Source length:** approx. 550 words of caption text (estimated, no cache). **Synthesis (Step 6):** 217 words (measured).
- **Claim compression:** 20 atomic claims to 4 outputs.
- **Traceability:** complete.
- **Regeneration test:** passes on the filing lead, the three-way attribution split and the market read.
- **Not machine verified, and not human verified.** Machine transcription of broadcast speech; treat every quoted-sounding phrase as paraphrase.
