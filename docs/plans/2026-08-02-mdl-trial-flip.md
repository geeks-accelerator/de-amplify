---
title: "Plan: the MDL 3047 trial tense flip (August 12 and August 18, 2026)"
subtitle: "Every string on the site that becomes false when the Oakland trial starts, located in advance, so the pass is mechanical rather than archaeological."
status: "Prepared 2026-08-02, before the event. NOT YET APPLIED. Two dated passes are described below; apply each on or after its date, and only after confirming the event actually happened."
date: 2026-08-02
site: "de-amplify.com"
document: "Operational checklist. Adds no legal claims; every string below already exists on the site and this file only says where it is and what it becomes."
---

# Plan: the MDL 3047 trial tense flip

## Why this file exists

The site currently describes the largest event in its subject area in the future tense, in five places across three pipelines, using dates that are 10 and 16 days out. When those dates pass, every one of them becomes false simultaneously. Writing the flip down now converts a scramble into a checklist, and, more importantly, means the flip can be done by someone who is not reconstructing from scratch which surfaces carry the claim.

This is the same discipline the Tennessee re-seed needed on 2026-08-02 and did not have: that page went eight days in the future tense about a trial that had already started, because nothing recorded which strings were date-bound.

## The two dates, and what is actually established about them

Both come from the court's own filings, not from coverage, and both were re-confirmed on 2026-08-02:

- **Tuesday, August 12, 2026: jury selection begins.** Captioned in a case-management order filed 2026-07-23 as "Bellwether Trials: August 12, 2026 / February 3, 2027."
- **Tuesday, August 18, 2026: openings and evidence.** Pretrial Order No. 3: "openings and evidence shall commence on Tuesday, August 18, 2026."
- Meta's request to stay the trial was **denied** in Pretrial Order No. 6, filed 2026-07-20: "Meta's request to stay the trial in this case is DENIED."
- Two interim dates precede them: **juror questionnaires expected complete August 4**, **hardship stipulations due August 9**. These are on the site (`content/lawsuits/mdl-3047.md`) and will quietly become past-tense trivia; they are not worth a pass of their own, but sweep them when doing pass 1.

**Before applying either pass, confirm the event happened.** A trial date is `scheduled` on this site's own labelling scheme precisely because it can move. A continuance, a stay granted on reconsideration, or a settlement would make the flip below actively wrong, and the flip is the kind of edit that reads as verified when it is not. Check the docket, not coverage.

## Pass 1: on or after August 12 (jury selection)

Low-volume. Only the two "scheduled" framings need attention, and only if selection actually began.

| File | What it says now | What it becomes |
|---|---|---|
| `content/lawsuits.md` (the "Meta trial: August 2026, Oakland" section) | "**Scheduled, and now confirmed on the docket rather than from coverage:** jury selection begins August 12, 2026, and opening statements are set for August 18" | jury selection began August 12; openings set for August 18. Keep the docket-sourcing note, it is the good part. |
| `content/lawsuits/mdl-3047.md` | "**Scheduled, and confirmed on the docket rather than from coverage:** jury selection begins **August 12, 2026**; opening statements **August 18**" | same flip; also drop or past-tense the August 4 questionnaire and August 9 hardship-stipulation sentences |

Leave the ledger's TLDR variants alone at this pass. "Headed to an August 2026 trial" is still true during jury selection, and re-seeding a TLDR is a bigger operation than this event justifies.

## Pass 2: on or after August 18 (openings and evidence)

This is the real one. It touches all three content pipelines plus the hand-built homepage.

### Ledger first (`docs/distillations/mdl-3047.md`)

Corrections land here before any page. The TLDR block has **seven** budgeted variants and at least three of them assert a future trial:

- **One line (label)**, currently ends "headed to a trial in August 2026". Consumer: the hub card in `content/lawsuits.md`. Must be updated in the ledger and then copied verbatim to the hub, not edited on the hub.
- **Search snippet**, currently "the states' claims head to an August 2026 trial against Meta". Consumer: the meta description on `/lawsuits/mdl-3047`, which is **hardcoded** in `src/app/lawsuits/mdl-3047/page.tsx` as `DESCRIPTION`. That hardcoded copy must be updated in the same commit or the page and the ledger diverge silently.
- **One sentence (card)**, currently "let the state attorneys general's claims survive to an August trial against Meta". Consumer: the JSON-LD `description` in the same route file, also hardcoded.
- **One paragraph**, currently "are headed to an August 2026 trial against Meta alone". Consumer: the opener of `content/lawsuits/mdl-3047.md`, copied verbatim.
- Also bump `as_of:` in the frontmatter, and add the trial's start to the claims, tiered. **Note the tiering trap:** the fact that a trial began is establishable from the docket. What is said at it is not, unless a transcript is retrievable. See the Tennessee ledger's section (d.1) for the pattern, and expect the same problem here, because trial coverage is abundant and trial records are not.

### Then the curated pages

| File | Note |
|---|---|
| `content/lawsuits/mdl-3047.md` | opener re-seeded verbatim from the ledger's One paragraph; the "Scheduled" block becomes past tense; bump the as-of line and the provenance line's re-seed date |
| `content/lawsuits.md` | hub card label re-seeded verbatim from the ledger's One line; the "August 2026, Oakland" section heading and body; the as-of line at the top |
| `content/proposal.md` **via** `docs/proposals/2026-07-15-brake-integrity-standard.md` | "The **August trial in Oakland** ... jury selection begins **August 12, 2026**, opening statements August 18". **Edit the review copy, then regenerate the body.** The two are byte-identical as of 2026-08-02 and a direct edit to `content/proposal.md` breaks that; it was almost broken this way during the Tennessee pass. |

### Then the hand-built and generated surfaces

| File | What changes |
|---|---|
| `src/app/page.tsx` | the `Stat` labelled "states' consolidated case at trial in August" becomes "at trial" or "on trial now"; check the `Eyebrow` month is current (it was moved july -> august on 2026-08-02 and will need moving again in September) |
| `src/app/lawsuits/mdl-3047/page.tsx` | `DESCRIPTION` and the JSON-LD `description`, both hardcoded verbatim copies of ledger variants (see above) |
| `src/app/llms.txt/route.ts` | the MDL line, if it carries a trial status. The Tennessee line does and was updated 2026-08-02; check whether the MDL line has acquired one |

### Verify before opening the PR

```bash
npm run lint && npm run build
```

Plus the two drift checks that caught the K.G.M. and hardcoded-string classes:

- every ledger `One paragraph` is a verbatim substring of its curated page, and every `One line (label)` a verbatim substring of `content/lawsuits.md`
- every hardcoded `DESCRIPTION` / JSON-LD `description` in `src/app/lawsuits/*/page.tsx` matches its ledger's Search snippet / One sentence

and the house-style sweep from `CLAUDE.md`.

## What this plan deliberately does not do

It does not pre-write the copy. Writing "the trial began August 18" into the repo today, behind a flag or in a comment, would put an unverified assertion about the future into a repository whose entire discipline is that claims trace to a primary source. The flip is cheap once the event is confirmed; the confirmation is the work, and it cannot be done in advance.

It also does not cover what happens **at** the trial. That is a re-seed, not a flip, and it will run into the Tennessee problem: federal court transcripts are purchasable through PACER rather than free, so a verified quote-bank of trial testimony may not be attainable at this project's standard. Decide that when there is testimony to decide about.

---

*Provenance: written 2026-08-02 during a full-repo audit, from the strings actually present in the working tree on that date, and from the docket facts already recorded in `docs/distillations/mdl-3047.md`. The two trial dates were re-confirmed against reporting on 2026-08-02 and remain as the court set them. No claim on the site changes on the basis of this file.*
