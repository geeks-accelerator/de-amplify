# How this project generates per-page OG share images

A reference guide, written to be portable. de-amplify.com gives every route its own designed share card, generated at build time from one template, with zero runtime endpoints. This document explains the stack, the flow, the why behind each choice, and the gotchas, in enough detail to port the pattern to another project.

Companion pattern: this is the **static-site half** of the design space. If your project has unbounded dynamic entities (articles by slug, user profiles, CMS content), you want the other half: request-time API routes with a disk cache, stale-while-revalidate, and signed URLs. The decision table at the end tells you which half you are in.

## The stack at a glance

- **`ImageResponse` from `next/og`** (Next's wrapper around Satori + resvg). You write JSX with a strict CSS subset; it rasterizes to PNG on the server. No headless browser.
- **One colocated `opengraph-image.tsx` per route segment** (`src/app/lawsuits/opengraph-image.tsx`, `src/app/for/parents/opengraph-image.tsx`, ...). Next's file convention turns each into the route's `og:image` automatically, emitting `og:image`, `og:image:width/height/type`, and `og:image:alt` (from the file's `alt` export) with no manual metadata wiring.
- **A shared template lib** (`src/lib/og/template.tsx`) holds everything the route files have in common: design tokens, font loading, the alpha-flattening helper, the card layout. Each route file is ~12 lines: export `alt`/`size`/`contentType`, call `ogCard({...})` with that page's copy.
- **Everything renders at `next build`.** On a fully static site the images are prerendered PNGs; there is no runtime function, no cold start, no cache to manage, and nothing for a stranger to abuse.

## The request flow (there barely is one)

1. At build time, Next runs each `opengraph-image.tsx` once and writes the PNG into the static output.
2. The corresponding page's HTML gets `<meta property="og:image" content="https://site.com/route/opengraph-image?<content-hash>">` injected automatically. The content-hash query param changes when the image changes, which gives you cache-busting on redeploys for free.
3. A social crawler (X, Discord, Slack, iMessage, WhatsApp) fetches the URL and gets a static file. Nothing renders on demand.

That is the entire flow. The build is the cache.

## The shared template (`src/lib/og/template.tsx`)

The lib exports four things:

**1. Tokens, inlined as hex constants.** Tailwind CSS variables do not resolve inside satori, so the design system's colors are restated as plain hex in this one file. If your project has a tokens file, generate these constants from it; do not reference `var(--anything)` in card JSX.

**2. `flatten(hex, alpha)`, the alpha pre-mixer.** The site's design language is built on opacity tokens (`bone/55`, `brake/90`). Satori is unreliable with rgba in some positions, so `flatten()` pre-mixes any color at any alpha against the background into a flat hex:

```ts
export function flatten(hex: string, alpha: number): string {
  const n = parseInt(hex.slice(1), 16);
  const mix = (fg: number, bg: number) =>
    Math.round(alpha * fg + (1 - alpha) * bg).toString(16).padStart(2, "0");
  return `#${mix((n >> 16) & 255, BG.r)}${mix((n >> 8) & 255, BG.g)}${mix(n & 255, BG.b)}`;
}
```

This one helper is what lets the cards use the exact same muted-text vocabulary as the site.

**3. `loadFonts()`, memoized at module scope.** Satori takes font bytes explicitly (TTF/OTF/WOFF; **no WOFF2, no variable fonts**), with no system-font fallback. Read the TTFs from disk once and cache the buffers; register every weight you use separately (a `fontWeight: 700` with only 400 registered silently falls back):

```ts
let fonts = null;
function loadFonts() {
  if (!fonts) {
    const dir = path.join(process.cwd(), "node_modules/geist/dist/fonts/geist-mono");
    fonts = [
      { name: "GeistMono", data: fs.readFileSync(path.join(dir, "GeistMono-Regular.ttf")), weight: 400, style: "normal" },
      { name: "GeistMono", data: fs.readFileSync(path.join(dir, "GeistMono-Bold.ttf")), weight: 700, style: "normal" },
    ];
  }
  return fonts;
}
```

**4. `ogCard(props)`, the layout.** One three-band composition, 1200x630:

- **Top band:** an eyebrow (small caps, wide letter-spacing, accent color) or, for the home card, a terminal-prompt line. Whatever your site's recurring label pattern is, this is where it goes.
- **Middle band:** the title (bold, `textWrap: "balance"`, length-stepped size: over 64 chars renders at 54px, over 36 at 64px, else 80px), an optional one-line sub, and optional **status chips** (short bordered pills, four fit comfortably).
- **Bottom band:** wordmark + hashtag/domain, muted.
- Plus a 1px accent-tinted inner border so a dark card does not bleed edgelessly into dark-mode feeds.

Props are `{ eyebrow?, prompt?, title, sub?, chips?, accent? }`. The `accent` is semantic, not decorative: brake-red marks this site's confession surfaces, signal-blue its fix surfaces. Give your accents meaning and card color becomes information.

## A route file, in full

```tsx
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt = "The social media addiction lawsuits, explained: verdicts, requests, and estimates, labeled honestly.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "the lawsuits · the record, kept honest",
    title: "The social media addiction lawsuits, explained",
    chips: ["$6M jury-found", "$375M jury-found", "~$953M requested", "~$1.4T estimate"],
    accent: "brake",
  });
}
```

Card copy is authored per page, not derived from the page title. A card is a poster, not a title tag: shorter, punchier, and allowed to carry data (the chips) the SEO title cannot.

## The why behind the choices

- **Why colocated files instead of an `/api/og?title=...` route?** Three reasons. Static: the images build with the site, so crawlers hit a file, never a function. Safe: a query-param endpoint lets anyone render your branding around arbitrary text (brand-impersonation) and hammer your compute; known routes need no params, so the attack surface simply does not exist. Simple: Next writes all the meta tags, including alt.
- **Why PNG, not JPEG via sharp?** These cards are flat dark vector-ish art; PNG compresses them to ~52-67KB, well under WhatsApp's ~300KB recompression threshold. JPEG wins for photographic backgrounds; adding a native dependency (sharp) to save nothing is a cost, not an optimization.
- **Why no disk cache or stale-while-revalidate?** Those solve request-time rendering (a crawler waiting on a cold render). Build-time generation makes the problem not exist. If you port this to a site with dynamic entities, that is the signal you are in the other half of the design space (see the decision table).
- **Why 1200x630?** Still the universal 1.91:1 standard across X, Facebook, LinkedIn, Discord, Slack, iMessage, WhatsApp. Keep critical content in the center ~1080x600; X's large card crops toward 2:1 from center. (A sibling project learned this with a 1200x675 card that lost its bottom row on every X share.)
- **Why per-card `alt` exports?** Accessibility, and some surfaces render the alt when the image fails to load. Next emits `og:image:alt` from it automatically.

## The gotcha that actually bit us

**Config-level `openGraph.images` silently overrides colocated files.** Our pages had explicit `metadata.openGraph.images` entries pointing at the root image (added before per-page cards existed). With those present, every page kept serving the root card even after the colocated files were created and building successfully. The fix is to delete the explicit `images` arrays from page metadata wherever a colocated `opengraph-image.tsx` exists and let the file convention win.

**Verify in output, not in source:** `curl` the built page and grep for `og:image`. The build succeeding and the image URL being right are two different facts.

## Satori guardrails (each one has bitten someone)

- **Every element with children needs `display: "flex"` explicitly.** ImageResponse errors on multi-child divs without it.
- Flexbox only; no `display: grid`, no `z-index` (paint order is document order), no `calc()`.
- Use `"transparent"`, never `"none"`, for backgrounds. Shorthands can throw parse errors.
- Prefer flat hex over rgba in odd positions; pre-mix alphas (see `flatten()`).
- Fonts: TTF/OTF/WOFF only, every weight registered separately, buffers memoized.
- `textWrap: "balance"` and `lineClamp` are supported; there is no auto-shrink, so step font size by title length (fine for authored titles) or use a measured-fit wrapper for CMS text.
- Remote images cannot be fetched by satori; anything embedded must be a data URI or buffer, fetched by your code, with a timeout and a fail-soft fallback.
- Debug layout weirdness with `{ debug: true }` (draws bounding boxes). Unsupported CSS is silently ignored, which is worse than erroring.

## Cache behavior on social platforms

Platforms cache scraped images hard and **do not re-scrape on your redeploy**. Next's content-hash query param means *new* shares always get the current card. For *already-shared* URLs, use each platform's tool: Facebook Sharing Debugger, X Card Validator, LinkedIn Post Inspector. Discord caches per-channel with no official purge. Design accordingly: put dates ("trial: aug 12") in chips knowing stale shares will show stale chips until re-shared.

## Verification checklist

- [ ] `next build` succeeds; every `/route/opengraph-image` appears in the route list as static.
- [ ] `curl` a built page: `og:image` points at the route's own image URL, not a shared one.
- [ ] Fetch each image; confirm 200, `image/png`, and a sane size (flat art should be well under 150KB).
- [ ] Eyeball every card at full size AND at ~200px wide (DM-app scale); anything under ~28px of type is illegible small.
- [ ] `twitter:card` is `summary_large_image` in shared metadata (X falls back to og:image; separate `twitter-image.tsx` files are unnecessary).
- [ ] `metadataBase` is set in the root layout so image URLs are absolute.
- [ ] Paste a URL into a real X draft / Discord message after deploy.

## Decision table: this pattern or the API-route pattern?

| Question | Colocated build-time (this project) | API route + cache (dynamic sites) |
|---|---|---|
| How many shareable pages? | Known, finite (here: 14) | Unbounded (per-article, per-user) |
| Content source | Authored copy in the repo | Database/CMS at request time |
| Images in cards | None or bundled assets | Remote covers/avatars (data-URI fetch, timeout, fail-soft) |
| Cache | The build is the cache | Disk cache + TTL + stale-while-revalidate |
| Output format | PNG (flat art) | JPEG via sharp (photo backgrounds) |
| Abuse surface | None | Query params: needs HMAC-signed URLs + privacy gates on non-public entities |
| Runtime | None (static files) | `runtime = "nodejs"` (sharp + fs) |

If any row in the right column describes your project, port the right column's architecture instead; the shared-template idea, the `flatten()` helper, the satori guardrails, and the verification checklist carry over to both.

## Minimal shape to port

```
src/lib/og/template.tsx          // tokens (inline hex), flatten(), loadFonts() memoized, ogCard() layout
src/app/<route>/opengraph-image.tsx   // per route: alt + size + contentType + ogCard({page copy})
```

Delete any explicit `openGraph.images` from page metadata where a colocated file exists. Set `metadataBase` and `twitter.card`. Build, curl, eyeball, ship.
