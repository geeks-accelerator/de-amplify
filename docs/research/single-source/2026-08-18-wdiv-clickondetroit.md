# Single-source distillation: WDIV ClickOnDetroit, local angle

- **Source:** WDIV Local 4 / ClickOnDetroit, "States take Meta to trial over claims social media harms children"
- **URL:** https://www.clickondetroit.com/news/local/2026/08/18/states-take-meta-to-trial-over-claims-social-media-harms-children/
- **Published:** 2026-08-18. **Fetched:** 2026-08-18.
- **Type:** local station report, no byline shown; the national material is thin and the local material is unique
- **Matter:** MDL 3047, with Michigan's withdrawal from the coalition

## Step 1: Structure

Four sections. The value is entirely in section 2, which no national source in this batch carries.

1. National summary
2. "Michigan steps back, but stays invested"
3. "What's at stake"
4. "Push for reform in Michigan"

## Steps 2 and 3: Atomic claims, tagged

Pass 1, obvious.

| ID | Claim | Basis | Stance | Action | Locator |
|----|-------|-------|--------|--------|---------|
| W1 | A federal trial against Meta got underway in California with 29 states arguing Meta knowingly designed for addiction | REPORTER | assert | PUBLISHABLE | S1 |
| W2 | AGs from California, New Jersey, Kentucky and Colorado lead the coalition | RECORD | assert | PUBLISHABLE | S1 |
| W3 | **Michigan withdrew from the multistate Meta litigation** | PARTY | assert | NEEDS-PRIMARY | S2 |
| W4 | Michigan's stated reason was early adverse court orders imposing burdensome litigation costs on the state | PARTY | assert | ATTRIBUTE-ONLY | S2 |
| W5 | Michigan's office characterised those costs as consistent with Meta weaponizing discovery against plaintiffs | PARTY | assert | ATTRIBUTE-ONLY | S2 |
| W6 | Michigan withdrew knowing other state plaintiffs would continue | PARTY | assert | ATTRIBUTE-ONLY | S2 |
| W7 | Michigan expects a successful outcome to produce nationwide changes benefiting Michigan youth | PARTY | assert | ATTRIBUTE-ONLY | S2 |
| W8 | The trial is expected to last six weeks | REPORTER | assert | NEEDS-PRIMARY | S3 |
| W9 | Meta has denied the allegations | PARTY | deny | PUBLISHABLE | S3 |
| W10 | The Michigan Senate has passed a Kids Over Clicks bill package | REPORTER | assert | NEEDS-PRIMARY | S4 |
| W11 | That legislation would bar use of minors' personal data to curate feeds, make AI chatbots inaccessible to children, and increase accountability | REPORTER | assert | NEEDS-PRIMARY | S4 |
| W12 | A parent advocate framed the approach as safety by design, building protections into the product rather than placing the burden on families | EXPERT | assert | ATTRIBUTE-ONLY | S4 |

Pass 2, implicit.

| ID | Implicit assumption | Basis | Action |
|----|--------------------|-------|--------|
| W13 | W3 implies the coalition was once larger than 29, so the number is a survivor count rather than a fixed roster | PARTY | NEEDS-PRIMARY |
| W14 | W4 implies discovery cost is a live selection pressure on which sovereigns can afford to litigate design cases at all | PARTY | NEEDS-PRIMARY |
| W15 | W11 and W12 imply a legislative route that does not depend on the trial's outcome | REPORTER | PUBLISHABLE |

Pass 3, negative.

| ID | Denial | Whose | Action |
|----|--------|-------|--------|
| W16 | Michigan denies that withdrawal signalled disagreement with the claims, asserting continued concern | Michigan AG office | ATTRIBUTE-ONLY |
| W17 | The parent advocate denies that the burden should fall on parents to out-engineer platform design | EXPERT | ATTRIBUTE-ONLY |

## Step 4: Clusters

- **C-A Michigan's withdrawal** (W3, W4, W5, W6, W7, W13, W14, W16).
- **C-B National posture** (W1, W2, W8, W9).
- **C-C The legislative alternative** (W10, W11, W12, W15, W17).

## Step 5: Tensions (internal)

1. **W3 against W1.** The article's own lede says 29 states are arguing, and its second section explains that one state left because litigating was too expensive. Both true, unreconciled, and the juxtaposition is the story.
2. **W6 and W7 against W4.** Michigan says it withdrew because the cost was unbearable and simultaneously that it expects to receive the benefit of others' success. That is a free-rider structure stated openly, and the article does not name it.
3. **W12 versus the trial frame.** The advocate's argument is for design regulation independent of the outcome, which quietly concedes that the litigation may not deliver it.

## Step 6: Synthesis

**S1. The 29-state coalition is a survivor count, and at least one state left over litigation cost.**
Michigan withdrew after early adverse orders it says imposed unsustainable costs. *Basis: PARTY,
via a spokesperson statement. Quality: NEEDS-PRIMARY, and it is the only appearance of this fact in
the batch.* If it holds it is materially interesting: the number of sovereigns willing to bring a
design case is bounded by discovery cost, not only by legal merit.

**S2. Free-riding on a design case is rational and is being done openly.**
Michigan expects nationwide remedial benefit while bearing none of the cost. *Basis: PARTY.* That
is an argument for a standard rather than for serial state litigation, made unintentionally by a
state that dropped out of the litigation.

**S3. The legislative track is being pursued in parallel and does not depend on the verdict.**
*Basis: REPORTER.* Consistent with this project's own position that litigation is not the fix.

## Step 7: Traceability and orphans

Orphans: the parent advocate's longer quotations about generational stakes, dropped as advocacy
rather than claim; and one truncated quotation in the source itself, which ends mid-sentence with
an ellipsis and is therefore unusable.

**Unsynthesised claims (declared):** none. Every claim in the inventory is carried by a cluster, a tension or an output. This is machine-computed and enforced by `npm run check:distillations`.

## Step 8: Quality

Low as national reporting, high as a unique-fact source. It carries no courtroom material and its
national paragraphs are thin. It is nonetheless the only source in the batch to establish that the
coalition lost a member and why, which is exactly the kind of fact that national coverage drops
and a local station keeps because the departing state is its own.

## Step 9: Validation

- **Source length:** approx. 700 words (estimated, no cache: see the no-source-cache note in the README). **Synthesis (Step 6):** 155 words (measured).
- **Claim compression:** 17 atomic claims to 3 outputs.
- **Traceability:** complete, two orphans named.
- **Regeneration test:** passes on the withdrawal, the free-rider structure and the legislative track.
- **Not machine verified.** The Michigan statement in particular is a spokesperson quotation reproduced by one station and should be sought from the AG's office directly.
