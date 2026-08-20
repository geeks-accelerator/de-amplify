---
resolution: "The upstream GitHub incident cleared, the queue drained on its own, and production is serving today's content. Verified on all three pages plus /api/health."
closed: 2026-08-20
title: "Production has not rebuilt since 2026-08-14 and the queue is held by an upstream outage"
status: closed
opened: 2026-08-18
closes_when: "a deploy reaches SUCCESS and /api/health reports manifestGenerated 2026-08-18 or later, and /lawsuits/mdl-3047 names Arturo Bejar"
trigger: "curl -s https://de-amplify.com/api/health"
surface: "every page: nothing merged since 2026-08-14 is live, including the whole MDL trial record"
related: ["docs/plans/2026-08-18-single-source-to-primary.md"]
---

# Production has not rebuilt since 2026-08-14 and the queue is held by an upstream outage

A build wedged at 15:01 on 2026-08-18 and produced no log output for nearly two hours while deploys
queued behind it. That build was cancelled through Railway's GraphQL API (`deploymentCancel`, which
the CLI's own subcommands do not expose), and **the queue still did not serve**.

Querying a queued deployment says why:

    "queuedReason": "Deployment queued due to upstream GitHub issues"

**Railway cannot fetch the repository.** That accounts for every symptom at once: a build running
two hours without a line of output, deploys that queue and never start, and CI green on every
commit. Nothing here is a repo fault and nothing here is fixable from this side.

**Do not redeploy.** Each attempt lengthens a queue nothing is draining. The Railway CLI session has
also since expired (`Unauthorized`), so re-authenticating is the first step of any further
diagnosis.

## One thing already ruled out

The service manifest reports `builder: RAILPACK` with `nixpacksConfigPath: null`, which would mean
`nixpacks.toml` is dead config and CI's Node 20 job mirrors an environment production does not have.
**It does not.** The last successful build's log opens `using build driver nixpacks-v1.41.0` and
prints a plan whose setup phase reads `nodejs_20, git`. The manifest shows dashboard-level settings
that `railway.toml` overrides at build time, as it also does for the build command, start command
and healthcheck, all three of which that manifest reports as null while plainly working.

If the queue is still stalled after the GitHub incident resolves, that is when a support ticket is
warranted, and it should say the same project built successfully at 14:40 from the same
`package.json`.

## Closed 2026-08-20

The upstream incident resolved and the queue drained without further intervention. Verified against
the closing condition rather than assumed:

- `/api/health` reports `manifestGenerated: 2026-08-18`.
- `/lawsuits/mdl-3047`, `/lawsuits` and `/distillations/mdl-3047` all serve Arturo Bejar, the Ninth Circuit dismissal and the $200 billion correction, and none of them still carries the stale `Scheduled:` label.

**Nothing was done to fix it and that is the finding.** The one intervention that mattered was
cancelling the wedged build through the GraphQL API; everything after that was waiting, correctly,
because the cause was outside this repository. The temptation throughout was to redeploy, and each
attempt would only have lengthened a queue nothing was serving.
