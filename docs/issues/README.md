# Issues

Open threads that **outlive the pass that found them** and **belong to no single proceeding**.

This is the fourth place this repository tracks unfinished business, and a fourth place is a real
risk: the project's most persistent failure is a fact living somewhere nobody re-reads. So the
boundary is narrow and it is the first thing to check before adding a file here.

## Where a thread belongs

| If the thread is about | It lives in | Why |
| --- | --- | --- |
| The evidentiary record of one proceeding | that ledger's **Tensions** section in `docs/distillations/` | 62 of them today, read on every re-seed of that case, published with the ledger |
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

`closed:` and `resolution:` are required when `status: closed`, and forbidden otherwise.

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

**It cannot tell you whether an issue duplicates a ledger Tension**, which is the failure mode this
directory most needs to avoid. That stays a human read, exactly like attribution in `check:quotes`.
The checker prints the reminder every run rather than letting a green result imply an answer it does
not have.
