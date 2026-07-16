import fs from "fs";
import path from "path";

// Raw markdown source of the press/organizer briefing deck (gamma.app paste-mode).
// The markdown is the canonical source; the online version and PDF are derived.

export const dynamic = "force-static";

export function GET() {
  const md = fs.readFileSync(
    path.join(process.cwd(), "docs", "proposals", "2026-07-16-brake-integrity-pitch-press-organizers.md"),
    "utf-8",
  );
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: '<https://de-amplify.com/for/press>; rel="canonical", <https://de-amplify.com/for>; rel="up", <https://de-amplify.com/llms.txt>; rel="index"',
    },
  });
}
