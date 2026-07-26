import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "State of Tennessee v. Meta: the trial over a time-management tool the State says Meta knew was broken and kept anyway.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "state of tennessee v. meta",
    title: "The broken tool that stayed",
    chips: ["in trial · jul 2026", "alleged, not found", "design order sought"],
    accent: "brake",
  });
}
