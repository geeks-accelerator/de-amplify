import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

// Shared OG-card template: the site's design system (void bg, Geist Mono,
// brake/signal accents, eyebrow/title/footer bands) rendered at 1200x630.
// Every card is generated AT BUILD TIME via colocated opengraph-image.tsx
// files; there is no runtime endpoint and nothing spoofable.
//
// Satori guardrails (learned the hard way elsewhere): explicit display:flex
// on every element with children; no rgba in odd positions (alpha tokens are
// pre-mixed to flat hex against the void via flatten()); fonts passed as
// buffers, memoized at module scope; "transparent", never "none".

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// design tokens, inlined: Tailwind CSS variables don't resolve inside satori
const VOID = { r: 7, g: 7, b: 9 };
export const C = {
  void: "#070709",
  bone: "#E7E7EC",
  brake: "#FF4D5E",
  signal: "#5B9DFF",
} as const;

export type Accent = "brake" | "signal";

// pre-mix an alpha token against the void into a flat hex (satori-safe),
// mirroring the site's bone/55-style opacity vocabulary
export function flatten(hex: string, alpha: number): string {
  const n = parseInt(hex.slice(1), 16);
  const mix = (fg: number, bg: number) =>
    Math.round(alpha * fg + (1 - alpha) * bg)
      .toString(16)
      .padStart(2, "0");
  return `#${mix((n >> 16) & 255, VOID.r)}${mix((n >> 8) & 255, VOID.g)}${mix(n & 255, VOID.b)}`;
}

// memoized font buffers (Geist Mono ships TTFs; satori can't read woff2)
let fonts: { name: string; data: Buffer; weight: 400 | 700; style: "normal" }[] | null = null;
function loadFonts() {
  if (!fonts) {
    const dir = path.join(process.cwd(), "node_modules/geist/dist/fonts/geist-mono");
    fonts = [
      { name: "GeistMono", data: fs.readFileSync(path.join(dir, "GeistMono-Regular.ttf")), weight: 400, style: "normal" },
      { name: "GeistMono", data: fs.readFileSync(path.join(dir, "GeistMono-Bold.ttf")), weight: 700, style: "normal" },
    ];
  }
  return fonts;
}

// length-stepped title size: authored titles only, no auto-fit needed
function titleSize(title: string): number {
  if (title.length > 64) return 54;
  if (title.length > 36) return 64;
  return 80;
}

export type OgCardProps = {
  /** small-caps kicker band, e.g. "the lawsuits · the record, kept honest" */
  eyebrow?: string;
  /** terminal-prompt band ("> text_"), used by the home confession card */
  prompt?: string;
  title: string;
  /** one supporting line under the title */
  sub?: string;
  /** short status/stat chips, e.g. "$375M · jury-found"; 4 max fit */
  chips?: string[];
  accent?: Accent;
};

export function ogCard({ eyebrow, prompt, title, sub, chips, accent = "brake" }: OgCardProps) {
  const accentHex = accent === "brake" ? C.brake : C.signal;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: C.void,
          padding: "64px 80px",
          fontFamily: "GeistMono",
          position: "relative",
        }}
      >
        {/* hairline inner border so the card doesn't bleed into dark feeds */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 16,
            left: 16,
            right: 16,
            bottom: 16,
            border: `1px solid ${flatten(accentHex, 0.22)}`,
            borderRadius: 12,
          }}
        />

        {/* top band: prompt or eyebrow */}
        {prompt ? (
          <div style={{ display: "flex", alignItems: "center", fontSize: 30, color: accentHex }}>
            <span style={{ color: flatten(C.bone, 0.25), marginRight: 18 }}>&gt;</span>
            {prompt}
            <span style={{ marginLeft: 6 }}>_</span>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: flatten(accentHex, 0.9),
            }}
          >
            {eyebrow}
          </div>
        )}

        {/* middle band: title + optional sub */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: titleSize(title),
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: C.bone,
              textWrap: "balance",
              maxWidth: 1020,
            }}
          >
            {title}
          </div>
          {sub ? (
            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize: 27,
                lineHeight: 1.4,
                color: flatten(C.bone, 0.55),
                maxWidth: 980,
              }}
            >
              {sub}
            </div>
          ) : null}
          {chips && chips.length > 0 ? (
            <div style={{ display: "flex", marginTop: 32, gap: 14, flexWrap: "wrap" }}>
              {chips.map((chip) => (
                <div
                  key={chip}
                  style={{
                    display: "flex",
                    fontSize: 22,
                    color: flatten(C.bone, 0.8),
                    border: `1px solid ${flatten(accentHex, 0.35)}`,
                    backgroundColor: flatten(accentHex, 0.06),
                    borderRadius: 8,
                    padding: "10px 18px",
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* bottom band: wordmark + hashtag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex", color: flatten(C.bone, 0.9) }}>
            <span style={{ color: C.brake }}>de</span>-amplify.com
          </div>
          <div style={{ display: "flex", color: C.signal }}>#WheresTheBrake</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: loadFonts() },
  );
}
