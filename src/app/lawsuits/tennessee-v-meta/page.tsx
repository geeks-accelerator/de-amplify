import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { contentDate } from "@/lib/contentDate";

const TITLE = "State of Tennessee v. Meta: the Broken Tool That Stayed";
// Verbatim from the case ledger's TLDR "search snippet" surface (ledger-first).
const DESCRIPTION =
  "Tennessee tried Meta before a Nashville jury over Instagram's \"Time Spent\" tools, until the August 2026 multistate settlement ended the trial mid-evidence.";
const PATH = "/lawsuits/tennessee-v-meta";

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
    publishedTime: "2026-07-25",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function TennesseeVMetaPage() {
  const mdPath = path.join(
    process.cwd(),
    "content",
    "lawsuits",
    "tennessee-v-meta.md",
  );
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = contentDate(mdPath, "2026-07-25");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "State of Tennessee v. Meta: the broken tool that stayed",
    // Verbatim from the case ledger's TLDR "one sentence (card)" surface.
    description:
      "Tennessee sued Meta and Instagram in October 2023 under the state Consumer Protection Act, became in July 2026 the first case to put before a jury the allegation that Meta kept a time-management tool it knew was giving users wrong numbers, and ended without a verdict on August 26, 2026, when the multistate settlement swept in the Nashville trial mid-evidence.",
    url: `https://de-amplify.com${PATH}`,
    image: `https://de-amplify.com${PATH}/opengraph-image`,
    datePublished: "2026-07-25",
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
          ["Tennessee v. Meta", "/lawsuits/tennessee-v-meta"],
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
              case file &middot; the Tennessee action
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
