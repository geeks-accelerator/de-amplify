import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProposalContent from "../proposal/ProposalContent";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { contentDate } from "@/lib/contentDate";
import Toc from "@/components/Toc";

const TITLE = "Social Media Addiction Lawsuits, Explained (2026)";
const DESCRIPTION =
  "Inside MDL 3047 and the state lawsuits against Meta, TikTok, YouTube, and Snap: New Mexico's $942M judgment, the consent judgment that ended the Oakland trial, and what should change.";
const PATH = "/lawsuits";

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

// FAQ structured data, drawn verbatim in substance from the page's own
// "six proceedings", "so is it actually addiction?", and "four numbers"
// sections. Aids AI-answer extraction and non-Google engines; note Google
// restricts FAQ rich results to authoritative gov/health domains.
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many social media addiction lawsuits are there against Meta, and are they one case?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are six distinct proceedings across three legal systems, not one: the federal MDL 3047 in Oakland (personal-injury, school-district, and state-attorney-general claims), the California state-court coordination JCCP 5255 in Los Angeles (the K.G.M. bellwether), the standalone State of New Mexico v. Meta enforcement case in Santa Fe, the State of Tennessee v. Meta consumer-protection trial in Nashville, the European Commission's Digital Services Act investigation in Brussels, and Bits of Freedom v. Meta in Amsterdam, where a Dutch court has already ordered Meta to make a chosen non-profiled feed persist when the user closes and reopens the app. They share defendants and evidence, but a verdict in one does not decide the others, and a Dutch order binds nothing in an American court.",
      },
    },
    {
      "@type": "Question",
      name: "Why is social media addictive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The compulsion is not in any single post; it is in the delivery loop: infinite scroll with no end, autoplay, a variable-ratio reward schedule (the slot-machine effect), push notifications, and ranking tuned to maximize time on the platform. A brilliant post and a banal one ride the same loop. That is why the lawsuits target product design rather than content, and why the fix this project proposes regulates the loop and the controls over it, not anyone's speech.",
      },
    },
    {
      "@type": "Question",
      name: "Is social media addiction a recognized medical diagnosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There is no such diagnosis in the DSM, and the clinical category is contested. But the claims that keep advancing in court do not depend on it: they are consumer-protection findings about deception and consent, whether a company accurately described its product and whether a safety control did what its name promised. Courts answer that without settling the diagnosis question.",
      },
    },
    {
      "@type": "Question",
      name: "What is the $1.4 trillion figure in the Meta lawsuit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is Meta's own estimate, disclosed in a July 2026 filing, of its theoretical maximum statutory exposure under four states' proposed penalty counting (a per-violation maximum times a very large count of violations). Meta calls the demanded remedies entirely unmoored. It is a ceiling Meta itself computed, not an amount the states have asked for: their own reply of July 13, 2026 states no total and says they will present final requests for monetary relief at trial. It is not a judgment, a settlement, or an amount any court has endorsed, and no court ever ruled on it: the trial ended in a consent judgment on August 26, 2026, before the states presented any request for money.",
      },
    },
    {
      "@type": "Question",
      name: "Did Meta settle the state attorneys general case, and what does the settlement require?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. On August 26, 2026, four days into evidence at the federal trial in Oakland, the court entered a consent judgment resolving the claims of 51 states, commonwealths and territories. Exhibit B to the settlement sets a maximum of $16,680,647,753.21 over ten annual installments, of which $11,656,621,745.60 is guaranteed and $5,024,026,007.70 is contingent and reverts to Meta unless Snap, TikTok and YouTube become bound to equivalent teen time-management obligations; a $75 million cost fund and $459,293,017.80 for four Cambridge Analytica-era complaints bring the arithmetic maximum to about $17.2 billion. Meta must give teen accounts a default two-hour daily limit across its apps and a default overnight block from midnight to 6 a.m., changeable only by a parent, hide like and reaction counts by default, disable cosmetic-procedure filters, and offer a non-personalized feed. The judgment records no admission of liability and states that nothing in it establishes a standard of care or serves as precedent outside the settling states. The personal-injury and school-district tracks of MDL 3047 continue, as do the cases against Google, TikTok and Snap.",
      },
    },
    {
      "@type": "Question",
      name: "What were the New Mexico and California jury verdicts against Meta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two juries have ruled. In New Mexico, a Santa Fe jury awarded $375 million in civil penalties in March 2026 in a child-safety case, and on August 6, 2026 the court entered final judgment adding a $567 million abatement fund and a five-year order on minors' accounts, for $942 million in total; the court granted no abatement relief against Meta's recommendation algorithms. In California, the K.G.M. jury awarded $6 million (70 percent Meta, 30 percent Google) in March 2026. Meta has said it will appeal the New Mexico verdict, and both defendants have filed notices of appeal in California; neither verdict has been reviewed by an appellate court.",
      },
    },
  ],
};

export default function LawsuitsPage() {
  const mdPath = path.join(process.cwd(), "content", "lawsuits.md");
  const markdown = fs.readFileSync(mdPath, "utf-8");
  const dateModified = contentDate(mdPath, "2026-07-16");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The social media addiction lawsuits, explained",
    description:
      "Six proceedings, four numbers people keep confusing, and the question underneath all of it: when you tap the brake, does anything actually stop?",
    url: `https://de-amplify.com${PATH}`,
    image: `https://de-amplify.com${PATH}/opengraph-image`,
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
      <JsonLd data={FAQ_JSON_LD} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <Link
              href="/"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-signal"
            >
              &larr; back to the confession
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/90">
              the lawsuits &middot; the record, kept honest
            </p>
          </div>
          <Toc markdown={markdown} />
          <ProposalContent markdown={markdown} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
