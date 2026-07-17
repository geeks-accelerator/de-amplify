import Link from "next/link";

const GITHUB = "https://github.com/geeks-accelerator/de-amplify";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <Link
          href="/"
          className="font-mono text-[13px] tracking-tight text-bone/90 transition-colors hover:text-bone"
        >
          <span className="text-brake">de</span>-amplify
          <span className="text-brake animate-blink">_</span>
        </Link>
        <nav className="flex items-center gap-4 font-mono text-[11px] lowercase tracking-wide text-bone/45 sm:gap-5">
          {/* py-2 grows each link's tap target past the 24px WCAG floor */}
          <Link
            href="/#ask"
            className="hidden py-2 text-brake/90 underline decoration-brake/40 underline-offset-4 transition-colors hover:text-brake sm:inline-block"
          >
            find the brake
          </Link>
          <Link href="/report" className="py-2 transition-colors hover:text-brake">
            report
          </Link>
          <Link href="/lawsuits" className="py-2 transition-colors hover:text-bone/80">
            lawsuits
          </Link>
          <Link href="/hearings" className="py-2 transition-colors hover:text-bone/80">
            hearings
          </Link>
          <Link href="/proposal" className="py-2 transition-colors hover:text-signal">
            standard
          </Link>
          <Link href="/for" className="py-2 transition-colors hover:text-bone/80">
            for you
          </Link>
          <Link href="/notes" className="hidden py-2 transition-colors hover:text-bone/80 sm:inline-block">
            notes
          </Link>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden py-2 text-bone/45 underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone/70 sm:inline-block"
          >
            github
          </a>
        </nav>
      </div>
    </header>
  );
}
