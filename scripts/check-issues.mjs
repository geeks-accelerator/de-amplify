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
//   5. INDEX       INDEX.md and the directory match EXACTLY, in both directions, INCLUDING the
//                  status cell, which this check did not read until 2026-08-20
//   6. REVISITED   a closed issue accounts for every file it declared as `related`, with a
//                  disposition and a reason
//   7. TENSIONS    the ledger-Tension count this directory's README declares is recomputed here
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

// WHY `revisited` EXISTS, and why it is a declaration rather than a scan.
//
// On 2026-08-20 the press-conference issue closed, and BOTH files it had declared in `related`
// were left carrying prose the closure had just falsified: a research README still gave a retry
// procedure whose key step could not work, and a plan still called the item unobtained in three
// separate places. Nothing went red. Every guard in this repo was green throughout, because they
// all check machine-readable surfaces and this was prose.
//
// The tempting fix is to scan docs/research and docs/plans for words like "still", "pending" or
// "not obtained". THAT IS THE WRONG INSTRUMENT AND THIS REPO HAS SAID SO: the posture vocabulary
// in check:surfaces is scoped hard to share cards and structured data precisely because prose is
// allowed to discuss pending things, and one comment becoming a standing multi-file gate is a
// documented past injury here. A scan over research prose would fire on every honest sentence
// about an open question, of which this corpus is largely made.
//
// What IS checkable is that somebody looked. Each issue already declares which documents depend on
// it, so closing one can be required to account for each of them. This proves the ACCOUNT EXISTS,
// never that it is true, the same boundary check:quotes draws at attribution and check:guards
// draws at description. The run says so rather than letting green imply more.
//
// Calibration, measured before this was written: of the nine related-file pairs across five closed
// issues, seven had in fact been revisited correctly and two needed a decision. A rule that fires
// on two of nine is worth having; one that fired on all nine would have been noise.
const DISPOSITIONS = ["updated", "no-change-needed"];
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

      // 6. REVISITED. Every file this issue declared as related must be accounted for.
      const related = Array.isArray(fm.related) ? fm.related : [];
      const declared = Array.isArray(fm.revisited) ? fm.revisited : fm.revisited ? [fm.revisited] : [];
      const seen = new Map();
      for (const entry of declared) {
        const parts = String(entry).split("::").map((x) => x.trim());
        if (parts.length !== 3) {
          fail("revisited", `entry is not "path :: disposition :: reason": ${String(entry).slice(0, 80)}`);
          continue;
        }
        const [target, disposition, reason] = parts;
        if (!DISPOSITIONS.includes(disposition)) {
          fail("revisited", `"${target}" has disposition "${disposition}", not one of ${DISPOSITIONS.join(", ")}`);
        }
        if (!reason) fail("revisited", `"${target}" carries no reason, and the reason is the whole value of the entry`);
        if (seen.has(target)) fail("revisited", `"${target}" is accounted for twice`);
        seen.set(target, disposition);
        if (!related.includes(target)) {
          fail("revisited", `"${target}" is accounted for but is not in related:, so nothing declared that dependency`);
        }
      }
      for (const r of related) {
        if (!seen.has(r)) {
          fail(
            "revisited",
            `related file "${r}" is not accounted for in revisited:. Closing an issue falsifies prose in ` +
              `the documents that depended on it, and nothing else in this repo can see that. Open it, decide, ` +
              `and record: "${r} :: updated|no-change-needed :: why".`,
          );
        }
      }
    } else if (fm.revisited) {
      fail("status", `status is ${fm.status} but a revisited: is set, which only a closed issue accounts for`);
    }
    if (fm.status !== "closed") {
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

// 7. THE TENSION COUNT, declared in this directory's README and recomputed here.
//
// The README's boundary table tells the reader how many ledger Tensions exist, because the whole
// argument for the boundary is that the Tensions are numerous and they work. That number was
// hand-written as 62 and was WRONG THE DAY IT WAS WRITTEN: the corpus held 63 at that commit, and
// 64 by 2026-08-20. It is the third time this repo has found a count living only in prose, after
// the quote-span total and the guard list, and the fix is the one that worked twice: one declared
// home, recomputed by a tool. A number nobody can recompute is a number nobody can trust, and this
// one is load-bearing for an argument rather than decorative.
{
  const ledgerDir = path.join(ROOT, LEDGERS);
  let tensions = 0;
  let sections = 0;
  if (fs.existsSync(ledgerDir)) {
    for (const f of fs.readdirSync(ledgerDir).filter((x) => x.endsWith(".md"))) {
      const lines = fs.readFileSync(path.join(ledgerDir, f), "utf-8").split("\n");
      let inside = false;
      for (const line of lines) {
        if (/^## Tensions/.test(line)) { inside = true; sections++; continue; }
        if (inside && /^## /.test(line)) { inside = false; continue; }
        if (inside && /^- /.test(line)) tensions++;
      }
    }
  }
  // A counter that silently reads nothing would report a clean corpus it never opened, which is
  // this repo's recurring failure. Abort rather than compare against zero.
  if (!sections || !tensions) {
    console.error(red("check:issues ABORTED: the Tension counter found no sections or no bullets."));
    console.error(`  ${sections} Tensions section(s), ${tensions} bullet(s). Expected both non-zero.`);
    process.exit(1);
  }
  const readme = path.join(ROOT, DIR, "README.md");
  const text = fs.existsSync(readme) ? fs.readFileSync(readme, "utf-8") : "";
  const m = text.match(/\*\*(\d+) of them\*\* across (\d+) ledgers/);
  if (!m) {
    failures.push({
      file: `${DIR}/README.md`,
      kind: "tensions",
      detail:
        `declares no Tension count matching "**N of them** across M ledgers". Computed ${tensions} ` +
        `across ${sections} ledgers. Declare it there; a count that lives only in prose has gone ` +
        `stale every time this repo has written one.`,
    });
  } else if (Number(m[1]) !== tensions || Number(m[2]) !== sections) {
    failures.push({
      file: `${DIR}/README.md`,
      kind: "tensions",
      detail:
        `declares ${m[1]} Tensions across ${m[2]} ledgers; computed ${tensions} across ${sections}. ` +
        `The ledgers are the record and the README is the assertion about them, so update the README.`,
    });
  }
  globalThis.__tensionCount = tensions;
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
  "  NOT covered: whether a revisited: disposition is TRUE. This proves the account exists and\n" +
    "  that every declared dependency has one, never that the file was really re-read or that it\n" +
    "  really needed no change. Same boundary check:quotes draws at attribution.\n" +
    "  NOT covered: whether an issue DUPLICATES a ledger Tension, which is the failure this\n" +
    `  directory most needs to avoid. There are ${globalThis.__tensionCount} open Tensions across the ledgers and they own\n` +
    "  every question about the record of one proceeding. Read the relevant one before adding a\n" +
    "  file here. This guard proves the shape of an issue, never that it belongs.",
);
