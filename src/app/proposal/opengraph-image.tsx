import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "The Brake Integrity Standard: the full policy paper. de-amplify, don't censor.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "the policy paper",
    title: "The Brake Integrity Standard",
    sub: "When a platform offers a brake, it has to actually brake: prompt, material, persistent, and not quietly overridden.",
    accent: "signal",
  });
}
