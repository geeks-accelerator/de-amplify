## What this changes

<!-- One or two sentences. -->

## Why

<!-- What gap, bug, or weakness does it address? -->

## Checklist

- [ ] `npm run build` passes (typecheck + compile)
- [ ] `npm run lint` passes
- [ ] No em-dashes or smart quotes (house style; see CLAUDE.md). `docs/distillations/sources/` and `docs/distillations/reviews/` are exempt: they are verbatim evidence, do not normalize them
- [ ] Any legal or factual claim traces to a primary source, with an as-of date
- [ ] Factual corrections landed in the ledger (`docs/distillations/`) first, not only on the page
- [ ] Any re-seeded quote checked for **speaker**, not just verbatim text (the parenthetical in a witness quote-bank names the questioner)
- [ ] New or changed route wired into every discovery surface: `sitemap.ts`, `llms.txt`, `llms-full.txt`, agent-card `_links`, and a raw `.md` route where it is a document
- [ ] Real text clears WCAG AA 4.5:1 (`text-bone/50` is the floor); decorative glyphs are `aria-hidden`
- [ ] No references to other or sibling repositories
- [ ] Aimed at the loop, not at any person
