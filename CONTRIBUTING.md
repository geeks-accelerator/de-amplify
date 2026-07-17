# Contributing to de-amplify

Thanks for showing up. This is a movement site and a framing proposal, so the
most valuable contributions are usually to the *argument*, not just the code.

## The best contribution: attack the limits

The proposal is deliberately blunt about where it breaks (the honest-limits
section of the policy paper). If the diagnosis is right, make it stronger by
attacking it:

- Find a hole in the reasoning, the legal analysis, or the standard.
- Correct a fact. This site is about a live public issue and cites primary
  sources; if a claim is wrong or a citation is stale, open an issue with the
  primary source.
- Sharpen the framing, the self-test, or the campaign-safety rules.

Open an issue, or open a PR. Small, focused changes are easier to review and
merge than sweeping rewrites.

## Ground rules

- **Accuracy is load-bearing.** Legal and factual claims must trace to a
  primary source (a court order or filing, an official release). Secondary
  coverage is tiered down and flagged. Everything carries an as-of date.
- **House style: no em-dashes.** Use commas, colons, parentheses, or
  restructure. Straight quotes only.
- **Aim at the loop, not at people.** The movement targets a mechanism, never
  a company or a person. Keep contributions the same way: show the behavior,
  never a person.
- **Standalone.** This repo is self-contained; do not add references to other
  repositories.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:3333
npm run build    # typecheck + compile; run before opening a PR
npm run lint     # eslint . (flat config); run before opening a PR
```

See [CLAUDE.md](CLAUDE.md) for the repo's conventions (the content pipelines,
the discovery layer, the deploy gotchas) and [README.md](README.md) for what
the project is.

## License

By contributing, you agree that your contributions are licensed under this
repository's license, CC-BY-4.0.
