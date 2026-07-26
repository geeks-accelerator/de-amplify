---
title: "State of Tennessee v. Meta: the first trial over a safety tool the company knew was broken"
type: distillation
mode: multi-source (record of one lawsuit)
subject: State of Tennessee, ex rel. Jonathan Skrmetti, Attorney General and Reporter v. Meta Platforms, Inc. and Instagram, LLC, No. 23-1364-IV, Chancery Court of Davidson County, Tennessee (Part IV), Chancellor Russell T. Perkins
as_of: 2026-07-25
audience: general public reader
sources:
  - "PRIMARY (the State's own published pleading): Unredacted civil enforcement complaint, published 2026-01-10 by the Tennessee Attorney General. https://www.tn.gov/content/dam/tn/attorneygeneral/documents/pr/2024/pr24-03-unredactedcomplaint.pdf (fetched 2026-07-25; plain-text copy cached at sources/tennessee-2023-10-24-unredacted-complaint.txt). READ THE EXTRACTION NOTE IN THAT FOLDER'S README BEFORE QUOTING: the default and -layout pdftotext modes produce 160+ doubled word pairs on this file, apparently a redaction-overlay artifact, and quoting from them yields corrupted text. The cache is the -raw extraction, which has zero doubling but interleaves footnote markers."
  - "PRIMARY (announcement of the filing): Tennessee AG press release pr23-48, 2023-10-24. https://www.tn.gov/attorneygeneral/news/2023/10/24/pr23-48.html (fetched 2026-07-25)"
  - "PRIMARY (announcement of the unsealing): Tennessee AG press release, 2024-01-10. https://www.tn.gov/attorneygeneral/news/2024/1/10/pr23-03.html (fetched 2026-07-25; note the real ID mismatch, the release is pr23-03 while the PDF is pr24-03)"
  - "PRIMARY (the motion-to-dismiss order in full, 34pp): Order on Defendants' Motion to Dismiss, 2026-03-13 [sic 2024-03-13], Chancellor Perkins, publicly filed as an exhibit on the MDL 3047 docket by the California AG as a Statement of Recent Decision (N.D. Cal. Dkt 683, filed 2024-03-15). https://storage.courtlistener.com/recap/gov.uscourts.cand.401490/gov.uscourts.cand.401490.683.1.pdf (fetched 2026-07-25). OCR caveat: the introductory paragraph renders 'Section 230' as 'Section 320'; the Conclusion renders it correctly, so quote the Conclusion."
  - "PRIMARY (the court's own register): Davidson County Chancery public portal (Tyler Odyssey), case 23-1364-IV, CaseID 81082. https://portal-tnnashville.tylertech.cloud/PublicAccess/ (consulted 2026-07-25). ACCESS NOTE: the search form silently returns a blank result unless a NodeID location is posted first (100,110,120,130,140,145 for all Chancery; 140 is Part IV). A search without it looks exactly like zero results and is the likely cause of an earlier false negative. Order and filing DOCUMENTS are behind a paid subscription; only event titles and dates are free."
  - "PRIMARY (appellate history): Tennessee AOC Public Case History, https://pch.tncourts.gov (fetched 2026-07-25; requires a full browser header set, a bare request is rejected). Five per curiam orders obtained: M2024-00877-COA-R9-CV (denied 2024-07-10); M2025-00155-COA-R9-CV (denied 2025-02-25); M2025-00155-SC-R11-CV (denied 2025-08-08); M2026-00124-COA-R9-CV (denied 2026-02-13); M2026-00124-SC-R11-CV (denied 2026-04-13)."
  - "PRIMARY (the cross-noticing mechanism): Stipulation and Order Governing Protocol for Fact Depositions, N.D. Cal. Dkt 742, so ordered 2024-04-03 by Magistrate Judge Peter H. Kang; Appendix A names this case verbatim as a Related Action. Discovery Management Order No. 6, Dkt 875 (2024-05-20), quantifies roughly thirty-two cross-noticed depositions originally noticed by the Tennessee Attorney General. (Fetched 2026-07-25 via RECAP.)"
  - "SECONDARY (trial structure and jury): Reuters via Rappler; JURIST; WSMV live blog (the 12:06 p.m. jury-sworn timestamp); The Tennessean; Courtroom View Network schedule page. All fetched 2026-07-25."
  - "NOT OBTAINED: the operative 2024 Amended Complaint (redacted version filed 2024-07-16, unredacted under seal 2024-08-27); the orders of 2024-10-17 (amended-complaint MTD), 2025-12-12 (jury demand), 2026-06-24 (summary judgment), 2026-07-16 (partial reconsideration); any separately-titled Daubert/McDaniel ruling. All exist per the court's register. Direct probes on the AG document domain returned 404 against a passing control."
verified_by: "2026-07-25 primary-source pass. Caption, judge, filing date, complaint text, the 2024 motion-to-dismiss order, all five appellate dispositions, the trial calendar, and the MDL cross-noticing instruments were fetched and read. The operative pleading and five subsequent orders were not obtainable; every claim resting on them is tiered down and flagged."
---

**Tier key (this record's calibration, per the parent plan):** ESTABLISHED means stated in a primary source (a court order or filing, the docket register, an official government release) with independent corroboration where available; OBSERVED means carried by secondary coverage or inferred from it; ASSUMED means the drafter's inference, flagged as such. This authority-based calibration is the plan's deliberate adaptation for legal records.

## TLDR (summary surfaces, plain text, derived from the ledger)

- **One line (label):** Tennessee is trying Meta over a safety tool the State says Meta knew was broken and kept anyway, with a jury sworn and openings on July 27, 2026.
- **Nav label (~40 chars, for the /distillations index card, breadcrumb, and cross-links):** State of Tennessee v. Meta
- **OG title (~50 chars, for the share card):** Tennessee v. Meta: the evidence ledger
- **Search snippet (~155 chars, for the meta-description tag):** Tennessee's case against Meta went to a jury in July 2026 over Instagram's "Time Spent" tools, which the State says Meta knew were inaccurate and kept anyway.
- **Ledger snippet (~155 chars, for the /distillations/<slug> meta description ONLY; keeps the search snippet to a single consumer):** The tiered evidence record behind Tennessee v. Meta: what the complaint pleads, what the court has actually held, and what is still under seal.
- **One sentence (card):** Tennessee sued Meta and Instagram in October 2023 under the state Consumer Protection Act, and in July 2026 became the first case to put before a jury the allegation that Meta promoted a time-management tool it knew was giving users inaccurate numbers, and declined to remove it because losing its only addiction-related feature was judged the bigger risk.
- **One paragraph (meta description):** Tennessee's attorney general sued Meta and Instagram in October 2023 under the Tennessee Consumer Protection Act, pleading both unfair design and deception. A jury was sworn on July 24, 2026 and opening statements are set for July 27, in a trial the court's own calendar runs to September 3. The distinctive allegation for anyone studying platform safety is a dedicated count about the "Time Spent" tools: the State says Meta learned by March 2020 that the tool showed users materially wrong numbers, that its own team recommended removing it, and that Meta kept it because it was the company's "biggest proof point" on tech addiction. The jury decides liability; the Chancellor decides penalties and any design-change order. (As of July 25, 2026.)

## Reader summary

As of July 25, 2026, the state of Tennessee is in trial against Meta and Instagram in Nashville. The attorney general sued in October 2023 under the Tennessee Consumer Protection Act, arguing two things: that Instagram was designed in a way that induces compulsive use in young people (an unfairness claim), and that Meta lied to the public about how safe Instagram was and about whether its own well-being features worked (a deception claim).

The second claim is the one that matters most for anyone studying whether platform safety controls actually function, because Tennessee pleaded it as a specific, documented allegation rather than a general complaint. Meta announced time-management tools in 2018 and promoted them as evidence of its commitment to user well-being. The State alleges that by March 2020 Meta's own staff knew the tool was reporting materially wrong numbers to users, that the team responsible for retiring features recommended removing it, and that Meta kept it in place anyway, because it was the company's most visible proof that it took addiction seriously.

A jury of fifteen was sworn on Friday, July 24, 2026, after a week of selection. Opening statements are set for Monday, July 27. The court's own calendar runs the trial to September 3, 2026. The jury decides only whether Meta broke the law; if it did, Chancellor Russell Perkins separately decides the money and whether to order Meta to change the product.

Two honest cautions. First, the operative version of the complaint is a 2024 amended version that has never been made public, so every quotation in this record comes from the original 2023 complaint, one generation behind. Second, Tennessee has won every procedural fight so far, but "Meta lost its appeals" overstates it: Tennessee's appellate courts declined five times to *hear* Meta's interim appeals, which is a refusal to take the question up, not a ruling that Meta is wrong.

## Brake-integrity relevance (why this case feeds the de-amplify thesis)

This is the strongest control-integrity artifact in the American litigation record, and it is stronger than the MDL's "public relations stunt" finding, because in Tennessee the broken control is not evidence supporting a wider theory. **It is a separately pleaded count, with its own heading, its own paragraphs, and its own Bates-numbered internal documents.**

The site's standard says a control that a platform offers must actually work. Tennessee alleges a control that did not work, that the company knew did not work, and that the company kept precisely *because* removing it would have cost it credibility on the harm the control was supposed to address. That is not a brake that failed. That is a brake retained as signage after the company had established it was not connected to anything.

The exact shape of the allegation, in the State's own sequence: Meta announced the tools (2018), Meta's staff found the data was wrong (by March 2020), Meta's own decommissioning team recommended removal (mid-2020), and Meta declined, on the reasoning that the regulatory and brand risk of removing "our only addiction-related features" outweighed the benefit of accurate data.

**Scope discipline, and it matters.** Tennessee's control-integrity theory is **"Time Spent," and nothing else.** In the unredacted complaint body the phrase "Time Spent" appears 51 times, while "Take a Break" appears **zero** times, "parental control" zero, "Family Center" zero, "Teen Account" zero, "Quiet Mode" zero (positive controls: "Instagram" 403, "Meta" 686). Those other features appear only inside attached exhibits, which are Meta's own congressional testimony. **Do not attribute a "Take a Break" allegation to Tennessee**; that belongs to the federal MDL record.

## Claims (the ledger)

### (a) The case, the court, the posture

1. **[ESTABLISHED]** The case is *State of Tennessee, ex rel. Jonathan Skrmetti, Attorney General and Reporter v. Meta Platforms, Inc. and Instagram, LLC*, No. **23-1364-IV**, in the **Chancery Court of Davidson County, Tennessee** (Twentieth Judicial District, at Nashville), **Part IV**, before **Chancellor Russell T. Perkins**. Filed **October 24, 2023**. *(Complaint p.1; the court's own docket "Judicial Officer" field; Perkins's signature block on the 2024 motion-to-dismiss order; and all five appellate orders, each captioned "Chancery Court for Davidson County / No. 23-1364-IV".)*

2. **[ESTABLISHED]** Two counts are pleaded, both under the Tennessee Consumer Protection Act, Tenn. Code Ann. section 47-18-104(a) and (b): **Count 1, unfairness**, and **Count 2, deception**. Count 1's theory is stated as "By designing and deploying Instagram in a manner that induces compulsive use, Defendants have engaged in unfair trade practices prohibited by the TCPA." **Each instance is pleaded as a separate violation**, which is what drives the penalty arithmetic. *(Unredacted complaint, section V.)*

3. **[ESTABLISHED, but read the caveat]** The **operative pleading is a 2024 Amended Complaint that has never been made public** (redacted version filed 2024-07-16; unredacted version filed under seal 2024-08-27 with 107 exhibits). **Every quotation in this ledger comes from the original October 2023 complaint as unredacted in January 2024**, which is one generation behind. Paragraph numbering and wording may differ in the operative version. *(Court register; direct probes on the AG document domain returned 404 against a passing control.)*

4. **[ESTABLISHED]** Two documents of this case are public only because they were filed elsewhere. The full 34-page **motion-to-dismiss order** is on the MDL 3047 docket, filed by the California Attorney General as a Statement of Recent Decision, and a **May 17, 2024 hearing transcript before Chancellor Perkins** is on that docket too. In effect the federal MDL docket is a partial free mirror of a Tennessee record that otherwise sits behind a paid subscription. *(N.D. Cal. Dkt 683 and Dkt 882-1.)*

### (b) The control-integrity count (the reason this case is on this site)

5. **[ESTABLISHED]** The complaint contains a dedicated section whose heading reads, verbatim: **Meta Deceived Consumers By Promoting "Time Spent" Tools Despite Known Inaccuracies.** *(Unredacted complaint, section heading at paragraph 324. Verified as an exact substring of the cached extraction.)*

6. **[ESTABLISHED]** The State alleges Meta announced time-management tools on **August 1, 2018**, promoting activity dashboards, daily-use reminders and a notification-limiting tool, and said it hoped they would give people "more control over the time they spend on our platforms". *(Unredacted complaint, paragraphs 325 to 326.)*

7. **[ESTABLISHED]** The State alleges the representation was untrue and that Meta knew: **"That representation was false. By March 2020, Meta employees recognized that the Time Spent tool presented materially flawed information to consumers."** *(Unredacted complaint, paragraph 328. Verified as an exact substring of the cached extraction.)*

8. **[ESTABLISHED]** The State quotes a Meta staffer's contemporaneous internal message (Ex. 84, Bates MT-IG-AG-00171486) stating that the Time Spent data as shown was incorrect, that **"Ours is wrong. Far worse."**, that the company was sharing bad metrics externally, and that "we vouch for these numbers." *(Unredacted complaint, paragraph 329.)*

9. **[ESTABLISHED]** The State alleges that by mid-2020 **Instagram's own decommissioning team recommended removing the tool** (Ex. 85, Bates MT-IG-AG-00174125). *(Unredacted complaint, paragraph 330.)*

10. **[ESTABLISHED]** The State alleges Meta kept it anyway, quoting an internal message (Ex. 88, Bates MT-IG-AG-00202191) that **"The regulatory and brand risk from removing our only addiction-related features outweighs"** ... **"the wins around user trust in the data from the few users who use it."** *(Unredacted complaint, paragraph 335. The ellipsis marks elided text in the original quotation.)*

11. **[ESTABLISHED]** The State quotes Instagram's Head of Policy (Ex. 86, Bates MT-IG-AG-00197537) describing the time-spent dashboard as the **"biggest proof point we have on tech addiction/problematic use"** and the tool with the most positive sentiment from mental-health stakeholders. *(Unredacted complaint, paragraph 333.)*

12. **[ESTABLISHED]** The tool allegation is pleaded **into the deception count**, not merely as background: Count 2 reaches misrepresentations about "the efficacy of Instagram's 'well-being' related platform features (such as the 'Time Spent' feature)." *(Unredacted complaint, paragraph 411. Quoted with normalized punctuation; the source uses curly quotation marks, and the extraction of this particular paragraph is one of the passages affected by the doubling artifact, so it is restated rather than reproduced character-for-character.)*

13. **[ASSUMED]** The distiller's characterization, flagged as such: this is a stronger artifact than the MDL's "public relations stunt" evidence, because there the broken-brake material is evidence supporting a wider theory, whereas here it is a pleaded count with its own documentary record. A court has not adopted this characterization and it is not a legal conclusion.

### (c) What the court has actually decided

14. **[ESTABLISHED]** Meta's **motion to dismiss the original complaint was denied in full on March 13, 2024**, on all four grounds raised. From the order's Conclusion: "Defendants have sufficient minimum contacts with Tennessee for this Court to exercise specific personal jurisdiction over them", and "Because the allegations in the Complaint can be construed as being based on conduct other than the publishing of third-party content, Section 230 immunity and First Amendment protections do not bar the Complaint." *(Order fetched and read in full.)*

15. **[ESTABLISHED, posture warning]** Claim 14 is a **Rule 12 pleading-stage denial**, decided on the standard that the court must view the complaint in the light most favourable to the State. It is **not** a merits holding that Section 230 does not apply, not a summary-judgment ruling, and not an appellate holding. The personal-jurisdiction holding and the 12.02(6) holding are separate and should not be collapsed. *(The order's own stated standard.)*

16. **[ESTABLISHED, and the most likely thing to be reported wrong]** Meta sought interlocutory review **three times and was refused five times**: Court of Appeals denials on 2024-07-10, 2025-02-25 and 2026-02-13, and Tennessee Supreme Court denials on 2025-08-08 and 2026-04-13. **All five are one-paragraph per curiam orders with no reasoning.** A denial of permission to appeal is a **discretionary refusal to hear**, not an affirmance. **No Tennessee appellate court has ruled on the merits** of the Section 230, First Amendment or personal-jurisdiction questions, and describing these rulings as "upheld on appeal" would be exactly the error class this project has been burned by. *(All five orders fetched.)*

17. **[ESTABLISHED]** **Summary judgment was denied on Count 1.** This is established from the court's own register, in the clerk-entered title of Meta's follow-on motion: "Defendants' Motion for Partial Reconsideration of the Court's Order Denying Summary Judgment on Count 1" (filed 2026-06-26, after the summary-judgment order of 2026-06-24). *(Court register.)*

18. **[OBSERVED]** The disposition of **Count 2**, and of the State's own cross-motion for summary judgment, is **not established**. Both sides moved on 2025-10-15. That the case reached a jury on liability implies the State's motion was not granted outright, but that is inference. The order text is not public. *(Court register; RECAP searched with a passing positive control.)*

19. **[OBSERVED]** A **Daubert / McDaniel hearing was held on 2026-02-13** on Meta's motions to exclude several experts, including Arturo Bejar. **No separately titled ruling appears in the register**; it may be folded into another order or delivered from the bench. Treat as unresolved, not absent. *(Court register.)*

### (d) The trial

20. **[ESTABLISHED]** **Jury selection ran Monday July 20 to Friday July 24, 2026**, and a jury was **sworn at 12:06 p.m. on July 24**. *(WSMV live blog, timestamped; corroborated by the court's trial calendar.)*

21. **[ESTABLISHED, and the single most likely error for a reader to inherit]** **Opening statements had NOT occurred as of this record's date. They are set for Monday, July 27, 2026, 9:00 a.m. CDT.** Several pre-trial previews said "Friday," and those are superseded; the July 24 session was motions. *(Courtroom View Network schedule, checked 2026-07-25; the court's calendar lists July 27 as a trial day.)*

22. **[ESTABLISHED]** The court's own calendar sets trial days through **September 3, 2026**, which is the primary-source version of the "six to seven weeks" reported in coverage. *(Court register.)*

23. **[OBSERVED]** The trial is **bifurcated**: the jury decides liability, and Chancellor Perkins separately decides civil penalties and any equitable or design-change relief. Corroborating docket circumstantials are primary (the 2025 jury-demand fight, a stipulation on penalties experts, and a Special Master appointed 2026-07-01), but **the structure itself is reporter-sourced**; the December 12, 2025 order that would establish it is not public. *(Reuters via Rappler; JURIST; court register for the circumstantials.)*

24. **[ASSUMED]** The December 12, 2025 order is titled "Order Addressing Defendants' Motion to Strike Plaintiff's Jury Demand." "Addressing" rather than "Denying", combined with a jury actually being empanelled, is consistent with a partial ruling that kept the jury for liability while reserving penalties to the court. **This is the distiller's inference from a document title, not a sourced holding.**

### (e) Relief sought, including the design-change ask

25. **[ESTABLISHED]** The State seeks **civil penalties of not more than $1,000 per violation, per defendant**, under Tenn. Code Ann. section 47-18-108(b)(3), with each instance pleaded as a separate violation. **No source found states the State's aggregate demand**, and the "$1,000" figure alone badly understates the arithmetic. *(Unredacted complaint, Request for Relief (c).)*

26. **[ESTABLISHED]** The State asks the court to **"Issue a permanent injunction prohibiting Defendants from using platform features that cause compulsive use among Young Users"** and to **"Order that Defendants meaningfully disclose, on a regular basis, the risks posed by Instagram to Young Users"**. *(Unredacted complaint, Request for Relief (d) and (e). Both verified as exact substrings of the cached extraction.)*

27. **[ASSUMED]** Relief (d) is a product-design injunction and (e) is a standing disclosure obligation. Both would be decided by the Chancellor rather than the jury, which makes this, alongside New Mexico's pending abatement decision, one of the two live American proceedings positioned to produce a design-change order rather than a payment. *(Distiller's characterization; the bifurcation it rests on is itself OBSERVED, see claim 23.)*

### (f) The relationship to MDL 3047

28. **[ESTABLISHED]** Tennessee was **never transferred into the federal MDL**; it stayed in Davidson County Chancery. It is instead a named **"Related Action"** under the MDL's deposition protocol, listed verbatim in Appendix A of the Stipulation and Order Governing Protocol for Fact Depositions (N.D. Cal. Dkt 742, so ordered 2024-04-03), which permits parties to cross-notice and attend depositions across the MDL, the California JCCP and any Related Action. *(Order fetched.)*

29. **[ESTABLISHED]** The volume is substantial: Discovery Management Order No. 6 (Dkt 875, 2024-05-20) records a dispute "presently limited to roughly **thirty-two cross-noticed depositions that were originally noticed by the Tennessee Attorney General**." *(Order fetched.)*

30. **[ESTABLISHED, correcting a natural but wrong framing]** Depositions of **Mark Zuckerberg** (2025-03-27), **Antigone Davis**, **Alison Lee**, **Margaret Gould Stewart**, **Arturo Bejar** (April 2025 sessions), **Nick Clegg** and **Vaishnavi Jayakumar** are publicly available as unsealed exhibits on the MDL docket and are connected to this case. But their transcripts do **not** bear a Tennessee-only caption: they carry a **three-forum joint caption** naming the MDL, the California JCCP, and then Tennessee in a "THIS DOCUMENT RELATES TO" block. A search of the MDL docket for a Tennessee-court-only caption returns zero against passing positive controls. Say "taken under a joint caption that names Tennessee," not "taken in the Tennessee case." *(RECAP.)*

31. **[OBSERVED]** Cross-noticing did **not** sweep the Tennessee record wholesale. MDL plaintiffs later had to serve a document request seeking transcripts from the Tennessee case, which indicates only the depositions they elected to cross-notice inside the protocol's window became shared. *(N.D. Cal. Dkt 2174-1, 2025-08-09.)*

## Tensions / open questions

- **The operative pleading is invisible.** Everything documentary in this record is from a superseded complaint. The 2024 Amended Complaint, with 107 exhibits, is under seal. If the trial turns on a paragraph that changed between versions, this ledger cannot see it.
- **The court's own orders are paywalled.** Five substantive orders exist per the register and none of their text could be obtained: the amended-complaint motion to dismiss, the jury-demand ruling, the summary-judgment order, the reconsideration order, and any expert-exclusion ruling. Davidson County Chancery documents require a paid subscription. This is a structural limit on how well any public record of this case can be tiered, and it is worth stating rather than hiding behind confident prose.
- **Winning every procedural fight is not the same as being right on the law.** Tennessee has survived dismissal, survived summary judgment on at least Count 1, and seen Meta refused interlocutory review five times. None of that is an appellate merits holding, and a jury has not yet heard a word of evidence.
- **The largest untapped vein is public but hard to reach.** A sixteen-part series of "Notice of Filing ... Unsealed Documents" was filed in mid-2026, unsealing Meta's summary-judgment memorandum, its statement of undisputed material facts, an affidavit, and the expert-exclusion briefing. Those are public documents sitting behind the same paid portal.
- **This record will age faster than anything else on the site.** The trial runs to September 3, 2026, and this ledger is a snapshot taken before opening statements.

## Discrepancies vs the public record

- **D-1: "openings were Friday" is wrong.** Several pre-trial previews, including a summary box on a live-blog page that otherwise reported the day correctly, said opening statements would follow jury selection on Friday July 24. They are set for **Monday July 27**. Recorded because it is the single most likely error to propagate.
- **D-2: the court's own portal misspells the Attorney General** as "Skermetti" in the docket Style field, and miscodes the Case Type as "Appeal From Administrative Hearing." The pleading and every appellate order spell it **Skrmetti**, and this is an original civil enforcement action. Do not reproduce either artifact.
- **D-3: an appellate-portal record lists the wrong trial court** for M2026-00124-SC-R11-CV (Shelby County Circuit, a different judge and case number). The order PDF itself says Davidson County Chancery, No. 23-1364-IV. Trust the order.
- **D-4: jury composition.** One paywalled source reports 7 men and 8 women, fifteen in total. No source states the alternate breakdown. **Do not publish "12 plus 3 alternates"**, which is a natural but unsourced inference.
- **D-5: witness expectations should not be imported from other cases.** Coverage reports the chancellor ruled the State cannot compel Meta executives to testify, so any Zuckerberg or Mosseri appearance would be at Meta's option; no order was located. Do not carry witness reporting over from New Mexico or from the federal MDL trial, which are different proceedings.

## Coverage note

- **What this record is built from.** The State's own published pleading, one court order obtained in full, the court's free event register, five appellate orders, and the federal deposition-protocol instruments. Trial-status facts are secondary and dated.
- **What it deliberately does not do.** It does not attempt daily trial coverage. The site updates on dated passes, and a trial running to September 3 will outpace that; the as-of line is the honesty backstop, not a promise of currency.
- **One-sidedness, named.** A complaint is an advocacy document. Every allegation in section (b) is **the State's contention**, not a finding, and Meta has not answered any of it in a document this record could obtain. Meta's public position is that it has "spent a decade building safe, age-appropriate defaults for teens alongside simple tools for parents." The jury has heard none of it yet.
- **Why the extraction caveat is prominent.** The default pdftotext modes corrupt this particular PDF with more than 160 doubled word pairs, apparently from a redaction overlay. Every quoted span in this record was individually verified against a clean `-raw` extraction, and spans that could not be verified cleanly were restated rather than quoted.
