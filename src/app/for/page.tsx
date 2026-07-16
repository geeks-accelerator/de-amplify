import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

const TITLE = "Who it's for: the argument in your language";
const DESCRIPTION =
  "The same case, told for whoever is in the room: policymakers, parents, press and organizers. The machine runs on your reaction, and the brake it gave you is decorative.";
const PATH = "/for";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://de-amplify.com${PATH}`,
    siteName: "de-amplify.com",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const AUDIENCES: [slug: string, label: string, blurb: string, ready: string][] = [
  [
    "policymakers",
    "For policymakers",
    "Legislators, regulators, and their staff. The regulable, First-Amendment-defensible standard, and why a brake the user holds is the safest thing to regulate.",
    "online, PDF, and markdown",
  ],
  [
    "parents",
    "For parents",
    "You set the limit and it did not hold. Why that is the product working, not your kid and not your parenting, plus the thirty-second test and what to actually ask for.",
    "online, PDF, and markdown",
  ],
  [
    "press",
    "For press and organizers",
    "The story under the story: your reaction is the fuel, and the off-switch is fake. Built to be used and adapted, with the boldest demand on the table.",
    "online, PDF, and markdown",
  ],
];

export default function ForHubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={breadcrumbs(["Who it's for", "/for"])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-brake"
            >
              &larr; back to the confession
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/90">
              who it&apos;s for
            </p>
          </div>

          <h1 className="font-mono text-3xl font-bold leading-[1.05] tracking-tight text-bone sm:text-4xl">
            The same argument, in your language.
          </h1>

          <p className="mt-7 text-[15px] leading-[1.75] text-bone/55">
            de-amplify has one thesis: the machine runs on your reaction, and the brake it gave you is
            decorative. The details that land depend on who is in the room, so here it is told three
            ways. Each is a slide deck you can present, download, or take and adapt.
          </p>

          <div className="mt-10 space-y-3">
            {AUDIENCES.map(([slug, label, blurb, ready]) => (
              <Link
                key={slug}
                href={`/for/${slug}`}
                className="block rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.12]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-mono text-[15px] text-bone/90">{label}</p>
                  <span className="shrink-0 font-mono text-[10px] lowercase tracking-wide text-bone/35">
                    {ready}
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-bone/55">{blurb}</p>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-[13px] leading-relaxed text-bone/40">
            The formal policy position, with its legal analysis and honest limits, is{" "}
            <Link href="/proposal" className="text-signal underline decoration-signal/40 underline-offset-4 hover:text-signal">
              the paper
            </Link>
            . These are how it is carried into each room.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
