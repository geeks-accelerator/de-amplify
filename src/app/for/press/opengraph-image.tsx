import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "For press and organizers: the story is the dead button, and the record is dated and sourced.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "for press + organizers",
    title: "The story is the dead button",
    sub: "Every case, every number, dated and sourced. Primary documents linked.",
    accent: "signal",
  });
}
