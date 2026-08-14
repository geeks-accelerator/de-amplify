import { scorecardMarkdown } from "@/lib/actionPages";

const SITE_URL = "https://de-amplify.com";

export const dynamic = "force-static";

// Raw markdown twin of /scorecard, so an agent told by the agent card to "run the
// brake test" can read the test without parsing HTML. Generated from the same
// arrays the page renders (see lib/actionPages), never hand-authored.
export function GET() {
  return new Response(scorecardMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link:
        `<${SITE_URL}/scorecard>; rel="canonical", ` +
        `<${SITE_URL}/>; rel="up", ` +
        `<${SITE_URL}/llms.txt>; rel="index"`,
    },
  });
}
