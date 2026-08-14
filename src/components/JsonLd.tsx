// Server-rendered JSON-LD (client-injected structured data gets flagged as
// spammy; these render in the initial HTML because every page is a server
// component).

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escape the less-than character to its JSON unicode form. Inert inside a
      // script element, parses to the identical object, and stops a future content
      // edit containing a literal closing script tag from breaking out of the block.
      // NOTE: the escape below loses its backslash easily when retyped or pasted
      // through tooling, and the broken form is visually near-identical. Verify by
      // byte inspection, not by eye.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const SITE_URL = "https://de-amplify.com";

export function breadcrumbs(...trail: [name: string, path: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"] as [string, string], ...trail].map(
      ([name, path], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: `${SITE_URL}${path}`,
      }),
    ),
  };
}
