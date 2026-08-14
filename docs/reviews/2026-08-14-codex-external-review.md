---
title: "External review: build/correctness, UX journey, and agent/SEO surfaces"
reviewer: "Codex (external model, unattended)"
received: 2026-08-14
filed_by: "maintainer, via Claude Code"
scope: "Three audits: repo correctness and build, the human task-flow through the site, and the agent-readable/SEO layer."
verbatim: true
triage: "One High confirmed as a live defect. One High does not reproduce. Two findings are accurate but deliberate."
---

# External review, 2026-08-14 (Codex)

## What this file is

The unedited text of three audits an external model produced against this repository
and a locally-served build on 2026-08-14. Same status as every other file in this
folder: **a record of what someone else said, not a finding of this project.** The body
is verbatim, including its curly quotes and arrows, and the folder is exempt from the
house-style sweep for that reason.

**This review is unlike the Gemini one filed the same day.** That one concluded no
changes were required. This one asserts specific, checkable defects with file and line
citations, and on triage it is largely right. It found something two of my own review
passes missed.

## Triage, performed on receipt

Every finding with a file citation was checked. Results:

| # | Finding | Verdict |
| --- | --- | --- |
| 1 (High) | `npm run build` fails under Turbopack, panics on `geistmono_...module.css` | **Does not reproduce.** Ran from a cold `.next` on this machine: exit 0, compiled successfully. CI ran the same script on Node 20 the same day and passed. Environment-specific to the reviewer's sandbox, most likely a stale cache. **Do not change the build script on the strength of this.** |
| 2 (High) | Stale "abatement pending" copy on OG cards, FAQ JSON-LD, and Tennessee cross-references | **CONFIRMED, and it was live. FIXED 2026-08-14, and the class is now guarded by `check:surfaces`.** See below. |
| 3 (Med) | Production deletes the lockfile and runs `npm install` while CI validates `npm ci` | **Accurate, and deliberate.** Documented in `CLAUDE.md`: the lockfile is deleted so native deps resolve for Linux rather than macOS, which is why the exact versions in `package.json` are the only real production pins. The reviewer's concern (production can resolve what CI never tested) is the correct reading of the trade-off, not a misunderstanding of it. |
| 4 (Low) | `engines` says Node >=20 but `check:ledgers` needs 22.6+ | **Accurate, and deliberate.** Documented in `CLAUDE.md`: `engines` is right about the *app* (production runs `nodejs_20` and never runs that script), so the floor lives in the docs and in CI's two-job split instead. A developer on Node 20 does get a confusing `bad option` failure; that cost is known and accepted. |
| 5 (Low) | `JsonLd` injects raw `JSON.stringify` into a script tag | **Accurate. FIXED 2026-08-14** at `src/components/JsonLd.tsx:9`: escaped to the JSON unicode form, and fault-injected with a literal closing script tag to prove it. It was hardening rather than a live hole, since no such string existed in content. |
| UX 1-2 (High) | The primary journey skips `/scorecard`; the scorecard is explanatory, not actionable | **Accurate as description. PARTLY ADDRESSED 2026-08-14**: `/scorecard` is now in the header as `test`. Making the scorecard itself *actionable* (a working checklist that carries a score into the report) is NOT built: it is the largest item in either review and it collides with the lockstep rule, since a scoring UI would be a third place the seven criteria live. Open product decision. |
| UX 3, 6 (Med/Low) | Nav hides paths; header has no `aria-label` / `aria-current` | **Accurate. FIXED 2026-08-14**: `aria-label="Primary"`, `aria-current="page"` via a 301-byte client nav, a visible brake-red focus ring, and `/scorecard` promoted into the header. |
| Agent 1 (High) | No `rel="describedby"` to `/llms.txt`, no per-page markdown `alternate` | **Accurate, and STILL OPEN.** Neither appears in `layout.tsx` or `proposal/page.tsx`, so discovery remains one-way: the raw `.md` routes point back to HTML, but no HTML page advertises its markdown twin. The only finding from either review not resolved on 2026-08-14. |
| Agent 4 (Med) | `/llms-full.txt` omits `/scorecard` and `/report` | **Accurate. FIXED 2026-08-14**: both are in the bundle, and both gained raw `.md` routes generated from the same arrays the pages render, so the standard is not duplicated. |
| Agent 5 (Med) | `robots.txt` disallows `/_next/`; named AI crawlers get only `Allow: /` | **Accurate. FIXED 2026-08-14** by allowing `/_next/static/` (Google resolves conflicts by longest path); the AI-crawler asymmetry was confirmed deliberate and is now commented as such. Both at `src/app/robots.txt/route.ts:48-51`. |
| Agent 7 / SEO | Author is the organization; no `Person` or provenance nodes | **Accurate as description, but the recommendation is WRONG.** Google allows `Organization` and says to use it for organizations; this site already carries the `url`/`sameAs` the guidance asks for. No change made. No `Person` schema anywhere in `src/`. Independently raised by the Gemini review the same day. |

## The confirmed defect, stated plainly

**The New Mexico case was decided on August 6, 2026, and five machine-read surfaces
still advertise the decision as pending.**

The ledger and the curated pages are correct: the court entered a **$567 million**
abatement fund on top of the jury's $375 million, for **$942 million** total, and the
ledger explicitly marks the old figure `SUPERSEDED by the judgment`. What did not get
re-seeded when the judgment landed:

- `src/app/lawsuits/page.tsx:76`, FAQ JSON-LD: "a separate judge-decided phase **is weighing** about $953 million more"
- `src/app/lawsuits/new-mexico-v-meta/opengraph-image.tsx:4`, share-card alt text: "$953 million abatement request **pending**"
- `src/app/lawsuits/new-mexico-v-meta/opengraph-image.tsx:12`, chips: `~$953M requested`, `decision pending`
- `src/app/lawsuits/opengraph-image.tsx:12`, hub chip: `~$953M requested`
- `content/lawsuits/tennessee-v-meta.md:67` and `docs/distillations/tennessee-v-meta.md:137`: "New Mexico's **pending** abatement decision"

**Why this class is worse than it looks, and why it survived two review passes.** The
$953M figure was never wrong as a statement about the *request*; it is stale only as a
statement about the *posture*, which is the exact distinction this project's evidence
discipline is built around ("announced intent is not filed is not affirmed"). And the
re-seed pass that fixed the markdown could not have caught these, because **OG cards and
JSON-LD are TSX, not markdown**, and no guard script reads them. `check:ledgers` proves
the TLDR variants match their consumers; nothing proves a share card matches the record.
The surfaces that went stale are precisely the ones crawlers, AI agents and social
previews ingest, and precisely the ones no human re-reads.

**FIXED the same day**, ledger-first: the Tennessee ledger's claim 27 was re-framed (and a
new claim 27a added, recording that New Mexico is now a decided precedent for what such an
order actually reaches), the case file was re-seeded from it, and the three TSX surfaces
were corrected against the New Mexico ledger. Both OG cards were inspected visually rather
than curled for a 200, because a card that renders successfully with the wrong words is the
exact failure being fixed.

**And the class is now guarded.** `npm run check:surfaces` (`scripts/check-surfaces.mjs`,
wired into CI) asserts that every dollar figure on a case's share card appears in that
case's ledger, and that words asserting a matter is undecided are allowlisted with a reason.
It was fault-injected against this very defect: reinstating the original `~$953M requested`
/ `decision pending` chips makes it fail. See
`docs/plans/2026-08-14-external-review-remediation.md` for the full record.

---

# Part 1: Repo correctness and build (verbatim)

• Findings

  - High: The default release build fails under Turbopack. npm run build maps to next build in package.json:8, and that same script is used by CI and Railway (.github/
    workflows/ci.yml:56, railway.toml:10). In this workspace it panics on geistmono_...module.css, tied to the Geist imports in src/app/layout.tsx:2. next build
    --webpack succeeds. I would either set the build script to next build --webpack until the Turbopack/Geist issue is fixed, or remove the trigger and prove default
    Turbopack in CI.

  - High: Several public surfaces still say New Mexico’s abatement phase is pending even though the New Mexico page now says final judgment entered August 6, 2026. Stale
    examples: FAQ JSON-LD in src/app/lawsuits/page.tsx:76, New Mexico OG copy in src/app/lawsuits/new-mexico-v-meta/opengraph-image.tsx:4, OG chips in src/app/lawsuits/
    new-mexico-v-meta/opengraph-image.tsx:12, and the Tennessee case/ledger references in content/lawsuits/tennessee-v-meta.md:67 and docs/distillations/tennessee-v-
    meta.md:137. This is especially risky because structured data and share cards are what crawlers/AI/social previews will ingest.

  - Medium: Production deliberately deletes package-lock.json and runs npm install (railway.toml:10), while CI validates npm ci against the lockfile (.github/workflows/
    ci.yml:50). With caret ranges in package.json:20, production can resolve versions that CI never tested. Lockfiles are meant to be cross-platform; optional native
    deps should resolve per platform without deleting the lock.

  - Low: The package contract says Node >=20 (package.json:16), but check:ledgers uses --experimental-strip-types (package.json:11), which the CI comments correctly say
    needs Node 22.6+ (.github/workflows/ci.yml:58). A developer following the declared engine on Node 20 gets a bad-option failure.

  - Low: JsonLd injects raw JSON.stringify(data) into a script tag (src/components/JsonLd.tsx:9). Current data is repo-authored, and I found no literal </script> in
    content, but escaping < to < would prevent a future content edit from breaking out of the JSON-LD script.

---

# Part 2: UX and task-flow audit (verbatim)

• Findings

  1. High: The main “run the test” journey skips the actual scorecard.
     The homepage tells users to “Find the brake,” then sends them to /report, while /scorecard is not in the header and is only linked after the report form. See src/
     app/page.tsx:181, src/app/page.tsx:259, src/components/Header.tsx:16, and src/app/report/page.tsx:74.
     Recommendation: make the primary path home -> scorecard/test -> report.

  2. High: /scorecard is explanatory, not actionable.
     It lists the seven dimensions and outcomes, but users cannot check items off, calculate a result, or carry the score into the report. The report form then captures
     only platform, control, and one outcome. See src/app/scorecard/page.tsx:26, src/app/scorecard/page.tsx:141, and src/app/report/ReportForm.tsx:84.
     Recommendation: turn scorecard into a small guided checklist with “continue to report” prefilled state.

  3. Medium: Global navigation hides important human paths.
     Header exposes report, standard, for you, and desktop-only notes; lawsuits, hearings, distillations, remixes, and scorecard live only in the footer. See src/
     components/Header.tsx:18 and src/components/Footer.tsx:18.
     Recommendation: promote test, report, and evidence into the header; rename standard to something clearer like policy.

  4. Medium: Long evidence pages need on-page navigation.
     Markdown headings get slugs, but there is no table of contents, section jump list, or sticky reader nav. Dense pages like /lawsuits render as long source-heavy
     documents. See src/app/proposal/ProposalContent.tsx:50 and src/app/lawsuits/page.tsx:121.
     Recommendation: generate a compact TOC from headings for proposal, lawsuits, hearings, and distillation pages.

  5. Medium: The report form loses useful user detail.
     Other options exist for platform/control/device, but there is no text input to explain “Other.” Clipboard failure is silent, and direct sharing is X-only. See src/
     app/report/ReportForm.tsx:5, src/app/report/ReportForm.tsx:98, and src/app/report/ReportForm.tsx:240.
     Recommendation: add conditional “Other” text fields, visible copy failure fallback, and platform-neutral share/copy options.

  6. Low: Header orientation/accessibility can improve.
     The header nav has no aria-label, no current-page indication, and mostly hover-oriented styling. See src/components/Header.tsx:16.
     Recommendation: add aria-label="Primary", aria-current="page" for active routes, and consistent focus-visible states.

  What Works

  The 404 page has strong recovery paths, the footer sitemap is complete, the report form has clear privacy/safety framing, and the Suno embed is click-to-load instead
  of loading third-party media immediately.

  I inspected the source and rendered /, /report, /scorecard, /lawsuits, and /distillations through a local Next server. No files were changed, and the server was
  stopped.

---

# Part 3: Agent-readable layer and SEO (verbatim)

• Findings

  1. High: HTML pages do not advertise the agent-readable layer.
     The rendered / and /proposal heads have canonical links, but no rel="describedby" to /llms.txt and no rel="alternate" type="text/markdown" to page-level markdown.
     The raw markdown route points back to HTML, but discovery is mostly one-way. See src/app/proposal/page.tsx:16, src/app/proposal.md/route.ts:14, and src/app/
     llms.txt/route.ts:142.
     Fix: add global Link/<link> discovery for /llms.txt, plus per-page markdown alternates.

  2. High: The agent card is labeled A2A, but behaves like a static discovery card.
     It claims “A2A Agent Card” shape, but exposes no supportedInterfaces and its actions are plain GET content links, not A2A task/message operations. See src/app/
     agent-card.json/route.ts:37, src/app/agent-card.json/route.ts:157, and src/app/agent-card.json/route.ts:204.
     Fix: either present it as a HATEOAS site card only, or implement/declare a real A2A interface.

  3. Medium: /llms.txt is readable, but not fully parser-friendly.
     Several important URLs are embedded as comma-separated inline links instead of standalone markdown list items. That weakens simple ingestion tools expecting one
     resource per bullet. See src/app/llms.txt/route.ts:31 and src/app/llms.txt/route.ts:71.
     Fix: make every resource its own - [name](url): note item, and put rendered HTML/source/remixes under ## Optional.

  4. Medium: /llms-full.txt omits key action pages.
     It includes documents and ledgers, but not the full text/instructions for /scorecard, /report, /remixes, or the home movement brief, even though agent actions point
     to scorecard/report. See src/app/llms-full.txt/route.ts:14, src/app/llms-full.txt/route.ts:83, and src/app/agent-card.json/route.ts:168.
     Fix: add raw /scorecard.md and /report.md, then include them in /llms-full.txt.

  5. Medium: robots.txt blocks generic crawlers from Next static assets.
     Disallow: /_next/ can block CSS/JS resources that rendered pages reference. Google’s docs warn not to block resource files if doing so makes pages harder to
     understand. Also, named AI crawler groups only get Allow: /, so they bypass the wildcard /api/ and /_next/ disallows. See src/app/robots.txt/route.ts:45.
     Fix: allow /_next/static/, and duplicate any intended disallows inside the named crawler groups.

  6. Low: Sitemap freshness can drift.
     /report, /scorecard, and /remixes use proposalDate; all audience pages share the policymaker deck date. See src/app/sitemap.ts:18 and src/app/sitemap.ts:29.
     Fix: date each route from its real source file, or derive route-file modification dates.

  7. Low: Structured data trust signals are thin.
     Article pages point author at the site organization, but there is no richer Person, reviewer, citation, or provenance graph. See src/app/layout.tsx:50 and src/app/
     proposal/page.tsx:36.
     Fix: add explicit author/reviewer/provenance nodes for policy/legal content.

  What Works

  The project is already ahead of most sites for agents: /llms.txt, /llms-full.txt, raw .md mirrors, canonical headers, JSON-LD, sitemap, robots AI signals, OG images,
  and check:ledgers coverage for raw ledger routes are all present.

  Verification: npm exec next -- build --webpack passed and I fetched the generated endpoints locally. Default npm run build still fails under Turbopack in this
  environment.

  External references checked: llms.txt proposal (https://llmstxt.org/), A2A spec (https://github.com/a2aproject/A2A/blob/main/docs/specification.md), Google robots docs
  (https://developers.google.com/search/docs/crawling-indexing/robots/intro), Google SEO starter guide
  (https://developers.google.com/search/docs/fundamentals/seo-starter-guide), Google Article structured data
  (https://developers.google.com/search/docs/appearance/structured-data/article).
