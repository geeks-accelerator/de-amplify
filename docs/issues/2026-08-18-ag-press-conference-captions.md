---
title: "The attorneys general press conference has no fetchable caption track yet"
status: blocked
opened: 2026-08-18
closes_when: "yt-dlp reports live_status was_live for the recording and the caption fetch returns a non-empty vtt file"
trigger: "yt-dlp --skip-download --print \"%(live_status)s\" https://www.youtube.com/watch?v=N3FvvwxW64w"
surface: "none, and this one cannot change: an automatic caption track is CAPTION-ASR, which is never PUBLISHABLE here, so the recording can only ever become a pointer for other research"
related: ["docs/research/single-source/README.md", "docs/plans/2026-08-18-single-source-to-primary.md"]
---

# The attorneys general press conference has no fetchable caption track yet

AGs Bonta, Weiser and Davenport, on the California Department of Justice channel, following the
first day of the MDL trial. One hour 47 minutes. **It is the highest-value item on the video list
and it is not in the corpus**, because it is party officials speaking on the record on their own
official channel, which outranks every secondary source there.

**This is not a failed fetch. It is a fetch that is too early**, and getting that wrong twice is why
this issue exists at all. YouTube reports `live_status: post_live`, meaning the stream has ended and
the archive is still being processed into a final VOD. Caption fragments are not served during that
window, which produces exactly the observed symptom: a track advertised, `Did not get any data
blocks`, a zero-byte `.part` file.

The corpus README reasoned its way to that on the first pass. Two later summaries kept the symptom
and dropped the mechanism, which turned a diagnosed wait into what read like dead research. **A
trigger beats a reminder**, so the check is in the frontmatter rather than a note to try again
sometime.

## What it would be worth

A pointer, and a good one. The most valuable thing it could point at is whether the attorneys
general said "$200 billion" out loud, which is the open question in the MDL ledger's Tensions. It
could not settle that even so: only the transcript at docket entry 540 can, and `CAPTION-ASR` never
reaches a page as a quotation.

If the California Department of Justice ever posts a human transcript, or an uploaded caption track
rather than an automatic one, that is a different document at a different tier. `--list-subs`
reporting **subtitles** rather than only **automatic captions** is how to tell.
