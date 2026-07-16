import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "MDL 3047: the federal social media addiction case against Meta, TikTok, YouTube, and Snap.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "mdl 3047 · n.d. california",
    title: "The federal social media addiction case",
    chips: ["2,893 actions · jul 2026", "trial: aug 12 scheduled", "29 states"],
    accent: "brake",
  });
}
