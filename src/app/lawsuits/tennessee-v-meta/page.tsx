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
  "Tennessee's case against Meta went to a jury in July 2026 over Instagram's \"Time Spent\" tools, which the State says Meta knew were inaccurate and kept anyway.";
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
      "Tennessee sued Meta and Instagram in October 2023 under the state Consumer Protection Act, and in July 2026 became the first case to put before a jury the allegation that Meta promoted a time-management tool it knew was giving users inaccurate numbers, and declined to remove it because losing its only addiction-related feature was judged the bigger risk.",
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
