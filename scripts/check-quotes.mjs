// check:quotes
//
// Verifies that every double-quoted span in a hearing ledger is a verbatim
// substring of that ledger's committed source cache in
// docs/distillations/sources/, or of its drafter-prose allowlist.
//
// WHY THIS EXISTS. The source caches were committed precisely so this check is
// reproducible by anyone ("any substring-matching tool can confirm that a quoted
// span appears in its named source", sources/README.md). Until now it was prose:
// the four normalizations were documented, the 2026-07-25 result was recorded,
// and there was no way to re-run it. The two lesser drift checks were automated
// and the one that guards quote fidelity on a public legal site was not.
//
// THE FIVE NORMALIZATIONS, and why all five or none. Each flips a DIFFERENT set
// of quotes, so applying some but not others produces failures that read exactly
// like fidelity defects:
//
//   1. Curly punctuation. Testimony PDFs use curly apostrophes; ledgers use
//      straight. Without folding, ~20 spans in the May 2026 ledger fail.
//   2. Elision. A span containing "..." is several fragments with material
//      deliberately omitted between them, not one string. Split and check each.
//   3. GPO hyphenated line wraps. The Senate transcripts break words across
//      lines and the extraction keeps the space: "core well- being". The ledger
//      correctly quotes "well-being".
//   4. Typographic ligatures. Scanned filings carry U+FB01 and friends as single
//      characters, so "sufficient" never matches "sufﬁcient". This one is the
//      nastiest: the two strings are visually identical at reading size, so the
//      failure looks like a fabricated quote rather than an encoding mismatch.
//   5. Court-filing line numbers, added 2026-08-14 with the FTC ledger. US court
//      filings carry a line number in the left margin of every line and
//      pdftotext keeps it, so collapsing whitespace injects it mid-sentence:
//      "devices other than 11 computers and smartphones". Any span crossing a
//      line boundary then fails against a perfectly faithful cache. Stripped
//      anchored to line starts, so a number inside a sentence survives. This
//      produced a false "absent from both complaints" on the best quote in the
//      Amazon record before it was caught, which is the same shape as every
//      other failure in this corpus: the query was broken, not the record.
//
// WHAT THIS CANNOT DO. Substring matching proves a span is verbatim. It says
// NOTHING about who said it. On 2026-07-24 /hearings attributed Bejar's line to
// Sen. Blumenthal and passed every check, because the string really is in the
// transcript. In a witness quote-bank the speaker is the SUBSECTION; the senator
// in the parenthetical is the questioner. Attribution stays a by-eye check on
// every re-seed. See sources/README.md.

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "docs", "distillations", "sources");
const DOCS = path.join(ROOT, "docs", "distillations");

// Registry. Only ledgers listed here are checked, and UNREGISTERED LEDGERS ARE
// REPORTED, not silently skipped: a check that quietly covers half the corpus
// reads as an all-clear over the whole of it.
//
// The four hearing ledgers map one-to-one onto a cache and are checked whole.
// AS OF 2026-08-18 EVERY LEDGER IS REGISTERED; this registry has no absentees
// left to explain. What varies is scope: ledgers that quote product names and
// drafter framing ("Time Spent", "Take a Break") alongside record quotes carry
// an allowlist authored the way the Nov 2023 one was, and ledgers whose caches
// reach only part of the record are scoped with `sections`. (An earlier version
// of this comment explained why the lawsuit ledgers were absent. It survived
// their registration by a few hours, which is why the coverage line in
// sources/README.md is now asserted below rather than trusted.)
// `sections` (optional) scopes a ledger to the headings whose spans are anchored
// to the cache. Without it the whole ledger is checked. It exists for records
// where only PART of the ledger has a cached source: the New Mexico ledger's
// judgment-anchored claims are verifiable against the order, while its
// pre-judgment history quotes coverage that is not cached and never will be.
// Scoping is stated in the output, so a partially-covered ledger cannot read as
// a fully-covered one. The alternative, dumping every coverage-sourced span into
// an allowlist, would assert "deliberately not from the cached source" about 44
// spans nobody re-checked, which manufactures confidence instead of testing it.
const LEDGERS = {
  "hearing-2023-11-07-teen-mental-health": {
    sources: ["CHRG-118shrg60432.txt"],
    allowlist: "hearing-2023-11-07-quote-allowlist.txt",
  },
  "hearing-2024-01-31-big-tech-child-safety": { sources: ["CHRG-118shrg57444.txt"] },
  "hearing-2026-05-13-courtroom-to-congress": { sources: ["senate-2026-05-13-testimony-combined.txt"] },
  "hearing-2025-12-02-legislative-solutions": { sources: ["house-2025-12-02-testimony-combined.txt"] },
  // MDL 3047, registered 2026-08-18 when the ledger acquired its first quoted
  // spans from documents this repository can cache: the states' penalty and
  // disgorgement reply, the trial-protocol order, the pretrial order, and the
  // civil minutes for the opening trial day. SCOPED to the sections those four
  // documents actually cover. The rest of this ledger quotes Meta's Dkt 455, the
  // JPML reports and secondary coverage, none of which is cached.
  //
  // (e.1) WAS MISSING FROM THIS LIST FOR ONE DAY, and the omission is the reason
  // that subsection exists at all. The registration pass scoped this ledger to
  // section (i), where the new trial-day quotes were, and section (e) had
  // meanwhile acquired three claims quoting Dkt 473 -- the single most
  // consequential correction in that pass, that the widely reported $200 billion
  // is Meta's own revenue and not the states' demand. Its cache was registered
  // here and its spans were checked by nothing. That is this script's documented
  // blind spot, reproduced in the very pass that documents it, exactly as it
  // happened to the FTC and Bits of Freedom ledgers on 2026-08-14. SCOPE TO WHAT
  // THE CACHE COVERS, NOT TO WHERE YOU EXPECT THE QUOTES TO BE, and re-read this
  // list every time a registered ledger grows a section.
  //
  // Now scoped to (e) WHOLE, because Meta's Dkt 455 is cached as of 2026-08-18
  // and (e.1) was only ever a workaround for its absence. Those four spans carry
  // the $1.4 trillion framing, the most-quoted number on this site, and until
  // this cache landed they rested on a by-eye read of a PDF the repository did
  // not keep. The subsection stays: it is where the states' own filing is
  // distinguished from Meta's, which is the distinction the whole correction
  // turns on, and (e) owns its subsections anyway.
  "mdl-3047": {
    sources: [
      "mdl-3047-2026-07-06-dkt455-penalty-opposition.txt",
      "mdl-3047-2026-08-10-ca9-24-7032-collateral-order-opinion.txt",
      "mdl-3047-2026-07-13-dkt473-penalty-disgorgement-reply.txt",
      "mdl-3047-2026-08-16-dkt534-pretrial-order-8.txt",
      "mdl-3047-2026-08-18-dkt549-trial-protocol.txt",
      "mdl-3047-2026-08-18-dkt550-civil-minutes.txt",
    ],
    allowlist: "mdl-3047-quote-allowlist.txt",
    sections: ["(e) Money / exposure", "(i) The trial itself, day one", "(j) The appellate track"],
  },
  // California, registered 2026-08-18, taking the unguarded ledger count to ZERO.
  // The scope is deliberately tiny and the reason is the finding: CALIFORNIA
  // STATE COURT RECORDS ARE NOT IN A FREE ARCHIVE. There is no RECAP for the Los
  // Angeles Superior Court, and the Court of Appeal portal blocks automated
  // lookups, so the only primary this project can hold for JCCP 5255 is the
  // court's own public notice. Every other quoted span in this ledger is wire
  // coverage, a party release, or the drafter framing a coverage phrase, and no
  // amount of work makes those verifiable against a court document.
  //
  // Registering it anyway is the point. "NOT checked, no allowlist authored"
  // reads like undone work; "PARTIALLY checked, only section (a)" states the
  // actual shape of the evidence, which is that this case is the site's most
  // coverage-dependent record. That is also the case where the project published
  // "upheld on appeal" about a verdict no appellate court had reviewed.
  "california-state-bellwethers": {
    sources: ["ca-jccp5255-2026-02-13-public-notice.txt"],
    sections: ["(a) The JCCP 5255 proceeding and the court"],
  },
  // Tennessee, registered 2026-08-18, taking the unguarded ledger count from two
  // to one. Two caches, and the scope follows what they cover: the complaint
  // anchors the control-integrity count in (b), the motion-to-dismiss order
  // anchors what the court has decided in (c). Everything else in this ledger is
  // courtroom reporting from the live trial, cross-references to the MDL, or the
  // drafter's own framing, none of which is cached and none of which ever will be.
  //
  // Registration caught nothing wrong in the ledger and one thing wrong in a
  // CACHE, which is a first for this script. See the Lbl note in the deviations
  // list below and in sources/README.md.
  "tennessee-v-meta": {
    sources: ["tennessee-2023-10-24-unredacted-complaint.txt", "tennessee-2024-03-13-mtd-order.txt"],
    allowlist: "tennessee-quote-allowlist.txt",
    sections: ["(b) The control-integrity count", "(c) What the court has actually decided"],
  },
  "new-mexico-v-meta": {
    // Two caches: the judgment, and the FTC release the judgment discusses. The
    // FTC one was added when a quote from it, correctly attributed in the ledger
    // to the FTC and not to the court, failed against the judgment cache. That
    // failure was the checker working: a span must match a source this ledger
    // actually declares, and "the court considered an FTC policy" is not licence
    // to quote the policy from memory.
    sources: [
      "new-mexico-2026-08-06-final-judgment.txt",
      "ftc-2026-02-25-coppa-age-verification-press-release.txt",
      "ftc-2026-02-25-coppa-age-verification-policy-statement.txt",
    ],
    sections: ["(g) The final judgment"],
  },
  // The corpus's first non-English source. The quoted spans are the DUTCH
  // originals, which is the only way this check means anything: an English
  // rendering of a Dutch judgment is a translation, and would fail against the
  // cache exactly as it should. The ledger carries the translation beside each
  // span, labelled as one.
  "bits-of-freedom-v-meta": {
    sources: [
      "bits-of-freedom-2025-10-02-rechtbank-amsterdam.txt",
      "bits-of-freedom-2026-03-10-gerechtshof-amsterdam.txt",
    ],
    allowlist: "bits-of-freedom-quote-allowlist.txt",
    sections: ["Claims (the ledger)", "Quotes"],
  },
  "ftc-control-integrity": {
    sources: [
      "ca8-2025-07-08-custom-communications-v-ftc.txt",
      "ftc-2023-06-21-amazon-prime-complaint.txt",
      "ftc-2025-09-25-amazon-prime-stipulated-order.txt",
      "ftc-2022-epic-games-complaint.txt",
      "ftc-2011-chitika-complaint-and-order.txt",
    ],
    allowlist: "ftc-control-integrity-quote-allowlist.txt",
    sections: ["Claims (the ledger)", "Quotes"],
  },
  "eu-dsa-proceedings": {
    sources: ["ec-ip-26-312.txt", "ec-ip-26-920.txt", "ec-ip-26-1579.txt", "ec-ip-26-1679.txt"],
    allowlist: "eu-dsa-quote-allowlist.txt",
  },
};

// Spans known to deviate from their source, recorded rather than silently
// carried. A span listed here is reported and does NOT fail the run; anything
// else that fails does. Keep this list short and every entry explained.
const KNOWN_DEVIATIONS = [
  {
    ledger: "hearing-2025-12-02-legislative-solutions",
    span: "Up to 95% of youth ages 13-17 report using a social media platform",
    why:
      "The written testimony reads 13-17 with an EN DASH; the ledger wrote a hyphen. Restoring the " +
      "en dash would make the ledger fail the house-style sweep, which exempts sources/ and reviews/ " +
      "but not the ledgers. Left as a hyphen inside a numeric range where the dash carries no meaning.",
  },
  {
    ledger: "tennessee-v-meta",
    span:
      "the efficacy of Instagram's 'well-being' related platform features (such as the 'Time Spent' feature).",
    why:
      "A FAULT IN THE CACHE, not in the ledger, and the first one this script has found. The span " +
      "is faithful: the complaint really does say it, at paragraph 411, and 'Time Spent' occurs 20 " +
      "times in the cache, so the query works. It straddles a page break, and the extraction of " +
      "this PDF injects a page footer plus eight lines of the literal string Lbl between " +
      "Instagram's \"well- and being\" related platform features. Lbl is a tagged-PDF list-label " +
      "artifact and it appears 364 times in this cache. Stripping it would not fix this span, " +
      "because the statutory footer sits in the gap too, so no normalization reaches it. Recorded " +
      "rather than allowlisted, because an allowlist entry would assert this span is deliberately " +
      "not from the cached source, and it is. Close it by re-extracting the complaint from the " +
      "original PDF with the labels suppressed. See sources/README.md.",
  },
];

const LIGATURES = { "ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl" };

/**
 * The normalizations, plus whitespace folding. Applied to BOTH sides.
 *
 * 5 was added 2026-08-14 with the first federal court filings. Complaints filed
 * in US district courts carry a LINE NUMBER in the left margin of every line,
 * and `pdftotext -layout` keeps it, so collapsing whitespace injects it into the
 * middle of the sentence: "devices other than 11 computers and smartphones".
 * A quoted span that crosses a line boundary then fails against a cache that is
 * perfectly faithful, which reads as a fidelity defect and is not one. This cost
 * a false "absent from both complaints" on the single best quote in the Amazon
 * record before it was spotted.
 *
 * The strip is deliberately anchored and narrow: line start, at most 8 spaces of
 * indent, one or two digits, then at least two spaces. Requiring the double
 * space is what keeps it from eating real text like a line beginning "15 U.S.C."
 * It must run BEFORE the whitespace collapse, which is the only reason it can be
 * anchored to a line start at all.
 */
function normalize(s) {
  return s
    .replace(/[ﬀ-ﬄ]/g, (c) => LIGATURES[c]) // 4: ligatures
    .replace(/[‘’‛]/g, "'") // 1: curly apostrophes
    .replace(/[“”]/g, '"') // 1: curly quotes
    .replace(/^[ \t]{0,8}\d{1,2}[ \t]{2,}/gm, "") // 5: court-filing line numbers
    .replace(/-\s+/g, "-") // 3: GPO hyphenated line wraps
    .replace(/\s+/g, " ")
    .trim();
}

/** 2: elision. A quote with an ellipsis is fragments, not one string. */
function fragments(span) {
  return span
    .split(/\.\.\.|…/)
    .map(normalize)
    .filter((f) => f.length > 0);
}

/**
 * Every double-quoted span in the body (frontmatter is YAML, not a record).
 * When `sections` is given, only spans under a heading whose text starts with
 * one of those strings are returned.
 */
function quotedSpans(markdown, sections) {
  const body = markdown.replace(/^---\n[\s\S]*?\n---\n/, "");
  let text = body;
  if (sections && sections.length) {
    // A matched section OWNS ITS SUBSECTIONS. The first version of this matched
    // heading text only, so adding a "#### (g.1) Age Assurance" under a scoped
    // "### (g) The final judgment" silently dropped 30 newly added spans from
    // coverage while the run still said OK. Partial, silent coverage loss is the
    // exact failure this script exists to prevent, so scoping now tracks heading
    // DEPTH: once a heading matches, everything deeper than it is included until
    // a heading at the same or a shallower level closes it.
    const chunks = [];
    let matchedDepth = null;
    for (const part of body.split(/\n(?=#{2,6} )/)) {
      const h = part.match(/^(#{2,6}) (.+)/);
      if (!h) {
        if (matchedDepth !== null) chunks.push(part);
        continue;
      }
      const depth = h[1].length;
      if (matchedDepth !== null && depth > matchedDepth) {
        chunks.push(part); // a subsection of a matched section
        continue;
      }
      matchedDepth = sections.some((s) => h[2].startsWith(s)) ? depth : null;
      if (matchedDepth !== null) chunks.push(part);
    }
    text = chunks.join("\n");
    if (!chunks.length) return null; // scoped to nothing: a broken config, not a clean run
  }
  return [...text.matchAll(/"([^"\n]+)"/g)].map((m) => m[1]);
}

function read(p) {
  return fs.readFileSync(p, "utf8");
}

// ---------------------------------------------------------------------------
// Self-test. A checker whose matcher is broken reports a clean corpus, which is
// the failure mode this repo keeps hitting: "a search that returns nothing is a
// claim about your query". So prove the matcher on known answers BEFORE trusting
// it on the real thing, and refuse to run if it cannot tell a planted error from
// a real quote.
// ---------------------------------------------------------------------------
function selfTest() {
  const cases = [
    ["ligature", "sufﬁcient minimum contacts", "sufficient minimum contacts", true],
    ["curly apostrophe", "the company’s own homework", "the company's own homework", true],
    ["curly quote", "a “placebo” feature", 'a "placebo" feature', true],
    ["hyphen line wrap", "core well- being topics", "core well-being topics", true],
    ["whitespace", "one   two\nthree", "one two three", true],
    // negative controls: the matcher MUST reject these
    ["planted word change", "the company's own homework", "the company's own homework assignment", false],
    ["planted en dash", "ages 13–17 report", "ages 13-17 report", false],
  ];
  const failed = [];
  for (const [name, source, span, shouldMatch] of cases) {
    const got = fragments(span).every((f) => normalize(source).includes(f));
    if (got !== shouldMatch) failed.push(`${name}: expected ${shouldMatch ? "match" : "no match"}, got ${got}`);
  }
  // elision must split rather than compare whole
  const elided = fragments('measure our help by whether it helped ... and that was not adopted');
  if (elided.length !== 2) failed.push(`elision: expected 2 fragments, got ${elided.length}`);
  return failed;
}

const selfTestFailures = selfTest();
if (selfTestFailures.length) {
  console.error("check:quotes ABORTED. The matcher failed its own self-test, so a green run would be meaningless.\n");
  for (const f of selfTestFailures) console.error(`  ${f}`);
  console.error("\nFix normalize()/fragments() before trusting any result from this script.\n");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// The run
// ---------------------------------------------------------------------------
const failures = [];
const deviations = [];
const scoped = [];
const perLedger = [];
let checked = 0;

for (const [slug, cfg] of Object.entries(LEDGERS)) {
  const ledgerPath = path.join(DOCS, `${slug}.md`);
  if (!fs.existsSync(ledgerPath)) {
    failures.push({ slug, span: "(none)", detail: `registered ledger ${slug}.md does not exist` });
    continue;
  }

  // A declared source or allowlist that is missing must be loud. Falling back to
  // an empty string would make every span "unverifiable" or, worse, make the
  // allowlist vacuous: exactly how the first draft of this script reported five
  // phantom failures against an allowlist it had never opened.
  const corpus = [];
  for (const s of cfg.sources) {
    const p = path.join(SRC, s);
    if (!fs.existsSync(p)) {
      failures.push({ slug, span: "(none)", detail: `declared source cache is missing: sources/${s}` });
      continue;
    }
    corpus.push(normalize(read(p)));
  }
  let allowlist = null;
  if (cfg.allowlist) {
    const p = path.join(SRC, cfg.allowlist);
    if (!fs.existsSync(p)) {
      failures.push({ slug, span: "(none)", detail: `declared allowlist is missing: sources/${cfg.allowlist}` });
    } else {
      allowlist = normalize(read(p));
    }
  }
  if (!corpus.length) continue;

  const spans = quotedSpans(read(ledgerPath), cfg.sections);
  if (spans === null) {
    failures.push({
      slug,
      span: "(none)",
      detail: `sections ${JSON.stringify(cfg.sections)} matched no heading in ${slug}.md, so this ledger was silently unchecked. Fix the section name.`,
    });
    continue;
  }
  if (spans.length === 0) {
    failures.push({ slug, span: "(none)", detail: "extracted zero quoted spans, which means the extractor broke" });
    continue;
  }
  if (cfg.sections) scoped.push(`${slug} (only: ${cfg.sections.join(", ")})`);
  perLedger.push(`${String(spans.length).padStart(4)}  ${slug}`);

  for (const span of spans) {
    checked++;
    const frags = fragments(span);
    const ok = frags.every((f) => corpus.some((c) => c.includes(f)) || (allowlist && allowlist.includes(f)));
    if (ok) continue;

    const known = KNOWN_DEVIATIONS.find((k) => k.ledger === slug && normalize(k.span) === normalize(span));
    if (known) {
      deviations.push({ slug, span, why: known.why });
      continue;
    }
    const bad = frags.filter((f) => !corpus.some((c) => c.includes(f)) && !(allowlist && allowlist.includes(f)));
    failures.push({
      slug,
      span,
      detail:
        `not a verbatim substring of ${cfg.sources.join(" / ")}` +
        (cfg.allowlist ? ` nor of ${cfg.allowlist}` : "") +
        `\n    unmatched fragment: ${bad[0] ?? "(whole span)"}`,
    });
  }
}

// Coverage, stated every run. Silence about what is NOT checked reads as an
// all-clear over the whole corpus.
const registered = new Set(Object.keys(LEDGERS));

// The coverage line in sources/README.md is DECLARED there and RECOMPUTED here,
// the same two-directional shape as the corpus census in check:distillations.
// It earned this on 2026-08-18: the count was written into three prose homes as
// 476 and was stale in all three within hours (483 by evening). A missing line
// is a loud failure, not a skip; that is how the 476 survived.
{
  const readmePath = path.join(SRC, "README.md");
  if (!fs.existsSync(readmePath)) {
    failures.push({ slug: "(coverage)", span: "(none)", detail: "sources/README.md is missing, so the declared coverage line cannot be checked" });
  } else {
    const m = read(readmePath).match(/\*\*(\d+) spans across all (\d+) registered ledgers\*\*/);
    if (!m) {
      failures.push({
        slug: "(coverage)",
        span: "(none)",
        detail: `sources/README.md declares no coverage line matching "**N spans across all M registered ledgers**". Computed: ${checked} spans, ${registered.size} ledgers. Declare it; a count that lives only in prose drifts.`,
      });
    } else {
      if (Number(m[1]) !== checked || Number(m[2]) !== registered.size) {
        failures.push({
          slug: "(coverage)",
          span: "(none)",
          detail: `sources/README.md declares ${m[1]} spans across ${m[2]} ledgers; computed ${checked} across ${registered.size}. Update the README's coverage line to match the corpus (the corpus is the record; the README is the assertion about it).`,
        });
      }
    }
  }

  // ONE DECLARED HOME, AND THE OTHERS MAY NOT RESTATE IT.
  //
  // The count above is asserted. These files are asserted to stay SILENT about
  // it, which is the other half of the same rule and the half that was missing.
  // By 2026-08-18 the number had been written into four prose homes and had gone
  // stale in every one of them: the repo README still said 432 across eight
  // ledgers a day after it was 483 across eleven, on the project's own front
  // page. Asserting a number in five places does not make five guards, it makes
  // five things to forget. Point at the checker's output instead.
  //
  // Scoped to the front-door docs on purpose. `docs/plans/` is EXEMPT and must
  // stay exempt: those are dated records, and "took coverage 404 -> 432" is a
  // true sentence about July that would be vandalised by an update. A guard that
  // rewrites history to satisfy itself is worse than no guard.
  for (const doc of ["README.md", "CONTRIBUTING.md", "CLAUDE.md"]) {
    const p = path.join(ROOT, doc);
    if (!fs.existsSync(p)) continue;
    const hits = [...read(p).matchAll(/(\d+)\s+spans?\b/g)].map((h) => h[0]);
    if (hits.length) {
      failures.push({
        slug: "(coverage)",
        span: "(none)",
        detail:
          `${doc} states a span count (${hits.join(", ")}), and it is not allowed to. ` +
          `The count lives in exactly one place, the coverage line of sources/README.md, which this ` +
          `script asserts. Replace the number with a pointer to \`npm run check:quotes\`; a count ` +
          `restated in prose has gone stale every single time it has been written here.`,
      });
    }
  }
}
const allLedgers = fs
  .readdirSync(DOCS)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""));
const unregistered = allLedgers.filter((s) => !registered.has(s));

if (failures.length === 0) {
  console.log(
    `check:quotes OK. ${checked} quoted spans verified verbatim across ${registered.size} ledgers` +
      (deviations.length ? `, ${deviations.length} known deviation(s).` : "."),
  );
  // Per-ledger counts, printed every run. A silent DROP in one ledger is how
  // scoping bugs hide: the total still looks healthy and the run still says OK.
  console.log(`\n  spans checked per ledger:\n    ${perLedger.join("\n    ")}`);
  for (const d of deviations) {
    console.log(`\n  known deviation, ${d.slug}:\n    "${d.span}"\n    ${d.why}`);
  }
  if (scoped.length) {
    console.log(`
  PARTIALLY checked (only the sections named, because only part of the ledger has a cached source):
    ${scoped.join("\n    ")}`);
  }
  if (unregistered.length) {
    console.log(
      `\n  NOT checked (no source cache mapping / allowlist authored): ${unregistered.join(", ")}.` +
        `\n  Verbatim fidelity on those ledgers is unverified by this script.`,
    );
  }
  console.log(
    `\n  Reminder: this proves VERBATIM, never ATTRIBUTION. The speaker is the quote-bank subsection;` +
      `\n  the senator in the parenthetical is the questioner. Check attribution by eye on every re-seed.`,
  );
  process.exit(0);
}

console.error(`check:quotes FAILED. ${failures.length} of ${checked} quoted spans did not verify.\n`);
for (const f of failures) {
  console.error(`  ${f.slug}`);
  console.error(`    span: "${f.span}"`);
  console.error(`    ${f.detail}\n`);
}
console.error(
  "A span fails when it is not verbatim in its cached source. Before assuming the ledger is wrong,\n" +
    "check the five normalizations in this file: a ligature, a curly apostrophe, or a court-filing\n" +
    "line number crossing the span produces a failure\n" +
    "that looks identical to a fabricated quote. Fix the LEDGER to match the record, never the record.\n",
);
process.exit(1);
