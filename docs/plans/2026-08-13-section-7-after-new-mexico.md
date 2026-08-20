---
title: "Plan: section 7 and section 4 after the New Mexico judgment"
subtitle: "A court tested this paper's central legal bet and split it. What that changes, what it confirms, and what must be verified before a word of the paper moves."
status: "Prepared and APPLIED 2026-08-13. Sections 1, 4 and 7 of the policy paper were revised against the review copy and the body regenerated. This file is now the record of why, not a pending instruction. ADDENDUM 2026-08-18: the New Mexico ledger gained an age-assurance section that bears directly on 7.2, and section 4 gained two comparative decisions. Neither changes this file's conclusions; both strengthen them. See the addendum at the end."
date: 2026-08-13
site: "de-amplify.com"
document: "Operational and analytic checklist. It locates every affected string and states what it becomes; it does not pre-write the copy."
---

# Plan: section 7 and section 4 after the New Mexico judgment

## Why this file exists

On 2026-08-06 the First Judicial District Court entered final judgment in *State of New Mexico ex rel. Torrez v. Meta Platforms, Inc.*, No. D-101-CV-2023-02838. For most readers that is a $942 million story. For this paper it is something rarer: **the first time a court has been handed this proposal's core legal question and answered it in both directions in one document.**

The paper's central bet, stated in section 4, is that a tiered ranking of legal exposure exists, that control integrity sits at the safe end of it, and that ranking-objective mandates sit at the exposed end. New Mexico is a live test of that bet. It came back:

- **Liability: yes.** Section 230 did not shield Meta from the public-nuisance claim.
- **Feed remedy: no.** The court granted "no abatement relief relative to the design and implementation of Meta's algorithms", holding that such relief "would likely violate the First Amendment and Section 230".
- **Non-content remedy: yes.** Notification blackouts, default-hidden like counts, and a usage cap on under-18 accounts, all ordered, all justified as "least connected with platform content".

That is the paper's own line, drawn by a judge, and then the paper's own prediction about which side is reachable, confirmed. It is also, in one respect, a direct contradiction of an example the paper currently uses. Both need handling.

## The single most important finding: the paper is missing an axis

Section 4 ranks legal exposure across four tiers. Every tier is written about **what a legislature may enact**. New Mexico is about **what a court may order against a defendant it has already found liable**. Those are different powers, with different limits, and this case shows they can point in opposite directions on the identical feature.

Concretely, and this is the sharp edge:

| | *NetChoice v. Bonta* (SB 976), 9th Cir. No. 25-146, 2025-09-09 | New Mexico, 2026-08-06 |
|---|---|---|
| **The measure** | Minors' accounts default to settings "that cannot show the number of likes, shares, or other feedback that a post has received", absent parental consent | Hide "like counts" by default on under-18 accounts, overridable only with a parent's permission |
| **Characterized as** | **Content-based** | "least connected with platform content" |
| **Scrutiny** | **Strict**, and failed: not "the least restrictive way to advance California's interest in protecting minors' mental health" | No First Amendment bar found |
| **Outcome** | **Enjoined** | **Ordered** |

**Both halves of this table are now verified against the opinions themselves** (see prerequisite work below, which is complete). Two courts took materially the same measure, with materially the same parental-consent carve-out, and reached opposite constitutional results eleven months apart. The paper's canonical example of the danger zone is the thing a court actually imposed, on reasoning that is the mirror image of the paper's.

**The reconciliation is not that one of them is wrong.** It is that a court sitting in equity over an adjudicated wrongdoer has remedial latitude a legislature regulating an entire industry does not. The New Mexico court says so itself, repeatedly and in the same breath as its refusals: it declined industry-wide design relief precisely *because* it had "jurisdiction over just one social media company", and worried that restrictions on Meta alone "would merely shift users to other, non-party platforms" and could be "inequitable and unduly injurious to Meta".

So section 4 does not need its tiers rewritten. It needs a **second dimension**: the same measure sits at a different exposure level depending on whether it arrives as a statute of general application or as a remedy against a liable defendant. That distinction is currently invisible in the paper, and without it the New Mexico result reads as a refutation when it is closer to a confirmation with a caveat.

## Section 7.2 gets a mechanism, and it is not the one the paper names

Section 7.2 currently reads, in relevant part:

> Age verification is a potential showstopper, not just a hard problem. Layer II depends on identifying minors, and doing that without invasive ID checks is unsolved; the UK is colliding with exactly this.

That is true and now badly under-specified. The external picture as of 2026-08-13 is that **the constitutional room for age assurance has been opening while the statutory room has stayed shut**, and it is the statute, not the First Amendment, that actually blocked a judge who wanted to act.

Five data points, in the order they matter:

1. **New Mexico, judgment paragraphs 133 to 142.** The court wanted age verification. It called it "the key to making Meta's platforms safe for adolescents". It then held it could not order it, because COPPA's definition of "collection" is broad and expressly includes "passive tracking of a child online", so requiring age verification would require collecting exactly the data COPPA restricts. Its conclusion, verbatim: the Court "cannot order Meta to request children to submit personal data or be passively tracked online, even for age-verification purposes." It further found that Meta's own effort to train an age classifier "is hindered by COPPA and its prohibition on the use of data that is needed to train a classifier to be more accurate in its age predictions", and was careful to add that it was "not criticizing the policies behind COPPA".

   **This is the catch-22 the paper should be naming: the children's privacy statute forbids collecting the data needed to identify children in order to protect them.** It is a stronger, more specific, and now judicially found version of section 7.2's point, and it is not a First Amendment problem at all.

2. **The FTC's response exists and is deliberately thin.** On 2026-02-25 the FTC issued a policy statement of enforcement discretion for operators collecting personal information solely to determine a user's age, conditioned on purpose limitation, prompt deletion, and notice, and limited to Mixed Audience and General Audience services rather than services directed to children. The New Mexico court considered it and declined to rely on it, because it "does not create any substantive rights or entitlements", the FTC retains its enforcement power, and agencies may change policies. That reasoning is sound and checkable, and it is a useful lesson for the paper: **an enforcement-discretion policy is not a safe harbour a design standard can be built on.**

3. **Free Speech Coalition, Inc. v. Paxton (SCOTUS, No. 23-1122, 2025-06-27), read in full on 2026-08-13 and now cached.** It upheld age verification under **intermediate** rather than strict scrutiny: "H. B. 1181 has only an incidental effect on protected speech, and is therefore subject to intermediate scrutiny." So it does undercut any flat claim that age verification is constitutionally foreclosed.

   **The rest of what this plan previously said about it was wrong, and reading the opinion is what caught it.** The earlier draft asserted the Court "was explicit that this does not reach general-audience services." It said no such thing. The phrases "general audience" and "general-audience" do not appear in the opinion at all. What limits its reach is the **statute's own terms**: H. B. 1181 covers a commercial entity publishing material "more than one-third of which is sexual material harmful to minors."

   **And the passage that actually discusses social media runs the other way.** Petitioners argued H. B. 1181 was not appropriately tailored *because* it "does not require age verification on other sites, such as search engines and social-media websites, where children are likely to find sexually explicit content." The Court **rejected** that: under intermediate scrutiny "the First Amendment imposes no freestanding underinclusiveness limitation," and Texas "need not address all aspects of a problem in one fell swoop." That is not a carve-out protecting social media from age-verification mandates. If anything it says a legislature may cover part of a problem without the partial coverage becoming a tailoring defect, which is mildly **favourable** to a staged version of this paper's proposal.

   The honest summary is therefore: *Paxton* is not authority for social-media age assurance, because the statute before the Court did not reach social media and the content at issue was obscene to minors. It is also not authority against it. Anyone using this case on the site must say which of those two they mean.

4. **NetChoice v. Bonta (9th Cir., No. 25-2366, 2026-03-12)**, the CAADCA appeal already cited in section 4, vacated the injunction on the age-estimation requirement. **Verified against the opinion itself for this plan**, because the posture matters: the panel held NetChoice was "not likely to succeed on the merits of its facial challenge to the age estimation requirement" and that on the record before it the panel "could not say that the age estimation requirement facially violates the First Amendment at all". That is a facial-challenge burden ruling on an undeveloped record, not a merits blessing, and the paper should not upgrade it into one.

5. **SB 976's age-verification requirement was held unripe** (9th Cir. No. 25-146, 2025-09-09), because it was not set to begin until 2027. Taken with point 4, the pattern is that American courts keep finding reasons not to decide age assurance: unripe here, undeveloped record there, statutorily barred in New Mexico. The paper should say that plainly, because "the courts have not resolved this" is a very different claim from "the courts have rejected this", and only the first is true.

**What section 7.2 becomes:** still a showstopper, but for a nameable reason, with a nameable fix-holder. Constitutional space may be opening; the binding constraint in the United States right now is COPPA plus institutional competence, and both point at Congress rather than at courts. That is a more useful honest limit than "unsolved", and it is one the paper can defend with primary sources.

## Section 7 limits the judgment corroborates

These need light touches, not rewrites, but they should cite the case because a limit that a court has adopted is stronger than a limit the author asserts.

| Limit | What New Mexico adds |
|---|---|
| **7.4 De-amplification affects speech distribution** | Upgraded from prediction to holding. The court refused algorithm relief as likely to violate the First Amendment and Section 230. The paper predicted tier 3 was exposed; a court agreed. |
| **7.8 Displacement** | The court relied on it: significant sign-up friction on one platform "would merely shift users to other, non-party platforms". The paper listed displacement as a limit; a court used it as a reason to deny relief. |
| **7.9 The banishment risk** | Adjacent support. The court worried restrictions on Meta alone "could harm the viability of Meta and its platforms" given "the absence of Meta's competitors in this litigation". |
| **7.1 Frame, not a finished rule** | The court's complaint about the State's algorithm requests, that they were "vague and aspirational, rather than objective and measurable", is the single best external argument for section 3 and section 5's observable-test framing. It should be quoted there, not buried here. |

That last row is worth stating plainly: **the reason the State lost its algorithm remedy is the reason this paper exists.** The court did not say design relief is impossible. It said the request was not written in objective and measurable terms. Section 3 already tries to write to that constraint; New Mexico is the strongest available evidence that the constraint is real.

## What this does NOT license

- **One state trial court, not final.** Its constitutional reasoning binds nobody, Meta has announced an appeal, and the algorithm holding is the most likely part to be contested. Nothing here may be stated as settled law.
- **The problematic-use measures were largely Meta's own proposals.** The court said it was "in large measure, adopting Meta's proposals". Provisions a defendant volunteered are weak evidence of what a court will impose over objection, and the paper must not cite the notification and time-limit orders as proof that contested design remedies are available.
- **Claim the hit, name the miss.** The tiering was right: a court ordered tiers 1 and 2 and refused tier 3, on the paper's own content-proximity reasoning. Say so. The miss is separate and specific: section 7.2 called age verification unsolved and pointed at the UK, when the binding constraint in the United States is COPPA. A reader following the old section 7.2 would have gone looking in the wrong place. Both facts are true and the paper is better for carrying both.

## The surfaces this touches

Section 7 and section 4 live in the **policy paper**, which is the review-copy pipeline. `content/proposal.md` is currently **byte-identical** to the body of `docs/proposals/2026-07-15-brake-integrity-standard.md` (verified 2026-08-13, 45,221 characters each). **Edit the review copy and regenerate the body.** A direct edit to `content/proposal.md` breaks that invariant, which is the trap the trial-flip plan also flags.

| File | What changes |
|---|---|
| `docs/proposals/2026-07-15-brake-integrity-standard.md` | Sections 4 and 7. This is the only place prose is authored. |
| `content/proposal.md` | Regenerated from the above, never edited directly. |
| `content/notes.md` and its review copy | Only if the appendix's age-assurance framing repeats section 7.2's obstacle. Check before assuming. |
| `docs/proposals/2026-07-16-brake-integrity-pitch-policymakers.md` | The policymaker deck is the surface most likely to carry a now-incomplete age-verification line, and it is read directly by `llms-full.txt`. Check it. |
| `docs/distillations/new-mexico-v-meta.md` | Already carries claims 30 to 40 and the new Tensions entries. **No further ledger work is required for this revision**, except distilling the Age Assurance section claim by claim (see below). |
| `src/app/scorecard/page.tsx` | Only if the seven criteria reference age assurance. Check; do not assume. |

## Prerequisite work: COMPLETE as of 2026-08-13

1. **Distil the judgment's Age Assurance section into the ledger. DONE.** `docs/distillations/new-mexico-v-meta.md` now carries claims 41 to 48 under a new `(g.1)` subsection, tiered and anchored to judgment paragraphs 133 to 142. All spans verify under `npm run check:quotes` (New Mexico contributes 50 checked spans).

   **One defect found and fixed in the checker while doing this, worth recording because it is this repo's recurring shape.** The `sections` scoping matched heading text only, so adding a `#### (g.1)` subsection under the scoped `### (g)` heading silently removed all 30 new spans from coverage while the run still printed OK. The total moved from 353 to 353 and nothing complained. Scoping now tracks heading depth, so a matched section owns its subsections, and the script prints **per-ledger span counts on every run** so a future drop in one ledger cannot hide inside a healthy-looking total.

2. **Verify the SB 976 like-count posture. DONE, and the paper is accurate.** *NetChoice v. Bonta*, 9th Cir. No. 25-146 (D.C. No. 5:24-cv-07885-EJD), filed 2025-09-09, was fetched and read. Its syllabus states that the panel found "the like-count requirement to be content-based and applying strict scrutiny, the panel held that the requirement was not the least restrictive way to advance California's interest in protecting minors' mental health." The paper's section 4 wording, "found content-based, drew strict scrutiny, and was enjoined", is correct as written.

   The same opinion also **confirms both of section 4's honest caveats about SB 976**: NetChoice "lacked associational standing" for the as-applied personalized-feed challenge, and on the facial challenge the panel said that "although some personalized feed algorithms may be expressive, that inquiry is fact intensive". The private-mode default "was not content based and survived intermediate scrutiny". A third fact the paper does not currently carry: **SB 976's age-verification requirement was held unripe**, because it was not set to start until 2027. That is a fourth data point for section 7.2, and it points the same way as the others: American courts keep not deciding age assurance.

   The hazard flagged in the earlier draft of this plan was real. Searches attribute a like-count holding to the **March 2026 CAADCA** ruling; that is wrong. The CAADCA opinion (No. 25-2366) was read and **contains no mention of like counts at all**, against 30 hits for "age estimation" as a positive control. SB 976 and CAADCA are different statutes in different cases before different district judges.

3. **Check whether *Doe 1 v. Meta* went en banc. DONE: fully briefed and PENDING, neither granted nor denied.** **[SUPERSEDED 2026-08-20: DENIED on 2026-08-17, docket entry 55. Judge R. Nelson voted to deny; Judges W. Fletcher and Berzon recommended granting; no judge of the full court requested a vote, so it failed for want of a call for a vote rather than on a contested one. Section 4 of the paper is updated and the order is cached. See the third addendum below.]** The Ninth Circuit docket for No. 24-1672 reads: #50 (2026-04-28) opinion affirmed, concurrences by Berzon and R. Nelson; #51 (2026-05-12) petition for rehearing en banc; **#52 (2026-05-12) an order directing Meta to respond** within 21 days; #54 (2026-06-02) Meta's response. Last known filing 2026-06-02; docket current to 2026-08-10.

   The order calling for a response is the part worth noting: the Ninth Circuit does not order a response to a petition it means to deny. Section 4 now says the holding is current law and that the circuit is actively trying to undo it, quoting Berzon (joined by W. Fletcher) urging reconsideration en banc and Nelson, who wrote the opinion, saying it "will fall to the en banc court" to settle. That is more useful to a reader than any adjective about uncertainty.

   The paper's quotation from that opinion, "matching users with content is publishing conduct, even when the user has not requested the content", was checked against the opinion and is **verbatim accurate**.

4. **Now write.** Sections 4 and 7 are the paper's credibility, and this is a revision where being approximately right is worse than being late. Everything the revision needs is verified; what remains is the editorial judgment described below.

## The reading that was chosen, and what it rejected

The judgment supported a range, from "the strategy is confirmed and the timeline is longer" to "courts are the wrong instrument, this belongs in legislation". The revision takes the first and folds the second into section 7.2 and section 7.8 specifically, where it is a finding rather than a mood: on age assurance and on displacement the court did not decline to help, it said it lacked the power, and named the branch that has it.

What the revision deliberately avoids is the failure mode of a document like this, which is hedging everything into mush. A qualifier earns its place only if it changes what a reader concludes. Three do: the measures were largely Meta's own proposals, the judgment is on appeal, and one trial court binds nobody. Ritual throat-clearing about how this is only one case, repeated in every paragraph, does not, and was cut wherever it had crept in.

This plan does not touch the scorecard. The seven-part test is the standard, and section 3 of the paper and `/scorecard` move in lockstep; if this revision reaches the criteria it becomes a scorecard change with its own review.

---

*Provenance: written 2026-08-13, prerequisite work completed the same day. The New Mexico judgment was read directly from the cached copy in `docs/distillations/sources/`; every quotation from it in this file was checked as a verbatim substring of that cache. Three Ninth Circuit opinions were fetched and read in full to verify the paper's existing characterizations, all of which hold: the CAADCA appeal (No. 25-2366, 2026-03-12), the SB 976 appeal (No. 25-146, 2025-09-09), and Doe 1 v. Meta (No. 24-1672, 2026-04-28). The Doe en banc posture comes from the Ninth Circuit docket, which is current to 2026-08-10. Two items remain secondary-sourced and are marked as such in the text: FSC v. Paxton and the FTC's February 2026 COPPA policy statement. Fetch and cache both before either appears on the site; the FTC statement in particular is quoted by the New Mexico court and deserves the same treatment as the Commission releases already cached in `sources/`.*

---

## Addendum, 2026-08-18: what the age-assurance distillation adds to 7.2

This file concluded that age assurance is still a showstopper, but for a nameable reason with a
nameable fix-holder, and that the binding constraint is statutory rather than constitutional.
**Material distilled on 2026-08-18 supports that and sharpens it.** Nothing here reverses a
conclusion above; this is a pointer so the next revision does not have to rediscover it.

The New Mexico ledger now carries the order's age-assurance remedies at section (g.2), claims 49 to
54, distilled from the judgment already cached in this repository. Three things matter to 7.2:

1. **The court ordered nine measures and called the set "far from ideal or sufficient"** (claim 54, with claim 48). It adopted them because better options were outside its jurisdiction. Section 7.2 argues the constraint is real and locatable; here is a court locating it, on the record, while granting what it could. **A refusal shows a limit. A grant labelled inadequate shows the same limit from the inside.**
2. **The most transferable measure is a default rule, not a detection rule** (claim 51): where the platform believes a user is under 13, or under 18 but cannot estimate precisely, it must treat them as being in that band unless and until they verify. That is a way of writing an age-assurance obligation that **does not require the platform to determine an age**, which is the exact thing 7.2 identifies as blocked. It deserves consideration as a drafting answer, not just as a case fact.
3. **The COPPA constraint runs through the remedy as well as the reasoning** (claim 49): the two-year under-13 prediction model is ordered on reasonable best efforts "in light of COPPA limitations". The statutory blocker 7.2 names is visible in the operative text of the order, not only in the discussion.

Separately, section 4 gained two comparative decisions on 2026-08-18, the French Conseil
constitutionnel decision of 14 August 2026 and Australia's minimum-age duty. **Read together they
say the workable instrument is calibrated, service-specific and operator-facing**, which is the same
direction 7.2 points. If 7.2 is rewritten, those belong in the same breath.

---

## Second addendum, 2026-08-18 evening: a Ninth Circuit holding that touches section 4, not 7

Recorded here because this file is the current home for "what the 2026 record does to the paper's
legal sections", and because the temptation on reading it is to file it under 7.

**It is a section 4 fact, not a section 7 one.** On 2026-08-10 the Ninth Circuit issued a published
opinion in *People of the State of California v. Meta Platforms, Inc.*, No. 24-7032, dismissing
Meta's appeal from the MDL 3047 Section 230 rulings for lack of appellate jurisdiction and holding
that **Section 230 provides "a defense to liability, not immunity from suit"**. Section 4 already
argued that Section 230 is "a liability shield the platform holds, not a source of legislative
power"; this is direct, published, same-circuit support for that exact characterisation, and it has
been added there.

**Two things in it are worth flagging for whoever revises 7.**

1. The opinion records that **"Meta does not identify any constitutional interests at stake"** in that appeal. Section 7 weighs how much constitutional risk a design-side obligation carries. It is worth knowing that the largest platform in this litigation, appealing on exactly the question of whether these claims can proceed, did not raise one. That is not a holding about the First Amendment and must not be written as one. It is a fact about what was argued, and it belongs in the same honest-limits register as everything else in 7.
2. It arrived from a lead that was **wrong about its own subject**: the item was chased as "the Ninth Circuit disposition of Meta's First Amendment motion to dismiss", single-sourced to one newspaper. Anyone revising 7 from press coverage of appellate activity should assume the same failure mode is available, and read the opinion.

**Nothing in 7.2 changes.** Age assurance remains the showstopper the first addendum describes, and
the statutory constraint remains statutory. This is a note about where the new material goes, so the
next revision does not spend its budget rediscovering that it goes somewhere else.

---

## Third addendum, 2026-08-20: the Doe 1 petition was denied

Item 3 above recorded the en banc petition as fully briefed and pending. **It was denied on
2026-08-17**, the day before the state attorneys general's trial opened, and the body of this file
is left as written so the check that found it can be graded.

The order is three sentences and the vote is the substance. Judge R. Nelson, who wrote the panel
opinion, voted to deny. **Judges W. Fletcher and Berzon recommended granting.** The full court was
advised and **no judge requested a vote**, so the petition failed for want of a call for one rather
than on a contested vote.

**What it does to section 4**, which is where this belongs and not section 7: the paper had hedged
"build on it as current law, not as settled law", and that hedge is now discharged. Recommendation
as publishing is settled Ninth Circuit law absent certiorari. The paper says so, and also says that
a denial of rehearing is not an endorsement of the panel's reasoning and that two of the three
judges who heard the case wanted it reheard.

**Nothing in section 7 changes.** Age assurance remains the showstopper the first addendum
describes, and the statutory constraint remains statutory. Recorded here because this file is the
project's running record of what the 2026 legal record does to the paper's legal sections, and
because item 3 above would otherwise stay wrong.
