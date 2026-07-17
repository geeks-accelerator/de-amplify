import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "The distillations: the evidence-tiered claim ledgers behind the de-amplify.com lawsuit and hearing pages.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "the evidence ledgers · show your work",
    title: "The distillations",
    sub: "Every claim on the site, tagged by the strength of its source.",
    chips: ["3 lawsuits", "4 hearings", "tiered + traced"],
    accent: "signal",
  });
}
