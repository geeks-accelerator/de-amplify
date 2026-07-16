import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

const SITE_URL = "https://de-amplify.com";

function mtime(rel: string): Date {
  try {
    return fs.statSync(path.join(process.cwd(), rel)).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const proposalDate = mtime("content/proposal.md");
  const notesDate = mtime("content/notes.md");
  const lawsuitsDate = mtime("content/lawsuits.md");

  return [
    { url: `${SITE_URL}/`, lastModified: proposalDate, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/lawsuits`, lastModified: lawsuitsDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/proposal`, lastModified: proposalDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/notes`, lastModified: notesDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/report`, lastModified: proposalDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/scorecard`, lastModified: proposalDate, changeFrequency: "monthly", priority: 0.8 },
  ];
}
