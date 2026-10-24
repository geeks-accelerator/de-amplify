// check:node
//
// Asserts that the Node version this repo pins is not behind a security release on its own line,
// and that the line itself is not at or near end of life. Reads the release data live from
// nodejs.org, so unlike every other guard here its answer can change without a commit, which is
// why CI also runs it on a weekly schedule.
//
// WHY THIS EXISTS. `engines.node` in package.json is the one place the runtime is declared, and it
// is an EXACT version on purpose: Railpack cuts a range like ^26.12.1 down to the bare major and
// installs whatever 26.x it knows, which on 2026-10-24 was 26.11.1, the release before the security
// fix the floor existed for. An exact pin fixes that and creates the opposite failure: no release
// ever arrives on its own, and nothing else in the repo would notice one was missed. Dependabot
// does not touch `engines`, and `npm audit` knows nothing about the runtime. That is the same
// silence that kept production on Node 20 for six months past its end of life, so it is a check,
// not a habit.
//
// WHAT FAILS: a newer release on the pinned line flagged `security: true` in nodejs.org's index; a
// pinned line past its end-of-life date; a pin that is not an exact x.y.z (Railpack would drop the
// floor); a pin that nodejs.org does not list (a typo or an unreleased version). WHAT ONLY PRINTS:
// newer non-security releases, and an end of life inside the next 120 days.
//
// It FAILS when it cannot read its sources rather than passing. A staleness check that goes green
// because the network was down is worse than none.

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const INDEX = "https://nodejs.org/dist/index.json";
const SCHEDULE = "https://raw.githubusercontent.com/nodejs/Release/main/schedule.json";
const EOL_WARN_DAYS = 120;

const fail = (msg) => {
  console.error(red(`check:node FAILED. ${msg}`));
  process.exit(1);
};

const parse = (v) => v.replace(/^v/, "").split(".").map(Number);
const newer = (a, b) => {
  const [x, y] = [parse(a), parse(b)];
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i];
  return false;
};

const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf-8"));
const pin = pkg.engines?.node ?? "";
if (!/^\d+\.\d+\.\d+$/.test(pin)) {
  fail(
    `engines.node is "${pin}", not an exact x.y.z. Railpack reduces a range to its major and ` +
      "installs whatever release it knows, so a range's floor never reaches production.",
  );
}
const major = pin.split(".")[0];

async function getJson(url) {
  let res;
  try {
    res = await fetch(url, { signal: AbortSignal.timeout(20_000) });
  } catch (err) {
    fail(`could not reach ${url} (${err.message}). Not passing on a check it could not run.`);
  }
  if (!res.ok) fail(`${url} answered HTTP ${res.status}. Not passing on a check it could not run.`);
  return res.json();
}

const [index, schedule] = await Promise.all([getJson(INDEX), getJson(SCHEDULE)]);

// ---- self-test: the index must look like the release index, and must know releases we know exist.
(function selfTest() {
  const ok =
    Array.isArray(index) &&
    index.length > 100 &&
    index.some((r) => r.version === "v20.0.0") &&
    index.every((r) => typeof r.version === "string" && typeof r.security === "boolean");
  if (!ok) fail("ABORTED: the release index did not pass its self-test, so its answer cannot be trusted.");
  if (!schedule?.[`v${major}`]?.end) fail(`ABORTED: the release schedule has no end date for v${major}.`);
})();

if (!index.some((r) => r.version === `v${pin}`)) {
  fail(`engines.node pins ${pin}, which nodejs.org does not list. A typo, or a release that does not exist yet.`);
}

const line = index.filter((r) => r.version.startsWith(`v${major}.`) && newer(r.version, pin));
const missedSecurity = line.filter((r) => r.security);
const end = new Date(schedule[`v${major}`].end);
const daysLeft = Math.floor((end - new Date()) / 86_400_000);

if (missedSecurity.length) {
  fail(
    `engines.node pins ${pin}, and Node has since shipped a security release on that line: ` +
      `${missedSecurity.map((r) => `${r.version} (${r.date})`).join(", ")}.\n` +
      `  Set engines.node to ${line[0].version.slice(1)} (the newest on the line), keep the lockfile's root ` +
      "engines in step, and confirm production took it: /api/health reports runtime.matchesEngines.",
  );
}
if (daysLeft < 0) {
  fail(`Node ${major} reached end of life on ${schedule[`v${major}`].end}. Move engines.node to a supported LTS line.`);
}

console.log(`check:node OK. engines.node ${pin} has no newer security release on the ${major}.x line.`);
if (line.length) {
  console.log(`  Newer non-security releases exist (${line.map((r) => r.version).join(", ")}); not required.`);
}
console.log(
  `  Node ${major} reaches end of life ${schedule[`v${major}`].end} (${daysLeft} days)` +
    (daysLeft <= EOL_WARN_DAYS ? ". Plan the move to the next LTS line now." : "."),
);
