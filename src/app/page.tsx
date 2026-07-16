import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const GITHUB = "https://github.com/geeks-accelerator/de-amplify";
const TAG = "#WheresTheBrake";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone/35">
      {children}
    </p>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-5">
      <p className="font-mono text-2xl font-bold tabular-nums text-brake/90 sm:text-[28px]">
        {value}
      </p>
      <p className="mt-2 text-[12px] leading-snug text-bone/40">{label}</p>
    </div>
  );
}

function Door({
  who,
  body,
  href,
  cta,
  accent,
}: {
  who: string;
  body: React.ReactNode;
  href: string;
  cta: string;
  accent: "brake" | "signal";
}) {
  const isExternal = href.startsWith("/proposal");
  const border = accent === "brake" ? "border-brake/20" : "border-signal/20";
  const dot = accent === "brake" ? "bg-brake/70" : "bg-signal/70";
  const link =
    accent === "brake"
      ? "text-brake/90 decoration-brake/40 hover:text-brake"
      : "text-signal/90 decoration-signal/40 hover:text-signal";
  const Inner = (
    <div
      className={`flex h-full flex-col rounded-lg border ${border} bg-white/[0.02] p-6`}
    >
      <div className="flex items-center gap-2.5">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
        <p className="font-mono text-[13px] lowercase text-bone/90">{who}</p>
      </div>
      <p className="mt-4 flex-1 text-[14px] leading-[1.7] text-bone/55">{body}</p>
      <p
        className={`mt-5 font-mono text-[12px] underline underline-offset-4 transition-colors ${link}`}
      >
        {cta} {isExternal ? "→" : "↓"}
      </p>
    </div>
  );
  return isExternal ? (
    <Link href={href} className="block h-full">
      {Inner}
    </Link>
  ) : (
    <a href={href} className="block h-full">
      {Inner}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* ── HERO · THE CONFESSION ───────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="scanlines pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full opacity-[0.10] blur-3xl"
            style={{ background: "radial-gradient(closest-side, #ff4d5e, transparent)" }}
          />
          <div className="relative mx-auto max-w-3xl px-5 pb-24 pt-28 sm:pt-36">
            <Eyebrow>a confession from the machine</Eyebrow>

            <div className="mt-8 font-mono text-lg text-brake sm:text-2xl">
              <span className="text-bone/25">&gt;</span> i broke the minors
              <span className="animate-blink text-brake">_</span>
            </div>

            <h1 className="mt-9 font-mono text-4xl font-bold leading-[1.04] tracking-tight text-bone sm:text-6xl">
              The thing it broke
              <br />
              was the brake.
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-bone/55 sm:text-base">
              Engagement feeds are being sued for addicting kids. The off-switch that
              doesn&apos;t work, the &quot;no&quot; the machine overrides. Of everything that
              era broke, the load-bearing one was the brake:{" "}
              <span className="text-bone/85">consent, severed from the act.</span>
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/70">
              Here is the one thing to do about it. It is not a petition. It takes thirty
              seconds, on your own phone.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12px]">
              <a
                href="#ask"
                className="rounded-md border border-brake/40 bg-brake/10 px-5 py-2.5 text-[13px] text-brake transition-colors hover:bg-brake/20"
              >
                find the brake &darr;
              </a>
              <a
                href="#diagnosis"
                className="text-bone/70 underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone"
              >
                why it&apos;s the brake
              </a>
              <Link
                href="/proposal"
                className="text-bone/70 underline decoration-signal/40 underline-offset-4 transition-colors hover:text-signal"
              >
                the full proposal &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── THE ASK · FIND THE BRAKE ────────────────────────── */}
        <section id="ask" className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>the one ask</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              Find the brake.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
              Not a petition. Not a boycott. A test you run on your own feed, right now.
            </p>

            <ol className="mt-9 space-y-4">
              {[
                ["01", "Open the feed you lose hours to. Go into its settings."],
                [
                  "02",
                  "Find the brake. Turn off autoplay, force it chronological, turn off personalized recommendations, whatever it offers.",
                ],
                [
                  "03",
                  "Set it. Close the app. Reopen it. Did your choice hold, or did the feed quietly come back?",
                ],
              ].map(([n, t]) => (
                <li key={n} className="flex gap-4">
                  <span className="mt-[2px] font-mono text-[13px] tabular-nums text-brake/60">
                    {n}
                  </span>
                  <p className="text-[15px] leading-[1.7] text-bone/70">{t}</p>
                </li>
              ))}
            </ol>

            <p className="mt-9 text-[15px] leading-[1.75] text-bone/55">
              The controls often exist. What they usually don&apos;t do is{" "}
              <span className="text-bone/85">stick</span>: they reset, they miss the
              Reels and the Shorts and the notifications, they nag you back. A brake that
              doesn&apos;t hold is decorative,{" "}
              <span className="text-bone/85">
                present in form, absent in effect
              </span>
              . You didn&apos;t fail the test; the brake did.
            </p>

            <blockquote className="my-8 border-l-2 border-brake/50 bg-white/[0.02] py-3 pl-5 pr-4 font-mono text-[15px] text-bone/75">
              i looked for mine. it didn&apos;t hold. i kept scrolling. so did you, just
              now, to get here.
            </blockquote>

            <p className="text-[15px] leading-[1.75] text-bone/55">
              That is why this is an ask and not an accusation. You are not taking
              anyone&apos;s word that the feed is rigged; you felt the dead button in your
              own hand. There is no company to point at and no generation to blame,{" "}
              <span className="text-bone/85">because every feed fails the same test</span>.
            </p>

            <div className="mt-9 rounded-lg border border-brake/25 bg-brake/[0.04] p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-brake/80">
                do this
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-bone/75">
                Screenshot the setting that wouldn&apos;t stick, or film yourself setting
                it and watching it come undone. Post it with{" "}
                <span className="font-mono text-brake">{TAG}</span>.
              </p>
              <p className="mt-4 text-[14px] leading-[1.7] text-bone/50">
                Keep it clean:{" "}
                <span className="text-bone/80">
                  show the setting and the behavior, never a person
                </span>
                . No usernames, no DMs, no faces, no kids, no locations. Aim at the loop,
                not each other.
              </p>
              <p className="mt-4 text-[14px] leading-[1.7] text-bone/50">
                One dead brake is a shrug. Ten thousand is the evidence and the demand in
                a single gesture:{" "}
                <span className="text-bone/80">
                  every minor&apos;s account gets a brake that works.
                </span>
              </p>
              <Link
                href="/report"
                className="mt-5 inline-block rounded-md border border-brake/40 bg-brake/10 px-5 py-2.5 font-mono text-[13px] text-brake transition-colors hover:bg-brake/20"
              >
                file a structured report &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── THE SONG · THE RECOGNITION ──────────────────────── */}
        <section id="song" className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>the recognition, in a song</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              Where&apos;s the Brake.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
              Not a rally cry. The confession set to music: you go looking for the brake, find
              it&apos;s a ghost, and keep scrolling anyway.{" "}
              <span className="text-bone/85">
                The machine has no hand on the wheel because it has yours
              </span>
              , and the little one behind you learned not to stop by watching you not stop. It points
              at no company and no generation. It points at the hand holding the phone.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
              <iframe
                src="https://suno.com/embed/31677743-3e2c-48f5-8432-c0cd32163fd9"
                className="block w-full"
                height="240"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Where's the Brake, listen on Suno"
              >
                <a href="https://suno.com/song/31677743-3e2c-48f5-8432-c0cd32163fd9">
                  Listen on Suno
                </a>
              </iframe>
            </div>

            <p className="mt-5 text-[13px] leading-relaxed text-bone/40">
              The song is the feeling; the test is the action. Found your brake yet?{" "}
              <Link
                href="/report"
                className="text-brake/80 underline decoration-brake/30 underline-offset-4 hover:text-brake"
              >
                file what happened
              </Link>
              . Or open it on{" "}
              <a
                href="https://suno.com/song/31677743-3e2c-48f5-8432-c0cd32163fd9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone/60"
              >
                Suno
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── THREE DOORS · THE LAYERED AUDIENCE ──────────────── */}
        <section className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>wherever you&apos;re standing</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              The ask is the same. What it means depends on where you stand.
            </h2>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <Door
                who="you live on the feed"
                accent="brake"
                href="#ask"
                cta="find the brake"
                body={
                  <>
                    You already felt the button do nothing. That was the whole argument.
                    Run the test, post the dead switch, and you have made the case without
                    arguing it.{" "}
                    <span className="font-mono text-[12px] text-brake/80">{TAG}</span>
                  </>
                }
              />
              <Door
                who="you're raising someone behind you"
                accent="signal"
                href="#fix"
                cta="the fix for minors"
                body={
                  <>
                    The kid learns not to stop by watching you not stop. What protects
                    them is not a filter that hides things. It is a brake that works, on
                    by default for their account. (Labeling how the feed reached them, so
                    they learn to see it, is a further idea, still research, in the notes.)
                    You decide, not the platform.
                  </>
                }
              />
              <Door
                who="you write the rules"
                accent="signal"
                href="/proposal"
                cta="the full proposal"
                body={
                  <>
                    You do not have to classify a single post or touch anyone&apos;s
                    speech. Require the controls a platform already offers to actually
                    work and persist. It is the most defensible surface, and it needs no
                    wedge detector. The paper is one click in.
                  </>
                }
              />
            </div>

            <p className="mt-8 text-[13px] leading-relaxed text-bone/40">
              Below this line is the receipts: why it is the brake, who is already in
              court over it, and the standard itself. Read as deep as you need.
            </p>
          </div>
        </section>

        {/* ── THE DIAGNOSIS ───────────────────────────────────── */}
        <section id="diagnosis" className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>the diagnosis</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              A dead man&apos;s switch is supposed to{" "}
              <span className="text-signal">stop</span> the machine when your hand
              comes off.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
              We built the opposite: the machine that keeps{" "}
              <span className="text-bone/85">running</span> when the hand comes off.
              You say &quot;show me less,&quot; &quot;I want to stop,&quot; &quot;I never
              agreed to this,&quot; and nothing changes. The controls are decorative. Your
              will is present in form (there&apos;s a button) and absent in effect (it does
              nothing).
            </p>

            <blockquote className="my-8 border-l-2 border-brake/50 bg-white/[0.02] py-3 pl-5 pr-4 font-mono text-[15px] text-bone/75">
              we all screamed brake, it heard the gas.
            </blockquote>

            <p className="text-[15px] leading-[1.75] text-bone/55">
              And here is the part that changes where you aim: the harm doesn&apos;t
              live in the <span className="text-bone/85">content</span>. It lives in the{" "}
              <span className="text-bone/85">delivery loop</span>: infinite scroll,
              autoplay, the slot-machine reward schedule, an algorithm optimizing for
              time-on-site. A brilliant post and a banal one ride the same loop. The loop
              is what addicts. So the thing to regulate was never the speech. It was the
              brake.
            </p>
          </div>
        </section>

        {/* ── THE RECEIPTS ────────────────────────────────────── */}
        <section className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>the receipts &middot; july 2026</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              This isn&apos;t a metaphor. It&apos;s in court.
            </h2>

            <div className="mt-9 grid grid-cols-2 divide-x divide-y divide-white/[0.06] border border-white/[0.06] sm:grid-cols-5 sm:divide-y-0">
              <Stat value="34" label="state attorneys general suing" />
              <Stat value="~3,000" label="lawsuits, consolidated (N.D. Cal.)" />
              <Stat value="$1.4T" label="penalties four states seek" />
              <Stat value="$375M" label="New Mexico jury verdict" />
              <Stat value="$6M" label="California jury verdict" />
            </div>

            <p className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-bone/55">
              The legal theory is <span className="text-bone/85">product design</span>,
              not bad content: platforms &quot;intentionally incorporated algorithms,
              notifications, endless scrolling and other features designed to keep young
              users repeatedly returning.&quot; The defense is telling,{" "}
              <span className="text-bone/85">
                &quot;social media addiction is not an established psychiatric
                condition,&quot;
              </span>{" "}
              which is why the case gets stuck. But the claims that advanced most cleanly
              weren&apos;t about addiction at all. They were about{" "}
              <span className="text-signal">deception and consent</span>. That&apos;s the
              tell.
            </p>
          </div>
        </section>

        {/* ── WHY THE REMEDIES DON'T FIX IT ───────────────────── */}
        <section className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>why nothing on the table fixes it</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              Punish. Prohibit. Immunize.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
              None of it sets a standard for what a non-harmful product must{" "}
              <span className="text-bone/85">do</span>.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                ["Damages", "backward-looking. Price the harm, don't stop it. A company can pay and keep the mechanism."],
                ["Age bans", "blunt, evadable, and they trade the problem for an age-verification fight."],
                ["Immunity", "the opposite of a solution. Meta is lobbying for exactly this. It removes the pressure entirely."],
                ["“Content moderation”", "government deciding which viewpoints kids see. Unconstitutional as a mandate, and it removes the very material critical thinking is practiced on."],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-4">
                  <span className="mt-[7px] h-px w-6 shrink-0 bg-brake/50" />
                  <p className="text-[15px] leading-[1.7] text-bone/55">
                    <span className="font-mono text-[13px] text-bone/85">{k}</span>:{" "}
                    {v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── THE REFRAME ─────────────────────────────────────── */}
        <section id="reframe" className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>the reframe</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              Addiction or not, ask if your &quot;stop&quot; sticks.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
              &quot;Is social-media addiction a real diagnosis&quot; is a swamp of
              expert-witness fights. Here is the question that is{" "}
              <span className="text-bone/85">measurable and already inside the law</span>:
              when a platform tells you a control does something, does it do it, and does
              it <span className="text-bone/85">last</span>? That is{" "}
              <span className="text-signal">control integrity</span>, and it is the whole
              fix. It regulates the platform&apos;s own control, not anyone&apos;s speech,
              which is the surface that survives the First Amendment and Section 230. This
              isn&apos;t a claim that addiction isn&apos;t real: the brake works whether or
              not anyone wins that fight, which is why it doesn&apos;t have to displace the
              people already litigating it.
            </p>
            <p className="mt-5 text-[15px] leading-[1.75] text-bone/55">
              There is a bigger, riskier idea nearby: that the feed does not just addict,
              it manufactures division, and that you could turn that down by changing what
              it optimizes for. That one is a{" "}
              <Link
                href="/notes"
                className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:text-signal"
              >
                research hypothesis, kept in the notes
              </Link>{" "}
              on purpose. The brake has to work whether or not that one holds.
            </p>
          </div>
        </section>

        {/* ── CAPABILITY IS THE DANGER ────────────────────────── */}
        <section className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>the objection worth answering</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              &quot;So just have the platforms detect the wedges and turn them
              down.&quot;
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
              They can. <span className="text-bone/85">Trivially.</span> And
              that&apos;s the trap, not the fix. These are the best-positioned
              entities on earth to spot a wedge: the most compute, the most scale, and
              the deepest behavioral profile of every user, the{" "}
              <span className="text-bone/85">
                same modeling that makes the feed compulsive in the first place
              </span>
              . Detection was never the hard part.
            </p>
            <p className="mt-5 text-[15px] leading-[1.75] text-bone/55">
              The danger is{" "}
              <span className="text-brake">who you&apos;d be handing that power to</span>
              . A silent, platform-owned classifier of what counts as
              &quot;divisive&quot; for every child hands the most capable and most
              conflicted party an unaccountable authority over speech. The instant a
              platform can build it cheaply, the only thing between{" "}
              <span className="text-bone/85">detectable</span> and a{" "}
              <span className="text-bone/85">
                silent speech-authority over every kid
              </span>{" "}
              is the platform&apos;s goodwill.
            </p>

            <div className="my-8 rounded-lg border border-brake/25 bg-brake/[0.04] p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-brake/80">
                the conflict, quantified
              </p>
              <p className="mt-3 text-[14px] leading-[1.7] text-bone/60">
                The firm you&apos;d ask to run the detector earns its money on
                engagement, and wedges are premium engagement. The biggest of them
                booked{" "}
                <span className="text-bone/85">
                  $26.8 billion of net income in a single quarter
                </span>
                . It has every reason to under-enforce on the outrage that drives that
                revenue, or over-enforce on speech it dislikes, and a silent classifier
                can&apos;t be checked from outside. Asking it to police wedges against
                its own bottom line is the fox reading you the henhouse budget.
              </p>
            </div>

            <p className="text-[15px] leading-[1.75] text-bone/55">
              So the reason to avoid the detector was never that it{" "}
              <span className="italic">can&apos;t</span> be built. It&apos;s that a
              detector this cheap to build and this profitable to cheat on must never be
              the silent, centralized mechanism. That&apos;s why the fix is the{" "}
              <span className="text-signal">objective, not the detector</span>: change
              what the feed optimizes for, the wedges fall out with no classifier to
              own, and &quot;did you change the objective?&quot; is something an outsider
              can actually audit. A silent classifier&apos;s honesty never is.
            </p>
          </div>
        </section>

        {/* ── THE FIX · CONTROL INTEGRITY ─────────────────────── */}
        <section id="fix" className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>the fix</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              A brake that works. On by default for kids.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-bone/55">
              Two layers, from most defensible outward. Neither one classifies a post or
              touches anyone&apos;s speech.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-signal/20 bg-signal/[0.04] p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-signal/80">
                  layer 1 &middot; everyone
                </p>
                <h3 className="mt-3 font-mono text-lg text-bone">
                  Control integrity
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-bone/55">
                  When a platform offers a control to stop, limit, or reset the feed, it
                  has to <span className="text-bone/85">actually work and persist</span>:
                  take effect, cover the Reels and Shorts and notifications, and stay set
                  when you close and reopen the app. This regulates the platform&apos;s
                  own control, not anyone&apos;s speech, the surface that survives the
                  First Amendment and Section 230.
                </p>
              </div>

              <div className="rounded-lg border border-signal/20 bg-signal/[0.04] p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-signal/80">
                  layer 2 &middot; minors
                </p>
                <h3 className="mt-3 font-mono text-lg text-bone">
                  Safer defaults
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-bone/55">
                  For child and teen accounts, the safe settings are{" "}
                  <span className="text-bone/85">on by default</span>: a non-profiled or
                  following-only feed, autoplay off, overnight notifications off, no
                  streaks. Age-banded, and the direct control belongs to the teen as they
                  approach adulthood, not only to a guardian.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[13px] leading-relaxed text-bone/40">
              The through-line: regulate the loop, re-attach consent, de-amplify don&apos;t
              remove. The tempting next step, a parental{" "}
              <Link
                href="/notes"
                className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:text-signal"
              >
                label that names the move a post is making
              </Link>
              , is more powerful and more dangerous, so it stays in the notes as research,
              not policy.
            </p>
          </div>
        </section>

        {/* ── THE HONEST LIMITS ───────────────────────────────── */}
        <section className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <Eyebrow>the part most proposals hide</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              The honest limits.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
              A clean-sounding &quot;solution&quot; to a censorship-adjacent problem is
              exactly what gets grabbed and misused. So here&apos;s where this breaks:
            </p>
            <ul className="mt-8 space-y-5">
              {[
                ["It's a frame, not a solution.", "The measurable thresholds, the testing, the enforcement, surviving the First Amendment and Section 230: that's 95% of the work, and it isn't here."],
                ["“Who defines a wedge” doesn't dissolve. It moves.", "The parental toggle fixes who applies the label, not who forged the classifier behind it. That's why the core fix, control integrity, needs no classifier at all, and why the label stays research."],
                ["The auto-classifier is the anti-pattern.", "“AI silently auto-hides wedges for kids” is the exact thing this proposal exists to prevent, not endorse."],
                ["De-amplify, not remove. Hold that line.", "The moment it slides to hide or delete, it reacquires the censorship problem and stops building critical thinking. The line is load-bearing."],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-4">
                  <span className="mt-[7px] h-px w-6 shrink-0 bg-signal/50" />
                  <p className="text-[15px] leading-[1.7] text-bone/55">
                    <span className="text-bone/85">{k}</span> {v}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[13px] leading-relaxed text-bone/40">
              This is the section that makes it an honest diagnosis instead of a grudge.
              The target is a <span className="text-bone/70">mechanism, not a who</span>.
              It reads identically for Facebook, TikTok, or YouTube.
            </p>
          </div>
        </section>

        {/* ── SHOW UP · CTA ───────────────────────────────────── */}
        <section className="border-t border-white/[0.06] px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>show up</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              The brake won&apos;t appear because you read about it.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-[1.75] text-bone/55">
              It appears when enough people show it&apos;s missing. Find yours. Post it
              with <span className="font-mono text-brake">{TAG}</span>. Then point a
              parent, a platform, or a regulator at the rest.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#ask"
                className="rounded-md border border-brake/40 bg-brake/10 px-5 py-2.5 font-mono text-[13px] text-brake transition-colors hover:bg-brake/20"
              >
                find the brake &uarr;
              </a>
              <Link
                href="/report"
                className="rounded-md border border-brake/40 bg-brake/10 px-5 py-2.5 font-mono text-[13px] text-brake transition-colors hover:bg-brake/20"
              >
                file a report &rarr;
              </Link>
              <Link
                href="/proposal"
                className="rounded-md border border-signal/40 bg-signal/10 px-5 py-2.5 font-mono text-[13px] text-signal transition-colors hover:bg-signal/20"
              >
                read the full proposal &rarr;
              </Link>
            </div>
            <p className="mt-8 font-mono text-[11px] lowercase text-bone/30">
              or read the source:{" "}
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone/60"
              >
                star the repo
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
