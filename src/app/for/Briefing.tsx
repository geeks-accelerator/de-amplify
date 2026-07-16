import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

type Action = {
  label: string;
  href: string;
  external?: boolean;
  tone?: "signal" | "brake" | "bone";
  sub?: string;
};

// Access page for one audience deck. The decks are gamma.app presentation
// source, not web essays, so this offers them (view online / PDF / markdown)
// rather than rendering the slides inline.
export default function Briefing({
  eyebrow,
  title,
  intro,
  actions,
  footnote,
  note,
  crumbLabel,
  crumbPath,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  actions: Action[];
  footnote?: ReactNode;
  note?: ReactNode;
  crumbLabel: string;
  crumbPath: string;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={breadcrumbs(["Who it's for", "/for"], [crumbLabel, crumbPath])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/for"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-brake"
            >
              &larr; who it&apos;s for
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/90">
              {eyebrow}
            </p>
          </div>

          <h1 className="font-mono text-3xl font-bold leading-[1.05] tracking-tight text-bone sm:text-4xl">
            {title}
          </h1>

          <div className="mt-7 space-y-4 text-[15px] leading-[1.75] text-bone/55">
            {intro}
          </div>

          {note ? (
            <div className="mt-8 rounded-lg border border-brake/20 bg-brake/[0.04] p-4 text-[13px] leading-[1.65] text-bone/60">
              {note}
            </div>
          ) : null}

          <section className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone/50">
              get the deck
            </p>
            <div
              className={`mt-5 grid gap-3 ${
                actions.length >= 3
                  ? "sm:grid-cols-3"
                  : actions.length === 2
                    ? "sm:grid-cols-2"
                    : ""
              }`}
            >
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.12]"
                >
                  <p
                    className={`font-mono text-[14px] ${
                      a.tone === "signal"
                        ? "text-signal"
                        : a.tone === "brake"
                          ? "text-brake"
                          : "text-bone/90"
                    }`}
                  >
                    {a.label}
                  </p>
                  {a.sub ? (
                    <p className="mt-1 text-[13px] leading-[1.5] text-bone/45">{a.sub}</p>
                  ) : null}
                </a>
              ))}
            </div>
            {footnote ? (
              <p className="mt-4 text-[13px] leading-relaxed text-bone/40">{footnote}</p>
            ) : null}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
