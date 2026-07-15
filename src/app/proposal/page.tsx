import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "./ProposalContent";

export const metadata: Metadata = {
  title: "The full proposal — The Thing It Broke Was the Brake",
  description:
    "De-Amplify, Don't Censor: the full design-and-parental-controls proposal for engagement feeds and minors, including its honest limits.",
};

export default function ProposalPage() {
  const mdPath = path.join(process.cwd(), "content", "proposal.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");

  return (
    <div className="flex min-h-screen flex-col">
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
              the full proposal
            </p>
          </div>
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
