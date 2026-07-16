/** @type {import('next').NextConfig} */

// Security headers, matching the posture of the sibling family sites. The CSP
// is scoped to what de-amplify actually loads: same-origin everything, plus
// the Suno iframe embed on the homepage (frame-src), inline styles/JSON-LD
// (unsafe-inline), and the X share-intent link (form-action).
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "frame-src https://suno.com https://*.suno.com",
      "connect-src 'self'",
      "base-uri 'self'",
      "form-action 'self' https://x.com",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The proposal is the substance; keep a couple of friendly aliases.
      { source: "/read", destination: "/proposal", permanent: false },
      { source: "/full", destination: "/proposal", permanent: false },
    ];
  },
  async rewrites() {
    return [
      // Serve the agent card at the A2A-canonical discovery path too. Single
      // source: /.well-known/agent-card.json returns the /agent-card.json route.
      { source: "/.well-known/agent-card.json", destination: "/agent-card.json" },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
