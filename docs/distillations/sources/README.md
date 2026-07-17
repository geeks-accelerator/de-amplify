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
