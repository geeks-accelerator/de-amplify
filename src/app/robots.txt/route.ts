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
    "# Structured discovery card (A2A + HATEOAS): /.well-known/agent-card.json",
    "",
    "User-agent: *",
    "Content-Signal: ai-train=yes, search=yes, ai-input=yes",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /_next/",
    "",
    ...AI_CRAWLERS.flatMap((ua) => [`User-agent: ${ua}`, "Allow: /", ""]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    // IndexNow: instant Bing/Yandex recrawl. Key file at the root, contents == key.
    `Host: ${SITE_URL}`,
    `IndexNow: ${SITE_URL}/a7f3c9e1b8d245069af1e7c93b04d8e6.txt`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
