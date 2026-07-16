// Server-rendered JSON-LD (client-injected structured data gets flagged as
// spammy; these render in the initial HTML because every page is a server
// component).

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
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
