# Distillation source cache

Ground-truth sources for the distillations in this folder, cached so quote verification and
line-anchored locators survive link rot and are re-runnable by anyone. It began as hearing
transcripts alone, which is why some entries below still speak in those terms; it now also
holds court filings, agency documents, an appellate opinion, and two Dutch judgments.

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
  statements are inserted as TIFF images, not text.** Each one appears as the line
  `[The prepared statement of Mr. X follows:]` immediately followed by
  **`[GRAPHIC NOT AVAILABLE IN TIFF FORMAT]`**, which is GPO's marker for exactly this. There are
  9 such markers in this file and the PDF carries 237 embedded images. **Grep for that marker
  string first on any new GPO hearing**; it tells you in one command how much of the record is
  unreachable by a substring check.

  Two further wrinkles specific to this hearing:

  - **Kate Ruane's prepared statement is not in the official record at all**, not even as an image.
    The record carries a footnote instead: "Ms. Ruane's prepared statement has been retained in
    committee files and is available at" a docs.house.gov URL. So for one of the four witnesses,
    the committee-repository PDF is the only source that will ever exist.
  - **The spoken record contains material the written testimony does not.** Thayer's
    "categorically rejected TikTok's argument" is in this transcript and absent from
    `house-2025-12-02-testimony-combined.txt`. The re-seed is therefore not only a re-anchoring
    exercise; there is genuinely new quotable material in the live Q&A.

  Publication of a transcript is not the same as verifiability of everything printed in it. As of
  2026-07-25 the Dec 2025 ledger's quote-bank has not been re-anchored to this file; use
  `house-2025-12-02-testimony-combined.txt` for its written-testimony quotes and this file only
  for the spoken hearing.
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

**This is now a script: `npm run check:quotes`** (`scripts/check-quotes.mjs`), added 2026-08-13.
It applies all five normalizations below at once, self-tests its own matcher against known answers
before trusting it, treats a declared-but-missing cache or allowlist as a loud failure, and prints
on every run which ledgers it does **not** cover **and which it covers only in part**. Coverage
today is **572 spans across all 11 registered ledgers**, closed on 2026-08-18. **That bolded
coverage line is load-bearing: `npm run check:quotes` recomputes both numbers on every run and
fails if this sentence disagrees with the corpus.** It earned that treatment by drifting twice in
its first day, written as 476 here and in two other prose homes hours before the count reached 483.
Update it when registration changes; the checker will insist. The four hearings and the
EU proceedings are checked in full; the other six are scoped with `sections` to the parts a cache
actually reaches. **There are no unregistered ledgers left**, and the line the script used to print
naming them is gone because there is nothing to name. Do not re-derive this check by hand.

**Registering the last four caught six defects, one per cache and then some, which is the argument
for doing it rather than a bonus.** In order: the MDL ledger quoted an exhibit by a title taken
from the docket listing rather than from Meta's filing, and lowercased that filing's
sentence-initial capital; the California ledger put its own comma inside a quotation of the court's
case caption, and dropped the word `Judge` out of the notice's `Hon. Judge Carolyn B. Kuhl`. Every
one of them is invisible at reading size and every one is a claim about what a court document says.
The Tennessee ledger was clean, and registering it instead found a fault in a **cache**, which is a
first (see the `Lbl` note below).

**One ledger is guarded at four spans, deliberately, and the reason is the finding.**
`california-state-bellwethers` covers JCCP 5255 in the Los Angeles Superior Court, and
**California state court records are not in any free archive**: there is no RECAP for LASC and the
Court of Appeal portal blocks automated lookups. The only primary this project can hold for that
case is the court's own public notice, so the scope is section (a) and nothing else. That is not
undone work, it is the shape of the evidence, and it is worth stating plainly because this is the
case where the project once published "upheld on appeal" about a verdict no appellate court had
reviewed.

**Scoping is a blind spot, and on 2026-08-14 that blind spot was holding four real defects.** The
FTC and Bits of Freedom ledgers were first registered scoped to `Quotes` only, on the reasoning
that the quote-banks are where the record quotes live. They are not: the **Claims** sections quote
the same sources, and being unchecked, they had absorbed sentence punctuation **inside** quotation
marks on four spans (the Eighth Circuit opinion's `procedural error.` written as `procedural
error,`, the Chitika order's `their choice(s), and shall remain` written as `their choice(s).`, and
two more). Widening both to `["Claims (the ledger)", "Quotes"]` took coverage from 404 spans to 432
and surfaced all four at once. **When scoping a ledger, scope to what the cache covers, not to
where you expect the quotes to be**, and re-read the exclusion whenever the ledger grows.

**It happened again on 2026-08-18, in the pass that was writing the rule down.** `mdl-3047` was
registered with four cached docket documents and scoped to section (i), where the new trial-day
quotes were. Section (e) had meanwhile acquired three claims quoting Dkt 473, whose cache was in
that very list, and those claims carry the pass's most consequential correction: that the $200
billion four outlets reported as the states' demand is Meta's own 2025 revenue. They were verified
by nothing. Found by an audit, not by the check, because the check cannot see what it is scoped
away from. Caching Meta's Dkt 455 the same day let section (e) be scoped in whole, and doing that
caught two more defects immediately. **The rule has now failed twice in five days for the same
reason: the scope gets written when the cache is added and never re-read when the ledger grows.**

### The `Lbl` artifact, and why one Tennessee span cannot verify

The Tennessee complaint cache carries the literal string `Lbl` **364 times**. It is a tagged-PDF
list-label artifact: it prefixes most numbered paragraphs (`Lbl1.`, `Lbl2.`) and, at page breaks,
appears as runs of standalone lines interleaved with the page footer. At paragraph 411 that lands
mid-word, between `Instagram's "well-` and `being" related platform features`, with the statutory
footer sitting in the gap.

**This is a sixth failure mode, structurally identical to the GPO hyphenated line wrap and the
court-filing line number, and no normalization reaches it**, because the interposed text is real
page furniture rather than a predictable token. The affected span is recorded in the script's
`KNOWN_DEVIATIONS` rather than in an allowlist, and the distinction matters: an allowlist entry
asserts a span is deliberately not from the cached source, and this one is from it. Close it by
re-extracting the complaint from the original PDF with labels suppressed. Grep `^Lbl` on any new
tagged-PDF cache before trusting a clean run, the way `[GRAPHIC NOT AVAILABLE IN TIFF FORMAT]`
should be grepped on any new GPO transcript.

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

The four non-hearing ledgers under the check map to **several** caches each, and three of them are
scoped by section, so the one-to-one framing above does not carry. The registry in
`scripts/check-quotes.mjs` is the source of truth for those; the script prints the mapping and the
scoping on every run, precisely so this list cannot become the authority and then go stale:

- `eu-dsa-proceedings.md` -> the four `ec-ip-26-*.txt` releases, checked whole
  (plus `eu-dsa-quote-allowlist.txt`)
- `new-mexico-v-meta.md` -> the final judgment plus the two FTC COPPA files, scoped to
  `(g) The final judgment`
- `bits-of-freedom-v-meta.md` -> the two Dutch judgments, scoped to Claims and Quotes
  (plus `bits-of-freedom-quote-allowlist.txt`)
- `ftc-control-integrity.md` -> the Eighth Circuit opinion, the two Amazon Prime filings, the Epic
  complaint and the Chitika file, scoped to Claims and Quotes
  (plus `ftc-control-integrity-quote-allowlist.txt`)

Re-run 2026-07-24 after new quoted spans were added to the Nov 2023 ledger and to
`content/hearings.md`; all resolve against `CHRG-118shrg60432.txt`.

### European Commission press releases (added 2026-08-02, inventoried 2026-08-20)

`ec-ip-26-312.txt`, `ec-ip-26-920.txt`, `ec-ip-26-1579.txt` and `ec-ip-26-1679.txt`: the four
Commission releases behind `eu-dsa-proceedings.md`, named by their IP reference numbers.

**They were absent from this inventory for eighteen days**, which is what prompted the
two-directional check now in `check:quotes`. Their extraction trap is worth the entry on its own.
**A plain fetch of a `presscorner` URL returns HTTP 200 and no article text.** The page is a
JavaScript shell whose headline survives in meta tags, so a naive extraction yields a document with
the right title and an empty body, which is a false success rather than a visible failure. The body
is served as JSON by the Commission's own API at
`.../presscorner/api/documents?reference=IP/26/1579&language=en` (field
`docuLanguageResource.htmlContent`), and releases are located through
`.../presscorner/api/search?language=en&text=...`.

**Reference numbers are not chronological.** IP/26/312 is February 6 and IP/26/310 is February 9, so
enumerating around a date does not work. Search instead.

### The two allowlists added 2026-08-18

`mdl-3047-quote-allowlist.txt` and `tennessee-quote-allowlist.txt`: drafter-prose allowlists for the
two ledgers registered that day, each carrying its reasoning in its own header. Both are
deliberately short. The MDL one holds a single entry, an outlet's paraphrase quoted precisely in
order to record that it is **not** in Meta's filing; the Tennessee one holds three, none of which is
a fidelity defect. **An allowlist is where a real defect goes to hide**, so a growing one is a
warning rather than a convenience.

### `ca9-2026-08-17-doe-1-v-meta-24-1672-rehearing-denied.txt` (added 2026-08-20)

The Ninth Circuit's order denying rehearing en banc in *Doe 1 v. Meta Platforms*, No. 24-1672, filed
2026-08-17, fetched from CourtListener/RECAP as docket entry 55. Three sentences, and the vote is
the substance: Judge R. Nelson, who wrote the panel opinion, voted to deny, while Judges W. Fletcher
and Berzon recommended granting, and no judge of the full court requested a vote.

~~**No checker reads this file, and that is a real gap stated rather than hidden.**~~ **Closed
2026-08-20.** That was true for two days, while the order's only consumer was section 4 of the policy
paper, which is prose. The MDL ledger now cites it at claim 43, so the cache is registered against
`mdl-3047` in `npm run check:quotes` and its two quoted spans are verified like every other. The
gap was found by the `revisited` rule in `npm run check:issues`, which asked what had been done to
each file the *Doe 1* issue declared as related and got no answer for the ledger.

### `ag-press-conference-2026-08-18-asr.txt` (added 2026-08-20)

**The first ASR transcript in this folder, and the only file here that no checker will ever read.**
Machine transcription of the press conference three state attorneys general held on 2026-08-18 after
the opening day of the MDL 3047 state trial, produced 2026-08-20 by AssemblyAI with speaker
diarization from the PBS NewsHour recording (YouTube `KWppdXmS9Us`, 52:20). Its own header carries
the full provenance, the speaker map and the reproduction commands.

**It is quarantined by filename.** `scripts/check-quotes.mjs` refuses any declared source matching
`-asr.txt`, with controls in both directions in its self-test. Verifying a quotation against a
machine transcription would prove that two machines agree, not that a person said the words, and it
would go green while doing it. Cite the recording with a timestamp and paraphrase; this is the same
treatment the two Dutch judgments get for the same underlying reason, that the text in hand is not
the words the speaker used.

**Two findings came out of building it, and both are about sourcing rather than about this case.**

- **The official channel published the shortest cut in the field.** The California Department of
  Justice, whose office held the conference, posted 23:26 on its own channel (`N3FvvwxW64w`). That
  version ends on an invitation to take questions and stops: the entire Q&A is missing. PBS
  (52:20), Fox News (50:41) and KTVU (32:36) all carry more, and everything of evidentiary interest
  is in the 29 minutes the official version omits. **Check the third-party recordings of a public
  event even when the official one exists**, and compare durations before choosing which to keep.
- **"Subtitles" is not the same as human-authored, and this repository had it written down wrong.**
  `yt-dlp --list-subs` splits tracks into "automatic captions" and "subtitles", and the second was
  treated here as the signal of a human transcript. PBS's uploaded track is listed under subtitles
  and is plainly machine output: it renders Bonta's "and the Attorney General from New Jersey,
  Jennifer Davenport" as "I'm the attorney general from New Jersey", which would make California's
  AG New Jersey's, and it opens with a stray "I". **The distinction is how a track was attached, not
  who wrote it.** AssemblyAI was the more accurate of the two on the same audio.

**What makes the key passage usable at all is triangulation, not confidence.** The money exchange at
32:24 to 34:59 was transcribed independently by three systems sharing no pipeline (AssemblyAI on the
PBS audio, PBS's own uploaded track, and YouTube's automatic captions on the Fox recording). All
three render the two load-bearing sentences the same way. A single ASR pass, however confident,
would not have been enough to move a Tension in the MDL ledger.

## Court-filing caches (added 2026-07-25)

### MDL 3047 docket documents (added 2026-08-18)

Six documents from the docket of *People of the State of California v. Meta Platforms, Inc.*,
No. 4:23-cv-05448-YGR (N.D. Cal.), fetched from CourtListener/RECAP: five trial-court filings and
one Ninth Circuit opinion mirrored there as entry 541. All five extract cleanly with `pdftotext -layout`,
and all carry the left-margin line numbers US court filings use, which the check strips anchored to
line starts. Together they take `mdl-3047` from unregistered to guarded across sections (e) and (i).

- `mdl-3047-2026-07-06-dkt455-penalty-opposition.txt`: Meta's opposition to the state attorneys
  general's submission on penalties, filed 2026-07-06, 35 pages, filed by Covington & Burling.
  **This is the source of the $1.4 trillion figure**, the most-quoted number on this site, and it
  was cited by the ledger for a month before it was cached. Caching it on 2026-08-18 immediately
  caught two defects that had been invisible: the ledger quoted the states' penalty exhibit by a
  title read off the **docket listing** rather than by the title Meta's filing gives it ("Time Spent
  Penalty Calculation for Teen Users"), and it had lowercased the filing's sentence-initial capital
  in "A sanction of that size has no analog in the history of consumer protection enforcement."
  **A citation is not a cache**, and the gap between them is where both of those lived.
- `mdl-3047-2026-07-13-dkt473-penalty-disgorgement-reply.txt`: the AGs' reply on the penalty and
  disgorgement charts, filed 2026-07-13. The document behind the correction that the widely reported
  $200 billion is **Meta's 2025 revenue**, cited to its own Form 10-K at 61, and not a demand.
- `mdl-3047-2026-08-16-dkt534-pretrial-order-8.txt`: Pretrial Order No. 8, filed 2026-08-16. Uses
  "bifurcated" only of the exchange of witness binders, which is why the ledger does not publish a
  bifurcated trial structure.
- `mdl-3047-2026-08-18-dkt549-trial-protocol.txt`: the Stipulation and Updated Order Governing
  Trial Protocol, entered 2026-08-18.
- `mdl-3047-2026-08-18-dkt550-civil-minutes.txt`: the court's Civil Minutes for the opening trial
  day. Small and load-bearing: it is the record that trial was held, that the session ran 5 hours
  17 minutes, and that the states' first witness was Arturo Bejar.
- `mdl-3047-2026-06-29-ecf3212-pretrial-order-3.txt`, `mdl-3047-2026-07-13-ecf3258-joint-trial-stipulations.txt`,
  `mdl-3047-2026-07-20-ecf3284-pretrial-order-6.txt`, `mdl-3047-2026-07-23-ecf3295-cmo-36.txt`: the four MDL
  orders and stipulations that section (h) of the ledger had been **quoting since 2026-07-25 without any of
  them being cached**. Read on the docket that day, cited by ECF number, never stored. Six real quotations of
  real documents, none of them checkable, and the gap was invisible because section (h) was outside the
  checker's `sections` scope. All four fetched from CourtListener/RECAP and cached 2026-08-28 when the scope
  widened. Clean extractions. **Widening that scope immediately found two defects in those six spans**, both
  recorded in the ledger: CMO 36's calendar caption is a *stacked block* (`Bellwether Trials:` over two dates)
  that the ledger had quoted as a slash-joined single line, which is a reconstruction rather than a quotation;
  and a span from the joint status report had its source em-dashes silently replaced with a comma to fit the
  house style, inside the quotation marks.
- `mdl-3047-2026-08-03-jpml-pending-actions.txt`, `mdl-3047-2026-07-01-jpml-pending-actions.txt`,
  `mdl-3047-2026-06-01-jpml-pending-actions.txt`: the JPML Pending MDL Dockets by Actions Pending reports for
  August 3, July 1 and June 1, 2026. August gives MDL 3047 as **3,137 pending / 3,312 historical**; July and
  June carry the 2,893/3,068 and 2,664/2,839 the ledger has cited since mid-July, re-verified and finally
  cached 2026-08-28 (they had been cited-but-not-cached, this folder's recurring sin). **Two access traps.**
  The filename is dated by publication day, not the 1st: June and July are `June-1`/`July-1` but August is
  `August-3`, so a guessed `August-1-2026` 404s and looks like "no report exists"; read the index at
  `https://www.jpml.uscourts.gov/pending-mdls-0`, which names the current file. And **the host returns HTTP
  404, not 403, to requests whose User-Agent is the bare token `Mozilla/5.0`** (200 to a full browser string
  or to no User-Agent at all; isolated 2026-08-28 with a three-trial matrix). A 404 for a bot-scented UA is a
  false absence, and it briefly produced two wrong explanations in this very folder, "the Panel rotates old
  reports off the site" and "the host requires a Referer header", both retracted the same day: nothing
  rotated, and the Referer had merely ridden along with the full UA that was the actual fix.
- `mdl-3047-2026-08-17-ecf3407-joint-status-report.txt`: the Joint Status Report Pursuant to CMO 36, MDL ECF
  3407, filed 2026-08-17, answering the court's question about the X Corp., Discord and Roblox cases (23, 13
  and 6 respectively, most of them stayed and outside discovery). Fetched from RECAP and cached 2026-08-28.
- `mdl-3047-2026-08-28-oklahoma-cj-2023-180-docket.txt`: a docket export for the **Oklahoma** satellite AG case,
  *No. CJ-2023-180*, Osage County District Court, taken from the Oklahoma State Courts Network (OSCN) on
  2026-08-28. Not a court PDF: OSCN serves the docket as HTML, and this cache is its 191 dated entry rows,
  extracted and stored with a provenance header. **Two things to know before citing it.** OSCN's own banner
  says the information is **not an official record**, so entries are cited as docket events and nothing more.
  And **OSCN's linked documents are TIFF images with no text layer** (a `pdftotext` extraction of the 2026-08-26
  joint motion returns zero characters against a passing control), so they are pointers to a place in a record,
  never a text to quote, the same rule this folder applies to ASR and to the Dutch judgments. Cached because
  this is the one satellite docket of the fifteen that a script can read at all, and it shows the settlement
  arriving in a state court on the day the federal judgment was entered.
- `mdl-3047-2026-08-26-dkt572-joint-motion.txt`: the **Joint Motion to Enter Consent Judgment**
  itself, AG-case Dkt 572, 14 pages, filed 2026-08-26. Cached on the 2026-08-28 audit because the
  ledger's claim 44 cited "the motion itself (primary, cached)" while only its Exhibit 1 (the
  agreement, below) was actually in this folder: a citation that says cached must point at a file
  that exists here, and for a few hours it did not. Clean extraction, no artifacts.
- `mdl-3047-2026-08-26-dkt576-consent-judgment.txt`: **META AND STATE ATTORNEYS GENERAL CONSENT
  JUDGMENT**, AG-case Dkt 576 / MDL ECF 3451, signed by Chief Judge Yvonne Gonzalez Rogers and
  entered 2026-08-26. This is the document that ends the states' case: it approves the settlement
  "in all respects", enters "as a final judgment under Fed. R. Civ. P. 54 and 58", waives both
  sides' appeals, and disclaims establishing "a standard of care" anywhere outside the settling
  states. Fetched from CourtListener/RECAP 2026-08-28. **Read the extraction note below on the
  N.D. Cal. template**; this file is one of the two that exposed it.
- `mdl-3047-2026-08-26-dkt572-1-settlement-agreement.txt`: the **fully executed settlement
  agreement**, filed 2026-08-26 as Exhibit 1 to the Joint Motion to Enter Consent Judgment
  (Dkt 572-1), 130 pages. Every term the site describes comes from here: Exhibit B's payment
  schedule, the Phase I / Phase II time-management split, the "Contingent Monetary Payment Trigger",
  the definition of "Core Industry Members" as Snap, TikTok and YouTube, the injunctive terms and
  the release carve-outs. Fetched from CourtListener/RECAP 2026-08-28. **The California Department of Justice publishes
  a copy alongside its release, and the two are the same document but not the same file**: equal
  size (1,538,381 bytes), 46 differing bytes of PDF metadata, and `pdftotext -layout` output that
  is line-for-line identical, which is the comparison that matters for this cache and the one
  actually run. An earlier draft of this entry said "byte-identical" on the strength of the equal
  sizes; hashing them showed otherwise, which is the difference between checking and assuming
  wearing the word "checked". Extraction is clean: `pdftotext -layout`, no `Lbl` artifacts, no
  TIFF markers, no ligatures.
- `mdl-3047-2026-08-26-dkt575-trial-order-3.txt`: Trial Order No. 3, filed 2026-08-26. Four pages,
  and the one that records the mechanics: the court suspended the trial, granted the motion, and
  ordered that "the trial is deemed vacated, and the jury shall be advised that they are each
  discharged immediately." Also on the N.D. Cal. template.
- `mdl-3047-trial-minutes-2026-08-19-to-08-26-combined.txt`: the Civil Minutes for the remaining
  trial days, AG-case Dkt 560 (Aug 19), 561 (Aug 20), 571 (Aug 24), 573 (Aug 25) and 574 (Aug 26),
  concatenated with `================ CIVIL MINUTES: AG-case docket entry <n> ================`
  separators in the same style as the combined testimony files above. Together with Dkt 550 they
  are the complete trial record: four days of evidence, one status conference, five witnesses, and
  the 49-minute session at which the trial stopped. Fetched 2026-08-28.
- `tennessee-2026-08-26-ag-settlement-release.txt`: the Tennessee Attorney General's press release
  pr26-33, "Attorney General Skrmetti Announces Largest Big Tech Settlement in History",
  2026-08-26, extracted from the page HTML and trimmed to the release body. The primary for
  Tennessee's own account of the settlement that ended its Nashville trial: the $751,922,691.13
  figure (which the release renders with a stray doubled dollar sign, "$ $751,922,691.13",
  preserved because the cache is verbatim), the Children's Digital Protection Fund destination,
  and the sentence placing the agreement at the end of "a lengthy trial against Meta in front of
  Davidson County Chancellor Russell T. Perkins". Registered under `tennessee-v-meta` in
  `npm run check:quotes` alongside the settlement agreement cache, which that ledger's section (g)
  also quotes; one cache file serving two ledgers is deliberate and the checker verifies both
  against the same bytes.
- `mdl-3047-2026-08-26-ca-ag-settlement-release.txt`: the California Attorney General's press
  release announcing the settlement, 2026-08-26, extracted from the page HTML and trimmed to the
  headline and release body (the site chrome is not the record). Cached because the ledger quotes
  it **against itself**: it describes a "proposed settlement, which remains subject to court
  approval through entry of a consent judgment", which was true when written and was overtaken by
  Dkt 576 the same day. It is also the source for the "bipartisan coalition of 51 attorneys
  general" count and for the roster naming Michigan, Georgia, Missouri and North Dakota, the four
  states that had withdrawn from the coalition in January 2025.
- `mdl-3047-2026-08-10-ca9-24-7032-collateral-order-opinion.txt`: the Ninth Circuit's **published**
  opinion in *People of the State of California v. Meta Platforms, Inc.*, No. 24-7032, filed
  2026-08-10 and docketed in the trial court as entry 541 (MDL ECF 3398). Dismisses Meta's and
  TikTok's appeals for lack of appellate jurisdiction, holding Section 230 is "a defense to
  liability, not immunity from suit", and denies Meta's emergency stay motion as moot. This cache
  was added by the pass that found the opinion (2026-08-18 evening) and this inventory entry was
  added a pass later, which is its own small lesson: the file, the registration and the inventory
  are three separate writes, and only the first two were guarded.

### `ca-jccp5255-2026-02-13-public-notice.txt` (added 2026-08-18)

The Los Angeles Superior Court's own public notice for Social Media Cases (JCCP 5255), Feb 13 2026,
covering the courtroom seating lottery for the trial. Three and a half kilobytes of text, and it is
**the only primary document this project can hold for the entire California proceeding**: there is
no free archive of LASC records and the Court of Appeal portal blocks automated lookups. It
establishes the court, the department, the judge and the caption, and nothing else, which is why
`california-state-bellwethers` is scoped to section (a) and guarded at four spans. Caching it caught
two defects in those four: a comma inside a quotation of the case caption, and `Hon. Carolyn B.
Kuhl` quoted where the notice reads "Hon. Judge Carolyn B. Kuhl".

Note the notice's own headline typos the number as JCCP5225 while its body says JCCP5255. Left as
found; it is the record.

- `tennessee-2023-10-24-unredacted-complaint.txt`: the Tennessee Attorney General's civil
  enforcement complaint against Meta and Instagram, as unredacted and published by the AG on
  2024-01-10. Extracted from the AG's PDF on 2026-07-25.
  **EXTRACTION WARNING, this one is a trap.** `pdftotext` in its default and `-layout` modes
  produces **more than 160 doubled word pairs** on this file (`platform platformfeatures features
  (such (such as`), apparently because the unredacted version was produced by overlaying revealed
  text on the redacted original and both layers extract. Quoting from those modes yields corrupted
  text that looks plausible. **This cache is the `-raw` extraction, which has zero doubling** but
  interleaves footnote markers into the body. Every quoted span in the Tennessee ledger was
  verified individually against this file.
  **A second trap, found 2026-08-18 when the ledger was registered with `check:quotes`.** The `-raw`
  extraction also carries the literal string `Lbl` **364 times**, a tagged-PDF list-label artifact
  that prefixes most numbered paragraphs and, at page breaks, appears as runs of standalone lines
  around the page footer. At paragraph 411 that lands mid-word and makes one faithful span
  unverifiable. See the `Lbl` section under Verifying. Grep `^Lbl` on any new tagged-PDF cache.
- `new-mexico-2026-08-06-final-judgment.txt`: the **final judgment** in *State of New Mexico ex rel.
  Torrez v. Meta Platforms, Inc.*, No. D-101-CV-2023-02838 (1st Jud. Dist. Ct.), captioned "Findings
  of Fact, Conclusions of Law, and Judgment, Order, and Decree of the Court", 68 pages, file-stamped
  **8/6/2026 4:41 PM**, signed Bryan Biedscheid, Chief District Court Judge, Division VI. Downloaded
  2026-08-13 from the New Mexico DOJ's copy and extracted with `pdftotext -layout`.
  **This one extracts cleanly**, unlike the two Tennessee filings below: it is a native Word PDF, not
  a scan. Checked before use, because a clean extraction is a claim and not an assumption: zero
  doubled word pairs in either `-layout` or `-raw` (probe run with a positive control, since the
  first attempt used a regex engine without backreference support and silently reported zero), and
  zero typographic ligatures. **Note the event/announcement split**: the judgment is dated August 6,
  the Attorney General's fuller release August 7. The event date is the filing.
- `ftc-2026-02-25-coppa-age-verification-press-release.txt` and
  `ftc-2026-02-25-coppa-age-verification-policy-statement.txt`: the FTC's COPPA age-verification
  enforcement policy that the New Mexico court considered and declined to rely on (judgment
  ¶¶ 134 to 135), cached as **two separate documents**: the press release, and the statement itself.
  The release was cached first, because a quote from it failed the check against the judgment cache.
  That was the checker working correctly: a court discussing a policy is not licence to quote that
  policy from memory. The statement was added 2026-08-13.

  **The date question is closed, and the answer is that the statement has no date.** It bears none
  on its face (no issue line, no direction-of-the-Commission line, no vote, no signature block), and
  a search of its full three-page text for any month-day-year string returns nothing at all. That is
  the simplest reading of why a judge holding the document wrote only that the FTC issued a policy
  in early 2026. The **release** is confidently dated February 25, 2026 by three independent
  signals (the statement PDF's own CreationDate, the date under the release headline, and that
  page's `article:published_time`); a stray `<time>` element reading February 13 is unsupported and
  unexplained. The site therefore names the policy by year only. See ledger claim 43a.

  **Retrieval, corrected 2026-08-14.** `ftc.gov` gates on **User-Agent**: a default `curl` UA gets
  403, a browser UA gets 200, verified five times in a row including with the exact header
  combination that had failed earlier. An earlier version of this note said the block was
  TLS-fingerprint based and that a browser User-Agent would not defeat it. **That was wrong**,
  generalised from a single 403 that was probably transient rate-limiting.

  **The blocked-looking domains in this folder do not behave alike, so do not carry one rule across
  them.** `ftc.gov` gates on User-Agent. `nmdoj.gov` returns 403 to `curl` whatever the User-Agent
  and needs a real browser. `courtlistener.com` does not block `curl` at all; the 403s seen there
  came from the sandboxed fetcher, not from the domain. `ecf.ca8.uscourts.gov` serves opinion PDFs
  to plain `curl` with no UA games at all. **Test the specific host before concluding anything about
  it**, and prefer reporting the status code you actually saw over naming a mechanism.

  Separately, and still true: Chrome's PDF viewer ignores injected scroll and keyboard input, so a
  PDF opened there has to be downloaded to be read past the first page.
- `ca8-2025-07-08-custom-communications-v-ftc.txt`: *Custom Communications, Inc. v. FTC*, Nos.
  24-3137 et al. (8th Cir., July 8, 2025), the decision vacating the FTC's 2024 Negative Option
  Rule (click-to-cancel). Retrieved 2026-08-14 from the court's own server,
  `ecf.ca8.uscourts.gov`, which serves opinion PDFs to plain `curl` with no User-Agent condition.
  Clean extraction. This is the only adjudicated decision in the FTC ledger, and what it decided
  was procedural.
- `ftc-2023-06-21-amazon-prime-complaint.txt`, `ftc-2025-09-25-amazon-prime-stipulated-order.txt`
  and `ftc-2022-epic-games-complaint.txt`: the three FTC matters behind
  `ftc-control-integrity.md`. Retrieved 2026-08-14 from ftc.gov with a browser User-Agent. **Read
  the headers before quoting any of them**, for three reasons that are easy to get wrong:

  1. **A complaint is an allegation.** "The FTC alleged" is supportable; "the company did" is not.
     The Amazon matter ended in a **stipulated** order, which is an agreement and adjudicates
     nothing. Epic is an FTC **administrative** matter, not a court case.
  2. **The Amazon paragraph numbers differ between complaints.** The cached original (filed
     2023-06-21) and the amended complaint of 2023-09-20 are offset by 14: the End Membership
     allegation is 119 in the original and 133 in the amended. Cite which one.
  3. **Line numbers are inside the text.** US court filings carry a line number in the left margin
     of every line and `pdftotext` keeps it, so collapsing whitespace injects it mid-sentence
     ("devices other than 11 computers and smartphones"). A span crossing a line boundary then
     fails against a perfectly faithful cache. `check-quotes` strips these as normalization 5,
     anchored to line starts. **This produced a false "absent from both complaints" on the single
     best quote in the Amazon record before it was caught**, which is the same shape as every other
     failure recorded in this folder: the query was broken, not the corpus.
- `ftc-2011-chitika-complaint-and-order.txt`: *In the Matter of Chitika, Inc.*, FTC File No.
  102 3087, the complaint and the Decision and Order together in one file. Retrieved 2026-08-14
  from ftc.gov with a browser User-Agent. **This is the most useful document in the FTC ledger and
  it is fifteen years old.** It is the only matter in the corpus where the *remedy*, not just the
  allegation, reads like the specification this project says is missing: Part II.C writes a
  **minimum five-year duration**, a **one-click friction cap**, and a **status display** as
  enforceable order terms, and Part II.D requires a hyperlink to the mechanism inside every ad.
  Two cautions before quoting it:

  1. **It is a consent order.** Chitika settled; nothing was adjudicated and nothing was admitted.
     It binds Chitika and nobody else. "The FTC alleged" for the complaint, "the parties agreed"
     for the order, and never "a court held".
  2. **Part II.C(4) is an inversion, not a win, and the ledger says so at claim 22a.** The scope
     term requires Chitika to **disclose** that the choice is browser-specific, not to make it
     carry across browsers. Read as support for a scope criterion it says the opposite of what it
     looks like: a regulator holding the drafting pen chose transparency about a limit over
     coverage of it.
- `paxton-2025-06-27-free-speech-coalition-v-paxton.txt`: *Free Speech Coalition, Inc. v. Paxton*,
  No. 23-1122 (U.S. June 27, 2025), the 63-page slip opinion from supremecourt.gov, cached
  2026-08-13. **Cached because the section 7 plan made a claim about this case that reading it
  disproved** (it does not say what that plan said about general-audience services; see the
  corrected entry there). No ledger quotes it yet. It is here so the next revision of the paper's
  section 7.2 can cite it verifiably rather than from a summary.
- `bits-of-freedom-2025-10-02-rechtbank-amsterdam.txt` and
  `bits-of-freedom-2026-03-10-gerechtshof-amsterdam.txt`: the two Dutch judgments in *Stichting
  Bits of Freedom v. Meta*, ECLI:NL:RBAMS:2025:7253 and ECLI:NL:GHAMS:2026:594. Retrieved
  2026-08-14 from the Dutch judiciary's open-data API,
  `https://data.rechtspraak.nl/uitspraken/content?id=<ECLI>`, which returns the full body as XML.
  **These fetched cleanly over plain HTTPS with no blocking.** Do not turn that into a ranking of
  which domains block fetches; the earlier version of this line did and was wrong on two of three.
  See the access note under the FTC entry above for what each host actually does.

  **THESE ARE THE FIRST NON-ENGLISH SOURCES IN THE CORPUS, AND THEY CHANGE A RULE.** There is no
  official English text. **An English rendering of a Dutch judgment is a translation, not a
  quotation**, and must never appear on the site inside quotation marks attributed to the court.
  The convention adopted with this ledger, and the one to follow for any future non-English source:
  **the quoted span is the original-language text**, so `npm run check:quotes` can verify it against
  the cache, and the English sits beside it explicitly labelled as a translation. On reader-facing
  pages, paraphrase in the site's own voice and cite the paragraph number rather than quoting Dutch
  at a reader who cannot read it.

  Each file's header also records the attribution trap that the candidate plan fell into: the most
  quotable line in the first-instance judgment is the claimant's contention recited at paragraph
  4.16, not the court's finding. Read those headers before quoting either file.
- `eu-dsa-quote-allowlist.txt`: the drafter-prose quoted spans in `eu-dsa-proceedings.md` that are
  deliberately NOT Commission quotes (rhetorical contrasts, claims the ledger warns against making,
  a term being defined). Same role as the Nov 2023 allowlist. Authored 2026-08-13 when that ledger
  was registered with `npm run check:quotes`; the file itself records the one span that looked like
  it belonged there and did not.
- `ftc-control-integrity-quote-allowlist.txt` and `bits-of-freedom-quote-allowlist.txt`: the same
  role for those two ledgers, authored 2026-08-14 when their Claims sections were brought under the
  check. Both are deliberately tiny, and each records the defects that were **corrected rather than
  allowlisted** when the scope widened, because an allowlist is where a real defect goes to hide.
  The FTC one holds four spans that are quotations of **this site's own `/scorecard`**, verified
  against `src/app/scorecard/page.tsx` by hand and correctly absent from every cache here; no script
  relates them to their real source, so they need re-checking by hand if the scorecard wording
  changes. The Bits of Freedom one holds a single span, and the reason it is only one is the
  original-language convention: because the ledger quotes the Dutch and labels the English as a
  translation, its spans are checkable at all.
- `tennessee-2024-03-13-mtd-order.txt`: Chancellor Perkins's 34-page order denying Meta's motion
  to dismiss, 2024-03-13. This document is public only because the California Attorney General
  filed it as an exhibit on the federal MDL 3047 docket. **It is a scan and the OCR is poor**:
  `Int'l Shoe` renders as `In! '1 Shoe`, `CHANCELLOR` as `CI-IANCELLOR`, `set` as `sct`, and the
  introductory paragraph renders `Section 230` as `Section 320` while the Conclusion renders it
  correctly. Quote from the Conclusion and verify anything else by eye.

## Five normalizations the check is sensitive to (2026-07-25, extended 2026-08-14)

A full re-run over all four hearing ledgers on 2026-07-25 verified **245 of 246** quoted spans.
Getting there required four normalizations; a fifth arrived on 2026-08-14 with the first US court
filings. Each one flips a *different* set of quotes, so a checker that applies some but not others
produces false failures that look like fidelity problems:

1. **Curly punctuation.** The testimony PDFs use curly apostrophes and quotes; the ledgers use
   straight ones. Without folding these together, roughly twenty spans in the May 2026 ledger
   fail. None of them is a real defect.
2. **Elision.** A ledger quote containing `...` is not one string, it is several fragments with
   material deliberately omitted between them. It must be split on the ellipsis and each fragment
   checked separately, or every elided quote fails.
3. **GPO hyphenated line wraps.** The Senate transcripts break words across lines, and the
   extraction preserves the space: `core well- being topics`. The ledger correctly quotes
   `well-being`. Rejoining `-\s+` before comparing is what makes that quote verify.
4. **Typographic ligatures, added 2026-07-25 with the Tennessee order.** Scanned court filings
   carry `ﬁ` (U+FB01) and friends as single characters, so the order reads `sufﬁcient minimum
   contacts` and `speciﬁc personal jurisdiction`. A ledger quoting the ordinary spellings will
   never match. Fold `ﬀ ﬁ ﬂ ﬃ ﬄ` to their letter pairs before comparing. This one is nastier than
   the other three because the two strings are visually identical at normal reading size, so the
   failure looks like a fabricated quote rather than an encoding mismatch.
5. **Court-filing line numbers, added 2026-08-14 with the FTC ledger.** US court filings carry a
   line number in the left margin of every line and `pdftotext` keeps it, so collapsing whitespace
   injects it mid-sentence: `devices other than 11 computers and smartphones`. Any span crossing a
   line boundary then fails against a perfectly faithful cache. Stripped anchored to line starts,
   so a number that genuinely sits mid-sentence survives. **This produced a false "absent from both
   complaints" on the single best quote in the Amazon record**, and the false negative was believed
   for a while because it agreed with what was expected. Same shape as everything else recorded in
   this folder: the query was broken, not the record.

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
