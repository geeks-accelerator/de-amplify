import { reportMarkdown } from "@/lib/actionPages";

const SITE_URL = "https://de-amplify.com";

export const dynamic = "force-static";

// Raw markdown twin of /report. The form itself stores nothing and cannot be
// submitted by an agent; what this route publishes is the vocabulary of a report
// (platform, control, outcome, device) so an agent can help a person assemble one
// correctly. Generated from the same arrays the form renders.
export function GET() {
  return new Response(reportMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link:
        `<${SITE_URL}/report>; rel="canonical", ` +
        `<${SITE_URL}/>; rel="up", ` +
        `<${SITE_URL}/llms.txt>; rel="index"`,
    },
  });
}
