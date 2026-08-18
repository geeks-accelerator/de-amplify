# Single-source distillation: Fox News (broadcast, stenographic captions)

- **Source:** Fox News, "META ON TRIAL: Opening statements to begin in LANDMARK case", anchor segment with a clinical therapist guest
- **URL:** https://www.youtube.com/watch?v=o4FAfSy6QKQ (3:57)
- **Published:** 2026-08-18. **Transcript:** embedded broadcast closed captions (CC1 / DTVCC1), fetched 2026-08-18.
- **Basis tier: `CAPTION-STENO`**, a new tier. See below.
- **Transcript gate:** 414 words, punctuation ratio **0.0556**, above 0.015, so no cleanup pass. Length band **under 600 words**: synthesis capped at 40% of source, and Validation Questions omitted as padding at this length.

## Step 0: A correction, and a new tier

Yesterday's note in this folder recorded a hypothesis that publisher-supplied captions would escape
the failures of automatic ones. **This item disproves that, and the correction belongs here rather
than buried.**

These are real broadcast closed captions, produced by a live stenographer rather than by speech
recognition. They fail differently and, for this project's purposes, worse:

- They are transmitted in **upper case throughout**, destroying the capitalisation that distinguishes a proper noun from a common one.
- They fail **phonetically** rather than statistically, producing malformed near-words where an ASR system would produce a plausible wrong word.
- Most seriously, this transcript states that **the defendants are seeking penalties**. The defendant is Meta. A live stenographer inverted the parties, and no spell check or plausibility filter would catch it, because every word in the sentence is a real word in the right grammatical place.

So the tier splits into `CAPTION-ASR` and `CAPTION-STENO`, and **neither is publishable**. ASR
threatens names; stenography threatens legal roles. The second is worse in a legal corpus.

## Step 1: Structure

1. Anchor lead-in with the stakes and Meta's statement
2. Guest as hypothetical expert witness
3. Causation question
4. Desired remedies

## Steps 2 and 3: Atomic claims, tagged

Pass 1, obvious.

| ID | Claim | Basis | Stance | Action | Locator |
|----|-------|-------|--------|--------|---------|
| X1 | Lawyers will present the case against Meta within hours | CAPTION-STENO | assert | NEEDS-PRIMARY | S1 |
| X2 | **The transcript states the defendants are seeking a trillion dollars in penalties** | CAPTION-STENO | assert | **DO-NOT-PUBLISH** | S1 |
| X3 | Meta says it is proud of its record and the effort put into developing protections, and looks forward to showing the judge and jury | PARTY | assert | NEEDS-PRIMARY | S1 |
| X4 | The guest is a clinician who sees teens and parents rather than a legal expert | EXPERT | assert | ATTRIBUTE-ONLY | S2 |
| X5 | The guest said that when a parent brings in a teenager with anxiety or oppositional defiant behaviour, it is screen-related the large majority of the time | EXPERT | assert | ATTRIBUTE-ONLY | S2 |
| X6 | The guest would offer anecdotal findings from decades of practice and of following social media trends | EXPERT | qualify | ATTRIBUTE-ONLY | S2 |
| X7 | The guest referred to New Mexico as a settlement | CAPTION-STENO | assert | **DO-NOT-PUBLISH** | S2 |
| X8 | The guest said internal documents showed the products were harming children | EXPERT | assert | NEEDS-PRIMARY | S3 |
| X9 | The features at issue named by the guest are endless scrolling and alerts | EXPERT | assert | PUBLISHABLE | S3 |
| X10 | **The guest declined to say Meta intended addiction**, saying only that it should have acted differently given the mental health crisis | EXPERT | deny | ATTRIBUTE-ONLY | S3 |
| X11 | The guest hopes for parental controls and an age floor of 16 | EXPERT | assert | ATTRIBUTE-ONLY | S4 |
| X12 | The guest hopes for mitigation of the features that trigger a dopamine response | EXPERT | assert | ATTRIBUTE-ONLY | S4 |
| X13 | The guest said the monetary part is outside their concern | EXPERT | qualify | ATTRIBUTE-ONLY | S4 |
| X14 | The anchor noted that adults have a better ability to control impulses than a fifteen or sixteen year old | REPORTER | assert | ATTRIBUTE-ONLY | S4 |

Pass 2, implicit.

| ID | Implicit assumption | Basis | Action |
|----|--------------------|-------|--------|
| X15 | X5 asserts a near-universal association from clinical impression, with no control group and no data, and it is the segment's evidentiary centre | EXPERT | DO-NOT-PUBLISH |
| X16 | X10 is the most careful moment in the segment: an aligned guest declining to assert intent, which is the element the case actually turns on | EXPERT | ATTRIBUTE-ONLY |
| X17 | X11 and X13 together locate a sympathetic guest's interest in design remedies and not in penalties, matching the pattern across the corpus | EXPERT | ATTRIBUTE-ONLY |

Pass 3, negative.

| ID | Denial | Whose | Action |
|----|--------|-------|--------|
| X18 | Meta denies wrongdoing by asserting its protective record | Meta | ATTRIBUTE-ONLY |
| X19 | The guest denies being able to say Meta deliberately sought addiction | EXPERT | ATTRIBUTE-ONLY |

## Step 4: Clusters

- **C-A Clinical impression as evidence** (X4, X5, X6, X15).
- **C-B Intent, declined** (X8, X10, X16, X19).
- **C-C Desired remedies** (X9, X11, X12, X17).
- **C-D Transcript defects** (X2, X7).

## Step 5: Tensions (internal)

1. **X2 and X7 are both factually wrong**, and neither is a matter of interpretation. The parties are inverted, and a contested judgment under appeal is called a settlement. In under four hundred words the transcript produced two errors of legal fact.
2. **X5 against X10.** The guest asserts an overwhelming clinical association and then declines to assert intent. That is internally coherent and unusually careful, and it separates causation from intent in a way most of the corpus does not.
3. **X13 against the segment's own lead-in**, which opens on the trillion-dollar figure. The programme frames the story around money and the only substantive guest says money is not their concern.

## Step 6: Synthesis

**S1. A sympathetic guest declined to assert intent.**
Asked whether the pattern could be the result of purposeful design, the clinician would not say so,
resting instead on what the company should have done. *Basis: EXPERT.* Intent is the contested
element, and the most aligned witness in the segment would not supply it.

**S2. The remedies a clinician wants are controls, not damages.**
Parental controls, an age floor, and mitigation of dopamine-triggering features. *Basis: EXPERT.*

**S3. Live stenographic captions can invert legal roles, and did.**
*Basis: demonstrated at X2.* Recorded as a methodological finding for the corpus, and as a
correction to yesterday's assumption that publisher captions are the safer source.

## Step 7: Traceability and orphans

Orphans: the programme handover and an unrelated opening exchange, both discarded. Orphan rate
otherwise nil, since the segment is short and each turn carries a claim.

**Unsynthesised claims (declared):** X1, X3, X14, X18. 4 of 19 (21.1%). Predominantly baseline posture claims and party denials: recorded in the inventory for completeness, deliberately not carried into an output. This list is machine-computed and enforced by `npm run check:distillations`.

## Step 8: Quality

Lowest-quality artifact in the corpus, on two independent grounds: the transcript contains errors of
legal fact, and the substantive content is one clinician's uncontrolled impression offered as
hypothetical expert testimony. Its two genuine contributions are the declined intent (S1) and the
demonstration of a new failure mode (S3).

## Step 9: Validation

- **Source:** 414 words. **Synthesis (Step 6):** 111 words (measured), a **3.7:1 word compression**, inside the 40% band for short sources.
- **Claim compression:** 19 atomic claims to 3 outputs.
- **Band decision:** under 600 words, so Validation Questions are omitted deliberately rather than overlooked.
- **Traceability:** complete.
- **Regeneration test:** passes on the declined intent and the transcript defect.
- **Not verified**, and this file in particular should not be relied on for any factual claim.
