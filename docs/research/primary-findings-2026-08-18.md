# Primary-source findings, 2026-08-18

What Phases 1 and 2 of `docs/plans/2026-08-18-single-source-to-primary.md` actually established,
against primary sources. This is the input to the Phase 4 re-seed. Nothing here is published until
it reaches a ledger.

Each entry records the claim as the coverage stated it, what the primary says, and **the delta**,
because in every single case so far the delta is the useful part.

---

# Phase 1: the externals

## 1.1 The Kids Online Safety Act. CONFIRMED, with two posture corrections.

**Coverage said** (Channel 4, claim C20, sourced to an interviewee): the Kids Online Safety Act was
voted out of the Senate Commerce Committee on a bipartisan basis "just last week".

**The primary** is the congressional record for **S.1748**, Kids Online Safety Act, sponsored by
Sen. Marsha Blackburn, introduced 2025-05-14, referred to Senate Commerce. Its action record has
exactly two entries. The operative one:

> 08/05/2026 Committee on Commerce, Science, and Transportation. Ordered to be reported with an amendment in the nature of a substitute favorably.

**Delta, and both halves matter:**

1. **The date is wrong.** August 5, not "last week" relative to an August 18 broadcast. Two weeks, not one. The site should carry the date, not the relative phrase.
2. **"Bipartisan" is not in the record, and neither is a vote.** The action is "ordered to be reported favorably", with no tally recorded. The bill carries 76 cosponsors across both parties, which is evidence about the bill's support and **not** evidence about how the committee voted. Publishing "voted out on a bipartisan basis" would state something the record does not.
3. **The reported text is not the introduced text.** "With an amendment in the nature of a substitute" means the committee replaced the bill's text wholesale. Any description of what KOSA would do must be of the substitute, which this pass has not read.

**Status of the bill:** still "Introduced" on the official tracker. Ordered to be reported is not
reported, is not passed, is not law.

## 1.2 Meta's quarterly legal charge. CONFIRMED, and both outlets mischaracterised it.

**Coverage said:** ABC News, Meta "spent $2.4 billion on legal expenses" in Q2 2026. NYT, Meta
"spent more than $2 billion on legal expenses related to the social media addiction trials and
other litigation".

**The primary** is Meta's Form 10-Q for the quarter ended 2026-06-30, filed 2026-07-30
(accession 0001628280-26-050705). In the MD&A:

> General and administrative expenses in the three and six months ended June 30, 2026 increased $2.95 billion, or 111%, and $3.28 billion, or 66%, respectively, compared to the same periods in 2025. The increases were primarily due to $2.40 billion of charges related to legal proceedings in the three months ended June 30, 2026.

**Delta:** the number is right and **the characterisation is wrong**. The filing reports
**charges related to legal proceedings**, an accounting charge that principally reflects accruals
for probable losses. It is not a statement of what Meta paid its lawyers. "Spent on legal
expenses" implies defence cost; "recorded charges related to legal proceedings" is what happened.

For this site the correct sentence is close to: *Meta recorded $2.40 billion of charges related to
legal proceedings in the quarter ended June 30, 2026, which drove a 111% increase in general and
administrative expenses.* That is both accurate and more damaging to Meta than the version the
press ran, because an accrual is the company's own estimate of what it expects to lose.

## 1.3 France. CONFIRMED, and the real holding is far more useful than the report.

**Coverage said** (BBC, claim D17): in August France's top court blocked a bill banning under-15s,
holding that it infringed freedom of expression, after parliament approved it in July.

**The primary** is **Decision no. 2026-911 DC of 14 August 2026** of the Conseil constitutionnel,
on the *loi visant a proteger les mineurs des risques auxquels les expose l'utilisation des reseaux
sociaux*. Referred by 60 deputies on 23 July 2026 and 60 more on 24 July 2026, under the second
paragraph of article 61 of the Constitution, which is review **before promulgation**. Article 1 of
the law, which would have inserted a new article 6-9 into the 2004 digital economy law, was
declared contrary to the Constitution on the ground of freedom of expression and communication
under article 11 of the 1789 Declaration.

The operative holding, paragraph 17, in the original French:

> le legislateur ne pouvait, sans meconnaitre la liberte d'expression et de communication, instituer une interdiction de portee generale

Translation, labelled as such and not attributed to the court as its words: the legislature could
not, without disregarding freedom of expression and communication, institute a prohibition of
general scope.

**Delta, and this is the most important finding of Phase 1.** The BBC's summary is accurate as far
as it goes, and "blocked a bill" is the right posture: this was a priori review, so nothing was
struck from the statute book. But the reasoning was lost, and the reasoning inverts what the corpus
inferred from it.

The Conseil did **not** hold that protecting minors from social media offends free expression. It
held that a prohibition **of general scope**, imposed without regard to the individual minor's
situation or to the risks specific to each service, is disproportionate. The defect the court
identified is **bluntness**, not the attempt.

So the corpus inference at claim D22, that the speech objection to design mandates has now
succeeded in two legal systems, is **wrong as stated and should not be published in that form**.
What actually happened is closer to the opposite, and it is better for this site's argument:

- **New Mexico** declined feed-design remedies because a *court* is the wrong instrument and ordering one firm alone is unfair, and said that regulation of industry-wide features requires legislative or executive action.
- **France** struck a *legislature's* blunt, undifferentiated ban because it was not calibrated to individual circumstances or to the specific risks of specific services.

Read together, those two decisions say that the workable instrument is a **calibrated,
service-specific, market-wide standard**, which is exactly what this project proposes and neither a
lawsuit nor a blanket ban delivers. That is a substantially stronger point for the policy paper
than "the speech objection succeeded twice", and it is available only from the primary.

**Follow-on, verified but not load-bearing:** the President tasked the Prime Minister with
preparing a legally robust replacement, with a target of spring 2027. The reform was not abandoned.

## 1.4 Australia. CONFIRMED, with a wording correction.

**Coverage said** (BBC, claim D14): Australia banned social media for under-16s in December 2025,
the world's first such ban.

**The primary** is the Online Safety Amendment (Social Media Minimum Age) Act 2024, which inserted
Part 4A into the Online Safety Act 2021, with the obligation taking effect **10 December 2025**.

**Delta:** the date is right and "ban" is loose in a way that matters to a design-standard argument.
The statute does not prohibit minors from using anything. It places a duty on **age-restricted
social media platforms** to take **reasonable steps** to prevent Australians under 16 from having
accounts, with civil penalties up to 49.5 million Australian dollars for failing to. Messaging,
voice and video calling, online gaming, and services whose primary purpose is education, health
support or professional development are excluded.

That is a **platform-duty regime with a reasonable-steps standard and carve-outs**, not a
prohibition on users. For a site whose whole proposal is a duty-shaped standard rather than a ban,
the distinction is the point, and describing it as a ban would misrepresent the closest existing
analogue to what the project asks for.

---

## What Phase 1 changes

1. **Three of four claims needed a posture correction**, and in each case the primary was both more precise and more useful than the report.
2. **One corpus inference must be dropped**: D22's "the speech objection has succeeded twice, in two legal systems". The French decision does not support it. Replace it with the calibration reading above.
3. **The policy paper gains a genuine comparative point**, but not the one Phase 1.3 of the plan anticipated. The plan expected France to strengthen the constitutional-constraint argument. It does something better: it supplies a constitutional court saying that an undifferentiated prohibition is the wrong shape, which argues for calibration rather than against regulation.

---

# Phase 2: the docket

Docket 4:23-cv-05448-YGR, CourtListener 67908468. Documents fetched from the RECAP mirror.
Where a document could not be obtained, the reason distinguishes **not mirrored in RECAP** (the
entry exists on the docket, the PDF is not in the free archive) from **does not exist**.

## 2.3.3 The states' penalty submission. FETCHED, and it overturns the reporting.

**Coverage said**, in four outlets: the states seek, or say they will seek, roughly $200 billion.
Reuters and CNBC place the statement at a hearing in the week before trial; the NYT attributes it
to a court filing; the Guardian scales it against Meta's annual revenue.

**The primary** is docket entry **473**, *State AGs' Reply Regarding State AGs' Penalty and
Disgorgement Charts and Supporting Materials*, filed **2026-07-13**.

**The only occurrence of "$200 billion" in that filing is Meta's own revenue.** The states write
that they insist on substantial remedies in order to punish, deter and strip Meta, described as a
company that accrued more than $200 billion in revenue in 2025 alone, of its ill-gotten gains. The
figure is footnoted to **Meta's Form 10-K at 61, dated 2026-01-28**. It is a measure of the
defendant's size, cited from the defendant's own annual report. It is not a demand.

The same filing states that **the AGs will present their final requests for monetary relief at
trial**, selecting remedies supported by the proof, and that they do not seek double recovery.

**Delta, and this is the most important finding of the whole exercise.** As of 2026-07-13 the
states had expressly **not** stated a final monetary figure. A $200 billion number that four
outlets report as the states' demand appears in the states' own filing as **the defendant's annual
revenue**.

This is structurally identical to the error already documented for the 1.4 trillion figure, where
Meta's own exposure estimate was reported as the plaintiffs' demand. The same number is now
circulating with the same defect in the opposite direction: a revenue figure reported as a penalty.

**Two readings remain open and this pass cannot choose between them:**

1. The states separately stated approximately $200 billion as their likely ask at a hearing in the week of 2026-08-10, which is what Reuters and CNBC report. That would be in the transcript, which is not obtainable here (see 2.3.1).
2. The press read the revenue sentence in entry 473, or a similar sentence elsewhere, as a demand.

**Action: do not publish $200 billion as the states' demand.** The site should state what the
record establishes: that the states sought civil penalties **and disgorgement**, that they told the
court they would present final monetary requests at trial, and that the widely reported $200
billion figure matches Meta's 2025 revenue as cited in the states' own filing. Record the
unresolved conflict rather than resolving it in favour of the coverage.

**Also established by entry 473, and new to this project:** the monetary ask has **two components**,
civil penalties and disgorgement of ill-gotten gains, and the states say that although multiple
claims would entitle them to disgorgement they seek to disgorge only once. That is a materially
more precise picture than "damages", the word most of the coverage used.

## 2.3.2 The trial protocol order. FETCHED. Does not confirm bifurcation.

Docket entry **549**, *Stipulation and Updated [Proposed] Order Governing Trial Protocol*, filed
2026-08-18, entered on the MDL docket as ECF 3416. It recites that the parties met and conferred in
light of the Court's guidance at the **2026-08-13 pre-trial hearing** and in Pre-Trial Order No. 8,
and sets procedures governing "the first Multistate Attorneys General (AGs) trial starting in
August 2026". Note "first".

**It contains no reference to phases, to bifurcation, or to an advisory jury.** Positive control
run before reporting that absence: the string "TRIAL PROTOCOL" appears 16 times in the extracted
text, so the document is readable and the search works.

**Pre-Trial Order No. 8** (entry 534, ECF 3392, filed 2026-08-16) was also fetched. Its single use
of "bifurcated" concerns the **exchange of witness binders**, not the structure of the trial.

## 2.4 Bifurcation: NOT CONFIRMED. The plan's caution was correct.

The inference came from two party-authored docket captions: motions in limine in June directed at
an "Advisory Jury Phase Of Trial", and Meta's "Supplemental Witness List For Remedies Phase" at
entry 545.

Entry 545 was fetched and **has no text layer**: 17 pages yielding about 1,200 characters, all of
it CM/ECF header stamps, the body being images. This is the same failure class as the GPO TIFF
problem this repository already documents for hearing transcripts. A positive control for the word
"witness" in a document titled Witness List returned zero, which is how the extraction failure was
caught rather than mistaken for a finding.

So the position is: **party filings use phase language; no court order reached in this pass
establishes a bifurcated trial structure.** The plan said not to publish it until an order
confirmed it. It is not confirmed, and it should not be published.

## Entry 550, the civil minutes for day one. FETCHED, and highly useful.

Not in the plan's list, found while working the docket. The court's own minutes for **2026-08-18**,
5 hours 17 minutes before Judge Gonzalez Rogers, captioned *State Attorneys General v. Meta
Platforms, Inc.* They record:

- **Jury Trial, held.** The matter was continued to 2026-08-19.
- **The witness called by the plaintiff was Arturo Bejar.** This confirms from the court's own record what four sources reported: he was the states' first witness.
- Counsel of record for the plaintiffs includes **Megan O'Neill**. That settles the spelling, which one outlet in the corpus rendered with an h. A court record outranks a newsroom.
- Counsel of record for Meta includes **Paul Schmidt**, confirming the defence opener's identity.

## Not obtained, with the reason

| Item | Status |
| --- | --- |
| 2.3.1 Transcript of proceedings, entry 540 | **Not mirrored in RECAP.** The archive returns a NoSuchKey error for the document. The entry exists on the docket. This is the document that would settle the $200 billion question |
| 2.3.4 Meta's filing of 2026-08-17, entry 542 | **Not mirrored in RECAP**, same error |
| Entries 544, 546 | **Not mirrored in RECAP**, same error |
| 2.3.5 The order on Bejar's testimony | Not located this pass. Entry 550 confirms he testified; the motion and any ruling were not found |
| 2.3.6 The Ninth Circuit disposition | Not located this pass. It would sit on the appellate docket, not this one |
| 2.3.7 The pleaded remedy list | Partially. Entry 473 references the AGs' Remedy Charts 4 to 6 and the disgorgement framework; the charts themselves were not fetched |
| 2.3.8 Michigan's withdrawal | Not located this pass |

## Addendum 2026-08-20: three of these were obtained later

This table is a dated record of what one pass reached and it is left as written. Three rows have
since been answered, two of them by later passes and one by a route this pass did not consider.

- **2.3.6 The Ninth Circuit disposition.** Located and cached 2026-08-18. It is a published opinion
  dismissing Meta's appeal for lack of appellate jurisdiction, holding that Section 230 is a defence
  to liability rather than immunity from suit. Claims 38 to 42 of the MDL ledger.
- **2.3.8 Michigan's withdrawal.** Answered 2026-08-20, and it was **four** states rather than one
  (Michigan, Georgia, Missouri, North Dakota), leaving in January 2025 over discovery burden. That
  accounts for the whole drop from 33 filers to the 29 at trial. Claim 17a.
- **Entry 540, the row that says it is the document that would settle the $200 billion question.**
  Still not mirrored in RECAP, and **the question no longer waits on it.** At a press conference on
  the afternoon of this same trial day, a Reuters reporter asked the attorneys general about both
  circulating figures directly. The answer, at claims 22d to 22h, is that $200 billion is Meta's
  annual revenue and the states are not asking for $1.4 trillion. The transcript would still be
  better evidence and is still worth having; it is no longer the only thing that can answer this.

**The general point is the one worth keeping.** Every row above is phrased as a property of a
document, and two of them turned out to be properties of where this pass looked. A public official
answering a reporter's question is a source, and it was available on the day this table was written.

## What Phase 2 changes

1. **The $200 billion figure must not be published as the states' demand.** The states' own filing uses that number for Meta's revenue and says the final ask comes at trial.
2. **The monetary ask has two components**, civil penalties and disgorgement, which is more precise than anything in the coverage.
3. **Bifurcation stays unpublished.** Party captions are not a holding.
4. **Three facts are now confirmed from the court's own minutes**: Bejar as the first plaintiff witness, and the correct spellings of both lead advocates.

---

# Addendum, 2026-08-18 evening: one more primary, found after this file closed

**The Ninth Circuit's published opinion of 2026-08-10** (trial-docket entry 541, No. 24-7032) was
located by the follow-up sweep, cached, and distilled straight into the MDL ledger as claims 38 to
42, so its full treatment lives there rather than here. The delta, in this file's own format: the
coverage said a First Amendment motion to dismiss was rejected; the primary is a Section 230
appealability dismissal that records Meta identifying **no** constitutional interests at stake. It
also carries a second stay refusal (the emergency motion, denied as moot) and the appellate court's
own description of the district court's Section 230 narrowing, which anchored a Tension open since
2026-07-24. Recorded here so this file remains a complete index of what the 2026-08-18 exercise
established against primaries, and only an index: the ledger is the home.
