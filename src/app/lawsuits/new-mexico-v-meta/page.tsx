import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "State of New Mexico v. Meta: The $375M Child-Safety Verdict",
  description:
    "New Mexico is the only state to win a full trial against Meta over harm to kids: the $375M verdict, the $953M abatement request, and the design-change order a judge is weighing.",
  alternates: { canonical: "/lawsuits/new-mexico-v-meta" },
};

export default function NewMexicoVMetaPage() {
  const mdPath = path.join(
    process.cwd(),
    "content",
    "lawsuits",
    "new-mexico-v-meta.md",
  );
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = fs.statSync(mdPath).mtime.toISOString().slice(0, 10);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "State of New Mexico v. Meta: the $375 million child-safety verdict",
    description:
      "The standalone New Mexico case: the $375 million jury verdict, the pending $953 million abatement request, and the design changes a judge is weighing.",
    url: "https://de-amplify.com/lawsuits/new-mexico-v-meta",
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
