# Security Policy

de-amplify.com is a static content site: no database, no user accounts, no
server-side secrets. The report form stores nothing and runs entirely in the
browser.

## Reporting a vulnerability

Email **security@de-amplify.com**. This mirrors the contact published at
[`/.well-known/security.txt`](public/.well-known/security.txt) (RFC 9116).

Please include:

- what you found and where (URL, file, or route),
- how to reproduce it,
- the impact you think it has.

We aim to acknowledge reports within a few days. Please give a reasonable
window to fix the issue before public disclosure. There is no bug-bounty
program; this is a small movement project.

## Scope

- In scope: the de-amplify.com site and this repository.
- Out of scope: third-party embeds (for example the Suno music player on
  `/remixes`), the hosting and CDN providers, and issues that require a
  compromised end-user device.
