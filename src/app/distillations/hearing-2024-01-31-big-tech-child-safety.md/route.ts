import { distillationRawMarkdown } from "@/lib/distillations";

// Raw markdown of this evidence ledger (the distillation). Linked from /llms.txt.

export const dynamic = "force-static";

export function GET() {
  return new Response(
    distillationRawMarkdown("hearing-2024-01-31-big-tech-child-safety", "https://de-amplify.com/distillations/hearing-2024-01-31-big-tech-child-safety"),
    {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Link: '<https://de-amplify.com/distillations/hearing-2024-01-31-big-tech-child-safety>; rel="canonical", <https://de-amplify.com/distillations>; rel="up", <https://de-amplify.com/llms.txt>; rel="index"',
      },
    },
  );
}
