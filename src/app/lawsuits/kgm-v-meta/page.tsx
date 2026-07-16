import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "K.G.M. v. Meta and Google: The $6M California Bellwether Verdict",
  // Verbatim from the case ledger's TLDR "search snippet" surface (ledger-first).
  description:
    "California's first test verdict hit Meta and Google for $6 million over addictive app design; both are appealing, and a second trial starts July 27, 2026.",
  alternates: { canonical: "/lawsuits/kgm-v-meta" },
};

export default function KgmVMetaPage() {
  const mdPath = path.join(process.cwd(), "content", "lawsuits", "kgm-v-meta.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = fs.statSync(mdPath).mtime.toISOString().slice(0, 10);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "K.G.M. v. Meta and Google: the California bellwether verdict",
    // Verbatim from the case ledger's TLDR "one sentence (card)" surface.
    description:
      "In California state court (not the federal case), about 1,600 youth-harm suits are coordinated as JCCP 5255, and the first test case, K.G.M. v. Meta and Google, produced a $6 million jury verdict in March 2026 that both companies are appealing, so it is not final.",
    url: "https://de-amplify.com/lawsuits/kgm-v-meta",
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
          ["K.G.M. v. Meta and Google", "/lawsuits/kgm-v-meta"],
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
              case file &middot; the California bellwethers
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
