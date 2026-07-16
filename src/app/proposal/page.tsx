import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "./ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { contentDate } from "@/lib/contentDate";

const TITLE = "The Brake Integrity Standard: the full policy paper";
const DESCRIPTION =
  "The policy paper: control integrity as the regulable surface for engagement feeds, with age-differentiated defaults for minors, the current legal record, and its honest limits.";
const PATH = "/proposal";

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
    type: "article",
    publishedTime: "2026-07-15",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function ProposalPage() {
  const mdPath = path.join(process.cwd(), "content", "proposal.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = contentDate(mdPath, "2026-07-15");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Brake Integrity Standard",
    description:
      "Control integrity as the regulable surface for engagement feeds: when a platform offers a control to stop or redirect the feed, it must actually work and persist.",
    url: "https://de-amplify.com/proposal",
    image: "https://de-amplify.com/opengraph-image",
    datePublished: "2026-07-15",
    dateModified,
    author: { "@id": "https://de-amplify.com/#org" },
    publisher: { "@id": "https://de-amplify.com/#org" },
    isPartOf: { "@id": "https://de-amplify.com/#website" },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbs(["The policy paper", "/proposal"])} />
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
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/90">
              the policy paper &middot; the brake integrity standard
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
