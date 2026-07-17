import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "The hearings: the mechanism, on the record. Four Congressional hearings on social media and kids, distilled with verbatim attributed quotes.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "the hearings · the mechanism, on the record",
    title: "The hearings: the mechanism, on the record",
    chips: ["1 whistleblower", "5 CEOs under oath", "the documents", "the debate"],
    accent: "signal",
  });
}
