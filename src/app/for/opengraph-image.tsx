import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "Who it's for: the brake argument in your language, for parents, policymakers, and press.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "wherever you're standing",
    title: "The argument, in your language",
    chips: ["parents", "policymakers", "press + organizers"],
    accent: "signal",
  });
}
