import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GITHUB = "https://github.com/geeks-accelerator/de-amplify";

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
              doesn&apos;t work, the &quot;no&quot; the machine overrides — of everything that
              era broke, the load-bearing one was the brake:{" "}
              <span className="text-bone/85">consent, severed from the act.</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12px]">
              <a
                href="#diagnosis"
                className="text-bone/80 underline decoration-brake/40 underline-offset-4 transition-colors hover:text-brake"
              >
                read the diagnosis &darr;
              </a>
              <Link
                href="/proposal"
                className="text-bone/80 underline decoration-signal/40 underline-offset-4 transition-colors hover:text-signal"
              >
                the full proposal &rarr;
              </Link>
            </div>
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
              You say &quot;show me less,&quot; &quot;I want to stop,&quot; &quot;I never agreed to
              this&quot; — and nothing changes. The controls are decorative. Your will is
              present in form (there&apos;s a button) and absent in effect (it does nothing).
            </p>

            <blockquote className="my-8 border-l-2 border-brake/50 bg-white/[0.02] py-3 pl-5 pr-4 font-mono text-[15px] text-bone/75">
              we all screamed brake, it heard the gas.
            </blockquote>

            <p className="text-[15px] leading-[1.75] text-bone/55">
              And here is the part that changes where you aim: the harm doesn&apos;t
              live in the <span className="text-bone/85">content</span>. It lives in the{" "}
              <span className="text-bone/85">delivery loop</span> — infinite scroll,
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
              <Stat value="29" label="state attorneys general suing" />
              <Stat value="~3,000" label="lawsuits, consolidated (N.D. Cal.)" />
              <Stat value="$1.4T" label="penalties four states seek" />
              <Stat value="$375M" label="New Mexico jury verdict" />
              <Stat value="$6M" label="California jury verdict" />
            </div>

            <p className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-bone/55">
              The legal theory is <span className="text-bone/85">product design</span>,
              not bad content: platforms &quot;intentionally incorporated algorithms,
              notifications, endless scrolling and other features designed to keep young
              users repeatedly returning.&quot; The defense is telling —{" "}
              <span className="text-bone/85">
                &quot;social media addiction is not an established psychiatric
                condition&quot;
              </span>{" "}
              — which is why the case gets stuck. But the claims that advanced most cleanly
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
                ["Immunity", "the opposite of a solution — Meta is lobbying for exactly this. It removes the pressure entirely."],
                ["“Content moderation”", "government deciding which viewpoints kids see. Unconstitutional as a mandate — and it removes the very material critical thinking is practiced on."],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-4">
                  <span className="mt-[7px] h-px w-6 shrink-0 bg-brake/50" />
                  <p className="text-[15px] leading-[1.7] text-bone/55">
                    <span className="font-mono text-[13px] text-bone/85">{k}</span> —{" "}
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
              The algorithm amplifies wedges. Nobody had to decide that.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-bone/55">
              Engagement ranking rewards the strongest reaction. Outrage, tribal
              conflict, out-group hostility reliably win that contest — so optimizing for
              engagement <span className="text-bone/85">automatically selects for
              wedges</span>. No one flips a &quot;promote divisive content&quot; switch. The
              objective does it.
            </p>
            <p className="mt-5 text-[15px] leading-[1.75] text-bone/55">
              That&apos;s the hinge the whole fix turns on:{" "}
              <span className="text-signal">
                because the amplification is emergent from the objective, you can remove
                it by changing the objective
              </span>{" "}
              — without ever classifying a single post as a wedge, without a censor,
              without touching anyone&apos;s speech.
            </p>
          </div>
        </section>

        {/* ── THE FIX · TWO KNOBS ─────────────────────────────── */}
        <section id="fix" className="border-t border-white/[0.06] px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>the fix &middot; for minors</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              De-amplify. Don&apos;t censor.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-bone/55">
              Two knobs, ordered from safest to most powerful. The unit is the under-18
              account — already a protected class, so age-differentiated treatment is
              nothing new.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-signal/20 bg-signal/[0.04] p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-signal/80">
                  knob 1 &middot; the default
                </p>
                <h3 className="mt-3 font-mono text-lg text-bone">
                  Content-neutral de-amplification
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-bone/55">
                  Change the ranking objective for minors&apos; accounts away from
                  engagement-maximization. Cap amplification. Strip autoplay and
                  variable-reward defaults. It de-amplifies wedges{" "}
                  <span className="text-bone/85">as a side effect</span> — no wedge
                  detector, no topic judgment, no censor. Nothing to define, nothing to
                  game. And it&apos;s de-amplify, not remove: the content still exists,
                  the firehose just stops.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-bone/50">
                  knob 2 &middot; opt-in, transparent
                </p>
                <h3 className="mt-3 font-mono text-lg text-bone">
                  A label, not a filter
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-bone/55">
                  A parental control that <span className="text-bone/85">surfaces</span>{" "}
                  the wedge instead of hiding it: &quot;this post is running a wedge —
                  here&apos;s the move it&apos;s making.&quot; A label{" "}
                  <span className="text-bone/85">builds</span> the muscle to spot wedges;
                  a filter removes the material that muscle is trained on. And a label is
                  contestable — a silent down-rank never is. The guardian decides, not the
                  platform or the state.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[13px] leading-relaxed text-bone/40">
              The through-line: regulate the loop, re-attach consent, de-amplify don&apos;t
              remove, label don&apos;t filter, let the guardian decide.
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
                ["It's a frame, not a solution.", "The measurable thresholds, the testing, the enforcement, surviving the First Amendment and Section 230 — that's 95% of the work, and it isn't here."],
                ["“Who defines a wedge” doesn't dissolve — it moves.", "The parental toggle fixes who applies the label, not who forged the classifier behind it. That's why Knob 1 is content-neutral and needs no classifier at all."],
                ["The auto-classifier is the anti-pattern.", "“AI silently auto-hides wedges for kids” is the exact thing this proposal exists to prevent — not endorse."],
                ["De-amplify, not remove. Hold that line.", "The moment it slides to hide/delete, it reacquires the censorship problem and stops building critical thinking. The line is load-bearing."],
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
              The target is a <span className="text-bone/70">mechanism, not a who</span> —
              it reads identically for Facebook, TikTok, or YouTube.
            </p>
          </div>
        </section>

        {/* ── SHOW UP · CTA ───────────────────────────────────── */}
        <section className="border-t border-white/[0.06] px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>show up</Eyebrow>
            <h2 className="mt-5 font-mono text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
              A movement grows when people decide it matters.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-[1.75] text-bone/55">
              Read the whole thing — including the limits. Then, if the diagnosis is
              right, make it louder. This is a design target anyone can point a regulator,
              a platform, or a parent at.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/proposal"
                className="rounded-md border border-signal/40 bg-signal/10 px-5 py-2.5 font-mono text-[13px] text-signal transition-colors hover:bg-signal/20"
              >
                read the full proposal &rarr;
              </Link>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/[0.1] px-5 py-2.5 font-mono text-[13px] text-bone/70 transition-colors hover:border-white/20 hover:text-bone"
              >
                star the repo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
