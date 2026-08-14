import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "State of New Mexico v. Meta: a $942 million child-safety judgment, the jury's $375 million plus a $567 million abatement fund entered August 6, 2026.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "state of new mexico v. meta",
    title: "The $942M child-safety judgment",
    chips: ["$375M jury + $567M fund", "judgment · aug 2026", "no algorithm relief"],
    accent: "brake",
  });
}
