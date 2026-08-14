// check:ledgers
//
// Guards the verbatim-TLDR contract described in CLAUDE.md: each budgeted
// summary variant in a ledger's TLDR block has exactly one consumer, and that
// consumer is supposed to carry the string verbatim.
//
// Most consumers are parsed from the ledger at build time by
// src/lib/distillations.ts, so they cannot drift. The ones checked here are the
// ones a human copies by hand, which are exactly the ones that have drifted:
//
//   - One line (label)      -> the hub card in content/lawsuits.md or
//                              content/hearings.md
//   - One paragraph         -> the "case in one paragraph" opener on the
//                              curated case page
//   - Search snippet        -> DESCRIPTION in the case page's route file
//   - One sentence (card)   -> the JSON-LD description in the same route file
//
// Two real defects motivated this, both of which shipped:
//
//   1. On 2026-07-25 the California ledger was corrected and its case page was
//      re-seeded in the body and the header but NOT in the opener, so
//      /lawsuits/kgm-v-meta said a trial "is set for July 27" for eight days
//      after that trial had dissolved, while the same page explained two
//      sections lower that it never happened.
//   2. Earlier, the search snippet briefly had two consumers, which put
//      IDENTICAL meta descriptions on two indexable URLs about the same case.
//      The ledger-snippet variant exists to break that tie, so this script also
//      asserts the two snippets stay in their own lanes.
//
// This imports the real loadDistillation rather than reimplementing the TLDR
// parser, so the check can never disagree with what the build actually reads.

import fs from "fs";
import path from "path";
import { DISTILLATIONS, loadDistillation } from "../src/lib/distillations.ts";

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const exists = (p) => fs.existsSync(path.join(root, p));

// Route files embed strings as TS literals, so an escaped quote in the source
// (\") is a plain quote in the rendered string. Whitespace is folded because a
// hand-wrapped TSX literal breaks lines where the markdown does not.
const norm = (s) => s.replace(/\\"/g, '"').replace(/\s+/g, " ").trim();

const failures = [];
const checks = [];

function check(ok, { ledger, variant, consumer, detail }) {
  checks.push({ ok, ledger, variant, consumer });
  if (!ok) failures.push({ ledger, variant, consumer, detail });
}

for (const meta of DISTILLATIONS) {
  const d = loadDistillation(meta.slug);

  // The hub is the parent surface of whatever this ledger sits behind:
  // /lawsuits/<case> and /lawsuits both hub at content/lawsuits.md, /hearings at
  // content/hearings.md. Derived rather than mapped by kind, so a new kind that
  // hangs off an existing hub needs no change here.
  const hubFile = `content/${meta.related.href.split("/")[1]}.md`;
  if (!exists(hubFile)) {
    check(false, {
      ledger: meta.slug,
      variant: "One line (label)",
      consumer: hubFile,
      detail: `hub file does not exist (derived from related.href "${meta.related.href}")`,
    });
  } else {
    const hub = norm(read(hubFile));
    check(hub.includes(norm(d.label)), {
      ledger: meta.slug,
      variant: "One line (label)",
      consumer: hubFile,
      detail: `ledger has:\n      ${d.label}\n    but that string is not in ${hubFile}. Copy it verbatim; do not hand-adapt it.`,
    });
  }

  // Every registered ledger must have a raw-markdown route, because the agent
  // card ADVERTISES one for every ledger. _links.ledgers is generated from this
  // same registry and emits `markdown: /distillations/<slug>.md`, while the
  // route itself is a hand-created folder per slug. So registering a ledger
  // without creating that folder publishes a machine-readable link to a 404,
  // and nothing else in the build notices: the page, the OG card, the sitemap
  // and llms-full.txt all self-wire, which makes the one surface that does not
  // easy to forget. (Renaming the folder to [slug].md does not collapse these:
  // Next only treats a segment as dynamic when it both starts with "[" and ends
  // with "]", so "[slug].md" is a literal path.)
  const rawRoute = `src/app/distillations/${meta.slug}.md/route.ts`;
  check(exists(rawRoute), {
    ledger: meta.slug,
    variant: "raw markdown route",
    consumer: rawRoute,
    detail:
      `the agent card advertises ${meta.slug}.md for this ledger but the route does not exist,\n` +
      `    so /distillations/${meta.slug}.md returns 404. Copy an existing sibling route folder\n` +
      `    and swap the slug; it is the one surface a new ledger does not wire itself into.`,
  });

  // A curated case page and its route file only exist for ledgers that sit
  // behind their own page. Hearings share /hearings and the regulatory ledger
  // sits behind a section of /lawsuits, so neither has one, and neither has an
  // opener or a hardcoded meta description to drift.
  const isCasePage = /^\/lawsuits\/[^/]+$/.test(meta.related.href);
  if (!isCasePage) continue;

  const casePage = `content${meta.related.href}.md`;
  const routeFile = `src/app${meta.related.href}/page.tsx`;

  if (!exists(casePage)) {
    check(false, {
      ledger: meta.slug,
      variant: "One paragraph",
      consumer: casePage,
      detail: "curated case page does not exist",
    });
  } else if (!d.oneParagraph) {
    // Guard the vacuous pass: "".includes() is true of every string, so an
    // empty variant would look like a match. The build also rejects this for
    // lawsuit ledgers; belt and braces, because a silent pass here is worse
    // than a noisy failure.
    check(false, {
      ledger: meta.slug,
      variant: "One paragraph",
      consumer: casePage,
      detail: "the ledger has no One paragraph variant, so there is nothing to check the opener against.",
    });
  } else {
    const page = norm(read(casePage));
    check(page.includes(norm(d.oneParagraph)), {
      ledger: meta.slug,
      variant: "One paragraph",
      consumer: casePage,
      detail:
        `the ledger's One paragraph is not a verbatim substring of the page.\n` +
        `    This is the K.G.M. defect: the page was re-seeded everywhere except its opener.\n` +
        `    ledger has:\n      ${(d.oneParagraph ?? "").slice(0, 200)}...`,
    });

    // The one-consumer rule, in the direction that actually broke SEO: the
    // search snippet belongs to the route file's meta description, and must not
    // also appear in the page body, or two indexable URLs describe one case
    // identically.
    check(!page.includes(norm(d.searchSnippet)), {
      ledger: meta.slug,
      variant: "Search snippet",
      consumer: `${casePage} (must NOT contain it)`,
      detail:
        `the search snippet appears in the curated page body as well as in the route file.\n` +
        `    That is the two-consumer bug the ledger-snippet variant exists to prevent.`,
    });
  }

  if (!exists(routeFile)) {
    check(false, {
      ledger: meta.slug,
      variant: "Search snippet / One sentence",
      consumer: routeFile,
      detail: "route file does not exist",
    });
    continue;
  }

  const route = norm(read(routeFile));
  check(route.includes(norm(d.searchSnippet)), {
    ledger: meta.slug,
    variant: "Search snippet",
    consumer: `${routeFile} (DESCRIPTION)`,
    detail: `ledger has:\n      ${d.searchSnippet}\n    but that string is not in the route file's DESCRIPTION.`,
  });
  check(route.includes(norm(d.oneSentence)), {
    ledger: meta.slug,
    variant: "One sentence (card)",
    consumer: `${routeFile} (JSON-LD description)`,
    detail: `ledger has:\n      ${d.oneSentence.slice(0, 200)}...\n    but that string is not in the route file's JSON-LD description.`,
  });

  // The ledger snippet is the /distillations/<slug> meta description and is
  // parsed at build. If a copy of it turns up in the case route file, the two
  // descriptions have been crossed.
  if (d.ledgerSnippet) {
    check(!route.includes(norm(d.ledgerSnippet)), {
      ledger: meta.slug,
      variant: "Ledger snippet",
      consumer: `${routeFile} (must NOT contain it)`,
      detail:
        "the ledger snippet is the /distillations page's description only.\n" +
        "    Finding it in the case route file means the two meta descriptions have been crossed.",
    });
  }
}

const passed = checks.filter((c) => c.ok).length;

if (failures.length === 0) {
  console.log(
    `check:ledgers OK. ${passed} verbatim consumer checks passed across ${DISTILLATIONS.length} ledgers.`,
  );
  process.exit(0);
}

console.error(`check:ledgers FAILED. ${failures.length} of ${checks.length} checks failed.\n`);
for (const f of failures) {
  console.error(`  ${f.ledger}`);
  console.error(`    variant:  ${f.variant}`);
  console.error(`    consumer: ${f.consumer}`);
  console.error(`    ${f.detail}\n`);
}
console.error(
  "Corrections land in the ledger first, then the consumer is re-seeded verbatim.\n" +
    "Do not fix this by editing the ledger to match the page.\n",
);
process.exit(1);
