import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "MDL 3047: The Federal Social Media Addiction Case (2026)",
  description:
    "2,893 suits against Meta, YouTube, TikTok, and Snap before one federal judge. The June 2026 ruling, the August trial against Meta, and the $1.4 trillion counting fight.",
  alternates: { canonical: "/lawsuits/mdl-3047" },
};

export default function Mdl3047Page() {
  const mdPath = path.join(process.cwd(), "content", "lawsuits", "mdl-3047.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = fs.statSync(mdPath).mtime.toISOString().slice(0, 10);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MDL 3047: the federal social media addiction case",
    description:
      "The federal multidistrict litigation against Meta, Google, TikTok, and Snap: the June 2026 summary-judgment order, the August trial against Meta, and the money.",
    url: "https://de-amplify.com/lawsuits/mdl-3047",
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
