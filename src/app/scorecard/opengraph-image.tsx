import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "The brake scorecard: the brake-integrity test written out so everyone scores the same way.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "the brake scorecard",
    title: "Score every brake the same way.",
    sub: "Discoverable, clear, immediate, material, persistent, scoped, non-circumventing. Run it from your own phone.",
    accent: "brake",
  });
}
