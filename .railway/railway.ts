// Railway service settings, as Infrastructure as Code.
//
// This replaced railway.toml and nixpacks.toml on 2026-10-24. Railway deprecated
// Config as Code (railway.toml stops being honored on 2026-12-01) and no longer
// lists Nixpacks as a builder, so the service builds with Railpack, Railway's
// default. Railpack's defaults are exactly this app's: install the committed
// lockfile, `npm run build`, start from the `start` script (`next start`, which
// binds the injected $PORT), and cache .next/cache. It reads the Node version
// from `engines` in package.json, the same field CI reads, so there is no
// runtime pin here to drift.
//
// So this file holds only what Railpack cannot infer: the healthcheck and the
// restart policy. Nothing about the build lives here.
//
// THIS FILE IS NOT READ AT DEPLOY TIME. A change takes effect only when someone
// with access to the project runs, from a directory linked to it:
//
//   railway config plan    # review the diff against the live service first
//   railway config apply
//
// `partial` scopes this file to the one service it declares, so an apply can
// never delete other resources that share the project.

import { defineRailway, project, service } from "railway/iac";

export const partial = "de-amplify";

export default defineRailway(() => {
  const web = service("de-amplify", {
    // /api/health also reports the deployed Node version and the content-date
    // manifest, so a passing healthcheck says which build is serving.
    healthcheck: "/api/health",
    healthcheckTimeout: 100,
    deploy: {
      restartPolicyType: "ON_FAILURE",
      restartPolicyMaxRetries: 3,
    },
  });

  return project("de-amplify", { resources: [web] });
});
