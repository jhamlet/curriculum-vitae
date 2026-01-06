# Plan: Author Profile Step-by-Step Review

## Objective

Conduct an interactive, section-by-section review of the author's
profile/persona with the user. Each section goes through multi-round
refinement until accepted. Final output is a comprehensive profile
document that:

1. Supports resume writing across three employment avenues
2. Provides filtering criteria for evaluating feedback suitability
3. Captures nuanced preferences by engagement type

## Employment Avenues to Address

| Avenue               | Description                          | Key Differences                         | Priority  |
| -------------------- | ------------------------------------ | --------------------------------------- | --------- |
| **Contracting**      | 3-6 month engagements, $175-200/hr   | Autonomy, project-based, clear outcomes | Primary   |
| **Mixed/Fractional** | Advisory + project work, $250-350/hr | Strategic, multiple clients, leadership | Primary   |
| **Full-time**        | W2 employment, benefits              | Stability, team integration             | Secondary |

**Note:** Full-time is secondary. Salary should fit role and market
rather than defining specific bands. FT only pursued for exceptional
opportunities.

## Current Profile Structure

The existing `author-profile.md` has 7 sections:

1. **Context** - Background, career arc, proof points
2. **Objective** - Rate, engagement type, timeline, success metrics
3. **Audience** - Target companies, industries, decision makers, pain
   points
4. **Constraints** - Non-negotiables, deal-breakers, will not accept
5. **Differentiators** - Core, technical, approach
6. **Narrative** - Story arc, key insight, positioning statement,
   identity
7. **Feedback Filter** - Alignment checks, quality checks, red flags

## Review Process Design

### Phase 1: Section-by-Section Review

For each section, the workflow is:

```
┌──────────────────────────────────────────┐
│ 1. Present current section content       │
│    (chunked if long)                     │
└────────────────┬─────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────┐
│ 2. Ask focused questions                 │
│    - Multi-choice where applicable       │
│    - Probe for missing nuance            │
│    - Consider employment avenue diffs    │
└────────────────┬─────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────┐
│ 3. Refine based on responses             │
│    - Present revised version             │
│    - Iterate until accepted              │
└────────────────┬─────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────┐
│ 4. Mark section as ACCEPTED              │
│    - Move to next section                │
└──────────────────────────────────────────┘
```

### Phase 2: Cross-Avenue Synthesis

After all sections reviewed, synthesize differences across employment
avenues:

- What changes between contracting, FT, and fractional positioning?
- Which differentiators emphasize for each?
- How do constraints shift by engagement type?

### Phase 3: Compile Final Document

Create the final updated `author-profile.md` with:

- All accepted sections
- Avenue-specific variants where applicable
- Clear feedback filtering criteria per avenue

## Section Review Order & Chunking

| Section            | Sub-chunks                                                    | Key Questions                                           |
| ------------------ | ------------------------------------------------------------- | ------------------------------------------------------- |
| 1. Context         | Career arc, Proof points, Design background                   | Is this accurate? What's missing? How much AI emphasis? |
| 2. Objective       | Rate tiers, Engagement preferences, Timeline, Success metrics | Different by avenue? Rate flexibility?                  |
| 3. Audience        | Target companies, Industries, Decision makers, Pain points    | Same across avenues? Priority order?                    |
| 4. Constraints     | Non-negotiables, Deal-breakers, Will not accept               | Different by avenue? Any updates?                       |
| 5. Differentiators | Core, Technical, Approach                                     | Which lead for which avenue?                            |
| 6. Narrative       | Story arc, Key insight, Positioning, Identity                 | Avenue-specific positioning statements?                 |
| 7. Feedback Filter | Alignment, Quality, Red flags                                 | Different filters by avenue?                            |

## Questions to Surface Per Section

### Context

- Is the "27+ years" framing right, or should it be de-emphasized?
- Is "mid-November 2025" still the accurate AI pivot date?
- Are the Netflix/Meta proof points the strongest, or are there others?
- Is "design as operating system" resonating or confusing?

### Objective

- Is $175-200/hr firm for contracting, or is there flexibility?
- For full-time, what's the salary range target?
- Is the $250-350/hr fractional tier realistic for current positioning?
- Has the Q1 2026 timeline shifted?
- Are the 2-year success metrics still accurate?

### Audience

- Is Series A-B still the sweet spot, or has it shifted?
- Are all four industries (dev tools, AI/ML, productivity, creative)
  equal priority?
- Are there specific companies to target or avoid?
- Are the pain points still accurate?

### Constraints

- Any new non-negotiables or deal-breakers?
- How firm is "remote-first"? Would hybrid work for the right
  opportunity?
- Are there constraints that differ by avenue (e.g., FT might accept
  different things)?

### Differentiators

- Is "I am the training data" landing or needs refinement?
- Is "spec-driven development" still the right technical differentiator?
- Is "building, not performing" still the right positioning?
- What differentiators matter most for each avenue?

### Narrative

- Is the four-phase career arc (Design → Engineering → Principal → AI)
  still right?
- Is the positioning statement compelling?
- Should there be different positioning statements per avenue?

### Feedback Filter

- Are the current filters working in practice?
- Any feedback that was incorrectly accepted or rejected?
- Do filters need to differ by avenue?

## Session Structure

**One section per session** - Deep dive into each section, refine until
accepted, then continue in next session.

| Session | Section                                | Est. Duration |
| ------- | -------------------------------------- | ------------- |
| 1       | Context                                | 15-30 min     |
| 2       | Objective                              | 15-30 min     |
| 3       | Audience                               | 15-30 min     |
| 4       | Constraints                            | 15-20 min     |
| 5       | Differentiators                        | 20-30 min     |
| 6       | Narrative                              | 20-30 min     |
| 7       | Feedback Filter                        | 15-20 min     |
| 8       | Cross-Avenue Synthesis + Final Compile | 30-45 min     |

## Execution Steps

### Per-Section Session Flow

1. **Present current section content**
   - Show the existing text
   - Chunk into smaller pieces if needed

2. **Ask focused questions**
   - Multi-choice for concrete options
   - Open-ended for nuance
   - Consider primary vs secondary avenue implications

3. **Refine based on responses**
   - Present revised version
   - Iterate until user accepts

4. **Mark section ACCEPTED**
   - Record accepted version
   - Note any avenue-specific variants

### Final Session (Session 8)

1. **Cross-Avenue Synthesis**
   - Review how primary avenues (contracting, fractional) differ
   - Note secondary avenue (FT) accommodations
   - Identify which differentiators lead for each

2. **Compile Final Document**
   - Replace `docs/process/author-profile.md` with updated version
   - Include avenue-specific sections where applicable
   - Ensure feedback filter is actionable

## Success Criteria

- [ ] All 7 sections reviewed and accepted by user (one section per
      session)
- [ ] Primary avenues (contracting, fractional) clearly differentiated
- [ ] Secondary avenue (FT) accommodated without over-specifying
- [ ] Final profile replaces existing `author-profile.md`
- [ ] Feedback filter is clear and actionable per avenue

## Files to Modify

- `docs/process/author-profile.md` - Replace with reviewed version

## Starting Point

**Session 1 begins with:** Context section

Present:

```
27+ years bridging design and engineering. Career arc: design foundation
(1997-2007) to engineering mastery (2007-2018) to principal-level
leadership (2018-2024) to AI-augmented evolution (2024-present).

Key proof points at scale:
- Netflix: Architect for global expansion (1 to 212 countries, 100M+ users)
- Meta: AR/VR internal tools serving thousands of engineers
- Developer experience focus throughout: build tools, automation, DX improvements

Recent pivot to AI-augmented development (mid-November 2025).
Independent discovery of spec-driven development methodology before
GitHub open-sourced Spec Kit (September 2025). Early but ahead of curve
on AI-native approaches.

Design background is an operating system, not a credential. Pattern
recognition across domains informs every architectural decision.
```

Then ask clarifying questions about accuracy, emphasis, and missing
elements.
