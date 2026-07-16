import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "de-amplify: the thing it broke was the brake. #WheresTheBrake";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    prompt: "i broke the minors",
    title: "The thing it broke was the brake.",
    sub: "de-amplify, don't censor. A brake the user holds.",
    accent: "brake",
  });
}
