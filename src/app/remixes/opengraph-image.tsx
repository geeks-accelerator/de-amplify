import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "Where's the Brake: the song, in more voices. Remixes of the movement's recognition.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "the song · in more voices",
    title: "Where's the Brake, remixed",
    sub: "The recognition beside the ask, in whatever voice reaches you.",
    accent: "brake",
  });
}
