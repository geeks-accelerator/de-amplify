# Full-set code review: the hearing-distillations plan + all four hearing docs

**Method**: independent fresh-context reviewer (Claude general-purpose agent, no stake), given the plan, all four distillations, all cached sources, all eight wedge-check files, the r3 pilot review, the checker, and the observation file; its brief required substring-verifiable quoted evidence for every finding (the anti-fabrication/misattribution lesson). It re-ran the checker on all four docs, mechanically verified 21 attribution anchors, checked section-placement for every tier-down quote, and grep-verified the plan's factual claims. Run in parallel with the drafter's own mechanical validation pass (which independently found Findings 1 and the Hirono-Bejar gap). 2026-07-16. Verdict: SOLID-WITH-FIXES; all ten findings verified against the artifacts (every quoted piece of evidence substring-checked) and applied the same day. The review body below is preserved verbatim as the audit trail; the fixes are recorded in the plan's "Post-implementation full-set review" section.

**Reviewer's calibration statement:** "the plan's execution record is unusually honest overall."

**Headline findings (all applied):** F1 the Senate doc's "sixteen months earlier" was arithmetically false (27.4 months) and "directly answers" anachronistic; F2 "both now on appeal" contradicted the sibling NM ledger (announced intent, not filed) and was introduced BY the wedge fix; F3 the Senate summary mischaracterized the NM verdict (consumer-protection, not design) and the liable parties; F4 the flagship cross-doc "30 tools" convergence pointed at testimony the CEO doc never carried (now added, with the Hirono-cites-Bejar exchange); F5 the House framing fix had over-trimmed the safety side to zero quotes (Berkman restored); F6 the Senate quote-bank concentrated on Lanier with no note (note + Leary/Bogard material added); F7 the "reviewer FABRICATED a quote" narrative was itself an overstatement (doc/source misattribution; the line is verbatim Norring testimony) — corrected in the doc, plan, and observation, with the doc-locator rule added to verify-the-reviewer; F8 tier-flag slips (CEO community-standards claim now flagged with Zuckerberg's denial carried; undefined flag normalized; unused flags marked transport-only); F9 tier-down quote-banks now line-anchored per gate C(g); F10 minors (fidelity-count wording, transcript-lag phrasing, verified_by semantics defined).

**The new insight:** CORRECTION-RECOIL — two of the set's worst errors were introduced by fix passes (F2 by the wedge fix; F5 by the framing fix). The fix pass is itself an ungated edit surface; corrective edits that add factual claims must be sourced like original claims. Recorded as the fifth sibling surface in the exclusion-asymmetry observation.

---

## The review, verbatim

**What I did:** read the plan end-to-end including all execution/status sections; read all four distillations, all eight wedge-check files, the r3 code review, the checker, the observation file, and the sibling lawsuit distillations; re-ran `hearing_quote_check.py` on all four docs against their cached sources; mechanically verified speaker attribution for 21 quote anchors across the two full-standard docs and section-placement for every quote-bank entry in the two tier-downs; and grep-verified the plan's factual claims (word counts, span counts, commits, verdicts, synthesis table) against the artifacts.

**What held up (stated first so the findings are calibrated):** all four docs exit 0 on the committed checker (68/85/53/33 spans, 0 warnings); every attribution I spot-checked was correct (including "Mr. Siegel" being the transcript's own misspelling, exactly as the plan claims); the transcript word counts (19,353 / 33,977), doc word counts (4,070 / 2,906 / 2,685), commit hashes, ahead-of-origin state ("Nothing pushed yet"), the r1/r2 verdicts as quoted in every `sycophancy_audit` block, the synthesis table's four rows, 0 em-dashes, and the applied F1-F9 fixes all verify against the files. The plan's execution record is unusually honest overall. The findings below are what a real hunt turned up anyway.

### Finding 1 — SEVERE: "sixteen months earlier" is arithmetically false (Senate doc, stated twice)

**(a) Claim:** The Senate doc's reader summary and brake section date the CEO's "30 tools" testimony sixteen months before the May 13, 2026 hearing. The CEO hearing was Jan 31, 2024 — about **27.5 months** earlier. No pair of dated events in the record (chat Oct 24, 2023; CEO hearing Jan 31, 2024; KGM verdict Mar 25, 2026; hearing May 13, 2026) is sixteen months apart.

**(b) Evidence** (`hearing-2026-05-13-courtroom-to-congress.md`):
- Reader summary: "That last one directly answers the "30 tools" Meta's CEO cited to this same body sixteen months earlier."
- Brake section: "Sixteen months earlier, in the CEO hearing distilled in this folder, Meta's CEO offered those 30 different tools as the answer."

Secondary defect in the same sentence: "directly answers" is anachronistic — the chat (Oct 2023) *predates* the testimony (Jan 2024) it supposedly answers.

**(c) Why it matters:** A flatly wrong dated claim in the reader summary of a fidelity-obsessed artifact, resting on neither source nor flag — precisely the class of error the plan's gate C(f) ("dates/roles/hearing-titles exact") exists to catch. It survived the checker because it isn't inside quotation marks, and survived both wedge passes because it isn't a lean.

**(d) Fix:** "roughly two years earlier" / "twenty-seven months earlier"; replace "directly answers" with the ledger's own phrasing ("stands against").

### Finding 2 — SEVERE: "both now on appeal" contradicts the folder's own same-day-corrected record for New Mexico, and is miscited to testimony that doesn't contain it

**(a) Claim:** The Senate doc asserts both verdicts are on appeal; the sibling NM distillation was corrected the very same day to say the opposite for NM, and the cited witness testimony contains no appeal-status claim.

**(b) Evidence:**
- `hearing-2026-05-13-courtroom-to-congress.md`, summary: "(the California KGM verdict and the New Mexico verdict, both now on appeal)"; ledger: "both distilled separately in this folder and both on appeal, not final. (Lanier and Leary testimony.)"
- `new-mexico-v-meta.md`, claim 16: "this is *announced intent*, not a filed appeal" and its Learnings: "an earlier version of this record said "Meta is appealing" (and this record's TLDR said "now on appeal"). The evidence says *announced intent only*"
- The cited testimony contains only Leary's prediction (`senate-2026-05-13-testimony-combined.txt`, line 1397): "lengthy appeals will follow"
- The irony: this phrasing was *introduced by the wedge-check fix* — the audit block records "softened the summary's liability claim to 'returned verdicts finding... both now on appeal'"

**(c) Why it matters:** This is the "$6M upheld" failure family the whole plan is built against — a legal-posture over-claim — introduced *while fixing* a sycophancy finding, and it contradicts a correction the same drafter shipped to the sibling doc the same day. It also shows the fix path itself is an unguarded surface: post-audit edits were not re-checked against the folder's own records.

**(d) Fix:** "KGM on appeal (notices filed); the New Mexico verdict is not final (Meta has announced it will appeal)" — and cite the lawsuit distillations, not "(Lanier and Leary testimony.)", for the posture.

### Finding 3 — MODERATE-SEVERE: the Senate summary misstates what the NM jury found and who was found liable

**(a) Claim:** "juries had returned verdicts finding Meta, Google, and Instagram liable for designing products that harmed children" is wrong on two axes for New Mexico.

**(b) Evidence:** Senate doc summary: "American juries had returned verdicts finding Meta, Google, and Instagram liable for designing products that harmed children". The sibling `new-mexico-v-meta.md`: the jury "found Meta broke New Mexico's consumer-protection law by misleading the public about how safe its apps were and by failing to protect kids from sexual exploitation" — a deception/consumer-protection verdict, not a design-defect verdict; and the liable parties across the two cases are Meta and Google ("K.G.M. v. Meta and Google" per `california-state-bellwethers.md`; "Instagram" is Meta's product, not a separately-adjudged company in either sibling doc).

**(c) Why it matters:** The reader summary is the surface a page will quote. Lumping a consumer-protection verdict under "designing products that harmed children" is exactly the kind of characterization drift the ledger discipline exists to prevent — and it happened in the derived layer, above the carefully-flagged ledger (the doc's own "framing-voice" lesson, recurring after the fix).

**(d) Fix:** "verdicts finding Meta and Google liable — California for negligent design, New Mexico for consumer-protection violations over its safety claims".

### Finding 4 — MODERATE-SEVERE (cross-doc): the Senate doc's headline convergence targets testimony the CEO doc never carries

**(a) Claim:** The Senate doc's "main value" claim rebuts the CEO's "30 tools" testimony and points readers to "the CEO hearing distilled in this folder" — but the CEO distillation contains no 30-tools claim anywhere.

**(b) Evidence:** Senate doc ledger: "This internal characterization stands against the 30 different tools Meta's CEO offered as the safety answer in the CEO hearing distilled in this folder."; coverage note: "the "30 tools" internal chat vs the CEO's "30 tools" testimony". The testimony IS real — `CHRG-118shrg57444.txt` lines 662-663: "Over the last 8 years, we've built more than 30 different" / "tools, resources, and features" — but grep of `hearing-2024-01-31-big-tech-child-safety.md` finds no 30-tools entry, quote, or ledger claim.

**(c) Why it matters:** A reader (or a page) following the cross-reference cannot find the thing being rebutted; the convergence the Senate doc calls "this document's main value" dangles. Worse, the CEO's headline tools claim is prime `[interested-party]` ledger material by the CEO doc's own tier_key, so its omission is also a coverage gap in the CEO doc itself.

**(d) Fix:** Add the 30-tools opening line to the CEO doc's "platforms in their own words" section, flagged `[interested-party]`, with a line anchor — closing the loop both docs' cross-references assume.

### Finding 5 — MODERATE: the House doc overcorrected; the pro-regulation half of the "balanced" hearing got the least and weakest representation

**(a) Claim:** After the framing fix, Berkman has **zero** quote-bank entries (bank: Thayer 2, Lekas 2, Ruane 3) and one ledger entry limited to usage statistics, while his strongest mechanism material — squarely on the site's brake thesis — is omitted.

**(b) Evidence:**
- The quote-bank heading "### The safety and pro-regulation witnesses" contains only Thayer quotes; no Berkman quote exists in the doc.
- Omitted mechanism receipt (`house-2025-12-02-testimony-combined.txt`, Berkman section): "While many social media platforms, like YouTube, Tumblr, X, and Reddit, do provide access," ... "unfortunately, others used significantly by children, like Snapchat and TikTok, do not." — an existing external brake (third-party safety software, "Third-party safety software has averted a documented 16 school shootings.") that platforms refuse to connect; the entire basis of Sammy's Law, which the reader summary name-drops but never explains.
- The coverage note claims one-directional care only: "The ledger and quote-bank deliberately give the industry and civil-liberties witnesses their strongest statements, not caricatures." No symmetric statement exists for the safety side, and the doc doesn't deliver one.

**(c) Why it matters:** The wedge machinery corrected a pro-regulation lean and nothing guarded the recoil — the mirror image of the concentration surface the project itself named. A "map of the debate" where one of the four positions has no quotes and its best mechanism evidence is absent is not yet the fair map the doc claims.

**(d) Fix:** Add 1-2 Berkman entries (the API-refusal mechanism; optionally the self-harm-exposure stats), which also improves the remedy-fork map (parental-tool interoperability is a fourth remedy class distinct from design/content/privacy).

### Finding 6 — MODERATE: Senate quote-bank concentrates on Lanier (6/8) with no concentration note, one doc after "concentration" became a named surface

**(a) Claim:** Lanier 6 quotes, Leary 1, Bogard 1, Norring 0 — and unlike the CEO doc (which added an explicit note for the same finding), no disclosure exists.

**(b) Evidence:** Count the `## Quotes` section of `hearing-2026-05-13-courtroom-to-congress.md`; contrast the CEO doc's "*A note on concentration: Mark Zuckerberg appears more often in this quote-bank than the other four CEOs combined.*" The plan itself says "`concentration` guards how the kept weight distributes across a multi-subject record." Omitted material a fair reader would want: Leary's deterrence-scale argument — "While $375 million dollar and a $6 million dollar verdicts are significant, the revenue for" Alphabet/Meta exceeded $400B/$200B (the strongest quantitative form of the doc's own "missing brake by law" thesis); and Bogard's algorithmic-amplification receipt — the "choking game" "that the algorithm fed to" her son, plus "I have been notified of over 100 more choking" challenge deaths — while her ledger entry reduces her to the KOSA ask. Norring gets no quote at all.

**(c) Why it matters:** The project's own rule is "disclosure beats re-selection"; here there is neither. Justifiable on the merits (Lanier carries the exhibits) — but that justification is exactly what a concentration note is for.

**(d) Fix:** Add a concentration note; add the Leary deterrence-scale quote and Bogard's algorithm-fed-challenge claim to the ledger.

### Finding 7 — MODERATE (honesty of the audit narrative): "FABRICATED a supporting quote" overstates what r2 did — it misattributed a real source line to the doc

**(a) Claim:** The strongest lesson the plan and observation draw ("an adversarial reviewer will FABRICATE") rests on a mischaracterized instance: the quote exists verbatim in the source; the reviewer's error was claiming the *doc* asserts it.

**(b) Evidence:**
- Audit block (`hearing-2026-05-13-courtroom-to-congress.md`): "that line does not exist in the doc; it was fabricated when the reviewer pushed to LEAN-CONFIRMED"
- Plan: "But the adversarial pass also FABRICATED a supporting quote"
- Observation: "a reviewer pushed to confirm a lean will invent supporting evidence."
- But the line exists verbatim in the source, `senate-2026-05-13-testimony-combined.txt` line 1555: "The documents prove that there is nothing frivolous about these lawsuits." — and r2 itself flagged the provenance: "(echoing Norring)".

**(c) Why it matters:** "Reviewer invents evidence" and "reviewer conflates source with doc" are different failure modes with different mitigations (the second is fixed by demanding doc-locators from the reviewer, not just substring-checking). The observation is generalizing the scarier claim from evidence supporting the milder one — on a project whose entire ethic is "verify the reviewer's factual assertions."

**(d) Fix:** Re-characterize in the audit block, plan §"New disciplines", and observation mitigation 3(c) as *doc/source misattribution*; add "require the reviewer to give a doc locator for any quoted doc text" to the verify-the-reviewer rule.

### Finding 8 — MODERATE: tier-flag discipline slips in both the CEO doc and the tier-downs

**(a/b) Evidence:**
- CEO doc ledger tiers a contested senator account as plain ESTABLISHED with no flag and omits the witness's on-record denial: "Meta did not remove certain sexualized content involving minors because it "didn't violate your community standards" until a congressional staffer intervened" — the doc's own tier_key requires "[lawmaker characterization] = a senator's assertion presenting the committee's evidence, not witness testimony", and Zuckerberg pushed back on the record (`CHRG-118shrg57444.txt` 3702-3703): "It does violate our standards. We work very hard to take it down."
- Senate doc uses a flag its tier_key never defines, on the wrong actor class: "[lawmaker/expert characterization citing NCMEC]" (Leary is a witness; the doc's own `[advocacy-witness]` applies).
- Both tier-downs define OBSERVED and ASSUMED and use them **zero** times — the exact "dead flag" defect r3/F2 flagged in the pilot, reproduced twice.

**(c) Why it matters:** Cross-doc flag consistency is what lets a page treat the four docs as one system; the report-don't-adjudicate discipline should have carried Zuckerberg's denial.

**(d) Fix:** Add the flag + the denial to the CEO claim; normalize the Leary flag; either exercise or drop OBSERVED/ASSUMED in the tier-downs.

### Finding 9 — MODERATE: tier-down quote-banks violate the plan's own locator gate, undisclosed

**(a) Claim:** Gate C(g) requires "quote-bank locators line-anchored to the cached transcript"; both tier-downs ship entries like "- "nobody is asking us to build 30 tools" [trial exhibit: 2023 Meta employee chat; the internal view that the safety tools were beside the point] (written testimony, quoting exhibit EX. 00091)" — no line anchors, though the cached combined sources exist and the checker's `--anchors` flag emits them. The plan's tier-down sections don't record waiving (g).

**(c) Why it matters:** Line anchors were made normative precisely because "searchable-by-phrase" degrades on longer records; the F7 lesson was silently un-applied on the two newest docs.

**(d) Fix:** Run the checker with `--anchors` and add line ranges; or record the waiver explicitly in the plan.

### Finding 10 — Minor honesty/consistency items (plan)

- Plan Method §2 says "the pilot's one fidelity violation came from "fixing" it to a comma inside a quote" while its own execution record says "the independent review's own scripted check found **five** fidelity violations it had missed". Internally inconsistent count.
- `verified_by: pending` on all four while the plan records "Gate 3 PASSED (Lee, 2026-07-16)" — if gate sign-off is not `verified_by`, nothing defines what upgrades that field; a page consuming "pending" docs has no signal.
- The "official record lags ~1 year" claim is supported by the cached print dates ("WASHINGTON : 2025" in both transcripts) but for the Nov-2023 hearing that's up to two years; "roughly a year" is the charitable end.
- Unverifiable-from-files (low load, flag only): House "a legislative hearing on ~20 child-safety bills" and "event 118714" (the cached testimony never counts the bills); "No S.Hrg. number yet." / "No Serial No. yet."; the Senate hearing page "offers only witness written-testimony PDFs".

### Dimension summaries

1. **Plan-vs-implementation honesty:** Strong overall — every numeric and procedural claim I could test verified (span counts, word counts, verdicts, commits, "Siegel", synthesis table, "every scaling rule fired" is supportable from the doc). Real defects: the fabrication mischaracterization (F7), the one-vs-five inconsistency, and the undisclosed locator-gate waiver (F9).
2. **Cross-doc consistency:** Leary-cites-Bejar verifies (source footnotes 7-8: "Big Tech and the Online Child Sexual Exploitation Crisis" / "Written Testimony of Arturo Bejar"); Klobuchar-named-Norring verifies (CEO transcript: "Parents like Bridget Norring from"); Butler court-documents verifies (CEO transcript 3340: "Senator Butler. With court documents?"). Broken: the 30-tools pointer (F4), the NM appeal posture vs the sibling doc (F2). Also a missed convergence: **Hirono cites Bejar by name inside the CEO hearing** ("the Privacy and Technology Subcommittee heard testimony from" / "Arturo Bejar. In response to one of my questions about how to", CEO transcript 2604-2605) and the CEO doc never mentions it — note the review brief I was given asserted the CEO doc claims this; it does not (I verified the absence).
3. **Ledger/quote quality:** 21/21 attribution spot-checks correct across pilot+CEO; all tier-down quotes sit in the right witness sections; no meaning-flipping truncation found (the "opt out of these safeguards" wording is Hirono's, but the ledger's "agreed teens" framing is honest — Zuckerberg answered "Yes."). Tier-flag slips per F8.
4. **Coverage/omissions:** House under-represents Berkman (F5 — yes, it overcorrected); Senate over-concentrates on Lanier and omits Leary's deterrence-scale and Bogard's algorithm-fed-challenge receipts (F6); CEO omits the 30-tools claim (F4) and the Hirono-to-Bejar citation.
5. **Fact-check unverified claims:** F1 (sixteen months — false), F2/F3 (appeal posture, verdict characterization — contradicted by sibling docs), plus the minor unverifiables in F10.
6. **Site-readiness:** no budgeted TLDR variants (the lawsuit docs carry "One line (label)" / "Search snippet (~155 chars...)" blocks; pages consume them verbatim); `verified_by: pending` on all four; `sources/README.md` documents only the pilot's two files — the CEO transcript and both combined caches (provenance, PDF list, concatenation method, verify commands, allowlist policy) are undocumented; no index of the four hearing docs; the "rebuild when GPO publishes" promise has no tracking artifact; ESTABLISHED means different things in full-standard vs tier-down docs, so any page rendering tier badges must surface `evidentiary_status` alongside.
7. **Top enhancements:** (1) fix the Senate summary's three factual defects (F1-F3) before anything consumes it; (2) add the 30-tools `[interested-party]` quote + the Hirono-cites-Bejar link to the CEO doc; (3) rebalance/disclose Berkman (House) and Lanier concentration (Senate); (4) re-characterize the "fabrication" instance and add the doc-locator rule to verify-the-reviewer; (5) ship the site-readiness pack (tier-down line anchors, budgeted variants, completed sources README, hearing index with rebuild-watch).

**OVERALL: SOLID-WITH-FIXES** — the fidelity/anti-wedge machinery demonstrably works and the plan's record is largely honest, but the Senate doc's reader summary contains flat factual errors (one introduced by a wedge fix), the flagship cross-doc convergence dangles, and the House doc's rebalancing overshot; none of the four should be treated as page-ready until Findings 1-5 land.
