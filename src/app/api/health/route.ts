export const dynamic = "force-dynamic";

const SITE = "https://de-amplify.com";

// Liveness probe, HATEOAS-shaped so it is not a dead end: data carries the
// status (Railway's healthcheck only needs the 200), and _links/_actions
// point a consumer that lands here toward the resources that actually matter.
export function GET() {
  return Response.json(
    {
      data: { status: "ok", service: "de-amplify" },
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
