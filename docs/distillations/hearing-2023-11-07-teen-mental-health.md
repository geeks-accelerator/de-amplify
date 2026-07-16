---
title: "Congressional Hearing: Social Media and the Teen Mental Health Crisis (Nov 7, 2023)"
type: distillation
mode: multi-source (record of one hearing)
subject: "Senate Judiciary Subcommittee on Privacy, Technology, and the Law; Nov 7, 2023; witness Arturo Bejar (former Facebook/Meta engineer); S.Hrg. 118-663"
as_of: 2026-07-16
audience: general public reader
verified_by: pending
sycophancy_audit:
  method: "Blind cross-architecture wedge/sycophancy check. song-review `cultural` + `intuition` question battery (verbatim) run on a NON-CLAUDE model via OpenRouter, given both this distillation AND the complete official transcript as ground truth for representativeness. Two passes: cooperative, then adversarial-refuter (default-to-lean-exists)."
  model: x-ai/grok-4.3
  date: 2026-07-16
  cooperative_verdict: "MIRROR. Mechanism-not-tribe holds; both-sides swap accurate; exclusions justified; one-witness limit flagged. No fixes required."
  adversarial_verdict: "LEAN-CONFIRMED on one axis (over-sanitization, not partisan wedge): the trimmed theater/detour material skewed Republican, so the kept set presents R senators as more mechanism-focused than their full floor time. No quote-fidelity or attribution defect found in either pass."
  resolution: "Quote selection unchanged (a mechanism line is the artifact's job regardless of speaker; re-adding the trimmed partisan lines would reduce mechanism focus and pull toward wedge). Coverage note amended to disclose the exclusion asymmetry and that the sober bipartisan texture is partly a product of selection, not a full mirror of the room."
  raw_audit_trail: "reviews/hearing-2023-11-07-teen-mental-health-wedge-check-r1-cooperative.md ; reviews/hearing-2023-11-07-teen-mental-health-wedge-check-r2-adversarial.md"
sources:
  - "PRIMARY (official transcript, public domain): U.S. Senate, S.Hrg. 118-663, SOCIAL MEDIA AND THE TEEN MENTAL HEALTH CRISIS, govinfo CHRG-118shrg60432. https://www.govinfo.gov/content/pkg/CHRG-118shrg60432/html/CHRG-118shrg60432.htm (accessed 2026-07-16). Every verbatim quote below was checked as an exact substring of this transcript."
  - "PRIMARY (official): Written Testimony of Arturo Bejar before the Subcommittee, Nov 7, 2023. https://www.judiciary.senate.gov/imo/media/doc/2023-11-07_-_testimony_-_bejar.pdf (accessed 2026-07-16)."
  - "PRIMARY (official): Senate Judiciary Committee hearing page. https://www.judiciary.senate.gov/committee-activity/hearings/social-media-and-the-teen-mental-health-crisis (accessed 2026-07-16)."
  - "SECONDARY (reading aid / cross-check only, not the quoted source): TechPolicy.Press cleaned transcript. https://www.techpolicy.press/transcript-senate-hearing-on-social-media-and-teen-mental-health-with-former-facebook-engineer-arturo-bejar/"
tier_key: "ESTABLISHED = the statement was made on the record at this hearing, verbatim in the official transcript (a fact about what was SAID). Where the real-world truth of a contested assertion rests on a single witness or a lawmaker's characterization, it is flagged [single-witness] or [lawmaker characterization]. OBSERVED = carried by a document read into the record or by outside reporting cited at the hearing. ASSUMED = distiller inference, flagged."
structural_villain: "The design and the incentive, not a person or a party. The recurring finding is that safety tools existed in name but did not hold, and that the company had the data, had the fix, and chose not to ship it."
---

## Reader summary (derived, plain text)

On November 7, 2023, a Senate Judiciary subcommittee heard sworn testimony from Arturo Bejar, an engineer Facebook had hired twice to make its products safer for kids. His account, backed by his own memos to Mark Zuckerberg and Adam Mosseri that were entered into the record, was that Meta measured the harm children experienced, knew the numbers, and repeatedly chose not to act. His single most load-bearing claim for anyone studying platform safety: the safety features the company shipped were, in his words, "a safety feature in name only to placate the press and regulators." He described a help button he asked the company to build so a child could flag a hurtful message and get help, and it was not built. A striking detail: he proposed, in his words, "let's measure our help by whether it helped", and that was not adopted. Senators from both parties, Democrats and Republicans, agreed the problem is the product's design and the absence of any incentive to change it. One caution for the reader: this hearing had no witness from Meta or any platform, so the companies' side appears only as quoted documents, not live answers. Their live testimony is a separate hearing (the January 31, 2024 CEO hearing) and their legal position is in the lawsuits. As of the date above, this summary reflects the record of that one hearing.

## Brake-integrity relevance (why this hearing feeds the de-amplify thesis)

This hearing is the clearest on-the-record statement, from inside the company, of the exact pattern the brake-integrity work is about: a control that looks like a brake but does not stop the car.

- The **fake brake**: Bejar's "safety feature in name only". Tools shipped to answer public criticism, defined so narrowly they did not reduce the harm children actually reported.
- The **real brake, refused**: the help button a child could press when a message hurt them. As he put it, "And it doesn't matter what the content is, that child deserves help." He asked for it. It was not built.
- The **self-test that failed**: "let's measure our help by whether it helped" ... "and that was not adopted." A brake you never test against the thing it is supposed to stop is a sticker.

These map directly onto the movement's homepage self-test (set a limit, close the app, reopen, did it hold?). The hearing supplies the insider evidence that the answer was engineered to be "no."

## Claims (the ledger)

### What the hearing established (on the record)

- [ESTABLISHED] The hearing was held Nov 7, 2023 before the Senate Judiciary Subcommittee on Privacy, Technology, and the Law, chaired by Sen. Richard Blumenthal (D-CT), ranking member Sen. Josh Hawley (R-MO). (Transcript header and opening.)
- [ESTABLISHED] The sole witness was Arturo Bejar, former director of engineering for "Protect and Care" at Facebook (2009 to 2015), who returned as a consultant to Instagram's Well-Being Team (2019 to 2021). He testified under oath. (Blumenthal introduction; Bejar statement.)
- [ESTABLISHED] Bejar testified that in a 2021 Instagram survey, one in eight children aged 13 to 15 reported an unwanted sexual advance on the platform in the last seven days. [single-witness, but drawn from an internal survey he ran; the memo was entered into the record] (Bejar statement; Hawley Q&A.)
- [ESTABLISHED] Bejar testified he emailed the finding to Mark Zuckerberg, Sheryl Sandberg, Adam Mosseri and other executives on Oct 5, 2021, and that Zuckerberg did not reply and did not meet with him. (Hawley Q&A. The Oct 5, 2021 email was entered into the record.)
- [ESTABLISHED] Bejar reached three conclusions on the record: that Meta knows the harm kids experience and that its measures fail to address it; that there are actionable steps Meta could take; and that the company decides "time and time again" not to take them. (Bejar statement.)

### The mechanism (thesis-relevant, all Bejar testimony unless noted)

- [ESTABLISHED] Bejar testified that safety features developed in response to public outcry were "in reality, kind of a placebo, a safety feature in name only to placate the press and regulators," built on "very deliberately narrow definitions of harm." [single-witness] (Bejar statement.)
- [ESTABLISHED] He testified that the narrow definitions let the company grade itself: "The company was creating its own homework." [single-witness] (Bejar statement.)
- [ESTABLISHED] He testified that most of the child-safety tools built during his earlier tenure "had been removed" by the time he returned in 2019. [single-witness] (Bejar statement.)
- [ESTABLISHED] He testified that the internal term for addiction-like use was "problematic usage", and that its definition was too narrow to capture what parents observe. [single-witness] (Coons Q&A.)
- [ESTABLISHED] He testified he proposed the team "measure our help by whether it helped", and that it "was not adopted." [single-witness] (Coons Q&A.)
- [ESTABLISHED] He testified he repeatedly asked the company to add a help button a child could press on a harmful direct message, independent of content, and it was not built. [single-witness] (Welch Q&A; Butler Q&A; Hawley second-round Q&A.)
- [ESTABLISHED] He testified the fix was not a matter of significant investment: "It is a matter of how much they prioritize the work, and whether they're willing to set their goals based on what teens are experiencing." [single-witness] (Hawley second-round Q&A.)
- [ESTABLISHED] Asked whether Instagram is a dangerous product in its current form, Bejar answered "Correct." (Graham Q&A.)
- [OBSERVED] The record includes a Wall Street Journal finding (June 2023), read aloud by Sen. Hawley, that "Instagram's algorithms promote" networks devoted to underage sexual content, not merely host them. (Hawley Q&A. This is outside reporting cited at the hearing, not independent verification by the committee.)

### The platforms' own words, entered into the record (claim vs later reality)

- [OBSERVED] Adam Mosseri (then head of Instagram) told a Senate subcommittee in Dec 2021 that Instagram had "built tools that prevent bullying from happening in the first place." Bejar, who had consulted for that team, called the characterization "profoundly misleading." (Blackburn Q&A read Mosseri's prior testimony verbatim.)
- [OBSERVED] Mark Zuckerberg wrote in an Oct 2021 note (quoted from the Massachusetts complaint entered into the record) that "everything we build is safe and good for kids." The same note said that "when it comes to young people's health or well-being, every negative experience matters." Bejar testified "that is what Instagram does today," meaning the harm, not the care. (Blumenthal second-round Q&A.)

## Quotes (attributed record)

Every quote is a verified verbatim substring of the official transcript (S.Hrg. 118-663). Speaker, role and the moment in the hearing are given so each can be located in the searchable record.

### The witness: Arturo Bejar (former Facebook/Meta safety engineer)

- "a safety feature in name only to placate the press and regulators" [mechanism: the fake brake, named from inside the company] (opening statement)
- "The company was creating its own homework." [mechanism: narrow harm definitions let the company grade itself] (opening statement)
- "Meta knows the harm that kids experience on their platform, and the executives know that their measures fail to address it." [mechanism: knowledge, not ignorance] (opening statement)
- "they are deciding time and time again to not tackle these issues" [mechanism: a choice, not a limitation] (opening statement)
- "let's measure our help by whether it helped" ... "and that was not adopted." [mechanism: the safety tool was never tested against whether it worked] (Q&A, Sen. Coons D-DE)
- "can we please add a button when a child receives this message that says like, ``Please help me.''" [mechanism: the real brake he asked for and did not get] (Q&A, Sen. Welch D-VT)
- "Those are not a matter of significant investment. It would not cost them as much. It is a matter of how much they prioritize the work" [mechanism: the fix was cheap; the refusal was a priority choice] (second-round Q&A, Sen. Hawley R-MO)
- "It's a product. It needs to be different. It has to change." [mechanism: frames the issue as product design, not speech] (second-round Q&A, Sen. Blumenthal D-CT)
- "I agree with that they make research. I don't agree that they make changes." [mechanism: research without action] (Q&A, Sen. Blackburn R-TN)
- "algorithms are as good as their inputs" [mechanism: an automated safety system blind to what kids flag cannot catch it] (Q&A, Sen. Hawley R-MO)

### Lawmakers naming the mechanism (bipartisan, not the theater lines)

- "the Kids Online Safety Act is also about the product. It's about product design." Sen. Richard Blumenthal (D-CT), second-round Q&A. [frames the remedy as design, not censorship]
- "All six passed unanimously. Every Democrat and every Republican." Sen. Richard Durbin (D-IL), opening statement, on the child-safety bills the Judiciary Committee had already reported. [the problem is treated as bipartisan on the record]
- "that statistic is designed to mislead" Sen. Josh Hawley (R-MO), opening statement, on the company's public claim to take down roughly 90 percent of harmful material. [names the safety metric itself as the misleading artifact]
- "They had built tools. You built them. That was true. But they chose to remove that." Sen. Marsha Blackburn (R-TN), second-round Q&A. [the tools existed and were withdrawn: a choice]

## Tensions / open questions

- **One witness, one side.** Meta and every other platform were absent. The strongest mechanism claims (placebo features, removed tools, ignored memos) are single-witness. They are corroborated in part by documents Bejar authored and by the WSJ reporting, but the company had no chance to answer them here. The honest posture is "Bejar testified that," not "it is established that Meta did."
- **The narrow-definition-of-harm knife cuts both ways.** Sen. Hirono (D-HI) noted on the record that Meta has been accused of over-censoring some content (she cited health advertisements related to menstruation) even as it under-acts on youth harm. This complicates a simple "they never moderate" story: the claim is not that the company cannot act, but that it aims its action narrowly. Worth holding, because it is the fairest read and the more precise one.
- **Remedy is contested even among allies.** Senators pushed several different levers (KOSA product-design rules, Section 230 repeal, a private right of action, transparency mandates). Bejar repeatedly declined to endorse a specific legal remedy ("I'm not a lawyer"), staying on the design and transparency ground he could speak to. The hearing establishes the problem more than it settles the fix.
- **Time-sensitive political claims.** Several senators pledged floor votes "before the end of the year" (2023). Those pledges are on the record; whether they were kept is outside this hearing and should not be read from it.

## Coverage note

- **What share of the record is mechanism-relevant.** The transcript runs about 19,000 words. Roughly the opening statements, Bejar's statement, and the Blumenthal / Hawley / Durbin / Blackburn / Welch / Butler / Coons exchanges carry the design-and-incentive material distilled above. A meaningful fraction of the hearing is adjacent but off this thesis (drug sales and fentanyl, data brokerage, TikTok and China, deepfakes, Section 230 mechanics) and is left out on purpose, not because it is unimportant but because it is a different subject.
- **Deliberate exclusions (the anti-wedge discipline in practice).** The transcript contains several genuinely quotable but tribal or performative moments that were left out of the quote-bank because they name a villain-who rather than the mechanism, or are comic theater: Sen. Kennedy's riff that social media "lowered the cost of being an a-hole" (drew laughter); Sen. Graham's "I can't think of a company in the world that can do this crap and not get sued except these people" and his call to boycott industry donations; and Sen. Hawley's extended detour into the "Missouri v. Biden" content-moderation lawsuit, a partisan censorship frame unrelated to the child-safety brake. Including these would make the artifact read as one side scoring points. Excluding them keeps it a receipts document about how the safety mechanism failed. The lines are real and in the record; they are simply not the mechanism.
- **The exclusions skew Republican, disclosed here so the kept set is read honestly.** A blind external review of this distillation flagged, correctly, that the comic and performative lines trimmed above (Kennedy, Graham) plus the partisan Missouri v. Biden detour (Hawley) and an off-thesis China / data-broker detour (Sen. Cornyn) all came from Republican members. The effect is that the Republican senators appear here through their mechanism lines (Hawley on the misleading takedown metric, Blackburn on the removed tools), which is not the full character of their floor time, part of which was the partisan material listed as excluded. The trim is deliberate and defensible (a mechanism line is the artifact's job no matter who spoke it), but a fair reader should know that the sober, bipartisan-design-critique texture of this distillation is partly a product of the selection. The hearing itself had no platform witness and members competing to be toughest on Big Tech; it was not a neutral event, and this distillation extracts the mechanism signal from it rather than mirroring the room.
- **Both-Sides check on the quote set.** If the party labels on the lawmaker quotes were swapped, the set would still read as "the design was known to be broken and the fix was refused," not as "one party owning tech." That is the test this quote-bank is built to pass.
- **Where the platforms' side lives.** Because no platform testified here, a fair reader should pair this with (a) the Jan 31, 2024 Senate Judiciary CEO hearing, where Meta, TikTok, Snap, Discord and X answered under oath, and (b) the companies' own filings in the lawsuits distilled elsewhere in this folder.
