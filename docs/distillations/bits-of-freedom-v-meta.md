---
title: "Bits of Freedom v. Meta: a court orders the brake to hold"
type: distillation
mode: multi-source (record of one lawsuit, two instances)
subject: Stichting Bits of Freedom v. Meta Platforms Ireland Ltd and others, Rechtbank Amsterdam and Gerechtshof Amsterdam; Digital Services Act articles 25, 27 and 38; persistence of a non-profiled recommender choice
as_of: 2026-08-14
audience: general public reader
sources:
  - "PRIMARY: Vonnis in kort geding, Rechtbank Amsterdam, 2 October 2025, ECLI:NL:RBAMS:2025:7253, case C/13/774725 / KG ZA 25-687 MK/JD. Retrieved 2026-08-14 from the Dutch judiciary open-data API and cached verbatim at docs/distillations/sources/bits-of-freedom-2025-10-02-rechtbank-amsterdam.txt: https://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RBAMS:2025:7253"
  - "PRIMARY: Arrest, Gerechtshof Amsterdam, 10 March 2026, ECLI:NL:GHAMS:2026:594, case 200.360.457/01. Retrieved 2026-08-14, cached at docs/distillations/sources/bits-of-freedom-2026-03-10-gerechtshof-amsterdam.txt: https://data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:GHAMS:2026:594"
  - "Public human-readable versions of both: https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2025:7253 and https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:GHAMS:2026:594"
verified_by: "2026-08-14: both judgments read in full from the official open-data API, not from coverage, and cached. Every quoted span in this ledger is the Dutch original and verifies against those caches under npm run check:quotes. The English beside each quote is a translation by the drafter and is labelled as such; it is not a quotation of the court. No secondary source was used for any claim below."
---

**Tier key (this record's calibration, per the parent plan):** ESTABLISHED means stated in a primary source (here, the text of one of the two judgments) or in the project's verified baseline with independent corroboration; OBSERVED means carried by secondary coverage or inferred from it; ASSUMED means the drafter's inference, flagged as such. **One calibration is specific to this record: a translation is never ESTABLISHED as a quotation.** The Dutch text is the record; the English is the drafter's rendering of it.

## TLDR (summary surfaces, plain text, derived from the ledger)

- **One line (label):** A Dutch court ordered Meta to make a chosen non-profiled feed survive closing and reopening the app, which is this project's own test, imposed as law.
- **Nav label (~40 chars, for the /distillations index card, breadcrumb, and cross-links):** Bits of Freedom v. Meta (Netherlands)
- **OG title (~50 chars, for the share card):** Bits of Freedom v. Meta: the evidence ledger
- **Search snippet (~155 chars, for the meta-description tag):** A Dutch court ordered Meta to keep a user's non-profiled feed setting when they close and reopen Facebook or Instagram, on penalty of 100,000 euro a day.
- **Ledger snippet (~155 chars, for the /distillations/<slug> meta description ONLY; keeps the search snippet to a single consumer):** The evidence record behind the Dutch persistence order: the Dutch text of what the court held, kept apart from what the claimant merely argued.
- **One sentence (card):** In interim proceedings brought by the digital-rights foundation Bits of Freedom, the Amsterdam district court held on 2 October 2025 that resetting a user's chosen non-profiled recommender is a dark pattern prohibited by the Digital Services Act, and ordered Meta to make that choice persist when the user navigates between sections and when the user closes and reopens the app, on penalty of 100,000 euro per day, with the Amsterdam court of appeal raising the ceiling on those penalties to 10 million euro on 10 March 2026.
- **One paragraph (meta description):** Bits of Freedom, a Dutch digital-rights foundation, sued Meta in summary proceedings over the way Facebook and Instagram handle a user's choice of a chronological, non-profiled feed. On 2 October 2025 the Amsterdam district court ordered Meta Ireland to make that choice persistent, spelling out that it must be retained both when the user moves between sections of the platform and when the user has closed the app or website and reopened it, and to make the choice directly and easily accessible on named surfaces of Facebook and Instagram. It held that resetting the choice during ordinary use causes choice fatigue and is a dark pattern prohibited by the Digital Services Act. Penalties run at 100,000 euro a day; on 10 March 2026 the Amsterdam court of appeal upheld the judgment and raised the ceiling on those penalties from 5 million to 10 million euro. This is interim relief, not a final merits ruling. (As of August 14, 2026.)

## Reader summary

As of August 14, 2026, this is the closest thing in the world to this project's proposal written as a court order, and it is not American.

Bits of Freedom is a Dutch digital-rights foundation. In September 2025 it took Meta to the Amsterdam district court in summary proceedings, arguing that Facebook and Instagram break the European Union's Digital Services Act in the way they handle a user's choice of a chronological, non-profiled feed. On 2 October 2025 it largely won.

The court ordered Meta Ireland to make that choice **persistent**, and defined the word: the setting must be retained when the user navigates to other sections of the platform, **and when the user has closed the app or website and then reopens it**. It separately ordered Meta to make the non-profiled option directly and easily accessible on the Instagram Android home page, the Instagram reels section across all apps and websites, and the Facebook home page and reels section across all apps and websites. Non-compliance costs 100,000 euro a day.

The reasoning is the part worth reading twice. The court found that choosing a non-profiled feed is a deliberate act, that moving between sections of an app is not a decision to undo it, and that a platform which resets the choice during ordinary use forces the user to set it again and again, which causes **choice fatigue** and is therefore a **dark pattern prohibited by the DSA**.

On 10 March 2026 the Amsterdam court of appeal upheld the judgment and, on Bits of Freedom's own cross-appeal, raised the ceiling on the penalties from 5 million to 10 million euro. By then Meta had withdrawn part of its appeal and no longer contested the finding that Facebook and Instagram had failed to comply with the DSA provisions relied on.

**Three limits, stated up front because this record is easy to overstate.** It is **interim relief** (*kort geding*), not a final merits judgment. It is **Dutch law applying an EU regulation**, so it binds nothing in the United States and the First Amendment analysis that dominates the American cases plays no part in it. And it is about **the persistence and accessibility of a control**, not about ranking, recommendation quality, or what content anyone may see.

## Brake-integrity relevance (why this record matters more than its size suggests)

The homepage of this site asks the reader to run one test: find the brake, set it, close the app, reopen it, did it hold? Order 5.1 of this judgment orders that the answer must be yes. Not as an aspiration, not as a design recommendation, but as an enforceable obligation with a daily penalty attached.

That converts the project's central claim from a proposal into something a court has already required of one of the two companies named throughout this site. Two consequences follow, and they point in different directions.

The first is that **the standard is drafted**. The paper's section 5 argues that a design standard is not a standard until it says what must persist, across which surfaces, and for how long. This judgment does exactly that, in operative language, and it survived appellate review. Anyone told that control integrity is too vague to be an obligation now has a counter-example with a case number.

The second is that **it happened under a statute, not at common law, and outside the United States**. It rests on articles 25 and 27 of the Digital Services Act, a regulation with no American equivalent. The paper's section 4 ranks American legal exposure and its section 7.2 now names COPPA as the domestic blocker on the youth-defaults layer. Nothing here relieves either. What this record supplies is a worked example of the remedy, and evidence that a regulator or legislature can specify it without collapsing into a content mandate; it is not authority that any American court could do the same.

## Claims (the ledger)

### (a) The case, the courts, the parties

1. **[ESTABLISHED]** The first-instance decision is a *vonnis in kort geding* (judgment in summary, interim-relief proceedings) of the **Rechtbank Amsterdam**, dated **2 October 2025**, ECLI **NL:RBAMS:2025:7253**, case number **C/13/774725 / KG ZA 25-687 MK/JD**. *(Judgment caption and the record's own metadata; "KG" in the case number is the standard marker for kort geding.)*
2. **[ESTABLISHED]** The claimant is **Stichting Bits of Freedom**, established in Amsterdam. The defendants named in the caption are **Facebook Netherlands B.V.** (Amsterdam), **Meta Platforms Ireland Ltd** (Dublin) and **Meta Platforms Inc**. The Dutch entity being first-named is worth noting, since it is the most likely basis for the case being heard in Amsterdam at all. The operative orders run against **Meta Ierland** (Meta Ireland) specifically. *(Judgment caption; orders 5.1 to 5.3.)*
3. **[ESTABLISHED]** The appeal decision is an *arrest* of the **Gerechtshof Amsterdam**, dated **10 March 2026**, ECLI **NL:GHAMS:2026:594**, case number **200.360.457/01**. *(Appeal caption and metadata.)*
4. **[ESTABLISHED]** The dispute is governed by the **Digital Services Act**, the EU regulation of 19 October 2022 applicable since 17 February 2024, and the judgment frames the central question as whether a user-selected recommender must be followed persistently or whether the platforms may switch back to a profiled system after the user closes and reopens the app or website. *(Judgment, introduction to the assessment.)*

### (b) What the court ordered

5. **[ESTABLISHED]** **Order 5.1 is the persistence order.** It commands Meta Ireland, within two weeks, to make the user's indicated choice of recommender system persistent, and it defines persistence to include retention **both** when the user navigates to other sections within the platform **and** when the user has closed the apps or website and then reopens them. See the quote bank for the Dutch text. *(Judgment, order 5.1.)*
6. **[ESTABLISHED]** **Order 5.2 is an accessibility order, not a persistence order, and the distinction matters.** It commands Meta Ireland to make the choice of non-profiled recommender systems directly and easily accessible on (i) the Instagram home page on the Android app, (ii) the Instagram reels section (all apps and websites), and (iii) the Facebook home page and reels section (all apps and websites). **The surface list belongs to 5.2. Order 5.1 is not limited to those surfaces**, which makes the persistence obligation broader than the accessibility one. *(Judgment, order 5.2.)*
7. **[ESTABLISHED]** **Order 5.3 sets the penalty**: 100,000 euro for each day or part of a day of non-compliance with orders 5.1 or 5.2, up to a maximum of 5,000,000 euro at first instance. *(Judgment, order 5.3.)*
8. **[ESTABLISHED]** Meta Ireland was also ordered to pay 2,143.47 euro in costs, plus statutory interest if unpaid within fourteen days. *(Judgment, orders 5.4 and 5.5.)*

### (c) The reasoning: choice fatigue as a prohibited dark pattern

9. **[ESTABLISHED]** The court reasoned that selecting a non-profiled (chronological) recommender is generally a considered act, because it requires an active step by the user, and that navigating between sections afterwards is **not** a considered choice to undo that selection but ordinary use of the platform. *(Judgment, paragraph 4.33.)*
10. **[ESTABLISHED]** It concluded that resetting the choice on navigation forces the user to set it actively again and again during normal use, that this is likely to cause **keuzemoeheid** (choice fatigue), that this constitutes a material distortion of user autonomy, and that the functionality is therefore **a dark pattern prohibited by the DSA**. It records that this reading is supported by recital 67 of the DSA, which names such functionality as an example of a dark pattern. *(Judgment, paragraph 4.33.)*

### (d) The appeal

11. **[ESTABLISHED]** The Gerechtshof Amsterdam **set the judgment aside only insofar as the penalties under 5.3 were capped at 5,000,000 euro**, substituted a ceiling of **10,000,000 euro**, and **upheld the judgment for the remainder**. *(Appeal, operative part.)*
12. **[ESTABLISHED]** The increase came on **Bits of Freedom's cross-appeal** (*incidenteel hoger beroep*), not on Meta's appeal. Meta Ireland was ordered to pay the costs of the interlocutory application and of the principal appeal. *(Appeal, operative part and its ground III discussion.)*
13. **[ESTABLISHED, and stronger than the shorthand "Meta appealed and lost"]** Meta Ireland **withdrew its grounds of appeal 4 to 7**, and as a result **no longer contested** in the appeal the interim relief judge's finding that Facebook and Instagram did not comply with the DSA provisions Bits of Freedom relied on. Its remaining grounds 1 and 2 disputed whether Bits of Freedom had the urgent interest required for summary relief. *(Appeal, paragraphs 237, 274 and 285.)*

### (e) Posture, and what this record is not

14. **[ESTABLISHED]** This is **interim relief**. Both decisions are summary-proceedings decisions; nothing here is a final ruling on the merits. *(Case type and the first-instance caption, which reads Vonnis in kort geding.)*
15. **[ASSUMED, flagged]** A merits proceeding (*bodemprocedure*) is the ordinary sequel to Dutch summary relief. **Neither judgment states that one is pending**, and no source was found that does. Do not state on the site that a merits case is under way. *(Drafter inference plus a negative search of both judgments; see Tensions.)*
16. **[ESTABLISHED]** Nothing in either decision concerns ranking quality, recommendation accuracy, or the removal of content. The obligations are about **whether an offered control is reachable and whether it stays set**. *(Orders 5.1 and 5.2; the assessment throughout.)*

## Quotes (attributed record)

**Read the convention before using anything here.** These judgments are in **Dutch** and there is no official English text. **The quoted span is always the Dutch original**, because that is the record and it is what `npm run check:quotes` verifies against the cached judgments. The English underneath is **a translation by the drafter, not a quotation of the court**, and must never be presented on the site inside quotation marks attributed to the court. Where the site needs an English sentence, paraphrase in the site's own voice and cite the paragraph.

### The court's operative order on persistence (Rechtbank Amsterdam, order 5.1)

- **NL, verbatim:** "persistent te maken, inhoudende dat een door gebruikers ingestelde keuze voor een niet-geprofileerd aanbevelingssysteem behouden blijft, ook als de gebruiker binnen het platform naar andere secties navigeert, en ook als de gebruiker de apps en/of website van de platforms heeft afgesloten en deze vervolgens heropent"
- **EN, drafter's translation:** to make persistent, meaning that a choice set by users for a non-profiled recommender system is retained, including when the user navigates to other sections within the platform, and including when the user has closed the platforms' apps and/or website and then reopens them.

### The court's finding that this is a prohibited dark pattern (paragraph 4.33)

- **NL, verbatim:** "Aannemelijk is dat deze praktijk tot keuzemoeheid van gebruikers leidt"
- **EN, drafter's translation:** It is plausible that this practice leads to choice fatigue among users.

- **NL, verbatim:** "Deze functionaliteit van de platforms betreft dan ook een door de DSA verboden donker patroon"
- **EN, drafter's translation:** This functionality of the platforms therefore constitutes a dark pattern prohibited by the DSA.

### The penalty (order 5.3)

- **NL, verbatim:** "een dwangsom te betalen van € 100.000,00"
- **EN, drafter's translation:** to pay a penalty payment of € 100,000.00. Note that Bits of Freedom had asked for € 250.000 per day; the court set a figure lower than the claimant sought, which is one more reason never to read a claimant filing as the court decision.

### The appeal's operative part (Gerechtshof Amsterdam)

- **NL, verbatim:** "stelt het onder 5.3 bedoelde maximum van de te verbeuren dwangsommen op € 10.000.000,-"
- **EN, drafter's translation:** sets the maximum of the penalty payments referred to under 5.3 at € 10,000,000.

- **NL, verbatim:** "bekrachtigt het vonnis waarvan beroep voor het overige"
- **EN, drafter's translation:** upholds the judgment under appeal for the remainder.

### Meta's withdrawal of its substantive grounds (appeal, paragraph 274)

- **NL, verbatim:** "niet langer het oordeel van de voorzieningenrechter dat Facebook en Instagram niet voldeden"
- **EN, drafter's translation:** no longer [contests] the interim relief judge's finding that Facebook and Instagram did not comply.

### NOT the court speaking: the claimant's contention (paragraph 4.16)

**This is here as a warning, not as evidence.** The line below is the most quotable sentence in the case and it is **Bits of Freedom's assertion**, introduced by paragraph 4.16's "BoF heeft als volgt toegelicht op welke wijze Meta Ierland volgens haar inbreuk maakt op voornoemde artikelen" (BoF has explained as follows how, in its view, Meta Ireland infringes the aforementioned articles). It is recited by the court as a party position. **Do not attribute it to the court.**

- **NL, verbatim, claimant's contention:** "Het is onmogelijk om in de apps of op de websites een 'persistente' keuze in te stellen"
- **EN, drafter's translation:** It is impossible in the apps or on the websites to set a 'persistent' choice.

## Tensions / open questions

- **Is a merits proceeding pending?** Unresolved. Dutch summary relief is normally followed by a merits case, and the project's candidate plan asserted one is pending, but **neither judgment says so** and no source was found. Claim 15 records this as ASSUMED and the site must not state it. Resolving it needs the Amsterdam docket or a statement from a party.
- **Has Meta actually complied, and did any penalty accrue?** Not addressed by either judgment, both of which predate any compliance window closing. A daily penalty of 100,000 euro against a company of Meta's size is a compliance signal only if someone checks whether the setting now persists. **That is a testable question and this site's own scorecard is the instrument.** It is the most valuable follow-up available on this record and it needs no court documents at all.
- **The translation problem is structural, not incidental.** This is the corpus's first non-English source. The convention adopted here (Dutch span quoted, English labelled as translation) keeps `check:quotes` meaningful, but it makes the material awkward to use on a reader-facing page, where a Dutch sentence in quotation marks helps almost nobody. The likely resolution on the curated pages is to paraphrase in the site's own voice and cite the paragraph number, reserving verbatim Dutch for this ledger. That is a drafting decision, not a verification one, and it is not yet made.
- **Scope creep risk.** The judgment is about persistence and accessibility of a control. It is tempting to read it as a general European endorsement of de-amplification. It is not, and the Brake-integrity relevance section above is deliberately narrow about this.
- **Article 38 DSA.** The subject line of this record names it alongside 25 and 27 because the proceedings engage the very-large-platform obligation to offer at least one non-profiling recommender option. The specific role article 38 played in the outcome was not separately distilled in this pass and should be before the paper cites it.

## Discrepancies vs the candidate plan

The candidate entry at section 4.7 of `docs/plans/2026-07-25-ledger-candidates.md` was research, not a verified record, and the plan says explicitly that nothing in it may be quoted until it clears verification. Three of its statements did not survive contact with the judgments:

- **The headline quote is misattributed.** The plan presents "It is impossible in the apps or on the websites to set a 'persistent' choice" as **"The court's finding"**. It is the claimant's contention, recited in paragraph 4.16 under "volgens haar" (in its view). This is the same failure class as the 2026-07-24 hearings error, where a witness's line was attributed to a senator: a real string from the real document, in the wrong voice. It would have reached the site as a judicial finding.
- **Order 5.2 is mischaracterised.** The plan says 5.2 "separately mandates coverage of named surfaces" in the context of persistence. 5.2 is an **accessibility** order. The persistence order, 5.1, carries no surface list, so the plan's framing makes the stronger obligation look narrower than it is.
- **The pending merits proceeding is unsourced.** The plan states it as fact. Neither judgment supports it. Demoted to ASSUMED here.

What the plan got right: both ECLIs, both dates, both courts, the 10,000,000 euro ceiling, the withdrawal of Meta's substantive grounds, the interim posture, and its own instruction to write "upheld" only with the interim qualifier attached.

## Coverage note

- **Both judgments were read in full from the official source.** The Dutch judiciary publishes decisions as open data at `data.rechtspraak.nl/uitspraken/content?id=<ECLI>`, which returns XML including the full body. Both fetched cleanly over plain HTTPS with no blocking, which makes this the least obstructed primary source the project has yet used; contrast `ftc.gov`, `nmdoj.gov` and CourtListener, all of which refuse plain fetches.
- **No secondary source was used for any claim.** No press release, no law-firm alert, no coverage. Where a fact was not in the judgments, it is marked ASSUMED or left in Tensions.
- **What was not distilled in this pass.** The full procedural history before September 2025; the parties' arguments beyond what is needed to mark the 4.16 attribution trap; the role of article 38 DSA specifically; the interlocutory application (*incident*) that preceded the appeal; and the costs reasoning. None of these is load-bearing for the site's use of this record.
- **The compliance question is deliberately left open**, not because it is unimportant but because it is the one fact here that a reader can check themselves.
