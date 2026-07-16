import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "K.G.M. v. Meta and Google: the $6 million California bellwether verdict, on appeal.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "k.g.m. v. meta and google · jccp 5255",
    title: "The $6M California bellwether verdict",
    chips: ["jury-found · mar 2026", "70/30 meta/google", "both on appeal"],
    accent: "brake",
  });
}
