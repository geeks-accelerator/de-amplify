# Single-source distillation: BBC News (broadcast)

- **Source:** BBC News, "Meta's $1 trillion lawsuit could change Instagram and Facebook forever", with senior technology reporter Chris Vallance and reporters Lily Jamali and Ben Henley
- **URL:** https://www.youtube.com/watch?v=0ADvC4ioqe4 (9:59)
- **Published:** 2026-08-18. **Transcript:** YouTube auto-captions, fetched 2026-08-18.
- **Basis tier: `CAPTION-ASR`.** The transcript gives the correspondent's surname two different spellings and garbles a head of government's name.
- **Transcript gate:** 1,675 words, punctuation ratio **0.0496**, above 0.015, so no cleanup pass. Length band 600 to 2,500.

## Step 1: Structure

Six sections, and the international legislative segment is unique in this corpus.

1. Cold open, vox pops and expert clips
2. The case, with the technology reporter
3. Prior trials
4. What makes this one different, including the numbers
5. **International legislative timeline**
6. The remedy, vox pops, and whether Meta would concede features

## Steps 2 and 3: Atomic claims, tagged

Pass 1, obvious.

| ID | Claim | Basis | Stance | Action | Locator |
|----|-------|-------|--------|--------|---------|
| D1 | The trial is called the largest consumer protection lawsuit in American history, larger than the tobacco cases | CAPTION-ASR | assert | **DO-NOT-PUBLISH** | S1 |
| D2 | The distinction from other suits is the allegation that companies knowingly profited from harm | EXPERT | assert | ATTRIBUTE-ONLY | S1 |
| D3 | The takeaway is that US states are seeking to regulate platform design rather than content | EXPERT | assert | PUBLISHABLE | S1 |
| D4 | 29 US states are involved, alleging the product was faulty by design | CAPTION-ASR | assert | PUBLISHABLE | S2 |
| D5 | The suit was filed in 2023 by dozens of US states | CAPTION-ASR | assert | NEEDS-PRIMARY | S2 |
| D6 | The trial is set to last six weeks and features four states as plaintiffs | CAPTION-ASR | assert | NEEDS-PRIMARY | S2 |
| D7 | The four states want Meta to change the algorithms and to end autoplay | CAPTION-ASR | assert | NEEDS-PRIMARY | S2 |
| D8 | An LA jury granted a 20-year-old California woman $6 million | CAPTION-ASR | assert | PUBLISHABLE | S3 |
| D9 | In New Mexico the AG convinced a jury Meta deliberately endangered children, prompting nearly a billion dollars in fines | CAPTION-ASR | assert | NEEDS-PRIMARY | S3 |
| D10 | **A judge has ordered more rigorous age rules and a stop to overnight push notifications for users under 18** | CAPTION-ASR | assert | NEEDS-PRIMARY | S3 |
| D11 | Meta is appealing | CAPTION-ASR | assert | PUBLISHABLE | S3 |
| D12 | A New Mexico judge described the products as a public nuisance comparable to air pollution | CAPTION-ASR | assert | NEEDS-PRIMARY | S4 |
| D13 | **Meta claims the potential fines could run to $1.4 trillion; the states put it at a much lower figure, $200 billion** | CAPTION-ASR | assert | PUBLISHABLE | S4 |
| D14 | Australia banned social media for under-16s in December 2025, the world's first such ban | CAPTION-ASR | assert | NEEDS-PRIMARY | S5 |
| D15 | The UK announced plans in June 2026 for an under-16 ban, with measures set to take effect around spring 2027 | CAPTION-ASR | assert | NEEDS-PRIMARY | S5 |
| D16 | Canada proposed an under-16 ban in June 2026 with a workaround for firms that demonstrate harm-minimisation policies | CAPTION-ASR | assert | NEEDS-PRIMARY | S5 |
| D17 | **In August France's top court blocked a bill banning under-15s, holding that it infringed freedom of expression**, after parliament approved it in July | CAPTION-ASR | assert | NEEDS-PRIMARY | S5 |
| D18 | Bans do remove hundreds of thousands of children's accounts, but Australian evidence shows a degree of circumvention | EXPERT | qualify | NEEDS-PRIMARY | S5 |
| D19 | The states want changes to stories, like counts, and an end to infinite scrolling | CAPTION-ASR | assert | NEEDS-PRIMARY | S6 |
| D20 | Meta can point to incremental child-safety and parental-control changes already made | EXPERT | assert | ATTRIBUTE-ONLY | S6 |
| D21 | The changes sought go to features fundamental to how these businesses make money | EXPERT | assert | ATTRIBUTE-ONLY | S6 |

Pass 2, implicit.

| ID | Implicit assumption | Basis | Action |
|----|--------------------|-------|--------|
| D22 | D17 establishes that a constitutional court has already struck a design-side restriction on speech grounds. Paired with the reported Section 230 and First Amendment reasoning in New Mexico, the speech objection to brake mandates is not hypothetical and has succeeded twice, in two legal systems. | CAPTION-ASR | NEEDS-PRIMARY |
| D23 | D18 assumes efficacy is measurable and currently ambiguous, which cuts against both the ban advocates and their critics | EXPERT | ATTRIBUTE-ONLY |
| D24 | D20 against D21 is the whole argument in miniature: the cheap safety changes have been made, and the contested ones are the revenue-bearing ones | EXPERT | ATTRIBUTE-ONLY |
| D25 | D10 is a *specific, granted* brake: a time-of-day restriction on notifications for minors. Concrete, testable, and already ordered. | CAPTION-ASR | NEEDS-PRIMARY |

Pass 3, negative.

| ID | Denial | Whose | Action |
|----|--------|-------|--------|
| D26 | Meta strongly denies the claims and calls them unsubstantiated | Meta | ATTRIBUTE-ONLY |
| D27 | A member of the public doubts an end to the scroll would work, since rival platforms would keep it | vox pop | ATTRIBUTE-ONLY |
| D28 | The correspondent declines to say the bans are proven effective, treating that as the open question | EXPERT | ATTRIBUTE-ONLY |

## Step 4: Clusters

- **C-A Design not content** (D3, D4, D7, D19, D21).
- **C-B The numbers, correctly attributed** (D13).
- **C-C Granted remedies in New Mexico** (D9, D10, D12, D25).
- **C-D The international legislative record** (D14 to D18, D22, D23).
- **C-E The efficacy question** (D18, D27, D28).

## Step 5: Tensions (internal)

1. **D1 is an unattributed superlative.** No source is given for the largest-in-history claim, and it sits in the cold open where it does the most work. Tagged DO-NOT-PUBLISH.
2. **D4 says 29 states; D5 says dozens filed in 2023.** The same drift toward a survivor count that appears in two other items in this corpus.
3. **D27 anticipates D22 from the opposite direction.** A member of the public says removing the scroll will not work because rivals keep it. A New Mexico judge is separately reported to have refused that remedy for a version of the same reason. The programme does not connect them.
4. **D13 is correct where most of the corpus is wrong.** Recorded as a positive finding: with Reuters, this is the second source to attribute the trillion-dollar figure to Meta and the smaller one to the states.

## Step 6: Synthesis

**S1. The speech objection to design mandates has now succeeded in two jurisdictions.**
France's constitutional court is reported to have struck an under-15 ban as infringing freedom of
expression, weeks after a New Mexico court is reported to have declined feed-design remedies partly
on First Amendment and Section 230 grounds. *Basis: CAPTION-ASR. Action: NEEDS-PRIMARY, twice over.*
If both hold, the constraint on brake mandates is constitutional rather than merely political, and
it is the strongest thing in this corpus against a purely litigative route.

**S2. A granted brake exists and is unusually specific: no overnight push notifications for under-18s.**
*Basis: CAPTION-ASR.* A time-of-day rule is exactly the kind of testable control this project
argues for, and a court has reportedly already ordered one.

**S3. The BBC attributes the two figures correctly.**
Meta's claim of up to $1.4 trillion, the states' much lower $200 billion. *Basis: CAPTION-ASR.*
Second independent source doing so.

**S4. The efficacy of bans is genuinely open, and the honest read is mixed.**
Hundreds of thousands of accounts removed, alongside meaningful circumvention. *Basis: EXPERT.*

**S5. The cheap safety changes are done; the contested ones carry the revenue.**
*Basis: EXPERT, implicit at D24.* The clearest broadcast statement of why the remaining fight is hard.

## Step 7: Traceability and orphans

Orphans: the vox pops on personal screen time, retained as texture rather than claim; the UK and
Canadian legislative items, captured at cluster level but not synthesised, because this file's
output goal is the US proceeding and its constraints. Flagged rather than dropped.

**Unsynthesised claims (declared):** D2, D6, D8, D11, D26. 5 of 28 (17.9%). Predominantly baseline posture claims and party denials: recorded in the inventory for completeness, deliberately not carried into an output. This list is machine-computed and enforced by `npm run check:distillations`.

## Step 8: Quality

The best-structured broadcast item and the only one with an international legislative segment. It
gets the number attribution right. Its weaknesses are the unsourced superlative in the cold open and
a transcript that cannot be quoted. Every date in the legislative timeline is a specific,
checkable claim and none is verified here.

## Step 9: Validation

- **Source:** 1,675 words. **Synthesis (Step 6):** 205 words (measured), a **8.2:1 word compression**, well inside the band.
- **Claim compression:** 28 atomic claims to 5 outputs.
- **Traceability:** complete, two orphan groups named.
- **Regeneration test:** passes on the constitutional constraint, the granted notification remedy, the attribution and the efficacy picture.
- **Not verified.** Machine transcript, no cache.
