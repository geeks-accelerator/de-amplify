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
