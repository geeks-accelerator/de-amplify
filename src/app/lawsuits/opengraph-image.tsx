import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "The social media addiction lawsuits, explained: the verdicts, the requests, and the estimates, labeled honestly.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "the lawsuits · the record, kept honest",
    title: "The social media addiction lawsuits, explained",
    chips: ["$6M jury-found", "$375M jury-found", "~$953M requested", "~$1.4T estimate"],
    accent: "brake",
  });
}
