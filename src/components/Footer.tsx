import Link from "next/link";

const GITHUB = "https://github.com/geeks-accelerator/de-amplify";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-[13px] text-bone/70">
          the thing it broke was the brake.
        </p>
        <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-bone/35">
          not a lawsuit. not a ban. a design target. de-amplify, don&apos;t censor.
        </p>

        <p className="mt-6 font-mono text-[12px] text-brake/80">#WheresTheBrake</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] lowercase text-bone/40">
          <Link href="/#ask" className="text-brake/80 transition-colors hover:text-brake">
            find the brake
          </Link>
          <span className="text-bone/15">/</span>
          <Link href="/lawsuits" className="transition-colors hover:text-bone/70">
            the lawsuits
          </Link>
          <span className="text-bone/15">/</span>
          <Link href="/proposal" className="transition-colors hover:text-signal">
            read the proposal
          </Link>
          <span className="text-bone/15">/</span>
          <Link href="/for" className="transition-colors hover:text-bone/70">
            who it&apos;s for
          </Link>
          <span className="text-bone/15">/</span>
          <Link href="/remixes" className="transition-colors hover:text-bone/70">
            remixes
          </Link>
          <span className="text-bone/15">/</span>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-bone/70"
          >
            github
          </a>
        </div>

        <p className="mt-10 font-mono text-[10px] tracking-widest2 text-bone/20">
          DE-AMPLIFY.COM
        </p>
        <p className="mt-2 text-[11px] text-bone/20">
          a proposal, not a verdict. the honest limits are{" "}
          <Link href="/proposal#7-the-honest-limits-load-bearing-do-not-skip" className="underline decoration-white/10 underline-offset-2 hover:text-bone/40">
            section 7
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
