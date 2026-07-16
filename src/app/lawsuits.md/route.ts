import fs from "fs";
import path from "path";

// Raw markdown of the litigation explainer. Linked from /llms.txt.

export const dynamic = "force-static";

export function GET() {
  const md = fs.readFileSync(
    path.join(process.cwd(), "content", "lawsuits.md"),
    "utf-8",
  );
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: '<https://de-amplify.com/lawsuits>; rel="canonical", <https://de-amplify.com/>; rel="up", <https://de-amplify.com/llms.txt>; rel="index"',
    },
  });
}
