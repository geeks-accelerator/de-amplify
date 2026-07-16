import type { MetadataRoute } from "next";

// Web app manifest (file-based; Next auto-links it). Colors match the void
// palette so an installed/added-to-homescreen instance keeps the confession
// aesthetic. Icons reference the file-based /icon.svg and the generated
// /apple-icon PNG.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "de-amplify: the thing it broke was the brake",
    short_name: "de-amplify",
    description:
      "A movement site and framing proposal on engagement feeds and minors: find the brake, and the standard that would make it work. De-amplify, don't censor.",
    start_url: "/",
    display: "standalone",
    background_color: "#070709",
    theme_color: "#070709",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
