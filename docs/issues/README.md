# Issues

Open threads that **outlive the pass that found them** and **belong to no single proceeding**.

This is the fourth place this repository tracks unfinished business, and a fourth place is a real
risk: the project's most persistent failure is a fact living somewhere nobody re-reads. So the
boundary is narrow and it is the first thing to check before adding a file here.

## Where a thread belongs

| If the thread is about | It lives in | Why |
| --- | --- | --- |
| The evidentiary record of one proceeding | that ledger's **Tensions** section in `docs/distillations/` | **64 of them** across 11 ledgers today, read on every re-seed of that case, published with the ledger. `npm run check:issues` recomputes this number, because it was hand-written as 62 and was already wrong that day |
| Work being done now, with a shape and an order | a dated plan in `docs/plans/` | Plans close. Their follow-up lists are outcomes of an exercise, not a standing queue |
| A quoted span that cannot verify against its cache | `KNOWN_DEVIATIONS` in `scripts/check-quotes.mjs` | The checker prints it on every run |
| Anything else that is genuinely open | **here** | |

**The test is ownership, not importance.** "Is the trial bifurcated" is a big open question and it is
a Tension in the MDL ledger, because it is a question about that record. "Michigan's withdrawal is
sourced to one local station" is smaller and lives here, because no ledger claims it and the plan
that found it has closed.

**Before adding a file, read the relevant ledger's Tensions section.** If the thread is already
there, leave it there and do not create a second entry. This directory has no mechanical way to
detect that duplication and the checker says so on every run.

## Format

One file per issue, `YYYY-MM-DD-slug.md`, dated when the thread **opened**. Everything in this
repository is dated because staleness is the thing it guards against, and an issue's open date is
the first input to judging it.

```yaml
---
title: "One sentence, the thread itself, not a task"
status: open | blocked | parked | closed
opened: 2026-08-18
closes_when: "The condition that ends this. Not a wish. A state of the world."
trigger: "A command or check that answers whether the condition is met, or: none"
surface: "What changes on the site when this closes, or: none yet, plus why"
related: ["a ledger slug, a docs/ path, or another issue file"]
---
```

`closed:`, `resolution:` and `revisited:` are required when `status: closed`, and forbidden
otherwise. `revisited:` accounts for every path in `related:`:

```yaml
revisited:
  - "docs/research/single-source/README.md :: updated :: its retry procedure told the reader to run a command that cannot work"
  - "docs/plans/2026-07-25-ledger-candidates.md :: no-change-needed :: a dated record of what one broadcast asserted; editing it would misrepresent the source"
```

Dispositions are `updated` or `no-change-needed`, and the reason is the entire value of the entry.

### The four statuses

- **`open`** actionable now. Someone could pick it up today.
- **`blocked`** waiting on external state nobody here controls. A court, a regulator, a third-party service.
- **`parked`** established and true, waiting on somewhere to put it. See `surface`.
- **`closed`** done, with the date and what actually resolved it.

### Why three of the fields are mandatory

**`closes_when`** stops an issue being a mood. "Improve the coverage" is not a condition; "the
transcript appears in the free archive" is. An issue that cannot state its own closing condition is
usually a feeling about the project rather than a thread in it.

**`trigger`** is the lesson from this directory's first entry. The attorneys general press
conference sat as "retry sometime" through two attempts and read like dead research, when the actual
state was a one-command check away (`live_status: post_live` means the archive is still processing).
**A trigger beats a reminder**, and writing `none` is a real answer that tells the next reader not to
go looking for one.

**`revisited`** is the newest, added 2026-08-20 and earned the same way as the others. The
press-conference issue closed and **both** files it had declared in `related:` were left carrying
prose the closure had just falsified: a research README still gave a retry procedure whose key step
could not work, and a plan still called the item unobtained in three separate places. Every guard
was green throughout, because they all read machine-readable surfaces and this was prose.

**The tempting fix is a scan of `docs/research` and `docs/plans` for words like "still" or "not
obtained". That is the wrong instrument and this repository has already said so**: the posture
vocabulary in `check:surfaces` is scoped hard to share cards and structured data precisely because
prose is allowed to discuss pending things, and one comment becoming a standing multi-file gate is a
documented past injury here. A corpus of research notes is largely made of honest sentences about
open questions, and a scan would fire on all of them.

What is checkable is that somebody looked. Each issue already declares its dependents, so closing
one can be made to account for each of them. **Calibration, measured before the rule was written:**
of the nine related-file pairs across five closed issues, seven had in fact been handled correctly
and two needed a decision, one of which turned out to be a real gap (the MDL ledger cited the appeal
arising from the MDL and said nothing about the circuit's other Section 230 case, decided a week
apart before the same district judge; it is now claim 43). **A rule that fires on two of nine is
worth having. One that fired on all nine would have been noise.**

**`surface`** comes from the plan that produced most of these. Four facts were verified against
primary sources and then sat unused because no phase said where any of them goes; one turned out to
be the most valuable thing in the exercise. **Verified is not the same as publishable**, and the
difference is whether the site has somewhere for it to live. Answering that at open time is cheap.
Answering it later is how a project accumulates trivia with citations.

## The index

The table in `INDEX.md` lists every file, and `npm run check:issues` asserts the match in **both
directions**: an indexed file that does not exist fails, and a file missing from the index fails.
That is the same shape as the orphan declaration in `check:distillations`, and for the same reason.
An index that can quietly omit a row is not an index.

## What the checker proves, and what it does not

`npm run check:issues` proves the frontmatter is complete and coherent, that statuses and dates
agree with each other, that `related:` entries resolve to real files or real ledger slugs, and that
the index matches the directory.

**It cannot tell you whether a `revisited:` disposition is true.** It proves the account exists and
that every declared dependency has one, never that the file was really re-read or that it really
needed no change. Someone determined to close an issue without looking can write
`no-change-needed :: fine` and the check will pass. That is the same boundary `check:quotes` draws at
attribution and `check:guards` draws at description, and it is worth stating rather than implying:
**the value is that the question is asked at close time, in a place the answer is preserved.**

**It cannot tell you whether an issue duplicates a ledger Tension**, which is the failure mode this
directory most needs to avoid. That stays a human read, exactly like attribution in `check:quotes`.
The checker prints the reminder every run rather than letting a green result imply an answer it does
not have.
