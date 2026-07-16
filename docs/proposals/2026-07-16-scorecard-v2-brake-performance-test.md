---
title: "Scorecard v2: from a features test to a performance test"
subtitle: "A proposal to revise the brake-integrity scorecard: add the missing dimensions (an end, friction symmetry, the receipt), rename the anti-circumvention idea to what it actually is, and version the test so old reports stay comparable."
status: "PROPOSAL FOR REVIEW, not adopted. Nothing here is live; the current six-part test remains the operative standard until this is accepted, amended, or rejected. Prepared for external review (human and agent reviewers). AI-assisted (see Provenance)."
author: "Lee Brown"
date: 2026-07-16
site: "de-amplify.com"
document: "Standard-revision proposal (Lane C). Companions: the Brake Integrity Standard (/proposal, the standard this would amend), the brake scorecard (/scorecard, the instrument this would replace), the experimental appendix (/notes)."
---

# Scorecard v2: from a features test to a performance test

> **The one-line version.** A physical brake is judged by its stopping distance, not by the presence of a pedal. The current scorecard mostly tests whether the pedal exists and stays where you put it. Version 2 would test what happens after you press it.

**Reviewer note (2026-07-16).** An agent review is appended at the end of this document, after Provenance: "Reviewer response (2026-07-16, agent review)". It answers the section 6 questions inline; verdict is adopt-with-revisions. Read its first structural finding before revising: the v1 baseline is stale. The live scorecard was already reconciled to seven dimensions, so section 2's "six" is outdated and "03 Effective" is a re-merge, not a merge from the paper.

## 0. What this document is, and the rule it operates under

The brake scorecard (de-amplify.com/scorecard) is the movement's instrument: the brake-integrity test written out so everyone scores a platform the same way, producing comparable reports. Its dimensions are defined in section 3 of the policy paper (The Brake Integrity Standard) and rendered on the scorecard page. **Changing the scorecard means changing the standard**, in the paper and on the page in lockstep, and it affects the comparability of every report filed under the old test.

So this document follows the project's own discipline: it is a proposal to be reviewed and attacked before anything ships. The current test stays operative until then. Reviewers are asked to answer the specific questions in section 6.

## 1. Why revise a test that is only a day old

Three inputs arrived after the scorecard shipped, and each exposes a gap.

**1. The trivial-pass loophole (internal review).** Brake integrity as written is conditional: "when a service presents a control... it must work and persist." A platform that offers no brake at all passes trivially, because there is nothing to test. The deepest missing brake is the end itself: infinite scroll did not break a stopping point, it removed the concept of one. Instagram's "You're All Caught Up" marker, which announces the end of followed content and is immediately followed by suggested posts, is the cleanest exhibit: the end present in form, absent in effect. The current test cannot see any of this.

**2. External review (July 2026).** An external editorial-and-legal review of the project's litigation explainer proposed a performance-based recasting of the test: activation, scope, persistence, friction symmetry, outcome integrity, auditability, with the heuristic that brake integrity behaves multiplicatively (if any factor is effectively zero, the brake as a whole is ineffective). Parts of that list duplicate what the standard already has; two parts (friction symmetry, auditability) are genuine gaps. Section 3 sorts this.

**3. The record caught up with the thesis (verified July 15-16, 2026).** Two developments make a performance test more defensible than a features test:

- In the June 2026 summary-judgment order in the federal MDL, the court found Meta's own documents could support the theory that its time-restriction tools were a **"public relations stunt,"** deployed while the company knew more time on the platform correlated with worse outcomes for teens (per legal-press coverage of the order; the order itself is paywalled and should be cited directly before publication). A dead brake marketed as a working one is now in a trial record.
- On July 10, 2026, the European Commission preliminarily found the addictive design of Instagram and Facebook in breach of the DSA, saying time-management tools "can easily be ignored and do not meaningfully reduce usage," and identifying remedies including autoplay and infinite scroll off by default, effective screen-time breaks, and less engagement-driven recommenders. That is a regulator scoring brakes by performance, not presence.

The test should measure what courts and regulators are now measuring.

## 2. The current test, stated precisely (v1)

The scorecard page presents six dimensions: **Discoverable, Clear, Immediate, Persistent, Scoped, Non-circumventing.** The paper's section 3 actually lists seven criteria (it splits "promptly effective" and "materially effective," which the page merges into "Immediate"). That drift between the paper and the page is small, but it is exactly the kind of drift a versioned revision should fix: one list, stated once, rendered everywhere from the same source.

All six v1 dimensions are **user-runnable**: a person with a phone can score each one. That property is load-bearing (the movement's ask is "run the test in your own hand") and v2 must preserve it.

## 3. The proposed test (v2)

Eight dimensions. Zero through five refine v1; six and seven are new. Every dimension remains scoreable from a user's own device.

| # | Dimension | The question you score |
|---|-----------|------------------------|
| 00 | **An end exists** | Does the feed have any reachable stopping point at all? If a "caught up" marker exists, does the product stop there, or scroll past its own end into recommendations? |
| 01 | **Discoverable** | Can you find the control without external instructions? (Count the taps; report the number.) |
| 02 | **Clear** | Does it say what will change? "Show me less" is not "turn off personalized recommendations." |
| 03 | **Effective** | Does the feed visibly change, promptly, in a way you can perceive? (Merges v1 "Immediate" with the paper's "materially effective"; cosmetic compliance fails here.) |
| 04 | **Persistent** | Does the choice survive closing and reopening the app, another device, an app update, and time, until you deliberately change it? |
| 05 | **Scoped** | Does it cover the related surfaces (Reels, Shorts, Explore, notifications, suggested accounts, linked accounts), or one screen? |
| 06 | **Friction-symmetric** *(new)* | Is turning the brake on no harder than turning it off? Count taps in both directions. A control fails when activation is buried and reversal is one tap, or when the product repeatedly asks you to reconsider only the safer choice. |
| 07 | **Non-counter-steering** *(renames v1 "Non-circumventing," absorbs anti-substitution)* | After you brake, does the product stop fighting you? No nags, no silent resets, no substitute pressure through notifications, email, or another surface, no migration of engagement to a linked account. The platform does not have to overpower you; it has to stop counter-steering after you have chosen. |

**On the rename (07).** "Non-circumventing" describes the platform's move; "counter-steering" describes it better, because it names the direction: the machine pulling against the wheel after the driver has turned it. The paper's existing anti-circumvention language (section 3 and section 5, including "not compensated for by ramping up another surface") is the same idea; v2 gives it the sharper name and makes the anti-substitution test explicit in the user-facing dimension.

**On the brake receipt (deliberately NOT a dimension).** The external review proposed an "auditability" dimension: receipts, logs, version histories, independent testability. Most of that is not user-runnable; it belongs in the paper's section 5 (mandated internal evidence), where much of it already is. The one user-facing piece worth adopting is the **brake receipt**: when a user activates a significant control, the platform issues a plain-language confirmation of what changed, which surfaces and accounts are covered, when it took effect, how long it lasts, and what can reset it. Today every platform would score zero on a receipt dimension, which makes it noise as a test and a demand as a policy. Proposal: the receipt goes into the paper's section 3 as a required property of a compliant control, and into section 5 as its audit artifact, but not into the scorecard until at least one platform ships something scoreable.

**On the multiplicative heuristic.** Worth adopting as framing on the scorecard page: brake integrity is approximately the product of the dimensions, not the sum. A brake that is discoverable, clear, and persistent but fails scope (main feed calm, Reels untouched) is not "5 of 8"; it is a brake that does not brake. One sentence on the page conveys this without complicating scoring.

**What v2 deliberately rejects from the external review.** "Outcome integrity" as a separate dimension (its substance is split between 03 and 07; measuring "did platform-driven engagement actually decline" from outside is a research problem, not a phone test). "Knowledge symmetry" (a platform should not know a user well enough to monetize them while claiming not to know enough to protect them): a genuinely powerful idea, but it is a new policy claim about age assurance and inference, with its own legal exposure, and per the project's quarantine discipline it belongs in the experimental appendix as a research hypothesis, not in the scorecard.

## 4. What changes if adopted (impact inventory)

| Surface | Change |
|---|---|
| `content/proposal.md` section 3 | The Layer I criteria list becomes the v2 list (one canonical statement; fixes the existing seven-vs-six drift). Brake receipt added as a required property. Counter-steering vocabulary adopted. |
| `content/proposal.md` section 5 | Receipt as audit artifact; anti-substitution language folded into counter-steering. |
| `/scorecard` page | v2 dimensions with the multiplicative framing; a visible "test version: v2 (2026-07)" tag; a short v1-to-v2 mapping note so old reports stay interpretable. |
| `/report` form | Add the two new outcomes ("the end: reached it / no end exists"; "friction: taps on vs taps off"), keep the existing result options unchanged for comparability. |
| Homepage | The "six-part test" phrasing updates; the self-test copy gains the dimension-zero question ("can you even reach the end?"). |
| `/notes` | Knowledge symmetry added as a research hypothesis with its falsifiers. |
| `llms.txt` | Description of the scorecard updates. |

**Versioning rule:** the test is labeled v2 with a date; v1 reports remain valid under the mapping (every v1 dimension maps into exactly one v2 dimension). Nothing filed under v1 is invalidated; the two new dimensions simply have no v1 data.

## 5. The case against this revision (steelman)

1. **Churn cost.** The scorecard is a day old and public consistency is its entire value proposition. Revising immediately signals instability. Counter: revising immediately is the cheapest it will ever be; there are no accumulated reports to strand yet, and the trivial-pass loophole is a real defect, not a style choice.
2. **Eight dimensions is more than six.** Every added dimension costs adoption; the movement's test must stay runnable in two minutes. Counter: 00 and 06 are the two fastest tests on the list (scroll to the end; count taps both ways). But reviewers should weigh whether 00 belongs as a scored dimension or as a preamble question before the test proper.
3. **Dimension 00 changes the standard's legal posture.** "Controls that are offered must work" is the Lemmon lane (most defensible). "A feed must have an end" drifts toward a design mandate (tier 2 of the paper's exposure ranking). Counter, and this is the key move: as scored here, 00 does not mandate an end; it **measures and reports** whether one exists. The scorecard is a citizen measurement instrument, not a statute. The paper's Layer I can stay conditional while the scorecard makes the absence of any brake visible instead of silently passing it. But this distinction must be stated on the page, and reviewers should stress-test it.
4. **Friction symmetry may not survive the vagueness bar.** The AADC decision (paper, section 4) enjoined design provisions for vagueness. Counter: friction symmetry is unusually specifiable (compare tap counts and prompt counts in each direction), arguably the most measurable dimension on the list. But the paper's version of it must be written to that bar.

## 6. Questions for reviewers

1. **Dimension 00:** scored dimension, or preamble question? Does including it blur the standard's "regulate the offered control" legal positioning, even with the measure-not-mandate framing of section 5.3?
2. **Friction symmetry:** standalone dimension (as proposed) or sub-test of counter-steering? Is "count taps both directions" specific enough to survive the vagueness critique?
3. **The rename:** does "non-counter-steering" genuinely improve on "non-circumventing," or is it churn? (It reads better in prose; does it read better on a scorecard?)
4. **The receipt:** is keeping it out of the scorecard right, or is a universally-failed dimension useful precisely because it makes the demand visible?
5. **Eight vs fewer:** if you had to cut to six, which two go, and what is lost?
6. **Comparability:** is the v1-to-v2 mapping honest, or does merging "Immediate" and "materially effective" into 03 quietly change what old reports meant?
7. **The multiplicative framing:** helpful intuition or false precision?

Attack the weakest parts. Section 5 is where this proposal thinks it is weakest; prove it wrong or prove it right.

---

*Provenance and methodology: this proposal synthesizes three inputs: an internal review that found the trivial-pass loophole and the missing-end diagnosis; an external AI review (July 2026) that proposed the performance-test recasting, friction symmetry, the receipt, counter-steering, knowledge symmetry, and the stopping-distance framing; and a fact-verification pass (July 15-16, 2026) that confirmed the "public relations stunt" finding in the federal summary-judgment record and the European Commission's July 10 preliminary finding, both against primary or near-primary sources. AI-assisted throughout: the judgment calls (what to adopt, what to quarantine, what to reject) are stated with reasons above so reviewers can disagree with them specifically. The stopping-distance line ("a safety feature should be judged by its stopping distance, not by the presence of a button") originates with the external review and is used with that attribution.*

---

## Reviewer response (2026-07-16, agent review)

Reviewed against section 3 (the seven criteria this would amend), section 4 (the legal-exposure tiers), section 5 (auditability and anti-circumvention), the live scorecard as currently shipped, and the report form. This block answers the section 6 questions inline, as the proposal invites, and leads with two structural findings that reframe several of them. Agent-produced (de-amplify working session); the judgment calls are stated with reasons so they can be disagreed with specifically.

### Two structural findings first

**1. The v1 baseline is stale: the page now renders seven, not six.** Section 2 treats the page as six-dimensional and the paper-vs-page drift as an open defect. That drift was already closed in the interim reconciliation pass: the live scorecard renders seven (Discoverable, Clear, Immediate, Material, Persistent, Scoped, Non-circumventing), matching section 3. Three consequences:

- Input #2's "six-vs-seven drift" motivation is closed; one of the three motivating gaps is gone.
- "03 Effective" is a re-merge, not a merge from the paper. The doc frames it as merging "v1 Immediate with the paper's materially-effective," but materially-effective is now a live page dimension too (Material). So v2 would re-merge what was just deliberately split. Defensible (the split was flagged as interim precisely because v2 was coming), but the move is 7 into 8 with one merge (Immediate + Material into Effective), two adds (00, 06), and one rename (07), not "six into eight."
- The comparability story gets cleaner, not messier, once baselined against seven. Recommend re-baselining sections 2 and 4 against the live seven-dimension instrument.

**2. The central unresolved tension: dimension 00 versus the lockstep rule.** Section 0 states the coupling as a hard rule: changing the scorecard means changing the standard, in the paper and on the page in lockstep. Section 4 then makes the v2 list become "the Layer I criteria." But section 5.3's defense of 00 relies on the opposite: the paper's Layer I can stay conditional while the scorecard measures. Both cannot hold. If scorecard and standard move in lockstep and 00 is a scored dimension that enters Layer I, then Layer I now asserts "a feed must have an end," which is the tier-2 design mandate the proposal itself places outside the Lemmon lane. The measure-not-mandate framing survives only if 00 is decoupled from Layer I. Resolution (also the answer to question 1): make 00 a preamble measurement, reported but not a Layer I criterion and not one of the scored dimensions. That keeps Layer I in the Lemmon lane, keeps the missing-end visible instead of silently passing it, and honors the lockstep rule because 00 never enters section 3. As a scored, in-standard dimension, 00 is the single largest legal cost in the proposal, and it is avoidable.

### Answers to the section 6 questions

1. **Dimension 00, scored or preamble.** Preamble. As a scored Layer I dimension it moves the standard from tier 1 to tier 2; as a preamble it does not. See structural finding 2.
2. **Friction symmetry, standalone or sub-test.** Standalone, but clean the overlap with 07. The asymmetric-nagging behavior ("asks you to reconsider only the safer choice") currently appears in both 06 and 07. Put all nagging and asymmetry in 06 (the tap-count dimension is its natural home) and reserve 07 for post-choice fighting (resets, substitution, migration). And yes: "count taps and prompts in each direction" is the most vagueness-resistant dimension on the list; it survives the AADC bar better than anything else here.
3. **The rename.** The concept is a genuine prose upgrade for sections 3 and 5 (it names the direction: the machine pulling against the wheel after the driver has turned it). The label is churn: "Non-counter-steering" is a double negative that breaks the one-clean-word pattern of every other tile (Discoverable, Clear, Immediate). Decouple them: adopt "counter-steering" in the paper's prose; give the scorecard tile a short label (keep "Non-circumventing," or choose one word such as "Respected"). Do not rename the tile because the sentence reads better.
4. **The receipt.** Keep it out of the scorecard; a universally-failed dimension is noise as a test, and the reasoning is sound. But note what putting it into section 3 as "a required property of a compliant control" does: it adds a demand nothing currently satisfies, which makes the standard partly aspirational. Fine, but label it as forward-looking and let section 7's honest-limits flag it, rather than presenting it as measuring current compliance.
5. **Eight versus fewer.** If forced to six, demote 00 to preamble and keep Friction-symmetric. The strongest scored six: Discoverable, Clear, Effective, Persistent, Scoped, and Non-circumventing/Respected, with Friction as the highest-value add and 00 above the line as preamble. Friction is fast, measurable, and legally clean; cutting it loses more than demoting 00-as-scored.
6. **Comparability and the merge.** Mostly honest, with one caveat to state. "Every v1 dimension maps into exactly one v2 dimension" is true, but Immediate + Material into Effective is many-to-one and lossy: a report that passed Immediate but failed Material (cosmetic-but-instant) correctly becomes "failed Effective," yet the reason is lost. Moot in practice because there is no accumulated v1 corpus (section 5.1), but do not claim a clean bijection; call it a lossy merge acceptable only because no corpus exists yet.
7. **The multiplicative framing.** Good intuition, wrong word. The dimensions are pass/partial/fail, not 0-to-1 quantities, so "product of the dimensions" implies a computation the instrument never performs. The honest form is weakest-link, a logical AND: a brake fails if it fails any load-bearing dimension (scope at zero means the brake does not brake, whatever the other seven say). That is the real claim, and it does not dress a metaphor as arithmetic, which matters on a site whose credibility rests on not overclaiming.

### Smaller findings

- **Runnability is overstated.** Section 3 asserts every dimension is scoreable from a user's own device and section 5.2 leans on the two-minute promise, but Persistent explicitly requires "another device, an app update, and time," which no one can test in one sitting; 00 requires actually scrolling to an end. Distinguish same-session dimensions (Discoverable, Clear, Effective, Scoped, Friction, 00) from longitudinal ones (Persistent, parts of Counter-steering), and let the report form capture "tested over: one session / days / an update." This strengthens comparability rather than weakening it.
- **The report form is already partly instrumented for friction.** It has a "taps to find it (optional)" number field, so 06's "taps on versus taps off" extends an existing input rather than adding new machinery. Worth noting in section 4; it lowers the adoption cost of the newest dimension.
- **The "public relations stunt" hedge is now stale.** Section 1 and the provenance describe the phrase as legal-press coverage with the order "paywalled and [it] should be cited directly." The external-validation audit confirmed it verbatim in the order itself (Dkt 3214, page 23, via CourtListener/RECAP). Upgrade the citation to primary and drop the hedge; also reconcile the internal inconsistency where the provenance already claims "primary or near-primary" confirmation while section 1 still says paywalled.
- **Section 3's change-classification sentence is imprecise.** "Zero through five refine v1; six and seven are new" misclassifies: 07 is a rename-and-absorb of v1 non-circumventing (not new), and 00 (which is new) is omitted from the clause. A versioned document should get its own change classification exactly right: 00 new, 01 to 05 refine v1, 06 new, 07 rename.

### What is strong

The stopping-distance frame is the right north star and earns the revision. The trivial-pass loophole is a real defect, not a style itch, and the "You're All Caught Up into suggested posts" exhibit is exact. The legal-tiering awareness (mapping 00 to tier 2, friction to the vagueness bar) is more rigor than a scorecard revision usually carries. The quarantine instinct (knowledge-symmetry and outcome-integrity kept out, with reasons) is the same discipline that keeps the wedge out of the policy paper.

### Net

Adopt the direction, with revisions: demote 00 to preamble (this resolves the legal-posture tension by construction), reframe "multiplicative" as weakest-link, split the 06/07 nagging overlap, keep the counter-steering concept but not the tile label, re-baseline against the live seven, upgrade the "public relations stunt" citation to primary, and add the same-session/longitudinal distinction. None are fatal; each makes the proposal more defensible on its own terms.
