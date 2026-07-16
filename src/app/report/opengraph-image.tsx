import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "File a brake report: turn one dead brake into structured evidence. Stores nothing.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "file a brake report",
    title: "One dead brake is a shrug. Ten thousand is a record.",
    sub: "Set it. Close the app. Reopen. Did it hold? This form stores nothing.",
    accent: "brake",
  });
}
