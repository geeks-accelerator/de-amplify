# Hearing-distillation source cache

Ground-truth transcripts for the `hearing-*` distillations in this folder, cached so quote
verification and line-anchored locators survive link rot and are re-runnable by anyone.

## Files

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

## Verifying

From the gitwverse repo (the federation tooling home):

```bash
python3 scripts/hearing_quote_check.py \
  ../de-amplify/docs/distillations/hearing-2023-11-07-teen-mental-health.md \
  ../de-amplify/docs/distillations/sources/CHRG-118shrg60432.txt \
  --allow ../de-amplify/docs/distillations/sources/hearing-2023-11-07-quote-allowlist.txt \
  --anchors
```

Exit code 0 means every quoted span in the whole document (ledger, summary, coverage note,
quote-bank) is a verbatim whitespace-normalized substring of the official transcript or an
allowlisted prose span. Verbatim quotes reproduce GPO punctuation exactly (including `--`)
and are exempt from site punctuation style.
