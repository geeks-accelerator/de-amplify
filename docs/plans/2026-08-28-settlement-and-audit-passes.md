---
title: "Plan and record: the MDL 3047 settlement, three audit passes, and the Compliance Date flip ahead"
subtitle: "What the consent judgment of 2026-08-26 changed on the site, what three successive audits found wrong in the work that recorded it, and the surfaces that go stale on 2027-02-27."
status: "EXECUTED 2026-08-28 across five commits on branch settlement-2026-08-26-mdl-consent-judgment. Sections 1 to 3 are the record of completed work. Section 5 is the only forward-looking part and is a prepared checklist for the Compliance Date, in the manner of docs/plans/2026-08-02-mdl-trial-flip.md, which this file supersedes as the live flip plan."
date: 2026-08-28
site: "de-amplify.com"
document: "Operational record plus one prepared checklist. Every legal claim it touches lives in docs/distillations/mdl-3047.md or tennessee-v-meta.md; this file states where the strings are and what happened to them."
---

# The settlement pass, the audits, and the flip ahead

## 1. What happened, in one paragraph

On **2026-08-26**, four days into evidence, the states' trial against Meta ended when Chief Judge Gonzalez Rogers entered a consent judgment (AG-case Dkt 576) as a final judgment under Rules 54 and 58, both sides waiving appeal. The site was, at that moment, publishing "the states' trial against Meta is now under way" on its hub card. The pass that followed took the ledger to the docket first, cached ten new primaries, rewrote section (k) of the MDL ledger, and re-seeded every consumer. Three subsequent audit passes each found real defects in the pass before them, which is the part of this file worth reading.

## 2. What the settlement actually says, compressed

The detail is in the ledger, claims 44 to 63. Four things drove most of the site's rewriting:

- **The money divides.** Exhibit B's maximum is **$16,680,647,753.21** over ten installments, of which **$5,024,026,007.70 (30.1%) is contingent** on Snap, TikTok and YouTube accepting equivalent teen time-management obligations, and is otherwise "permanently forfeited by such Settling State and retained by Meta". Plus a $75M cost fund and a $459,293,017.80 Cambridge component paid to 48 of the 51 states.
- **The brake divides on the same condition.** Phase I is unconditional for five years (midnight-to-6am block, 2-hour daily default across Instagram and Facebook, parent-gated, with an anti-circumvention duty). Phase II, the wider 10pm-to-7am block, applies only on "Industry-Wide Adoption" by those same three competitors.
- **It reaches fifteen other courts.** The "Satellite AG Actions" list ends fifteen state-court AG cases by caption, including Tennessee's Nashville trial, then in its fifth week of evidence. That is a separate proceeding on this site with its own ledger and page, and the first pass missed it entirely.
- **It disclaims itself.** Nothing in it may "establish a standard of care for, or serve as precedent in any non-participating U.S. state or any international jurisdiction whatsoever."

## 3. What the audits found, and why the pattern matters more than the items

Three audit passes ran after the initial settlement work. Every defect they found came from the same root: **a conclusion drawn from a single probe, with no control run.**

| Pass | Found |
|---|---|
| Audit 1 | The settlement resolves **Tennessee's trial too**, missed entirely. Also: the sources README claimed two PDF copies were "byte-identical, checked" when hashing showed 46 differing bytes; "Meta's apps" was used where the agreement means Instagram and Facebook only; the deception-count remedy (a prospective injunction no single state can enforce, excluded from the audit) was unrecorded. |
| Audit 2 | Claim 60 said the settlement "resolves four Cambridge complaints"; the releasing-states list excludes California, D.C. and New Mexico, so **only Illinois's is released**. Also surfaced three stale `/for` decks still carrying a July world, including "the states demanded up to $1.4 trillion", an attribution error the ledger had corrected in July. |
| Audit 3 | The four "not worth doing" items were three-quarters wrong: **the August JPML report existed** (3,137 pending), **the X/Discord/Roblox status report existed** (ECF 3407), and **a satellite tracker was worth building** (Oklahoma's docket is one HTTP GET). |
| Audit 4 | The audit-3 explanation of the JPML trap was **itself wrong twice**, and the satellite access table **overstated its own probing**. |

### 3.1 The JPML user-agent trap, isolated properly

Worth its own subsection because the wrong version survived two passes. The chain:

1. `August-1-2026` guessed as a filename, 404, concluded "no August report exists". The file is dated **August 3**.
2. Re-probe returned 404 for **June and July as well**, the URLs the ledger cites as fetched. **The positive control failed and the absence was believed anyway.**
3. The correction blamed report rotation plus a required `Referer` header. Both wrong, both diagnosed from the same broken query.
4. Isolation matrix, three trials, one variable at a time: **the host returns HTTP 404 to a bare `Mozilla/5.0` User-Agent**, and 200 to a full browser string or to no User-Agent at all. The Referer had ridden along with the full UA.

**A 404 to a bot-scented user-agent is worse than a 403**, because a 403 says you were refused and a 404 says the thing is not there. Operational rule now in CLAUDE.md: send a full user-agent when probing court infrastructure, and read an index rather than guessing a filename.

### 3.2 Two guard bugs, both found by using the guards

- **`check:quotes`** stripped court-filing line numbers only within eight leading spaces. Orders on the N.D. Cal. template carry a rotated marginal caption that `pdftotext` lays out *ahead of* the line number, pushing it past column 30, so every multi-line sentence in Dkt 575 and 576 failed as if fabricated. Widened, self-test controls both directions, all 485 pre-existing spans re-verified unchanged.
- **`check:surfaces`** stripped thousands separators from the surface figure but not from the corpus, so `$16,680,647,753.21` could never match a corpus asserting exactly that. Latent because every figure it had ever checked was a short form (`$6M`, `$567M`). Both forms now tested; `$567M` still matches `$567,000,000.00`.

### 3.3 The scoping blind spot, third occurrence in one ledger

Widening `check:quotes` to section (h) revealed that **four MDL orders had been quoted since 2026-07-25 with none of them cached**: six unverifiable spans, and nothing red, because the section sat outside the `sections` scope. Caching them then found two real defects in those six: CMO 36's calendar caption is a **stacked block** the ledger had quoted as a slash-joined line (a reconstruction, which had propagated to two pages and this directory's own trial-flip plan), and a span had its source em-dashes silently swapped for a comma to fit house style **inside the quotation marks**.

CLAUDE.md now carries the habit rather than another restatement of the rule: **when you add a cache, grep the whole ledger for every section quoting that document, and scope to what you find, not to the section you had in mind.**

## 4. What is on the site now that was not before

- MDL ledger section (k): 24 claims (44 to 63), all quoted from cached primaries.
- Tennessee ledger section (g): 6 claims, including the reconciliation of the state's $751,922,691.13 to Exhibit B plus Exhibit E, to the cent.
- **The consent judgment run against the scorecard's seven criteria**, on the case page: five of seven addressed, two gaps (no immediacy term, unsupervised persistence unspecified), and the **Longform Content carve-out**, under which video of 22 minutes or more does not count against the two-hour limit.
- The satellite tracker: fifteen cases with numbers and a per-court access survey.
- `/scorecard` gains a precedent note; the homepage receipts row leads with the court-ordered 2h/day limit.

## 5. PREPARED: the Compliance Date flip, 2027-02-27

This is the only forward-looking section, written now because the trial-flip plan proved the method: enumerating date-bound strings before the date converts a scramble into a checklist.

**The dates**, all derived from the Effective Date of **2026-08-27** (the first business day after entry):

| Date | Event | Where the site asserts it |
|---|---|---|
| 2026-08-27 | Notice to all fifteen satellite courts requesting deadlines be vacated (24 hours from execution; Oklahoma performed it on 08-26) | ledger claims 61, 61b |
| 2026-09-10 (approx) | Joint motions for entry of consent judgments in the satellite actions (ten business days from that notice) | ledger claim 61, Tennessee Tension |
| 2026-10-27 | Independent Auditor's term begins | ledger claim 52 |
| 2026-12-27 | Non-Personalized Feed option must be offered | ledger claim 51, case page |
| **2027-02-27** | **Compliance Date: Phase I defaults live** | ledger claims 49 to 50, case page, hub, `/scorecard` note, homepage stat |
| 2028 (approx) | First public auditor executive summary | ledger claim 52, `docs/issues/2026-08-28-settlement-compliance-dates.md` |

**What becomes checkable on 2027-02-27, and this is the point.** Every claim on this site about the ordered brake is currently a claim about a *document*. On that date it becomes a claim about a *product*, and the two can diverge without anything on the site going red. The instruction is concrete: **run the seven scorecard criteria against the actual shipped teen experience on Instagram and Facebook, and record the result in the ledger next to the ordered terms.** If they diverge, the case page's scorecard table and the `/scorecard` precedent note are the surfaces that need the honest downgrade, and the divergence is itself the strongest evidence this project could obtain for its own argument.

**Strings that go stale that day if nobody looks**: the case page's "The order, run against this site's own test" table reads in the present tense about obligations that will by then either exist in the product or not; `/scorecard`'s note says the test "is no longer hypothetical"; and the homepage stat asserts a court-ordered 2h/day limit as a live fact.

## 6. Still open, with triggers

- **Davidson County consent-judgment entry** (~2026-09-10, ten business days after the 24-hour notice). Chancery register is free; documents are not. Tennessee ledger Tension.
- **Five satellite dockets never probed** (Iowa, Mississippi, Montana, New Hampshire, Puerto Rico), plus four reached only at a portal front door. MDL ledger claim 61a states which is which.
- **The compliance calendar**, `docs/issues/2026-08-28-settlement-compliance-dates.md`.
- **Whether the four withdrawn states' Exhibit B rows were negotiated or automatic.** MDL ledger Tension.
