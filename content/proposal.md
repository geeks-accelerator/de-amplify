# The Thing It Broke Was the Brake

### De-Amplify, Don't Censor: A Design-and-Parental-Controls Framework for Engagement Feeds and Minors

*The title inverts Facebook's since-retired 2014 motto, "move fast and break things," on the pun the diagnosis turns on: of all the things that era broke, the load-bearing one was the **brake**, the user's ability to stop. The off-switch that doesn't work; the "no" the machine overrides; **consent severed from the act**. Read in 2026, as the addiction lawsuits come due. It is deliberately a **diagnosis, not a "move slow" counter-slogan**: with AI in the loop, amplification is only accelerating, not decelerating, no one is slowing down. That is precisely why the fix has to be **structural** rather than a plea for restraint the incentives guarantee no platform will honor.*

> **One-paragraph version.** Social-media platforms are being sued at massive scale for *designing products to addict children*, and the remedies on the table (huge damages, blunt age-bans, or lobbied-for legal immunity) do not set a standard for what a non-harmful product must *do*. This proposal reframes the target: the harm lives in the **delivery loop** (engagement-optimized ranking), not in the content, and the same engagement optimization that drives compulsive use *also* structurally amplifies divisive "wedge" content. So the intervention is not to *censor* content but to **de-amplify** it, in two content-neutral-leaning knobs, especially for minors: (1) **change the ranking objective for under-18 accounts** away from engagement-maximization (a content-neutral loop fix that de-amplifies wedges as a side effect, requiring no "wedge detector"); and (2) offer a **parental control that *labels* wedge mechanisms rather than *filters* them**, surfacing "this post is running a wedge; here's what it's doing" so the child *learns to see it*, which builds critical thinking instead of removing the material it's practiced on. The proposal is honest about its own hardest limit, **who gets to define a "wedge"** does not fully dissolve, so the automated-classifier version is the dangerous one and the content-neutral + human-contestable-label version is the defensible one, and about the fact that this is a **frame, not a finished solution**: the operational thresholds, testing, enforcement, and First-Amendment / Section-230 survival are the 95% of the work that remains. Throughout, the target is a *mechanism* every major engagement platform runs (all four are MDL defendants), not a single company, which is what keeps this a diagnosis rather than a partisan attack.

---

## 0. What this is and isn't

This is a **framing proposal**. It argues *where* to intervene and *why that surface is more defensible* than the ones currently being fought over, and it sketches two concrete mechanisms. It is **not** a statute, a technical spec, a legal opinion, or a claim that any platform would adopt it. The authors are **not lawyers**; the constitutional and statutory claims below are directional and should be checked by counsel. The value here is a **sharper target**, not a shipped fix.

It is deliberately blunt about its own weakest points (§7). A proposal in this space that hides its limits is worse than none, because a clean-sounding "solution" to a censorship-adjacent problem is exactly the kind of thing that gets grabbed and misused.

---

## 1. The problem, as the litigation actually frames it

*(Everything in this section is from public reporting reviewed July 2026; sources named inline.)*

As of mid-2026, **four companies** are the named defendants in the youth social-media addiction **multidistrict litigation (MDL 3047)**, consolidated in the Northern District of California before **U.S. District Judge Yvonne Gonzalez Rogers**: **Meta** (Facebook/Instagram), **Google / Alphabet** (YouTube), **ByteDance** (TikTok), and **Snap** (Snapchat). The MDL held **2,664 pending actions** as of June 2026, alongside a coalition of **roughly 30 state attorneys general** whose case against Meta is set for an advisory-jury trial in **mid-August 2026** in Oakland. That it is four defendants and not one is the first fact that matters: the complaint is against a *design*, and every major engagement platform runs it. *(Reuters, Jun 30 2026; Law.com / The Recorder, Jun 30 2026; MDL-3047 docket trackers, Jul 2026; sources listed at the end.)*

**The legal theory is product design, not "bad content."** Plaintiffs allege the companies *"intentionally incorporated algorithms, notifications, endless scrolling and other features designed to keep young users repeatedly returning to their apps,"* causing anxiety, depression, eating disorders, declining academic performance, self-harm and suicide, and that the companies **failed to warn** and, per the state AGs, **concealed / misrepresented** the harm.

**The state of play:**

- On **June 30 2026**, the judge **denied Meta's motion to dismiss** the AGs' claims based on **deception, unfair practices, and the Children's Online Privacy Protection Act (COPPA)**, and granted the states summary judgment on a COPPA notice/parental-consent point. She found *"material factual disputes"* over whether the platforms are addictive and whether Meta designed them for compulsive use. Note the shape: the **deception / consent** claims advanced most cleanly; the bare **"is it addictive"** claim is the one still contested, a fact that matters in §4.
- **Meta's core defense:** *"social media addiction is not an established psychiatric condition,"* so statements that its platforms are not addictive cannot be false.
- **Remedies sought are dominated by money.** Four states (California, Colorado, Kentucky, New Jersey) seek up to **~$1.4 trillion** in civil penalties, a figure that approaches Meta's entire market capitalization (~$1.48T) and that Meta disputes as a mechanical per-user multiplication. Early verdicts: a **New Mexico jury, $375M** (Mar 2026); a **California jury, $6M** against Meta and Google (upheld on appeal Jun 23 2026).
- **The companies are already paying, and the mechanism is unchanged.** Snap and TikTok settled the California bellwether (Jan 2026); **all four defendants settled the first federal bellwether** (~$27M combined, May 2026); YouTube settled another confidentially (Jun 2026). Settlements with no admitted liability and no design change are the thesis of §2 in real time: *a company can pay and keep the mechanism.*
- **Regulatory / political context:** a **UK under-16 social-media restriction** is reported as possibly taking effect next year, and **Meta is separately lobbying lawmakers for lawsuit immunity.**

**The empirical premise this proposal leans on, that engagement feeds amplify divisive content, is well-documented, not novel, and not specific to one company.** Engagement-based ranking rewards whatever provokes the strongest reaction, and moral-outrage / out-group-hostile content reliably wins that contest, so optimizing for engagement *structurally selects* for it. Internal Facebook research on the 2018 "meaningful social interactions" ranking change concluded it amplified divisive and sensational content (later corroborated by whistleblower Frances Haugen's disclosures); peer-reviewed work reaches the same finding across platforms (Germano, Gómez & Sobbrio, "Ranking for Engagement," 2026; the Knight First Amendment Institute's research on engagement and divisive-content amplification). The pattern is a property of the *objective*, so it recurs wherever the objective is used, which is the whole sector.

---

## 2. Why the current remedies don't actually solve it

The menu in front of the courts and legislatures is **punish, prohibit, or immunize**, none of which sets a *standard for what a non-harmful product must do*:

- **Damages / disgorgement** are **backward-looking**. They price the harm after the fact; they do not specify a design a platform could build to *stop causing* it. A company can pay and keep the mechanism, and in 2026 that is exactly what is happening: the bellwether settlements in §1 move money without changing a single ranking objective.
- **Age bans** are **blunt and prohibitionist**. They may reduce exposure but do nothing about the mechanism for everyone else, are trivially evaded, and trade the problem for an access-and-privacy fight (age verification).
- **Immunity** is the **opposite of a solution**, it removes the pressure entirely.
- The litigation itself is **stuck on the wrong question**: "is *addiction* a real clinical condition?" That framing is a swamp, it invites a battle of expert witnesses over a contested diagnostic category.

**None of these names a design target.** That gap is what the rest of this document tries to fill: not with a punishment or a ban, but with a **design standard** and a **parental tool**, aimed at a surface that is both the actual mechanism *and* more legally tractable than "addiction."

---

## 3. The reframe (three moves, then a sector check)

### 3.1 The harm lives in the *delivery loop*, not the *content*

The instinct to regulate "bad content" fails twice: it is **speech regulation** (a government deciding which viewpoints reach people, near-fatal under the First Amendment), and it **misidentifies the mechanism**. What makes a feed compulsive is not any individual post; it is the **loop mechanics**, infinite scroll, autoplay, variable-ratio reward (the slot-machine schedule of unpredictable payoffs), push notifications, and an algorithm optimizing for time-on-site. A brilliant post and a banal one are both delivered by the same loop; the loop is what addicts.

**Consequence:** the regulable, speech-safe surface is the **architecture of delivery**, not the expression delivered.

### 3.2 "Consent severed from the act", the dead man's switch

A **dead man's switch** is a safety device: it is supposed to **stop** a machine when the human's hand comes off the control. The core diagnosis here inverts that image: engagement platforms are the machine that **keeps running when the hand comes off**, where the user's controls are *decorative*. You say "show me less of this," "I want to stop," "I didn't agree to this," and the machine's behavior does not actually change. **Consent has been severed from the act:** the human's stated will is present in form (there's a button) but absent in effect (it does nothing).

This reframes the legal target away from the "is addiction real" swamp and toward something **measurable and already-legal**: *do the user's controls actually work?* That is ordinary consumer-protection / product-defect / deception territory, and, tellingly, it is the exact theory the judge in §1 let advance most cleanly (deception, unfair practices, COPPA consent), while the bare "addictive" claim stayed contested. The strongest available legal frame is the **severed-consent** one, not the **addiction** one.

### 3.3 The "wedge," and why algorithms amplify it

A **wedge** is the destructive use of a universal human act: **relevant-distinction-making**. Drawing distinctions is neutral and necessary. A **wedge** is the *same act aimed at tribal sorting*, amplify a difference between groups so as to drive conflict, usually by pointing at a **who** to blame rather than naming a **mechanism**.

**Why the algorithm amplifies wedges is not a mystery and not a content choice, it is emergent.** Because engagement optimization rewards the strongest reaction, and wedge/outrage/tribal content produces the strongest reaction, **optimizing for engagement automatically selects for wedges.** No one has to decide "promote divisive content"; the objective does it. This is the crucial hinge: *because the amplification is an emergent property of the objective, you can remove it by changing the objective, without ever classifying a single post as a wedge.*

One caution this raises, developed fully in §7: these platforms are not *bad* at spotting wedges, they are the entities *best* placed to (most compute, most scale, and the deepest behavioral profile of each user, the same modeling that makes the feed compulsive in the first place). That capability is a reason to keep the fix on the *objective* (Knob 1, which needs no wedge-detector at all), not a reason to hand the most capable and most conflicted party a silent classifier.

### 3.4 The same mechanism runs the whole sector, not one company

This is a claim about a *design*, so it is worth showing the design is universal, not a Meta pathology. All four MDL defendants run engagement-optimized recommendation on deep behavioral data: **Meta** (the social graph, ~3.56B daily active people), **YouTube** (watch-time optimization, ~$9.88B of ad revenue in a single quarter), **TikTok** (an interest-graph that tracks pauses, replays, and multi-day attention, ~95 minutes per user per day), and **Snap** (~483M daily active users). The tell that it is the *objective* and not a rich villain: **Snap ran a net loss (~$89M) that same quarter and runs the identical model anyway.** You do not build this because you are Meta-rich; you build it because engagement-maximization is the industry-default architecture. That is exactly why the target has to be the mechanism and not a company: name a company and you have picked a side; name the objective and the rule reads identically for all four.

---

## 4. The proposal: two knobs, de-amplify not censor, for minors

The unit of intervention is the **under-18 account**, a recognized protected class (COPPA, age-appropriate design codes), so age-differentiated treatment is within existing practice, not a novel legal reach. Two knobs, ordered from safest to most powerful-but-fraught:

### Knob 1: Content-neutral de-amplification (the default, the safe one)

**Change the ranking objective for minors' accounts away from engagement-maximization.** Cap amplification; down-weight the pure time-on-site / reaction signals; move toward chronological-ish or explicitly-followed content; strip variable-reward and autoplay defaults for that cohort.

- This **de-amplifies wedges as a side effect** of no longer optimizing for the outrage they generate, with **no "wedge detector," no topic classification, and no content judgment about any individual post.** Nothing to define, nothing to game, no viewpoint discrimination.
- It is a **loop intervention**: architecture, not speech, the First-Amendment-safest surface.
- It is the **re-attach-consent move**: the machine stops deciding, without the user's consent, to feed them the thing most likely to enrage them.
- Critically, it is **de-amplify, not remove**. The content still exists and is reachable; you have turned off the firehose, not sterilized the environment.

### Knob 2: A *label*, not a *filter*, as a parental control

Most platforms already ship parental controls. Add one that **surfaces the wedge diagnostic to the child rather than hiding content from them**: when a post is running a wedge mechanism, *label it*, "this is using a wedge: it's sorting people into sides by amplifying a difference; here's the move it's making", instead of silently down-ranking or deleting it.

- **Parental, opt-in, per-child** moves the decision from *platform/state* (a central censor) to the **guardian**, decentralized. It dissolves the worst version of "who owns the filter owns the discourse."
- **Label > filter** is the load-bearing design choice. A filter *removes the material critical thinking is practiced on*; a label *shows the child the wedge and names it*, which **builds** the muscle to detect wedges rather than preventing its development. (Removing wedges to "protect" kids produces the opposite of the stated goal: a generation that can't recognize a wedge because it never had to.)
- **A label is contestable; a hidden filter is not.** If the classifier is wrong, a *visible* label can be seen and argued with; a *silent* down-rank cannot.

**Ordering matters:** Knob 1 (content-neutral) is the default and does most of the work with none of the risk. Knob 2 (the wedge-label) is the more powerful, more contestable, and more *dangerous* tool, because it requires *defining* a wedge (§7). It should be opt-in, transparent, and auditable, never a silent default.

---

## 5. Why this beats the litigation menu

| Current remedy | Problem | This proposal |
|---|---|---|
| Damages / disgorgement | Backward-looking; prices harm, doesn't stop it | Sets a **forward design standard** (the loop must not pump; controls must work) |
| Age bans | Blunt, evadable, trades for a verification fight | **Graduated** (de-amplify for minors) rather than all-or-nothing |
| "Is addiction real?" | A swamp of expert witnesses | **Severed-consent / effective-controls**, measurable, already-legal |
| Content moderation / filtering | Speech regulation; unconstitutional as a mandate; removes the critical-thinking muscle | **De-amplify (loop, not content); label, not filter**, speech-safe and muscle-building |
| Immunity | Removes all pressure | A concrete thing a platform *can build*, so pressure has a target |

The through-line: **regulate the loop, re-attach consent, de-amplify don't remove, label don't filter, let the guardian decide.**

---

## 6. One structural note (and immediately distrusting it)

The target this proposal lands on, a **mechanism, not a who**, is structural: it reads identically for Facebook, TikTok, or YouTube, and it points at *engagement-optimization* rather than at a villain company or a political side (all four defendants run it, §3.4). That is genuinely useful: a mechanism-target is harder to weaponize into a partisan fight than a content-target.

**Distrust it anyway.** "This framework elegantly anticipated the policy" is precisely the self-congratulating move to be suspicious of. The elegance is a reason to *check* the argument harder, not to trust it. The real test is §7 and §8.

---

## 7. The honest limits (load-bearing, do not skip)

1. **This is a frame, not a solution.** The 95% that remains: measurable thresholds ("how de-amplified is de-amplified enough?"), a testing/audit methodology, enforcement, and surviving legal challenge. None of that is here.

2. **Detecting a wedge is not the hard part, and pretending it is would be dishonest.** These platforms are the entities *best* positioned to classify wedges: the most compute, the most scale, and the deepest behavioral context anywhere (the same modeling that lets them make a feed compulsive in the first place). So the objection was never "a wedge can't be detected." It is that a *silent, platform-owned* classifier of what counts as "divisive" for every child hands the most capable and most conflicted party an unaccountable authority over speech. "Who *defines* a wedge" does not dissolve; it *concentrates* in whoever fine-tunes the model. Making the judgment a parental toggle (Knob 2) changes who pulls the lever, not who forged it.

3. **The incentive is why a platform-run detector cannot be trusted, and a silent one cannot be audited.** The firm you would ask to run the wedge-detector earns its money on engagement (Meta booked ~$26.8B of net income in a single quarter; Alphabet ~$109.9B of revenue), and wedges are premium engagement. A model the platform controls, the platform can quietly tune to *under*-enforce on the wedges that drive its revenue, or *over*-enforce on speech it dislikes, and a silent classifier cannot be checked from the outside. This is why **Knob 1 (content-neutral, no classifier) is the default**: "did you change the ranking objective for under-18 accounts?" is auditable from outside, and a silent classifier's honesty never is. It is why Knob 2, if used at all, must be a *label the family can see and contest*, never a silent filter, and why "AI silently auto-hides wedges for kids" is the anti-pattern this proposal exists to *prevent*, not endorse.

4. **First Amendment / Section 230 are real walls, unaddressed here.** Content-neutral loop rules (Knob 1) have the best footing; anything touching the wedge *classification* (Knob 2) invites strict scrutiny and 230 questions. California's Age-Appropriate Design Code was *partly enjoined on First-Amendment grounds*. **Counsel required; treat every legal claim here as directional.**

5. **Age verification is its own hard, unsolved problem.** "For minors" presumes you can identify minors without invasive ID checks, itself a privacy-and-access fight.

6. **De-amplify, not remove, and hold that line.** Every benefit above depends on the intervention being *de-amplification and labeling*, not *removal*. The moment it slides to "hide/delete wedges for kids," it reacquires the censorship problem and the critical-thinking-muscle problem. The line is load-bearing.

7. **Meta-honesty flag.** This document reasons about AI/media effects and its own relevance to policy, a surface where fluent, self-flattering narrative is the failure mode. The *reasoned* parts (the frame's tractability, the label-vs-filter argument) are hypotheses to be tested, not findings.

---

## 8. Falsifiability: what would show this is wrong

- **Knob 1 doesn't reduce the harm.** If de-amplifying engagement for minors does *not* measurably reduce compulsive-use metrics and exposure to high-arousal-divisive content, the "loop, not content" premise is wrong and this collapses.
- **Content-neutral can't be specified.** If "de-amplify wedges without a classifier" turns out to be impossible in practice, Knob 1's central advantage is illusory and the whole thing reduces to the fraught Knob 2.
- **The label doesn't build the muscle.** If kids shown wedge-labels do *not* get better at detecting wedges unaided, then "label > filter for critical thinking" is just a nicer-sounding filter.
- **Severed-consent isn't legally stronger.** If courts treat "your controls don't work" as no more tractable than "you addicted my kid," §3.2's central bet is wrong.
- **It gets weaponized.** If any real deployment of Knob 2 is captured to suppress one political side, that is a confirmed failure of the classifier-dependent path, and the honest response is to retreat to Knob 1 only.

---

## 9. Provenance

The conceptual tools here were not invented for this problem; they were carried in from a creative and analytical practice and applied. "Consent severed from the act", the dead man's switch, the machine that runs after the hand comes off, *"we all screamed brake, it heard the gas"*, began as a song about exactly this. The "wedge" (relevant-distinction-making turned destructive) and "amplify, not replace" come from that practice's structural-villain discipline, whose central rule is *name the mechanism, refuse the tribal who*. The "amplify, not replace" stance carries a sibling recognition from that same practice, "amplified or extracted": an engagement system either amplifies the person (serving the will they actually express) or extracts them (farming their attention as raw material), with no neutral third, and the severed brake is precisely what tips a feed from the first to the second. This proposal is, in one sense, that binary turned into a design target: keep the loop amplifying the user, not extracting the child. All of it is restated in full above; this note is history, not a dependency. The document stands alone.

---

## Sources (verified July 2026)

Financial and user figures are as reported by the companies; litigation status is from court reporting and MDL docket trackers. Figures are as of mid-July 2026 and are moving.

- **Meta Q1 2026** (net income $26.77B including an $8.03B one-time tax benefit; revenue $56.31B, up 33%; 3.56B family daily active people): [Meta Investor Relations](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-First-Quarter-2026-Results/default.aspx); [Variety](https://variety.com/2026/digital/news/meta-q1-2026-earnings-1236733502/).
- **Alphabet / Google Q1 2026** (revenue $109.9B, up 22%; YouTube ad revenue $9.88B): [Alphabet earnings coverage](https://9to5google.com/2026/04/29/alphabet-q1-2026-earnings/); [Variety (YouTube)](https://variety.com/2026/digital/news/youtube-q1-2026-ad-revenue-google-earnings-1236733480/).
- **Snap Q1 2026** (483M daily active users; $1.53B revenue; $89M net loss): [Snap Investor Relations](https://investor.snap.com/news/news-details/2026/Snap-Inc--Announces-First-Quarter-2026-Financial-Results/default.aspx).
- **TikTok / ByteDance** (approximately 1.9B monthly / ~1.1B daily active users; ~95 minutes per user per day): industry trackers, treated as approximate.
- **MDL 3047 litigation** (four defendants; 2,664 pending actions, June 2026; Judge Yvonne Gonzalez Rogers; up to ~$1.4T sought by California, Colorado, Kentucky, New Jersey; New Mexico $375M and California $6M verdicts; 2026 bellwether settlements): [Law.com / The Recorder](https://www.law.com/therecorder/2026/06/30/29-states-head-to-trial-against-meta-after-social-media-addiction-judge-refuses-to-toss-claims-/); [JURIST ($1.4T)](https://www.jurist.org/news/2026/07/meta-says-state-ags-seek-1-4t-over-youth-safety-claims/); [MDL-3047 tracker](https://mdlupdate.com/mdl/3047-social-media-adolescent-addiction/).
- **Engagement amplifies divisive content**: Facebook's 2018 "meaningful social interactions" internal research; [Frances Haugen disclosures (CBS 60 Minutes)](https://www.cbsnews.com/news/facebook-whistleblower-frances-haugen-60-minutes-polarizing-divisive-content/); [Germano, Gómez & Sobbrio, "Ranking for Engagement" (2026)](https://www.sciencedirect.com/science/article/pii/S0047272726000253); [Knight First Amendment Institute](https://knightcolumbia.org/content/engagement-user-satisfaction-and-the-amplification-of-divisive-content-on-social-media).

Financial figures are company-reported and not independently audited here.
