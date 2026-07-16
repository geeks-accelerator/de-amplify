import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Not found (404)",
  robots: { index: false, follow: true },
};

// HATEOAS error recovery: a 404 that is not a dead end. What happened, then
// prioritized recovery paths with reasons, most useful first. Tone follows the
// site convention (brake = act/entry, signal = read).
const RECOVERY: { href: string; label: string; reason: string; tone: "brake" | "signal" }[] = [
  {
    href: "/",
    label: "the movement brief",
    reason: "start at the confession and the self-test: find the brake on your own feed",
    tone: "brake",
  },
  {
    href: "/lawsuits",
    label: "the lawsuits, explained",
    reason: "the dated litigation record, four proceedings kept separate",
    tone: "signal",
  },
  {
    href: "/proposal",
    label: "the policy paper",
    reason: "the brake integrity standard itself, for counsel and regulators",
    tone: "signal",
  },
  {
    href: "/report",
    label: "file a brake report",
    reason: "turn one dead brake into a shareable #WheresTheBrake post; stores nothing",
    tone: "brake",
  },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-5 py-20">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-brake/70">
            error 404
          </p>
          <h1 className="mt-6 font-mono text-3xl font-bold leading-[1.05] tracking-tight text-bone sm:text-4xl">
            This page didn&apos;t stick.
          </h1>
          <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
            The URL you followed doesn&apos;t resolve, or the page moved. No dead end,
            though: here is where to go next, most useful first.
          </p>

          <ul className="mt-9 space-y-3">
            {RECOVERY.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className={`block rounded-lg border p-4 transition-colors ${
                    r.tone === "brake"
                      ? "border-brake/25 bg-brake/[0.04] hover:border-brake/50"
                      : "border-signal/20 bg-signal/[0.04] hover:border-signal/50"
                  }`}
                >
                  <span
                    className={`font-mono text-[14px] ${
                      r.tone === "brake" ? "text-brake" : "text-signal"
                    }`}
                  >
                    {r.label} &rarr;
                  </span>
                  <span className="mt-1 block text-[13px] leading-[1.6] text-bone/55">
                    {r.reason}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-[11px] lowercase text-bone/30">
            or read the machine-readable index:{" "}
            <a
              href="/llms.txt"
              className="underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone/60"
            >
              llms.txt
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
