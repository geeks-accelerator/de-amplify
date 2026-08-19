---
title: "The Tennessee complaint cache carries a PDF artifact that makes one faithful quote unverifiable"
status: open
opened: 2026-08-18
closes_when: "the complaint is re-extracted from the original PDF with list labels suppressed, and the known deviation is removed from check-quotes.mjs"
trigger: "grep -c '^Lbl' docs/distillations/sources/tennessee-2023-10-24-unredacted-complaint.txt"
surface: "none: the ledger and the page are correct, only the machine verification is incomplete"
related: ["tennessee-v-meta", "docs/distillations/sources/README.md"]
---

# The Tennessee complaint cache carries a PDF artifact that makes one faithful quote unverifiable

Registering the Tennessee ledger in `check:quotes` on 2026-08-18 produced this repository's **first
case of a cache being at fault rather than a ledger**.

The `-raw` extraction carries the literal string `Lbl` **364 times**, a tagged-PDF list-label
artifact. It prefixes most numbered paragraphs and, at page breaks, appears as runs of standalone
lines interleaved with the page footer. At paragraph 411 that lands mid-word, between
`Instagram's "well-` and `being" related platform features`, with a statutory citation sitting in
the gap.

**That is a sixth failure mode beside the five documented normalizations, and none of them reaches
it**, because the interposed text is real page furniture rather than a predictable token.

## Why it is a known deviation and not an allowlist entry

An allowlist entry asserts that a span is **deliberately not from** the cached source. This span
**is** from it, verifiably, at paragraph 411. Recording it as a deviation says the true thing: from
the source, currently unverifiable, here is why and here is how to close it. Keeping those two apart
is what stops an allowlist becoming the place defects hide.

## Generalisation worth keeping either way

Grep `^Lbl` on any new tagged-PDF cache, the same way the `[GRAPHIC NOT AVAILABLE IN TIFF FORMAT]`
marker gets grepped on a new GPO transcript. Both are one command that says in advance how much of a
document is unreachable.
