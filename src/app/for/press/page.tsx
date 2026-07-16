import type { Metadata } from "next";
import Link from "next/link";
import Briefing from "../Briefing";

const TITLE = "For press and organizers: Where's the Brake?";
const DESCRIPTION =
  "The story under the story: the machine does not want your time, it wants your reaction, and the off-switch is fake. Built to be used, screenshot, and carried.";
const PATH = "/for/press";

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

export default function PressBriefingPage() {
  return (
    <Briefing
      eyebrow="a briefing for press and organizers"
      title="Where's the Brake?"
      crumbLabel="For press and organizers"
      crumbPath={PATH}
      intro={
        <>
          <p>
            The story everyone is missing: the machine does not want your kid&apos;s time, it wants their
            reaction, and the off-switch it advertises is fake. This deck is built to be used, run the
            thirty-second test, screenshot the result, and carry the frame.
          </p>
          <p>
            It names the villain correctly (the mechanism, never a company or a tribe, or the movement
            becomes the wedge it fights) and puts the boldest demand on the table: make them show you the
            strings.
          </p>
        </>
      }
      note={
        <>
          <strong className="font-mono text-brake/90">Note on this one.</strong> This is the movement&apos;s
          advocacy framing, the boldest of the three, built for the room where attention matters more
          than legal caution. It puts the manipulation-labeling demand on the table as an anchor. The
          formal policy position, with the legal analysis and the reasons that demand stays research, is{" "}
          <Link href="/proposal" className="text-signal underline decoration-signal/40 underline-offset-4 hover:text-signal">
            the paper
          </Link>
          .
        </>
      }
      actions={[
        { label: "Read the source", href: "/for/press.md", tone: "signal", sub: "markdown, take and adapt" },
      ]}
      footnote="A polished online version and a PDF are coming. The markdown is the finished source you can read or adapt now."
    />
  );
}
