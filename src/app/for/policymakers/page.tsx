import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Briefing from "../Briefing";

const TITLE = "For policymakers: The Brake Integrity Standard";
const DESCRIPTION =
  "The engagement machine amplifies division because your reaction is its fuel. The regulable, First-Amendment-defensible fix is a brake the user holds. A briefing deck.";
const PATH = "/for/policymakers";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://de-amplify.com${PATH}`,
    siteName: "de-amplify.com",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const GAMMA = "https://gamma.app/docs/de-amplify-The-Brake-Integrity-Standard-ihy1gkm8jotlltt";

// Show the PDF action only when the file is actually present (checked at build
// time), so the section can ship before the PDF is dropped in without a dead link.
const pdfExists = fs.existsSync(
  path.join(process.cwd(), "public", "for", "policymakers.pdf"),
);

export default function PolicymakersBriefingPage() {
  return (
    <Briefing
      eyebrow="a briefing for policymakers"
      title="The Brake Integrity Standard"
      crumbLabel="For policymakers"
      crumbPath={PATH}
      intro={
        <>
          <p>
            An engagement feed optimizes for whatever holds attention, and the most engaging content is
            the most inflammatory. So the loop that will not let a child stop is the same loop that turns
            every issue into a wedge. This is not only a youth-safety problem; it is an
            information-environment problem.
          </p>
          <p>
            The fix is not to label the speech, which is the most legally exposed move there is. It is to
            regulate the control: a brake the user holds that actually works and persists, including a
            brake over the recommendation signal itself. This deck makes that case on the 2026 legal
            record, with the tiered-exposure analysis (control integrity is the safest lane) and the
            honest limits named up front.
          </p>
        </>
      }
      actions={[
        { label: "View online", href: GAMMA, external: true, tone: "signal" as const, sub: "the deck on gamma.app" },
        ...(pdfExists
          ? [{ label: "Download PDF", href: "/for/policymakers.pdf", sub: "print or email it" }]
          : []),
        { label: "Read the source", href: "/for/policymakers.md", sub: "markdown, take and adapt" },
      ]}
      footnote="The markdown is the source of truth; the online version and PDF are generated from it. Figures are dated (litigation moves weekly); the living document is the paper."
    />
  );
}
