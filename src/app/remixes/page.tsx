import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import SunoEmbed from "@/components/SunoEmbed";

const SITE = "https://de-amplify.com";
const PATH = "/remixes";
const TAG = "#WheresTheBrake";
const ORIGINAL_ID = "31677743-3e2c-48f5-8432-c0cd32163fd9";
const NO_BRAKE_ID = "7d85b4df-5053-46c6-8cdf-47edf9271f61";

const TITLE = "Remixes: Where's the Brake, in more voices";
const DESCRIPTION =
  "The movement's anthem, remixed. 'No Brake' by twobular is the first; remix it yourself, in any language, and post it with #WheresTheBrake.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}${PATH}`,
    siteName: "de-amplify.com",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// One composition, two recordings; the remix isBasedOn the original recording.
const MUSIC_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicComposition",
      "@id": `${SITE}/remixes#composition`,
      name: "Where's the Brake",
      lyricist: { "@type": "MusicGroup", name: "geeks in the woods", url: "https://suno.com/@geeksinthewoods" },
    },
    {
      "@type": "MusicRecording",
      "@id": `${SITE}/remixes#recording-original`,
      name: "Where's the Brake",
      byArtist: { "@type": "MusicGroup", name: "geeks in the woods", url: "https://suno.com/@geeksinthewoods" },
      recordingOf: { "@id": `${SITE}/remixes#composition` },
      url: `https://suno.com/song/${ORIGINAL_ID}`,
      isPartOf: { "@id": `${SITE}/#website` },
    },
    {
      "@type": "MusicRecording",
      "@id": `${SITE}/remixes#recording-no-brake`,
      name: "No Brake",
      byArtist: { "@type": "MusicGroup", name: "twobular", url: "https://suno.com/@twobular" },
      recordingOf: { "@id": `${SITE}/remixes#composition` },
      isBasedOn: { "@id": `${SITE}/remixes#recording-original` },
      url: `https://suno.com/song/${NO_BRAKE_ID}`,
    },
  ],
};

function SongEmbed({ id, title }: { id: string; title: string }) {
  return <SunoEmbed id={id} title={title} className="mt-4" />;
}

export default function RemixesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={MUSIC_JSON_LD} />
      <JsonLd data={breadcrumbs(["Remixes", "/remixes"])} />
      <Header />
      <main className="flex-1 px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <Link
              href="/#song"
              className="font-mono text-[11px] lowercase tracking-wide text-bone/40 transition-colors hover:text-brake"
            >
              &larr; back to the song
            </Link>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-brake/70">
              the recognition, in more voices
            </p>
          </div>

          <h1 className="font-mono text-3xl font-bold leading-[1.05] tracking-tight text-bone sm:text-4xl">
            Remix the recognition.
          </h1>

          <p className="mt-7 text-[15px] leading-[1.75] text-bone/55">
            <span className="text-bone/85">Where&apos;s the Brake</span> is the confession set to
            music: you go looking for the brake, find it&apos;s a ghost, and keep scrolling anyway.
            The first remix already answered the question in its title:{" "}
            <span className="text-bone/85">there is no brake.</span> So this is an open call. Take the
            song, make it yours, in any language. The policy is US-specific; the recognition
            isn&apos;t.
          </p>

          {/* the anthem */}
          <section className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone/35">
              the anthem
            </p>
            <h2 className="mt-4 font-mono text-xl text-bone">Where&apos;s the Brake</h2>
            <p className="mt-1 font-mono text-[12px] text-bone/40">
              by{" "}
              <a
                href="https://suno.com/@geeksinthewoods"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/15 underline-offset-4 hover:text-bone/70"
              >
                geeks in the woods
              </a>
            </p>
            <SongEmbed id={ORIGINAL_ID} title="Where's the Brake, listen on Suno" />
          </section>

          {/* the remixes */}
          <section className="mt-14">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-brake/70">
              the remixes
            </p>
            <div className="mt-5 rounded-lg border border-brake/20 bg-brake/[0.03] p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[13px] tabular-nums text-brake/90">01</span>
                <div>
                  <h3 className="font-mono text-lg text-bone">No Brake</h3>
                  <p className="mt-1 font-mono text-[12px] leading-[1.5] text-bone/40">
                    by{" "}
                    <a
                      href="https://suno.com/@twobular"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-white/15 underline-offset-4 hover:text-bone/70"
                    >
                      twobular
                    </a>{" "}
                    &middot; the first remix, and it answers the title.
                  </p>
                </div>
              </div>
              <SongEmbed id={NO_BRAKE_ID} title="No Brake, a remix of Where's the Brake, listen on Suno" />
            </div>
            <p className="mt-5 text-[13px] leading-relaxed text-bone/40">
              Yours could be next. This list is short on purpose; it grows one real remix at a time.
            </p>
          </section>

          {/* make your own */}
          <section className="mt-14 rounded-lg border border-signal/20 bg-signal/[0.04] p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-signal/80">
              make your own
            </p>
            <ol className="mt-4 space-y-4">
              {[
                [
                  "01",
                  <>
                    Open{" "}
                    <a
                      href={`https://suno.com/song/${ORIGINAL_ID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-signal underline decoration-signal/40 underline-offset-4 hover:text-signal"
                    >
                      the original on Suno
                    </a>{" "}
                    and hit Remix. Take it anywhere: your language, your genre, your voice.
                  </>,
                ],
                [
                  "02",
                  <>
                    Keep it on the loop, not on people. Aim at the machine, the dead button, the
                    feeling. No usernames, no faces, no kids, no locations, the same rules as a brake
                    report.
                  </>,
                ],
                [
                  "03",
                  <>
                    Post it with <span className="font-mono text-brake">{TAG}</span>. That is how we
                    find it.
                  </>,
                ],
              ].map(([n, body]) => (
                <li key={n as string} className="flex gap-4">
                  <span className="mt-[2px] font-mono text-[13px] tabular-nums text-signal/60">
                    {n}
                  </span>
                  <p className="text-[14px] leading-[1.7] text-bone/60">{body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[13px] leading-relaxed text-bone/45">
              Any language is welcome, encouraged even. The argument in the policy paper is about US
              law; the recognition the song carries, the machine has your hand, and the little one
              behind you learned not to stop by watching you not stop, belongs to everyone.
            </p>
          </section>

          {/* how a remix gets here */}
          <section className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone/35">
              how a remix gets here
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-bone/40">
              A curated list, not a live feed. You post your remix with {TAG}; we find it, check it
              is on message (aimed at the loop, not at anyone), and add it here with your credit and a
              link, on a dated pass. The site stores nothing you did not publish yourself, which is
              the exact thing this movement asks platforms to do.
            </p>
          </section>

          {/* CTA back to the test */}
          <div className="mt-14 border-t border-white/[0.06] pt-8">
            <p className="text-[13px] leading-relaxed text-bone/40">
              The song is the feeling; the test is the action. Haven&apos;t run it yet?{" "}
              <Link
                href="/#ask"
                className="text-brake/90 underline decoration-brake/30 underline-offset-4 hover:text-brake"
              >
                find the brake
              </Link>{" "}
              on your own feed, then{" "}
              <Link
                href="/report"
                className="text-brake/90 underline decoration-brake/30 underline-offset-4 hover:text-brake"
              >
                file what happened
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
