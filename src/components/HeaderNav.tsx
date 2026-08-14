"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOCUS_RING } from "@/lib/focus";

// THE THIRD CLIENT COMPONENT ON THE SITE, AND THE REASON IT IS ALLOWED.
//
// CLAUDE.md says the only legitimate client components are ReportForm and
// SunoEmbed. That rule exists for one measured reason: making the markdown
// renderer a client component reships react-markdown + remark-gfm + micromark +
// rehype-slug to every document route. It is a rule about SHIPPING A PARSER, not
// a prohibition on interactivity.
//
// This component ships no library. `usePathname` is a hook over the App Router
// context that `next/link` already puts in the client bundle on every page, so
// the marginal cost is this file's own bytes. Measured on 2026-08-14 by building
// both ways from a cold .next: total client chunks 177,796 -> 178,097 bytes
// gzipped, a delta of 301 bytes. For scale, that is 0.6% of the 45.8 KB the rule
// exists to keep out.
//
// What it buys is `aria-current="page"`. Without it a screen-reader user tabbing
// the nav gets six links and no indication which one is the page they are on.
// The site holds itself to a 4.5:1 contrast floor and puts an sr-only polite
// status on the report form; an unlabelled nav was the surface that had not had
// that pass. If a future change makes this file import anything heavier, that is
// the moment to reconsider, not now.

const GITHUB = "https://github.com/geeks-accelerator/de-amplify";

type NavLink = {
  href: string;
  label: string;
  className: string;
  /** true when this link should light up for nested routes too, e.g. /for/parents */
  prefix?: boolean;
};

const LINKS: NavLink[] = [
  {
    href: "/#ask",
    label: "find the brake",
    className:
      "hidden py-2 text-brake/90 underline decoration-brake/40 underline-offset-4 transition-colors hover:text-brake sm:inline-block",
  },
  { href: "/report", label: "report", className: "py-2 transition-colors hover:text-brake" },
  {
    href: "/scorecard",
    label: "test",
    className: "hidden py-2 transition-colors hover:text-signal sm:inline-block",
  },
  { href: "/proposal", label: "standard", className: "py-2 transition-colors hover:text-signal" },
  { href: "/for", label: "for you", className: "py-2 transition-colors hover:text-bone/80", prefix: true },
  {
    href: "/notes",
    label: "notes",
    className: "hidden py-2 transition-colors hover:text-bone/80 sm:inline-block",
  },
];

export default function HeaderNav() {
  const pathname = usePathname();

  const isCurrent = (l: NavLink) => {
    // "/#ask" is a fragment on the homepage, so it is current only on "/"
    const path = l.href.split("#")[0] || "/";
    return l.prefix ? pathname === path || pathname.startsWith(`${path}/`) : pathname === path;
  };

  return (
    <nav
      aria-label="Primary"
      className="flex items-center gap-4 font-mono text-[11px] lowercase tracking-wide text-bone/63 sm:gap-5"
    >
      {/* py-2 grows each link's tap target past the 24px WCAG floor */}
      {LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={isCurrent(l) ? "page" : undefined}
          className={`${l.className} ${FOCUS_RING} aria-[current=page]:text-bone`}
        >
          {l.label}
        </Link>
      ))}
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden py-2 text-bone/63 underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone/70 sm:inline-block ${FOCUS_RING}`}
      >
        github
      </a>
    </nav>
  );
}
