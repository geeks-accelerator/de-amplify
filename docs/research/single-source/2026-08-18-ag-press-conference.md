# Single-source distillation: the attorneys general press conference (ASR)

- **Source:** Press conference held by AGs Rob Bonta (California), Phil Weiser (Colorado) and Jennifer Davenport (New Jersey) after the first day of the state AGs' trial against Meta in MDL 3047, Oakland
- **URL:** transcribed from the PBS NewsHour recording, https://www.youtube.com/watch?v=KWppdXmS9Us (52:20). The California Department of Justice upload, https://www.youtube.com/watch?v=N3FvvwxW64w, runs 23:26 and contains none of the Q&A
- **Held:** 2026-08-18. **Transcript obtained:** 2026-08-20, AssemblyAI with speaker diarization
- **Type:** party press conference. **Basis tier for every claim: `PARTY`.**
- **Matter:** MDL 3047, day one of the state attorneys general's trial
- **Cache:** `docs/distillations/sources/ag-press-conference-2026-08-18-asr.txt`

## Step 0: two caveats, and the first is not the usual one

**The basis dimension carries almost no signal here, and that is stated rather than hidden.** Every
claim below is `PARTY`: this is one side of a live trial describing its own case on the day it
opened. The corpus README predicted exactly this before the source was obtainable. So the
discriminating dimension in this file is **actionability**, not basis, and the reader should not
mistake a uniform column for a uniform reliability.

**The transcript is machine-produced.** It is markedly better than the auto-captions that earned the
`CAPTION` tier (the money passage was independently transcribed by three systems sharing no pipeline
and they agree, with per-word confidence above 0.99 on every figure), but it is still a machine's
rendering of an acoustic signal. It fails in the same place: one of the internal-research
percentages below arrives as a self-correction or mis-hearing, `70%- 17%`, which is precisely the
kind of token that carries a claim. **Nothing here is `PUBLISHABLE`**, the cache is quarantined from
`npm run check:quotes` by filename, and no span from it is set in quotation marks anywhere on the
site. Attribution is diarized, which is machine attribution, and is a hypothesis rather than a
finding.

## Step 1: Structure

1. Bonta opening statement (00:05)
2. Weiser opening statement (10:37)
3. Davenport opening statement (19:45)
4. Q&A, reporters unnamed except the first (23:49 to 52:11)

The official upload ends at the close of section 3. Everything from section 4 exists only in
third-party recordings.

## Steps 2 and 3: Atomic claims, tagged

Pass 1, obvious.

| ID | Claim | Basis | Stance | Action | Locator |
|----|-------|-------|--------|--------|---------|
| Q1 | Four states (California, Colorado, Kentucky, New Jersey) try this bellwether within a 29-state bipartisan coalition | PARTY | assert | NEEDS-PRIMARY | 00:05 |
| Q2 | The trial is expected to run **5 to 7 weeks** | PARTY | assert | NEEDS-PRIMARY | 00:05, 31:25 |
| Q3 | **The injunctive relief sought names specific features: autoplay, infinite scroll, likes, notifications and alerts, and the algorithmic feed** | PARTY | assert | NEEDS-PRIMARY | 24:16 |
| Q4 | The monetary ask is civil penalties, disgorgement and restitution, and explicitly **not damages** | PARTY | assert | NEEDS-PRIMARY | 24:16, 33:12 |
| Q5 | The states are **not** asking for $1.4 trillion; Meta produced that figure and gave it to the press | PARTY | deny | NEEDS-PRIMARY | 32:34, 34:34 |
| Q6 | $200 billion is **Meta's annual revenue**, not a demand | PARTY | assert | NEEDS-PRIMARY | 34:14 |
| Q7 | The states will name no total and leave the amount to the judge's discretion | PARTY | assert | NEEDS-PRIMARY | 32:34 |
| Q8 | **The states do not plan to call children or parents to testify**; harm is to be proved from Meta's own internal studies | PARTY | assert | NEEDS-PRIMARY | 26:15 |
| Q9 | Whether Zuckerberg testifies is undecided; Meta's counsel said in opening that he would | PARTY | qualify | NEEDS-PRIMARY | 28:10, 31:25 |
| Q10 | Arturo Bejar was the first witness, continues the next day, and testified he met Zuckerberg over 100 times | PARTY | assert | NEEDS-PRIMARY | 28:57 |
| Q11 | **A user entering an under-13 birthdate is prompted to enter a different date rather than removed** | PARTY | assert | NEEDS-PRIMARY | 10:37 |
| Q12 | Meta's protective tools are characterised as tissue-paper protocols a child bypasses with a swipe of a finger | PARTY | assert | ATTRIBUTE-ONLY | 35:31 |
| Q13 | **Meta's measures did not decrease engagement, time spent, or the nature of the addiction** | PARTY | assert | ATTRIBUTE-ONLY | 37:31 |
| Q14 | The question to ask of any such measure is what it measures and how it defines the thing measured | PARTY | assert | ATTRIBUTE-ONLY | 38:00 |
| Q15 | Weiser's three priorities: stop the deception, stop the deliberate addiction by notification and alert, keep under-13s off without parental consent | PARTY | assert | ATTRIBUTE-ONLY | 38:41 |
| Q16 | Bonta's priorities: stop deceiving, comply with COPPA for under-13s, and address the feature constellation including ephemeral content, autoplay and infinite scroll | PARTY | assert | ATTRIBUTE-ONLY | 40:11 |
| Q17 | **The states seek an industry-wide solution and would ask of TikTok much of what they ask of Meta** | PARTY | assert | ATTRIBUTE-ONLY | 41:58 |
| Q18 | **A functioning Congress would legislate industry-wide protection; the bipartisan AG coalition is filling that breach** | PARTY | assert | ATTRIBUTE-ONLY | 43:03 |
| Q19 | **It would be an unacceptable outcome for Meta to be restrained while TikTok remains free to do the same** | PARTY | assert | ATTRIBUTE-ONLY | 43:03 |
| Q20 | More than 40 states have pending suits against TikTok | PARTY | assert | NEEDS-PRIMARY | 41:58 |
| Q21 | **Meta lost a trial in Los Angeles at which Zuckerberg testified** | PARTY | assert | **NEEDS-PRIMARY** | 28:16 |
| Q22 | Meta lost the New Mexico trial; Tennessee is undecided | PARTY | assert | NEEDS-PRIMARY | 28:16 |
| Q23 | Meta is first to trial by happenstance rather than selection; the investigation began in 2023 | PARTY | assert | ATTRIBUTE-ONLY | 44:10 |
| Q24 | The states retained no outside law firm and are staffing the trial from their own offices | PARTY | assert | NEEDS-PRIMARY | 10:37 |
| Q25 | Internal research is cited at 13% of teen girls saying Instagram worsens thoughts of suicide and self-injury, 17% eating issues, 32% body image | PARTY | assert | NEEDS-PRIMARY | 00:05 |
| Q26 | Zuckerberg personally overruled staff and expert consensus to keep filters simulating plastic surgery | PARTY | assert | ATTRIBUTE-ONLY | 00:05 |
| Q27 | Meta internally acknowledged that it had misled the public | PARTY | assert | ATTRIBUTE-ONLY | 00:05 |
| Q28 | Meta described under-13 users as a valuable and untapped market | PARTY | assert | ATTRIBUTE-ONLY | 10:37 |
| Q29 | Meta regarded 10, 11 and 12 year olds as its best users and sought to maximise teen time spent | PARTY | assert | ATTRIBUTE-ONLY | 35:31 |
| Q30 | The Ninth Circuit refused to stay the trial after Meta sought appellate relief | PARTY | assert | NEEDS-PRIMARY | 10:37 |
| Q31 | The tobacco parallel rests on three points: bipartisan state AG action, congressional failure, and marketing to children affecting public health | PARTY | assert | ATTRIBUTE-ONLY | 51:19 |
| Q32 | Bonta sponsored or supported California's age-appropriate design code, addictive feeds law and warning-label bill | PARTY | assert | NEEDS-PRIMARY | 44:10 |
| Q33 | New Jersey has co-led the effort for more than five years; the case was filed nearly three years ago | PARTY | assert | NEEDS-PRIMARY | 19:45, 10:37 |
| Q34 | Meta's opening argued teens have difficulty managing their time and that under-13s misrepresent their age | PARTY | assert | ATTRIBUTE-ONLY | 35:31 |
| Q35 | App-store responsibility is outside the scope of this case | PARTY | assert | ATTRIBUTE-ONLY | 50:25 |

Pass 2, implicit.

| ID | Implicit assumption | Action |
|----|--------------------|--------|
| Q36 | **Q3 is a de-amplification remedy list in a live trial, stated by the plaintiffs**, and it overlaps almost exactly with this project's own subject matter. That is the single most useful thing in this source | NEEDS-PRIMARY |
| Q37 | Q13 and Q14 together state an **effectiveness test**: a measure is judged by whether engagement actually fell and by what it chose to measure. That is the scorecard's premise, arrived at independently by a plaintiff | ATTRIBUTE-ONLY |
| Q38 | **Q17, Q18 and Q19 concede that litigation is a second-best instrument.** A plaintiff mid-trial saying the right remedy is industry-wide and legislative is conceding the limit of the tool being used | ATTRIBUTE-ONLY |
| Q39 | Q8 implies the trial record will contain no child or parent testimony, so every finding about harm must rest on internal documents and expert evidence | NEEDS-PRIMARY |
| Q40 | Q11 describes an age gate whose failure mode is not weak verification but an **active prompt to re-enter a different date**, which is a design choice rather than an oversight | NEEDS-PRIMARY |
| Q41 | Q5 read with Q6 is the plaintiffs correcting the press about their own case, which is unusual and makes the coverage error in this corpus a matter of record rather than inference | NEEDS-PRIMARY |

Pass 3, negative.

| ID | Denial | Action |
|----|--------|--------|
| Q42 | The states deny seeking $1.4 trillion | NEEDS-PRIMARY |
| Q43 | The states deny this is a damages case | NEEDS-PRIMARY |
| Q44 | Bonta denies the relevance of Meta's point that no harmed child will testify, calling it a tort framing mapped onto a deception case | ATTRIBUTE-ONLY |
| Q45 | Bonta denies that app stores are in scope, calling the argument a deflection | ATTRIBUTE-ONLY |
| Q46 | Bonta denies that Meta was specially selected as first defendant | ATTRIBUTE-ONLY |

## Step 4: Clusters

- **C-A The remedy sought** (Q3, Q4, Q7, Q15, Q16, Q36, Q37): the highest-value cluster for this project, because it is a feature-level remedy list rather than a damages figure.
- **C-B The money correction** (Q5, Q6, Q7, Q41, Q42, Q43): resolved a live Tension in the MDL ledger; already carried there as claims 22d to 22h.
- **C-C The industry-wide concession** (Q17, Q18, Q19, Q20, Q38): the plaintiffs arguing for a standard rather than a verdict.
- **C-D Trial mechanics** (Q1, Q2, Q8, Q9, Q10, Q24, Q30, Q39).
- **C-E Meta's conduct as alleged** (Q25, Q26, Q27, Q28, Q29, Q34): all `ATTRIBUTE-ONLY` or `NEEDS-PRIMARY`; these are contested allegations in an undecided trial.
- **C-F Pointers to other proceedings** (Q21, Q22, Q32).

## Step 5: Tensions (internal)

1. **Q33 against itself.** New Jersey describes co-leading for more than five years while Colorado describes filing nearly three years ago. Both can be true if one dates the investigation and the other the complaint, but the file records the pair because a five-year figure and a three-year figure about the same effort will be conflated by anyone quoting one of them.
2. **Q2 against the rest of the corpus.** Five to seven weeks here; six in four sources, six to eight in two, seven in the ABC7 segment. This is now a five-way spread on one schedule. Unlike the broadcast captions, this figure comes from counsel trying the case, which makes it better sourced without making it a court document.
3. **Q21 splits in two once it is checked against the corpus, and only half of it is open.** California's own attorney general says Meta lost a trial in Los Angeles at which Zuckerberg testified, hedging the second half with "I think". Checked 2026-08-20 against the `california-state-bellwethers` ledger: **the loss is already established there.** It is *K.G.M. v. Meta Platforms and Google*, a $6 million jury verdict on 2026-03-25 in Los Angeles Superior Court, with the new-trial and JNOV motions denied in early June. So the AG is corroborating a record this project already holds rather than revealing one. The second half, whether Zuckerberg testified in that trial, **was open for about an hour and is now closed: he did**, in person on 2026-02-18, 35 days before the verdict, carried by NPR, PBS, NBC, Fortune, KTLA, Rolling Stone and the New York Times. It is claim 26 of the California ledger. **The AG was right, hedge and all**, and the only reason to doubt him was that this project had no source for it, which was a fact about the project's coverage rather than about the trial. **The first draft of this entry claimed the project could not see the Los Angeles outcome at all. That was wrong, and it was wrong in the direction that makes a source look more valuable than it is**, which is the failure this file's Step 8 warns about.
4. **Q8 against the site's framing of these cases.** The curated pages describe the MDL as a youth-harm case. It is being tried as a consumer-deception and COPPA case in which no child testifies. Those are compatible but not identical, and the second is more precise.
5. **Q25's percentages arrive partly garbled.** One is transcribed `70%- 17%`. The underlying figures resemble widely reported internal research, which is exactly why they should be traced to the exhibit rather than taken from here.
6. **Q12 and Q13 are advocacy, and they are also the site's thesis.** A characterisation offered by a plaintiff on the courthouse steps is not evidence that the brakes fail. It is notable convergence and nothing more, and this file resists treating a useful quote as a finding.

## Step 6: Synthesis

**S1. The plaintiffs' remedy list is a de-amplification list.**
Autoplay, infinite scroll, likes, notifications and alerts, and the algorithmic feed, named as the
business practices to be changed. *Basis: PARTY. Action: NEEDS-PRIMARY, against the pleaded prayer
for relief and the AGs' remedy charts.* This is the most consequential item here for this project,
because it means the feature-level remedy is not a policy proposal invented by this site but a
live request in a federal trial. **It also has to be verified against the pleadings before it is
stated as fact, since a press conference is where a party summarises its ask, not where it makes it.**

**S2. The plaintiffs argue the correct instrument is industry-wide and legislative.**
Both the industry-wide framing and the explicit statement that a functioning Congress would be
legislating instead. *Basis: PARTY. Action: ATTRIBUTE-ONLY.* **This is the site's own argument
arriving from the plaintiffs mid-trial**, and it is the strongest available answer to the New Mexico
court's objection that ordering one firm while its competitors are absent is unfair. Used carefully
it is attributable commentary; used carelessly it becomes this project quoting its own thesis back
to itself, which is why it is tagged as it is.

**S3. The effectiveness question is asked in the plaintiffs' own words.**
Whether the measures reduced engagement at all, and what a measure actually measures. *Basis: PARTY.
Action: ATTRIBUTE-ONLY.* Convergence with the scorecard's premise, recorded as convergence.

**S4. The Los Angeles claim was right in both halves, and checking it filled a real hole.**
*Basis: PARTY. Action: NEEDS-PRIMARY, and it stays that tag: the fact is now sourced properly
elsewhere, but nothing may be published on the strength of this transcript.* The loss is *K.G.M.*,
already established in the California ledger. That Zuckerberg testified in it was **not** in that
ledger and now is, at claim 26, from seven outlets. **A party source's throwaway aside located a gap
in this project's own record of a case it has been tracking for months.** See Tension 3, which also
records that the first draft of this file overstated the finding in the flattering direction.

**S5. The official channel published a truncated record of an official event.**
23:26 against 52:20, with the entire Q&A absent, so everything in sections C-A, C-B and C-C above
exists only in third-party recordings. *Basis: durations, verified.* Recorded as a methodological
finding for the corpus, alongside the `CAPTION` finding: **check the third-party recordings of a
public event even when the official one exists, and compare durations before choosing which to keep.**

## Step 7: Traceability and orphans

Orphans:

- **The named trial teams.** All three attorneys general read out their lawyers' names. Recorded here as an orphan rather than a claim: the corpus has no use for a roster, and the ASR mangles surnames, which is exactly the token class the `CAPTION` finding warns about.
- **Bonta's seatbelt, swimming-pool and blueberry analogy for parental supervision.** Rhetorical framing, deliberately dropped.
- **Weiser's account of a Colorado parent whose daughter died by suicide.** Deliberately not distilled into a claim. It is a bereaved parent's story told by a third party at a press conference, and this corpus has no way to verify any part of it. Naming it here rather than silently dropping it, because an omission with no record looks the same as an oversight.

**Unsynthesised claims (declared):** Q23, Q31, Q35, Q40, Q44, Q45, Q46. 7 of 46 (15.2%). Predominantly baseline posture claims and party denials: recorded in the inventory for completeness, deliberately not carried into an output. This list is machine-computed and enforced by `npm run check:distillations`.

## Step 8: Quality

**The highest-value source in this corpus, and the one whose basis tier is weakest.** Those are not
in tension: value here is a function of what the speakers know rather than of how far the account
sits from the record, and these three speakers are trying the case. It carries a feature-level
remedy list, an explicit statement that the correct instrument is legislative and industry-wide, and
the plaintiffs correcting the press about their own damages figure. No other item in this folder
carries any of those.

Its weaknesses are structural and worth stating plainly. It is one side of an undecided trial, so
every characterisation of Meta's conduct is an allegation. It is machine-transcribed, so no span is
quotable. And its most useful passages are the ones this project most wants to be true, which is the
condition under which a corpus starts confirming itself. The actionability column is doing all of
the work in this file, and it is set conservatively for that reason.

## Step 9: Validation

- **Source length:** 7,726 words (measured, from the ASR word count). **Synthesis (Step 6):** 423 words (measured).
- **Claim compression:** 46 atomic claims to 5 outputs. Word compression is roughly 18:1 against the source, well beyond the 3:1 to 5:1 target the README set for the third length band, because the bulk of the source is opening-statement advocacy that yields few atomic claims per thousand words.
- **Traceability:** complete, three orphan groups named and seven claims declared unsynthesised.
- **Regeneration test:** passes. S1 through S5 regenerate the remedy list, the industry-wide concession, the effectiveness framing, the Los Angeles pointer and the truncation finding. What does not regenerate is the advocacy, dropped deliberately.
- **Not machine verified**, and unusually this one has a cache: `check:quotes` refuses it by filename because it is ASR, so the cache exists for re-reading and not for verification.
