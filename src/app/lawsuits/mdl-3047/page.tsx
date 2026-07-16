import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { contentDate } from "@/lib/contentDate";

const TITLE = "MDL 3047: The Federal Social Media Addiction Case (2026)";
// Verbatim from the case ledger's TLDR "search snippet" surface (ledger-first).
const DESCRIPTION =
  "Thousands of youth-harm suits against Meta, Google, TikTok, and Snap sit in one federal court; the states' claims head to an August 2026 trial against Meta.";
const PATH = "/lawsuits/mdl-3047";

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

export default function Mdl3047Page() {
  const mdPath = path.join(process.cwd(), "content", "lawsuits", "mdl-3047.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = contentDate(mdPath, "2026-07-16");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MDL 3047: the federal social media addiction case",
    // Verbatim from the case ledger's TLDR "one sentence (card)" surface.
    description:
      "MDL 3047 bundles roughly 2,900 lawsuits accusing Meta, Google (YouTube), TikTok, and Snap of designing their apps to addict kids, and in late June 2026 a federal judge let the state attorneys general's claims survive to an August trial against Meta, with no company found liable yet.",
    url: "https://de-amplify.com/lawsuits/mdl-3047",
    image: "https://de-amplify.com/opengraph-image",
    datePublished: "2026-07-16",
    dateModified,
    author: { "@id": "https://de-amplify.com/#org" },
    publisher: { "@id": "https://de-amplify.com/#org" },
    isPartOf: { "@id": "https://de-amplify.com/#website" },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbs(
          ["The lawsuits", "/lawsuits"],
          ["MDL 3047", "/lawsuits/mdl-3047"],
        )}
      />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <Link
              href="/lawsuits"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-signal"
            >
              &larr; back to the lawsuits
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/90">
              case file &middot; the federal MDL
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
