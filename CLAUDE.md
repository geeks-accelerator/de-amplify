# CLAUDE.md

Operational guide for working in this repo. For what the project *is* (the thesis, the document structure, the routes), read [README.md](README.md). This file is the conventions and gotchas that keep it from breaking.

## Standalone repo (hard rule)

This repository is self-contained and public. Do **not** add references to any other, sibling, or private repository: not by relative path (e.g. `../other-repo/...`), not by project name, and not in commit messages. If you need a concept that lives in another project, describe it inline here instead of linking to or naming the source. The git history was scrubbed of such references before this repo went public; keep it that way.

## House style (load-bearing)

- **No em-dashes.** The house style forbids the em-dash and the en-dash used as punctuation. Use commas, colons, parentheses, or restructure the sentence. This applies to content, code comments, and commit messages alike. Curly/smart quotes are also out; use straight quotes. Before committing, grep the changed files for the em-dash character (U+2014) and curly quotes.
- **Commit messages**: lowercase, colon-prefixed by area (`site:`, `content:`, `docs:`, `scorecard:`, `proposal:`), imperative mood, body wrapped. End with the `Co-Authored-By:` trailer when co-authored. Commit and push only when asked; the repo is maintained directly on `main`.
- **Voice**: the copy is confessional, direct, terminal/mono in feel (Geist Mono, the void / brake-red palette). Match the surrounding text; do not turn it into marketing.

## Content pipelines (know which one you are in)

- **Policy paper and appendix.** `content/proposal.md` and `content/notes.md` are the frontmatter-stripped *bodies* of the review copies in `docs/proposals/`. Edit the review copy, then regenerate the body. Do not add nav links or frontmatter to `content/*.md` (react-markdown renders them raw).
- **Lawsuits are ledger-first.** `docs/distillations/*.md` are the evidence-tiered claim ledgers and are the source of truth. `content/lawsuits/*.md` (the case files) and `content/lawsuits.md` (the hub) are *seeded from* the ledgers, curated, not a 1:1 render. Corrections land in the ledger first (verified against a primary source), then the page is re-seeded on a dated pass. Never fix a fact only on the page.
- **Verbatim TLDR surfaces.** Each ledger has a TLDR block (label / search-snippet / one-sentence / one-paragraph). Those exact strings are wired verbatim into consumers: label -> hub card, search-snippet -> meta description, one-sentence -> JSON-LD description, one-paragraph -> page opener. Copy verbatim; do not hand-adapt a summary (an adapted copy is a third unvalidated variant and reopens drift). If a consumer needs a length the ledger lacks, add that budgeted variant to the ledger, not to the page.
- **Hand-built React** (not markdown): the homepage, `/report`, `/scorecard`, `/for`, `/remixes`.

## Evidence discipline (this is a public legal site)

- A legal or factual claim must trace to a **primary source** (a court order or filing, the docket, an official government release) to be stated as fact. Secondary coverage gets tiered down and flagged.
- **Posture precision.** "Announced intent" is not "filed" is not "affirmed"; a summary-judgment ruling is not a motion to dismiss; a jury verdict is not "upheld on appeal." The project was burned once by a "$6M upheld on appeal" error; do not repeat that class.
- **Event date is not coverage date.** An order "filed June 29" may be "announced June 30"; record the event date, note the coverage date. This error recurred repeatedly, so watch for it.
- Everything carries an **as-of date**. Figures date quickly.

## Adding or changing a route

Wire it into every discovery surface or it drifts out of sync:

- `src/app/sitemap.ts`, `src/app/llms.txt/route.ts`, and the `_links` in `src/app/agent-card.json/route.ts`.
- If it is a content page: add `Article` + `BreadcrumbList` JSON-LD and **per-page `openGraph` / `twitter`** metadata. Gotcha: defining a per-page `openGraph` object **drops the inherited file-based OG image**, so re-add `images: ["/opengraph-image"]` explicitly, then confirm `og:image` is in the built HTML.
- Dates in JSON-LD and the sitemap come from **git author dates** via `src/lib/contentDate.ts`, not `fs.statSync().mtime`. A fresh CI checkout resets mtimes to the deploy time, so mtime would restamp every page on each deploy. Do not reintroduce mtime.

## The scorecard is the standard (lockstep)

`/scorecard` renders the seven brake-integrity criteria from the policy paper section 3. **Changing the scorecard means changing the standard**, in the paper and on the page together. There is an open revision proposal, `docs/proposals/2026-07-16-scorecard-v2-brake-performance-test.md`; the current seven-part test stays operative until that clears review, so do not quietly edit the dimensions out of band.

## Build, deploy, verify

```bash
npm run dev     # http://localhost:3333
npm run build   # typecheck + compile; run before committing nontrivial changes
npm run start   # serve the production build
```

- **Deploy**: Railway auto-deploys `main` (roughly 45s to 2min), fronted by Cloudflare. Verify user-facing changes live on de-amplify.com after the deploy, not just in the local build.
- **CSP**: security headers, including a scoped Content-Security-Policy, live in `next.config.mjs`. If you add an external embed or resource, update the CSP or the browser will block it at runtime. The one current external dependency is the Suno iframe (allowed via `frame-src`). Check the browser console for CSP violations after deploying.
- **Railway port gotcha**: the custom-domain target port must match the injected `$PORT` (8080). Do not hardcode `-p`. See the "Port note" in the README.

## Known open threads

- The GitHub repo is **private**, so the public "star the repo", JSON-LD `sameAs`, and agent-card `repository` links return 404 for anyone not on the team. Resolve by making the repo public or by de-linking those references.
