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
// THE FOUR NORMALIZATIONS, and why all four or none. Each flips a DIFFERENT set
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
// The remaining lawsuit ledgers are absent for a reason: they quote product
// names and drafter framing ("Time Spent", "Take a Break") alongside record
// quotes, so they need an allowlist authored the way the Nov 2023 ledger has one
// before they can be checked. Registering them without it would produce 40 red
// lines that are not fidelity defects, which trains everyone to ignore the check.
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
  "new-mexico-v-meta": {
    // Two caches: the judgment, and the FTC release the judgment discusses. The
    // FTC one was added when a quote from it, correctly attributed in the ledger
    // to the FTC and not to the court, failed against the judgment cache. That
    // failure was the checker working: a span must match a source this ledger
    // actually declares, and "the court considered an FTC policy" is not licence
    // to quote the policy from memory.
    sources: [
      "new-mexico-2026-08-06-final-judgment.txt",
      "ftc-2026-coppa-age-verification-policy-statement.txt",
    ],
    sections: ["(g) The final judgment"],
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
];

const LIGATURES = { "ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl" };

/** The four normalizations plus whitespace folding. Applied to BOTH sides. */
function normalize(s) {
  return s
    .replace(/[ﬀ-ﬄ]/g, (c) => LIGATURES[c]) // 4: ligatures
    .replace(/[‘’‛]/g, "'") // 1: curly apostrophes
    .replace(/[“”]/g, '"') // 1: curly quotes
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
    "check the four normalizations in this file: a ligature or a curly apostrophe produces a failure\n" +
    "that looks identical to a fabricated quote. Fix the LEDGER to match the record, never the record.\n",
);
process.exit(1);
