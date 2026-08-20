---
title: "The attorneys general press conference has no fetchable caption track yet"
status: open
opened: 2026-08-18
closes_when: "a usable transcript exists by some route: YouTube generates captions later, the California Department of Justice publishes one, or a decision is taken to run local speech-to-text and accept the CAPTION-ASR ceiling"
trigger: "yt-dlp --list-subs https://www.youtube.com/watch?v=N3FvvwxW64w"
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

## The trigger fired, and the answer was no. 2026-08-20

`live_status` moved from `post_live` to **`was_live`**: the archive finished processing, exactly as
predicted. The caption fetch was retried immediately and returned **"There are no subtitles for the
requested languages"**.

`--list-subs` now reports, for this video:

    N3FvvwxW64w has no automatic captions
    N3FvvwxW64w has no subtitles

**Positive control**, because a tool reporting nothing twice is a claim about the tool: an ordinary
public video returns a full automatic-caption list plus manual English and German tracks on the same
command, so the reader works and this recording genuinely has neither.

## What that means, and it is not what this issue assumed

The `en vtt` automatic track advertised while the video was `post_live` **was provisional and did
not survive processing**. It was never a track that had not finished generating; it was an
advertisement that came to nothing. So the original prediction was right about the mechanism
(`post_live` explains the missing fragments) and wrong about the outcome (**finishing processing
did not produce captions**).

**Waiting no longer resolves this**, which is why the status moved from blocked to open and the
trigger changed from a status check to a track listing. YouTube can still generate captions for a
video later, so the listing is worth re-running occasionally, but there is no longer a specific
event to wait for.

## The routes that remain, and their ceilings

1. **YouTube generates captions later.** Cheap to check, unpredictable.
2. **The California Department of Justice publishes a transcript.** This is the only route that produces a **quotable primary**. An official transcript from the office that held the press conference is a different tier entirely from anything below.
3. **Run local speech-to-text on the audio.** Technically available and it does not change the ceiling: the output is `CAPTION-ASR`, never `PUBLISHABLE` here, useful only as a pointer. Worth doing only if a specific question makes a pointer valuable, and the obvious one, whether the attorneys general said "$200 billion" out loud, would still need docket entry 540 to settle.
