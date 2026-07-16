import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Notes: the wedge hypothesis, and the label that might backfire",
  description:
    "The experimental, higher-risk ideas deliberately kept OUT of the Brake Integrity Standard: the wedge hypothesis and recommendation-mechanism labeling. Research, not policy.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  const mdPath = path.join(process.cwd(), "content", "notes.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = fs.statSync(mdPath).mtime.toISOString().slice(0, 10);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Experimental Appendix: the wedge hypothesis, and the label that might backfire",
    description:
      "The higher-risk research quarantined from the Brake Integrity Standard: the wedge hypothesis and recommendation-mechanism labeling. Hypotheses to study, not rules to pass.",
    url: "https://de-amplify.com/notes",
    datePublished: "2026-07-15",
    dateModified,
    author: { "@id": "https://de-amplify.com/#org" },
    publisher: { "@id": "https://de-amplify.com/#org" },
    isPartOf: { "@id": "https://de-amplify.com/#website" },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbs(["The notes", "/notes"])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <Link
              href="/proposal"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-signal"
            >
              &larr; back to the proposal
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-bone/50">
              the notes &middot; research, not policy
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
