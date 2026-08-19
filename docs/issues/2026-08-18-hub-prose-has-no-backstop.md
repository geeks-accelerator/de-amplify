---
title: "Nothing checks the prose on /lawsuits, which is the page most likely to go stale"
status: open
opened: 2026-08-18
closes_when: "either a guard exists that catches a stale posture claim in hub prose without gating ordinary writing, or this is deliberately closed as not worth the false positives"
trigger: "none"
surface: "/lawsuits, the site's highest-traffic explanatory page"
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
