import type { MetadataRoute } from "next";
import { contentDate } from "@/lib/contentDate";
import { DISTILLATIONS } from "@/lib/distillations";

const SITE_URL = "https://de-amplify.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod from git history, not filesystem mtime (a fresh CI checkout would
  // otherwise stamp every entry with the deploy date). See contentDate.
  const proposalDate = contentDate("content/proposal.md", "2026-07-16");
  const notesDate = contentDate("content/notes.md", "2026-07-15");
  const lawsuitsDate = contentDate("content/lawsuits.md", "2026-07-16");
  const mdlDate = contentDate("content/lawsuits/mdl-3047.md", "2026-07-16");
  const tnDate = contentDate("content/lawsuits/tennessee-v-meta.md", "2026-07-25");
  const kgmDate = contentDate("content/lawsuits/kgm-v-meta.md", "2026-07-16");
  const nmDate = contentDate("content/lawsuits/new-mexico-v-meta.md", "2026-07-16");
  const hearingsDate = contentDate("content/hearings.md", "2026-07-16");
  // Each /for deck dates from its own source, not from the policymaker one. They
  // were sharing a date, which is the same false-freshness bug content-dates.json
  // exists to prevent, surviving by hand in the file the manifest feeds.
  const forPolicymakersDate = contentDate(
    "docs/proposals/2026-07-16-brake-integrity-pitch-policymakers.md",
    "2026-07-16",
  );
  const forParentsDate = contentDate("docs/proposals/2026-07-16-brake-integrity-pitch-parents.md", "2026-07-16");
  const forPressDate = contentDate("docs/proposals/2026-07-16-brake-integrity-pitch-press-organizers.md", "2026-07-16");
  // The hub is about the three decks, so it moves when any of them does.
  const forHubDate = contentDate("docs/proposals/2026-07-16-brake-integrity-pitch-*.md", "2026-07-16");
  // Hand-built React routes have no content/ body, so they date from their own
  // route files. Globs are resolved by git as a pathspec and kept verbatim as the
  // manifest key, the way the /distillations index date already works.
  const homeDate = contentDate("src/app/page.tsx", "2026-07-15");
  const reportDate = contentDate("src/app/report/*.tsx", "2026-07-16");
  const scorecardDate = contentDate("src/app/scorecard/*.tsx", "2026-07-16");
  const remixesDate = contentDate("src/app/remixes/*.tsx", "2026-07-16");

  return [
    { url: `${SITE_URL}/`, lastModified: homeDate, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/lawsuits`, lastModified: lawsuitsDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/lawsuits/mdl-3047`, lastModified: mdlDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/lawsuits/kgm-v-meta`, lastModified: kgmDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/lawsuits/new-mexico-v-meta`, lastModified: nmDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/lawsuits/tennessee-v-meta`, lastModified: tnDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/hearings`, lastModified: hearingsDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/proposal`, lastModified: proposalDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/for`, lastModified: forHubDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/for/policymakers`, lastModified: forPolicymakersDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/for/parents`, lastModified: forParentsDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/for/press`, lastModified: forPressDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/notes`, lastModified: notesDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/report`, lastModified: reportDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/scorecard`, lastModified: scorecardDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/remixes`, lastModified: remixesDate, changeFrequency: "monthly", priority: 0.6 },
    // the evidence ledgers: the index plus one page per distillation, dated from
    // the ledger's own git history
    { url: `${SITE_URL}/distillations`, lastModified: contentDate("docs/distillations", "2026-07-16"), changeFrequency: "monthly", priority: 0.6 },
    ...DISTILLATIONS.map((d) => ({
      url: `${SITE_URL}/distillations/${d.slug}`,
      lastModified: contentDate(`docs/distillations/${d.slug}.md`, "2026-07-16"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
