import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "For parents: what protects the kid is not a filter that hides things. It is a brake that works.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "for parents",
    title: "Not a filter that hides things. A brake that works.",
    sub: "On by default for their account. You decide, not the platform.",
    accent: "signal",
  });
}
