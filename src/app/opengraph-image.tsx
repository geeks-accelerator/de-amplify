import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

// Brand OG card: void background, Geist Mono, the confession line and the
// brake-red cursor. 1200x630 is the cross-platform standard (X, Discord,
// Slack, iMessage all crop 1.91:1 cleanly).

export const alt =
  "de-amplify: the thing it broke was the brake. #WheresTheBrake";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function loadFont(file: string) {
  return fs.readFileSync(
    path.join(process.cwd(), "node_modules/geist/dist/fonts/geist-mono", file),
  );
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070709",
          padding: "72px 80px",
          fontFamily: "GeistMono",
        }}
      >
        {/* top: the prompt line */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 30,
              color: "#FF4D5E",
            }}
          >
            <span style={{ color: "rgba(231,231,236,0.25)", marginRight: 18 }}>
              &gt;
            </span>
            i broke the minors
            <span style={{ marginLeft: 6 }}>_</span>
          </div>
        </div>

        {/* middle: the title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#E7E7EC",
            }}
          >
            The thing it broke
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#E7E7EC",
            }}
          >
            was the brake.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "rgba(231,231,236,0.55)",
            }}
          >
            de-amplify, don&apos;t censor. A brake the user holds.
          </div>
        </div>

        {/* bottom: site + hashtag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex", color: "rgba(231,231,236,0.9)" }}>
            <span style={{ color: "#FF4D5E" }}>de</span>-amplify.com
          </div>
          <div style={{ display: "flex", color: "#5B9DFF" }}>
            #WheresTheBrake
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "GeistMono",
          data: loadFont("GeistMono-Regular.ttf"),
          weight: 400,
          style: "normal",
        },
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
