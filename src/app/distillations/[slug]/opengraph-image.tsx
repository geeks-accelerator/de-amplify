import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";
import { DISTILLATIONS, loadDistillation } from "@/lib/distillations";

export const alt = "A distilled, evidence-tiered claim ledger on de-amplify.com.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export const dynamicParams = false;

export function generateStaticParams() {
  return DISTILLATIONS.map((d) => ({ slug: d.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // dynamicParams = false, so the slug is always one of DISTILLATIONS. The card
  // title is the ledger's own budgeted "OG title" variant, not a string written
  // here: see the note on LoadedDistillation.
  const d = loadDistillation(slug);
  const isHearing = d.kind === "hearing";

  const chips = d.tierDown
    ? ["tier-down", "written testimony"]
    : isHearing
      ? ["verbatim quotes", "attributed to the record"]
      : ["tiered claims", "primary-sourced"];

  return ogCard({
    eyebrow: isHearing
      ? "distillation · the hearing record"
      : "distillation · the evidence ledger",
    title: d.ogTitle || "The evidence ledger",
    chips,
    accent: isHearing ? "signal" : "brake",
  });
}
