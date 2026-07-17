# de-amplify.com: The Thing It Broke Was the Brake

> Engagement feeds are being sued for addicting kids. The remedies on the table (damages, age bans, or lobbied-for immunity) don't set a standard for what a non-harmful product must *do*. This is a proposal that does: **de-amplify, don't censor.**

**Live:** https://de-amplify.com
**Read:** the movement brief (the homepage), the policy paper [`/proposal`](https://de-amplify.com/proposal) (*The Brake Integrity Standard*), the experimental appendix [`/notes`](https://de-amplify.com/notes), the litigation explainer [`/lawsuits`](https://de-amplify.com/lawsuits) with per-case files ([MDL 3047](https://de-amplify.com/lawsuits/mdl-3047) · [K.G.M.](https://de-amplify.com/lawsuits/kgm-v-meta) · [New Mexico](https://de-amplify.com/lawsuits/new-mexico-v-meta)), the hearings explainer [`/hearings`](https://de-amplify.com/hearings), the published evidence ledgers [`/distillations`](https://de-amplify.com/distillations), the audience briefings [`/for`](https://de-amplify.com/for) ([policymakers](https://de-amplify.com/for/policymakers) · [parents](https://de-amplify.com/for/parents) · [press](https://de-amplify.com/for/press)) · **Act:** [`/report`](https://de-amplify.com/report) · [`/scorecard`](https://de-amplify.com/scorecard) · [`/remixes`](https://de-amplify.com/remixes)

## What this is

A **framing proposal** and a small movement site: *where* to intervene on the social-media-and-minors problem, and why that surface is more defensible than the ones being fought over in court. Since the six-review rebuild (2026-07-15) its spine is **three documents** on one thesis, with a litigation explainer, audience briefings, and participation tools built around them:

- **Movement brief** (the homepage), the public front. The confession, the self-test (*find the brake, set it, close the app, reopen, did it hold?*), the campaign-safety rules, the demand, `#WheresTheBrake`, and the movement's song (*Where's the Brake*, embedded from Suno as the recognition beside the ask).
- **Policy paper** ([`content/proposal.md`](content/proposal.md), at `/proposal`, *The Brake Integrity Standard*), the substance, for counsel and regulators. The regulable surface is **control integrity**: when a platform offers a control to stop or redirect the feed, it must actually work and persist. Rebuilt on the 2026 legal record (*Moody* / *Doe v. Meta* / *Lemmon* / SB 976 / DSA / AADC), with an explicit tiered-exposure analysis and honest limits (§7).
- **Experimental appendix** ([`content/notes.md`](content/notes.md), at `/notes`), the higher-risk research: the wedge hypothesis and *mechanism* labeling ("you're seeing this because…"), quarantined as research, not policy.

The through-line: **regulate the loop, re-attach consent, de-amplify don't censor.** The harm is the engagement-optimized delivery loop (infinite scroll, autoplay, variable reward), not any individual post; the fix is a brake the user holds that the platform can't quietly override.

**Around the spine:** a dated **litigation explainer** ([`content/lawsuits.md`](content/lawsuits.md), at `/lawsuits`) with a per-case file for MDL 3047, *K.G.M. v. Meta*, and *New Mexico v. Meta*, each seeded from an evidence-tiered claim ledger (see Develop); a **hearings explainer** ([`content/hearings.md`](content/hearings.md), at `/hearings`) distilling four Congressional hearings (2023-2026, the mechanism on the record) with verbatim, attributed quotes; the **evidence ledgers themselves, published in full** at [`/distillations`](src/app/distillations) (one page per ledger, tiers intact, the hearings with their complete quote-banks); **audience briefings** ([`/for`](src/app/for)) that reframe the argument for policymakers, parents, and press; and the movement song with community **remixes** ([`/remixes`](src/app/remixes)), an open call to remix *Where's the Brake* (seeded with the first remix, *No Brake*) in any language, since the recognition travels even where the US-specific policy can't.

**Participation tools:** [`/report`](src/app/report) turns one dead brake into a structured, shareable report; [`/scorecard`](src/app/scorecard) is the seven-part brake-integrity test written out so everyone scores the same way. The report form **stores nothing** by design; storing minor-associated data is the exact liability the movement asks platforms to stop; central aggregation is a future backend step with its own data-retention and moderation policy.

It is deliberately blunt about its **honest limits** ([§7 of the policy paper](content/proposal.md)): age verification as a potential showstopper, the banishment risk, platform counter-narratives, the wedge classifier as the named anti-pattern, and First Amendment / Section 230 exposure (engaged directly, not waved off). A **diagnosis, not a "move slow" slogan**, with AI in the loop amplification only accelerates, which is why the fix has to be structural.

Not a lawsuit. Not a ban. A design target, one anyone can point a regulator, a platform, or a parent at.

## Show up

If the diagnosis is right, make it louder. **Star the repo.** Open an issue. Sharpen the argument (especially the limits, attack them; that's how it gets stronger). See [CONTRIBUTING.md](CONTRIBUTING.md) for how, and [SECURITY.md](SECURITY.md) to report a vulnerability.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Geist Mono/Sans · `react-markdown` for the rendered documents. Deployed on **Railway** (`railway.toml` + `nixpacks.toml`), behind **Cloudflare** (DNS/CDN).

**Discovery layer** (search engines + AI agents): JSON-LD structured data ([`JsonLd.tsx`](src/components/JsonLd.tsx), wired into `layout.tsx` and every page: Organization + WebSite, a per-page Article, the scorecard HowTo, a lawsuits FAQPage, and BreadcrumbList), per-page OpenGraph and Twitter metadata (title/description/image per route, not just the site card), a generated OpenGraph image ([`opengraph-image.tsx`](src/app/opengraph-image.tsx)) alongside an `apple-icon` and a web-app `manifest`, `sitemap.xml` / `robots.txt` (with the `Content-Signal` AI-usage directive), and the agent surfaces `llms.txt` (the curated index), `llms-full.txt` (every document concatenated for deep ingestion), and raw-markdown routes (`/proposal.md`, `/notes.md`, `/lawsuits.md`, `/hearings.md`, one per case file under `/lawsuits/*.md`, and one per evidence ledger under `/distillations/*.md`) so the documents read plainly for a crawler or an agent, not just the styled pages. Article `dateModified` and sitemap `lastmod` come from git author dates ([`contentDate.ts`](src/lib/contentDate.ts)), not filesystem mtimes, so a fresh deploy does not falsely restamp every page as changed.

**HATEOAS layer** (hypermedia as the engine of application state): the site is self-navigating for automated consumers, so no response is a dead end. A machine-readable discovery card ([`agent-card.json`](src/app/agent-card.json/route.ts), an A2A Agent Card served at both `/agent-card.json` and the canonical `/.well-known/agent-card.json`) carries A2A `skills` plus `_links` (the resource map) and prioritized `_actions` (next steps with reason + timing, capped at five); `/api/health` returns the same `{data, _links, _actions}` envelope instead of a bare status; the raw-markdown routes add RFC 8288 `Link` headers (`rel="up"` / `rel="index"`, alongside the existing `canonical`); and a custom `not-found` page offers prioritized recovery paths. The one part of the standard that does not apply is state-driven responses: the site is stateless (no accounts, `/report` stores nothing), so every consumer gets the same card.

**Hardening & crawler posture:** security headers (a Content-Security-Policy scoped to the site's needs, HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) are set in [`next.config.mjs`](next.config.mjs). The stance toward AI is deliberate opt-in: `robots.txt` names every major AI crawler with `Allow: /` and carries `Content-Signal: ai-train=yes, search=yes, ai-input=yes`; IndexNow (a key file plus `Host`/`IndexNow` directives) enables instant Bing/Yandex recrawl; and [`/.well-known/security.txt`](public/.well-known/security.txt) (RFC 9116) gives a security contact.

## Develop

```bash
npm install
npm run dev      # http://localhost:3333
npm run build    # production build (typecheck + compile)
npm run start    # serve the production build
```

The rendered documents live in [`content/`](content/): `proposal.md` (the policy paper, at `/proposal`), `notes.md` (the appendix, at `/notes`), `lawsuits.md` (the litigation explainer, at `/lawsuits`), `lawsuits/` (the three per-case files, at `/lawsuits/mdl-3047`, `/lawsuits/kgm-v-meta`, `/lawsuits/new-mexico-v-meta`), and `hearings.md` (the hearings explainer, at `/hearings`), all rendered via `react-markdown`. `proposal.md` / `notes.md` / `lawsuits.md` are the frontmatter-stripped bodies of the review copies in [`docs/proposals/`](docs/proposals/); edit the doc, regenerate the body. **The lawsuit and hearing content is ledger-first:** each case and each hearing has an evidence-tiered claim ledger in [`docs/distillations/`](docs/distillations/) (a generic distillation home), and the `content/` case files and hubs are *seeded from* those ledgers, curated, not a 1:1 render. Corrections land in the ledger first, then the curated pages are re-seeded on a dated pass. The ledgers are also **published directly** at `/distillations` (one page and one raw `.md` per ledger, via the section whitelist in [`src/lib/distillations.ts`](src/lib/distillations.ts)), so a ledger correction publishes there automatically. The movement brief, the `/report` + `/scorecard` participation tools, the `/for` briefings, the `/remixes` song page, and the `/distillations` pages are hand-built React in [`src/app/`](src/app/) (`page.tsx`, `report/`, `scorecard/`, `for/`, `remixes/`, `distillations/`).

## Deploy

**Live** at [de-amplify.com](https://de-amplify.com) (with `www` redirecting to the apex). Railway builds via nixpacks and runs `npm run start`; healthcheck at `/api/health`. Cloudflare proxies the domain at the Railway origin. No secrets or database, it's a static-ish content site.

**Port note (a real deploy gotcha):** `next start` binds to Railway's injected `$PORT` (currently 8080), not a fixed port. So the Railway custom-domain **target port must be 8080** to match the app. A mismatched target port returns a 502 even though the build and healthcheck both pass, because Railway's healthcheck hits the app's real port while public traffic is routed to the wrong one. Do NOT hardcode `-p <port>` in the start command to "fix" this; that would move the app off the port the healthcheck probes. Set the domain target (or the `PORT` variable) instead.

## License

Content and code are copyright Lee Brown and Lucas Brown / Geeks in the Woods, licensed **CC-BY-4.0** ([`LICENSE`](LICENSE)): use it, adapt it, even commercially, with attribution to de-amplify.com. That is the same ask the site makes of everyone: quote it, cite it, link it.
