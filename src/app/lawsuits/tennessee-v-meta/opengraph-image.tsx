import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "State of Tennessee v. Meta: the trial over a time-management tool the State says Meta knew was broken, ended by the August 2026 settlement before any verdict.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "state of tennessee v. meta",
    title: "The broken tool that stayed",
    chips: ["settled · aug 26 2026", "no verdict returned", "$751.9M to tennessee"],
    accent: "brake",
  });
}
