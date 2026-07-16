import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { contentDate } from "@/lib/contentDate";

const TITLE = "State of New Mexico v. Meta: The $375M Child-Safety Verdict";
// Verbatim from the case ledger's TLDR "search snippet" surface (ledger-first).
const DESCRIPTION =
  "New Mexico won a $375 million jury verdict against Meta over child safety; a judge is now weighing $953 million more plus court-ordered design changes.";
const PATH = "/lawsuits/new-mexico-v-meta";

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

export default function NewMexicoVMetaPage() {
  const mdPath = path.join(
    process.cwd(),
    "content",
    "lawsuits",
    "new-mexico-v-meta.md",
  );
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = contentDate(mdPath, "2026-07-16");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "State of New Mexico v. Meta: the $375 million child-safety verdict",
    // Verbatim from the case ledger's TLDR "one sentence (card)" surface.
    description:
      "New Mexico is the first U.S. state to win a full trial against Meta over harm to kids, a $375 million verdict in March 2026 for misleading the public about safety and failing to protect children from exploitation, with a judge still weighing the state's request to make Meta pay about $953 million and change how its apps work.",
    url: "https://de-amplify.com/lawsuits/new-mexico-v-meta",
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
          ["New Mexico v. Meta", "/lawsuits/new-mexico-v-meta"],
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
              case file &middot; the New Mexico action
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
