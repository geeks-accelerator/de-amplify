import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Briefing from "../Briefing";

const TITLE = "For parents: Where's the Brake?";
const DESCRIPTION =
  "You set the limit and it did not hold. That is not your kid's willpower and not your parenting; the loop is built to outlast both. The recognition, the test, and the ask.";
const PATH = "/for/parents";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://de-amplify.com${PATH}`,
    siteName: "de-amplify.com",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "de-amplify: the thing it broke was the brake. #WheresTheBrake" },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const GAMMA = "https://gamma.app/docs/de-amplify-Wheres-the-Brake-2c81d108kohlemo";

const pdfExists = fs.existsSync(
  path.join(process.cwd(), "public", "for", "parents.pdf"),
);

export default function ParentsBriefingPage() {
  return (
    <Briefing
      eyebrow="a briefing for parents"
      title="Where's the Brake?"
      crumbLabel="For parents"
      crumbPath={PATH}
      intro={
        <>
          <p>
            You switched the account to following-only, turned off autoplay, closed the app. Your kid
            opened it again and the endless feed was right back. That is not your kid&apos;s willpower and
            it is not your parenting; the loop is built to outlast both, and it is tuned to feed them
            whatever gets the biggest reaction.
          </p>
          <p>
            This deck is the recognition and the thirty-second test (set the brake, close the app, reopen:
            did it hold?), plus what to actually ask for. Not a ban, not confiscating the phone: a brake
            that works, and stays set.
          </p>
        </>
      }
      actions={[
        { label: "View online", href: GAMMA, external: true, tone: "signal" as const, sub: "the deck on gamma.app" },
        ...(pdfExists
          ? [{ label: "Download PDF", href: "/for/parents.pdf", sub: "print or share it" }]
          : []),
        { label: "Read the source", href: "/for/parents.md", sub: "markdown, take and adapt" },
      ]}
      footnote="The markdown is the source of truth; the online version and PDF are generated from it. Run the test yourself at /scorecard."
    />
  );
}
