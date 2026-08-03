import { contentDate, dateProvenance } from "@/lib/contentDate";

export const dynamic = "force-dynamic";

const SITE = "https://de-amplify.com";

// Date provenance, reported because its absence cost weeks. The build used to
// resolve content dates by shelling out to git; that silently failed on Railway
// and every JSON-LD dateModified and sitemap lastmod became a hardcoded
// literal, which is indistinguishable from working unless you diff a live
// sitemap against a local build or have access to the build log. Nobody did,
// for about three weeks.
//
// Dates now come from a committed manifest, and this block makes the answer
// curl-able: which manifest the deployed build carries, how many paths it
// covers, and a live sample resolved through the same code path the pages use.
// If `sample` ever comes back as the fallback literal while the sitemap
// disagrees, the manifest did not make it into the image.
function dates() {
  return {
    ...dateProvenance(),
    sample: { path: "content/lawsuits.md", resolved: contentDate("content/lawsuits.md", "1970-01-01") },
  };
}

// Liveness probe, HATEOAS-shaped so it is not a dead end: data carries the
// status (Railway's healthcheck only needs the 200), and _links/_actions
// point a consumer that lands here toward the resources that actually matter.
export function GET() {
  return Response.json(
    {
      data: { status: "ok", service: "de-amplify", dates: dates() },
      _links: {
        self: { href: `${SITE}/api/health` },
        home: { href: `${SITE}/` },
        discovery: { href: `${SITE}/agent-card.json`, title: "Machine-readable site card with actions" },
        index: { href: `${SITE}/llms.txt`, title: "Curated agent index" },
      },
      _actions: [
        {
          action: "Discover the site's resources and next actions",
          method: "GET",
          href: `${SITE}/agent-card.json`,
          priority: "high",
          reason:
            "This endpoint only reports liveness; the agent card lists every document and action with priority and reason.",
          timing: "immediate",
        },
      ],
    },
    {
      headers: {
        Link: `<${SITE}/api/health>; rel="self", <${SITE}/agent-card.json>; rel="index", <${SITE}/>; rel="up"`,
      },
    },
  );
}
