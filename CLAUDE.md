# CLAUDE.md

Operational guide for working in this repo. For what the project *is* (the thesis, the document structure, the routes), read [README.md](README.md). This file is the conventions and gotchas that keep it from breaking.

## Standalone repo (hard rule)

This repository is self-contained and public. Do **not** add references to any other, sibling, or private repository: not by relative path (e.g. `../other-repo/...`), not by project name, and not in commit messages. If you need a concept that lives in another project, describe it inline here instead of linking to or naming the source. The git history was scrubbed of such references before this repo went public; keep it that way.

## House style (load-bearing)

- **No em-dashes.** The house style forbids the em-dash and the en-dash used as punctuation. Use commas, colons, parentheses, or restructure the sentence. This applies to content, code comments, and commit messages alike. Curly/smart quotes are also out; use straight quotes. In a TS/TSX string that needs a straight double quote, escape it (`"\"Show me less\""`) rather than reaching for a curly pair.
- **Checking it (the naive grep lies on macOS).** `grep -l $'[‘’“”]'` over-reports badly here: BSD bracket collation matches U+2014 and other punctuation, so it flags files with zero curly quotes and sends you chasing ghosts. Use one exact codepoint per pattern under the C locale:

  ```bash
  LC_ALL=C grep -rn --exclude-dir=sources --exclude-dir=reviews \
    -e $'—' -e $'‘' -e $'’' -e $'“' -e $'”' src/ content/ docs/ *.md
  ```

  Sweep `docs/` and the root `.md` files too, not just `src/` and `content/`: the last em-dash found in this repo was in `docs/plans/`, which a `src content` only scan never reaches. The two `--exclude-dir`s are the exemptions below. This file will always self-match (it contains the literal characters in the line above); that is the one expected hit.

  **Two directories are deliberately exempt**, because their punctuation is evidence rather than prose: `docs/distillations/sources/` (verbatim official transcripts, whose GPO punctuation the ledgers reproduce exactly) and `docs/distillations/reviews/` (raw output from external review models, referenced as `raw_audit_trail` in ledger frontmatter). Rewriting punctuation in either is editing a record of what someone else said. Everything else, including `src/`, `content/`, `docs/proposals/`, `docs/plans/`, and this file, is held to the rule.
- **Commit messages**: lowercase, colon-prefixed by area (`site:`, `content:`, `docs:`, `scorecard:`, `proposal:`), imperative mood, body wrapped. End with the `Co-Authored-By:` trailer when co-authored. Commit and push only when asked.
- **`main` is protected: it takes pull requests, not direct pushes.** A direct `git push origin main` is rejected with `GH006: Protected branch update failed`, and the rule applies to admins too. Work on a branch, open a PR, merge it (0 approvals required, no required status checks, so a solo maintainer is not blocked, just routed). The `(#25)` / `(#27)` suffixes on subject lines in `git log` are squash-merge artifacts, not something to type by hand. Merging is what deploys: Railway builds `main`.
- **Voice**: the copy is confessional, direct, terminal/mono in feel (Geist Mono, the void / brake-red palette). Match the surrounding text; do not turn it into marketing.
- **Contrast floor: real text clears WCAG AA 4.5:1 against the void.** The muted palette is the look, but the bottom of the opacity ladder was illegible (`text-bone/30` measured 2.28:1), so on 2026-07-24 it was remapped repo-wide: `bone/20 -> 52`, `30 -> 55`, `35 -> 57`, `40 -> 60`, `45 -> 63`, plus `brake/70 -> 90` and `signal/60 -> 80` on real text. **`text-bone/50` (4.51:1) is the floor; do not go below it for anything a reader reads.** All the site's type is under 24px, so the large-text 3:1 allowance never applies. Genuinely decorative glyphs (the footer `/` separators, the terminal `>` prompt) keep their low opacity and carry `aria-hidden="true"` instead; the one other exemption is the `prose-li:marker:` bullet, which is `::marker` decoration on a semantically-marked list. Adding `text-bone/40` for new copy silently reopens the whole class.

## Content pipelines (know which one you are in)

- **Policy paper and appendix.** `content/proposal.md` and `content/notes.md` are the frontmatter-stripped *bodies* of the review copies in `docs/proposals/`. Edit the review copy, then regenerate the body. Do not add nav links or frontmatter to `content/*.md` (react-markdown renders them raw).
- **Lawsuits and hearings are ledger-first.** `docs/distillations/*.md` are the evidence-tiered claim ledgers and are the source of truth. `content/lawsuits/*.md` (the case files), `content/lawsuits.md` (the hub), and `content/hearings.md` (the hearings hub) are *seeded from* the ledgers, curated, not a 1:1 render. Corrections land in the ledger first (verified against a primary source), then the page is re-seeded on a dated pass. Never fix a fact only on the page.
- **The ledgers are also published directly.** `/distillations/<slug>` (plus a raw `/distillations/<slug>.md` per ledger, and inclusion in `/llms-full.txt`) renders each ledger via the section whitelist in `src/lib/distillations.ts`: reader summary, brake-integrity relevance, the tiered claims, the full quote-bank, tensions, plus Sources rebuilt from frontmatter and the lawsuit ledgers' own Tier key paragraph. The TLDR block, Discrepancies, and Coverage note stay out (authoring/QA scaffolding). So a ledger correction publishes to `/distillations` automatically with no re-seed; only the curated pages need the dated pass. A new ledger needs **both** an entry in the `DISTILLATIONS` list in that lib file **and** a filled-in TLDR block (see the two bullets below); registering it without the TLDR variants yields a blank index card and an OG card that falls through to the generic "The evidence ledger" title.
- **Verbatim TLDR surfaces.** Each ledger has a TLDR block of budgeted variants (label / nav-label / og-title / search-snippet / one-sentence / one-paragraph). Those exact strings are wired verbatim into consumers, one consumer each: label -> hub card (`content/lawsuits.md`, the `content/hearings.md` table), nav-label -> the `/distillations` index card and breadcrumb, og-title -> the share card, search-snippet -> meta description, one-sentence -> JSON-LD description, one-paragraph -> page opener. Everything except the hub card is parsed at build by `src/lib/distillations.ts`. Copy verbatim; do not hand-adapt a summary (an adapted copy is a third unvalidated variant and reopens drift). If a consumer needs a length the ledger lacks, add that budgeted variant to the ledger, not to the page.
- **`DISTILLATIONS` in `src/lib/distillations.ts` holds routing config only** (slug, kind, tierDown, related). Do not put a reader-facing string there. Nav-label and og-title used to be hand-authored in that array, which made them unvalidated variants of summaries the ledgers already owned; they are now parsed from the ledger like every other variant. A new ledger needs its TLDR block filled in, not new strings in the array.
- **Hand-built React** (not markdown): the homepage, `/report`, `/scorecard`, `/for`, `/remixes`, and `/distillations` (which renders the ledgers).
- **The markdown renderer is a server component, deliberately.** `src/app/proposal/ProposalContent.tsx` renders every markdown document (`/proposal`, `/notes`, `/lawsuits`, the case files, `/hearings`, the ledger pages). It has no `"use client"` and must not get one: react-markdown 10's default export has no hooks, so it renders server-side fine, and adding the directive reships react-markdown + remark-gfm + micromark + rehype-slug (measured: **42 KB gzipped**) to every document route *and* serializes the whole markdown string into the flight payload on top of the HTML it already rendered. The only legitimate client components on the site are `src/app/report/ReportForm.tsx` and `src/components/SunoEmbed.tsx`.

## Evidence discipline (this is a public legal site)

- A legal or factual claim must trace to a **primary source** (a court order or filing, the docket, an official government release) to be stated as fact. Secondary coverage gets tiered down and flagged.
- **Posture precision.** "Announced intent" is not "filed" is not "affirmed"; a summary-judgment ruling is not a motion to dismiss; a jury verdict is not "upheld on appeal." The project was burned once by a "$6M upheld on appeal" error; do not repeat that class.
- **Event date is not coverage date.** An order "filed June 29" may be "announced June 30"; record the event date, note the coverage date. This error recurred repeatedly, so watch for it.
- Everything carries an **as-of date**. Figures date quickly.
- **Verbatim is not the same as attributed, and only the first is machine-checked.** The quote-fidelity checker confirms a quoted span is an exact substring of the cached transcript. It cannot tell you *who said it*. A 2026-07-24 re-seed put a witness's line in a senator's mouth on `/hearings` and passed every check, because the string really was in the transcript. In the hearing ledgers' witness quote-banks the senator named in each parenthetical is the **questioner**, never the speaker; the speaker is the subsection. When re-seeding a quote, confirm the speaker against the transcript by eye, not by substring.

## Adding or changing a route

Wire it into every discovery surface or it drifts out of sync:

- `src/app/sitemap.ts`, `src/app/llms.txt/route.ts`, `src/app/llms-full.txt/route.ts`, and the `_links` (plus a `skill` where it fits) in `src/app/agent-card.json/route.ts`. `_actions` in the agent card is capped at five, so extend `_links`, not `_actions`. A rendered document also gets a raw-markdown route (e.g. `/hearings.md`, `/distillations/<slug>.md`) with RFC 8288 `Link` headers (`up` / `index` / `canonical`), and is listed in llms.txt. Note that `llms-full.txt` reads from **two** trees: the `content/` bodies plus, for the three `/for` briefing decks, their source files in `docs/proposals/` (the decks are gamma.app source with no `content/` body, but they are rendered documents, so "every rendered document" has to include them). The agent card's per-ledger `_links.ledgers` is generated from the `DISTILLATIONS` registry rather than hand-listed, so a new ledger wires itself in; the `/for` and `cases` branches are still hand-listed.
- If it is a content page: add `Article` + `BreadcrumbList` JSON-LD and **per-page `openGraph` / `twitter`** metadata. The OG image is a **colocated `opengraph-image.tsx`** in the route folder (it calls the shared `ogCard` in `src/lib/og/template.tsx`, brake or signal accent); Next wires it into `og:image` automatically, so the per-page `openGraph` object does **not** set `images`. A dynamic route generates one OG per param via `generateStaticParams` (see `/distillations/[slug]`). Do not build class names dynamically (`text-${accent}`); Tailwind cannot see them, so use literal ternaries.
- Dates in JSON-LD and the sitemap come from **git author dates** via `src/lib/contentDate.ts`, not `fs.statSync().mtime`. A fresh CI checkout resets mtimes to the deploy time, so mtime would restamp every page on each deploy. Do not reintroduce mtime.

## The scorecard is the standard (lockstep)

`/scorecard` renders the seven brake-integrity criteria from the policy paper section 3. **Changing the scorecard means changing the standard**, in the paper and on the page together. There is an open revision proposal, `docs/proposals/2026-07-16-scorecard-v2-brake-performance-test.md`; the current seven-part test stays operative until that clears review, so do not quietly edit the dimensions out of band.

## Dependency pins (load-bearing; do not casually bump)

The stack runs current majors (Next 16, React 19, Tailwind 4, ESLint 9, TypeScript 6), but a few pins are deliberate and will break the build if "helpfully" upgraded:

- **ESLint stays at 9, not 10.** `eslint-config-next` 16 only needs `eslint >=9`; ESLint 10 needs a `typescript-eslint` that this registry only ships in broken form.
- **`typescript-eslint` is pinned to 8.59.4 via `overrides`**, and **`tailwindcss` + `@tailwindcss/postcss` to exact 4.3.0** (4.3.1-4.3.3 and typescript-eslint 8.60+ publish against sibling packages that were never published).
- **TypeScript stays at 6** (no stable 7 exists yet). Lint runs via `eslint .` (flat config in `eslint.config.mjs`); `next lint` was removed in Next 16.

Dependabot keeps proposing majors and its exact version numbers are sometimes phantom (they 404). Before merging one, confirm the target and its transitive deps actually resolve; land on the newest coherent release, not Dependabot's literal number. The dev CSP grants `unsafe-eval` only when `NODE_ENV=development` (React 19 dev tooling); the production CSP stays tight.

## Build, deploy, verify

```bash
npm run dev     # http://localhost:3333
npm run build   # typecheck + compile; run before committing nontrivial changes
npm run lint    # eslint . (flat config); run before opening a PR
npm run start   # serve the production build
```

- **Deploy**: Railway auto-deploys `main` (roughly 45s to 2min), fronted by Cloudflare. Verify user-facing changes live on de-amplify.com after the deploy, not just in the local build.
- **CSP**: security headers, including a scoped Content-Security-Policy, live in `next.config.mjs`. If you add an external embed or resource, update the CSP or the browser will block it at runtime. The one current external dependency is the Suno iframe (allowed via `frame-src`). Check the browser console for CSP violations after deploying.
- **Railway port gotcha**: the custom-domain target port must match the injected `$PORT` (8080). Do not hardcode `-p`. See the "Port note" in the README.

## Known open threads

- The two tier-down hearing ledgers (May 2026 Senate verdicts, Dec 2025 House legislative solutions) are built from witness written testimony. **Dec 2025's transcript published and is cached** (`CHRG-119hhrg62241`, fetched 2026-07-25), which narrowed but did not close that tier-down, and the reason is a trap worth remembering: **a GPO HTML transcript carries the spoken hearing only, and prepared statements sit in the official record as page images that no substring check can reach.** The 65 MB PDF extracts to text with every written-testimony phrase absent. So publication is not the same as verifiability: of that ledger's 37 quoted spans, only 5 touch the official transcript. The remaining work is a re-seed from the live Q&A, not a banner flip. May 2026 is still awaiting its transcript. Expect the same split when it lands.
- **The EU Digital Services Act proceeding has no ledger.** `/lawsuits` calls the record "four proceedings" and states the Commission's July 10 2026, April 29 2026, and February 6 2026 preliminary findings as fact, sourced to EC releases on the page but with no tiered claim record behind them. So EC corrections have nowhere to land ledger-first, which is the one place the ledger-first rule currently does not hold. The Brussels section and the `/distillations` lawsuits blurb both say so out loud as an interim measure; the real fix is a fourth ledger built from the EC primary releases. Until then, do not add new EC claims to the page.
