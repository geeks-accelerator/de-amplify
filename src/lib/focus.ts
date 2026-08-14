// The keyboard focus ring, in one place.
//
// Added 2026-08-14 with the header nav semantics pass. It was briefly copy-pasted
// into four spots (Header, HeaderNav, and twice inside Toc), which is how a
// contrast rule quietly stops being repo-wide: someone adjusts one and the other
// three keep the old value while still looking deliberate.
//
// brake at full opacity measures 6.21:1 against the void, so it clears the 4.5:1
// floor the rest of the palette is held to. outline-offset keeps the ring off the
// glyphs, which matters on the mono type at 11px. Use `:focus-visible`, never
// `:focus`, so a mouse click does not paint a ring the user did not ask for.
export const FOCUS_RING =
  "focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brake";
