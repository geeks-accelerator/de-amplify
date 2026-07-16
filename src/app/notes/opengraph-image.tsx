import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "The experimental appendix: the wedge hypothesis and mechanism labeling. Research, not policy.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "the notes · research, not policy",
    title: "The wedge hypothesis, and the label that might backfire",
    sub: "The higher-risk ideas, quarantined from the standard on purpose.",
    accent: "signal",
  });
}
