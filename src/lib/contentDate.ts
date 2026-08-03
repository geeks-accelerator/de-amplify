import { execFileSync } from "child_process";

// Content "last modified" date from git history, not the filesystem mtime.
// A fresh CI checkout (Railway builds from a clean clone) resets every file's
// mtime to the deploy time, which would stamp every page's dateModified and
// every sitemap lastmod as "today", misleading crawlers into thinking the
// whole site changed on each deploy. The git AUTHOR date is stable across
// checkouts and survives rebases. Runs at build (these routes are static).
//
// `pathOrRel` may be absolute or repo-relative; git resolves both against the
// repo root (process.cwd()). `fallback` is a stable committed date (YYYY-MM-DD)
// used only when git history is unavailable (git not installed, or a shallow
// clone that lacks the file's last commit) so we never fall back to build time.
export function contentDate(pathOrRel: string, fallback: string): string {
  return gitDate(["log", "-1", "--format=%as", "--", pathOrRel], fallback);
}

// First-commit ("published") date, the counterpart to the last-commit date above.
// `datePublished` used to be a hardcoded literal shared by every page of a
// dynamic route, which stamped each newly added ledger with the date the FIRST
// ledgers shipped. Reusing contentDate() is not a fix either: it returns the
// LAST commit, so datePublished and dateModified would collapse to the same day
// and nothing would ever look newly published. `--diff-filter=A` finds the
// commit that added the file; `--follow` keeps it correct across renames.
export function contentCreatedDate(pathOrRel: string, fallback: string): string {
  return gitDate(
    ["log", "--diff-filter=A", "--follow", "-1", "--format=%as", "--", pathOrRel],
    fallback,
  );
}

function gitDate(args: string[], fallback: string): string {
  try {
    const out = execFileSync("git", args, {
      cwd: process.cwd(),
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out;
  } catch {
    /* git unavailable at build; fall through to the stable fallback */
  }
  warnOnce();
  return fallback;
}

// Why this exists: the fallback above is correct behaviour and was also, for
// weeks, a silent failure. `nixPkgs` in nixpacks.toml replaces the default
// package set, so the build image shipped without `git`, every lookup threw,
// every page got its hardcoded fallback, and the deployed site told crawlers
// nothing had changed since 2026-07-25 while being corrected repeatedly. The
// build was green the whole time, because a wrong date is not a compile error.
//
// So: fall back quietly per call (one page missing a date must not fail a
// deploy), but say so loudly at least once, and say WHICH cause it is, so the
// answer is in the Railway build log instead of requiring someone to diff a
// live sitemap against a local one. Deliberately not an exception: making this
// fatal would mean a shallow clone could take the site down.
//
// "Once" means once per worker process, not once per build. Next renders static
// pages across ~15 parallel workers, each with its own module instance, so a
// broken build prints this roughly ten times rather than once. That is louder
// than intended and still the right trade: deduplicating across processes would
// need shared state for a message whose entire job is to be impossible to miss.
let warned = false;
function warnOnce(): void {
  if (warned) return;
  warned = true;

  const probe = (args: string[]): boolean => {
    try {
      execFileSync("git", args, {
        cwd: process.cwd(),
        encoding: "utf-8",
        stdio: ["ignore", "pipe", "ignore"],
      });
      return true;
    } catch {
      return false;
    }
  };

  const cause = !probe(["--version"])
    ? "`git` is not on PATH in this build image (check nixPkgs in nixpacks.toml)"
    : !probe(["rev-parse", "--git-dir"])
      ? "there is no .git directory in the build context (the builder is not using a clone)"
      : "git and the repo are present but the file has no commit in this history (likely a shallow clone)";

  console.warn(
    `\n[contentDate] Falling back to hardcoded dates: ${cause}.\n` +
      `[contentDate] Every JSON-LD dateModified and sitemap lastmod in this build is a literal, ` +
      `not a real content date. The site will look unchanged to crawlers.\n`,
  );
}
