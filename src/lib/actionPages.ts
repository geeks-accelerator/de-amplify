// The data behind the two ACTION pages, /scorecard and /report, plus markdown
// renderings of them.
//
// WHY THIS FILE EXISTS. The agent card's _actions tell an agent to run the
// scorecard test and file a report, and until 2026-08-14 /llms-full.txt shipped
// every document and every ledger but neither of those two pages. The bundle an
// agent was told to read did not contain the instructions for the actions it was
// told to take.
//
// The fix could not be a hand-written markdown copy of each page. The scorecard's
// seven criteria are the project's standard and are held in LOCKSTEP with section
// 3 of the policy paper; a third hand-maintained copy is exactly the drift this
// repo builds checkers to prevent. So the arrays live here, the pages render them,
// and the markdown is GENERATED from the same arrays. One source, three consumers.
//
// Changing a criterion here changes the page, the raw markdown and the full-text
// bundle together. It does NOT change the policy paper, which is the other half of
// the lockstep rule and still a deliberate human edit.

export const SCORECARD_DIMENSIONS: [name: string, test: string][] = [
  ["Discoverable", "Can you find the control without googling it?"],
  ["Clear", "Does it say what will change? \"Show me less\" is not \"turn off recommendations.\""],
  ["Immediate", "Does the feed change soon after you set it, or only on some later refresh?"],
  ["Material", "Does the feed actually change in a way you can perceive, or is it cosmetic?"],
  ["Persistent", "Does the choice survive closing and reopening the app, another device, and time?"],
  ["Scoped", "Does it cover Reels, Shorts, Explore, notifications, and suggested accounts, or just one screen?"],
  ["Non-circumventing", "Does the platform respect it, or nag, reset, and route you back?"],
];

export const SCORECARD_OUTCOMES: [name: string, accent: string, meaning: string][] = [
  ["Held", "signal", "The choice took effect and survived the reopen."],
  ["Reset", "brake", "It reverted to the algorithm when you came back."],
  ["Never", "brake", "It did nothing you could perceive."],
  ["Inconclusive", "bone", "Unclear, partial, or you could not tell."],
];

export const SCORECARD_PLATFORMS = ["Instagram", "Facebook", "TikTok", "YouTube", "Snapchat", "X"];

export const REPORT_PLATFORMS = ["Instagram", "Facebook", "TikTok", "YouTube", "Snapchat", "X", "Other"];

export const REPORT_CONTROLS = [
  "Following / chronological feed",
  "Personalized recommendations off",
  "Autoplay off",
  "\"Show me less\"",
  "Notifications off",
  "Other",
];

export const REPORT_RESULTS: { key: string; label: string; phrase: string; fail: boolean }[] = [
  { key: "reset", label: "It reset when I reopened", phrase: "reset to the algorithm on reopen", fail: true },
  { key: "never", label: "It never took effect", phrase: "never took effect", fail: true },
  { key: "partial", label: "Partial / unclear", phrase: "partial, unclear", fail: true },
  { key: "held", label: "It held (it stuck)", phrase: "held", fail: false },
];

export const REPORT_DEVICES = ["", "iOS", "Android", "Web", "Other"];

/** The seven-part brake-integrity test, as markdown. Generated, never hand-edited. */
export function scorecardMarkdown(): string {
  const dims = SCORECARD_DIMENSIONS.map(([name, test], i) => `${i + 1}. **${name}.** ${test}`).join("\n");
  const outcomes = SCORECARD_OUTCOMES.map(([name, , meaning]) => `- **${name}:** ${meaning}`).join("\n");
  const platforms = SCORECARD_PLATFORMS.map((p) => `- ${p}`).join("\n");
  return [
    "# The Brake Scorecard",
    "",
    "Score a brake the same way every time. This is the seven-part brake-integrity test from",
    "section 3 of the policy paper, written out so that everyone scores the same way and two",
    "people testing the same control reach the same answer.",
    "",
    "## How to run it",
    "",
    "Pick one platform and one control. Set the control. Use the app normally for a few minutes.",
    "Close the app fully, reopen it, and look at the feed. Then answer the seven questions below.",
    "The reopen is the part most people skip, and it is the part that most often fails.",
    "",
    "## The seven dimensions",
    "",
    dims,
    "",
    "## The four outcomes",
    "",
    "Record one outcome per control tested:",
    "",
    outcomes,
    "",
    "## Platforms commonly scored",
    "",
    platforms,
    "",
    "## After you score it",
    "",
    "File what you found at /report. That page stores nothing: it builds a structured post for",
    "you to publish yourself. One dead brake is a shrug; ten thousand, filed the same way, is a",
    "record.",
    "",
  ].join("\n");
}

/** The report form's vocabulary, as markdown, so an agent can help someone file one. */
export function reportMarkdown(): string {
  const platforms = REPORT_PLATFORMS.map((p) => `- ${p}`).join("\n");
  const controls = REPORT_CONTROLS.map((c) => `- ${c}`).join("\n");
  const results = REPORT_RESULTS.map(
    (r) => `- **${r.label}** (reported as "${r.phrase}")${r.fail ? "" : " - this is the passing outcome"}`,
  ).join("\n");
  const devices = REPORT_DEVICES.filter(Boolean)
    .map((d) => `- ${d}`)
    .join("\n");
  return [
    "# File a brake report",
    "",
    "#WheresTheBrake. One dead brake is a shrug. Ten thousand, filed the same way, is a record.",
    "",
    "## This form stores nothing",
    "",
    "The report form holds no database and sends nothing anywhere. It assembles a structured post",
    "from your answers and hands it back to you to publish. That is deliberate: storing",
    "minor-associated data is the exact liability this project asks platforms to stop creating, so",
    "the site does not create it either.",
    "",
    "## What a report records",
    "",
    "### Platform",
    "",
    platforms,
    "",
    "### Control tested",
    "",
    controls,
    "",
    "### What happened",
    "",
    results,
    "",
    "### Device (optional)",
    "",
    devices,
    "",
    "## How to file one",
    "",
    "Score the control first using the seven-part test at /scorecard, so your report means the",
    "same thing as everyone else's. Then fill in the three fields at /report, copy the generated",
    "post, and publish it with #WheresTheBrake.",
    "",
  ].join("\n");
}
