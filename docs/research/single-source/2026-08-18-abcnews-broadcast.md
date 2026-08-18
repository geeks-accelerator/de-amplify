# Single-source distillation: ABC News (broadcast)

- **Source:** ABC News, "Landmark Meta trial puts social media's impact on kids in focus", with technology reporter Mike Dobuski and legal contributor James Sample
- **URL:** https://www.youtube.com/watch?v=WECl9hgQvaI (4:41)
- **Published:** 2026-08-18. **Transcript:** YouTube auto-captions, fetched 2026-08-18.
- **Basis tier: `CAPTION-ASR`.** The transcript garbles the technology reporter's surname, the Instagram head's surname, and stutters one dollar figure.
- **Transcript gate:** 876 words, punctuation ratio **0.0502**, above 0.015, so no cleanup pass. Length band 600 to 2,500.

## Step 1: Structure

1. Anchor framing
2. How the case arose, with the technology reporter
3. The effect of the surrounding losses, with the legal contributor
4. **The remedy, and the comparison to stalled legislation**
5. Witnesses and legal cost

## Steps 2 and 3: Atomic claims, tagged

Pass 1, obvious.

| ID | Claim | Basis | Stance | Action | Locator |
|----|-------|-------|--------|--------|---------|
| E1 | Four states are suing in federal court, alleging Meta knowingly contributed to the youth mental health crisis by deliberately designing addictive features | RECORD | assert | PUBLISHABLE | S1 |
| E2 | Meta denies the claims and says trial evidence will show its commitment to supporting young people | PARTY | deny | ATTRIBUTE-ONLY | S1 |
| E3 | The features at issue include endless scrolling and push notifications | RECORD | assert | PUBLISHABLE | S2 |
| E4 | Some studies associate push notifications with a dopamine release and with sleep disruption | REPORTER | assert | NEEDS-PRIMARY | S2 |
| E5 | The theory is that these features cumulatively at scale caused negative mental health impact, and that this is illegal | RECORD | assert | PUBLISHABLE | S2 |
| E6 | **The lawsuit was filed in 2023 by more than 30 state attorneys general** | REPORTER | assert | NEEDS-PRIMARY | S2 |
| E7 | The case represents an existential threat given the volume of other challenges | REPORTER | assert | ATTRIBUTE-ONLY | S2 |
| E8 | The scale of the cases means Meta's entire market capitalisation is effectively at stake | EXPERT | assert | ATTRIBUTE-ONLY | S3 |
| E9 | After multiple losses it becomes harder to argue on appeal that a judge or jury erred | EXPERT | assert | ATTRIBUTE-ONLY | S3 |
| E10 | New Mexico involved a very similar but not identical fact pattern | EXPERT | qualify | PUBLISHABLE | S3 |
| E11 | **In this case, as in New Mexico, the judge controls the remedy** | EXPERT | assert | PUBLISHABLE | S4 |
| E12 | The plaintiffs seek remedies addressing the practices themselves, not only money damages | EXPERT | assert | PUBLISHABLE | S4 |
| E13 | **The plaintiffs are seeking in essence to put courts and states in the role of oversight and regulation** | EXPERT | assert | ATTRIBUTE-ONLY | S4 |
| E14 | **Legislation along the same lines has been stalled in Congress for years, and these cases could deliver that remedy in a matter of weeks** | EXPERT | assert | ATTRIBUTE-ONLY | S4 |
| E15 | Zuckerberg could appear, as could the head of Instagram | REPORTER | assert | NEEDS-PRIMARY | S5 |
| E16 | The trial is expected to last six or seven weeks | REPORTER | assert | NEEDS-PRIMARY | S5 |
| E17 | **Meta disclosed spending $2.4 billion on legal expenses in the second quarter of 2026** | PARTY | assert | NEEDS-PRIMARY | S5 |
| E18 | Legal cost alone is mounting, separate from fines and platform changes | REPORTER | assert | PUBLISHABLE | S5 |

Pass 2, implicit.

| ID | Implicit assumption | Basis | Action |
|----|--------------------|-------|--------|
| E19 | E11 plus E12 means the remedy is set by a single judge with no jury constraint, which is the practical consequence of the advisory-jury structure that this item never names | EXPERT | PUBLISHABLE |
| E20 | E13 and E14 together frame the litigation as a *substitute for rulemaking*, achieved faster than legislation. Stated approvingly, it is also the strongest available statement of the objection: that a court is being asked to do what a legislature would not. | EXPERT | ATTRIBUTE-ONLY |
| E21 | E6 assumes a larger original coalition than the 29 reported at trial, consistent with two other items in this corpus | REPORTER | NEEDS-PRIMARY |
| E22 | E4 is the only attempt in the broadcast set to ground the harm mechanism in research, and it is hedged to "some studies" with none named | REPORTER | NEEDS-PRIMARY |

Pass 3, negative.

| ID | Denial | Whose | Action |
|----|--------|-------|--------|
| E23 | Meta vehemently denies the claims | Meta | ATTRIBUTE-ONLY |
| E24 | The legal contributor denies that the exposure is merely a dent in profits, calling it existential | EXPERT | ATTRIBUTE-ONLY |
| E25 | Implicitly denies that money is the principal stake, by placing remedy above damages | EXPERT | ATTRIBUTE-ONLY |

## Step 4: Clusters

- **C-A The design theory** (E1, E3, E4, E5, E22).
- **C-B Coalition size** (E6, E21).
- **C-C Cumulative-loss effect on appeal** (E8, E9, E10, E24).
- **C-D Remedy as regulation** (E11, E12, E13, E14, E19, E20, E25).
- **C-E Cost** (E17, E18).

## Step 5: Tensions (internal)

1. **E6 against the trial roster.** More than 30 filed in 2023; 29 have claims pending; one state is separately reported to have withdrawn. Three numbers, one coalition, and the drift is downward.
2. **E14 is presented as a benefit and reads equally as an indictment.** If a court can deliver in weeks what Congress would not pass in years, that is either an argument for the courts or an argument that the wrong branch is deciding. The segment takes the first reading without acknowledging the second.
3. **E17 against the print report of the same disclosure.** One says more than $2 billion, this says $2.4 billion, and the caption stutters the figure. The underlying disclosure is a filed document and settles it.
4. **No mention of the advisory jury**, while E11 asserts judicial control of the remedy, which is the same fact arrived at without the mechanism.

## Step 6: Synthesis

**S1. The clearest statement in the corpus of what the litigation is actually for.**
The plaintiffs seek to put courts and states in an oversight and regulatory role, and could obtain in
weeks what has been stalled in Congress for years. *Basis: EXPERT.* This is the litigation-as-
rulemaking claim stated plainly by a legal contributor who supports it, and it is simultaneously the
best summary of the case against that route.

**S2. The remedy is set by the judge.**
*Basis: EXPERT.* Reached here without naming the advisory jury, which makes it useful corroboration
of the structural point from an independent direction.

**S3. The coalition is reported at more than 30 at filing and 29 at trial.**
*Basis: REPORTER. Action: NEEDS-PRIMARY.* Third item in this corpus pointing the same way.

**S4. Litigation cost is a specific disclosed figure, not an estimate.**
$2.4 billion in one quarter. *Basis: PARTY, via a filed disclosure. Action: NEEDS-PRIMARY,* and the
disclosure is a public document, so this is cheap to settle.

## Step 7: Traceability and orphans

Orphans: the anchor's framing and sign-off; the dopamine mechanism (E4), retained rather than
dropped because it is the only research-grounded harm claim in the broadcast set and its vagueness
is itself the finding.

**Unsynthesised claims (declared):** E2, E7, E15, E16, E23. 5 of 25 (20.0%). Predominantly baseline posture claims and party denials: recorded in the inventory for completeness, deliberately not carried into an output. This list is machine-computed and enforced by `npm run check:distillations`.

## Step 8: Quality

Solid mainstream segment whose value is concentrated in one exchange about remedy. The legal
contributor articulates the regulatory-substitution argument better than any print source here.
Weakest on sourcing: an unnamed body of studies, and a coalition number that conflicts with the
rest of the corpus. Transcript is machine output and unquotable.

## Step 9: Validation

- **Source:** 876 words. **Synthesis (Step 6):** 166 words (measured), a **5.3:1 word compression**, inside the band.
- **Claim compression:** 25 atomic claims to 4 outputs.
- **Traceability:** complete, two orphans named.
- **Regeneration test:** passes on the regulatory-substitution argument, judicial control of remedy, the coalition drift and the cost figure.
- **Not verified.** Machine transcript, no cache.
