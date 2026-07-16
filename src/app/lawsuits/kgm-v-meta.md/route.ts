import fs from "fs";
import path from "path";

// Raw markdown of the K.G.M. / California-bellwethers case file. Linked from /llms.txt.

export const dynamic = "force-static";

export function GET() {
  const md = fs.readFileSync(
    path.join(process.cwd(), "content", "lawsuits", "kgm-v-meta.md"),
    "utf-8",
  );
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: '<https://de-amplify.com/lawsuits/kgm-v-meta>; rel="canonical"',
    },
  });
}
