import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Social Media Addiction Lawsuits, Explained (2026)",
  description:
    "Inside MDL 3047 and the state lawsuits against Meta, TikTok, YouTube, and Snap: the $6M and $375M verdicts, the August 2026 trial, and what should change.",
  alternates: { canonical: "/lawsuits" },
};

export default function LawsuitsPage() {
  const mdPath = path.join(process.cwd(), "content", "lawsuits.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = fs.statSync(mdPath).mtime.toISOString().slice(0, 10);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The social media addiction lawsuits, explained",
    description:
      "Four proceedings, four numbers people keep confusing, and the question underneath all of it: when you tap the brake, does anything actually stop?",
    url: "https://de-amplify.com/lawsuits",
    datePublished: "2026-07-16",
    dateModified,
    author: { "@id": "https://de-amplify.com/#org" },
    publisher: { "@id": "https://de-amplify.com/#org" },
    isPartOf: { "@id": "https://de-amplify.com/#website" },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbs(["The lawsuits", "/lawsuits"])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <Link
              href="/"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/40 transition-colors hover:text-signal"
            >
              &larr; back to the confession
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/70">
              the lawsuits &middot; the record, kept honest
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
