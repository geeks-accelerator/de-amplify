import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/template";

export const alt =
  "For policymakers: require the controls a platform already offers to actually work and persist.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return ogCard({
    eyebrow: "for policymakers",
    title: "Regulate the platform's own controls, not anyone's speech",
    sub: "The most defensible surface under the First Amendment and Section 230. No classifier required.",
    accent: "signal",
  });
}
