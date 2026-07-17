---
title: "Plan: SEO and organic-search optimization"
subtitle: "Grounded in live Google Trends data (US, July 2026). The technical layer is largely built; the leverage now is intent targeting, freshness around the trial, and off-page demand."
status: "Plan, not a checklist of unbuilt work. Several items are already shipped and are recorded here as done so the plan is honest about what remains. AI-assisted."
date: 2026-07-16
site: "de-amplify.com"
document: "SEO plan. Companion to the /lawsuits page plan (2026-07-15-cases-page-plan.md). Content facts stay governed by the ledger-first pipeline; nothing here adds legal claims."
---

# Plan: SEO and organic-search optimization

> **The one-line strategy.** The high-volume search terms in this space are traps (transactional lawyer-shopping, or polluted by Meta's unrelated litigation). The winnable ground is informational question intent the law firms do not serve, plus the news-moment spikes around the August trial. Point the (already strong) technical layer at that ground, and spend the real effort on the demand that structured data can only intercept, not create.

## 1. What the Google Trends data actually said (US, 90 days, July 2026)

Three tiers of terms, and only one is winnable for an advocacy explainer:

1. **High-volume but transactional.** "social media lawsuit" and "meta lawsuit" spike hard, but their rising queries are law-firm names (Morgan & Morgan, Troxel Law, Beasley Allen) and "how to join." That is people hiring lawyers. Google's intent matching will rank law firms, not us, and traffic that did arrive would bounce. Do not optimize for these as primary targets.
2. **High-volume but polluted.** "meta trial" / "meta" anything is contaminated by Meta's other litigation and products: "meta ai layoff lawsuit," "zuckerberg ai copyright," "eminem meta lawsuit," "meta quest," "meta horizon store." Wrong Meta. Avoid "meta" as a bare qualifier in titles meant to rank.
3. **The winnable cluster: informational questions.** "is social media addictive" surfaces clean, non-transactional, real-volume queries nobody owns the answer to: **"why is social media addictive," "how addictive is social media," "why is social media so addictive," "how to get rid of social media addiction."** The law firms do not write for these. The site already answers them (the homepage diagnosis and reframe, the "so is it actually addiction?" section). This is the moat.

**Corollary:** branded search for "de-amplify" is effectively zero (expected for a new site). Structured data and content position the site to *catch* demand; they do not *create* it. Section 6 is where demand actually comes from, and it is off-page.

## 2. Already shipped (recorded so the plan is honest)

The technical foundation from earlier passes is live and should not be re-planned:

- Per-page unique `title` / `description` / canonical; per-page designed OG cards (build-time, one template); `twitter:card = summary_large_image`; `metadataBase` set.
- `robots.txt` route with explicit AI-crawler allowlist and `Content-Signal`; `sitemap.xml` with git-history dates; IndexNow key file at root.
- Agent-discovery layer: `llms.txt`, `llms-full.txt`, `agent-card.json`, raw `.md` routes with canonical `Link` headers.
- JSON-LD: `Organization` + `WebSite` (layout), `Article` + `BreadcrumbList` on content pages, `HowTo` on the scorecard, `FAQPage` on the homepage and `/lawsuits` (the question-intent cluster, added after the Trends review).
- Mobile pass (targets, 16px inputs, contrast, theme chrome) and the perf pass (Suno facade: mobile PageSpeed 37 to 85).

## 3. On-page and content: target the winnable cluster

The technical layer is done; the content targeting is the gap.

1. **Lead the winnable questions with real headings, not just JSON-LD.** FAQ structured data is placed, but a featured snippet usually wants a visible `<h2>` phrased as the query with a concise answer directly under it. Candidate: a short "so is it actually addiction?" style block on the homepage or `/proposal` whose H2 is literally "Why is social media addictive?" with a 40-to-60-word answer, then the deeper argument. Restate from existing copy; do not invent claims.
2. **Keep `/lawsuits` on its clean niche term, not the polluted head term.** "Social Media Addiction Lawsuits, Explained" is the right title: lower volume than "meta lawsuit," but clean intent and no law-firm wall to climb. Do not retitle toward "meta lawsuit."
3. **The case pages and the ledgers are a long-tail asset.** `/lawsuits/mdl-3047`, `/kgm-v-meta`, `/new-mexico-v-meta`, `/hearings`, and the distillation ledgers own low-competition, high-intent terms ("MDL 3047," "K.G.M. v. Meta," "new mexico meta verdict," named hearings). Ensure each has a unique title leading with its proper-noun term, an `Article` + `BreadcrumbList`, and a first paragraph that states the entity and disposition in plain terms (answer-engine friendly). Audit that none share a title or description.
4. **Internal linking toward the question intent.** The pages that answer "why is social media addictive" should interlink with descriptive anchor text ("why the feed is addictive," "the delivery loop") rather than "read more," so the topic cluster reads as authoritative to a crawler.
5. **Evidence-status labels are a differentiator; make them legible to crawlers.** The court-held / jury-found / requested / preliminary vocabulary is unique in this SERP. Keep it in visible text (not only styling) so it registers as the substance that sets the pages apart from law-firm boilerplate.

## 4. Freshness and the news moment (highest time-sensitivity)

Search interest in this topic is event-driven. The calendar is the strategy.

- **Near-term triggers:** the second California bellwether trial (Meta and Snap, currently July 27), then jury selection August 12 and opening statements August 18 in the AG trial. Each is a demand spike on trial-related queries.
- **Have the pages current before each spike, not after.** A crawler that finds a stale as-of date during the spike wastes the moment. The `/lawsuits` staleness protocol (from the cases-page plan) is the mechanism; this plan just ties it to the SEO calendar.
- **Pre-position for the post-verdict query wave.** "social media addiction trial verdict" will spike in September or October. Have the H2 skeleton and the four-numbers framing ready so the update is a fill-in, not a rewrite.
- **Ping IndexNow / resubmit the sitemap on each material update** so Bing (and thus some AI search) recrawls fast; the key file is already hosted.
- **`changeFrequency` honesty:** the litigation pages are correctly `weekly`; keep it, but only if they actually change weekly through the trial. A weekly hint on a stale page is a small trust cost.

## 5. Technical follow-ups (small, real)

- **Google Search Console + Bing Webmaster verification and sitemap submission. DONE (2026-07-16 AM).** Both verified and sitemap submitted. Query data, the "crawled not indexed" report, and manual index requests for the trial-window pages are now available. Next: use them (see section 9), and manually request indexing for the litigation pages ahead of each trial spike.
- **Confirm no accidental `noindex` and no duplicate canonicals** across the newer routes (`/hearings`, `/distillations`, the ledger pages) as they were added quickly. One `curl` per route for `robots` meta and `canonical`.
- **Watch the FAQ rich-result caveat.** Google restricts FAQ rich results to authoritative gov/health domains, so the `FAQPage` markup mainly helps AI answer engines and non-Google surfaces here, not Google rich snippets. Keep it (the upside is real for AI search), but do not expect Google FAQ accordions.
- **Core Web Vitals field data ("No Data" today)** populates only after enough Chrome traffic over a 28-day window. It becomes measurable once section 6 produces an audience; nothing to build, just to watch.

## 6. Off-page: where organic demand actually comes from (the real unlock)

Structured data intercepts searches; it does not generate them. For this site the generators are:

1. **Seed the movement before the trial.** The founder audits (run the six-part test on each platform, post with #WheresTheBrake) and a first wave of shares are what create branded and question-intent searches in the first place. This is the highest-leverage non-code work and it is time-boxed by the August calendar.
2. **Earn citations from news and topical sites.** The evidence-status discipline and the dated, primary-sourced ledgers are genuinely citable by a journalist covering the trial. A single link from a news outlet during the spike is worth more than any on-page tweak. The `/for/press` briefing exists for exactly this; getting it in front of real reporters is the work.
3. **AI answer engines are a first-class channel here.** The whole agent-discovery layer (llms.txt, raw markdown, agent-card, the FAQ and Article JSON-LD) is built to be *quoted with attribution* by ChatGPT/Perplexity/Claude answers, which is where a growing share of "why is social media addictive" and "what is the Meta lawsuit" questions are actually answered now. Being citable there may matter more than a Google position. Keep every agent surface pointing canonical URLs back to the site.

## 7. Deliberate non-goals

- Not chasing "how to join a lawsuit," "settlement payout amounts," or "social media addiction lawyer." Transactional; the site cannot serve them and ranking would attract bounces.
- Not retitling toward "meta lawsuit" for its volume; the term is polluted and transactional.
- No keyword stuffing, doorway pages, or thin question-pages generated only to rank. Every page must carry real substance; the site's credibility is the asset and thin SEO pages would spend it.
- No fabricated review, rating, or aggregate-count structured data. Only markup that reflects true, on-page content.

## 8. Priority order

1. ~~Google Search Console + Bing verification and sitemap submission.~~ **DONE 2026-07-16 AM.** Measurement is now unblocked.
2. Founder audits and the first share wave before July 27 / August 12 (section 6.1). The demand engine, and now the top remaining item.
3. Freshness discipline on the litigation pages through the trial window (section 4); manually request indexing in Search Console ahead of each spike.
4. Visible question-intent H2s and the case/ledger title-and-first-paragraph audit (section 3).
5. Press outreach with the `/for/press` briefing (section 6.2).
6. The small technical follow-ups (section 5); use the Search Console coverage report to catch any accidental `noindex` or duplicate canonical on the newer routes.

## 9. How to know it worked

- Search Console: impressions and clicks on the question cluster ("why is social media addictive" and neighbors) and on the proper-noun long tail ("MDL 3047," "K.G.M. v. Meta"), not on the transactional head terms.
- Appearance (with attribution) in AI answer-engine responses to "why is social media addictive" and "what is the Meta youth-safety trial."
- Trial-window: indexed and current before each spike, confirmed in Search Console coverage.
- Branded search for "de-amplify" rising from zero, which is the signal the off-page work is landing.
