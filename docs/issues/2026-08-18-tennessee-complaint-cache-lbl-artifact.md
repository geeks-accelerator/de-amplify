---
title: "The Tennessee complaint cache carries a PDF artifact that makes one faithful quote unverifiable"
status: open
opened: 2026-08-18
closes_when: "an extraction of the complaint exists in which paragraph 411 reads continuously across the page break, and all currently verifying Tennessee spans still verify against it"
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

## Two routes tested and eliminated, 2026-08-20

The source PDF was re-fetched from the Tennessee Attorney General (1.76 MB, HTTP 200) and both
obvious fixes were tried. **Neither works**, and recording that is the point: the next person should
not spend the afternoon rediscovering it.

**Switching `pdftotext` mode does nothing.** The artifact count is identical across `-layout`,
`-raw` and the default: **377 occurrences of `Lbl` in every one**. It is not a mode-specific
extraction quirk, it is in the tagged structure of the document.

**Stripping `Lbl` alone does not fix the span.** A targeted clean takes 377 down to 13, and
paragraph 411 still reads:

    ...the efficacy of Instagram's "well-
    TENN. CODE ANN. § 47-18-104(a) and (b)
    73
    being" related platform features...

**The running footer and the page number are still sitting inside the sentence.** That is exactly
what the `KNOWN_DEVIATIONS` entry predicted when it said no normalization reaches this, so the
recorded diagnosis is now verified rather than merely reasoned.

## What is left

A page-furniture normalization that strips a declared, per-cache running footer would fix it. That
is a **new normalization for one span**, and this repository has a documented history of one narrow
case becoming a standing multi-file gate, so it should not be added casually. The honest options are
a different extraction tool that respects the tagged structure, or leaving the single span as a
recorded deviation, which costs one quotation and no accuracy.

Note the closing condition has been tightened. It is no longer "re-extracted with labels
suppressed", which the tests above show is insufficient, but the actual outcome wanted: paragraph
411 readable **and** every currently verifying Tennessee span still verifying. A new cache that
fixes one quotation and breaks fourteen is not a fix.
