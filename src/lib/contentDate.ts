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
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%as", "--", pathOrRel],
      { cwd: process.cwd(), encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out;
  } catch {
    /* git unavailable at build; fall through to the stable fallback */
  }
  return fallback;
}
