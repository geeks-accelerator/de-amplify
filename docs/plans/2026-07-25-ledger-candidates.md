---
title: "Plan: ledger candidates (proceedings, hearings, and regulations worth distilling)"
subtitle: "Nine research passes over the primary record, July 2026. What exists, where the official document actually lives, what posture it is really in, and what is not worth chasing."
status: "Research inventory and prioritization, not a commitment to build. PARTIALLY EXECUTED: section 2 (the live corrections) and section 3 (the Dec 2025 transcript, with its premise corrected on contact) shipped 2026-07-25; a proceeding that was NOT in this inventory, State of Tennessee v. Meta, was built as the eighth ledger on 2026-07-26. Section 4 is still a queue. Nothing in section 4 has been distilled, and nothing here may be quoted on the site until it clears the verification protocol in section 1. AI-assisted research; every candidate needs a human primary-source pass before it becomes a ledger."
date: 2026-07-25
site: "de-amplify.com"
document: "Ledger candidate inventory. Companion to the cases-page plan (2026-07-15-cases-page-plan.md). Adds no legal claims to the site; the ledger-first pipeline still governs everything that ships."
---

# Plan: ledger candidates

> **The one-line finding.** The control-integrity material is reliably the part of the record that never gets reported. Coverage takes the viral clip; the passage where someone examines whether a specific control actually worked sits unread in a transcript, an order, or a press release. That is the gap this site exists to fill, and there is far more of it than the ledgers built so far suggest.

> **The one-line strategy.** Fix what is wrong on the live site first, take the one free upgrade, then build in order of (a) how load-bearing the material is for the argument, not how recent it is, and (b) how retrievable the official document is.

## 0. How to use this document

Every candidate below carries five fields, because the project's discipline needs all five before a ledger can start:

- **Posture**, stated precisely. "Proceedings opened" is not "preliminary findings" is not "decision." This is the error class the project has been burned by, so it is the first field.
- **Primary source**, with the exact URL, and whether a research pass actually fetched it or only saw it cited.
- **Why it matters to control integrity**, specifically. Not "social media harm" in general. If a candidate does not speak to whether an offered control works, covers its surfaces, or persists, it is off-thesis no matter how newsworthy.
- **Tier**, meaning full-standard or a flagged tier-down, on the same scale `/hearings` already uses.
- **Hearsay score**, 1 to 10, for how much of public understanding of the item is clip-driven rather than record-driven. High score plus retrievable primary source is the best possible ledger candidate, because that is where a distillation adds the most.

Sections 2 and 3 are the work to do first. Section 4 is the candidate queue. Sections 6 and 7 are the traps.

## 1. Verification protocol (read before quoting anything below)

**A research pass reported that a fetch tool's summarizer fabricated a quotation**, inventing plausible commitment language for a document it had not actually read. It was caught only because the researcher re-opened the primary PDF.

For this project that is a first-order hazard. A hallucinated quote entering a ledger would pass the quote-fidelity checker against nothing, because the cached source would not contain the string, and a checker that finds no match on a quote nobody thought to check is silent. The failure mode is identical to the 2026-07-24 misattribution: the machinery is fine and the input is wrong.

So, binding rules for building anything in this document:

1. **No quote enters a ledger from this file.** Every quotation below is a lead. Re-fetch the primary document, cache it, and verify the span against the cache.
2. **Verbatim and attributed are separate checks.** The checker does the first. A human does the second, by opening the cache at the locator and reading upward to the speaker marker. See the speaker-convention note in the Nov 2023 ledger.
3. **Posture is a third check, and it is the one this subject area gets wrong most.** Before writing "the court held," confirm the document is a merits ruling and not an abstention, jurisdiction, interim, or leave decision.
4. **Watch for OCR-dead PDFs.** Section 7 lists two known ones. If the cached copy has a corrupt or absent text layer, every quote from it will fail the checker for a reason that has nothing to do with fidelity. Cache the clean copy instead and say which one in the ledger's sources.
5. **Prefer the official document over the press release about it.** Several candidates below exist in both forms and the press release paraphrases. See section 2.

## 2. Corrections to live content (do these first)

### 2.1 A paraphrase is presented as a verbatim quote on /lawsuits

`content/lawsuits.md` renders this as a quotation from the European Commission:

> "can easily be ignored and do not meaningfully reduce usage"

The sentence in the Commission's own release is:

> "Instagram's and Facebook's time management tools, including those activated by default for teens, can be easily dismissed and do not lead to a meaningful reduction and control of the usage of the service."

This is a paraphrase inside quotation marks on a page whose stated rule is verbatim or nothing. The real sentence is stronger, because "control of the usage" is the site's own vocabulary coming back out of a regulator's mouth. Fix the page, and note that the ledger-first rule cannot operate here because the EC proceeding has no ledger (see 4.1).

- Primary: `https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1579` (FETCHED by the research pass)

### 2.2 The EC release identifiers are crossed

- **IP/26/1579** is the July 10, 2026 addictive-design preliminary finding. The site does not cite this number and should.
- **IP/26/920** is the April 29, 2026 under-13 age-assurance finding. The site cites this correctly.

### 2.3 A fourth EC finding landed after the page's as-of date

**IP/26/1679, July 24, 2026**, preliminary findings against TikTok on minors' account settings. The page's as-of line is July 16, 2026, so the page is not wrong, but it is now stale on a section that already carries the no-ledger caveat. Handle it in the same pass as 2.1.

### 2.4 Cross-check the K.G.M. posture

A research pass independently flagged that K.G.M. is a **first-instance jury verdict, not an appellate affirmance**. The case files appear to state this correctly, but given the project's documented history with a "$6M upheld on appeal" error, `content/lawsuits/kgm-v-meta.md` and the California ledger both deserve a deliberate re-read against that specific claim before the next dated pass.

## 3. Free upgrade: the Dec 2025 tier-down is obsolete

**GPO has published the December 2, 2025 House Energy and Commerce transcript.**

- Package: `CHRG-119hhrg62241`, Serial No. 119-44, printed 2026
- URL: `https://www.govinfo.gov/content/pkg/CHRG-119hhrg62241/html/CHRG-119hhrg62241.htm` (FETCHED, 185 KB, confirmed to contain full verbatim question and answer, not a written-testimony compilation)

**CORRECTED 2026-07-25, same day, on first contact with the actual files. The sentence that stood here ("can be rebuilt to the full standard and its tier-down banner retired") was wrong, and it was wrong in the project's most familiar way: it treated the existence of a document as equivalent to the retrievability of its contents.** What the record actually contains:

- The **GPO HTML carries the spoken hearing only**: opening statements, the four witnesses' oral statements, and the live question and answer. It ends at "[Whereupon, at 1:10 p.m., the subcommittee was adjourned.]" with 148 characters after it. That is roughly 135,000 characters of live Q&A that was genuinely unavailable when the ledger was built, and it is a real gain.
- The **prepared statements are inserted as TIFF images, not text.** Each appears as `[The prepared statement of Mr. X follows:]` immediately followed by **`[GRAPHIC NOT AVAILABLE IN TIFF FORMAT]`**, GPO's own marker for it. Nine such markers in the file; 237 embedded images in the 65 MB PDF. Grep that marker string first on any new GPO hearing.
- **One witness's statement is not in the official record at all.** Kate Ruane's is footnoted: "retained in committee files and is available at" a docs.house.gov URL. For that witness the committee-repository PDF is the only source there will ever be.
- **The spoken record contains material the written testimony does not**, so the re-seed gains new quotable content rather than merely re-anchoring old content.
- Consequence, measured directly: of 37 quoted spans in the current ledger, **3 verify against the official transcript, 2 more appear only there, and 29 exist only in the witnesses' own submitted PDFs.**

So the honest upgrade is **not a banner flip**. It is: cache the official transcript (done), re-seed the ledger's claims from the live Q&A that is now available, and rewrite the tier-down banner to say what is actually true, which is that the transcript is published and cached but the ledger's quote-bank still rests predominantly on written testimony. Retiring the banner outright would assert a verification that has not happened.

This correction is itself the best argument for section 1 of this document.

Two bonuses in that printed record:

- The Sattizahn and Savage **Senate** statements plus their questions-for-the-record responses are reprinted in the House record (pp. 229 to 260), which links this ledger to candidate 4.3.
- A report titled "Teen Accounts, Broken Promises: How Instagram Is Failing to Protect Minors" was entered into the record and described there as "spearheaded by a whistleblower and verified by university researchers." Committee copy at `https://docs.house.gov/meetings/IF/IF17/20251202/118714/HHRG-119-IF17-20251202-SD003.pdf`

**The May 13, 2026 tier-down stands.** No GPO transcript found. Given that September 2025 hearings published around mid-2026, expect late 2026 or 2027.

## 4. Ranked candidates

### 4.1 The FTC control-integrity record (build this one)

**This is the highest-leverage candidate in the document, and it is not the newest material.**

The site currently argues that no enforceable standard exists for whether an offered control works. That framing is wrong in a way that weakens the ask. The standard exists, it is American, it is federal, and the FTC has enforced all three of its prongs for years. What has never happened is anyone pointing it at an engagement feed.

**The control must actually work:**

- *FTC v. Amazon* (Prime), complaint paragraph 119: "The 'End Membership' button did not end membership."
- *FTC v. Chegg*: a single count, "Failure To Provide Simple Cancellation Mechanisms," no deception count at all. Press release: "Since October 2020, Chegg has charged nearly 200,000 consumers after they had requested cancellation."
- *FTC v. Amazon* (Alexa), paragraph 28: deletion removed the audio but retained the transcript, while the interface suggested "that both the audio and text files had been deleted."

**The control must cover related surfaces:**

- *Amazon* paragraph 115: consumers who enrolled via FireStick or Fire TV "could not cancel via these same technologies."
- *FTC v. PayPal* (Venmo), paragraphs 25 and 26: the default audience setting governed transactions the user initiates but not those they receive, and a counterparty could "retroactively make that transaction publicly viewable at any time after the transaction is complete, without providing any notice to User A."
- *FTC v. Facebook*, paragraph 5: the only opt-out lived "separate and apart from Facebook's Privacy Settings page," and Privacy Checkup "did not list the apps that had access to users' Profile Information based on their Friends' consent."

**The control must persist:**

- *FTC v. Epic Games*, paragraphs 39 and 40: the Undo button worked, so Epic shrank it, renamed it, moved it to the bottom, and required press-and-hold, producing "a roughly 35% decline in the net undo-rate." A company deliberately degrading a control because it was working.
- *FTC v. Fitness International* (LA Fitness), paragraph 59: when consumers blocked the card, the company kept rebilling "including by billing new account numbers."
- *FTC v. ByteDance/TikTok*, paragraph 70: policies and practices "subverted parents' efforts to delete their children's accounts."
- *FTC v. GM Universeapps* (Wisey), paragraph 75: "continues billing some consumers even after Wisey customer support confirms successful cancellation of their accounts."

**Posture, per matter:** Amazon Prime, Chegg, Epic, Alexa, Ring, Venmo, Facebook and PCH are entered orders. Uber, LA Fitness, JustAnswer, Wisey and TikTok are pending, nothing adjudicated. Match Group's order was filed August 12, 2025 but entry is **not verified**; do not state that Match paid $14 million.

**The structural irony to put on the page:** the general rule embodying all three prongs, 16 CFR section 425.6, was **vacated on procedural grounds six days before its cancellation requirements became enforceable**, with the Eighth Circuit expressly declining to reach the merits while noting it did not "endorse the use of unfair and deceptive practices in negative option marketing." The substance now survives only as case-by-case ROSCA litigation and company-specific injunctions. As of 2026-07-25 the replacement is at ANPRM stage with a closed comment record and no NPRM.

**The remedy template already exists.** The Chitika order required an opt-out to last a minimum of five years, to display "consumers' current choice status," and to disclose that it was browser-scoped. That is the persistence prong, already drafted as a US consent-order term.

**Why this is first:** it converts the site's ask from "adopt a standard nobody has articulated" into "apply the standard you already enforce, to the surface you have never applied it to." That is a far easier yes for a regulator and much harder for a platform to call novel.

- **Tier:** full standard. Federal complaints and entered orders are primary.
- **Hearsay score:** 5. Individually well covered as consumer stories; never assembled as a doctrine.
- **Caveat:** see 7.1 for the OCR problem on the Amazon order PDF.

### 4.2 The EU DSA proceedings (closes the known gap)

The site's one acknowledged hole. Eight or more primary Commission releases, all fetched by the research passes.

**The strongest single quote, verbatim from IP/26/1579:**

> "Instagram's and Facebook's time management tools, including those activated by default for teens, can be easily dismissed and do not lead to a meaningful reduction and control of the usage of the service."

and on parental controls, they "are only effective if parents and guardians possess adequate technical expertise, as well as devote effort and time to understand them effectively."

**The February 6, 2026 TikTok findings** are the companion: screentime tools "are easy to dismiss and introduce limited friction," and the measures "do not seem to effectively reduce the risks."

**Scope this ledger to include the Irish investigations**, which are the newest and most on-thesis regulatory action anywhere:

- **Coimisiún na Meán, May 5, 2026**, two investigations into Facebook and Instagram under **Article 27(3) and Article 25(1)**, on "the possible inability of users to select and modify a recommender system feed not based on profiling in a direct and easily accessible way, at any time," and whether the interfaces "deceive or manipulate users away from choosing" it. Persistence and coverage, as a live investigation. `https://www.cnam.ie/two-investigations-commenced-into-meta-in-respect-of-facebook-instagram/` (FETCHED)
- **Coimisiún na Meán, December 2, 2025**, TikTok and LinkedIn under Articles 16 and 25, following an **empirical review by its Platform Supervision Division in September 2024** that found reporting mechanisms appeared designed "to confuse or deceive people into believing that they were reporting content as illegal content, as opposed to content in violation of the provider's Terms and Conditions." That review is one of only two European regulator walkthroughs of a live reporting tool.

**Also in scope, and unusually quotable: the Commission's Article 28(4) minors Guidelines**, OJ C/2025/5519, published October 10, 2025 (announced July 14, 2025; cite the OJ instrument, not the announcement).

- Section 6.5.2(e): feedback mechanisms should have "a swift, direct and lasting impact on the parameters, editing and output of the recommender systems," including "permanently removing reported content and contacts from recommendations" and "reducing the visibility of similar content and accounts."
- Section 7.1 names the exact interface strings: options "could include phrases such as 'Show me less/more', 'I don't want to see/I am not interested in'", and providers "should adapt their recommender systems in response to this feedback."
- Section 6.3.1 on defaults: "Regularly test and update default settings, ensuring that they remain effective after all updates."

**Posture warnings this ledger must carry:**

- **No DSA fine to date rests on a recommender-transparency or user-control count.** X (120m EUR), Temu (200m EUR) and AliExpress (550m EUR) rest on risk assessment and mitigation, dark patterns, ad transparency, and researcher access. Do not imply the control counts have been monetized.
- Article 27(3) bites only "where several options are available." It compels easy access to a switch; it does not compel a second option to exist. That is Article 38's job, and Article 38 binds only VLOPs. There is no general DSA right to a non-personalised feed for a non-VLOP service.
- Distinguish carefully: proceedings opened, preliminary findings, commitments made binding, non-compliance decision. All four appear in this record, often for the same party.

- **Tier:** full standard on the Commission and Coimisiún na Meán releases. The Guidelines are non-binding and must be labelled as such.
- **Hearsay score:** 7. Widely reported as "EU says Meta is addictive," almost never as the specific control findings.

### 4.3 Hidden Harms (Senate Judiciary, September 9, 2025)

Bejar's direct successor, in the same subcommittee, with an official transcript.

- **S.Hrg. 119-255**, Serial J-119-37. Chair Blackburn. Witnesses **Dr. Jason Sattizahn** and **Cayce Savage**, former Meta VR user-experience researchers, sworn.
- URL: `https://www.govinfo.gov/content/pkg/CHRG-119shrg62327/html/CHRG-119shrg62327.htm` (FETCHED, 117 KB). Addendum 1 is a `[TEXT NOT AVAILABLE, REFER TO PDF]` stub, so the appendix must be mined from `CHRG-119shrg62327-add1.pdf`.

**Why it is the best new hearing artifact:** Sen. Padilla explicitly picks up the thread from the site's existing January 2024 CEO ledger, saying he asked the five CEOs for adoption-rate data on safety tools and got almost nothing. Sattizahn answers with a number and a mechanism:

> "somewhere between, I believe it was 2 to 10 percent of adoption rates, it didn't surprise me because not even the children who are experiencing VR in this case even see these things as valuable because from the onset, they weren't actually built to be valuable for those people using them."

He also testifies Meta knew from a 2018 Instagram report that parental controls "were not sufficient." Savage: the tools "are not sufficient, in large part, because there's no parent education... I flagged to Meta leadership that we needed to make a priority. And it has not been meaningfully actioned on."

That is the Bejar pattern with a measurement attached: control shipped, never built to be used, adoption 2 to 10 percent, company knew for seven years.

- **Tier:** full standard.
- **Hearsay score:** 8. Coverage is dominated by one clip about deleting a recording. The Padilla adoption-rate exchange, the load-bearing part for this site, got essentially none.

### 4.4 New Hampshire v. TikTok

- Merrimack County Superior Court, **order dated July 8, 2025**.
- Contains a section literally headed "Time Management and Parental Controls" walking through features by name: "Take a Break" has "very low friction"; only 12% of users close the app within 5 minutes while 55% stay past 45 minutes; Restricted Mode still serves "Sexy Themes"; Family Pairing can be disabled by teens "without a PIN code."
- **Posture:** motion to dismiss ruling. Covered once as a local "Section 230 defense fails" story; the parental-control section is essentially unreported.
- **Tier:** full standard, but every feature finding is the court reciting the state's allegations at the pleading stage unless the order says otherwise. Tier accordingly.
- **Hearsay score:** 9.

Best control-integrity document in American case law, on current information.

### 4.5 Patterson v. Meta (build the case against yourself)

- New York Appellate Division, Fourth Department, July 2025, **3-2 decision**.
- A state appellate court squarely **rejecting** the site's legal theory, expressly declining to follow *Anderson v. TikTok*.

**Why build it:** publishing the strongest case against your own thesis is the most credible move available to this project, and it costs nothing the argument actually needs. The decision preserves the exact seam the site lives in, because it distinguishes *Lemmon v. Snap* as content-independent design defect. That is precisely why control integrity survives where "the algorithm is harmful" does not. A ledger that says so out loud is stronger than one that omits the counterweight.

- **Tier:** full standard.
- **Hearsay score:** 4. Reported in legal trade press, invisible in general coverage.

### 4.6 The World Wild Web (House Energy and Commerce, March 26, 2025)

- Serial No. 119-13. URL: `https://www.govinfo.gov/content/pkg/CHRG-119hhrg60034/html/CHRG-119hhrg60034.htm` (FETCHED, 195 KB)
- Witnesses: Yiota Souras (NCMEC), Rebecca Kelly Slaughter (former FTC Commissioner), Dawn Hawkins (NCOSE), Clare Morell (EPPC).

**Contains the most literal statement of the thesis in the federal record.** Hawkins, citing internal documents from the Massachusetts TikTok case:

> "their reset button designed to help teens escape harmful algorithms promoting suicide, eating disorders, and pornography was deliberately hard to use and reset after just 200 videos. That is only 10 minutes of scrolling."

A reset control that silently expires. Morell adds the definitional line: parental controls "only allow parents to set time limits and manage certain settings... Plus, the teen has to accept the parents' supervision and can cancel it at any time. In what sense is that a control?"

- **Tiering discipline required:** the TikTok reset-button claim is a witness characterizing documents from a state case. That is OBSERVED, not ESTABLISHED, unless traced to the Massachusetts complaint itself.
- **Hearsay score:** 3. Barely covered, which makes it low-risk: there is no viral narrative to correct against.

### 4.7 Bits of Freedom v Meta (the thesis, ordered by a court)

- Rechtbank Amsterdam, **October 2, 2025**, ECLI:NL:RBAMS:2025:7253. Affirmed Gerechtshof Amsterdam, **March 10, 2026**, ECLI:NL:GHAMS:2026:594, penalty cap raised to **10,000,000 EUR**.
- The order requires the user's chosen non-profiled feed to **persist**, defined as retained when the user navigates to other sections **and when the user has closed the app and reopened it**. Order 5.2 separately mandates coverage of named surfaces (Instagram Android home, reels across all apps and web, Facebook home and reels).
- The court's finding: "It is impossible in the apps or on the websites to set a 'persistent' choice." Reasoning at 4.33 holds that resetting on navigation forces the user to "actively set that choice again and again during normal use," producing choice fatigue, which is a prohibited dark pattern.

**Posture, stated exactly:** interim injunction, upheld on appeal. Meta withdrew its substantive appeal grounds and a **merits proceeding is pending**. Not final on the merits. Do not write "upheld" without that qualifier.

- **Tier:** full standard, with a non-US banner.
- **Hearsay score:** 8 in the US, where it is essentially unknown.

This is the site's homepage self-test, ordered as law, by a court, with a penalty attached.

### 4.8 Massachusetts SJC (April 10, 2026)

Binding appellate precedent that a broken age gate is not a publishing decision. The research pass verified it does **not** reach the First Amendment, which matters for how it can be cited.

- **Tier:** full standard. **Hearsay score:** 5.

### 4.9 AI chatbots, as one ledger

Two federal hearings plus live litigation.

- **Senate Judiciary, September 16, 2025**, S.Hrg. 119-256, `https://www.govinfo.gov/content/pkg/CHRG-119shrg62328/html/CHRG-119shrg62328.htm` (FETCHED). Hawley to a parent witness: "So, you used every parental control tool available to you, and yet this still happened." Robbie Torney of Common Sense Media, on Meta AI: "There's no separate app, you can't turn it off, and the guardrails that Meta says that exist don't work in our testing." That is red-team testing, the closest thing in the federal record to the site's own self-test methodology.
- **Hard deadline:** four stayed Character.AI cases carry a **July 31, 2026 status-report-or-dismissal date**. If this ledger is wanted, the posture will change within the week.
- **Tier:** full standard, with the same no-platform-witness caveat the Bejar ledger already discloses.
- **Hearsay score:** 9. Among the most clip-driven hearings in the set.

### 4.10 Second tier, worth recording but not queued

- **Plugged Out** (Senate Commerce, January 15, 2026, S.Hrg. 119-472, `CHRG-119shrg64111`, FETCHED, 302 KB). Strong on the **standard** a control should meet, weak on evidence: no platform witness, no whistleblower, no internal documents. Its questions-for-the-record ask Dr. Radesky to name "default settings you would prioritize for minors, such as autoplay off by default, limits on push notifications, cooldown periods, or friction for resharing." **No oath language found in this transcript**; do not cite it as sworn.
- **UK House of Commons Education Committee, HC 1839** (April 21 and 28, 2026). The only place in any record checked where a platform is confronted live with a named control and its adoption number. TikTok: "You could opt out if you want... We found that 98% of under-16s kept that on." Meta, to the SIT Committee: "Ninety-seven per cent of parents and children have chosen to remain in that experience," immediately followed by "Half of them in various studies have said they turn it off." Access gotcha: `committees.parliament.uk` is Cloudflare-gated and 403s automated fetches; the open API serves the identical document at `https://committees-api.parliament.uk/api/OralEvidence/17499/Document/Html`. Non-US banner required.
- **Italy, AGCM v TikTok**, provvedimento n. 31124, **PS12543** (not PS12506), adunanza March 5, 2024, 10m EUR. Measured **adoption** of TikTok's own feed controls: keyword filter used by **under 1%** of Italian users, recommender-reset function by **under 0.5%**. AGCM walked the Article 38 non-personalised-feed path itself and counted six steps. **Posture: first-instance decision. TAR Lazio only refused interim suspension. Do not write "upheld on appeal."**
- **Norway, Datatilsynet v Grindr**, December 13, 2021, NOK 65m, through Borgarting Court of Appeal October 21, 2025. All three prongs in one decision: the opt-out "was not necessarily effective"; it failed cross-surface, since the user "would have to opt out from interest-based ads in general, and not just specifically for the Grindr app"; and exit was harder than entry, since withdrawal "was not as easy as giving consent." **Not confirmed final.**
- **France, Arcom**, statutory report July 24, 2023. A regulator physically walking reporting tools on 11 platforms, via Chrome for web and iOS and Android for apps, April to June 2023. TikTok's statutory form "présente des difficultés de chargement empêchant son affichage"; Snapchat's abuse page "était inaccessible"; **Twitter, Pinterest and LinkedIn offered no way at all for logged-out users to report illegal content.**
- **Italy, AGCM v eDreams**, PS12853, January 27, 2026, 9m EUR. An on-site inspection seized the company's internal rule, in English in the original: "48 hour rule (during first 48hs we don't show the access to the cancelation flow", introduced **after** binding commitments in 2023 to allow cancellation.
- **FTC "Attention Economy" workshop**, June 4, 2025. A sitting **FTC Commissioner** states the thesis: parental controls "just don't perform as promised... giving parents the illusion of control." **Tier-down for an unusual reason:** it is an official agency-published transcript, but a **vendor speaker-labeled** one with misattribution-grade defects (it renders "Holyoak" as "Holyoke," "Morell" as "Morrell"). Every speaker label needs verification against the FTC video. Second flag: no platform participated and no dissenting panelist appeared, so it is advocacy testimony on a government record, not adversarially tested.
- **COPPA Rule amendments**, 90 FR 16918, published April 22, 2025, effective June 23, 2025, general compliance April 22, 2026. Contains a clean **negative** finding worth a ledger paragraph: the amendments strengthen the front-end "say no" and the back-end "must delete eventually," but **add nothing to the middle**, which is whether a parent's revocation actually stops processing. Section 312.6 is byte-for-byte unchanged from 2013. No deadline to act on a revocation, no downstream propagation requirement, request-triggered rather than a persistent control.
- **The 2021 Senate Commerce series.** Outside the recent window, but these are the only GPO transcripts found where a platform head answers for a **named** control. `CHRG-117shrg54588` (Adam Mosseri, December 8, 2021) is the one to look at hardest, since he answers for "Take a Break" shortly after shipping it. `CHRG-117shrg54110` is Frances Haugen. Package existence verified; **full texts not fetched.**

## 5. Strengthening passes on ledgers that already exist

### 5.1 MDL 3047: sworn deposition transcripts are publicly filed

State AG cases were cross-noticed with MDL 3047, so deposition excerpts are on the federal docket as unsealed exhibits. All fetched, all HTTP 200, no auth, from `storage.courtlistener.com`, path base `recap/gov.uscourts.cand.401490/gov.uscourts.cand.401490.<entry>.<att>.pdf`:

| Deponent | Doc | Caption |
|---|---|---|
| Mark Zuckerberg, 3/27/2025 | `3026.3.pdf` | Tennessee ex rel. Skrmetti |
| Arturo Bejar | `3252.20.pdf` | Tennessee ex rel. Skrmetti |
| Jason R. Sattizahn, 12/8/2025 | `3252.10.pdf` | New Mexico ex rel. Torrez |
| Antigone Davis (Meta Global Head of Safety) | `3010.11.pdf` | Tennessee |
| Felicia Chen (Meta 30(b)(6)) | `3105.20.pdf` | Multistate coalition |
| John Hegeman (Meta VP), 7/24/2025 | `3264.18.pdf` | District of Columbia v. Meta |
| Evan Spiegel (Snap CEO), 4/11/2025 | `2759.2.pdf` | MDL/JCCP |
| Eric Han (TikTok US Head of Safety), 3/11/2025 | `2875.3_1.pdf` | MDL/JCCP |
| Neal Mohan (YouTube CEO), 4/24/2025 | `2651.42.pdf` | MDL/JCCP |

**Two cross-references the site can make that nobody else has:** Arturo Bejar and Jason Sattizahn each appear **twice** in the record, sworn before the US Senate and separately deposed under oath in a state AG case. That is the same witness, under oath, in two branches of government, years apart.

**Caveats:** these are **excerpts filed for specific motions**, never full transcripts. **Redaction is uneven per document**: the Mohan file has roughly 12 pages with text against 28 near-blank in the first 40. Retrievable does not mean readable. The "CONFIDENTIAL, PURSUANT TO PROTECTIVE ORDER" stamp is the deposition's own designation, not the filing's status; several are explicitly labeled "(Unsealed)."

**Not a transcript:** `3252.23` is a Rule 30(b)(6) deposition **notice**, 12 pages. Useful as evidence a corporate deposition was taken, not as testimony.

### 5.2 New Mexico v. Meta: trial video exists, transcripts do not

- Official court page: `https://nmcourts.gov/news/high-profile-cases/` links trial exhibits on Google Drive (33 folders) and the verdict order. **No transcripts and no video there.**
- Free public long-form trial video on the nm.news YouTube channel, but the archive **spans February 25 to March 5, 2026 only**. Adam Mosseri's in-person testimony (reported around March 10) is **not** in it.
- AP Archive pool footage of the Zuckerberg deposition as played in court, `https://www.youtube.com/watch?v=YqFwK6Kd9bM`, description fixes the date: deposition February 18, 2026, shown in court March 4, 2026.
- Gavel-to-gavel video is paywalled at Courtroom View Network. nm.news restricts reuse.
- `nmdoj.gov` returns 403 to automated fetches.

## 6. Verified negatives (do not spend time here)

These were checked and came back empty. Recording them is worth more than re-checking them later.

- **EU Parliament has no verbatim committee record, structurally.** Rule 210(1) mandates verbatim reports for plenary only; Rule 223 makes minutes the entire committee obligation. There is no `CRE-IMCO` or `CRE-LIBE` document type. Meta appeared at an IMCO public hearing on protection of minors on June 24, 2026, and TikTok at an IMCO exchange December 3, 2024, but the outputs are agenda, programme, video and bare-roster minutes. Verbatim record and platform testimony are mutually exclusive at the EP.
- **US state legislatures publish no official verbatim committee transcripts.** California (video plus staff analyses; Prop 54 mandates recording, not transcription), Utah, Texas ("not routinely transcribed"), Minnesota. **New York is the sole partial exception**: official stenographic transcripts exist for *public hearings* but not standing-committee bill meetings.
- **No platform employee has testified before the California or New York legislature on minors and safety controls.** In every California hearing with a retrievable witness record, the industry seat was a **trade group**: TechNet, CCIA, Internet Works, Chamber of Progress. TechNet's Dylan Hoffman personally carried the opposition at all three. **New York held no such hearing at all**, 2023 through 2026; SAFE for Kids and the Child Data Protection Act passed with no public hearing. The only place platform employees appear by name is a legislator's **press release** (Assemblymember Wicks, September 9, 2025, quoting Google's Kareem Ghanem and Meta's Dan Sachs on AB 1043), which is not testimony and not a registered position. Note the seam: those two platforms were quoted supporting a bill their own trade groups opposed.
- **`calmatters.digitaldemocracy.org` is machine-generated and unusable as a quote source.** Its own methodology page concedes AI transcription where "a 10% or 20% error rate is common," plus facial-recognition speaker identification. That is exactly the speaker-misattribution failure mode this project has already been burned by.
- **Canada's Competition Bureau has never brought a cancellation, unsubscribe, or opt-out case.** Full deceptive-marketing inventory checked back to 2015. Its flagship matter (Cineplex, 38,978,000 CAD, affirmed 2026 FCA 10, SCC leave **pending, not granted**) is drip pricing, not controls. Its own consumer page routes cancellation complaints to provincial regulators. Its one deceptive-design publication, a February 23, 2026 joint article with the Privacy Commissioner, contains **no Bureau empirical testing**; all the numbers are the privacy regulator's.
- **No Nordic or Benelux authority has made any finding about an in-product engagement control.** Nothing on "Show me less," feed toggles, mute, block, or time limits.
- **The famous "Norwegian dark patterns" documents are NGO work, not regulator work.** "Deceived by Design," the Amazon Prime report, and "INSERT COIN" are all Forbrukerrådet, the Consumer Council. Forbrukertilsynet is the regulator.
- **No Brazilian public body has published a measured test of a platform control.** ANPD's work is documentary compliance monitoring, explicitly not testing and with no published findings. The only Brazilian empirical work is journalistic (Núcleo, AzMina, Lupa).

## 7. Premise corrections (things that would have burned us)

Nine errors the research passes caught in framing that seemed reasonable going in. Recording them because each one would have shipped as a factual claim.

1. **The adopted Irish Online Safety Code contains no recommender obligation at all.** The December 2023 draft did; the adopted Code does not. The only occurrence of "recommender systems" in the 1,286-line text is in the Commissioner's foreword describing the wider framework. Do not cite the Code for recommender controls.
2. **AGCM v TikTok is PS12543, not PS12506, and is not "upheld on appeal."**
3. **Article 27 is absent from the February 19, 2024 TikTok DSA proceedings** article list.
4. **The "2023 dark patterns sweep" is the 2022 sweep**, published January 30, 2023.
5. **TikTok Lite was a DSA case, not a CPC case.** TikTok voluntarily suspended the programme; the Commission did not order suspension.
6. **The Norwegian Datatilsynet Meta ban is a legal-basis ban, not a control-integrity finding**, and the coercive fine was **overturned** by Personvernnemnda on June 18, 2024 for want of jurisdiction. Secondary sources routinely get this wrong.
7. **ACM's online-consumer guidelines are February 2020, updated October 2022**, not February 2023. There is no ACM Epic action in September 2024.
8. **India's DPDP child-protection and consent-withdrawal provisions are notified but NOT in force.** Sections 9(1), 9(3), 6(4), 12 and 13 commence around **May 14, 2027**. Do not state them as operative Indian law.
9. **Recurring across jurisdictions: abstention and jurisdiction rulings get reported as merits wins.** Two examples surfaced in this pass alone. This is the project's documented error class and it is the single most likely way a new ledger goes wrong.

### 7.1 Two PDFs that will break the quote-fidelity checker

- The **`ftc.gov` copy of the Amazon Prime stipulated order** (`Amazon-ROSCA-Order-Filed_0.pdf`) is a scan whose OCR corrupts common words. Cache the RECAP copy instead: `storage.courtlistener.com/recap/gov.uscourts.wawd.323520/gov.uscourts.wawd.323520.535.0.pdf`, which has a clean text layer.
- The **entered GoodRx order** has Type 3 fonts with no ToUnicode map. Cache the proposed order instead.

If the checker caches either bad copy, every quote from it fails for a reason unrelated to fidelity, and the natural response (assume the quote is wrong) is itself wrong.

## 8. The strategic finding

**No regulator anywhere has published an empirical test of whether a recommender feedback control actually suppresses similar content.** Nobody has pressed "Not interested" a hundred times and measured the feed.

The record, precisely bounded:

- Regulators test **cancellation, unsubscribe, consent and deletion** flows extensively and competently. Finland's Consumer Ombudsman walked the actual flows (Ruutu+ required flipping an unlabelled toggle then pressing continue five times, and "the help-page instructions did not match the real flow"). The Netherlands re-tested Epic and found timer items "sometimes disappeared when the timer had reached zero, but sometimes they did not."
- Two regulators have tested **reporting tools**: Arcom in 2023 and Coimisiún na Meán in September 2024. Both found them broken or misrouting.
- One regulator has measured **adoption and discoverability** of feed controls (AGCM on TikTok) but not their effect.
- Two investigations are aimed squarely at the gap and neither has findings: Coimisiún na Meán v Meta (May 5, 2026) and the Commission's continuing "rabbit hole" recommender inquiry.

The only rigorous work on feed controls is academic. A **NYU and Northeastern** study published June 29, 2026 tested **86 safety features and found only 35 worked as documented**: Snapchat 73% failure, Instagram 66%, YouTube 55%, TikTok 50%. That study is **United States** research and is frequently miscredited abroad; do not attribute it to a foreign body.

**Two consequences for the site:**

1. `/scorecard` is not duplicating a government effort. It would be first. That is worth saying on the page.
2. There is a ledger nobody else could write, and it is not about a single proceeding: **who has actually tested a control, and what did they find.** It would assemble Arcom, Coimisiún na Meán, AGCM, the Finnish and Dutch ombudsmen, ICPEN's 81% figure, the GPEN 25%-in-two-clicks figure, and the NYU/Northeastern 35-of-86, and it would end at the boundary above. That is a genuinely novel artifact and it is the strongest possible argument that the site's own test matters.

## 9. Open questions

- **The May 13, 2026 GPO transcript.** Re-check periodically; publishing that retires the second tier-down.
- **Character.AI July 31, 2026 status-report deadline.** Four days from this document. Posture will change.
- **Whether India's IT (Second Amendment) Rules, 2026 were notified** after the May 7, 2026 comment deadline. Drafts confirmed unnotified; status after May 2026 unknown.
- **Brazil's STF item-5 deadline** falls mid-to-late August 2026 and has not expired. Do not state platforms are in breach.
- ~~**Tennessee v. Meta is in trial now**~~ **BUILT 2026-07-26.** It became the eighth ledger (`docs/distillations/tennessee-v-meta.md`) and the fifth proceeding, with a curated case file at `/lawsuits/tennessee-v-meta`. Note that it was **never in the candidate list in section 4**: it surfaced from the July-25 litigation status re-check, not from the nine research passes, which is a reminder that this inventory is a snapshot and not a closed set. Its own open threads (the operative amended complaint is sealed, five orders are paywalled, the trial runs to September 3) live in that ledger's Tensions section, not here.
- **What the Indian GAC dashboard's "Appeals Received" actually counts.** The 51,998 figure does not reconcile with the official parliamentary series and no primary source defines the denominator. Do not publish the number without resolving this.

---

*Provenance: nine parallel research passes over primary sources on 2026-07-25, each instructed to fetch and read official documents rather than rely on coverage, and to mark explicitly what it could not verify. One pass reported that a fetch summarizer fabricated a quotation, which is why section 1 exists and why nothing in this document may be quoted onto the site without independent re-verification. AI-assisted throughout: the research was delegated, the prioritization and the thesis-relevance judgments are the author's. This is a plan, not a claim record; no ledger, page, or figure changes on the basis of this file alone.*
