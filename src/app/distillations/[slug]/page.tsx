import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { contentDate } from "@/lib/contentDate";
import { DISTILLATIONS, distillationMeta, loadDistillation } from "@/lib/distillations";

const SITE = "https://de-amplify.com";

export function generateStaticParams() {
  return DISTILLATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!distillationMeta(slug)) return {};
  const d = loadDistillation(slug);
  const description = d.searchSnippet || d.oneSentence;
  const path = `/distillations/${slug}`;
  return {
    title: `${d.title} (the evidence ledger)`,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: d.title,
      description,
      url: `${SITE}${path}`,
      siteName: "de-amplify.com",
      type: "article",
      publishedTime: "2026-07-16",
    },
    twitter: { card: "summary_large_image", title: d.title, description },
  };
}

export default async function DistillationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!distillationMeta(slug)) notFound();
  const d = loadDistillation(slug);

  const path = `/distillations/${slug}`;
  const dateModified = contentDate(`docs/distillations/${slug}.md`, "2026-07-16");
  // literal class strings (Tailwind cannot see dynamically-built class names)
  const eyebrowClass = d.kind === "hearing" ? "text-signal/90" : "text-brake/90";
  const backHoverClass = d.kind === "hearing" ? "hover:text-signal" : "hover:text-brake";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: d.title,
    description: d.oneSentence || d.searchSnippet,
    url: `${SITE}${path}`,
    image: `${SITE}${path}/opengraph-image`,
    datePublished: "2026-07-16",
    dateModified,
    author: { "@id": `${SITE}/#org` },
    publisher: { "@id": `${SITE}/#org` },
    isPartOf: { "@id": `${SITE}/#website` },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbs(["Distillations", "/distillations"], [d.navLabel, path])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/distillations"
              className={`font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors ${backHoverClass}`}
            >
              &larr; all distillations
            </Link>
            <p className={`mt-6 font-mono text-[10px] uppercase tracking-widest2 ${eyebrowClass}`}>
              distillation &middot; the evidence ledger
            </p>
            <h1 className="mt-4 font-mono text-[26px] font-bold leading-tight tracking-tight text-bone sm:text-[30px]">
              {d.title}
            </h1>
            {d.subject ? (
              <p className="mt-3 text-[13px] leading-relaxed text-bone/45">{d.subject}</p>
            ) : null}
          </div>

          {/* what this is + the parent surface */}
          <p className="text-[14px] leading-[1.7] text-bone/60">
            This is the raw, evidence-tiered claim ledger behind{" "}
            <Link href={d.related.href} className="text-signal/90 underline decoration-signal/30 underline-offset-2 hover:text-signal">
              {d.related.label}
            </Link>
            . It is published for transparency: the source of truth, with its tiers intact, current as of {d.asOf || "the date noted below"}.
          </p>

          {/* tier-down banner */}
          {d.tierDown ? (
            <div className="mt-6 rounded-lg border border-brake/30 bg-brake/[0.05] p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-brake/90">
                tier-down source
              </p>
              <p className="mt-3 text-[13px] leading-[1.7] text-bone/70">
                This hearing&apos;s official transcript is not published yet, so this ledger is
                built from the witnesses&apos; written testimony, not the live question-and-answer.
                Treat it as the weaker-evidence tier it is; it will be rebuilt to the full standard
                when the official transcript publishes.
              </p>
            </div>
          ) : null}

          {/* how to read the tiers */}
          <div className="mt-6 rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-bone/70">
              how to read the tiers
            </p>
            <p className="mt-3 text-[13px] leading-[1.7] text-bone/60">
              Each claim is tagged by the strength of the evidence behind it, not by how certain it
              sounds.
            </p>
            <ul className="mt-3 space-y-2 text-[13px] leading-[1.6] text-bone/60">
              <li>
                <span className="font-mono text-bone/85">[ESTABLISHED]</span> &mdash; stated in a
                primary source (a court order or filing, the docket, an official release) or, for a
                hearing, said on the official record. A fact about what was filed or said, not
                necessarily adjudicated true.
              </li>
              <li>
                <span className="font-mono text-bone/85">[OBSERVED]</span> &mdash; carried by
                secondary coverage, or by a document read into the record.
              </li>
              <li>
                <span className="font-mono text-bone/85">[ASSUMED]</span> &mdash; the distiller&apos;s
                inference, flagged as such.
              </li>
              <li>
                Provenance flags (<span className="font-mono text-bone/85">[interested-party]</span>,{" "}
                <span className="font-mono text-bone/85">[advocacy-witness]</span>,{" "}
                <span className="font-mono text-bone/85">[single-witness]</span>,{" "}
                <span className="font-mono text-bone/85">[lawmaker characterization]</span>) mark a
                claim that rests on one interested voice: reported, not adjudicated.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <ProposalContent markdown={d.bodyMarkdown} />
          </div>

          <div className="mt-12 border-t border-white/[0.06] pt-8 font-mono text-[12px] lowercase text-bone/45">
            <p>
              <Link href={d.related.href} className="transition-colors hover:text-bone/70">
                &larr; {d.related.label}
              </Link>
            </p>
            <p className="mt-2">
              <Link href="/distillations" className="transition-colors hover:text-bone/70">
                all evidence ledgers
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
