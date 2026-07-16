---
title: "Plan: the /lawsuits page"
subtitle: "A dedicated, search-facing explainer of the litigation record, published before the August trial spike."
status: "IMPLEMENTED 2026-07-16. The /lawsuits page is built and wired; the section 10.1 corrections landed in the paper and on the homepage first, per the pipeline. The copy went through an external review round (ChatGPT Pro) whose factual claims were independently re-verified before adoption; see section 11. Remaining: the staleness protocol (section 6) is now a standing maintenance duty, and the scorecard-v2 proposal (Lane C, separate document) is out for review."
date: 2026-07-15
site: "de-amplify.com"
document: "Implementation plan. The facts it publishes come from the Brake Integrity Standard, section 1 and the sources list; this plan adds no new legal claims beyond the verified corrections in section 10."
---

# Plan: the /lawsuits page

> **The one-line case.** The site's most searched material (the Meta litigation record) is buried in section 1 of a policy paper whose title nobody queries. The four-state advisory-jury trial begins **August 12, 2026 in Oakland**, and search interest will spike around it. A dedicated page published now has roughly four weeks of indexing runway to catch that wave; published in mid-August, it misses it.

## 1. Why this page exists

1. **Search intent we currently waste.** People will search "Meta lawsuit kids," "social media addiction trial," "MDL 3047," "Meta 1.4 trillion," "New Mexico Meta verdict." Nothing on the site targets those queries; the material that answers them sits inside `/proposal` under a title with zero query volume.
2. **The entry funnel.** Someone arrives for lawsuit news, gets a cleaner three-track explainer than most coverage (the paper already keeps the tracks apart, which reporters blur), and reaches the pivot the whole site is built on: money is moving, no design standard is resulting, and the remedy nobody names is a brake that works.
3. **The homepage stats need a home.** The five stat tiles on the homepage ("34", "~3,000", "$1.4T", "$375M", "$6M") currently link nowhere. This page becomes their source surface.

## 2. Hard constraint: the calendar

- Trial start: **August 12, 2026** (four-state advisory-jury trial, MDL 3047, Oakland).
- Indexing takes days to weeks; rich-result eligibility longer. Target ship: **within days, not weeks**.
- After the trial produces news, the page must be updated or visibly dated (see section 6). The plan treats that as an accepted maintenance cost, stated here so it is a decision and not a surprise.

## 3. Page spec

- **URL:** `/lawsuits`. Decided by keyword research (section 10.2): every converging query uses "lawsuit(s)", nobody searches "cases", and the one-word slug matches the site's short-lowercase nav voice. `/meta-lawsuits` rejected as too narrow (the page covers all four defendants); `/social-media-lawsuits` rejected as a three-word nav label that breaks brand voice for marginal slug weight.
- **Title (under 60 chars, leads with the head term):** "Social Media Addiction Lawsuits, Explained (2026)". "Explained" honestly signals non-law-firm intent, which is a CTR advantage with informational searchers. Trial-hook titles ("Meta Trial 2026: ...") decay after the verdict; the hooks live in H2s instead.
- **Meta description (150 to 160 chars):** "Inside MDL 3047 and the state lawsuits against Meta, TikTok, YouTube, and Snap: the $6M and $375M verdicts, the August 2026 trial, and what should change."
- **H1:** "the social media addiction lawsuits" (the head term, near-verbatim, lowercase per brand voice).
- **H2 keyword map** (each heading captures a distinct query cluster): "the Meta trial (August 2026)"; "MDL 3047"; "the verdicts so far: $6M and $375M" (captures "K.G.M. v. Meta", which now has its own Wikipedia article and thin competition); "the $1.4 trillion demand"; a per-platform or four-defendant heading (captures "instagram addiction lawsuit" etc.); "so is it actually addiction?" (informational FAQ, featured-snippet candidate); and the pivot heading phrased to keep a query fragment, e.g. "what the lawsuits can't fix".
- **Body-copy phrases to include verbatim** (searchers are being trained on them by syndicated coverage): "youth safety trial" (the Reuters wire phrase), "social media harm lawsuit" and "social media mental health lawsuit" (near-synonym clusters; body copy only, no dedicated H2, to avoid cannibalizing the head term).
- **Deliberate non-targets:** "how to join social media lawsuit", "payout/settlement amounts", "social media addiction lawyer". Transactional legal-services intent this page cannot serve. One honest line ("this is not a law firm; if you are looking to file a claim, that is not this page") disambiguates for both readers and the crawler.
- **Tone:** advocacy with receipts, not neutral reporting. The page says plainly what it is: context from a proposal site, author not a lawyer, characterizations directional, primary sources linked.

### Content outline

1. **As-of banner.** "Where the record stood as of July 15, 2026" plus a visible last-updated line. Not a live news page and does not pretend to be.
2. **The three tracks, kept apart** (the page's core value; restated from proposal section 1, no new facts):
   - **Track 1, MDL 3047:** the four defendants, 2,893 pending actions (JPML, July 1, 2026), the June 30 summary-judgment ruling (deception and COPPA claims survive; partial win for the states on COPPA), the four-state trial (jury selection August 12, opening statements August 18; expected advisory jury, hedged as such), the ~$1.4T penalty demand disclosed in Meta's own July filing, with Meta's "extraordinary and unjustified" characterization noted.
   - **Track 2, K.G.M. v. Meta and Google:** $6M state-court verdict, March 25, 2026 ($3M compensatory + $3M punitive; split 70/30, Meta $4.2M / Google $1.8M, since some outlets report only Meta's share); new-trial and JNOV motions denied June 10; Meta filed its appeal in early July, Google has said it will; no appellate court has reviewed the verdict.
   - **Track 3, State of New Mexico v. Meta:** $375M, March 24, 2026, Unfair Practices Act; consumer-protection and child-safety (deceptive safety claims and child exploitation), not addiction; Meta appealing; a separate injunctive phase seeking platform changes remains live.
3. **The settlements pattern.** Snap and TikTok settled the first California bellwether around the turn of 2026; the first federal bellwether settled for a reported ~$27M combined (the total is better corroborated than the per-defendant split); YouTube then TikTok settled the second California bellwether (R.K.C.) in late June and early July, leaving **Meta and Snap facing trial on July 27, 2026**. "Paying and continuing is, so far, the equilibrium."
4. **The tell.** Deception and consent claims travel; the bare "is it addictive" claim is where cases stall. This is the bridge sentence to the proposal.
5. **What none of it produces.** No disclosed, enforceable, sector-wide design standard. The demand: a brake that works. CTAs to `/proposal` (the standard), `/report` (file one), `/scorecard` (the test).

### Source discipline (non-negotiable)

- **Zero new legal facts.** Every figure, date, and disposition on the page is a restatement of proposal section 1 and its sources list, which were checked against primary dispositions. If a fact is not already in the paper, it does not go on this page; updating the paper first is the pipeline for new facts.
- Every load-bearing figure carries its as-of date inline, matching the paper's practice.
- The page links each track to the same primary sources the paper cites.

## 4. SEO and agent wiring (matches the existing layer)

- Unique `metadata` export: title, description, `alternates.canonical: "/lawsuits"`.
- **JSON-LD: `Article` plus `BreadcrumbList`.** Explicitly not `NewsArticle`: the page is an explainer with a thesis, and claiming news-ness invites freshness expectations the site does not maintain. `dateModified` wired to the source file's mtime, same as `/proposal`.
- Add to `src/app/sitemap.ts` (changeFrequency: weekly through the trial window).
- Add to `/llms.txt` under Pages, one line stating it is a dated explainer of the litigation record.
- Nav: add to Header ("the cases", visible on all breakpoints or sm+ to match "the paper") and Footer.
- Homepage: link the five stat tiles (or the "receipts" section heading) to `/lawsuits`.
- OG image: inherit the root card initially. A page-specific card ("the receipts" framing) is a fast follow, not a blocker.

## 5. Content production

- Draft as a review copy in `docs/proposals/` (or alongside this plan) following the three-document convention: frontmatter, provenance note, AI-assisted flag, author "Lee Brown".
- Rendered either as hand-built React (like the homepage) or as markdown in `content/lawsuits.md` via `ProposalContent` (like the papers). **Recommendation: markdown in `content/`**, because this page will be edited on every litigation development and the markdown pipeline makes that a one-file edit. Add `/lawsuits.md` raw route for agents, matching `/proposal.md`.
- House style: no em-dashes anywhere public-facing; varied sentence rhythm; no mic-drop one-liners at section ends.

## 6. Staleness protocol (the page's main risk)

- Visible "as of" date at the top; JSON-LD `dateModified` from file mtime; sitemap lastmod follows automatically.
- **Update triggers, in priority order:** the R.K.C. bellwether trial (Meta and Snap, July 27: settlement, verdict, or continuance), jury selection and openings in the four-state trial (Aug 12 / Aug 18), any verdict or settlement in either trial, appellate rulings in K.G.M. or New Mexico, any new MDL summary-judgment or Daubert ruling that changes section 1 of the paper. Post-verdict, have an H2 skeleton ready for "social media addiction trial verdict" queries (the next spike).
- **Pipeline:** update proposal section 1 first (with primary-source check), then restate on `/lawsuits`. The page never runs ahead of the paper.
- If the page cannot be updated within a few days of a major development, the as-of banner is the honesty backstop: it must always be accurate, even when the content is behind.

## 7. What this page will not do

- No `NewsArticle` schema, no live feeds, no auto-pulled headlines.
- No figures beyond what the paper already states and sources.
- No verdict predictions, no commentary on trial strategy, no naming of individual plaintiffs.
- No claim of legal authority: the not-a-lawyer flag from the paper appears here too.

## 8. Decisions (resolved by research, 2026-07-15)

1. **URL: `/lawsuits`.** "Cases" matches no real query language; every converging search term uses "lawsuit(s)" (section 10.2).
2. **Nav label: "the lawsuits".** Legible to a searcher scanning the nav, consistent with "the paper".
3. **Homepage stat tiles:** single "the full record" link under the grid; keeps the tiles calm. And the tiles themselves need a correction first (section 10.1, item 1).

## 9. Acceptance checklist

- [x] Section 10.1 corrections applied to proposal section 1 and the homepage FIRST (the page never runs ahead of the paper).
- [x] Review copy drafted in `docs/`, facts diffed line-by-line against the corrected proposal section 1.
- [x] `content/lawsuits.md` generated from the review copy (frontmatter stripped), rendered at `/lawsuits`.
- [x] `/lawsuits.md` raw route serving with canonical Link header.
- [x] Metadata: unique title and description, canonical.
- [x] JSON-LD: `Article` (with dateModified from mtime) plus `BreadcrumbList`.
- [x] Sitemap entry, llms.txt entry, Header and Footer links, homepage link from the receipts section.
- [x] As-of banner visible at the top of the rendered page.
- [x] `npm run build` and lint clean; page prerenders static.
- [x] Em-dash scan on all new public-facing text returns zero.

## 10. Research findings (2026-07-15)

Two research passes were run on 2026-07-15: a litigation fact-check of proposal section 1 against primary sources, and empirical keyword research (news-headline convergence plus mass-tort law-firm title tags and slugs as volume proxies). Full sourcing lives in the research notes; the load-bearing results are recorded here.

### 10.1 Corrections required BEFORE the page ships (paper and homepage first)

The fact-check verified most of section 1 but found four items that must be corrected in the existing site before the lawsuits page restates them:

1. **The homepage "34 state attorneys general" stat tile is unsafe.** July 2026 sources genuinely conflict: 29 states' consolidated federal case heads to trial (Law.com, Reuters), 34 (Social Media Victims Law Center), 40+ AGs across all venues (JURIST, trackers). No primary docket count found. Replace with an attributable formulation, e.g. "29 states' federal case heads to trial in August" or "40+ state AGs have sued", with the source pinned.
2. **The K.G.M. appeal is overstated in the paper.** "Both defendants have appealed" is half-confirmed: Meta filed its notice of appeal in early July (AP, 2026-07-10); Google has said it will appeal but no filed notice was found as of 2026-07-15. Correct to "Meta has appealed; Google has said it will." Also note the 70/30 split (Meta $4.2M / Google $1.8M) since some outlets report only Meta's share.
3. **"Trial beginning August 12" needs the jury-selection caveat.** Jury selection begins August 12; opening statements August 18, and most outlets call August 18 the trial start. Say both. Hedge the advisory jury as "expected" (the judge's signaled intent; trial structure could shift).
4. **The paper is missing the nearest trial date entirely: the second California bellwether (R.K.C.).** YouTube settled it confidentially June 24; TikTok settled ~July 1; **Meta and Snap face trial July 27, 2026**. This lands before the AG trial and belongs in the paper's settlements paragraph and on this page.

Verified as stated (no change needed): the June 30 summary-judgment ruling (denial for Meta plus partial COPPA win for the states), the $375M New Mexico verdict and its consumer-protection framing (with the addition that an injunctive phase remains live), the ~$27M federal bellwether settlement (total better corroborated than the per-defendant split), the $1.4T figure (from Meta's own filing, which called it "extraordinary and unjustified"), the EU DSA preliminary findings dates (TikTok 2026-02-06, Meta 2026-07-10; keep the word "preliminarily"), and NetChoice v. Bonta. Case counts: use "2,893 pending actions (JPML, July 1, 2026)", not "mid-July".

### 10.2 Keyword evidence (the basis for sections 3 and 8)

- **Head term: "social media addiction lawsuit".** Five-plus mass-tort firms bidding real money on this SEO converge on the exact phrase in their title tags (Social Media Victims Law Center, Sokolove, Lanier, King, Lawsuit Information Center). Firms use the shorter "social media lawsuits" in slugs; both get typed.
- **Trending now, spiky:** "meta trial 2026", "meta $1.4 trillion", and the Reuters wire phrase "youth safety trial" (syndicated verbatim across Insurance Journal, Claims Journal, Yahoo). These belong in H2s and body copy, not the title.
- **Platform-specific cluster:** "instagram addiction lawsuit" has dedicated law-firm landing pages; cover the four defendants by name.
- **Low-competition wins:** "K.G.M. v. Meta" (new Wikipedia article, thin competition, journalist audience) and "MDL 3047" (policy and press audience). H2/body level.
- **Post-verdict pre-positioning:** "social media addiction trial verdict" will spike in September or October; keep an H2 skeleton ready.
- **Intent boundary:** transactional queries ("how to join", "payouts", "lawyer") are deliberately not targeted; Google's intent matching would bury an advocacy page for them anyway, and the bounces would hurt the page's signals.

## 11. Implementation record (2026-07-16)

- **Shipped:** `/lawsuits` (rendered via the markdown pipeline from `content/lawsuits.md`), `/lawsuits.md` raw route, sitemap and llms.txt entries, Header and Footer links, homepage "the full record" link under the receipts section. Build prerenders 17/17 static; lint clean; em-dash scan zero.
- **External review round:** the draft went through a ChatGPT Pro review (2026-07-16). Its factual claims were independently re-verified against primary and near-primary sources before adoption; seven of eight verified, one term corrected (the order coverage says "public relations stunt", not "proof points"). Adopted: the tension-first lede, the four-proceedings map (fixing a real MDL/JCCP conflation in the first draft), the narrowed COPPA phrasing, the 29-state-plus-four trial structure with the February 2027 follow-on, the unit-of-violation section, the four-numbers box, evidence-status labels, the Brussels section, and the stopping-distance line. Rejected or rerouted: the title change (contradicted the keyword evidence), and the new standard concepts (friction symmetry, brake receipt, counter-steering, knowledge symmetry), which went into the separate scorecard-v2 proposal for review rather than into the shipped standard.
- **Corrections that landed upstream first:** proposal section 1 (COPPA scope, case counts, trial structure and dates, K.G.M. split and both appeals, the July 27 second bellwether, the New Mexico remedial phase and $953M request, the "public relations stunt" evidence) and the homepage stat tiles ("34" replaced with the attributable "29 states' consolidated case at trial in August"; "~3,000" tightened to "~2,900"; the $1.4T tile re-labeled "penalty exposure, per Meta's own filing").
- **Nav judgment call:** "the lawsuits" took the header slot previously held by "the fix" (an on-page anchor still reachable through the homepage flow). Reversible if it proves wrong.
- **Standing duties:** the section 6 staleness protocol is now live, with the July 27 trial as the nearest update trigger; the post-verdict H2 skeleton should be ready before September.
- **Companion source (2026-07-16):** three per-lawsuit distillations now live at `docs/distillations/` (`mdl-3047`, `california-state-bellwethers`, `new-mexico-v-meta`): granular, evidence-tiered, source-traced claim ledgers plus `tldr` summary surfaces, produced under the internal plan `2026-07-16-lawsuit-distillations-for-de-amplify.md`. Open coordination: decide whether this page should render or summarize *from* those distillations (single source of truth) or stay a separate write-up. Today the page draws from the Brake Integrity Standard section 1; the distillations are a parallel, deeper record, so keeping the two in sync is a standing risk until one feeds the other.
- **Post-launch correction (2026-07-16):** a page-vs-distillation reconciliation caught and fixed two factual issues in the shipped page (commit `46a76b3`). (1) The New Mexico second-phase testimony date was **May 21**, not May 22 (May 22 was the phase's final day overall, not testimony). (2) The ~$953 million is Meta's roughly **21% equitable share of a $3.7 billion** total 15-year abatement program (an expert's estimate of the social-media-attributable portion), not the whole request. Both were settled by re-fetching the Santa Fe New Mexican (primary) and aligned across the page, the policy paper section 1, `content/proposal.md`, this source doc, and the New Mexico distillation. This is the first concrete instance of the drift risk the Companion-source note names: independently maintained write-ups diverge on small facts (here, a one-day date). The durable fix is the single-source-of-truth decision, not repeated per-fact patching.
