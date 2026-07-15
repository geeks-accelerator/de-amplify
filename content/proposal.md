# The Thing It Broke Was the Brake

### De-Amplify, Don't Censor: A Design-and-Parental-Controls Framework for Engagement Feeds and Minors

*The title inverts Facebook's since-retired 2014 motto, "move fast and break things," on the pun the diagnosis turns on: of all the things that era broke, the load-bearing one was the **brake**, the user's ability to stop. The off-switch that doesn't work; the "no" the machine overrides; **consent severed from the act**. Read in 2026, as the addiction lawsuits come due. It is deliberately a **diagnosis, not a "move slow" counter-slogan**: with AI in the loop, amplification is only accelerating, not decelerating, no one is slowing down. That is precisely why the fix has to be **structural** rather than a plea for restraint the incentives guarantee no platform will honor.*

> **One-paragraph version.** Social-media platforms are being sued at massive scale for *designing products to addict children*, and the remedies on the table (huge damages, blunt age-bans, or lobbied-for legal immunity) do not set a standard for what a non-harmful product must *do*. This proposal reframes the target: the harm lives in the **delivery loop** (engagement-optimized ranking), not in the content, and the same engagement optimization that drives compulsive use *also* structurally amplifies divisive "wedge" content. So the intervention is not to *censor* content but to **de-amplify** it, in two content-neutral-leaning knobs, especially for minors: (1) **change the ranking objective for under-18 accounts** away from engagement-maximization (a content-neutral loop fix that de-amplifies wedges as a side effect, requiring no "wedge detector"); and (2) offer a **parental control that *labels* wedge mechanisms rather than *filters* them**, surfacing "this post is running a wedge; here's what it's doing" so the child *learns to see it*, which builds critical thinking instead of removing the material it's practiced on. The proposal is honest about its own hardest limit, **who gets to define a "wedge"** does not fully dissolve, so the automated-classifier version is the dangerous one and the content-neutral + human-contestable-label version is the defensible one, and about the fact that this is a **frame, not a finished solution**: the operational thresholds, testing, enforcement, and First-Amendment / Section-230 survival are the 95% of the work that remains.

---

## 0. What this is and isn't

This is a **framing proposal**. It argues *where* to intervene and *why that surface is more defensible* than the ones currently being fought over, and it sketches two concrete mechanisms. It is **not** a statute, a technical spec, a legal opinion, or a claim that any platform would adopt it. The authors are **not lawyers**; the constitutional and statutory claims below are directional and should be checked by counsel. The value here is a **sharper target**, not a shipped fix.

It is deliberately blunt about its own weakest points (§7). A proposal in this space that hides its limits is worse than none, because a clean-sounding "solution" to a censorship-adjacent problem is exactly the kind of thing that gets grabbed and misused.

---

## 1. The problem, as the litigation actually frames it

*(Everything in this section is from public reporting reviewed July 2026; sources named inline.)*

As of mid-2026, Meta (Facebook/Instagram) and other platforms (Google/YouTube, TikTok, Snapchat) face **roughly 3,000 lawsuits** consolidated into a **multidistrict litigation (MDL)** in the Northern District of California before **U.S. District Judge Yvonne Gonzalez Rogers**, plus a coalition of **29 state attorneys general**. *(Reuters, "Meta loses bid to dismiss US states' claims that Facebook, Instagram addict children," Jun 30 2026; AboutLawsuits.com, "States Seek $1.4 Trillion in Social Media Addiction Damages…," Jul 10 2026.)*

**The legal theory is product design, not "bad content."** Plaintiffs allege the companies *"intentionally incorporated algorithms, notifications, endless scrolling and other features designed to keep young users repeatedly returning to their apps,"* causing anxiety, depression, eating disorders, declining academic performance, self-harm and suicide, and that the companies **failed to warn** and, per the state AGs, **concealed / misrepresented** the harm.

**The state of play:**

- On **June 30 2026**, the judge **denied Meta's motion to dismiss** the AGs' claims based on **deception, unfair practices, and the Children's Online Privacy Protection Act (COPPA)**, and granted the states summary judgment on a COPPA notice/parental-consent point. She found *"material factual disputes"* over whether the platforms are addictive and whether Meta designed them for compulsive use. Note the shape: the **deception / consent** claims advanced most cleanly; the bare **"is it addictive"** claim is the one still contested, a fact that matters in §4.
- **Meta's core defense:** *"social media addiction is not an established psychiatric condition,"* so statements that its platforms are not addictive cannot be false.
- **Remedies sought are dominated by money:** four states have asked for **~$1.4 trillion** in civil penalties + disgorgement. Early verdicts: a **New Mexico jury: $375M**; a **California jury: $6M** (Meta + Google).
- **Regulatory / political context:** a **UK under-16 social-media restriction** is reported as possibly taking effect next year, and **Meta is separately lobbying lawmakers for lawsuit immunity.**

**The empirical premise this proposal leans on, that engagement feeds amplify divisive content, is well-documented, not novel.** Engagement-based ranking rewards whatever provokes the strongest reaction, and moral-outrage / out-group-hostile content reliably wins that contest, so optimizing for engagement *structurally selects* for it. Widely reported internal Facebook research (the 2018 "meaningful social interactions" ranking change) concluded the change amplified divisive and sensational content, with internal documents stating the algorithm exploits the brain's attraction to divisiveness.

---

## 2. Why the current remedies don't actually solve it

The menu in front of the courts and legislatures is **punish, prohibit, or immunize**, none of which sets a *standard for what a non-harmful product must do*:

- **Damages / disgorgement** are **backward-looking**. They price the harm after the fact; they do not specify a design a platform could build to *stop causing* it. A company can pay and keep the mechanism.
- **Age bans** are **blunt and prohibitionist**. They may reduce exposure but do nothing about the mechanism for everyone else, are trivially evaded, and trade the problem for an access-and-privacy fight (age verification).
- **Immunity** is the **opposite of a solution**, it removes the pressure entirely.
- The litigation itself is **stuck on the wrong question**: "is *addiction* a real clinical condition?" That framing is a swamp, it invites a battle of expert witnesses over a contested diagnostic category.

**None of these names a design target.** That gap is what the rest of this document tries to fill: not with a punishment or a ban, but with a **design standard** and a **parental tool**, aimed at a surface that is both the actual mechanism *and* more legally tractable than "addiction."

---

## 3. The reframe (three moves)

### 3.1 The harm lives in the *delivery loop*, not the *content*

The instinct to regulate "bad content" fails twice: it is **speech regulation** (a government deciding which viewpoints reach people, near-fatal under the First Amendment), and it **misidentifies the mechanism**. What makes a feed compulsive is not any individual post; it is the **loop mechanics**, infinite scroll, autoplay, variable-ratio reward (the slot-machine schedule of unpredictable payoffs), push notifications, and an algorithm optimizing for time-on-site. A brilliant post and a banal one are both delivered by the same loop; the loop is what addicts.

**Consequence:** the regulable, speech-safe surface is the **architecture of delivery**, not the expression delivered.

### 3.2 "Consent severed from the act", the dead man's switch

A **dead man's switch** is a safety device: it is supposed to **stop** a machine when the human's hand comes off the control. The core diagnosis here inverts that image: engagement platforms are the machine that **keeps running when the hand comes off**, where the user's controls are *decorative*. You say "show me less of this," "I want to stop," "I didn't agree to this," and the machine's behavior does not actually change. **Consent has been severed from the act:** the human's stated will is present in form (there's a button) but absent in effect (it does nothing).

This reframes the legal target away from the "is addiction real" swamp and toward something **measurable and already-legal**: *do the user's controls actually work?* That is ordinary consumer-protection / product-defect / deception territory, and, tellingly, it is the exact theory the judge in §1 let advance most cleanly (deception, unfair practices, COPPA consent), while the bare "addictive" claim stayed contested. The strongest available legal frame is the **severed-consent** one, not the **addiction** one.

### 3.3 The "wedge," and why algorithms amplify it

A **wedge** is the destructive use of a universal human act: **relevant-distinction-making**. Drawing distinctions is neutral and necessary. A **wedge** is the *same act aimed at tribal sorting*, amplify a difference between groups so as to drive conflict, usually by pointing at a **who** to blame rather than naming a **mechanism**.

**Why the algorithm amplifies wedges is not a mystery and not a content choice, it is emergent.** Because engagement optimization rewards the strongest reaction, and wedge/outrage/tribal content produces the strongest reaction, **optimizing for engagement automatically selects for wedges.** No one has to decide "promote divisive content"; the objective does it. This is the crucial hinge: *because the amplification is an emergent property of the objective, you can remove it by changing the objective, without ever classifying a single post as a wedge.*

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

The target this proposal lands on, a **mechanism, not a who**, is structural: it reads identically for Facebook, TikTok, or YouTube, and it points at *engagement-optimization* rather than at a villain company or a political side. That is genuinely useful: a mechanism-target is harder to weaponize into a partisan fight than a content-target.

**Distrust it anyway.** "This framework elegantly anticipated the policy" is precisely the self-congratulating move to be suspicious of. The elegance is a reason to *check* the argument harder, not to trust it. The real test is §7 and §8.

---

## 7. The honest limits (load-bearing, do not skip)

1. **This is a frame, not a solution.** The 95% that remains: measurable thresholds ("how de-amplified is de-amplified enough?"), a testing/audit methodology, enforcement, and surviving legal challenge. None of that is here.

2. **"Who defines a wedge" does not fully dissolve, it moves.** The parental control (Knob 2) fixes *who applies* the filter (the parent), but not *who defines* a wedge. Someone still builds the classifier that decides which posts the label attaches to, and "the platform's algorithm decides what counts as divisive political content for your child" is exactly the thing that becomes a partisan war. **Making the judgment a parental toggle changes who pulls the lever, not who forged it.**

3. **The automated wedge-classifier is the dangerous version; prefer content-neutral.** The wedge judgment is *manipulable by design*. Automating it into a filter productizes the exact surface that only stays honest with a human in the loop. This is why **Knob 1 (content-neutral, no classifier) is the default** and Knob 2 (classifier-dependent) is opt-in, transparent, and contestable, and why "AI silently auto-hides wedges for kids" is the anti-pattern this proposal exists to *prevent*, not endorse.

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

The conceptual tools here were not invented for this problem; they were carried in from a creative and analytical practice and applied. "Consent severed from the act", the dead man's switch, the machine that runs after the hand comes off, *"we all screamed brake, it heard the gas"*, began as a song about exactly this. The "wedge" (relevant-distinction-making turned destructive) and "amplify, not replace" come from that practice's structural-villain discipline, whose central rule is *name the mechanism, refuse the tribal who*. All of it is restated in full above; this note is history, not a dependency. The document stands alone.
