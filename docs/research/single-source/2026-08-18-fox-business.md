# Single-source distillation: Fox Business, trial opening

- **Source:** Fox Business, "States accuse Meta of targeting children for Facebook, Instagram addiction: 'The young ones are the best ones'", by Anders Hagstrom, with Reuters contributing
- **URL:** https://www.foxbusiness.com/politics/states-accuse-meta-targeting-children-facebook-instagram-addiction-the-young-ones-best-ones
- **Published:** 2026-08-18 1:59 p.m. EDT. **Fetched:** 2026-08-18.
- **Type:** short staff write-up built partly on wire copy; no indication of a reporter in court
- **Matter:** MDL 3047, state AG bellwether

## Step 1: Structure

Three sections in a short piece. Notable that the byline is staff but the piece credits Reuters,
so some claims are wire-derived and inherit that provenance while others do not.

1. Openings and the internal-document headline
2. Parties and allegations
3. Penalties and Meta's response

## Steps 2 and 3: Atomic claims, tagged

Pass 1, obvious.

| ID | Claim | Basis | Stance | Action | Locator |
|----|-------|-------|--------|--------|---------|
| F1 | Meta faced the accusations in federal court on Tuesday | REPORTER | assert | PUBLISHABLE | S1 |
| F2 | The deputy California AG is named as Meghan O'Neill | COURTROOM | assert | **DO-NOT-PUBLISH** | S1 |
| F3 | O'Neill told the jury Meta's business model was to hook, hold, harvest and hide | COURTROOM | assert | ATTRIBUTE-ONLY | S1 |
| F4 | She pointed to an internal Meta report titled about young ones being the best ones | COURTROOM | assert | NEEDS-PRIMARY | S1 |
| F5 | CA, CO, KY and NJ lead a bipartisan group of 29 states | RECORD | assert | PUBLISHABLE | S2 |
| F6 | The states argue the platforms caused anxiety, depression and suicide, and misled consumers about safety | RECORD | assert | PUBLISHABLE | S2 |
| F7 | Zuckerberg and Mosseri are expected to testify | REPORTER | assert | NEEDS-PRIMARY | S2 |
| F8 | Attorneys general stated last week the case could cost Meta around $200 billion | COURTROOM | assert | NEEDS-PRIMARY | S3 |
| F9 | The subheadline attributes the roughly $200B exposure to the 29-state group | REPORTER | assert | NEEDS-PRIMARY | S3 |
| F10 | Meta denies wrongdoing and points to teen protection measures | PARTY | deny | ATTRIBUTE-ONLY | S3 |
| F11 | Meta says the states decided to chase an outlandish payout rather than stick to the facts or the law | PARTY | deny | ATTRIBUTE-ONLY | S3 |

Pass 2, implicit.

| ID | Implicit assumption | Basis | Action |
|----|--------------------|-------|--------|
| F12 | "Told the jury" assumes a jury that decides, with no mention of the advisory structure | REPORTER | DO-NOT-PUBLISH |
| F13 | The headline treats a phrase from an internal document, characterised by opposing counsel in an opening, as established enough to be the headline | COURTROOM | ATTRIBUTE-ONLY |
| F14 | The $1.4 trillion figure is entirely absent, so a reader of this source alone would not know the larger number exists | REPORTER | n/a |

Pass 3, negative.

| ID | Denial | Whose | Action |
|----|--------|-------|--------|
| F15 | Meta denies anyone in the plaintiff states was misled | Meta | ATTRIBUTE-ONLY |
| F16 | Meta denies that benign features such as an additional Instagram account harmed residents | Meta | ATTRIBUTE-ONLY |
| F17 | Meta denies responsibility for what it frames as industry-wide age verification challenges | Meta | ATTRIBUTE-ONLY |

## Step 4: Clusters

- **C-A The internal document** (F4, F13).
- **C-B Parties** (F5, F6).
- **C-C The number** (F8, F9, F14).
- **C-D Meta's denial** (F10, F11, F15, F16, F17): the fullest verbatim run of the Meta statement in the batch.

## Step 5: Tensions (internal)

1. **F2 against four other sources.** This is the only source in the batch spelling the deputy AG's first name with an h. NYT, Reuters, the Guardian and The Hill all agree on the other spelling, and the Reuters courtroom sketch caption agrees with them. Tagged DO-NOT-PUBLISH not because it is certainly wrong but because a name is exactly the kind of token that must come from the docket.
2. **The subheadline (F9) attributes the ~$200B to the 29 states; the body attributes the exposure claim to the four lead states elsewhere in the batch.** Which states own the number is unresolved here.
3. **F12.** Repeated reference to "the jury" with no advisory qualifier, in a piece that has room for it.

## Step 6: Synthesis

**S1. Meta's public denial is fully reproduced here, and it is a four-part denial.**
No one misled, features are benign, age verification is industry-wide, and the payout demand is
outlandish. *Basis: PARTY.* Useful precisely because it is the complete statement rather than a
clipped quote, so the structure of the defence is visible.

**S2. The $200 billion is corroborated a third time, again sourced to "last week".**
*Basis: COURTROOM via wire.* Independent of Reuters only in part, since Reuters contributed to
this report, so treat as partial corroboration and not a fourth witness.

**S3. This source is a warning about single-source reliance.**
Alone, it would leave a reader with a misspelled advocate, a binding jury that does not exist, and
no knowledge of the trillion-dollar figure. Every one of those is corrected by the batch.

## Step 7: Traceability and orphans

Orphans: the embedded video promo, the newsletter box, and two unrelated cross-links. All
correctly peripheral. Low orphan rate, mostly because the article is short and claim-dense.

**Unsynthesised claims (declared):** F1, F3, F7. 3 of 17 (17.6%). Baseline posture and logistics claims, recorded in the inventory for completeness. This list is machine-computed and enforced by `npm run check:distillations`.

## Step 8: Quality

Low-to-moderate, and useful mainly as a corroborating and contrasting source rather than a primary
read. The Reuters contribution line means its best claims are not independent. Its distinctive
contribution is the complete Meta statement.

## Step 9: Validation

- **Source length:** approx. 500 words (estimated, no cache: see the no-source-cache note in the README). **Synthesis (Step 6):** 135 words (measured).
- **Claim compression:** 17 atomic claims to 3 outputs.
- **Traceability:** complete.
- **Regeneration test:** passes on the denial structure and the number; deliberately regenerates nothing about the courtroom, because the source does not establish presence.
- **Not machine verified.**
