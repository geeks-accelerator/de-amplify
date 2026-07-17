import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { contentDate } from "@/lib/contentDate";

const TITLE = "Congressional Hearings on Social Media and Kids, Distilled (2023-2026)";
const DESCRIPTION =
  "Four Congressional hearings on social media and kids (2023-2026), distilled with verbatim, attributed quotes: a Meta whistleblower, five CEOs under oath, and the internal documents shown to a jury.";
const PATH = "/hearings";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://de-amplify.com${PATH}`,
    siteName: "de-amplify.com",
    type: "article",
    publishedTime: "2026-07-16",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function HearingsPage() {
  const mdPath = path.join(process.cwd(), "content", "hearings.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = contentDate(mdPath, "2026-07-16");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The hearings: the mechanism, on the record",
    description:
      "Four Congressional hearings, 2023 to 2026, put the social-media mechanism on the record: a Meta whistleblower, five CEOs under oath, the internal documents a jury was shown, and the fight over what Congress should do.",
    url: "https://de-amplify.com/hearings",
    image: "https://de-amplify.com/hearings/opengraph-image",
    datePublished: "2026-07-16",
    dateModified,
    author: { "@id": "https://de-amplify.com/#org" },
    publisher: { "@id": "https://de-amplify.com/#org" },
    isPartOf: { "@id": "https://de-amplify.com/#website" },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbs(["The hearings", "/hearings"])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <Link
              href="/"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-signal"
            >
              &larr; back to the confession
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-signal/90">
              the hearings &middot; the mechanism, on the record
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
