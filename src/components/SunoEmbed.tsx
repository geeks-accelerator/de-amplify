"use client";

import { useRef, useState } from "react";

// Click-to-load facade for the Suno player. The eager embed cost ~6.4MB on
// page load (a 4.9MB MP3 auto-download plus ~1.5MB of player JS and
// third-party cookies) and sank mobile LCP. Nothing loads from suno.com
// until the user asks, which is also this site's whole thesis applied to
// itself: consent, attached to the act.
//
// The facade keeps the iframe's exact height (240px) so the swap causes
// zero layout shift. On hover/focus we preconnect to Suno's origins so the
// eventual load starts warm.

// suno.com (the player app), cdn1 (the audio), cdn2 (cover art)
const SUNO_ORIGINS = [
  "https://suno.com",
  "https://cdn1.suno.ai",
  "https://cdn2.suno.ai",
];

let preconnected = false;
function preconnect() {
  if (preconnected || typeof document === "undefined") return;
  preconnected = true;
  for (const href of SUNO_ORIGINS) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
}

export default function SunoEmbed({
  id,
  title,
  className = "mt-8",
}: {
  id: string;
  title: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapRef}
      className={`${className} overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]`}
    >
      {loaded ? (
        <iframe
          // ?autoplay is speculative (undocumented by Suno); the click grants
          // autoplay permission via allow="autoplay" either way, so at worst
          // the user taps the inner play button once.
          src={`https://suno.com/embed/${id}?autoplay=true`}
          className="block w-full"
          height="240"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          // move focus into the player so keyboard/SR users land where the
          // action went (the lite-youtube-embed pattern)
          ref={(el) => el?.focus()}
        >
          <a href={`https://suno.com/song/${id}`}>Listen on Suno</a>
        </iframe>
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          onPointerEnter={preconnect}
          onFocus={preconnect}
          aria-label={`Load the player for ${title}. Streams from suno.com; nothing loads until you press this.`}
          className="group flex h-[240px] w-full flex-col items-center justify-center gap-4 outline-none transition-colors hover:bg-white/[0.03] focus-visible:bg-white/[0.03]"
        >
          <span
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-brake/40 bg-brake/10 transition-colors group-hover:bg-brake/20 group-focus-visible:bg-brake/20"
          >
            {/* play triangle */}
            <span className="ml-1 block h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-brake" />
          </span>
          <span className="font-mono text-[14px] text-bone/90">{title}</span>
          <span className="font-mono text-[11px] lowercase text-bone/50">
            nothing loads until you press play &middot; streams from suno.com
          </span>
        </button>
      )}
      <span aria-live="polite" className="sr-only">
        {loaded ? "Player loaded." : ""}
      </span>
    </div>
  );
}
