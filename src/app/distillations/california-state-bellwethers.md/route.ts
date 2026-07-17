import { distillationRawMarkdown } from "@/lib/distillations";

// Raw markdown of this evidence ledger (the distillation). Linked from /llms.txt.

export const dynamic = "force-static";

export function GET() {
  return new Response(
    distillationRawMarkdown("california-state-bellwethers", "https://de-amplify.com/distillations/california-state-bellwethers"),
    {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Link: '<https://de-amplify.com/distillations/california-state-bellwethers>; rel="canonical", <https://de-amplify.com/distillations>; rel="up", <https://de-amplify.com/llms.txt>; rel="index"',
      },
    },
  );
}
