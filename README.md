# de-amplify.com: The Thing It Broke Was the Brake

> Engagement feeds are being sued for addicting kids. The remedies on the table (damages, age bans, or lobbied-for immunity) don't set a standard for what a non-harmful product must *do*. This is a proposal that does: **de-amplify, don't censor.**

**Live:** https://de-amplify.com
**Read:** the movement brief (the homepage), the policy paper [`/proposal`](https://de-amplify.com/proposal) (*The Brake Integrity Standard*), the experimental appendix [`/notes`](https://de-amplify.com/notes), the litigation explainer [`/lawsuits`](https://de-amplify.com/lawsuits) with per-case files ([MDL 3047](https://de-amplify.com/lawsuits/mdl-3047) · [K.G.M.](https://de-amplify.com/lawsuits/kgm-v-meta) · [New Mexico](https://de-amplify.com/lawsuits/new-mexico-v-meta)) · **Act:** [`/report`](https://de-amplify.com/report) · [`/scorecard`](https://de-amplify.com/scorecard)

## What this is

A **framing proposal** and a small movement site: *where* to intervene on the social-media-and-minors problem, and why that surface is more defensible than the ones being fought over in court. Since the six-review rebuild (2026-07-15) it is **three audience-specific documents** on one thesis:

- **Movement brief** (the homepage), the public front. The confession, the self-test (*find the brake, set it, close the app, reopen, did it hold?*), the campaign-safety rules, the demand, `#WheresTheBrake`, and the movement's song (*Where's the Brake*, embedded from Suno as the recognition beside the ask).
- **Policy paper** ([`content/proposal.md`](content/proposal.md), at `/proposal`, *The Brake Integrity Standard*), the substance, for counsel and regulators. The regulable surface is **control integrity**: when a platform offers a control to stop or redirect the feed, it must actually work and persist. Rebuilt on the 2026 legal record (*Moody* / *Doe v. Meta* / *Lemmon* / SB 976 / DSA / AADC), with an explicit tiered-exposure analysis and honest limits (§7).
- **Experimental appendix** ([`content/notes.md`](content/notes.md), at `/notes`), the higher-risk research: the wedge hypothesis and *mechanism* labeling ("you're seeing this because…"), quarantined as research, not policy.

The through-line: **regulate the loop, re-attach consent, de-amplify don't censor.** The harm is the engagement-optimized delivery loop (infinite scroll, autoplay, variable reward), not any individual post; the fix is a brake the user holds that the platform can't quietly override.

**Participation tools:** [`/report`](src/app/report) turns one dead brake into a structured, shareable report; [`/scorecard`](src/app/scorecard) is the seven-part brake-integrity test written out so everyone scores the same way. The report form **stores nothing** by design; storing minor-associated data is the exact liability the movement asks platforms to stop; central aggregation is a future backend step with its own data-retention and moderation policy.

It is deliberately blunt about its **honest limits** ([§7 of the policy paper](content/proposal.md)): age verification as a potential showstopper, the banishment risk, platform counter-narratives, the wedge classifier as the named anti-pattern, and First Amendment / Section 230 exposure (engaged directly, not waved off). A **diagnosis, not a "move slow" slogan**, with AI in the loop amplification only accelerates, which is why the fix has to be structural.

Not a lawsuit. Not a ban. A design target, one anyone can point a regulator, a platform, or a parent at.

## Show up

If the diagnosis is right, make it louder. **Star the repo.** Open an issue. Sharpen the argument (especially the limits, attack them; that's how it gets stronger).

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Geist Mono/Sans · `react-markdown` for the proposal. Deployed on **Railway** (`railway.toml` + `nixpacks.toml`), behind **Cloudflare** (DNS/CDN).

**Discovery layer** (search engines + AI agents): JSON-LD structured data ([`JsonLd.tsx`](src/components/JsonLd.tsx), wired into `layout.tsx` and every page: Organization + WebSite, a per-page Article, the scorecard HowTo, a lawsuits FAQPage, and BreadcrumbList), per-page OpenGraph and Twitter metadata (title/description/image per route, not just the site card), a generated OpenGraph image ([`opengraph-image.tsx`](src/app/opengraph-image.tsx)) alongside an `apple-icon` and a web-app `manifest`, `sitemap.xml` / `robots.txt` (with the `Content-Signal` AI-usage directive), and the agent surfaces `llms.txt` (the curated index), `llms-full.txt` (every document concatenated for deep ingestion), and raw-markdown routes (`/proposal.md`, `/notes.md`, `/lawsuits.md`, and one per case file under `/lawsuits/*.md`) so the documents read plainly for a crawler or an agent, not just the styled pages. Article `dateModified` and sitemap `lastmod` come from git author dates ([`contentDate.ts`](src/lib/contentDate.ts)), not filesystem mtimes, so a fresh deploy does not falsely restamp every page as changed.

## Develop

```bash
npm install
npm run dev      # http://localhost:3333
npm run build    # production build (typecheck + compile)
npm run start    # serve the production build
```

The rendered documents live in [`content/`](content/): `proposal.md` (the policy paper, at `/proposal`), `notes.md` (the appendix, at `/notes`), `lawsuits.md` (the litigation explainer, at `/lawsuits`), and `lawsuits/` (the three per-case files, at `/lawsuits/mdl-3047`, `/lawsuits/kgm-v-meta`, `/lawsuits/new-mexico-v-meta`), all rendered via `react-markdown`. `proposal.md` / `notes.md` / `lawsuits.md` are the frontmatter-stripped bodies of the review copies in [`docs/proposals/`](docs/proposals/); edit the doc, regenerate the body. **The lawsuit content is ledger-first:** each case has an evidence-tiered claim ledger in [`docs/distillations/`](docs/distillations/) (a generic distillation home, not lawsuit-specific), and the `content/lawsuits/` case files are *seeded from* those ledgers, curated, not a 1:1 render and not a build-time reference. Corrections land in the ledger first, then the case file (and the hub explainer) are re-seeded on a dated pass. The movement brief and the `/report` + `/scorecard` participation tools are hand-built React in [`src/app/`](src/app/) (`page.tsx`, `report/`, `scorecard/`).

## Deploy

**Live** at [de-amplify.com](https://de-amplify.com) (with `www` redirecting to the apex). Railway builds via nixpacks and runs `npm run start`; healthcheck at `/api/health`. Cloudflare proxies the domain at the Railway origin. No secrets or database, it's a static-ish content site.

**Port note (a real deploy gotcha):** `next start` binds to Railway's injected `$PORT` (currently 8080), not a fixed port. So the Railway custom-domain **target port must be 8080** to match the app. A mismatched target port returns a 502 even though the build and healthcheck both pass, because Railway's healthcheck hits the app's real port while public traffic is routed to the wrong one. Do NOT hardcode `-p <port>` in the start command to "fix" this; that would move the app off the port the healthcheck probes. Set the domain target (or the `PORT` variable) instead.
