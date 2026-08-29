---
resolution: "The upstream GCP incident cleared and the queue drained on its own, exactly as the 2026-08-18 precedent predicted. No redeploy was issued. Production serves the settlement build: /api/health reports manifestGenerated 2026-08-28 and no page still carries the stale trial posture."
closed: 2026-08-28
title: "The settlement deploy is queued behind an upstream GCP incident, so main is merged and production is stale"
status: closed
opened: 2026-08-28
closes_when: "deployment 107547da-dc46-4f2d-8eb6-bfa767a8ba32 (or its successor) reaches SUCCESS and https://de-amplify.com/lawsuits.md contains the string 'consent judgment', and /api/health reports manifestGenerated 2026-08-28"
trigger: "curl -s https://de-amplify.com/api/health, or railway deployment list"
surface: "every page that carries the settlement: /lawsuits, /lawsuits/mdl-3047, /lawsuits/tennessee-v-meta, /distillations/mdl-3047, /proposal, /scorecard, the homepage, and every raw .md twin. Production is currently telling readers and crawlers that the states' trial against Meta 'is now under way'."
related: ["docs/plans/2026-08-28-settlement-and-audit-passes.md", "docs/issues/2026-08-18-railway-deploy-queue-blocked.md"]
revisited:
  - "docs/plans/2026-08-28-settlement-and-audit-passes.md :: no-change-needed :: that plan records the settlement pass and the prepared Compliance Date checklist; the deploy delay changed nothing in it, because the plan describes what the repository asserts and this incident was about what production was serving"
  - "docs/issues/2026-08-18-railway-deploy-queue-blocked.md :: no-change-needed :: the earlier incident is closed and its finding held second time around; the one thing this incident adds, that queuedReason lives inside meta rather than on the Deployment type, is recorded here rather than edited into a closed record"
---

# The settlement deploy is queued behind an upstream GCP incident

PR #86 merged to `main` at **2026-08-28 17:07:21 -0800** as `ae7df1f`. Railway created a deployment
three seconds later and it has not started building.

    railway deployment list
      107547da-dc46-4f2d-8eb6-bfa767a8ba32 | QUEUED  | 2026-08-28 17:07:24 -08:00
      01841ace-3c02-4804-bcb9-3fcd998007bf | SUCCESS | 2026-08-20 13:25:04 -08:00

The deployment's own metadata says why:

    meta.queuedReason = "Deployment queued due to upstream GCP issues"
    meta.commitHash   = ae7df1fb23e517abe8ddcbf51712252dbf27f7d9
    meta.branch       = main

So Railway **did** see the merge, has the right commit, and cannot run it. `/api/health` confirms
what is actually serving: `manifestGenerated: 2026-08-20`, the build from PR #84.

## What this is not

Not a repository fault, not a CI fault (all three jobs passed on the merged commit), and not a
Cloudflare cache artifact: `cf-cache-status: DYNAMIC` and a cache-busted request returns the same
stale body. The build that is running is simply an older one.

## Do not redeploy

This is the second incident of this shape, after
[`2026-08-18-railway-deploy-queue-blocked.md`](2026-08-18-railway-deploy-queue-blocked.md), which
queued on upstream **GitHub** issues where this one queues on upstream **GCP**. That issue's finding
was that **nothing was done to fix it and that was the finding**: the queue drained on its own once
the upstream incident cleared, and every redeploy attempt would only have lengthened a queue nothing
was serving. The same reasoning applies here. `railway deployment redeploy` exists and is the wrong
button.

## One thing this incident adds to the last one

The previous issue recorded the diagnostic as a GraphQL query for `queuedReason`. **That field is
not on the `Deployment` type**; querying it directly returns HTTP 400, which reads like an auth or
schema failure and sent this pass down a false path for several minutes. It lives inside the `meta`
JSON blob. The working query, with the CLI's own `accessToken` from `~/.railway/config.json`:

```graphql
query($id:String!){ deployment(id:$id){ id status meta } }
```

then read `meta.queuedReason`. Introspecting `__type(name:"Deployment"){fields{name}}` is how that
was established rather than guessed.

## Consequence while it lasts

Everything in PR #86 is correct and merged; none of it is public. The gap is the one this project
cares most about, because the live site currently makes a **posture** claim that the record
contradicts: `/lawsuits` says the states' trial "is now under way" about a case that reached final
judgment on 2026-08-26. That is exactly the class of staleness the repo's guards exist to prevent,
and no guard can catch it, because the defect is not in the repository at all.

## Closed 2026-08-28

The queue drained without intervention, and the progression was visible throughout:
QUEUED (about 68 minutes) then INITIALIZING, BUILDING, DEPLOYING, and finally serving.

Verified against the closing condition rather than assumed:

- `/api/health` reports **`manifestGenerated: 2026-08-28`**, with the live `sample` lookup for `content/lawsuits.md` also resolving to 2026-08-28.
- `/lawsuits`, `/lawsuits/mdl-3047`, `/distillations/mdl-3047` and `/lawsuits/tennessee-v-meta` carry the consent judgment, and **none of them still says the trial "is now under way"**.
- The sitemap's `lastmod` reads 2026-08-28 for every affected route, so the freshness signal reached crawlers.

**The finding from 2026-08-18 held a second time: nothing was done, and that was the fix.** The
one temptation worth naming is that this incident lasted long enough (about 88 minutes from merge
to serving) to make a redeploy feel overdue at several points, and there were by then two healthy
containers already queued. A third would have made it worse.

**One observation not worth its own issue.** Every page logs a CSP violation for Cloudflare's
injected `static.cloudflareinsights.com/beacon.min.js`, because the repo's `script-src` is
`'self' 'unsafe-inline'`. It is site-wide, pre-existing, unrelated to any deploy, and harmless:
the beacon is blocked, analytics do not run, and nothing else is affected. Recorded here because
it is the one recurring console error on the production site, so a future reader who sees it while
debugging something real knows it is not their problem.
