---
title: "Nothing checks the prose on /lawsuits, which is the page most likely to go stale"
status: open
opened: 2026-08-18
closes_when: "either a guard exists that catches a stale posture claim in hub prose without gating ordinary writing, or this is deliberately closed as not worth the false positives"
trigger: "none"
surface: "/lawsuits, the site's highest-traffic explanatory page; and, since 2026-08-28, hand-built React page bodies, which are the same blind spot in a different file type"
related: ["docs/plans/2026-08-18-single-source-to-primary.md", "docs/plans/2026-08-14-external-review-remediation.md"]
---

# Nothing checks the prose on /lawsuits, which is the page most likely to go stale

`content/lawsuits.md` carried a **Scheduled:** label on an event that had already happened, in the
same sentence that said the proceeding had opened, and it carried it for as long as it did because
**nothing reads that file**:

- `check:surfaces` is scoped hard to share cards and structured data, deliberately, and its posture vocabulary does not include "scheduled".
- `check:ledgers` checks four hand-copied TLDR variants and nothing else on the page.
- Prose is *allowed* to discuss scheduled things, which is why the obvious gate would be wrong.

## Why this is an open question and not a task

A blunt vocabulary gate over prose is a known bad answer in this repository. The `check:surfaces`
scoping exists precisely because one comment becoming a standing multi-file gate is a documented
failure here. Any candidate has to catch the real defect (a status word contradicting a status word
in the same paragraph) without firing on the many legitimate sentences that discuss pending
proceedings.

One idea worth testing before committing to it: rather than a vocabulary list, check for **internal
contradiction**, a page asserting both that something opened on a date and that it is scheduled for
that date. That is narrow, mechanical, and matches the actual defect. It is also fiddly, and it may
be that the honest answer is that hub prose is checked by a dated human pass and nothing else.

## 2026-08-28: a second instance, in a different file type, and one datapoint against the leading idea

The settlement pass gave this thread a fresh example and it is **not** on `/lawsuits`. The homepage
carried `<Stat value="29" label="states' consolidated case, now on trial" />` for two days after the
trial ended in a consent judgment. Same blind spot, different surface: `check:surfaces` reads OG
cards and JSON-LD, and a plain JSX label in a page body is one file to the left of its list. "Now on
trial" carries no dollar figure and none of the posture words, so even widening the guard's file list
would not have caught it without also widening the vocabulary.

**This matters for the internal-contradiction idea sketched above, and mostly as evidence against
it.** That idea assumes the stale claim sits in a paragraph beside a claim that contradicts it. Here
the stale string was a five-word label in a five-cell grid with no surrounding prose at all, and
nothing on the homepage contradicted it, because the homepage said nothing else about the trial.
A contradiction detector would have been silent.

What the two instances share is not a linguistic shape but a **provenance** one: both strings were
hand-authored assertions about litigation status that no ledger owns. That points at a different
candidate, and one this repo can already partly express: **a machine-readable inventory of
litigation-status claims and their file locations**, so a case-status change has a list to walk,
in the way `docs/plans/2026-08-02-mdl-trial-flip.md` enumerated surfaces by hand before the trial
opened. That plan worked, and it worked because a human wrote the list. The open question is whether
the list can be generated rather than remembered.

**Still open, and deliberately not converted into a task.** Three instances now (the `Scheduled:`
label, the homepage stat, and the three `/for` decks found carrying a July world on 2026-08-28) is
enough to say the gap is real and recurring; it is not yet enough to say which mechanism closes it
without gating ordinary writing.
