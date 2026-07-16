import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

// Apple touch icon (180x180 PNG). Mirrors the opengraph-image font-loading
// approach: the "i_" brand mark (bone glyph, brake-red cursor) on the void
// background, matching the site's blinking-cursor motif.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

function loadFont(file: string) {
  return fs.readFileSync(
    path.join(process.cwd(), "node_modules/geist/dist/fonts/geist-mono", file),
  );
}

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#070709",
          fontFamily: "GeistMono",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 120,
            fontWeight: 700,
            color: "#E7E7EC",
          }}
        >
          i<span style={{ color: "#FF4D5E" }}>_</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "GeistMono",
          data: loadFont("GeistMono-Bold.ttf"),
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
