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
        <nav className="flex items-center gap-5 font-mono text-[11px] lowercase tracking-wide text-bone/45">
          <a
            href="/#ask"
            className="text-brake/90 underline decoration-brake/40 underline-offset-4 transition-colors hover:text-brake"
          >
            find the brake
          </a>
          <Link href="/report" className="transition-colors hover:text-brake">
            report
          </Link>
          <Link href="/#fix" className="hidden transition-colors hover:text-bone/80 sm:inline">
            the fix
          </Link>
          <Link href="/proposal" className="transition-colors hover:text-signal">
            the paper
          </Link>
          <Link href="/notes" className="hidden transition-colors hover:text-bone/80 sm:inline">
            notes
          </Link>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-bone/45 underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone/70 sm:inline"
          >
            github
          </a>
        </nav>
      </div>
    </header>
  );
}
