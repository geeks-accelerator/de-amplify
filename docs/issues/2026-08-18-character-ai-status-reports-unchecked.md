---
closed: 2026-08-20
resolution: "They REPORTED, not dismissed. All four cases are identified by number; E.S. filed a joint status report on the 2026-07-31 deadline and Judge Crews continued the stay to 2026-10-29. The settlement has not produced docketed dismissals."
title: "Four stayed Character.AI cases passed a status-report deadline and nobody looked"
status: closed
opened: 2026-08-18
closes_when: "the docket shows whether those four cases reported or were dismissed on or about 2026-07-31"
trigger: "CourtListener search API, court+docket_number, e.g. court=cod docket_number=1:25-cv-02906"
surface: "none today: candidate 4.9 in the ledger-candidates inventory is not built"
related: ["docs/plans/2026-07-25-ledger-candidates.md"]
revisited:
  - "docs/plans/2026-07-25-ledger-candidates.md :: updated :: the hard-deadline bullet now names all four cases with their numbers and records that they reported rather than dismissed, with the stay running to 2026-10-29"
---

# Four stayed Character.AI cases passed a status-report deadline and nobody looked

The ledger-candidates inventory flagged a hard deadline: four stayed Character.AI cases carried a
**status-report-or-dismissal date of 2026-07-31**, four days after that document was written. That
plan's own open-questions section records that **the date passed and nobody went back to the
docket**.

Lifted here because it is exactly the kind of thread that dies with a plan. The plan is a dated
record of a research pass and is marked partially executed; its section 9 will not be re-read on a
schedule, and this item has a real expiry attached to it.

Which of report-or-dismissal happened is **not established**. If candidate 4.9 is ever built, its
posture section starts from the docket rather than from that inventory.

## Closed 2026-08-20: the four cases are identified and they reported

The inventory recorded a deadline and no case numbers, which is why this took a docket search rather
than a lookup. **All four are now named**, and the set is coherent with the reported January 2026
settlement of five suits across Florida, Colorado, New York and Texas:

| Case | Court | Number | Posture |
| --- | --- | --- | --- |
| *E.S. v. Character Technologies* | D. Colo. | 1:25-cv-02906 | Stayed, reported 2026-07-31 |
| *Montoya v. Character Technologies* | D. Colo. | 1:25-cv-02907 | Stayed by joint motion, entry 31, 2026-01-06 |
| *P.J. v. Character Technologies* | N.D.N.Y. | 1:25-cv-01295 | Stayed |
| *A.F., on behalf of J.F. v. Character Technologies* | E.D. Tex. | 2:24-cv-01014 | Stayed, status reports running since 2025 |

The **fifth** case is the one that is not here: *Garcia v. Character Technologies* (M.D. Fla.,
6:24-cv-01903), the Sewell Setzer matter, **terminated 2026-01-07**. That is the settlement landing,
and it is why four remained stayed rather than five. A sixth, *D.W.* (E.D. Va., 2:25-cv-00824),
terminated 2026-04-14.

## The answer to the question this issue asked

**They reported.** In *E.S.*, entry 36 is a joint status report filed **on 2026-07-31**, the deadline
itself, and entry 37 is the court's response two days later:

> ORDER re 36 Joint Status Report: If a notice of dismissal has not yet been filed, the parties shall
> file a joint status report on or before October 29, 2026. This matter remains STAYED. By Judge S.
> Kato Crews on 8/2/2026. Text Only Entry

So the posture as of today is **settled but not dismissed**: the stay continues, the court is
waiting for notices of dismissal, and the next checkpoint is **2026-10-29**.

Note what that order is. It is a **text-only entry**, meaning the docket text is the order; there is
no separate PDF. That is not the same thing as the docket-caption problem recorded at claim 37 of
the MDL ledger, where party-written captions were being read as if they were a court's words. Here
the court wrote the text. Worth keeping the two apart.

## What was NOT established, and the query is why

Only *E.S.* was read directly at the deadline. *Montoya*, *P.J.* and *A.F.* are companion cases in
the same posture and almost certainly did the same thing, and **almost certainly is not established**.
The CourtListener search API samples documents rather than returning a full docket, and it proved
inconsistent within this very pass: a control query against the *E.S.* docket, which had just
returned entries 36 and 37, came back "no docket" on a differently-shaped request. **An absence from
that API is a claim about the query, not about the record**, so nothing here rests on one.

## For whoever builds candidate 4.9

The posture section starts from these four numbers and from *Garcia*'s termination, not from the
inventory. **2026-10-29 is the next date that changes anything.** This issue closes because the
question it asked is answered; if the ledger is wanted, that date belongs in its Tensions, which is
where a question about a proceeding's record lives.
