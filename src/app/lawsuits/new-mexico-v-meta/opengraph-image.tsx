import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "State of New Mexico v. Meta: the $375 million child-safety verdict, with a $953 million abatement request pending.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "state of new mexico v. meta",
    title: "The $375M child-safety verdict",
    chips: ["jury-found · mar 2026", "~$953M requested", "decision pending"],
    accent: "brake",
  });
}
