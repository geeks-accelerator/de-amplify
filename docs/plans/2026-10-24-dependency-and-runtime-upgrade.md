---
title: "Plan: the October 2026 dependency and runtime upgrade"
subtitle: "A critical Next.js advisory in the production tree, a production runtime past end-of-life, a deploy config with a hard Railway cutoff on 2026-12-01, and the debt each of those was quietly carrying."
status: "EXECUTED 2026-10-24 and deployed (PRs #93, #94, and #95 for the review fixes). Complete: the last open item, the healthcheck, was set in the Railway dashboard the same day, and no Config as Code cutover was ever needed (section 6). Section 6 records where execution departed from this plan and why."
date: 2026-10-24
site: "de-amplify.com"
document: "Operational plan. No legal claims. Every version, date and peer range was read from the npm registry, nodejs.org, the nodejs/Release schedule, nixpkgs, Railway's docs or Railpack's source on 2026-10-24."
---

# The October 2026 dependency and runtime upgrade

## 1. Why now

Four things, in order of urgency:

1. **`next@16.3.1` carries a critical advisory set**, including an RCE in `next/og` `ImageResponse` (GHSA-vcvr-r3jv-pc5j), which is the API every OG card on this site uses, and a `dynamicParams` bypass in metadata image routes (GHSA-f87g-xv8r-7p7x), which targets exactly the `dynamicParams = false` pattern `/distillations/[slug]` relies on. The OG inputs are repo-authored strings, so practical exposure is low; that is not a reason to argue it.
2. **Production runs Node 20, end-of-life since 2026-04-30.** Node's 2026-10-21 security release fixed ten CVEs (four High, including a Brotli decoder out-of-bounds write with RCE potential and two TLS hostname-validation bypasses) in 26.12.1, 24.22.1 and 22.23.4. nodejs.org: EOL lines "are always affected when a security release occurs."
3. **Railway's Config as Code is deprecated, and `railway.toml` stops being honored for this service on 2026-12-01.** Railway's own reference page: "Config as Code is deprecated", existing files keep working for legacy services until 2026-12-01, and the only valid `build.builder` values are `RAILPACK` (the default) and `DOCKERFILE`. Nixpacks is no longer a listed builder. Every deploy setting this repo has (builder, build command, start command, healthcheck, restart policy) lives in that file. *(Corrected in execution: this service never had a Railway Config File set, so `railway.toml` was not being read at all; see section 6.)*
4. **The 2026-10-21 PHP release ("PHP2Shell", CVE-2026-109618/-109619) does not apply.** The repo has no PHP and no image installs it. Recorded so nobody re-investigates.

## 2. What the audit found

The version audit is the smaller half. The codebase audit found that most of the upgrade's difficulty is self-inflicted, by mechanisms that were each right when written and have since become the debt.

### 2.1 Dependencies (`npm ci && npm audit` on `main` at `94038e8`)

**8 vulnerabilities (1 critical, 5 high, 2 moderate); 3 in the production tree** (`next`, its `sharp`, and `source-map-js`). All but one clear on a fresh resolve after bumping `next`; the exception is `postcss-selector-parser`, which `@tailwindcss/typography@0.5.20` (latest) pins **exactly** at 6.0.10, so only an `overrides` entry fixes it (and `npm audit fix --force` proposes *downgrading* typography to 0.5.4).

| Package | Now | Target | Note |
|---|---|---|---|
| `next`, `eslint-config-next` | 16.3.1 | **16.4.3** | newest; published 2026-10-23 |
| `eslint` | 9.39.5 | **10.13.0** | unblocked, see F9 |
| `typescript-eslint` + 8 siblings (`overrides`) | 8.65.0 | **8.72.0** | latest; all nine resolve |
| `postcss-selector-parser` (`overrides`) | 6.0.10 | **7.1.7** | new override |
| `react`, `react-dom` | 19.2.8 | 19.3.1 | |
| `geist` | 1.7.2 | 1.8.2 | |
| `postcss` | 8.5.26 | 8.5.31 | |
| `@types/node`, `@types/react`, `@types/react-dom` | 26.2.0, 19.2.18, 19.2.4 | 26.6.5, 19.3.0, 19.3.0 | |
| `typescript` | 6.0.3 | 6.0.3 | 7.0.2 is stable but blocked, see F11 |
| `tailwindcss`, `@tailwindcss/postcss`, `@tailwindcss/typography`, `react-markdown`, `remark-gfm`, `rehype-slug` | current | current | |

### 2.2 The codebase

| # | Finding | The debt | Resolution, and the existing pattern it reuses |
|---|---|---|---|
| F1 | Dependabot **#92** (open since 2026-10-19) already proposes `next` 16.4.2, which would have cleared the critical set five days ago. Its CI is red only on the `dependency audit` job, from dev-only transitives its minimal lockfile edit left stale. | A security fix sat unmerged because the job that flags advisories also blocked the PR that fixes them. | Supersede and close #92 in favour of this work. This is the existing house rule ("land on the newest coherent release, not Dependabot's literal number"). |
| F2 | **The audit job runs only on push and pull request.** `main`'s last CI run was 2026-08-29, so the critical advisories (published from 2026-09-22) never turned anything red on `main`. | A guard that only runs when someone commits is honor-system again, which is the exact failure `ci.yml`'s header says CI exists to end. | Add a weekly `schedule:` trigger to the existing workflow, Mondays, mirroring the `dependabot.yml` cadence already in the repo. |
| F3 | **The Node version is written in four places**: `nixpacks.toml` (`nodejs_20`), `engines` (`>=20.0.0`), and three `node-version:` lines in `ci.yml` (20, 22, 20). `@types/node` is already `^26`, a fifth version disagreeing with all of them. | Every runtime bump is a five-file edit, and the CI comments exist mainly to explain why the copies disagree. | **One source: `engines.node` in `package.json`.** `actions/setup-node` reads it via `node-version-file: package.json`, and Railpack reads it natively (precedence: `RAILPACK_NODE_VERSION`, `devEngines.runtime`, then `engines.node`). |
| F4 | **`railway.toml` deletes the lockfile before every install** "so native deps resolve for Linux". The committed lockfile already records every Linux native binary this tree needs, gnu and musl (10 entries: `@next/swc`, `@tailwindcss/oxide`, `lightningcss`, `@img/sharp`, `@unrs/resolver-binding`), and CI's `npm ci` on `ubuntu-latest` has been proving it on every run. | Production is not reproducible from the repo. It is why CLAUDE.md has to teach that "the only real production pins are the exact versions in `package.json`", why caret floors get raised as a workaround, and why a transitive fix in the lockfile pins nothing in production. | **The lockfile becomes the production pin.** CI's `npm ci` fails whenever `package.json` and the lockfile disagree, so on any green commit Railpack's default `npm install` resolves exactly the lockfile tree, and the doctrine collapses to one sentence. (Planned as a `RAILPACK_NODE_NPM_INSTALL=npm ci` override; dropped in execution, see section 6.) |
| F5 | **Nixpacks is a builder Railway no longer lists**, and the service's dashboard builder is *already* `RAILPACK` (recorded in `docs/issues/2026-08-18-railway-deploy-queue-blocked.md`); only `railway.toml`'s `builder = "nixpacks"` keeps it on Nixpacks. | `nixpacks.toml` exists to pin `nodejs_20`; its 20-line comment is history of a fix that no longer depends on it ("`git` is NO LONGER load-bearing here"). | Delete `nixpacks.toml`. Railpack's defaults match this app exactly: install, `npm run build`, start from the `start` script, `.next/cache` cached. Railpack reads Node from `engines`, so F3 lands for free. |
| F6 | **`railway.toml` itself expires on 2026-12-01** (Config as Code deprecation). | A silent cliff: after the cutoff the healthcheck path, timeout and restart policy stop applying, and nothing goes red. | Migrate with Railway's own tool, `railway config migrate`, to Infrastructure as Code (`.railway/railway.ts`), keeping only what Railpack does not already default (section 4.5). |
| F7 | `check:ledgers` passes `--experimental-strip-types` and two `--disable-warning` flags. **On Node 26 it runs with no flags at all** (exit 0, measured), since type stripping is stable. The one warning left is `MODULE_TYPELESS_PACKAGE_JSON`, the same warning the build prints for `tailwind.config.ts`. | Flags that exist to suppress the symptoms of a missing `"type"` field, plus a CONTRIBUTING and CLAUDE.md paragraph about a Node 22.6 floor. | Add `"type": "module"`. This **revisits** the 2026-08-14 decision ("would change module resolution for every file ... to fix a warning that costs nothing"), with evidence that decision did not have: only two CommonJS files exist in the repo (F8), and after converting them the build emits 0 warnings, compiled CSS is byte-identical, lint and all guards pass. The cost the decision priced is now measured at zero. |
| F8 | The only CommonJS left: `postcss.config.js` (`module.exports`) and `tailwind.config.ts` (`require("@tailwindcss/typography")`). Every other config is already ESM (`next.config.mjs`, `eslint.config.mjs`, all `scripts/*.mjs`). | Two module systems for one repo. | `postcss.config.js` becomes `postcss.config.mjs` in the named-const-then-export shape `eslint.config.mjs` already uses (an anonymous default export trips `import/no-anonymous-default-export`, verified). `tailwind.config.ts` is deleted outright by F10. |
| F9 | **The ESLint 10 blocker has cleared**, and it cleared exactly where CLAUDE.md said it would ("the answer arrives with a Next release"). With a control run each: ESLint 10.13.0 + `eslint-config-next` 16.3.1 fails with the documented `TypeError: scopeManager.addGlobals is not a function`; with 16.4.3 it exits 0. | A `dependabot.yml` ignore rule and a long CLAUDE.md entry whose "WHEN TO REMOVE IT" condition is now met. | Move to ESLint 10 in the same change; delete the ignore rule; rewrite the CLAUDE.md entry as a short dated history line. |
| F10 | **Tailwind 4 runs through its v3 compatibility shim** (`@config "../../tailwind.config.ts"`), and **the typography palette in that config is dead code in production today.** Measured in the browser on the current build: every page renders `prose prose-invert`, `.prose-invert` comes later in the stylesheet and re-points every `--tw-prose-*` variable at the stock invert palette, and the visible colours all come from the `prose-*:` modifier classes in `ProposalContent.tsx`. The palette is also duplicated: once in the JS config, again as `:root` variables in `globals.css` (used four times, all in that file). And `@config` lets v4 also scan README and CLAUDE.md prose for class names, which ships 13 utilities no component uses (`fixed`, `blur`, `outline`, `text-bone/30` and others; each grep-verified absent from `src`). | A compat shim, a JS config file, a block of styling that does nothing, a second copy of the palette, and dead CSS. | **CSS-first config**, Tailwind 4's native shape: `@theme` for the palette, fonts, tracking and keyframes; `@plugin` for typography; `@source` scoped to `src` (matching the old `content` glob exactly). Delete `tailwind.config.ts`, the dead typography block, and the `:root` duplicate (its four uses move to the `--color-*` variables `@theme` already emits). |
| F11 | **TypeScript 7.0.2 is stable** (CLAUDE.md still says "no stable 7 exists yet", now false), but `typescript-eslint` 8.72.0, the latest, declares `typescript: ">=4.8.4 <6.1.0"`. | None of ours: an external peer constraint. | Not deferred by choice. Correct the CLAUDE.md line, and keep `typescript` at `^6` until `typescript-eslint` widens its peer. That is the only item in this plan left waiting, and it waits on a third party. |
| F12 | `/api/health` reports content-date provenance but not the runtime, and this repo has twice been burned by a build config that silently did not do what it said (the `git` / content-dates episode, and the "is `nixpacks.toml` dead config?" question in the 2026-08-18 issue). | The deployed Node version is unobservable without Railway's build log. | Add `runtime: { node: process.version }` to the health payload's `data`, the same "make the answer curl-able" pattern `dates()` already follows in that file. |

## 3. The end state

After this lands, the repository says:

- **`package.json`**: `"type": "module"`; `engines.node: "^26.12.1"` (the patched release as the floor, the 26 line as the ceiling, so a fresh resolve can never select Node 27, an odd Current line); the version targets in 2.1; `check:ledgers` is plain `node scripts/check-ledgers.mjs`.
- **`package-lock.json`**: the production pin. CI proves it with `npm ci`; Railpack installs it.
- **`.railway/railway.ts`**: the service's healthcheck and restart policy, scoped by a named partial, mirroring the live service. Nothing Railpack already defaults.
- **Deleted**: `railway.toml`, `nixpacks.toml`, `tailwind.config.ts`, `postcss.config.js`.
- **`postcss.config.mjs`**: ESM, named const.
- **`src/app/globals.css`**: the whole design system in CSS, one palette.
- **`.github/workflows/ci.yml`**: every job on `node-version-file: package.json`; a weekly schedule; no explanation of why the jobs run different Node versions, because they no longer do.
- **`.github/dependabot.yml`**: no ESLint ignore rule.
- **Node 26 everywhere**: local dev (already 26.12.1), CI, production.

Node 26 is the right line: it is promoted to **LTS on 2026-10-28** and supported until **2029-04-30**, while Node 24 entered **Maintenance on 2026-10-20** (nodejs/Release `schedule.json`). If this executes before 2026-10-28 it runs a Current release that becomes LTS days later with no change; 26.12.1 is already the patched build.

## 4. The change, in commit order

One branch, one PR, one merge, one deploy. The commits are ordered so the security fix is first and each later commit builds on a green tree, not so any of them can ship alone.

### 4.1 `site: bump next to 16.4.3, eslint to 10, and clear every open advisory`

`package.json`:

```diff
-    "geist": "^1.7.2",
-    "next": "16.3.1",
-    "react": "^19.2.8",
-    "react-dom": "^19.2.8",
+    "geist": "^1.8.2",
+    "next": "16.4.3",
+    "react": "^19.3.1",
+    "react-dom": "^19.3.1",
 ...
-    "@types/node": "^26",
-    "@types/react": "^19.2.17",
-    "@types/react-dom": "^19.2.0",
-    "eslint": "^9.39.4",
-    "eslint-config-next": "16.3.1",
-    "postcss": "^8.5.23",
+    "@types/node": "^26.6.5",
+    "@types/react": "^19.3.0",
+    "@types/react-dom": "^19.3.0",
+    "eslint": "^10.13.0",
+    "eslint-config-next": "16.4.3",
+    "postcss": "^8.5.31",
 ...
   "overrides": {
-    "typescript-eslint": "8.65.0",   (and the eight @typescript-eslint/* siblings)
+    "typescript-eslint": "8.72.0",   (all nine at 8.72.0)
+    "postcss-selector-parser": "7.1.7"
   }
```

`.github/dependabot.yml`: delete the ESLint `ignore` block.

Regenerate the lockfile from scratch, **including `node_modules`** (`rm -rf node_modules package-lock.json && npm install`), then `npm ci`. Expect `npm audit`: **found 0 vulnerabilities**. On the override: it is a major bump of a parser, so it was checked rather than assumed. A rule-by-rule diff of compiled CSS against a baseline build shows all 161 `prose` rules identical. Drop the override when typography ships a release whose range admits >= 7.1.6.

### 4.2 `site: run node 26 everywhere, single-sourced from engines`

- `package.json`: add `"type": "module"` (after `"private"`); `engines.node` to `"^26.12.1"`; `check:ledgers` to `node scripts/check-ledgers.mjs`.
- `postcss.config.js` to `postcss.config.mjs`:
  ```js
  // Tailwind v4 ships its PostCSS plugin as a separate package and handles vendor
  // prefixing internally (via Lightning CSS), so autoprefixer is gone.
  const config = {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  };

  export default config;
  ```
- `.github/workflows/ci.yml`:
  - All three jobs: replace `node-version: 20` / `22` with `node-version-file: package.json`.
  - Retitle the jobs ("lint and build", "the drift guards"), and replace the "TWO JOBS, ON DIFFERENT NODE VERSIONS" and "run on Node 22 because ..." comment blocks with one short note: the Node version comes from `engines`, which Railpack also reads, so CI and production cannot disagree.
  - The audit job's comment loses its "the lockfile is deleted before install" sentence (no longer true after 4.5).
  - Add the schedule (F2):
    ```yaml
    on:
      pull_request:
      push:
        branches: [main]
      schedule:
        - cron: "0 14 * * 1" # Mondays, matching dependabot.yml, so main's audit cannot go stale
    ```

### 4.3 `site: move tailwind to its css-first config and delete the dead typography palette`

`src/app/globals.css`, replacing the `@import` / `@config` header and the `:root` block:

```css
@import "tailwindcss" source(none);
@source "../**/*.{ts,tsx}";
@plugin "@tailwindcss/typography";

/* The confession palette: cold machine, near-black, one brake-red alarm. */
@theme {
  --color-void: #070709;   /* page background, near-black (cool) */
  --color-panel: #0d0d12;  /* raised panels / callouts */
  --color-bone: #E7E7EC;   /* cool off-white body text */
  --color-signal: #5B9DFF; /* cold electric blue, primary accent (structure, links, the fix) */
  --color-brake: #FF4D5E;  /* brake-light red, alarm accent (the confession, the harm, the receipts) */
  --color-ash: #71717f;    /* muted gray */
  --font-mono: var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace;
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --tracking-widest2: 0.35em;
  --animate-blink: blink 1.1s steps(1) infinite;
  --animate-pulseBrake: pulseBrake 2s ease-in-out infinite;
  @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
  @keyframes pulseBrake { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
}
```

The four `var(--void)` / `var(--bone)` uses lower in the same file become `var(--color-void)` / `var(--color-bone)`. Delete `tailwind.config.ts`. The palette comments move with the values so nothing is lost.

**Why deleting the typography block is safe, measured, not argued.** Two candidate migrations were built and compared against the current build in a real browser, fingerprinting every element's computed colour (normalised to sRGB), background, border colours, `::marker`, font size, weight, family, letter-spacing, line-height, margins, padding, animation, opacity, radius and filters:

| Page | Elements | Port of the dead block into `@utility prose` | Block deleted (this plan) |
|---|---|---|---|
| `/` (all of `body`) | 283 | n/a | identical |
| `/scorecard` (all of `body`) | 153 | n/a | identical |
| `/proposal` (all of `.prose`) | 448 | equivalent colours, but the block **comes alive** (it lands after `.prose-invert`), changing every `--tw-prose-*` variable | identical |
| `/distillations/mdl-3047` (`.prose`, includes a table) | 795 | n/a | identical |

Porting the block would turn dead code into live code that today's modifier classes happen to mask. Deleting it reproduces production exactly. The compiled stylesheet goes from 10,057 to 10,390 bytes gzipped (+333 B, from `@theme` emitting its variables and `var()` references), less the 13 unused utilities it stops shipping.

### 4.4 `site: report the node runtime from /api/health`

In `src/app/api/health/route.ts`, `data: { status: "ok", service: "de-amplify", runtime: { node: process.version }, dates: dates() }`, with a two-line comment in the file's existing voice: the deployed runtime is otherwise only visible in Railway's build log, and this repo has been burned by build config that silently did not apply.

### 4.5 `site: replace railway.toml and nixpacks.toml with railpack defaults and infrastructure as code`

Run Railway's migration rather than hand-writing the file:

```bash
railway config migrate
```

That previews `.railway/railway.ts` generated from `railway.toml`. Then edit it down to what Railpack does not already default:

- **Drop** `builder` (Railpack is the default), the build command (Railpack runs `npm run build`), and the start command (Railpack starts from the `start` script; `next start` reads the injected `$PORT`, so the README's port note still holds).
- **Keep** `healthcheck: "/api/health"`, `healthcheckTimeout: 100`, and the restart policy (`on_failure`, 3 retries). Railway's IaC reference page documents `healthcheck` and `healthcheckTimeout` but not the restart-policy field, so take that field's name from the migrate output, not from this plan.

Then `npm install -D railway` (the file imports `railway/iac`), delete `railway.toml` and `nixpacks.toml`, and `railway config plan`, then `railway config apply`. **This step needs a logged-in Railway CLI** (the 2026-08-18 issue records the last session as expired), so it is the one step the PR author runs by hand. Railway does not read `.railway/` at deploy time; the `railwayapp/config` GitHub Action can automate apply-on-merge later, but it needs a `RAILWAY_TOKEN` secret and is only worth it if service config starts changing.

**Hard deadline: before 2026-12-01**, independent of everything else here. After that date `railway.toml` stops being honoured and the healthcheck and restart policy drop silently. *(Superseded in execution: the service never had a Railway Config File set, so there was nothing to cut over; see section 6.)*

### 4.6 `docs: retire the doctrine this change makes false`

The repo's documentation explains, at length, mechanisms this plan deletes. Leaving those paragraphs would be the drift this repo exists to prevent.

- **CLAUDE.md**, "Dependency pins": the ESLint entry becomes one dated history line (blocked 2026-08-14, cleared 2026-10-24 by `eslint-config-next` 16.4.x, diagnosis kept in one sentence so nobody re-blames typescript-eslint); "TypeScript stays at 6 (no stable 7 exists yet)" becomes "stays at 6 until `typescript-eslint` widens its `<6.1.0` peer; 7.0.2 is stable"; the `typescript-eslint` and `next` entries get their new versions; the "lockfile does not constrain production" paragraph is replaced by one sentence (CI and Railway both `npm ci` the committed lockfile, so it is the pin); the `tailwindcss` history note can go. Delete the "`check:ledgers` needs Node 22.6" bullet.
- **CLAUDE.md**, "Build, deploy, verify": Railpack via `.railway/railway.ts`; drop the Nixpacks references.
- **CONTRIBUTING.md**: delete the "One version floor to know about" paragraph; state the one version, Node 26, from `engines`.
- **README.md**: update any Railway, Nixpacks or Node version references, and the "Port note" if it names `railway.toml`.
- Close Dependabot **#92** with a comment pointing to this PR.
- `npm run check:guards` must still pass after the edits (it polices the guard lists in exactly these files).

## 5. Verification

Before merging, on the branch:

1. `npm ci`, then `npm audit` reports **found 0 vulnerabilities**.
2. `npm run lint` exits 0 with **0 problems** on ESLint 10.13.0.
3. `npm run build` exits 0 with **0 warnings**.
4. All seven guards exit 0: `check:dates`, `check:ledgers`, `check:quotes`, `check:surfaces`, `check:distillations`, `check:issues`, `check:guards`. (In the scratch rehearsal `check:dates` could not run because the copy had no git history; the baseline copy failed the same way, and it passes in the real repo.)
5. `npm run start`, then 200s for `/`, `/proposal`, `/scorecard`, `/lawsuits/mdl-3047`, `/distillations/mdl-3047`, `/llms.txt`, `/hearings.md`, `/api/health`, and PNGs from `/opengraph-image`, `/distillations/mdl-3047/opengraph-image` and `/apple-icon`. (Rehearsal: all 11 passed.)
6. The computed-style fingerprint from 4.3, re-run against `main`'s build on the same four pages: identical.
7. CI green on all three jobs, now all on Node 26.

After the deploy:

8. Railway's build log shows the Railpack builder and Node 26.12.x.
9. `curl -s https://de-amplify.com/api/health` reports `runtime.node: "v26.12.1"` (or a later 26.x) and the expected `manifestGenerated`.
10. Live OG cards render (where the RCE lived), and the browser console shows no CSP violations.

Rollback is `git revert` of the merge. Railway keeps serving the previous deploy if a build fails, so a bad build means a stale site, not a down one. `.railway/railway.ts` changes only take effect on `railway config apply`, so revert that by applying the previous file.

## 6. Execution record (2026-10-24)

Six commits on `upgrade-2026-10-node26-next1643`:

| Commit | Section |
|---|---|
| `site: bump next to 16.4.3, eslint to 10, and clear every open advisory` | 4.1 |
| `site: run node 26 everywhere, single-sourced from engines` | 4.2 |
| `site: move tailwind to its css-first config and delete the dead typography palette` | 4.3 |
| `site: report the node runtime from /api/health` | 4.4 |
| `site: replace railway.toml and nixpacks.toml with railpack defaults and infrastructure as code` | 4.5, minus the Railway-side steps |
| `docs: retire the doctrine the runtime and dependency change made false` | 4.6 |

**Where execution departed from the plan, and why:**

1. **The first lockfile regeneration was wrong, and the audit caught it.** Deleting only `package-lock.json` left `node_modules` in place, and npm kept `zod` 4.4.3 because it still satisfied `^4.0.0`, inside GHSA-mrhx-c7xc-m3w5. The scratch rehearsal had not hit this because it started from an empty tree. Regenerating from an empty `node_modules` resolved `zod` 4.6.7 and the audit went to 0. CLAUDE.md now says to regenerate that way.
2. **The `RAILPACK_NODE_NPM_INSTALL=npm ci` override was dropped.** It needed a service variable, and IaC variable ownership (`--variables=managed|unmanaged`) is a decision whose effect on the service's existing variables the docs do not state. It is also redundant: CI's `npm ci` fails on any `package.json`/lockfile disagreement, so on a green commit `npm install` resolves the same tree. Fewer settings, same guarantee.
3. **`.railway/railway.ts` was written by hand, not generated by `railway config migrate`.** The CLI is logged in, but this account sees 22 Railway projects and none holds the de-amplify service, so `migrate`, `plan` and `apply` cannot run from here. The file was written against the installed SDK's types (`railway` 3.16.0), and `tsconfig.json` now includes `.railway` so every build typechecks it (fault-injected: a wrong `restartPolicyType` fails `tsc`). It declares `partial = "de-amplify"` so an apply cannot touch other resources in a shared project. **The project and service names were `de-amplify` by assumption**, since confirmed in the dashboard (the project lives in Lee Brown's workspace, which is why this account's CLI could not see it). The `.railway` typecheck later moved out of the root tsconfig into its own `check:iac` guard (#95), so an SDK type change cannot block a content deploy.
4. **The verification was wider than planned.** The computed-style comparison ran against a build of `main` itself (not a dependency-bumped copy), over eight pages, 2,638 elements and 27 properties including layout boxes: 0 differences. Two artifacts of the probe were found and corrected on the way, not regressions: one colour property compared in its CSS notation instead of normalised sRGB, and Next's injected `<next-route-announcer>` element.
5. **The healthcheck was set in the dashboard, and the cutover turned out to be unnecessary.** The PR merged before any Railway-side step, and the review of the deployed code (finding 1) was right that production then had no healthcheck. In the dashboard on 2026-10-24: **Healthcheck Path was empty**, and **no Railway Config File was set** ("Add File Path"). So `railway.toml` had not been read by this service, deleting it changed nothing, and there was nothing to cut over. The healthcheck path was set to `/api/health` there and applied, and the redeploy's build log reads `package.json > engines > node (26.12.1)`, `Path: /api/health`, `Retry window: 5m0s`, `[1/1] Healthcheck succeeded!`. The restart policy was already On Failure with Railway's default 10 retries, and the healthcheck window is Railway's default 300 seconds, so `.railway/railway.ts` was aligned to those live values (it had said timeout 100 and 3 retries, copied from the old `railway.toml`). The file now mirrors the service rather than driving it; it takes effect only through `railway config plan` and `railway config apply`.
6. **The first Railpack deploy ran Node 26.11.1**, because Railpack reduces a caret range to its major. Fixed by pinning `engines` exactly (#94), and made un-forgettable by `check:node` (#95), which fails CI when a security release lands on the pinned line.

## 7. Sources (read 2026-10-24)

- Node.js, October 21, 2026 security releases: https://nodejs.org/en/blog/vulnerability/october-2026-security-releases
- Node.js release schedule: https://github.com/nodejs/Release/blob/main/schedule.json
- GHSA-vcvr-r3jv-pc5j (`next/og` RCE): https://github.com/advisories/GHSA-vcvr-r3jv-pc5j
- GHSA-mcj8-r9mp-w47p (SSG/ISR cache poisoning): https://github.com/advisories/GHSA-mcj8-r9mp-w47p
- Next.js security update, 2026-10-14: https://nextjs.org/blog/nextjs-security-update-october-14-2026
- Railway, Config as Code (deprecation, 2026-12-01 cutoff, valid builders): https://docs.railway.com/reference/config-as-code
- Railway, Infrastructure as Code and its reference: https://docs.railway.com/infrastructure-as-code and https://docs.railway.com/infrastructure-as-code/reference
- Railpack, Node provider (version precedence, install override): https://railpack.com/languages/node
- Railpack source, npm install default: https://github.com/railwayapp/railpack/blob/main/core/providers/node/package_manager.go
- Dependabot #92: https://github.com/geeks-accelerator/de-amplify/pull/92
- PHP2Shell (not applicable): https://thehackernews.com/2026/10/php-issues-emergency-patches-for-two.html
- The npm registry, for every version, publish time and peer range above (`npm view`).
