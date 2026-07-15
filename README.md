# ibroketheminors.com — The Thing It Broke Was the Brake

> Engagement feeds are being sued for addicting kids. The remedies on the table — damages, age bans, or lobbied-for immunity — don't set a standard for what a non-harmful product must *do*. This is a proposal that does: **de-amplify, don't censor.**

**Live:** https://ibroketheminors.com
**The full proposal:** [`/proposal`](https://ibroketheminors.com/proposal) · source at [`content/proposal.md`](content/proposal.md)

## What this is

A **framing proposal** and a small movement site. It argues *where* to intervene on the social-media-and-minors problem, and why that surface is more defensible than the ones being fought over in court:

- **Regulate the loop, not the content.** The harm is the engagement-optimized delivery loop (infinite scroll, autoplay, variable reward), not any individual post. That's the speech-safe, regulable surface.
- **Re-attach consent to the act.** The controls are decorative — a dead man's switch that doesn't stop the machine. "Do the user's controls actually work?" is measurable and already-legal.
- **De-amplify, don't remove.** Two knobs, for minors: (1) content-neutral de-amplification (change the ranking objective — no wedge classifier needed), and (2) a *label*, not a *filter*, as a parental control (surface the wedge so the kid learns to see it; a label builds critical thinking, a filter removes the material it's practiced on).

It is deliberately blunt about its **honest limits** (who-defines-a-wedge doesn't dissolve; the auto-classifier is the named anti-pattern; First Amendment / Section 230 are unaddressed; it's a frame, not a solution). The full list is [§7 of the proposal](content/proposal.md). This is a **diagnosis, not a "move slow" slogan** — with AI in the loop, amplification only accelerates, which is why the fix has to be structural.

Not a lawsuit. Not a ban. A design target — one anyone can point a regulator, a platform, or a parent at.

## Show up

If the diagnosis is right, make it louder. **Star the repo.** Open an issue. Sharpen the argument (especially the limits — attack them; that's how it gets stronger).

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Geist Mono/Sans · `react-markdown` for the proposal. Deployed on **Railway** (`railway.toml` + `nixpacks.toml`), behind **Cloudflare** (DNS/CDN).

## Develop

```bash
npm install
npm run dev      # http://localhost:3333
npm run build    # production build (typecheck + compile)
npm run start    # serve the production build
```

The proposal is one markdown file — [`content/proposal.md`](content/proposal.md) — rendered at `/proposal`. Edit the file, the page updates. The landing copy lives in `src/app/page.tsx`.

## Deploy

Railway builds via nixpacks and runs `npm run start`; healthcheck at `/api/health`. Cloudflare proxies `ibroketheminors.com` at the Railway origin. No secrets or database — it's a static-ish content site.
