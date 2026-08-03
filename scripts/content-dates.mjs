// Generates (and checks) content-dates.json: the committed map of content path
// to git dates that src/lib/contentDate.ts reads at build time.
//
//   node scripts/content-dates.mjs           regenerate the manifest
//   node scripts/content-dates.mjs --check   fail if it is stale
//
// WHY THIS EXISTS. contentDate.ts used to shell out to `git log` during the
// build. That works locally and did not work on Railway: the deployed site
// served hardcoded fallback dates for weeks, telling crawlers nothing had
// changed since 2026-07-25 while the content was corrected repeatedly, and the
// build stayed green throughout because a wrong date is not a compile error.
// Adding `git` to the build image did not fix it either, and the actual cause
// is not observable from outside Railway.
//
// So the build no longer asks the container anything. Dates are resolved HERE,
// on a machine that demonstrably has git and full history, committed as data,
// and read as data. The build environment cannot silently change the answer,
// and `--check` means the data cannot silently rot.
//
// THE ONE SUBTLETY. A file being changed right now has no commit yet, so its
// git date is the PREVIOUS commit's. Regenerating while that change is
// uncommitted would record a stale date. So a file with uncommitted
// modifications is recorded as today, which is the date its pending commit will
// carry. That makes "edit content, run this, commit both together" correct, and
// it is why --check treats a dirty file as today too.

import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const MANIFEST = path.join(ROOT, "content-dates.json");

function git(args) {
  return execFileSync("git", args, {
    cwd: ROOT,
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

function today() {
  // Local calendar date, matching git's %as (author date, local).
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

// Every path handed to contentDate()/contentCreatedDate() anywhere in src/.
// Derived rather than hand-listed: a new call site with a new path is picked up
// without anyone remembering to add it here. The dynamic ledger paths are
// expanded from the distillations registry for the same reason.
function trackedPaths() {
  const paths = new Set();

  const src = execFileSync("git", ["ls-files", "src"], { cwd: ROOT, encoding: "utf-8" })
    .split("\n")
    .filter((f) => /\.tsx?$/.test(f));

  for (const file of src) {
    const text = fs.readFileSync(path.join(ROOT, file), "utf-8");
    // literal string arguments: contentDate("content/foo.md", "2026-01-01")
    for (const m of text.matchAll(/content(?:Created)?Date\(\s*"([^"`$]+)"/g)) {
      paths.add(m[1]);
    }
  }

  // The markdown-backed routes pass a variable (mdPath) built from the route's
  // own content file, and the ledger routes pass a template literal. Both are
  // enumerable from the filesystem, so add them directly.
  for (const f of execFileSync("git", ["ls-files", "content"], { cwd: ROOT, encoding: "utf-8" })
    .split("\n")
    .filter((f) => f.endsWith(".md"))) {
    paths.add(f);
  }
  for (const f of execFileSync("git", ["ls-files", "docs/distillations"], {
    cwd: ROOT,
    encoding: "utf-8",
  })
    .split("\n")
    .filter((f) => f.endsWith(".md") && !f.includes("/sources/") && !f.includes("/reviews/"))) {
    paths.add(f);
  }
  // the three /for briefing decks, read straight out of docs/proposals
  for (const f of execFileSync("git", ["ls-files", "docs/proposals"], { cwd: ROOT, encoding: "utf-8" })
    .split("\n")
    .filter((f) => /pitch-|movement-brief/.test(f))) {
    paths.add(f);
  }

  paths.delete("");
  // a directory, used for the /distillations index date
  paths.add("docs/distillations");
  // One call site passes a glob pathspec. git resolves it natively, so it is
  // kept verbatim as a manifest key rather than expanded; the key must match
  // the literal string the call site passes or the lookup misses.

  return [...paths].sort();
}

function dirtyPaths() {
  const out = git(["status", "--porcelain"]);
  const set = new Set();
  for (const line of out.split("\n")) {
    const f = line.slice(3).trim();
    if (f) set.add(f.replace(/^"|"$/g, ""));
  }
  return set;
}

function build() {
  const dirty = dirtyPaths();
  const now = today();
  const modified = {};
  const created = {};

  for (const p of trackedPaths()) {
    // A directory or a glob is "modified" when anything it covers is. Both are
    // matched by prefix against the dirty set, which is coarse and deliberately
    // errs toward "today": over-reporting a date costs a needless restamp,
    // under-reporting reintroduces exactly the staleness this file exists to
    // stop.
    const isGlob = p.includes("*");
    const isDir =
      !isGlob && fs.existsSync(path.join(ROOT, p)) && fs.statSync(path.join(ROOT, p)).isDirectory();
    const prefix = isGlob ? p.slice(0, p.indexOf("*")) : `${p}/`;
    const dirtyHere = isDir || isGlob ? [...dirty].some((d) => d.startsWith(prefix)) : dirty.has(p);

    let mod = "";
    try {
      mod = git(["log", "-1", "--format=%as", "--", p]);
    } catch {
      mod = "";
    }
    if (dirtyHere) mod = now;
    if (/^\d{4}-\d{2}-\d{2}$/.test(mod)) modified[p] = mod;

    if (!isDir && !isGlob) {
      let cre = "";
      try {
        cre = git(["log", "--diff-filter=A", "--follow", "-1", "--format=%as", "--", p]);
      } catch {
        cre = "";
      }
      // A file that exists only in the working tree has no adding commit yet.
      if (!cre && dirtyHere) cre = now;
      if (/^\d{4}-\d{2}-\d{2}$/.test(cre)) created[p] = cre;
    }
  }

  return { generated: now, modified, created };
}

const next = build();
const serialized = `${JSON.stringify(next, null, 2)}\n`;

if (process.argv.includes("--check")) {
  if (!fs.existsSync(MANIFEST)) {
    console.error("check:dates FAILED. content-dates.json does not exist. Run `npm run dates`.");
    process.exit(1);
  }
  const current = JSON.parse(fs.readFileSync(MANIFEST, "utf-8"));

  const drift = [];
  const keys = new Set([...Object.keys(next.modified), ...Object.keys(current.modified ?? {})]);
  for (const k of keys) {
    const a = current.modified?.[k];
    const b = next.modified[k];
    if (a !== b) drift.push({ path: k, kind: "modified", committed: a ?? "(missing)", actual: b ?? "(missing)" });
  }
  const ckeys = new Set([...Object.keys(next.created), ...Object.keys(current.created ?? {})]);
  for (const k of ckeys) {
    const a = current.created?.[k];
    const b = next.created[k];
    if (a !== b) drift.push({ path: k, kind: "created", committed: a ?? "(missing)", actual: b ?? "(missing)" });
  }

  if (drift.length === 0) {
    const n = Object.keys(current.modified ?? {}).length;
    console.log(`check:dates OK. content-dates.json matches git for ${n} paths.`);
    process.exit(0);
  }

  console.error(`check:dates FAILED. ${drift.length} path(s) drifted from git history.\n`);
  for (const d of drift) {
    console.error(`  ${d.path}  (${d.kind})`);
    console.error(`    committed: ${d.committed}`);
    console.error(`    actual:    ${d.actual}\n`);
  }
  console.error(
    "Run `npm run dates` and commit content-dates.json alongside the content change.\n" +
      "The manifest is what production reads; git history is not available in the build.\n",
  );
  process.exit(1);
}

fs.writeFileSync(MANIFEST, serialized);
console.log(
  `content-dates.json written: ${Object.keys(next.modified).length} modified, ` +
    `${Object.keys(next.created).length} created, generated ${next.generated}.`,
);
