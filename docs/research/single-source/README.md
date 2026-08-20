# Single-source distillations

Per-article extractions of the coverage of a single event, one file per source document.
These are **working analysis, not evidence ledgers**, and the difference is load-bearing:

- The ledgers in `docs/distillations/` are multi-source, primary-source-anchored, registered in
  `src/lib/distillations.ts`, and **published** at `/distillations/<slug>`.
- These files are **not registered and must not be**. They distil *secondary* coverage. Publishing
  them would put journalists' characterisations of a court proceeding on a site whose entire
  proposition is that claims trace to primary sources.

Their job is to be the disciplined middle step between "I read the news" and "the ledger changed":
they make every claim in the coverage explicit and tagged, so the re-seed pass acts on a tagged
inventory rather than on recall.

## Method

Nine steps, applied to one document at a time. The organising insight is that **sections within a
single document behave like quasi-independent sources**: a news article's lede, its courtroom
section, its background paragraphs and its market-reaction coda use different vocabulary for
related claims, exactly as independent authors do. So the multi-source discipline transfers.

1. **Read** and identify internal structure. Those sections are the quasi-independent sources.
2. **Extract** atomic statements. One claim each, independently falsifiable, located.
   Three passes, and the order matters because each depends on the last:
   obvious claims, then implicit assumptions, then **negative** claims (what the document denies).
3. **Tag** against a taxonomy designed from the output goal (below).
4. **Cluster** by intent: same meaning, different words.
5. **Tensions**: internal contradictions between sections.
6. **Synthesise** the compressed outputs.
7. **Traceability**, plus the single-source addition: **orphaned content**, passages no output
   captured. Multi-source catches orphans implicitly through its agreement metric; single-source
   has no such backstop, so orphans are tracked by hand or they are simply lost.
8. **Assess** quality by evidence tier.
9. **Validate**: coverage, traceability, compression ratio, regeneration test.

**Do not collapse steps.** A pass that merges read/extract/tag, or skips tensions because "there
were not any", is summarisation wearing a distillation label. Where a step yields nothing, the
file says so; that is a finding, not a reason to drop the heading.

## Taxonomy

Designed from the output goal, which here is a single decision: *may this claim reach a public
legal site, and under what label?* The generic quality tiers do not fit, because for journalism
the discriminating question is not how well a fact was tested but **how many removes it sits from
the record**.

**Evidence basis** (the load-bearing dimension):

| Tier | Meaning |
|------|---------|
| `RECORD` | Traceable to an identifiable filing, order or docket event the reporter names |
| `COURTROOM` | Reporter present, reporting what was said in open court |
| `PARTY` | An assertion by a party, its counsel or its spokesperson, reported as theirs |
| `EXPERT` | A named non-party's opinion |
| `REPORTER` | The journalist's own framing or unsourced background |

**Stance**: assert / deny / qualify.

**Actionability** (the decision the other two dimensions exist to serve):

| Tag | Meaning | Count |
|-----|---------|-------|
| `PUBLISHABLE` | May be stated on the site with its tier label | 99 |
| `NEEDS-PRIMARY` | Real and material, but verify against the docket before publishing | 160 |
| `ATTRIBUTE-ONLY` | May appear only as "X said", never as fact | 142 |
| `DO-NOT-PUBLISH` | Fails the site's evidence rule | 20 |
| (none) | Rows in the pass-2 implicit-assumption and pass-3 negative-claim tables, whose Action column is `engage` rather than an actionability value | 9 |

`unclear` is a valid tag in every dimension.

**The counts are asserted by `npm run check:distillations`, and that is not decoration.** The plan
that commissioned this corpus published a census of these tags, 89 / 112 / 70 / 13, in which every
number was wrong: they summed to 284 against a corpus of 384 claims. Nothing could have caught it,
because the numbers lived in prose in a different directory from the claims they counted. They now
live here, in a table the checker recomputes, in the same two-directional shape as the orphan
declaration: declaring a count that is not the count fails exactly as loudly as declaring none.
Keep the `engage` row too, or the census silently stops reconciling to the claim total, which is
the same defect one level down.

## Two deviations from this repo's usual practice, both deliberate

**No source cache.** Every other distillation here is backed by a verbatim cache in
`docs/distillations/sources/`, so `npm run check:quotes` can verify quoted spans and the locators
survive link rot. That cache exists because those sources are public-domain government works,
court filings and agency releases. **These are copyrighted news articles**, and mirroring them in
full in a public repository is a different act from mirroring a GPO transcript. Locators are
therefore URL plus a described paragraph anchor plus the fetch timestamp, and quoted spans are
kept short. The consequence is stated plainly: **quoted spans in these files are not machine
verified**, and none of them may be promoted into a ledger without being re-read at the source.

**Straight quotes and no em-dashes, including inside quoted spans.** The `sources/` and `reviews/`
directories are exempt from the house style sweep because their punctuation is evidence. This
directory is not exempt and is not asking to be: these are analysis files in the project's own
voice. Quoted spans are normalised to straight quotes exactly as the ledgers already normalise the
testimony PDFs. Where a source's own sentence carried an em-dash inside a span worth quoting, the
span is cut short of it rather than silently rewritten.

## A sixth basis tier, added for broadcast: `CAPTION` (since split, see below)

Two items in this batch are television segments whose only transcript is YouTube's automatic
captioning. They earn their own tier below `REPORTER`, because of *how* auto-captions fail: they
are broadly accurate on ordinary prose and specifically unreliable on **exactly the tokens that
carry the claim**. In this batch alone the captions rendered Bonta as "Bont", Mosseri as "Adami",
Boorstin as "Borston", gave one reporter two different surnames in a single 180 second segment,
and turned a dollar figure into the literal string "$1.4 $4 trillion".

The rule that follows: **a `CAPTION` claim is never `PUBLISHABLE`.** At best it is `NEEDS-PRIMARY`,
and it is most useful as a *pointer*, telling you a document or an event exists so you can go and
find it in the record. Treat a quoted span from a caption as a paraphrase of unknown fidelity, not
as a quotation, no matter how quotable it looks.

## Coverage of this batch

Twelve sources distilled, the twelfth added 2026-08-20 when the attorneys general press conference
was finally obtained (see the section on it above: not from the recording this folder had been
retrying, because the official upload omits the entire Q&A). Five more were reachable but not
distillable, recorded here so the gap is visible rather than silent:

| Source | Why not distilled |
|--------|-------------------|
| Bloomberg | Paywalled after two paragraphs; nothing beyond the lede |
| WSJ (opinion) | Paywalled after two paragraphs |
| BBC | Live blog; the extractor returns only the topmost post |
| CNN | Video page, no article text |
| Fox News, ANI | Live streams still running at fetch time, no captions generated yet |

The two live streams are the ones worth revisiting: a state AG press conference and Bonta's own
remarks are officials speaking on the record, which outranks every secondary article here.
**The press conference was obtained on 2026-08-20**, though not from the recording listed here; see
the section on it below for why the official upload was the wrong one to keep retrying.

## Index

One line per file: the finding that would have been missed by reading for the news.

| File | Basis quality | What only this source gave |
|------|---------------|----------------------------|
| `2026-08-18-reuters.md` | highest | The only source whose own summary furniture attributes the $1.4T to Meta and the $200B to the states |
| `2026-08-18-nyt.md` | high | Two age lines in one case (data claim under 13, design remedy under 18); a Ninth Circuit ruling on the speech defence |
| `2026-08-18-guardian.md` | high | Meta contests interpretation of the internal documents, not their authenticity |
| `2026-08-17-cnbc.md` | high | A court has already refused the infinite-scroll and algorithm remedies, reportedly on speech and competitive-fairness grounds |
| `2026-08-17-npr.md` | good, one defect | The clearest statement of the design theory, and a misattribution of the $1.4T to the states |
| `2026-08-18-fox-business.md` | moderate | The complete four-part Meta denial |
| `2026-08-18-the-hill.md` | moderate | Meta's counsel conceding in open court that age verification does not reliably work |
| `2026-08-18-wdiv-clickondetroit.md` | low as national, unique as local | Michigan left the coalition over litigation cost, so 29 is a survivor count |
| `2026-08-17-nypost-opinion.md` | none as evidence | The strongest opposing argument, which converges on wanting a cross-platform rule |
| `2026-08-18-abc7-broadcast.md` | lowest (caption) | A parents' banner of more than 130 names; the grammar that produces the attribution error |
| `2026-08-18-cnbc-tv-broadcast.md` | lowest (caption) | A Meta filing dated the day before openings, arguing the claims are narrow |

## Docket pulls these files generate

Ordered by value. Each replaces a `NEEDS-PRIMARY` tag with a primary source.

1. **The states' penalty filing carrying the roughly $200 billion figure**, said to Judge Gonzalez Rogers at a hearing in the week before openings. Three sources agree it exists. It closes an open Tension in the MDL ledger, which currently records the states' own number as not established.
2. **Meta's filing of 2026-08-17**, reported by one broadcast source, arguing the plaintiffs' claims are narrow. A second broadcast source independently suggests new Meta language about the figure on the same day.
3. **The New Mexico order's refused remedies**, and the reasoning for refusing them. Reported once, and it is the highest-value claim in the batch for this project's thesis.
4. **The order on Meta's motion to exclude the first witness**, and the ground for it.
5. **The Ninth Circuit disposition of Meta's First Amendment motion to dismiss**, reported once.
6. **The four states' remedy list as pleaded**, to replace three partially overlapping journalistic renderings.
7. **Michigan's withdrawal**, from the docket and from the AG's office rather than from a station's quotation of a spokesperson.

## Four cross-cutting findings

Recorded here rather than in any one file, because none is visible from a single source.

1. **The $1.4 trillion figure has three incompatible owners across the batch**: Meta's own ceiling estimate, the states' present demand, and the states' superseded initial ask. This project's published position rests on the primary filing and is the best supported of the three. Both a sympathetic public broadcaster and a hostile editorial board got it wrong, in the same direction, from opposite politics. That makes the error structural rather than partisan, and it is the strongest available evidence that this site's existing framing is worth keeping.
2. **"Damages" and "penalties" are used interchangeably for the same figure** across the batch. They are not the same thing, and the difference decides whether the number is compensatory or multiplicative. Unresolved by any source.
3. **The trial length has four values in circulation**: six weeks, six to eight, seven, and "weekslong". Only the court's own scheduling order settles it.
4. **The advisory-jury structure is dropped by several sources** that then write "the jury" without qualification. A verdict reported as a jury finding would be wrong about this proceeding.

---

# Broadcast batch, 2026-08-18

A second batch, six video items selected from a longer list. Three commentary and explainer
channels on the same subject were **deliberately excluded**, along with two items about Meta's AI
business rather than this proceeding. The reason is tier arithmetic, not taste: a commentary video
sits at record, then journalism, then commentator, then machine transcript, four removes, and it
would land in this folder looking exactly like the wire-service file and sorting next to it. If the
project ever wants to study how this trial is being explained to large audiences, that is a real and
different question, and it needs its own directory and its own taxonomy.

## The transcript gate, adopted from the video pipeline method

Before any cleanup pass, measure **sentence-ending punctuation divided by word count**. Below
**0.015** the captions came from an older speech-to-text model with no sentence segmentation and
need a punctuation pass; at or above it, the newer models already emitted punctuation and a pass is
pure downside, because a model rewriting correct prose can only introduce word substitutions.

The threshold is not a guess. Old-model captions score 0.0000 and punctuated ones score 0.038 and
up, so the cutoff sits in empty space rather than splitting a distribution. **All five transcripts
in this batch measured between 0.0496 and 0.0568, so no cleanup pass was run on any of them**, and
each file records its own measurement.

Had a pass been needed, the rule that goes with it is the important part: back up before rewriting,
then verify the rewritten text against the backup mechanically, normalising away only what the pass
was permitted to add. **A faithful pass scores exactly 1.00000.** Anything less means words were
substituted rather than punctuated. That check exists because agents reliably report a fidelity they
did not achieve, which is this repository's own recurring failure mode wearing different clothes.

## Length bands

A distillation the same length as its source is not a distillation. Scale the output to the source
or short items come back longer than what they distil:

| Source words | Synthesis target | Sections |
|---|---|---|
| under 600 | at most 40% | Omit validation questions; at that length they are padding |
| 600 to 2,500 | at most 50% | Full section list |
| over 2,500 | aim 3:1 to 5:1 | Full section list |

**Measure the synthesis, not the whole file.** These files carry a full atomic-claim inventory,
which is *expected* to be larger than the source, since step 2 produces more statements than the
document has paragraphs. The compression that matters is source words against the Step 6 synthesis.
Every file in this batch records both that word ratio and the claim-count ratio. The eleven files in
the first batch record the claim-count ratio only.

## The `CAPTION` tier splits in two, and the earlier note was wrong

The first batch recorded a hypothesis that publisher-supplied captions would be safer than automatic
ones. **This batch disproves it.** One item carries genuine broadcast closed captions produced by a
live stenographer, and they are not safer, only differently unsafe:

| Tier | Produced by | Characteristic failure |
|---|---|---|
| `CAPTION-ASR` | Speech recognition | Plausible wrong words, concentrated on **proper nouns**. Surnames of officials and executives are the reliable casualties. |
| `CAPTION-STENO` | Live human stenographer, transmitted as broadcast CC | **Phonetic** malformations, upper case throughout so proper-noun capitalisation is destroyed, and, observed here, **inversion of legal roles**: one transcript states that the *defendants* are seeking penalties. |

The stenographic failure is the more dangerous one in a legal corpus. An inverted party is a
grammatical, well-formed sentence made of real words, so nothing downstream flags it. **Neither tier
is ever `PUBLISHABLE`**; both are pointers to things worth confirming in the record.

## Broadcast index

| File | Source words | Ratio | What only this one gave |
|---|---|---|---|
| `2026-08-18-channel4-broadcast.md` | 1,542 | 0.0564 | A broadcaster holding internal documents, and Meta's tailored response conceding language and a dropped under-13 product |
| `2026-08-18-bbc-broadcast.md` | 1,675 | 0.0496 | A constitutional court striking a design mandate on free-expression grounds; a granted remedy barring overnight notifications to under-18s |
| `2026-08-18-cnbc-kanter-broadcast.md` | 739 | 0.0568 | Deletion of the models trained on unlawfully obtained child data, and the two named limbs of Meta's defence |
| `2026-08-18-abcnews-broadcast.md` | 876 | 0.0502 | Litigation as a substitute for stalled rulemaking, stated plainly; a specific disclosed legal-cost figure |
| `2026-08-18-foxnews-broadcast.md` | 414 | 0.0556 | A sympathetic guest declining to assert intent; the stenographic role-inversion defect |

## Also considered and not distilled

`https://www.youtube.com/watch?v=QrStT2KeWfk`, Global News, 1 minute 58 seconds. Assessed as
marginal before the batch was scoped and left out of the six. Recorded here because a source that
was looked at and set aside should leave a trace: otherwise the folder cannot be told apart from
one where the source was never noticed. Its length is the reason. At roughly two minutes it sits in
the shortest length band, where the extraction would be a handful of posture claims already carried
by five other items.

## OBTAINED 2026-08-20: the attorneys general press conference

`https://www.youtube.com/watch?v=N3FvvwxW64w`, California Department of Justice channel, AGs Bonta,
Weiser and Davenport following day one. **This was the highest-value item on the list.** It is party
officials speaking on the record on their own official channel, which outranks every secondary
source in this folder.

> **Resolved, and not from this URL.** Transcribed 2026-08-20 with hosted ASR, accepting the
> `CAPTION-ASR` ceiling. **The official upload is not the one that had the answer.** It runs 23:26,
> ends on the words inviting questions, and omits the entire Q&A; a PBS NewsHour recording of the
> same event runs 52:20 and carries it. The transcript is cached at
> `docs/distillations/sources/ag-press-conference-2026-08-18-asr.txt`, quarantined from
> `npm run check:quotes` by a filename rule, and it answered the MDL ledger's open Tension on what
> the states will seek (claims 22d to 22h). **Distilled 2026-08-20** into
> `2026-08-18-ag-press-conference.md`: 46 claims, none of them `PUBLISHABLE`, whose most useful
> output is that the plaintiffs' injunctive ask is a feature-level de-amplification list. The closed
> thread, with both methodological findings, is
> `docs/issues/2026-08-18-ag-press-conference-captions.md`.
>
> **The "1 hour 47 minutes" below was the live stream, not the archive**, and the gap between the two
> numbers was the first clue that the published video had been cut. A duration recorded while a
> stream is running is a fact about the stream, not about what will be published.

It could not be fetched. The recording is 1 hour 47 minutes, was streamed live and finished the same
day, and is unlisted. YouTube advertises an English automatic caption track but serves no fragments
for it, failing with `Did not get any data blocks`. That is caption generation still in progress on a
long recording, not a permanent absence.

**That inference was correct, and as of 2026-08-18 it is machine-checkable rather than reasoned.**
YouTube reports `live_status: post_live` for this video, which means the stream has ended and the
archive is still being processed into a final VOD. Caption fragments are not served during that
window. **So this is not a failed fetch, it is a fetch that is too early**, and there is a one-command
signal for when it stops being too early.

**Check the trigger before spending anything on a retry:**

```bash
yt-dlp --skip-download --print "%(live_status)s" "https://www.youtube.com/watch?v=N3FvvwxW64w"
```

`post_live` means wait. `was_live` means processing has finished. Positive control for the field
itself, run 2026-08-18, because a status string that never varies proves nothing: an ordinary
finished upload returns `not_live`, so the field discriminates.

> **The trigger fired on 2026-08-20 and the answer was no.** `live_status` reached `was_live` and the
> caption fetch returned "There are no subtitles for the requested languages". `--list-subs` now
> reports **no automatic captions and no subtitles** for this video, positive-controlled against a
> public video that returns a full list on the same command.
>
> **The track advertised while the archive was processing was provisional and did not survive it.**
> So the `post_live` diagnosis was right about the mechanism and wrong about the outcome, and this
> section previously ended "`was_live` means go", which would have sent the next reader to run a
> command that cannot work. **Waiting is no longer a route.** The live thread, with the three
> remaining routes and their tiers, is
> `docs/issues/2026-08-18-ag-press-conference-captions.md`.

**Then the retry** (**moot since 2026-08-20**: this video has no caption track to fetch, and the
event was transcribed from a different recording instead; kept because the file-size point below
generalises to any caption fetch), checking the file size rather than the exit status, since a
failed run leaves a zero-byte `.part`:

```bash
yt-dlp --skip-download --write-auto-subs --sub-langs en --sub-format vtt -o "cadoj.%(ext)s" "https://www.youtube.com/watch?v=N3FvvwxW64w"
```

**One thing this does not change.** Whatever arrives is an **automatic** caption track, so it is
`CAPTION-ASR`, and the rule above holds without exception: a `CAPTION-ASR` claim is never
`PUBLISHABLE`. This recording is worth having as the batch's best **pointer**, not as a quotable
source. ~~If the California Department of Justice ever posts a human transcript or an uploaded
caption track, that is a different document and a different tier; check for `--list-subs` reporting
subtitles rather than only automatic captions.~~

**That last test is wrong and was disproven on this very event, 2026-08-20.** `--list-subs` splits
tracks into automatic captions and subtitles, and the second column was taken here to mean a human
wrote it. It means the track was **uploaded**, nothing more. PBS's track for this press conference
sits in the subtitles column and is plainly machine output: it renders Bonta introducing his New
Jersey colleague as though he were himself New Jersey's attorney general, and opens with a stray
pronoun. Hosted ASR on the same audio got that introduction right, so the uploaded track was the
**less** accurate of the two. **There is no cheap flag that distinguishes a human transcript from a
machine one; read a passage you can check and judge it.**

Two things to carry into that distillation when it happens. It is a **party** source throughout, so
almost every claim is `PARTY` and the dimension will carry little signal, which should be stated in
the file rather than hidden. And at roughly ten thousand words it lands in the third length band, so
the target is 3:1 to 5:1 against the synthesis, not against the claim inventory.

## What the broadcast batch changed

1. **A second and third source now attribute the two figures correctly.** The BBC states that Meta claims up to $1.4 trillion while the states put it far lower at $200 billion. With the wire service, that is two of the eleven items in this folder that discuss the figure at all getting it right. This project's published framing rests on the primary filing and remains the best supported reading.
2. **The $1.4 trillion figure now has four distinct referents across the corpus**: Meta's own penalty ceiling, the states' present demand, the states' superseded initial ask, and Meta's market capitalisation. The last is the dangerous one, because the magnitudes nearly coincide, which is precisely what let one editorial argue the demand had been sized to the company.
3. ~~**The speech objection to design mandates is reported to have succeeded twice, in two legal systems**~~ **REVERSED 2026-08-18 on the primary, and this is the batch's most instructive error.** The corpus inferred from a BBC summary that a French constitutional ruling and the New Mexico judgment both showed a speech objection defeating design mandates. Decision 2026-911 DC struck article 1 at paragraph 17 because the legislature could not institute a prohibition **of general scope**, imposed without regard to the individual minor's situation or to the risks specific to each service. **The defect was bluntness, not the attempt.** Read with New Mexico, which declined feed remedies because a court is the wrong instrument and because ordering one firm while its competitors are absent is unfair, the two say the workable instrument is calibrated, service-specific and market-wide, which describes a standard and neither a lawsuit nor a ban. That is **better** for this project than the inference it replaced, and it arrives from a jurisdiction with no Section 230 and no First Amendment. The inference above was dropped rather than published; it is kept struck through because a corpus that quietly deletes its wrong readings cannot be graded.
4. **The coalition is now reported at more than 30 at filing, 29 at trial, with one departure explained.** Three independent items point the same way.
5. **A granted, specific brake exists**: no overnight push notifications for under-18s. Testable, time-bounded, already ordered.

---

# The guard: `npm run check:distillations`

Added 2026-08-18, after an audit of the first sixteen files. Every defect it now catches was
present in prose that read as finished work, and none was visible by eye.

## What the audit found

| Defect | Scale |
|---|---|
| Synthesis word counts overstated | Two files, by 30% and 32%; both compression ratios were computed from the wrong number and understated the real compression |
| Claim-count line worded differently in one file | Invisible to any grep across the other fifteen |
| Claims recorded in an inventory that no cluster, tension or output ever carried | 58 of 384, while all sixteen files asserted their traceability was complete |
| A source considered and silently dropped | One, now recorded above |
| An invented denominator in this README | "two of thirteen", where the real figure is two of the eleven items that mention the number |

## What it checks, and the one that matters

Structure (all nine steps present), dangling references (no claim ID used that a table never
defined), arithmetic (declared synthesis word count matches the measured Step 6 block, declared
compression matches source divided by synthesis), and provenance (source, URL, fetch date, basis
tier).

The load-bearing check is **orphans**, and it is deliberately two-directional. Each file now carries
a machine-computed `Unsynthesised claims (declared)` line, and the guard fails both when a real
orphan is missing from it **and** when it names a claim that is actually clustered. A one-directional
version would be an allowlist that absorbs anything, which is where a real defect hides.

An orphan rate of zero is not the goal. Some claims genuinely should not reach an output: baseline
posture, party denials already covered by a synthesis, logistics. The point is that the rate is
**measured and declared** rather than quietly asserted away. It currently stands at **15.1%**, and
two files sit at zero.

## Two things about how it was built

**Its first matcher over-reported, and the over-report looked completely plausible.** Cluster lines
use range notation, `C6 to C13` and `D14 to D18`, which the first regex never expanded. It reported
five real claims as orphaned in one file and seven in another. Had that been believed, the "fix"
would have been to retro-fit clusters that already existed. The self-test now carries positive
controls for both range spellings and negative controls against over-expansion, foreign prefixes,
and treating prose mentions as definitions, and the script **aborts** rather than reporting a clean
corpus it cannot actually read.

**The guard found a bug in itself on its first run.** The declaration line necessarily names every
orphan it declares, so scanning the whole file for references made every declared orphan look
referenced, and no file could ever pass. The declaration is now stripped before the reference scan.

Fault-injected and confirmed to fail on: a stale synthesis word count (the exact defect the audit
found), a dangling claim reference, an undeclared orphan, an over-declared orphan, and a
deliberately broken matcher, which aborts rather than passing.

## What it cannot do

It proves a file is **internally consistent**. It cannot prove a claim is true, that a quoted span
matches its source, or that a basis tier was assigned correctly. These files carry no cache by
design, so there is no `check:quotes` equivalent available here and there will not be one. Accuracy
stays human, which is exactly why the actionability tags exist and why nothing in this folder is
`PUBLISHABLE` without a primary source behind it.

## Why this folder is not under `docs/distillations/`

It was, for about an hour, and that was a mistake `npm run check:dates` caught immediately.

`content-dates.json` carries a manifest key for `docs/distillations` (and a glob for the ledgers),
because that directory's git date drives the `lastModified` the sitemap publishes for
`/distillations` and the `dateModified` in its structured data. The date resolver matches directory
and glob keys **by prefix against the dirty set**, deliberately and coarsely, on the reasoning that
over-reporting a date costs a needless restamp while under-reporting reintroduces exactly the
staleness the manifest exists to stop.

That coarseness is right for its purpose and wrong for a subfolder. Adding sixteen unpublished
working files under `docs/distillations/` bumped the published ledger index to today, telling
crawlers that the evidence ledgers had changed when nothing a reader can see had. **A working
directory must not live inside a namespace whose directory date is a published freshness signal.**

`docs/research/` collides with no manifest key, so the same files there change no published date.
The general rule, worth carrying to the next folder like this one: before adding a directory under
`docs/`, check it against the keys in `content-dates.json`, not just against the file tree.

---

# The dedupe rule, added 2026-08-18

**A `NEEDS-PRIMARY` tag is a statement about the source document. It is never a statement about
this repository.**

A single-source distillation is built from one document and is structurally blind to the project's
existing record. When a file tags a claim `NEEDS-PRIMARY`, it means *that article* did not
establish it. It does not mean the project has not established it, possibly months earlier, from a
primary already cached here.

So the tag is not a research queue. **Run a dedupe pass against the ledgers and the curated pages
before any claim in this folder becomes work.** The record of the first such pass is
`docs/research/dedupe-2026-08-18.md`.

**Evidence that this matters.** `2026-08-17-cnbc.md` originally called its own S1 "the
highest-value claim in the batch for this project" and tagged it `NEEDS-PRIMARY`. It was already
established, already primary-verified, and already published, from a judgment already sitting in
`docs/distillations/sources/`. The entry is kept, with a dated correction, because the error is
more instructive than a clean file would be.

**And the dedupe itself must be a reading pass, not a grep pass.** A keyword version was built,
run, and rejected: five of its already-in-repo verdicts flipped when the hits were read in context.
The hits were real and about different subjects. See the next section.

## Both directions of the search rule

`CLAUDE.md` teaches that **a search returning nothing is a claim about your query, not a fact about
the record**, and requires a positive control before reporting an absence.

The 2026-08-18 pass establishes the corollary: **a search returning something is not confirmation
either.** On a corpus dense with dates, dollar figures and party names, the false-positive rate is
high enough to make keyword triage useless. Five examples, all from one pass:

| Looked resolved | Actually |
| --- | --- |
| The states' 200 billion figure | Hits were a hearing ledger quoting Meta's **revenue** |
| A Ninth Circuit First Amendment ruling | Hits were California SB 976 and Section 230 doctrine |
| Bejar as the states' first trial witness | Hits were his **2023 Senate testimony** |
| KOSA advancing out of committee | Hits were a bill package at a 2025 House hearing |
| Meta's filing of 2026-08-17 | Hits were an unrelated case sharing the date |

## Four false nulls in one session, 2026-08-18

A dated live instance of the rule `CLAUDE.md` already teaches, recorded because it recurred four
times in a few hours and **every null agreed with a plausible expectation**, which is exactly why
each was nearly believed:

1. **A docket search returned zero.** CourtListener's `filed_after` filters the **case** filing date, not the docket entry date. On a case filed in 2023 it excludes the entire docket. The correct parameter is `entry_date_filed_after`.
2. **A date regex returned zero.** It was written for a two-digit year against a page that writes `8/18/2026`.
3. **A second date regex returned zero.** It was anchored to a standalone line; the dates sit mid-line.
4. **A search of a filed witness list for the word "witness" returned zero.** The PDF has no text layer: 17 pages yielding about 1,200 characters, all CM/ECF header stamps, the body being images. Same failure class as the GPO TIFF problem documented for hearing transcripts.

Number 4 is the instructive one. The positive control is what caught it: a document titled Witness
List that contains no instance of "witness" is a broken extraction, not a finding. Without that
control the file would have been recorded as not mentioning what it was named for.

**A fifth, of a different kind, from the same session.** A browser navigation to a new query URL
returned the previous query's results from cache, under the new URL. The page title still showed
the old query. **Confirm the page actually reloaded before treating its content as a response to
your question.**
