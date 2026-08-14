---
title: "The FTC control-integrity record: an American standard, never pointed at a feed"
type: distillation
mode: multi-source (a body of enforcement, not one proceeding)
subject: Federal Trade Commission enforcement on whether an offered control actually works, covers its related surfaces, and persists; ROSCA and FTC Act section 5; the vacated Negative Option Rule, 16 C.F.R. part 425
as_of: 2026-08-14
audience: general public reader
sources:
  - "PRIMARY: Custom Communications, Inc. v. FTC, Nos. 24-3137 et al. (8th Cir., filed July 8, 2025), published, per curiam. Cached at docs/distillations/sources/ca8-2025-07-08-custom-communications-v-ftc.txt: https://ecf.ca8.uscourts.gov/opndir/25/07/243137P.pdf"
  - "PRIMARY: FTC v. Amazon.com, Inc., No. 2:23-cv-00932 (W.D. Wash.), Document 1, complaint filed 2023-06-21 (FTC Matter 2123050). Cached at docs/distillations/sources/ftc-2023-06-21-amazon-prime-complaint.txt: https://www.ftc.gov/legal-library/browse/cases-proceedings/2123050-amazoncom-inc-rosca-ftc-v"
  - "PRIMARY: same case, Document 535, Stipulated Order for Penalty Judgment, filed 2025-09-25. Cached at docs/distillations/sources/ftc-2025-09-25-amazon-prime-stipulated-order.txt"
  - "PRIMARY: In the Matter of Epic Games, Inc., FTC Matter 192-3203, administrative complaint. Cached at docs/distillations/sources/ftc-2022-epic-games-complaint.txt: https://www.ftc.gov/system/files/ftc_gov/pdf/1923203EpicGamesComplaint.pdf"
verified_by: "2026-08-14: four documents fetched from the issuing bodies (the Eighth Circuit's own server and ftc.gov) and read directly. Every quoted span verifies against those caches under npm run check:quotes. THIS RECORD IS DELIBERATELY PARTIAL: it distils three matters plus the rule's vacatur, out of roughly twelve the parent research plan lists. The unbuilt ones are named in the Coverage note and nothing is claimed about them here."
---

**Tier key (this record's calibration, per the parent plan):** ESTABLISHED means stated in a primary source (here, the text of a federal appellate opinion, an FTC complaint, or an entered order) or in the project's verified baseline with independent corroboration; OBSERVED means carried by secondary coverage or inferred from it; ASSUMED means the drafter's inference, flagged as such. **Two calibrations are specific to this record and both cut against overreading it. A COMPLAINT IS AN ALLEGATION**, so "the FTC alleged" is ESTABLISHED where "the company did" is not. **A STIPULATED ORDER IS AN AGREEMENT**, so it resolves a case without any court adjudicating the allegations behind it.

## TLDR (summary surfaces, plain text, derived from the ledger)

- **One line (label):** The FTC already treats a control that does not do what its label says as illegal in itself, and the general rule saying so was struck down six days before it took effect.
- **Nav label (~40 chars, for the /distillations index card, breadcrumb, and cross-links):** The FTC control-integrity record
- **OG title (~50 chars, for the share card):** The FTC control-integrity record: the ledger
- **Search snippet (~155 chars, for the meta-description tag):** The FTC already treats a cancel button that does not cancel as illegal. Its general rule saying so was vacated on procedure six days before it took effect.
- **Ledger snippet (~155 chars, for the /distillations/<slug> meta description ONLY; keeps the search snippet to a single consumer):** The evidence record for an American control-integrity standard: what the FTC alleged, what was merely agreed, and what a court vacated without reaching.
- **One sentence (card):** American law already contains the idea this site calls brake integrity, in the Federal Trade Commission's enforcement against controls that do not do what their labels promise, but the general rule embodying it was vacated by the Eighth Circuit on procedural grounds on July 8, 2025, six days before its compliance date, leaving the substance to case-by-case litigation and company-specific orders.
- **One paragraph (meta description):** The Federal Trade Commission has repeatedly alleged that a control which does not do what its label says is itself unlawful, independent of any lie told about it: that an "End Membership" button which did not end membership was the violation, that a cancellation route missing from the devices people signed up on was a violation, and that shrinking and burying a working undo button because it was working was a violation. The general rule embodying those ideas, the 2024 Negative Option Rule, was vacated in full by the Eighth Circuit on July 8, 2025 on procedural grounds, six days before its compliance date, with the court expressly declining to reach whether the rule was substantively lawful. What survives is case-by-case enforcement and company-specific orders. Nobody has pointed any of it at an engagement feed. (As of August 14, 2026.)

## Reader summary

The most common objection to this project's proposal is that "controls that work" is too vague to be a legal obligation. That objection is weaker than it sounds, because American law has been enforcing a version of it for years, just never against a social feed.

The Federal Trade Commission's theory in a run of cases is not that companies lied about their controls. It is that the control itself failed, and that the failure was the violation. In its 2023 complaint against Amazon over Prime, the FTC alleged in one flat sentence that the button labelled "End Membership" did not end membership. It alleged separately that people who signed up through a Fire TV or FireStick could not cancel through those same devices. In its complaint against Epic Games, it alleged that Epic had a working undo button, discovered people were using it, and then renamed it, shrank it, moved it to the bottom of the screen and made it require a press-and-hold, after which an internal email recorded a roughly 35% decline in undo rates.

Those three allegations are, in order, the three things this site asks of a brake: that it work, that it exist on the surfaces where the choice was made, and that it not be quietly degraded. The vocabulary is different. The idea is the same one.

**Then the general rule died on a technicality.** In 2024 the FTC amended its Negative Option Rule to require, among other things, a cancellation mechanism as simple as enrolment. Industry challenged it, and on **July 8, 2025**, six days before the rule's compliance date, the Eighth Circuit **vacated it in full** because the Commission had skipped a required preliminary regulatory analysis. The court did not decide whether the rule was substantively lawful; it said in terms that it did not need to. It also said it did not endorse the practices the rule targeted.

So the American position today is that the principle is enforceable one company at a time, through litigation and negotiated orders, and is not written down as a general rule. **And none of it has ever been aimed at a recommendation feed.**

**Read two limits with all of this.** Complaints are allegations, not findings, and the Amazon case ended in a **stipulated** order, which is an agreement rather than an adjudication. And every matter here is about subscriptions, purchases and cancellation flows; extending the reasoning to a feed control is an argument this site is making, not something the FTC has done.

## Brake-integrity relevance

The paper's section 5 argues that a design standard is not a standard until it says what must happen, how fast, across which surfaces, and for how long. The most common reply is that no regulator has ever written such a thing for an interface control.

This record is the counter-example, with a caveat that matters. The FTC has repeatedly treated all three properties as independently actionable:

- **It must work.** The Amazon complaint's allegation about the End Membership button is a single sentence with no deception theory attached to it. The button's failure is the wrong.
- **It must cover its surfaces.** The same complaint alleges that a cancellation path absent from the devices people enrolled on is a defect in the control, which is precisely the "scoped" criterion on the scorecard.
- **It must not be degraded.** The Epic allegation is the sharpest, because it describes a control that worked being made worse on purpose, with the effect measured internally.

**What this does not give the project is an adjudicated holding.** These are allegations that ended in agreed orders. The strongest genuinely adjudicated point in this record runs the other way: when the FTC tried to convert the principle into a general rule, a federal appellate court vacated the whole thing without reaching its merits, and the vacatur stands.

The honest use, then, is narrow and still useful. It is not "a court has held that controls must work." It is: **the United States already has an enforcement practice built on exactly this idea, so a standard that names it is not novel, and the objection that it is unadministrable is answered by the agency's own docket.** What is missing is not the concept. It is anyone applying it to a feed.

## Claims (the ledger)

### (a) The general rule, and its vacatur

1. **[ESTABLISHED]** In October 2024 the FTC amended its 1973 Negative Option Rule by a **3-2 vote**, adding provisions that "bar sellers from misrepresenting material facts and require disclosure of material terms, express consumer consent, and a simple cancellation mechanism." *(Eighth Circuit opinion, background section.)*
2. **[ESTABLISHED]** The Eighth Circuit **vacated the Rule in full** on **July 8, 2025**, per curiam (Loken, Erickson and Kobes, Circuit Judges), on the ground that the Commission "failed to follow procedural requirements under section 22 of the Federal Trade Commission Act," specifically by not preparing a preliminary regulatory analysis. *(Opinion, introduction and part II.)*
3. **[ESTABLISHED]** The court **expressly declined to reach the merits**: "because we hold the Commission's rulemaking process was procedurally insufficient and Petitioners demonstrated prejudicial error, we need not address Petitioners' other substantive challenges to the Rule." The unreached challenges were that the FTC exceeded its statutory authority and that the Rule was arbitrary and capricious. *(Opinion, end of part II.)*
4. **[ESTABLISHED]** The court volunteered that the outcome was not an endorsement of the conduct: "While we certainly do not endorse the use of unfair and deceptive practices in negative option marketing, the procedural deficiencies of the Commission's rulemaking process are fatal here." *(Opinion, part II.C.)*
5. **[ESTABLISHED]** The Rule contained a **severability provision** (16 C.F.R. section 425.9) and the court vacated everything anyway, "because of the prejudice suffered by Petitioners as a result of the Commission's procedural error," adding that "the party-specific vacatur requested by the Commission is not feasible" given the Rule's breadth. *(Opinion, part II.C.)*
6. **[ESTABLISHED]** The timing is exact and worth stating precisely. The Commission had originally set a compliance date of **May 14, 2025**, then on May 9 deferred it to **July 14, 2025** as an exercise of enforcement discretion. The opinion issued **July 8, 2025**. That is **six days** before the deferred compliance date. *(Opinion, background; the "six days" is arithmetic from two dates in the opinion, not a phrase the court used.)*

### (b) The control must actually work

7. **[ESTABLISHED as an allegation]** In *FTC v. Amazon.com*, the Commission alleged that the button labelled End Membership "did not end membership. Rather, it took the consumer to the Iliad Flow." *(Original complaint, paragraph 119. In the amended complaint of 2023-09-20 the same text is paragraph 133.)*
8. **[ASSUMED]** That the sentence carries no deception element, and so states the control's failure as the wrong in itself, is the drafter's reading of its structure and placement, not something the complaint says about itself. *(Flagged; a reader who wants the deception counts should read the complaint's causes of action rather than this inference.)*

### (c) The control must cover the surfaces where the choice was made

9. **[ESTABLISHED as an allegation]** The same complaint alleged that consumers who enrolled "through devices other than computers and smartphones, such as through the Prime Video application on the Amazon FireStick and Fire TV, they could not cancel via these same technologies. Instead, they had to use the Iliad Flow or call customer service." *(Original complaint, paragraph 115; amended complaint paragraph 129.)*

### (d) The control must not be degraded once it works

10. **[ESTABLISHED as an allegation]** In the Epic Games administrative matter the FTC alleged that after players used an "Undo" button to cancel unwanted charges, "Epic took steps to reduce its prominence," specifically that it renamed the button Cancel Purchase and "reduced the size of the button, moved it to the bottom of the screen, and required consumers to push and hold a button on their controller (even though Epic does not require consumers to do so to purchase items in the first place)." *(Epic complaint, paragraph 39.)*
11. **[ESTABLISHED as an allegation quoting an internal document, which is two hops from a finding]** The complaint continues: "After making these changes, Epic 'observed a roughly 35% decline in the net undo-rate (% of undo-eligible purchases that result in an undo that is not followed by a re-purchase),' according to an email from a Senior Product Manager." The 35% figure is **Epic's own words, quoted by the FTC, inside an allegation**. It is not an FTC finding and not a court's. *(Epic complaint, paragraph 40.)*

### (e) Posture, stated per matter because it varies

12. **[ESTABLISHED]** *FTC v. Amazon.com* is a **federal district court** action (W.D. Wash., No. 2:23-cv-00932). It ended in a **Stipulated Order for Penalty Judgment**, Document 535, filed **2025-09-25**. Stipulated means agreed: the order resolves the case **without any court adjudicating the complaint's allegations**. *(Complaint caption; order caption.)*
13. **[ESTABLISHED]** *In the Matter of Epic Games, Inc.* is an **FTC administrative** proceeding (Matter 192-3203) before the Commission itself, not a court action. *(Complaint caption: "UNITED STATES OF AMERICA BEFORE THE FEDERAL TRADE COMMISSION".)*
14. **[ESTABLISHED]** *Custom Communications v. FTC* is the only matter in this record decided by a court on the merits of anything, and what it decided was procedural. *(Opinion.)*

## Quotes (attributed record)

**Attribution convention for this record.** Every span below is from a complaint or an opinion. A complaint quote is what **the FTC asserted**; it is never a finding. Where the FTC is itself quoting a company's internal document, that is marked, because it is two hops from an adjudicated fact.

### Eighth Circuit, Custom Communications v. FTC (the court's own voice)

- "we need not address Petitioners' other substantive challenges to the Rule"
- "While we certainly do not endorse the use of unfair and deceptive practices in negative option marketing, the procedural deficiencies of the Commission's rulemaking process are fatal here."
- "the party-specific vacatur requested by the Commission is not feasible"
- On what the amended rule required: "require disclosure of material terms, express consumer consent, and a simple cancellation mechanism"

### FTC allegations, Amazon Prime complaint (the FTC's assertions, not findings)

- Paragraph 119, on the button labelled End Membership: "did not end membership. Rather, it took the consumer to the Iliad Flow."
- Paragraph 115: "they could not cancel via these same technologies"

### FTC allegations, Epic Games complaint (the FTC's assertions, not findings)

- Paragraph 39, after Epic renamed the button Cancel Purchase: "reduced the size of the button, moved it to the bottom of the screen, and required consumers to push and hold a button on their controller"
- Paragraph 40, the FTC quoting Epic's internal email: "observed a roughly 35% decline in the net undo-rate"

## Tensions / open questions

- **This ledger is a third of its subject.** The parent research plan lists roughly twelve matters. Three are distilled here. The claim that the FTC has enforced these prongs "for years", across a body of practice, is **plausible on this evidence and not established by it**. Do not put the broad version on the site until more of the queue is verified. The unbuilt matters are named in the Coverage note.
- **Allegations are doing a lot of work.** Two of the three prongs rest on complaints that ended in agreed orders. That is genuinely weaker than the parent plan's framing implies, and the site should say "the FTC has repeatedly alleged, and companies have repeatedly agreed to stop" rather than "the FTC has enforced".
- **Nothing here is about a feed.** Every matter concerns subscriptions, purchases and cancellation. Applying the reasoning to a recommendation control is this project's argument. It is a good argument and it is not precedent.
- **The vacated rule may return, or may not.** The parent plan records the replacement as at ANPRM stage with a closed comment record and no NPRM as of 2026-07-25. **That was not re-checked for this pass** and should be before the site describes the current rulemaking posture.
- **Was the Amazon stipulated order's content examined?** Only its caption and posture. Its injunctive terms are cached and undistilled, and they are the most likely place to find an American analogue of the Dutch persistence order.
- **The Chitika remedy template, unverified.** The parent plan says a Chitika order required an opt-out to last five years, display current choice status, and disclose browser scoping. If accurate that is the persistence prong already drafted as a US order term, which would be the single most useful item in the whole record. It was not reached in this pass.

## Discrepancies vs the candidate plan

- **The plan's Amazon paragraph numbers are the ORIGINAL complaint's, and it does not say so.** An amended complaint filed 2023-09-20 renumbers by +14: End Membership is 119 in the original and 133 in the amended; the FireStick surface allegation is 115 and 129. A reader given "paragraph 119" and handed the amended complaint lands on the wrong paragraph. Both are cited explicitly here.
- **The plan calls this an enforcement record; much of it is an allegation record.** It says the FTC "has enforced all three of its prongs for years". On the three matters verified, the FTC *alleged* the prongs and obtained *agreed* orders. The distinction is exactly the posture precision this project applies to everything else.
- **Confirmed accurate:** the End Membership quote, the FireStick quote, the Epic undo-degradation sequence, the 35% figure, the vacatur on procedural grounds, the six-day gap, the express refusal to reach the merits, and the "do not endorse" line. All verify verbatim against the caches.
- **Not reached, so neither confirmed nor denied:** Chegg, Alexa, Venmo, Facebook, LA Fitness, TikTok, Wisey, PCH, Uber, JustAnswer, Match, and Chitika.

## Coverage note

- **Four documents were read in full and cached**: the Eighth Circuit opinion, the Amazon original complaint, the Amazon stipulated order, and the Epic administrative complaint. All fetched from the issuing bodies, none from coverage.
- **Nine or more matters remain undistilled**: Chegg (the single-count cancellation case, which the parent plan treats as the cleanest example of the theory standing alone), Amazon Alexa, PayPal/Venmo, Facebook, Fitness International, ByteDance/TikTok, GM Universeapps/Wisey, Publishers Clearing House, Uber, JustAnswer, Match Group and Chitika. **Nothing in this ledger depends on them and nothing is asserted about them.**
- **A retrieval fact worth reusing.** `ftc.gov` serves these PDFs to plain `curl` **provided a browser User-Agent is sent**; a default `curl` User-Agent gets 403. `ecf.ca8.uscourts.gov` serves opinions with no User-Agent condition at all. The FTC's own legal-library search page is JavaScript-rendered and yields nothing to a fetcher, so locate documents via the case page or a search engine, then fetch the PDF directly.
- **A normalization was added to the checker for this source class.** US court filings carry a line number in the left margin of every line, which `pdftotext` preserves and whitespace-collapsing then injects mid-sentence. This produced a false "absent from both complaints" on the best quote in the Amazon record. `check-quotes` now strips those, anchored to line starts, before collapsing. See the note in that script.
