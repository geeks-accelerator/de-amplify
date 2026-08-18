// check:distillations
//
// Guards the SINGLE-SOURCE distillations in docs/research/single-source/, which no other
// checker in this repo can see. check:ledgers proves the TLDR variants reach their consumers,
// check:quotes proves quoted spans are verbatim against a cache, and check:surfaces proves share
// cards are current. None of them reads this folder, and this folder is the one whose defects are
// invisible by eye: a claim inventory of several hundred rows, cross-referenced by hand.
//
// WHY THIS EXISTS. An audit of the first sixteen files found, in prose that looked immaculate:
// synthesis word counts overstated by up to 32%, compression ratios computed from those wrong
// counts, one file whose claim-count line used different wording from the other fifteen and so was
// invisible to any grep, and 58 claims recorded in the inventories that no cluster, tension or
// output ever picked up while every file asserted its traceability was complete. Not one of those
// is visible by reading. All of them are trivially computable.
//
// WHAT IT CHECKS
//   1. STRUCTURE   every file carries all nine steps
//   2. DANGLING    no claim ID is referenced that was never defined in a table
//   3. ORPHANS     the declared "Unsynthesised claims" list matches the computed one EXACTLY
//   4. ARITHMETIC  the declared synthesis word count matches the measured Step 6 section, and the
//                  declared compression ratio matches source divided by synthesis
//   5. PROVENANCE  every file states its source, URL, fetch date and basis tier
//
// Check 3 is the load-bearing one and it is deliberately two-directional. Declaring an orphan that
// is not one fails just as loudly as failing to declare a real one, because an allowlist that can
// absorb anything is where a real defect hides. The point is not that an orphan rate of zero is
// good; some claims genuinely should not reach an output. The point is that the rate is MEASURED
// and DECLARED rather than quietly asserted away.
//
// NOT COVERED, and it matters: this script proves a file is internally consistent. It cannot prove
// a claim is true, that a quoted span matches its source (these files have no cache, by design,
// because they distil copyrighted journalism), or that a basis tier was assigned correctly. Those
// stay human.

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DIR = "docs/research/single-source";
const red = (s) => `\x1b[31m${s}\x1b[0m`;

const STEPS = [
  "Step 1", "Steps 2 and 3", "Step 4", "Step 5",
  "Step 6", "Step 7", "Step 8", "Step 9",
];

/**
 * Claim IDs referenced in a block of prose, expanding range notation.
 *
 * The ranges are the whole reason this needs a function rather than a regex. Cluster lines are
 * written "C-D The international legislative record (D14 to D18, D22)", and the first version of
 * this matcher did not expand them. It reported five real claims as orphaned in one file and
 * seven in another, and the numbers looked entirely plausible. A checker that over-reports is not
 * a safe failure here: it would have driven a "fix" that retro-fitted clusters which already
 * existed.
 */
function referencedIds(text, prefixes) {
  const ids = new Set();
  for (const m of text.matchAll(/\b([A-Z]{1,2}\d{1,3})\b/g)) ids.add(m[1]);
  for (const m of text.matchAll(/\b([A-Z]{1,2})(\d{1,3})\s+(?:to|through)\s+([A-Z]{1,2})?(\d{1,3})\b/g)) {
    const [, p, a, p2, b] = m;
    if (p2 && p2 !== p) continue;
    for (let n = Number(a); n <= Number(b); n++) ids.add(`${p}${n}`);
  }
  return new Set([...ids].filter((i) => prefixes.has(i.match(/^([A-Z]{1,2})/)[1])));
}

function definedIds(text) {
  const out = new Map();
  for (const m of text.matchAll(/^\|\s*([A-Z]{1,2}\d{1,3})\s*\|\s*([^|]{0,140})/gm)) {
    out.set(m[1], m[2].trim());
  }
  return out;
}

const numOf = (s) => Number(s.replace(/\D/g, ""));
const sortIds = (a, b) => (a[0] === b[0] ? numOf(a) - numOf(b) : a[0].localeCompare(b[0]));

// ---- self-test the matchers against known answers before trusting a clean run.
// A checker that reports green because its own matcher is broken is this repo's recurring failure
// mode. Refuse to run rather than reproduce it.
(function selfTest() {
  const p = new Set(["D", "R", "X"]);
  const got = referencedIds("cluster (D14 to D18, D22) and R33 through R35 plus X9", p);
  const posRange = ["D14", "D15", "D16", "D17", "D18"].every((i) => got.has(i));
  const posThrough = ["R33", "R34", "R35"].every((i) => got.has(i));
  const posPlain = got.has("X9");
  const negOver = !got.has("D19");                       // range must not run past its end
  const negPrefix = !referencedIds("Q7", new Set(["D"])).has("Q7"); // foreign prefix ignored
  const def = definedIds("| R1 | a claim |\n| notR | x |\ntext R2 here\n");
  const negDef = def.size === 1 && def.has("R1");        // only leading table cells define
  if (!posRange || !posThrough || !posPlain || !negOver || !negPrefix || !negDef) {
    console.error(red("check:distillations ABORTED: its own matcher failed the self-test."));
    console.error(`  range 'to' ${posRange}, range 'through' ${posThrough}, plain id ${posPlain} (all want true)`);
    console.error(`  over-expansion guard ${negOver}, foreign-prefix guard ${negPrefix}, define-only-in-table guard ${negDef} (all want true)`);
    process.exit(1);
  }
})();

const dir = path.join(ROOT, DIR);
if (!fs.existsSync(dir)) {
  console.error(red(`check:distillations FAILED. Declared directory is missing: ${DIR}`));
  console.error("A declared-but-absent directory is a loud failure, never a silent skip.");
  process.exit(1);
}

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md").sort();
if (files.length === 0) {
  console.error(red(`check:distillations FAILED. ${DIR} contains no distillations.`));
  process.exit(1);
}

const failures = [];
let totalClaims = 0;
let totalOrphans = 0;

for (const f of files) {
  const rel = `${DIR}/${f}`;
  const t = fs.readFileSync(path.join(dir, f), "utf-8");
  const fail = (kind, detail) => failures.push({ file: rel, kind, detail });

  // 1. STRUCTURE
  const missing = STEPS.filter((s) => !t.includes(`## ${s}`));
  if (missing.length) fail("structure", `missing step heading(s): ${missing.join(", ")}`);

  // 2 and 3. claim inventory
  const def = definedIds(t);
  if (def.size === 0) {
    fail("structure", "no atomic-claim table rows found; the extraction step is empty");
    continue;
  }
  totalClaims += def.size;
  const prefixes = new Set([...def.keys()].map((k) => k.match(/^([A-Z]{1,2})/)[1]));
  // Strip BOTH the defining table cell and the declaration line itself before scanning for
  // references. The declaration necessarily names every orphan, so leaving it in makes every
  // declared orphan look referenced and the check can never pass. The checker found this in
  // itself on its first run, which is the argument for two-directional checks in one line.
  const body = t
    .replace(/^\|\s*[A-Z]{1,2}\d{1,3}\s*\|/gm, "|")
    .replace(/\*\*Unsynthesised claims \(declared\):\*\*[^\n]*/g, "");
  const ref = referencedIds(body, prefixes);

  const dangling = [...ref].filter((i) => !def.has(i)).sort(sortIds);
  if (dangling.length) fail("dangling", `referenced but never defined in a table: ${dangling.join(", ")}`);

  const computed = [...def.keys()].filter((k) => !ref.has(k)).sort(sortIds);
  totalOrphans += computed.length;
  const m = t.match(/\*\*Unsynthesised claims \(declared\):\*\*\s*([^.]*)\./);
  if (!m) {
    fail("orphans", `no "Unsynthesised claims (declared):" line. Computed: ${computed.length ? computed.join(", ") : "none"}`);
  } else {
    const raw = m[1].trim();
    const declared = /^none$/i.test(raw) ? [] : raw.split(",").map((s) => s.trim()).filter(Boolean).sort(sortIds);
    const missingDecl = computed.filter((c) => !declared.includes(c));
    const extraDecl = declared.filter((d) => !computed.includes(d));
    if (missingDecl.length) fail("orphans", `unsynthesised but NOT declared: ${missingDecl.join(", ")}`);
    if (extraDecl.length) fail("orphans", `declared unsynthesised but actually referenced: ${extraDecl.join(", ")}`);
  }

  // 4. ARITHMETIC
  const s6 = t.match(/## Step 6:[\s\S]*?\n([\s\S]*?)\n## Step 7/);
  if (!s6) {
    fail("arithmetic", "could not isolate the Step 6 synthesis block");
  } else {
    const syn = s6[1].split(/\s+/).filter(Boolean).length;
    const declSyn = t.match(/\*\*Synthesis \(Step 6\):\*\*\s*(\d+)\s*words \(measured\)/);
    if (!declSyn) fail("arithmetic", `no measured synthesis word count declared (actual: ${syn})`);
    else if (Number(declSyn[1]) !== syn) fail("arithmetic", `synthesis declared ${declSyn[1]} words, measured ${syn}`);

    const srcM = t.match(/\*\*Source:\*\*\s*([\d,]+)\s*words\./) ||
                 t.match(/\*\*Source length:\*\*\s*approx\.\s*([\d,]+)\s*words/);
    const ratioM = t.match(/\*\*([\d.]+):1 word compression\*\*/);
    if (srcM && ratioM) {
      const src = Number(srcM[1].replace(/,/g, ""));
      const want = Math.round((src / syn) * 10) / 10;
      if (Math.abs(Number(ratioM[1]) - want) > 0.05) {
        fail("arithmetic", `word compression declared ${ratioM[1]}:1, computed ${want}:1 from ${src}/${syn}`);
      }
    }
  }

  // 5. PROVENANCE
  if (!/\*\*Source:\*\*/.test(t)) fail("provenance", "no **Source:** line");
  if (!/https?:\/\//.test(t)) fail("provenance", "no URL");
  if (!/(Fetched|Transcript obtained|Transcript:)/.test(t)) fail("provenance", "no fetch or transcript date");
  if (!/(Basis tier|Basis|basis tier)/.test(t)) fail("provenance", "no basis tier stated");
}

if (failures.length) {
  console.error(red(`check:distillations FAILED. ${failures.length} problem(s) across ${files.length} file(s).`));
  for (const f of failures) {
    console.error(`\n  ${f.file}`);
    console.error(`    [${f.kind}] ${f.detail}`);
  }
  console.error(
    "\nFor an orphan mismatch the fix direction is the FILE first: either cluster the claim, or\n" +
      "declare it. Editing the declaration to match a stale computation is the tempting wrong move,\n" +
      "and it is the move that makes the number meaningless.\n",
  );
  process.exit(1);
}

const rate = ((totalOrphans / totalClaims) * 100).toFixed(1);
console.log(
  `check:distillations OK. ${files.length} files, ${totalClaims} atomic claims, ` +
    `${totalOrphans} declared unsynthesised (${rate}%), 0 dangling references.`,
);
console.log(
  "  NOT covered: whether a claim is TRUE, whether a quoted span matches its source (these files\n" +
    "  carry no cache, by design, since they distil copyrighted journalism), and whether a basis tier\n" +
    "  was assigned correctly. This guard proves internal consistency, never accuracy.",
);
