# Hearing-distillation source cache

Ground-truth transcripts for the `hearing-*` distillations in this folder, cached so quote
verification and line-anchored locators survive link rot and are re-runnable by anyone.

## Files

- `CHRG-118shrg57444.txt`: official transcript of the Jan 31, 2024 Senate Judiciary hearing
  "Big Tech and the Online Child Sexual Exploitation Crisis" (S.Hrg. 118-497). U.S. Government
  work, public domain. Derived 2026-07-16 from
  https://www.govinfo.gov/content/pkg/CHRG-118shrg57444/html/CHRG-118shrg57444.htm the same way
  as the file below (tags stripped, entities unescaped, otherwise byte-identical to the GPO text).
- `senate-2026-05-13-testimony-combined.txt`: the four official witness written-testimony PDFs
  (Lanier, Bogard, Leary, Norring) for the May 13, 2026 Senate Judiciary "From the Courtroom to
  Congress" hearing, downloaded 2026-07-16 from the committee hearing page, extracted with
  pdftotext -layout, and concatenated with "================ WITNESS: <name> ================"
  separators. Used because the official GPO transcript is not yet published (TIER-DOWN source).
- `house-2025-12-02-testimony-combined.txt`: the four official witness written-testimony PDFs
  (Berkman, Thayer, Lekas, Ruane) for the Dec 2, 2025 House Energy & Commerce "Legislative
  Solutions to Protect Children and Teens Online" hearing (docs.house.gov event 118714),
  downloaded 2026-07-16 and combined the same way (TIER-DOWN source).
- `CHRG-119hhrg62241.txt`: official transcript of that same Dec 2, 2025 House hearing
  (Serial No. 119-44). U.S. Government work, public domain. Derived 2026-07-25 from
  https://www.govinfo.gov/content/pkg/CHRG-119hhrg62241/html/CHRG-119hhrg62241.htm the same way
  as the Senate transcripts. **Read this before citing it: the HTML carries the SPOKEN hearing
  only** (opening statements, the four oral statements, and the live question and answer), ending
  at "[Whereupon, at 1:10 p.m., the subcommittee was adjourned.]". The witnesses' **prepared
  statements are in the official record as page images, not text**, so they are absent from this
  cache and from any text extraction of the 65 MB PDF. Publication of a transcript is therefore
  not the same as verifiability of everything printed in it. As of 2026-07-25 the Dec 2025 ledger's
  quote-bank has not been re-anchored to this file; use `house-2025-12-02-testimony-combined.txt`
  for its written-testimony quotes and this file only for live Q&A.
- `CHRG-118shrg60432.txt`: official transcript of the Nov 7, 2023 Senate Judiciary
  Subcommittee hearing "Social Media and the Teen Mental Health Crisis" (S.Hrg. 118-663).
  U.S. Government work, public domain. Derived 2026-07-16 from
  https://www.govinfo.gov/content/pkg/CHRG-118shrg60432/html/CHRG-118shrg60432.htm by
  stripping HTML tags and unescaping entities; text content otherwise byte-identical to the
  GPO publication, including its `--` punctuation and hard line wraps. Line numbers in the
  distillation's locators refer to THIS file.
- `hearing-2023-11-07-quote-allowlist.txt`: the drafter-prose quoted spans in the Nov 2023
  distillation that are deliberately NOT transcript quotes (rhetorical or framing quotes in
  the coverage note and tensions sections). Everything quoted in the distillation must
  either verify against the transcript or appear here; nothing may fail silently.
  The other three distillations currently need no allowlist (every quoted span verifies
  directly against their sources).

## Verifying

Every quoted span in each `hearing-*` distillation (ledger, reader summary, coverage note,
and quote-bank) was verified as a verbatim, whitespace-normalized substring of that
document's cached source in this folder, or of the drafter-prose allowlist where one exists.
Verbatim quotes reproduce their source punctuation exactly, including the GPO transcripts'
ASCII `--` and the testimony PDFs' curly quotes, and are exempt from the site's punctuation
style.

The caches are committed here precisely so the check is reproducible: any substring-matching
tool can confirm that a quoted span appears in its named source. Each distillation maps to
one source cache, and its "source lines N-M" locators refer to line numbers in that file:

- `hearing-2023-11-07-teen-mental-health.md` -> `CHRG-118shrg60432.txt`
  (plus `hearing-2023-11-07-quote-allowlist.txt` for its deliberate drafter-prose spans)
- `hearing-2024-01-31-big-tech-child-safety.md` -> `CHRG-118shrg57444.txt`
- `hearing-2026-05-13-courtroom-to-congress.md` -> `senate-2026-05-13-testimony-combined.txt`
- `hearing-2025-12-02-legislative-solutions.md` -> `house-2025-12-02-testimony-combined.txt`

Re-run 2026-07-24 after new quoted spans were added to the Nov 2023 ledger and to
`content/hearings.md`; all resolve against `CHRG-118shrg60432.txt`.

## Three normalizations the check is sensitive to (2026-07-25)

A full re-run over all four hearing ledgers on 2026-07-25 verified **245 of 246** quoted spans.
Getting there required three normalizations, and each one flips a *different* set of quotes, so a
checker that applies some but not others produces false failures that look like fidelity problems:

1. **Curly punctuation.** The testimony PDFs use curly apostrophes and quotes; the ledgers use
   straight ones. Without folding these together, roughly twenty spans in the May 2026 ledger
   fail. None of them is a real defect.
2. **Elision.** A ledger quote containing `...` is not one string, it is several fragments with
   material deliberately omitted between them. It must be split on the ellipsis and each fragment
   checked separately, or every elided quote fails.
3. **GPO hyphenated line wraps.** The Senate transcripts break words across lines, and the
   extraction preserves the space: `core well- being topics`. The ledger correctly quotes
   `well-being`. Rejoining `-\s+` before comparing is what makes that quote verify.

**The single span that does not verify under any combination** is in the Dec 2025 ledger:
`Up to 95% of youth ages 13-17`, where the written testimony reads `13–17` with an EN DASH and
the ledger wrote a hyphen. That is a real, if trivial, deviation from verbatim, and it exposes a
tension worth naming: the ledgers state that their verbatim quotes reproduce source punctuation
exactly and are exempt from house style, but the house-style sweep exempts only `sources/` and
`reviews/`, not the ledgers themselves. Restoring the en dash would make the ledger fail the
sweep. It is left as a hyphen deliberately, inside a numeric range where the dash carries no
meaning, and recorded here rather than silently carried.

## What this check does NOT cover (read before trusting a green result)

**Substring matching proves a quote is verbatim. It says nothing about who said it.**

This is not hypothetical. On 2026-07-24 the `/hearings` page was found attributing
Arturo Bejar's line "It's a product. It needs to be different. It has to change."
to Sen. Blumenthal. It passed every check described above, because the string
genuinely is in the transcript, at line 1951. Only Bejar said it; Blumenthal was
the questioner.

The trap is a convention in the ledgers themselves. In a witness quote-bank the
speaker is the **subsection heading**, and the senator named in each parenthetical
is the **questioner whose round the line came in**. Read as an attribution, that
parenthetical says the opposite of what it means. The Nov 2023 ledger now states
the convention explicitly at the top of its witness quote-bank; the other hearing
ledgers use the same convention.

So the verification protocol has two halves, and only the first is mechanical:

1. **Verbatim** (tooling): the span is an exact whitespace-normalized substring
   of the named cache, or is in the allowlist.
2. **Attribution** (by eye, every time a quote is re-seeded onto a page): open
   the cache at the locator line and read upward to the nearest `Mr./Ms. <name>.`
   or `Chair/Senator <name>.` speaker marker. That marker, not the parenthetical,
   is the speaker.

## Punctuation exemption

The `.txt` caches in this folder are verbatim government publications and
**must never be normalized to the site's punctuation style**: their ASCII `--`,
curly quotes, and hard line wraps are part of the record, and the ledgers' line
locators point at specific lines in these exact files. The sibling
`docs/distillations/reviews/` folder is exempt for the same reason (raw output
from external review models, referenced as `raw_audit_trail` in ledger
frontmatter). Both are excluded from the house-style sweep in CLAUDE.md.
