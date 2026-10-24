// Railway service settings, as Infrastructure as Code.
//
// This replaced railway.toml and nixpacks.toml on 2026-10-24. Railway deprecated
// Config as Code and no longer lists Nixpacks as a builder, so the service
// builds with Railpack, Railway's default. Railpack's defaults are exactly this
// app's: install the committed lockfile, `npm run build`, start from the `start`
// script (`next start`, which binds the injected $PORT), and cache .next/cache.
// It reads the Node version from `engines` in package.json, the same field CI
// reads, so there is no runtime pin here to drift.
//
// So this file holds only what Railpack cannot infer: the healthcheck and the
// restart policy. Nothing about the build lives here.
//
// THIS FILE MIRRORS THE LIVE SERVICE; IT DOES NOT DRIVE IT. Railway does not read
// .railway/ at deploy time. The values below were set in the Railway dashboard
// on 2026-10-24 and verified there: the redeploy's build log ends "Path:
// /api/health", "Retry window: 5m0s", "[1/1] Healthcheck succeeded!". The
// service never had a Railway Config File set, so deleting railway.toml changed
// nothing and no `railway config migrate cutover` is needed.
//
// To change a setting, change it here and in the dashboard together, or apply
// this file from a checkout linked to the project (the project lives in Lee
// Brown's workspace):
//
//   railway config plan    # must show only this service's healthcheck/restart
//   railway config apply
//
// `partial` scopes the file to the one service it declares, so an apply can
// never delete other resources in the project. Typechecked in CI by
// `npm run check:iac`.

import { defineRailway, project, service } from "railway/iac";

export const partial = "de-amplify";

export default defineRailway(() => {
  const web = service("de-amplify", {
    // /api/health also reports the Node major and whether it matches the
    // engines pin, so a passing healthcheck says which build is serving. No
    // healthcheckTimeout: the service runs Railway's default 300-second window.
    healthcheck: "/api/health",
    deploy: {
      restartPolicyType: "ON_FAILURE",
      restartPolicyMaxRetries: 10,
    },
  });

  return project("de-amplify", { resources: [web] });
});
