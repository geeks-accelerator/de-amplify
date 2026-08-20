// check:surfaces
//
// Guards the SHARE CARDS and STRUCTURED DATA against the record, which is the one
// class of drift every other checker in this repo is blind to.
//
// WHY THIS EXISTS. On 2026-08-14 an external review found that five surfaces still
// described New Mexico's abatement phase as pending, three weeks after the court
// entered final judgment. The ledger was right. The curated pages were right.
// `check:ledgers` was green, because it proves the TLDR variants reach their
// consumers, and `check:quotes` was green, because it proves quoted spans are
// verbatim. Neither can notice that an OG card chip says "decision pending" about
// a decided case.
//
// The reason the re-seed missed it generalises: OG cards and JSON-LD are TSX, not
// markdown. The ledger-first pass edits content/, and nothing reads a share card.
// Those are exactly the surfaces crawlers, agents and social previews ingest, and
// exactly the ones no human re-reads.
//
// TWO CHECKS, deliberately different in kind:
//
//   1. FIGURES (structural). Every dollar figure on a case's share card must
//      appear in that case's ledger. The ledger is the source of truth, so a
//      figure that is not in it is either stale or invented. The hub card and the
//      FAQ JSON-LD are checked against the hub page they summarize.
//
//   2. POSTURE (vocabulary). Words that assert a case is UNDECIDED (pending,
//      requested, weighing, awaiting, sought, proposed) are flagged wherever they
//      appear on these surfaces, and must be allowlisted with a reason. This half
//      is a blunt instrument on purpose: it is cheap, it would have caught the
//      2026-08-14 defect, and a false alarm costs one line in the allowlist while
//      a false all-clear ships a decided case as open.
//
// The vocabulary half is scoped HARD to share cards and structured data. It is not
// a repo-wide word ban: prose is allowed to discuss pending things, and this repo
// has been burned before by one comment becoming a standing multi-file gate.

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const red = (s) => `\x1b[31m${s}\x1b[0m`;

// surface -> the corpus its claims must be consistent with.
// A per-case card is checked against that case's LEDGER (source of truth).
// The hub card and the hub's FAQ JSON-LD are checked against the hub PAGE, which
// is itself ledger-seeded and guarded by check:ledgers, so the chain holds.
const SURFACES = [
  {
    file: "src/app/lawsuits/new-mexico-v-meta/opengraph-image.tsx",
    corpus: ["docs/distillations/new-mexico-v-meta.md"],
  },
  {
    file: "src/app/lawsuits/tennessee-v-meta/opengraph-image.tsx",
    corpus: ["docs/distillations/tennessee-v-meta.md"],
  },
  {
    file: "src/app/lawsuits/mdl-3047/opengraph-image.tsx",
    corpus: ["docs/distillations/mdl-3047.md"],
  },
  {
    // the route is kgm-v-meta; its ledger is the California bellwethers one
    file: "src/app/lawsuits/kgm-v-meta/opengraph-image.tsx",
    corpus: ["docs/distillations/california-state-bellwethers.md"],
  },
  {
    file: "src/app/lawsuits/opengraph-image.tsx",
    corpus: ["content/lawsuits.md"],
  },
  {
    file: "src/app/lawsuits/page.tsx",
    corpus: ["content/lawsuits.md"],
    // only the structured data, not the whole route file
    sectionRe: /const FAQ_JSON_LD[\s\S]*?\n};/,
  },
];

// Words that assert a matter is not yet decided. Flagged on the surfaces above.
const POSTURE = ["pending", "requested", "weighing", "awaiting", "sought", "proposed", "seeking"];

// Each entry needs a REASON. An allowlist without one is where a real defect hides.
const POSTURE_ALLOW = [
  {
    file: "src/app/lawsuits/tennessee-v-meta/opengraph-image.tsx",
    word: "sought",
    reason:
      "Tennessee IS undecided: in trial, evidence began 2026-07-27. The card says 'design order sought', which is the accurate posture for a live case. Re-check when the Chancellor rules.",
  },
  {
    file: "src/app/lawsuits/page.tsx",
    word: "proposed",
    reason:
      "Same answer: the $1.4T ceiling rests on four states' PROPOSED penalty counting. That counting has been proposed and not adopted, so the word is the accurate posture.",
  },
];

function read(rel) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) {
    console.error(red(`check:surfaces FAILED. Declared file is missing: ${rel}`));
    console.error("A declared-but-absent file is a loud failure, never a silent skip.");
    process.exit(1);
  }
  return fs.readFileSync(p, "utf-8");
}

/** "$567M" / "$6 million" / "~$1.4T" -> the numeric core, e.g. "567", "6", "1.4" */
function figures(text) {
  const out = new Set();
  const re = /\$\s?(\d[\d,]*(?:\.\d+)?)\s*(million|billion|trillion|M\b|B\b|T\b)?/g;
  let m;
  while ((m = re.exec(text))) out.add(m[1].replace(/,/g, ""));
  return [...out];
}

/**
 * Does the corpus assert this figure AS MONEY?
 *
 * The dollar sign is required, and that is the whole point. An earlier version made
 * it optional (`\$?`), which reduced the check to "does this number appear anywhere"
 * and would have been satisfied by a paragraph number, a claim number, a line
 * reference or a date. The ledgers are full of those: "see page 567", "claim 6",
 * "paragraph 375". A guard against stale FIGURES that any bare integer can satisfy
 * is not a guard, and this one is cheap to get right because every figure it
 * extracts came from a `$`-prefixed token in the first place.
 *
 * Matches "$567", "$567M", "$567 million", "$567,000,000.00" and "~$1.4T".
 */
function corpusHasFigure(corpusText, n) {
  const bare = n.replace(".", "\\.");
  return new RegExp(`\\$\\s?${bare}\\b`).test(corpusText);
}

// ---- self-test the matchers against known answers before trusting a clean run.
// A checker that reports green because its own matcher is broken is this repo's
// recurring failure mode; refuse to run rather than reproduce it.
(function selfTest() {
  const f = figures('chips: ["$375M jury + $567M fund", "~$1.4T estimate", "$6 million"]');
  const expect = ["375", "567", "1.4", "6"];
  const ok = expect.every((e) => f.includes(e)) && f.length === expect.length;
  const pos = corpusHasFigure("the court ordered $567,000,000.00 into a fund", "567");
  const neg = corpusHasFigure("the court ordered $567,000,000.00 into a fund", "999");
  // the money control: a bare integer must NOT satisfy a dollar figure, or this
  // check degrades into "does this number appear anywhere" and passes on any
  // paragraph number, claim number or date the ledger happens to contain
  const bare = corpusHasFigure("see page 567 of the order, and claim 6", "567");
  if (!ok || !pos || neg || bare) {
    console.error(red("check:surfaces ABORTED: its own matcher failed the self-test."));
    console.error(`  figures() -> ${JSON.stringify(f)} (expected ${JSON.stringify(expect)})`);
    console.error(`  positive control ${pos} (want true), negative control ${neg} (want false)`);
    console.error(`  bare-integer control ${bare} (want false: a page number is not a dollar figure)`);
    process.exit(1);
  }
})();

const failures = [];
let figureChecks = 0;
let postureChecks = 0;

for (const s of SURFACES) {
  let text = read(s.file);
  if (s.sectionRe) {
    const m = text.match(s.sectionRe);
    if (!m) {
      failures.push({
        file: s.file,
        kind: "scope",
        detail: "the declared section pattern matched nothing; the guard would silently check nothing",
      });
      continue;
    }
    text = m[0];
  }
  const corpusText = s.corpus.map(read).join("\n");

  for (const n of figures(text)) {
    figureChecks++;
    if (!corpusHasFigure(corpusText, n)) {
      failures.push({
        file: s.file,
        kind: "figure",
        detail: `the figure ${n} appears on this surface but nowhere in ${s.corpus.join(", ")}`,
      });
    }
  }

  const lower = text.toLowerCase();
  for (const w of POSTURE) {
    if (!new RegExp(`\\b${w}\\b`).test(lower)) continue;
    postureChecks++;
    const allowed = POSTURE_ALLOW.find((a) => a.file === s.file && a.word === w);
    if (!allowed) {
      failures.push({
        file: s.file,
        kind: "posture",
        detail: `asserts an undecided posture with "${w}". If the matter really is undecided, add it to POSTURE_ALLOW with a reason. If it was decided, this surface is stale.`,
      });
    }
  }
}

if (failures.length) {
  console.error(red(`check:surfaces FAILED. ${failures.length} problem(s) on share cards or structured data.`));
  for (const f of failures) {
    console.error(`\n  ${f.file}`);
    console.error(`    [${f.kind}] ${f.detail}`);
  }
  console.error(
    "\nThe fix direction is the record first: confirm the ledger, then re-seed the surface.\n" +
      "Editing the ledger to match a stale share card is the tempting wrong move.\n",
  );
  process.exit(1);
}

// EVERY ALLOWLIST ENTRY MUST STILL MATCH SOMETHING. Added 2026-08-20, when the $1.4T FAQ answer
// was rewritten to stop calling that figure "requested" and this script went on printing the
// entry excusing the word as though it were live. An allowlist is where a real defect goes to
// hide, so an entry that excuses nothing is worse than clutter: it asserts a considered
// justification for a posture claim that is not on the surface any more, and it makes the
// allowlist look more deliberate than it is. Same shape as the index blind spot found in
// check:issues the same day: the check reported a state that had stopped being true.
{
  const stale = POSTURE_ALLOW.filter((a) => {
    const p = path.join(ROOT, a.file);
    if (!fs.existsSync(p)) return true;
    return !new RegExp(`\\b${a.word}\\b`, "i").test(fs.readFileSync(p, "utf-8"));
  });
  if (stale.length) {
    console.error(red(`check:surfaces FAILED. ${stale.length} POSTURE_ALLOW entr(ies) no longer match anything.`));
    for (const a of stale) {
      console.error(`\n  "${a.word}" in ${a.file} is allowlisted and does not appear there.`);
      console.error(`    reason on file: ${a.reason}`);
    }
    console.error(
      "\nDelete the entry. An allowlist excusing a word that is not on the surface asserts a\n" +
        "justification for nothing, and it is the place this repo has said real defects go to hide.\n",
    );
    process.exit(1);
  }
}

console.log(
  `check:surfaces OK. ${figureChecks} figure(s) and ${postureChecks} posture word(s) checked ` +
    `across ${SURFACES.length} share-card and structured-data surfaces.`,
);
for (const a of POSTURE_ALLOW) {
  console.log(`  allowed posture: "${a.word}" in ${a.file}`);
  console.log(`    reason: ${a.reason}`);
}
console.log(
  "  NOT covered: OG cards outside src/app/lawsuits, and any claim that is not a dollar\n" +
    "  figure or a posture word. This guard proves currency of numbers and posture, never prose.",
);
