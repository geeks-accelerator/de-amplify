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
        { label: "Read the source", href: "/for/parents.md", tone: "signal", sub: "markdown, take and adapt" },
      ]}
      footnote="A polished online version and a PDF are coming. The markdown is the finished source you can read or adapt now. Meanwhile, run the test yourself at /scorecard."
    />
  );
}
