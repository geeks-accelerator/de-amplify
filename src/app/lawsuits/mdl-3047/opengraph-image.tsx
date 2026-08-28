import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "MDL 3047: the federal social media addiction case against Meta, TikTok, YouTube, and Snap, and the consent judgment that ended the states' trial.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "mdl 3047 · n.d. california",
    title: "The federal social media addiction case",
    chips: ["consent judgment · aug 26", "$16.68B max · 51 states", "no liability found"],
    accent: "brake",
  });
}
