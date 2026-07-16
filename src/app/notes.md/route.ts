import fs from "fs";
import path from "path";

// Raw markdown of the experimental appendix. Linked from /llms.txt.

export const dynamic = "force-static";

export function GET() {
  const md = fs.readFileSync(
    path.join(process.cwd(), "content", "notes.md"),
    "utf-8",
  );
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: '<https://de-amplify.com/notes>; rel="canonical"',
    },
  });
}
