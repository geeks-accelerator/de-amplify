import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReportForm from "./ReportForm";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";

const TITLE = "File a brake report: #WheresTheBrake";
const DESCRIPTION =
  "Turn one dead brake into structured evidence. Report the platform, the control you tried, and whether your choice held after you closed and reopened the app. No personal data, nothing stored.";
const PATH = "/report";

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

export default function ReportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={breadcrumbs(["File a brake report", "/report"])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <Link
              href="/#ask"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/55 transition-colors hover:text-brake"
            >
              &larr; back to the test
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/90">
              file a brake report
            </p>
          </div>

          <h1 className="font-mono text-3xl font-bold leading-[1.05] tracking-tight text-bone sm:text-4xl">
            One dead brake is a shrug.
            <br />
            Ten thousand, filed the same way, is a record.
          </h1>

          <p className="mt-7 text-[15px] leading-[1.75] text-bone/55">
            You ran the test: found the brake, set it, closed the app, reopened it. Whatever
            happened, file it here. This builds a <span className="text-bone/85">structured</span>{" "}
            report, the same shape every time, so a scattered hashtag becomes something you can
            count: which platform, which control, whether the choice held.
          </p>

          <p className="mt-4 text-[15px] leading-[1.75] text-bone/55">
            That consistency is the point. A pile of look-alike reports is the raw material for the{" "}
            <span className="text-bone/85">deception and unfair-practices</span> case regulators and
            state attorneys general are already building: not a claim that a feed is bad, but proof
            that a control the platform <span className="text-bone/85">offered</span> did not do what
            it said. The companion{" "}
            <Link href="/proposal" className="text-signal underline decoration-signal/40 underline-offset-4 hover:text-signal">
              policy paper
            </Link>{" "}
            calls that <span className="text-signal">control integrity</span>; this is where you
            document its absence.
          </p>

          <ReportForm />

          <div className="mt-12 border-t border-white/[0.06] pt-8">
            <p className="text-[13px] leading-relaxed text-bone/40">
              Want to see the test written down so everyone scores it the same way? Read{" "}
              <Link href="/scorecard" className="text-bone/60 underline decoration-white/15 underline-offset-4 hover:text-bone/80">
                the brake scorecard
              </Link>
              . Honest note: this page stores nothing, so it cannot itself tally the reports. A
              central, submittable dataset is the movement&apos;s next piece of infrastructure, and
              it needs a backend and a published data-retention and moderation policy before it
              should ever hold a single submission.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
