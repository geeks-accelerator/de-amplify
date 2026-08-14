import { tableOfContents } from "@/lib/toc";
import { FOCUS_RING } from "@/lib/focus";

// A server-rendered contents list for the long documents. No hooks, no client
// bundle; see lib/toc for why that constraint is load-bearing here.
//
// Collapsed by default with <details>, because these documents have 15 to 25
// headings and an always-open list would push the opening paragraph off the first
// screen on mobile. <details> gives the disclosure behaviour natively, so this
// stays a server component.
export default function Toc({ markdown }: { markdown: string }) {
  const entries = tableOfContents(markdown);
  if (entries.length < 4) return null;

  return (
    <details className="mb-10 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
      <summary className={`cursor-pointer font-mono text-[11px] lowercase tracking-wide text-bone/63 transition-colors hover:text-bone/80 ${FOCUS_RING}`}>
        contents ({entries.length} sections)
      </summary>
      <nav aria-label="Table of contents" className="mt-3">
        <ol className="space-y-1.5">
          {entries.map((e) => (
            <li key={e.id} className={e.depth === 3 ? "ml-4" : ""}>
              <a
                href={`#${e.id}`}
                className={`font-mono text-[12px] text-bone/63 underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone/80 ${FOCUS_RING}`}
              >
                {e.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
