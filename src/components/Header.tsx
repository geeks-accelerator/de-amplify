import Link from "next/link";
import HeaderNav from "./HeaderNav";
import { FOCUS_RING } from "@/lib/focus";

// The header shell stays a SERVER component. Only the nav needs the current
// pathname (for aria-current), so only the nav is a client component; see the
// comment at the top of HeaderNav for the measured cost and why this does not
// reopen the rule that keeps react-markdown off the client.
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <Link
          href="/"
          className={`font-mono text-[13px] tracking-tight text-bone/90 transition-colors hover:text-bone ${FOCUS_RING}`}
        >
          <span className="text-brake">de</span>-amplify
          <span className="text-brake animate-blink">_</span>
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
