import { contentDate, dateProvenance, manifestHas } from "@/lib/contentDate";
import { DISTILLATIONS } from "@/lib/distillations";

export const dynamic = "force-dynamic";

const SITE = "https://de-amplify.com";

// Every content path the site's dated surfaces resolve, so the coverage probe
// below asks about the real thing rather than one sample. The ledger paths come
// from the registry, so a new ledger is covered without anyone remembering.
const TRACKED = [
  "content/proposal.md",
  "content/notes.md",
  "content/lawsuits.md",
  "content/hearings.md",
  "content/lawsuits/mdl-3047.md",
  "content/lawsuits/kgm-v-meta.md",
  "content/lawsuits/new-mexico-v-meta.md",
  "content/lawsuits/tennessee-v-meta.md",
  "docs/proposals/2026-07-16-brake-integrity-pitch-policymakers.md",
  "docs/proposals/2026-07-16-brake-integrity-pitch-parents.md",
  "docs/proposals/2026-07-16-brake-integrity-pitch-press-organizers.md",
  "docs/distillations",
  "docs/distillations/*.md",
  ...DISTILLATIONS.map((d) => `docs/distillations/${d.slug}.md`),
];

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
//
// `coverage` is the part that can actually go red. It asks the SHIPPED manifest
// whether it carries every content path the dated surfaces need, and names the
// ones it does not. A path listed in `missing` is a page whose JSON-LD
// dateModified and sitemap lastmod are a hardcoded literal in production, which
// is the exact failure that ran unnoticed for three weeks: green build, correct
// looking page, frozen dates. This makes it one curl instead of a sitemap diff.
function dates() {
  const missing = TRACKED.filter((p) => !manifestHas(p));
  return {
    ...dateProvenance(),
    coverage: {
      tracked: TRACKED.length,
      fromManifest: TRACKED.length - missing.length,
      missing,
      ok: missing.length === 0,
    },
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
