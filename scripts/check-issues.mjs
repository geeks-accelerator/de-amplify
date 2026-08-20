// check:issues
//
// Guards docs/issues/, the standing-threads directory, which is the fourth place this repository
// tracks unfinished business and therefore the one most able to become noise.
//
// WHY THIS EXISTS. The other three homes are self-policing in ways this one is not. A ledger
// Tension is published with its ledger, so it is read. A plan is a dated record that closes. A
// KNOWN_DEVIATIONS entry is printed by check:quotes on every run. A folder of markdown files is
// read by nobody unless something insists, and an issue tracker that nobody reads is worse than no
// issue tracker, because it launders open questions into the appearance of being tracked.
//
// WHAT IT CHECKS
//   1. SCHEMA      every issue carries title, status, opened, closes_when, surface, all non-empty
//   2. STATUS      status is one of open/blocked/parked/closed, and closed carries closed+resolution
//                  while the others carry neither
//   3. DATES       opened and closed are real ISO dates, closed is not before opened, neither is in
//                  the future
//   4. RELATED     every related: entry resolves to a real file or a registered ledger slug
//   5. INDEX       INDEX.md and the directory match EXACTLY, in both directions
//
// NOT COVERED, and it is the important one: this script cannot tell whether an issue DUPLICATES a
// ledger Tension. That is the failure this directory most needs to avoid and it is a human read,
// the same way attribution is in check:quotes. The run prints that rather than letting green imply
// an answer it does not have.

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DIR = "docs/issues";
const LEDGERS = "docs/distillations";
const red = (s) => `\x1b[31m${s}\x1b[0m`;

const STATUSES = ["open", "blocked", "parked", "closed"];
const REQUIRED = ["title", "status", "opened", "closes_when", "surface", "trigger"];

/**
 * Minimal frontmatter reader. Deliberately not a YAML library.
 *
 * These files are authored to one documented shape and the shape is five scalars plus one optional
 * list. Pulling in a parser would buy edge cases nobody writes and hide the one thing that matters,
 * which is that a missing key is a LOUD failure rather than an undefined that reads as empty.
 */
function frontmatter(text, file, fail) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) {
    fail("schema", "no frontmatter block");
    return null;
  }
  const out = {};
  let key = null;
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (kv) {
      key = kv[1];
      const raw = kv[2].trim();
      if (raw.startsWith("[")) {
        out[key] = [...raw.matchAll(/"([^"]*)"/g)].map((x) => x[1]);
      } else {
        out[key] = raw.replace(/^"(.*)"$/, "$1");
      }
      continue;
    }
    // a bare "- item" continuation of a list key
    const li = line.match(/^\s*-\s*"?(.+?)"?\s*$/);
    if (li && key) {
      if (!Array.isArray(out[key])) out[key] = [];
      out[key].push(li[1]);
    }
  }
  return out;
}

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const isFuture = (d, today) => d > today;

// ---- self-test the reader against known answers before trusting a clean run. A checker whose
// parser silently returns empty reports a clean directory, which is this repo's recurring failure.
(function selfTest() {
  const noop = () => {};
  const ok = frontmatter(
    `---\ntitle: "A thread"\nstatus: open\nopened: 2026-08-18\ncloses_when: "x happens"\nsurface: "none yet"\ntrigger: "none"\nrelated: ["mdl-3047"]\n---\nbody\n`,
    "t",
    noop,
  );
  const posScalar = ok && ok.title === "A thread" && ok.status === "open";
  const posList = ok && Array.isArray(ok.related) && ok.related[0] === "mdl-3047";
  const multiline = frontmatter(
    `---\ntitle: "B"\nrelated:\n  - "a"\n  - "b"\n---\nx\n`,
    "t",
    noop,
  );
  const posMultiline = multiline && Array.isArray(multiline.related) && multiline.related.length === 2;
  let failed = false;
  frontmatter("no frontmatter here\n", "t", () => {
    failed = true;
  });
  const negMissing = failed; // a file without frontmatter must FAIL, not parse to {}
  const negQuotes = ok && !ok.closes_when.startsWith('"'); // surrounding quotes stripped

  if (!posScalar || !posList || !posMultiline || !negMissing || !negQuotes) {
    console.error(red("check:issues ABORTED: its own frontmatter reader failed the self-test."));
    console.error(`  scalar ${posScalar}, inline list ${posList}, block list ${posMultiline} (all want true)`);
    console.error(`  missing-frontmatter guard ${negMissing}, quote-stripping ${negQuotes} (both want true)`);
    process.exit(1);
  }
})();

const dir = path.join(ROOT, DIR);
if (!fs.existsSync(dir)) {
  console.error(red(`check:issues FAILED. Declared directory is missing: ${DIR}`));
  console.error("A declared-but-absent directory is a loud failure, never a silent skip.");
  process.exit(1);
}

const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".md") && f !== "README.md" && f !== "INDEX.md")
  .sort();

const ledgerSlugs = new Set(
  fs.existsSync(path.join(ROOT, LEDGERS))
    ? fs.readdirSync(path.join(ROOT, LEDGERS)).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
    : [],
);

// Today, as the repo's own manifest sees it. Not new Date() alone: a clock skew should not turn a
// correct file red, so this only ever catches dates that are wrong by more than a day.
const today = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

const failures = [];
const counts = Object.fromEntries(STATUSES.map((s) => [s, 0]));
/** filename -> declared status, so the index can be checked against the files rather than trusted. */
const statusOf = new Map();

for (const f of files) {
  const rel = `${DIR}/${f}`;
  const t = fs.readFileSync(path.join(dir, f), "utf-8");
  const fail = (kind, detail) => failures.push({ file: rel, kind, detail });

  if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9-]+\.md$/.test(f)) {
    fail("schema", "filename must be YYYY-MM-DD-slug.md, dated when the thread OPENED");
  }

  const fm = frontmatter(t, rel, fail);
  if (!fm) continue;
  if (fm.status) statusOf.set(f, fm.status);

  // 1. SCHEMA
  for (const k of REQUIRED) {
    if (!fm[k] || String(fm[k]).trim() === "") {
      fail("schema", `missing or empty required key: ${k}`);
    }
  }

  // 2. STATUS
  if (fm.status && !STATUSES.includes(fm.status)) {
    fail("status", `status "${fm.status}" is not one of ${STATUSES.join(", ")}`);
  } else if (fm.status) {
    counts[fm.status]++;
    if (fm.status === "closed") {
      if (!fm.closed) fail("status", "status is closed but no closed: date");
      if (!fm.resolution) fail("status", "status is closed but no resolution:, so nothing records what ended it");
    } else {
      if (fm.closed) fail("status", `status is ${fm.status} but a closed: date is set`);
      if (fm.resolution) fail("status", `status is ${fm.status} but a resolution: is set`);
    }
  }

  // 3. DATES
  for (const k of ["opened", "closed"]) {
    if (!fm[k]) continue;
    if (!ISO.test(fm[k])) fail("dates", `${k} "${fm[k]}" is not an ISO date`);
    else if (isFuture(fm[k], today)) fail("dates", `${k} "${fm[k]}" is in the future`);
  }
  if (fm.opened && fm.closed && ISO.test(fm.opened) && ISO.test(fm.closed) && fm.closed < fm.opened) {
    fail("dates", `closed ${fm.closed} is before opened ${fm.opened}`);
  }

  // 4. RELATED. A pointer that does not resolve is worse than no pointer: it reads as provenance.
  for (const r of fm.related || []) {
    const isLedger = ledgerSlugs.has(r);
    const isFile = fs.existsSync(path.join(ROOT, r));
    const isIssue = fs.existsSync(path.join(dir, r));
    if (!isLedger && !isFile && !isIssue) {
      fail("related", `"${r}" is neither a ledger slug, a repo path, nor a file in ${DIR}`);
    }
  }
}

// 5. INDEX, two-directional.
const indexPath = path.join(dir, "INDEX.md");
if (!fs.existsSync(indexPath)) {
  failures.push({ file: `${DIR}/INDEX.md`, kind: "index", detail: "the index is missing" });
} else {
  const idx = fs.readFileSync(indexPath, "utf-8");
  const listed = new Set([...idx.matchAll(/\]\((\d{4}-\d{2}-\d{2}-[a-z0-9-]+\.md)\)/g)].map((m) => m[1]));
  for (const f of files) {
    if (!listed.has(f)) failures.push({ file: `${DIR}/INDEX.md`, kind: "index", detail: `${f} exists but is not in the index` });
  }
  for (const l of listed) {
    if (!files.includes(l)) failures.push({ file: `${DIR}/INDEX.md`, kind: "index", detail: `${l} is indexed but does not exist` });
  }

  // The STATUS COLUMN, which this check did not read until 2026-08-20 and should have from the
  // start. Presence in both directions was never the interesting half: an index whose rows all
  // exist can still describe every one of them wrongly, and it did. Closing the press-conference
  // issue left its row reading `open` and this script printed OK, which is precisely the shape of
  // failure the whole directory exists to prevent, committed by the thing guarding it.
  for (const row of idx.matchAll(/\]\((\d{4}-\d{2}-\d{2}-[a-z0-9-]+\.md)\)\s*\|\s*`([a-z]+)`/g)) {
    const [, file, shown] = row;
    const actual = statusOf.get(file);
    if (actual && shown !== actual) {
      failures.push({
        file: `${DIR}/INDEX.md`,
        kind: "index",
        detail: `the index shows ${file} as \`${shown}\` and the file declares \`${actual}\`. The file is the record; fix the index row.`,
      });
    }
  }
  // Every row must actually carry a status cell, or the loop above silently checks nothing.
  const rowsWithStatus = [...idx.matchAll(/\]\((\d{4}-\d{2}-\d{2}-[a-z0-9-]+\.md)\)\s*\|\s*`([a-z]+)`/g)].length;
  if (rowsWithStatus !== listed.size) {
    failures.push({
      file: `${DIR}/INDEX.md`,
      kind: "index",
      detail: `${listed.size} issue(s) are indexed but only ${rowsWithStatus} row(s) carry a \`status\` cell the checker can read. A row without one is unchecked, so the format is load-bearing: | [title](file.md) | \`status\` | ... |`,
    });
  }
}

if (failures.length) {
  console.error(red(`check:issues FAILED. ${failures.length} problem(s) across ${files.length} file(s).`));
  for (const f of failures) {
    console.error(`\n  ${f.file}`);
    console.error(`    [${f.kind}] ${f.detail}`);
  }
  console.error(
    "\nThe schema is documented in docs/issues/README.md. The three mandatory fields that look\n" +
      "optional are the point of the directory: closes_when stops an issue being a mood, trigger\n" +
      "beats a reminder, and surface answers where a fact goes BEFORE it is verified rather than\n" +
      "after.\n",
  );
  process.exit(1);
}

const open = counts.open + counts.blocked + counts.parked;
console.log(
  `check:issues OK. ${files.length} issues, ${open} unresolved ` +
    `(${counts.open} open, ${counts.blocked} blocked, ${counts.parked} parked), ${counts.closed} closed.`,
);
console.log(
  "  NOT covered: whether an issue DUPLICATES a ledger Tension, which is the failure this\n" +
    "  directory most needs to avoid. There are 60+ open Tensions across the ledgers and they own\n" +
    "  every question about the record of one proceeding. Read the relevant one before adding a\n" +
    "  file here. This guard proves the shape of an issue, never that it belongs.",
);
