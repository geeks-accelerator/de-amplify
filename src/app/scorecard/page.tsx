import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

const TITLE = "The Brake Scorecard: score a brake the same way every time";
const DESCRIPTION =
  "The seven-part brake-integrity test: discoverability, clarity, immediate effect, material effect, persistence, scope, non-circumvention. Run it the same way on every platform so the reports are comparable.";
const PATH = "/scorecard";

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

const DIMENSIONS = [
  ["Discoverable", "Can you find the control without googling it?"],
  ["Clear", "Does it say what will change? “Show me less” is not “turn off recommendations.”"],
  ["Immediate", "Does the feed change soon after you set it, or only on some later refresh?"],
  ["Material", "Does the feed actually change in a way you can perceive, or is it cosmetic?"],
  ["Persistent", "Does the choice survive closing and reopening the app, another device, and time?"],
  ["Scoped", "Does it cover Reels, Shorts, Explore, notifications, and suggested accounts, or just one screen?"],
  ["Non-circumventing", "Does the platform respect it, or nag, reset, and route you back?"],
];

const OUTCOMES = [
  ["Held", "signal", "The choice took effect and survived the reopen."],
  ["Reset", "brake", "It reverted to the algorithm when you came back."],
  ["Never", "brake", "It did nothing you could perceive."],
  ["Inconclusive", "bone", "Unclear, partial, or you could not tell."],
];

const PLATFORMS = ["Instagram", "Facebook", "TikTok", "YouTube", "Snapchat", "X"];

const HOWTO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The brake scorecard: the seven-part brake-integrity test",
  description:
    "Score any feed control the same way every time: set the control, close the app, reopen it, and grade the result on seven dimensions.",
  url: "https://de-amplify.com/scorecard",
  totalTime: "PT2M",
  step: DIMENSIONS.map(([name, desc], i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: `Check: ${name}`,
    text: desc,
  })),
};

export default function ScorecardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={HOWTO_JSON_LD} />
      <JsonLd data={breadcrumbs(["The brake scorecard", "/scorecard"])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/report"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-brake"
            >
              &larr; file a report
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/90">
              the brake scorecard
            </p>
          </div>

          <h1 className="font-mono text-3xl font-bold leading-[1.05] tracking-tight text-bone sm:text-4xl">
            Score every brake the same way.
          </h1>

          <p className="mt-7 text-[15px] leading-[1.75] text-bone/55">
            A brake either works or it doesn&apos;t, but &quot;works&quot; has parts. If everyone
            grades on the same seven, the reports stack into something a regulator can read. This is
            the test the{" "}
            <Link href="/proposal" className="text-signal underline decoration-signal/40 underline-offset-4 hover:text-signal">
              policy paper
            </Link>{" "}
            calls <span className="text-signal">control integrity</span>, written out so you can run
            it in your own hand.
          </p>

          {/* the seven dimensions */}
          <section className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone/50">
              the seven parts of a working brake
            </p>
            <div className="mt-5 space-y-3">
              {DIMENSIONS.map(([name, desc], i) => (
                <div key={name} className="flex gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="mt-[2px] font-mono text-[13px] tabular-nums text-brake/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-mono text-[14px] text-bone/90">{name}</p>
                    <p className="mt-1 text-[14px] leading-[1.6] text-bone/55">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* the four outcomes */}
          <section className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone/50">
              four honest outcomes (a real test lets a platform pass)
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {OUTCOMES.map(([label, tone, desc]) => (
                <div key={label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                  <p
                    className={`font-mono text-[13px] ${
                      tone === "signal" ? "text-signal" : tone === "brake" ? "text-brake" : "text-bone/70"
                    }`}
                  >
                    {label}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-bone/50">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-bone/40">
              We do not announce the result before the test. If your brake held, that is a real
              result too, and it tells the platform which control to copy.
            </p>
          </section>

          {/* the board, honest about being report-driven */}
          <section className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone/50">
              the board
            </p>
            <p className="mt-2 font-mono text-[10px] text-bone/50 sm:hidden">
              swipe the board sideways &rarr;
            </p>
            <div className="mt-5 overflow-x-auto rounded-lg border border-white/[0.06]">
              <table className="w-full min-w-[420px] text-left">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-bone/45">Platform</th>
                    <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-bone/45">Verified reports</th>
                    <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-bone/45"> </th>
                  </tr>
                </thead>
                <tbody>
                  {PLATFORMS.map((p) => (
                    <tr key={p} className="border-b border-white/[0.04] last:border-0">
                      <td className="px-4 py-3.5 font-mono text-[13px] text-bone/80">{p}</td>
                      <td className="px-4 py-3.5 font-mono text-[12px] text-bone/30">awaiting reports</td>
                      <td className="px-4 py-3.5 text-right">
                        <Link href="/report" className="font-mono text-[12px] text-brake/80 underline decoration-brake/30 underline-offset-4 hover:text-brake">
                          file one &rarr;
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-bone/40">
              This board is built from what people find, not from what we assume. It stays empty of
              verdicts until real reports fill it, and it fills honestly, holds and fails both. A
              central, submittable tally is the next piece of infrastructure; until it exists with a
              published data-retention and moderation policy, the record lives in the reports you
              post with <span className="text-brake/70">#WheresTheBrake</span>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
