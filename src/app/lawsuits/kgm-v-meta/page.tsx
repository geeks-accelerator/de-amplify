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
  description:
    "The first JCCP 5255 bellwether: a $6 million verdict for negligent design and failure to warn, split 70/30 between Meta and Google, now on appeal. Next trial: July 27, 2026.",
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
    description:
      "The first bellwether from the ~1,600 coordinated California state cases (JCCP 5255): the $6 million verdict, the appeals, and the July 27 second bellwether.",
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
