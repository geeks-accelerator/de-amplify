---
title: "The EU Digital Services Act proceedings against Meta and TikTok: a regulator scoring the brakes"
type: distillation
mode: multi-source (record of two regulatory proceedings)
subject: European Commission formal proceedings under Regulation (EU) 2022/2065 (the Digital Services Act) against Meta Platforms Ireland (Facebook, Instagram), opened 2024-05-16, and against TikTok, opened 2024-02-19. Four sets of preliminary findings adopted between 2026-02-06 and 2026-07-24.
as_of: 2026-08-02
audience: general public reader
sources:
  - "PRIMARY (Commission press release IP/26/312, 2026-02-06): 'Commission preliminarily finds TikTok's addictive design in breach of the Digital Services Act'. https://ec.europa.eu/commission/presscorner/detail/en/ip_26_312 (fetched 2026-08-02; plain-text body cached at sources/ec-ip-26-312.txt)"
  - "PRIMARY (Commission press release IP/26/920, 2026-04-29): 'Commission preliminarily finds Meta in breach of Digital Services Act for failing to prevent minors under 13 from using Instagram and Facebook'. https://ec.europa.eu/commission/presscorner/detail/en/ip_26_920 (fetched 2026-08-02; cached at sources/ec-ip-26-920.txt)"
  - "PRIMARY (Commission press release IP/26/1579, 2026-07-10): 'Commission preliminarily finds the addictive design of Instagram and Facebook in breach of the Digital Services Act'. https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1579 (fetched 2026-08-02; cached at sources/ec-ip-26-1579.txt)"
  - "PRIMARY (Commission press release IP/26/1679, 2026-07-24): 'Commission preliminary finds TikTok in breach of Digital Services Act for failing to ensure safe accounts for minors'. https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1679 (fetched 2026-08-02; cached at sources/ec-ip-26-1679.txt)"
  - "RETRIEVAL NOTE, read before re-fetching: the presscorner detail URLs above serve a JavaScript shell to a plain HTTP client. curl returns HTTP 200 and about 19 KB containing the title in meta tags and NO body text, which is a false-negative trap: a naive fetch looks successful and yields an empty article. The body is served as JSON by the site's own API at https://ec.europa.eu/commission/presscorner/api/documents?reference=IP/26/1579&language=en (field docuLanguageResource.htmlContent), and releases can be located by date and title through https://ec.europa.eu/commission/presscorner/api/search?language=en&text=addictive%20design . Every cached file above was extracted from that API, not from the rendered page."
  - "NOT OBTAINED: the preliminary findings documents themselves. What the Commission publishes at these URLs is a press release ABOUT the findings; the Statement of Objections equivalent is served on the company and is not public. Every quotation in this record is therefore the Commission's own public characterisation of its findings, which is a primary source for what the Commission says, and not the underlying reasoning."
verified_by: "2026-08-02 primary-source pass. All four releases fetched through the presscorner API and cached as plain text. Every quoted span in this record was verified as an exact substring of its cache under punctuation folding (the releases use curly quotation marks and apostrophes, the ledger uses straight), with a positive control that hits and a negative control that misses on each file. The reference number for the February 2026 TikTok finding (IP/26/312) was recovered from the presscorner search API, having been absent from the site and from the parent plan."
---

**Tier key (this record's calibration, per the parent plan):** ESTABLISHED means stated in a primary source (here, an official European Commission release) with the caveat in the Coverage note about what a press release is; OBSERVED means carried by secondary coverage or inferred from it; ASSUMED means the drafter's inference, flagged as such. This authority-based calibration is the plan's deliberate adaptation for legal and regulatory records.

## TLDR (summary surfaces, plain text, derived from the ledger)

- **One line (label):** The EU is scoring the brakes directly: four preliminary findings say Meta's and TikTok's time limits and parental controls do not work.
- **Nav label (~40 chars, for the /distillations index card, breadcrumb, and cross-links):** The EU DSA proceedings
- **OG title (~50 chars, for the share card):** The EU DSA proceedings: the evidence ledger
- **Search snippet (~155 chars, for the meta-description tag):** Four EU preliminary findings say Meta's and TikTok's screen-time tools are too easy to dismiss and their parental controls only work for expert parents.
- **Ledger snippet (~155 chars, for the /distillations/<slug> meta description ONLY; keeps the search snippet to a single consumer):** The tiered record behind the Brussels findings: what the Commission actually said, in its own words, and the large distance between a preliminary finding and a fine.
- **One sentence (card):** Between February and July 2026 the European Commission adopted four sets of preliminary findings against Meta and TikTok under the Digital Services Act, and the striking thing for anyone studying platform safety is that a regulator tested the controls themselves and said, in writing, that the screen-time tools can be easily dismissed, that they do not produce a meaningful reduction in use, and that parental controls only work for parents with the technical expertise and spare time to understand them.
- **One paragraph (meta description):** Between February and July 2026 the European Commission adopted four sets of preliminary findings against Meta and TikTok under the Digital Services Act: TikTok's addictive design (February 6), Meta's failure to keep under-13s off Instagram and Facebook (April 29), the addictive design of Instagram and Facebook (July 10), and TikTok's account settings for minors (July 24). Two of them score the safety controls directly, finding that time-management tools including those on by default for teens can be easily dismissed and do not meaningfully reduce use, and that parental controls only work for parents who have the technical expertise and time to understand them. All four are preliminary, none is a fine, and the companies have not yet answered. (As of August 2, 2026.)

## Reader summary

Between February and July 2026 the European Commission told Meta and TikTok, four separate times, that it thinks they are breaking the Digital Services Act. These are not lawsuits and they are not fines. They are "preliminary findings", which is the stage in a European regulatory investigation where the regulator writes down what it believes it has found and gives the company a chance to answer before anything is decided.

Four sets, in order: TikTok's addictive design (February 6, 2026), Meta's failure to keep children under 13 off Instagram and Facebook (April 29), the addictive design of Instagram and Facebook (July 10), and TikTok's account settings for minors (July 24).

Two of them matter enormously to this site, because they do something no American court or agency has done: they examine the safety controls themselves and score them. On Meta, the Commission wrote that Instagram's and Facebook's time-management tools, "including those activated by default for teens, can be easily dismissed and do not lead to a meaningful reduction and control of the usage of the service", and that parental controls "are only effective if parents and guardians possess adequate technical expertise, as well as devote effort and time to understand them effectively". On TikTok, it wrote that the time-management tools "are easy to dismiss and introduce limited friction". On Meta's tool for reporting an under-13 account, it counted the clicks: seven, to reach a form that is not filled in for you, after which "there often is no proper follow-up".

That is a regulator applying, in its own vocabulary, the test this site calls brake integrity. Not "is this content harmful" but "does the control you offered actually do anything".

Now the honest part, and it is large. **A preliminary finding is an accusation, not a verdict.** Every one of these releases says so in the same sentence: "These preliminary findings do not prejudge the final outcome of the investigation." The companies have a right of defence, they can read the Commission's file and reply in writing, and a European Board for Digital Services is consulted before anything final. Only after all that could the Commission issue a non-compliance decision, which is the thing that can carry a fine, capped at 6% of worldwide annual turnover. **None of the four has reached that stage.** Nobody has been fined for any of this, and the word "preliminarily" is doing real work in every sentence above.

Two further limits worth knowing. First, what the Commission publishes is a press release about its findings; the findings document itself goes to the company and is not public, so this record quotes the regulator's own summary of its reasoning rather than the reasoning. Second, this is European law about European users, and it has no direct effect in the United States.

## Brake-integrity relevance (why these proceedings feed the de-amplify thesis)

The site's argument has a known weak point: it asks for a standard that nobody has written. These proceedings are the closest thing in the world to somebody writing it.

Look at what the Commission actually measured. Not whether the feed contains bad content. Not whether the algorithm is harmful in the abstract. It asked, of a specific shipped control: can the user dismiss it easily, does it produce a meaningful reduction in use, does it require expertise the user does not have, and how many clicks does it take to reach. Those are performance questions about a brake, and the Commission answered them in writing, on the record, about named features.

Three of this site's seven scorecard dimensions appear almost verbatim in the Commission's language:

- **Material.** The finding is not that the tool is missing. It is that it exists and does "not lead to a meaningful reduction and control of the usage of the service." A control that changes nothing measurable is the exact failure this project names.
- **Discoverable.** Seven clicks to reach a reporting form, on a form not pre-filled, is a discoverability finding with a number attached.
- **Non-circumventing.** "Can be easily dismissed" and "introduce limited friction" are findings that the product routes around the user's own choice.

And the remedies the Commission names are design remedies, not speech remedies: disable autoplay and infinite scroll by default, implement effective screen-time breaks including at night, adapt the recommender system to be less engagement-oriented. That is de-amplification rather than censorship, proposed by a regulator, which is the precise shape this site argues for.

**The honest counterweight, which belongs here rather than buried.** None of this is law yet. A preliminary finding that is never confirmed is worth nothing as precedent, and the Commission has closed parts of these same proceedings by accepting commitments rather than by deciding anything. So the correct claim is not "Europe has adopted brake integrity." It is "a major regulator has, in public, tested platform brakes on something close to these criteria and said they failed." That is a much smaller claim, and it is still the strongest one available anywhere.

## Claims (the ledger)

### (a) The proceedings, and exactly what posture they are in

1. **[ESTABLISHED]** There are **two separate formal proceedings**, not one. The proceeding against **TikTok** was launched **19 February 2024**; the proceeding against **Meta** (Facebook and Instagram) was launched **16 May 2024**. Both are under the Digital Services Act. *(IP/26/312 and IP/26/1679 for TikTok; IP/26/920 and IP/26/1579 for Meta. Each release states its own proceeding's launch date in its Background section.)*

2. **[ESTABLISHED]** **Four sets of preliminary findings** are covered by this record, with their official reference numbers and dates:

   | Reference | Date | Subject |
   |---|---|---|
   | **IP/26/312** | 2026-02-06 | TikTok's addictive design |
   | **IP/26/920** | 2026-04-29 | Meta's failure to prevent under-13s using Instagram and Facebook |
   | **IP/26/1579** | 2026-07-10 | The addictive design of Instagram and Facebook |
   | **IP/26/1679** | 2026-07-24 | TikTok's account settings for minors |

   *(All four fetched and cached. Dates are the Commission's own `eventDate` and match its `publishDate` in every case.)*

3. **[ESTABLISHED, and this is the claim most likely to be reported wrong]** **All four are preliminary findings. None is a decision, and none carries a fine.** Each release states, in terms, that "These preliminary findings do not prejudge the final outcome of the investigation." The sequence that follows is: the company exercises its right of defence and may examine the Commission's investigation file and reply in writing; the European Board for Digital Services is consulted; only then may the Commission issue a **non-compliance decision**, which is the instrument that can carry a fine. *(All four releases, "Next steps".)*

4. **[ESTABLISHED]** The fine ceiling, if it ever came to that, is **6% of the provider's total worldwide annual turnover**, and the amount would be proportionate to the nature, gravity, recurrence and duration of the infringement. In the Meta age-assurance release the Commission also notes it can impose **periodic penalty payments** to compel compliance. *(All four releases; the periodic-penalty point is IP/26/920.)*

5. **[ESTABLISHED, and it is the reason posture discipline matters here]** These proceedings contain **four different postures at once, for the same party**. Within the TikTok proceeding alone: advertising transparency was **closed through binding commitments in December 2025**; researcher access to public data reached **preliminary findings in October 2025**; addictive design reached preliminary findings in February 2026; and the "rabbit hole effect" of the recommender system plus age-misrepresentation risk remain **under investigation with no findings at all**. Do not let one of these stand in for another. *(IP/26/1679 and IP/26/312, Background.)*

6. **[ESTABLISHED]** Both proceedings have a live, unresolved **"rabbit hole"** strand, aimed squarely at recommender systems drawing minors into escalating content. For Meta the Commission says it "continues its investigation into so-called 'rabbit hole' effects caused by the design of Facebook's and Instagram's recommender systems, which may exploit minors' vulnerabilities and inexperience." **No findings have been adopted on it.** *(IP/26/1579 and IP/26/920 for Meta; IP/26/312 and IP/26/1679 for TikTok.)*

### (b) The control-integrity findings (the reason this record is on this site)

7. **[ESTABLISHED]** On Meta's time-management tools, the Commission found: **"Instagram's and Facebook's time management tools, including those activated by default for teens, can be easily dismissed and do not lead to a meaningful reduction and control of the usage of the service."** Note the clause about defaults: the finding covers the tools that are already on for teenagers, not only the ones a user has to find. *(IP/26/1579. Verified as an exact substring of the cache.)*

8. **[ESTABLISHED]** On Meta's parental controls: they **"are only effective if parents and guardians possess adequate technical expertise, as well as devote effort and time to understand them effectively"**, and this **"undermines the efficiency of such measures in addressing the inherent risks posed by Instagram and Facebook's addictive design."** *(IP/26/1579. Verified as an exact substring.)*

9. **[ESTABLISHED]** On TikTok's equivalents, five months earlier and in near-identical terms: the time-management tools **"do not seem to be effective in enabling users to reduce and control their use of TikTok because they are easy to dismiss and introduce limited friction"**, and parental controls **"may not be effective because they require additional time and skills from parents to introduce the controls."** *(IP/26/312. Verified as exact substrings.)*

10. **[ESTABLISHED]** On Meta's tool for reporting an under-13 account, the Commission counted the friction: it **"is difficult to use and not effective, requiring up to seven clicks just to access the reporting form, which is not automatically pre-filled with the user's information."** And on what happens after a report: **"Even when a minor under 13 is reported for being under the age threshold, there often is no proper follow-up, and the reported minor can simply continue to use the service without any type of check."** *(IP/26/920. Verified as exact substrings.)*

11. **[ESTABLISHED]** On Meta's awareness-raising measures, the Commission found that tips and links to mental-health resources reached through a separate 'safety centre' page **"do not seem to sufficiently mitigate the risk of addictive design on Facebook and Instagram."** Recorded because it is the same finding shape applied to a third kind of control: the remedy exists, and it is somewhere else. *(IP/26/1579.)*

12. **[ESTABLISHED]** The remedies the Commission identifies are **design changes, not content rules**. For Meta: "disabling key addictive features such as 'autoplay' and 'infinite scroll' by default, implementing effective 'screen time breaks', and adapting its recommender system to make it less engagement-oriented." For TikTok: "disabling key addictive features such as 'infinite scroll' over time, implementing effective 'screen time breaks', including during the night, and adapting its recommender system." *(IP/26/1579 and IP/26/312.)*

### (c) What the Commission says the risk assessments missed

13. **[ESTABLISHED]** The Commission's theory is not only that the mitigations failed but that the **risk assessment upstream of them was inadequate**. For Meta it found the company "did not consider certain design features of Instagram and Facebook, such as highly personalised recommendations, autoplay and infinite scroll", and that these "fuel the user's urge to keep scrolling and shift the brain into 'autopilot mode', contributing to unhealthy habits and compulsive use." *(IP/26/1579.)*

14. **[ESTABLISHED]** Specifically on night-time use, the Commission found Meta **"disregarded available information about the time minors spend on Instagram or Facebook at night"** and how the optimisation of formats such as reels and stories "could lead to excessive or compulsive use of the services." The parallel TikTok finding names the same indicator: "the time that minors spend on TikTok at night, the frequency with which users open the app, and other potential indicators." *(IP/26/1579 and IP/26/312.)*

15. **[ESTABLISHED]** On the under-13 question the Commission put a number on the population Meta's assessment allegedly failed to account for: evidence "from all over the European Union indicating that roughly **10-12% of children under 13** are accessing Instagram and/or Facebook." *(IP/26/920. This is the Commission characterising a body of evidence, not publishing a study of its own.)*

16. **[ESTABLISHED]** The age-assurance finding is mechanically simple and worth stating plainly: at account creation, "minors below 13 can enter a false birth date that makes them at least 13 years old, with no effective controls in place to check the correctness of the self-declared date of birth." *(IP/26/920.)*

### (d) The TikTok minors' account-settings finding

17. **[ESTABLISHED]** The July 24 finding is about **defaults and exposure**, not about time. Minors on TikTok can set an account to 'public', which lets any user, "including those without a TikTok account", view their content; for 16 and 17 year olds it also allows their content to be recommended to any other user through the For You Feed. *(IP/26/1679.)*

18. **[ESTABLISHED]** And the private setting does not close it: **"Even when minors choose private accounts, their accounts can be easily found through the 'following' and 'followers' lists of other users, and their profile photos remain accessible to anyone, including users without a TikTok account."** This is a coverage failure in the site's vocabulary: the control exists, the user selected it, and a surface it did not reach leaks the same information. *(IP/26/1679. Verified as an exact substring.)*

19. **[ESTABLISHED]** The Commission's proposed remedy is a default change plus a hard ceiling: minors' content should by default be visible only to users the minor has accepted, and while older minors may opt to share more broadly, the content "should under no circumstances be accessible to a global audience outside the platform." It also says TikTok "should refrain from recommending minors' content to other TikTok users through the For You Feed." *(IP/26/1679.)*

### (e) The benchmark the Commission is using

20. **[ESTABLISHED]** The Commission is measuring both companies against its **Guidelines on the protection of minors**, which it used "as a benchmark to evaluate Instagram's and Facebook's compliance" and "relied on" to evaluate TikTok's. The releases refer to them as the 2025 DSA Guidelines on the protection of minors. *(IP/26/920 and IP/26/1679.)*

21. **[ESTABLISHED, and it is a limit not a strength]** Guidelines are **not binding law**. They are the yardstick the Commission has chosen to apply, and a company can contest their application. Do not cite the Guidelines as an obligation. *(Stated here as posture discipline; the releases describe them as guidelines and as a benchmark, never as a binding instrument.)*

22. **[ESTABLISHED]** On age assurance specifically, the Guidelines "identify age estimation and age verification as an appropriate and proportionate way of ensuring a high level of privacy, safety and security for minors", and the Commission holds that to be effective "all age-assurance technologies must be accurate, reliable, robust, non-intrusive, and non-discriminatory." The Commission has also developed a **blueprint for an EU Age Verification app**. *(IP/26/920.)*

### (f) What is NOT established, and must not be implied

23. **[ESTABLISHED]** **No fine has been imposed in any of these four matters, and no non-compliance decision has been adopted in any of them.** Anyone reading a headline as "the EU fined Meta for addictive design" has read it wrong. *(All four releases, "Next steps".)*

24. **[ESTABLISHED]** **Meta and TikTok have not answered on this record.** The releases describe the right of defence as a future step in every case. Neither company's response is quoted in this ledger because none exists in the sources it is built from. This record is therefore one-sided by construction, and section (b) is the regulator's contention, not a finding of fact by any tribunal.

25. **[ASSUMED]** The distiller's characterisation, flagged as such: these are the most on-thesis regulatory documents this project has found anywhere, because they evaluate named controls on performance criteria rather than evaluating content. No court or regulator has adopted this characterisation and it is not a legal conclusion.

## Quotes (attributed record)

Every span below was verified as an exact substring of the cached release named after it, under punctuation folding only (the Commission's text uses curly quotation marks and apostrophes; this ledger uses straight ones per house style, and the fold is what reconciles them). The speaker is **the European Commission in every case**: these are institutional documents, not attributed statements by a named official, and nothing here should be put in a person's mouth.

**On whether the brake works (IP/26/1579, Meta, 2026-07-10)**

> "Instagram's and Facebook's time management tools, including those activated by default for teens, can be easily dismissed and do not lead to a meaningful reduction and control of the usage of the service."

> "Meta's parental controls are only effective if parents and guardians possess adequate technical expertise, as well as devote effort and time to understand them effectively."

> "Evidence also shows that Meta's current mitigation measures failed to effectively tackle the risks stemming from its addictive design."

**On whether the brake works (IP/26/312, TikTok, 2026-02-06)**

> "The time management tools do not seem to be effective in enabling users to reduce and control their use of TikTok because they are easy to dismiss and introduce limited friction."

> "parental controls may not be effective because they require additional time and skills from parents to introduce the controls"

**On friction and follow-through (IP/26/920, Meta, 2026-04-29)**

> "Meta's tool for reporting minors under 13 on the platform is difficult to use and not effective, requiring up to seven clicks just to access the reporting form, which is not automatically pre-filled with the user's information."

> "Even when a minor under 13 is reported for being under the age threshold, there often is no proper follow-up, and the reported minor can simply continue to use the service without any type of check."

**On a control that does not cover its surfaces (IP/26/1679, TikTok, 2026-07-24)**

> "Even when minors choose private accounts, their accounts can be easily found through the 'following' and 'followers' lists of other users, and their profile photos remain accessible to anyone, including users without a TikTok account."

**On the mechanism (IP/26/1579 and IP/26/312)**

> "These features fuel the user's urge to keep scrolling and shift the brain into 'autopilot mode', contributing to unhealthy habits and compulsive use."

> "by constantly 'rewarding' users with new content, certain design features of TikTok fuel the urge to keep scrolling and shift the brain of users into 'autopilot mode'"

**The sentence that limits all of the above (all four releases)**

> "These preliminary findings do not prejudge the final outcome of the investigation."

## Tensions / open questions

- **A press release is not the finding.** What the Commission publishes is its own account of what it found. The preliminary findings document is served on the company and is not public, so this ledger can quote the regulator's summary precisely and cannot check it against the reasoning underneath. That is a genuine ceiling on the tier, and it is why the Coverage note restates it.
- **Whether any DSA fine has ever rested on a user-control or recommender-transparency count is NOT established in this pass.** The parent plan asserts that the X, Temu and AliExpress fines rest on risk assessment, dark patterns, ad transparency and researcher access rather than on control integrity, and that assertion is plausible and load-bearing (it would mean the control counts have never been monetised). **It was not verified here and must not be stated on the site until it is.** Verifying it means fetching those three decisions, not their coverage.
- **Article 27(3) compels access to a switch, not the existence of a second option.** The parent plan records that the right to select a non-profiled feed bites only "where several options are available", and that the obligation to offer a non-profiled option at all is Article 38, which binds only very large platforms. None of the four releases in this record turns on Article 27 or 38, so this ledger makes no Article-level claim at all. If a future pass adds one, that distinction is the trap.
- **The Irish investigations are in scope for this proceeding family and are not in this ledger.** Coimisiún na Meán opened investigations into Facebook and Instagram in May 2026 that go directly at persistent recommender choice, which is nearer to this site's thesis than anything the Commission has said. They are a separate regulator under the same regulation, they were not fetched in this pass, and adding them is the obvious next extension.
- **Nothing here is American law.** These are European instruments about European users. The site's argument may borrow the Commission's reasoning; it may not borrow its authority.
- **This record will age at the speed of the right of defence.** The next event in any of these four matters is a reply from Meta or TikTok, which is not usually published. The event after that could be a non-compliance decision, a set of binding commitments, or nothing for a year.

## Discrepancies vs the public record

- **D-1: the site cited three of these four findings by date but only one by reference number, and IP/26/312 was missing entirely.** Before this ledger, `content/lawsuits.md` gave IP/26/1579 and IP/26/920 correctly and described the February 6 TikTok finding with no reference at all. It is **IP/26/312**, recovered from the presscorner search API on 2026-08-02.
- **D-2: presscorner reference numbers are not chronological, and guessing them wastes time.** IP/26/304 is dated 2026-02-03 and IP/26/310 is dated 2026-02-09, but IP/26/312 is dated 2026-02-06, which sits between them by number and before them by date. Enumerating references around a target date does not find a release. Use the search API.
- **D-3: a plain fetch of a presscorner URL returns HTTP 200 with no article text.** This is the most dangerous artifact in this source family, because it looks like a successful fetch. The page is a JavaScript shell; the title survives in meta tags, which makes a naive extraction produce a document that has the right headline and an empty body. Anything built from that would be built from nothing. Use the API endpoint recorded in the sources block.
- **D-4: the Commission's own house style uses curly apostrophes inside single-quoted terms** ('autopilot mode', 'infinite scroll', 'rabbit hole effect', 'safety centre'). Quote verification against this family requires the punctuation fold already used for the hearing transcripts, or every span containing one of those terms fails for a reason unrelated to fidelity.
- **D-5: the site's paraphrase of the follow-up finding is looser than the source.** The page rendered it as a successful report "often" drawing no follow-up, with only the single word quoted. The Commission's sentence is "there often is no proper follow-up, and the reported minor can simply continue to use the service without any type of check." The full sentence is stronger and is now quoted in the quote-bank; the one-word quotation should not be reintroduced.

## Coverage note

- **What this record is built from.** Four official European Commission press releases, fetched through the Commission's own API and cached as plain text in `sources/`. Nothing else. No secondary coverage was used for any claim, and none was needed.
- **What "primary" means here, precisely.** These releases are a primary source for **what the European Commission publicly says it has preliminarily found**. They are not the findings, not a decision, and not a court record. Every claim in section (b) inherits that ceiling. This is a weaker artifact than a court order and a stronger one than any journalism about it, and it is worth being exact about which.
- **One-sidedness, named.** Neither Meta nor TikTok has replied on this record, because the procedural stage at which they reply has not happened. A distillation of an accusation is a distillation of an accusation. Section (f) exists to keep that in front of the reader rather than in a footnote.
- **Why this ledger exists at all.** `/lawsuits` has stated the Commission's findings as fact since July 2026 with no tiered claim record behind them, which made the Brussels section the one place on the site where the ledger-first rule did not hold and an EC correction had nowhere to land. The page said so out loud as an interim measure. This closes it; that disclosure, and the matching one in the `/distillations` lawsuits blurb, should now be removed rather than left standing.
- **Deliberately out of scope.** Coimisiún na Meán's Irish investigations, the Article 28(4) minors Guidelines as an instrument in their own right, and the DSA fines against other platforms. Each is a real extension and each needs its own primary-source pass; see Tensions.
