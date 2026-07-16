<!--
Pitch deck: The Brake Integrity Standard, for policymakers and decision-makers.
Audience: legislators, regulators, attorneys general, and their staff.
Purpose: adopt control integrity as the regulable standard for engagement feeds, grounded in the
wedge mechanism (engagement optimizes for reaction, so it structurally amplifies division) and the
defensible fix (a user-held brake, including a brake over the recommendation signal, not a government label).
Format: gamma.app "Paste in Text" mode. Each `---` on its own line is a card break; `#` lines are card titles.
Date: 2026-07-16. Companion to the policy paper (docs/proposals/2026-07-15-brake-integrity-standard.md),
the experimental appendix (/notes, where the mandated wedge-label lives as research), and the litigation
explainer (/lawsuits). Facts as of 2026-07-16; litigation moves weekly.

TO USE: In gamma.app choose "Paste in Text," then paste from the "# de-amplify" line below to the end.
Do not paste this comment. No em dashes (de-amplify house style); every `---` is a slide separator.
-->

# de-amplify: The Brake Integrity Standard

Regulate the loop, not the speech.

The same machine that hooks a child is the one amplifying division. Here is the part of it you can actually regulate.

---

# The problem, in one sentence

> A dead man's switch stops a machine when the human's hand comes off. Engagement feeds do the inverse: the machine keeps running, or quietly restarts, after the hand comes off.

You choose "following only," close the app, reopen it, and you are back in the algorithmic feed. Your stated will was present in form, and absent in effect.

---

# The bigger machine underneath

An engagement feed optimizes for one thing: whatever holds attention. The content that most reliably holds attention is high-arousal and outrage-driven, so optimizing for engagement structurally selects for the inflammatory.

The fuel is the user's own reaction. The machine has no opinion; it has your flinch, and it amplifies whatever you react to hardest. This is well-documented: Facebook's own 2018 research, the Haugen disclosures, and peer-reviewed work since.

> The same loop that will not let a child stop is the loop that turns every issue into a wedge. This is not only a youth-safety problem. It is an information-environment problem.

---

# What is actually broken

Not any single post. The delivery loop:

- Infinite scroll
- Autoplay
- Variable-reward notifications
- Ranking that optimizes for time-on-site and for reaction

A calm post and an inflammatory one ride the same loop. The regulable, more speech-defensible surface is the architecture of delivery and the controls over it, not the expression delivered.

---

# The trap that has stalled every prior effort

Two swamps:

- "Is social-media addiction a real clinical condition?" leads to endless expert-witness battles over a contested diagnosis.
- "Which posts should come down?" is the content-moderation war, with the First Amendment on top of it.

The reframe moves to something measurable and already inside consumer-protection law:

> When a platform tells a user a control does something, does the control do it, and does it last?

---

# This is already in the courts

Whether the platform's own brakes work is now litigated evidence, not a metaphor.

| Case (as of July 16, 2026) | Where it stands |
|---|---|
| MDL 3047 (federal) | ~2,893 suits; a June 29 summary-judgment order sent the states' claims to an August trial against Meta |
| K.G.M. v. Meta and Google (California) | $6 million jury verdict for negligent design, on appeal |
| New Mexico v. Meta | $375 million verdict; a judge is weighing a roughly $953 million order that would change the product |

In the federal order, the court found Meta's own documents could support the theory that its time-limit tools were a "public relations stunt."

---

# Government has already named the design surface

- California SB 976: restricts addictive feeds for minors. The addictive-feed provision and default-private-mode are live, un-enjoined law after the Ninth Circuit (September 2025).
- New York SAFE for Kids Act: the same idea, awaiting rulemaking.
- EU Digital Services Act: mandates a non-profiled feed option, with preliminary findings against TikTok and Meta in 2026.

> What none of them define: whether a user's decision to stop or redirect the feed actually takes effect and persists. That is the gap.

---

# The standard: Brake Integrity

When a service offers a control to stop, limit, reset, or redirect a personalization or engagement function, the control must actually work.

Two layers:

- **Layer I, universal.** Every account, any age, gets controls that work: turn personalized recommendations off, select a following-only feed, turn autoplay off, quiet the engagement notifications.
- **Layer II, youth defaults.** For minors, the safer settings are ON by default, not merely available.

Making the base layer universal is deliberate: the existence of a working brake never depends on age verification.

---

# The compliance spec: a seven-part test

A control passes only if it is:

| Test | It must |
|---|---|
| Discoverable | be findable without external instructions |
| Clear | state what will change ("show me less" is not "turn off recommendations") |
| Immediate | change behavior soon after activation, not on some later refresh |
| Material | change the feed perceptibly, not cosmetically |
| Persistent | survive closing the app, another device, an update, and time |
| Scoped | cover the related surfaces (Reels, Shorts, Explore, notifications), not one screen |
| Non-circumventing | not nag, silently reset, or route the user back |

A cosmetic brake plus a press release fails persistence and non-circumvention by design. That is the point.

---

# The wedge, turned into a brake, not a label

The tempting fix for the division problem is to label the "divisive" content, to have the government or the platform flag it. Do not.

- The party best placed to build that classifier profits on engagement, and the most engaging content is the most inflammatory (on the order of $26.8 billion in net income in a single quarter, Q1 2026). It has every reason to bias the classifier, and a silent one cannot be checked from outside.
- A government-mandated label on lawful speech is the most legally exposed move there is: strict scrutiny.

The defensible fix keeps the judgment with the user and matches the diagnosis:

- **Transparency:** the feed must say why it served something ("you are seeing this because you engaged with similar posts").
- **A control over the signal:** the user can turn that recommendation signal off.

That is recommendation literacy, not censorship: a brake on the amplification, held by the user, not a labeler held by the state. (The EU's 2025 guidelines already recommend the "why you are seeing this" half; the contribution here is the off-switch, and making both testable.)

---

# Why this survives the First Amendment

The core regulates the platform's interaction with its own user, not anyone's speech. Legal exposure runs from most to least defensible:

| Tier | Approach | Ground |
|---|---|---|
| 1 (safest) | Control integrity: an offered control must work | the Lemmon v. Snap lane, a design duty independent of content |
| 2 | Defaults and interface rules | conduct-focused; SB 976's default survived |
| 3 | Ranking-objective mandates | meets Moody v. NetChoice head-on, more exposed |
| 4 (most exposed) | Content-characterizing labels | strict scrutiny; SB 976's like-count ban was struck down |

Brake integrity and the wedge off-switch both sit at Tier 1: a control the user holds. A government "this is divisive" label sits at Tier 4, which is exactly why it stays in the research appendix, not the ask. And the criteria are written in observable terms on purpose: in NetChoice v. Bonta (March 2026) the vague ones ("materially detrimental," "well-being") were enjoined.

---

# How you enforce it

| Layer | What it checks | Who can run it |
|---|---|---|
| Observable tests (outside) | does the control activate, take effect, persist across sessions and devices, stay scoped | FTC, state attorneys general, or an independent auditor |
| Mandated internal evidence (with access) | control specification, version history, controlled-account testing, records of when a preference was honored | a digital regulator on the DSA model |

Anti-circumvention is non-optional: compliance has to cover the whole product, or the loop simply moves to notifications, streaks, and suggested accounts.

---

# What is actually new here

Two things no existing law does:

1. **A testable "does the off-switch actually work" standard.** SB 976, NY SAFE, and the DSA all name design; none wrote the persistence and anti-circumvention test that turns "a setting exists" into "the setting works and stays," checkable from outside.
2. **The wedge, made into a user-held brake.** Transparency plus a control over the recommendation signal, so the amplification answers to the person, not to a censor and not to the platform.

Everything else here (universal base layer, youth defaults, the legal tiering) exists to make those two enforceable.

---

# We name our own limits

A policy is stronger for saying what it has not solved:

- **Age verification** is a hard, privacy-fraught problem. Mitigation: Layer I is universal, so the working brake never depends on it.
- **The banishment risk:** a platform could stop serving minors rather than comply. The universal base layer is a partial hedge; the youth-defaults layer still creates the incentive.
- **The Moody "purely reactive algorithm" question is open,** not decided in our favor.
- **The government-mandated divisiveness label is the dangerous version and is deliberately NOT the ask.** We regulate the control, not the meaning of anyone's speech. That research stays in the appendix.

---

# The ask

Adopt the frame, then fund the specification:

1. Set the universal base layer as a floor: any control a platform offers must meet the seven-part test.
2. Require recommendation transparency plus a user control to turn the signal off: the wedge brake.
3. Direct the FTC or a state attorney general to publish the observable tests and an audit model.
4. Write to the vagueness bar: observable, defined criteria, never "well-being." Pilot the seven-part scorecard before thresholds go into statute.

The public is already here: **de-amplify.com**, a thirty-second self-test (find the brake, set it, close the app, reopen: did it hold?), constituent brake reports, and #WheresTheBrake.

---

# The standard, in one line

> Existing law increasingly names design as the target. What is missing is a user-centered standard for whether the person's decision to stop or redirect the system actually takes effect and persists.
>
> That standard is brake integrity. And the same brake, pointed at the recommendation signal, is how you de-amplify the wedge without letting anyone censor it.

**de-amplify.com**
