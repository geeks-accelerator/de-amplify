// check:guards
//
// Asserts that every guard this repository has is listed everywhere it claims to list its guards:
// the four surfaces a person or a CI run would consult. It is the smallest checker here and it
// exists because this is the most-repeated documentation defect in the project.
//
// WHY THIS EXISTS. Four instances, all found by hand:
//   * check:surfaces (added 2026-08-14) never reached CONTRIBUTING.md.
//   * check:distillations (added 2026-08-18) never reached CONTRIBUTING.md either.
//   * Fixing those two, a rule was written into CONTRIBUTING.md saying "if you add a guard, add it
//     here in the same commit" -- and the same pass did not check README.md or CLAUDE.md, both of
//     which were missing check:distillations, and README.md was missing check:issues as well.
//   * check:issues (added 2026-08-18) reached three surfaces and not the fourth.
//
// The shape of the failure is always identical: the guard runs in CI, so nothing goes red, and the
// only cost is that a contributor following the documented list runs an incomplete set and learns
// the rest at review time. That is precisely the "a guard nobody is told about is a guard that only
// fails at review time" problem, and it is mechanical, so it should not be a habit.
//
// This script asserts ITSELF into the lists too, which is not a trick: a completeness checker that
// exempted itself would be the first thing to fall out of the documentation it polices.
//
// PRESENCE IS NOT ENOUGH, and the first draft of this script proved it. It searched each file for
// the string anywhere, so a guard merely DISCUSSED in prose satisfied it. Fault-injecting the check
// by deleting check:surfaces from CLAUDE.md's command block passed, because the same file discusses
// that guard elsewhere at length. A checker whose fault injection does not fail is the exact failure
// this repo keeps naming, so the markdown surfaces now require the command inside a FENCED CODE
// BLOCK: the runnable list is the thing a contributor copies, and being talked about is not being
// listed. The CI workflow is matched plainly, since YAML has no fences.
//
// NOT COVERED: whether a guard is DESCRIBED accurately. The comment beside each command is prose
// and prose is not checkable. This proves it is listed, never that the description is right.

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const red = (s) => `\x1b[31m${s}\x1b[0m`;

// Every surface that presents itself as the list of guards, and what it is for.
const SURFACES = [
  ["README.md", "the repo's front page, where a reader judges the project", "fenced"],
  ["CONTRIBUTING.md", "what a contributor is told to run", "fenced"],
  ["CLAUDE.md", "the operational guide this project works from", "fenced"],
  [".github/workflows/ci.yml", "what actually runs on a pull request", "plain"],
];

/** Only the fenced code blocks of a markdown file: the part a reader copies and runs. */
const fencedOnly = (text) =>
  [...text.matchAll(/```[a-z]*\n([\s\S]*?)```/g)].map((m) => m[1]).join("\n");

const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf-8"));
const guards = Object.keys(pkg.scripts || {})
  .filter((s) => s.startsWith("check:"))
  .sort();

// ---- self-test: the extractor must find guards at all, and must not pick up non-guards.
(function selfTest() {
  const posFound = guards.length >= 3;
  const negScope = !guards.includes("build") && !guards.includes("dates");
  if (!posFound || !negScope) {
    console.error(red("check:guards ABORTED: its own script extractor failed the self-test."));
    console.error(`  found ${guards.length} check:* scripts (want >= 3), non-guard exclusion ${negScope} (want true)`);
    process.exit(1);
  }
})();

if (!guards.length) {
  console.error(red("check:guards FAILED. package.json declares no check:* scripts."));
  process.exit(1);
}

const failures = [];
for (const [file, why, mode] of SURFACES) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) {
    failures.push({ file, detail: `declared surface is missing (${why})` });
    continue;
  }
  const raw = fs.readFileSync(p, "utf-8");
  const haystack = mode === "fenced" ? fencedOnly(raw) : raw;
  const absent = guards.filter((g) => !haystack.includes(g));
  if (absent.length) {
    const where = mode === "fenced" ? "is not in any runnable code block" : "does not appear";
    const alsoProse = absent.filter((g) => raw.includes(g));
    failures.push({
      file,
      detail:
        `${where}: ${absent.join(", ")}\n    This file is ${why}, so a guard missing here is one that surface does not tell anyone to run.` +
        (alsoProse.length
          ? `\n    Note: ${alsoProse.join(", ")} IS discussed in the prose of this file. Being talked about is not being listed.`
          : ""),
    });
  }
}

if (failures.length) {
  console.error(red(`check:guards FAILED. ${guards.length} guard(s) declared, ${failures.length} surface(s) incomplete.`));
  for (const f of failures) console.error(`\n  ${f.file}\n    ${f.detail}`);
  console.error(
    "\nAdd the command to the list in each file, with a one-line note on when to run it. This has\n" +
      "been the most-repeated documentation defect in this repo, which is why it is now checked\n" +
      "rather than remembered.\n",
  );
  process.exit(1);
}

console.log(
  `check:guards OK. ${guards.length} guards (${guards.join(", ")}) listed on all ${SURFACES.length} surfaces, ` +
    `in a runnable block on each of the ${SURFACES.filter((s) => s[2] === "fenced").length} markdown ones.`,
);
console.log(
  "  NOT covered: whether each guard is DESCRIBED accurately. Presence is checkable; the prose\n" +
    "  beside each command is not.",
);
