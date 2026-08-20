---
resolution: "Transcribed 2026-08-20 by hosted ASR, accepting the CAPTION-ASR ceiling, and not from the recording this issue was watching: the official CA DOJ upload omits the entire Q&A, and a PBS NewsHour recording of the same event carries it. Cached as sources/ag-press-conference-2026-08-18-asr.txt, quarantined from check:quotes by filename, and it answered the MDL ledger's open Tension on what the states will seek (claims 22d to 22h)."
closed: 2026-08-20
title: "The attorneys general press conference has no fetchable caption track yet"
status: closed
opened: 2026-08-18
closes_when: "a usable transcript exists by some route: YouTube generates captions later, the California Department of Justice publishes one, or a decision is taken to run local speech-to-text and accept the CAPTION-ASR ceiling"
trigger: "yt-dlp --list-subs https://www.youtube.com/watch?v=N3FvvwxW64w"
surface: "none, and this one cannot change: an automatic caption track is CAPTION-ASR, which is never PUBLISHABLE here, so the recording can only ever become a pointer for other research"
related: ["docs/research/single-source/README.md", "docs/plans/2026-08-18-single-source-to-primary.md", "mdl-3047"]
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

## Closed 2026-08-20, by a route this issue did not contemplate

Transcribed with hosted ASR (AssemblyAI, speaker diarization on), accepting the `CAPTION-ASR`
ceiling that route three below always carried. Two things about how it closed are worth more than
the transcript.

### The recording this issue was watching is not the one that had the answer

Every retry above was run against `N3FvvwxW64w`, the California Department of Justice upload,
because it is the official channel and the official channel is the best source. **It is 23:26 long
and it ends on the words inviting questions.** The entire question-and-answer session is absent from
the official record of the event.

Recordings of the same press conference by other organisations are longer:

| Recording | Duration |
|---|---|
| PBS NewsHour (`KWppdXmS9Us`) | **52:20** |
| Fox News (`SpYL8gj1mhg`) | 50:41 |
| KTVU FOX 2 (`o1gjjESzabg`) | 32:36 |
| Forbes (`VIJF_-HYbAw`) | 23:26 |
| **CA DOJ, the official channel** (`N3FvvwxW64w`) | **23:26** |

Everything of evidentiary value is in the 29 minutes the official upload does not contain. **An
official channel is not automatically the fullest record of an official event**, and this issue spent
two days retrying a truncated one without ever checking whether a longer recording existed. The
check that would have found it is one command and no API: search for the event, sort by duration.

### The test this issue told the next reader to use does not work

Above, under what it would be worth: `--list-subs` reporting **subtitles** rather than only
**automatic captions** was given as how to tell a human transcript from a machine one. **That is
wrong and it is now disproven on this very event.** PBS's track is listed under subtitles and is
plainly machine output: it renders the California attorney general introducing his New Jersey
colleague as though he were himself the attorney general of New Jersey, and it opens with a stray
pronoun. The distinction yt-dlp draws is **how a track was attached, not who wrote it.** A
broadcaster running its own ASR and uploading the result produces a track in the subtitles column.

Worse for the original reasoning: the hosted ASR was **more accurate than the uploaded track** on
the same audio, getting that introduction right where the track PBS uploaded got it wrong. So the
tier ladder this issue assumed, with uploaded tracks above machine ones, does not hold either.

### What the transcript was worth

The open question in the MDL ledger's Tensions was what the states will actually seek, with the
widely reported $200 billion suspected of being Meta's revenue misread as a demand. At 32:24 a
Reuters reporter put exactly that discrepancy to the attorneys general. The answer is in the ledger
as claims 22d to 22h: the states are not asking for $1.4 trillion, that figure is Meta's own
arithmetic maximum, $200 billion is Meta's annual revenue, the case is for civil penalties,
restitution and disgorgement rather than damages, and the final amount is left to the judge.

**It is a pointer, exactly as the `surface` field says, and the surface field stands.** None of it is
quoted on any page and none of it can be: the cache is quarantined from `npm run check:quotes` by a
filename rule added the same day, with controls in both directions in the script's self-test. What
makes those claims usable at OBSERVED tier is not the confidence score but triangulation across
three transcription systems sharing no pipeline, and the fact that where they touch the money
question they agree with Dkt 473, which is primary and cached.
