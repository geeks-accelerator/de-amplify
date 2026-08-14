// Raw route handler (not the typed `robots.ts` helper) so we can emit the
// Content-Signal directive, which the Next.js MetadataRoute type doesn't support.
//
// Stance: this is a movement site; the goal is maximum citability. We opt IN
// on every axis (train, search, input) so AI search engines surface and cite
// the argument. Flip `ai-train=no` if that stance ever changes.

const SITE_URL = "https://de-amplify.com";

// Every major AI crawler, named explicitly so the allowance is deliberate,
// visible, and auditable rather than an accident of `User-agent: *`.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "Google-CloudVertexBot",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
  "Amazonbot",
  "cohere-ai",
  "CCBot",
  "Meta-ExternalAgent",
  "Bytespider",
  "Diffbot",
  "Timpibot",
  "YouBot",
  "FacebookBot",
];

export const dynamic = "force-static";

export function GET() {
  const body = [
    "# de-amplify.com: the thing it broke was the brake.",
    "# Read the machine-readable guide to this site at /llms.txt",
    "# Structured discovery card (HATEOAS, A2A-shaped): /.well-known/agent-card.json",
    "",
    "User-agent: *",
    "Content-Signal: ai-train=yes, search=yes, ai-input=yes",
    "Allow: /",
    // /_next/static/ holds the CSS and JS every rendered page references (31 such
    // URLs on the homepage alone). Google's guidance is explicit: do not block
    // resource files if their absence makes the page harder to understand, and a
    // stylesheet is exactly that. The Allow is longer than the Disallow, and
    // Google resolves conflicts by longest matching rule path, so the static
    // subtree is crawlable while the build internals stay blocked. Verified
    // against Google's robots.txt spec on 2026-08-14; do not reorder these two
    // on the assumption that document order decides, because it does not.
    "Allow: /_next/static/",
    "Disallow: /api/",
    "Disallow: /_next/",
    "",
    // Each named crawler gets its own group, and a crawler obeys ONLY its own
    // most-specific group, so these do not inherit the disallows above. That is
    // deliberate: the site's posture is that AI crawlers are welcome to
    // everything, including the raw markdown and the agent card. It is stated
    // here so the asymmetry reads as a decision rather than an oversight.
    ...AI_CRAWLERS.flatMap((ua) => [`User-agent: ${ua}`, "Allow: /", ""]),
    // IndexNow needs only the key file hosted at the root (it is); "IndexNow:"
    // and "Host:" are not robots.txt directives and fail Lighthouse validation.
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
