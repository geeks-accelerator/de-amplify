import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { DISTILLATIONS, loadDistillation, type DistillationKind } from "@/lib/distillations";

const SITE = "https://de-amplify.com";
const TITLE = "The distillations: the evidence ledgers behind the lawsuits and hearings";
const DESCRIPTION =
  "The project's evidence-tiered claim ledgers, published in full for transparency: every claim behind the lawsuit and hearing pages, tagged by the strength of its source.";
const PATH = "/distillations";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}${PATH}`,
    siteName: "de-amplify.com",
    type: "article",
    publishedTime: "2026-07-16",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

function Group({ kind, heading, blurb }: { kind: DistillationKind; heading: string; blurb: string }) {
  const items = DISTILLATIONS.filter((d) => d.kind === kind).map((d) => ({
    meta: d,
    snippet: loadDistillation(d.slug).searchSnippet,
  }));
  return (
    <section className="mt-12">
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone/40">{heading}</p>
      <p className="mt-3 text-[14px] leading-[1.7] text-bone/55">{blurb}</p>
      <ul className="mt-6 space-y-3">
        {items.map(({ meta, snippet }) => (
          <li key={meta.slug}>
            <Link
              href={`/distillations/${meta.slug}`}
              className="block rounded-lg border border-white/[0.07] bg-white/[0.02] p-5 transition-colors hover:border-white/20"
            >
              <span className="flex items-center gap-2.5 font-mono text-[14px] text-bone/90">
                {meta.navLabel}
                {meta.tierDown ? (
                  <span className="rounded border border-brake/40 bg-brake/[0.06] px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-brake/90">
                    tier-down
                  </span>
                ) : null}
              </span>
              {snippet ? (
                <span className="mt-2 block text-[13px] leading-[1.6] text-bone/55">{snippet}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function DistillationsIndex() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The distillations: the evidence ledgers",
    description: DESCRIPTION,
    url: `${SITE}${PATH}`,
    image: `${SITE}${PATH}/opengraph-image`,
    datePublished: "2026-07-16",
    dateModified: "2026-07-16",
    author: { "@id": `${SITE}/#org` },
    publisher: { "@id": `${SITE}/#org` },
    isPartOf: { "@id": `${SITE}/#website` },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbs(["Distillations", "/distillations"])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-signal"
            >
              &larr; back to the confession
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-signal/90">
              the evidence ledgers &middot; show your work
            </p>
            <h1 className="mt-4 font-mono text-[28px] font-bold leading-tight tracking-tight text-bone sm:text-[34px]">
              The distillations
            </h1>
          </div>

          <p className="text-[15px] leading-[1.75] text-bone/60">
            Every legal and factual claim on this site traces to a source. These are the ledgers
            where that tracing lives: one per lawsuit and per hearing, each claim tagged by the
            strength of its evidence, published in full so the work is auditable. The{" "}
            <Link href="/lawsuits" className="text-signal/90 underline decoration-signal/30 underline-offset-2 hover:text-signal">
              lawsuit case files
            </Link>{" "}
            and{" "}
            <Link href="/hearings" className="text-signal/90 underline decoration-signal/30 underline-offset-2 hover:text-signal">
              the hearings hub
            </Link>{" "}
            are the readable narratives; these are the raw record behind them.
          </p>

          <Group
            kind="lawsuit"
            heading="the lawsuits"
            blurb="One evidence ledger per proceeding, tiered against the court record and official releases."
          />
          <Group
            kind="hearing"
            heading="the hearings"
            blurb="One ledger per hearing, each with the full, verbatim, attributed quote-bank (not just the curated selection on the hub). Two are flagged tier-downs, built from written testimony until the official transcript publishes."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
