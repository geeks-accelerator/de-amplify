import type { MetadataRoute } from "next";
import { contentDate } from "@/lib/contentDate";

const SITE_URL = "https://de-amplify.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod from git history, not filesystem mtime (a fresh CI checkout would
  // otherwise stamp every entry with the deploy date). See contentDate.
  const proposalDate = contentDate("content/proposal.md", "2026-07-16");
  const notesDate = contentDate("content/notes.md", "2026-07-15");
  const lawsuitsDate = contentDate("content/lawsuits.md", "2026-07-16");
  const mdlDate = contentDate("content/lawsuits/mdl-3047.md", "2026-07-16");
  const kgmDate = contentDate("content/lawsuits/kgm-v-meta.md", "2026-07-16");
  const nmDate = contentDate("content/lawsuits/new-mexico-v-meta.md", "2026-07-16");

  return [
    { url: `${SITE_URL}/`, lastModified: proposalDate, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/lawsuits`, lastModified: lawsuitsDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/lawsuits/mdl-3047`, lastModified: mdlDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/lawsuits/kgm-v-meta`, lastModified: kgmDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/lawsuits/new-mexico-v-meta`, lastModified: nmDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/proposal`, lastModified: proposalDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/notes`, lastModified: notesDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/report`, lastModified: proposalDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/scorecard`, lastModified: proposalDate, changeFrequency: "monthly", priority: 0.8 },
  ];
}
