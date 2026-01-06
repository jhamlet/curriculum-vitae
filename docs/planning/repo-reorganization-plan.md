---
status: implemented
implemented_date: 2026-01-05
---

# Repository Reorganization Plan

## Overview

Reorganize the curriculum-vitae repository to support a clear resume
development workflow with structured review personas for quality
improvement.

---

## Part 1: Directory Structure

### Resume Workflow Folders

```
draft/          # Active editing, work-in-progress, feedback, change records
pub/            # Generated output (txt, pdf, html, linkedin)
patterns/       # Reusable transformation patterns
```

### Naming Rationale

| Folder      | Purpose                                | Contents                             |
| ----------- | -------------------------------------- | ------------------------------------ |
| `draft/`    | All editing, feedback, persona reviews | Markdown resumes, feedback, changes/ |
| `pub/`      | Generated output for distribution      | txt, pdf, html, linkedin formats     |
| `patterns/` | Reusable transformation patterns       | Pattern definition files             |

### Files Location

**In `draft/`:**

- `resume-baseline.md`
- `resume-hybrid.md`
- `resume-solutions.md`
- `resume-standard.md`
- `resume-{variant}-feedback.md`
- `changes/` (change records)

**In `pub/` (generated output):**

- `resume-{variant}.txt`
- `resume-{variant}.pdf`
- `resume-{variant}.html`
- `linkedin/` (LinkedIn-specific formats)

**Other locations:**

- `patterns/` - Reusable transformation patterns
- `docs/` folder structure unchanged (research, guides, analysis)
- `prompts/` folder unchanged

---

## Part 2: Frontmatter Schema

Each resume file will include YAML frontmatter for metadata and
versioning:

```yaml
---
title: "Resume - Standard Variant"
variant: standard # baseline | hybrid | solutions | standard
version: 1.0.0
status: draft # draft | proof | pub
last_updated: 2026-01-05

# Derivation lineage (change records in ./changes/ folder)
base: hybrid # null for source-of-truth (hybrid), variant name for derived

# Target facets (nested map)
target:
  industry:
    - developer-tools
    - ai-ml
    - productivity
  company_stage: Series A-B
  role: Creative Solutions Engineer
  engagement: full-time # contract | contract-to-hire | full-time

# Focus areas for this variant
focus:
  - ats-optimization
  - traditional-format
  - keyword-rich

# Review tracking (detailed feedback in ./changes/ as persona-feedback records)
reviews:
  - persona: startup-founder
    date: null
    score: null
  - persona: engineering-hm
    date: null
    score: null
  - persona: strategic-leader
    date: null
    score: null
---
```

**For the source-of-truth (hybrid):**

```yaml
---
title: "Resume - Hybrid Variant"
variant: hybrid
version: 1.0.0
status: draft
last_updated: 2026-01-05

base: null # This is the source-of-truth

# ... rest of frontmatter
---
```

Change records live in `./changes/` with timestamp-based naming:
`YYYY_MM_DDTHH_MM_SS-change.md`. Frontmatter handles resume/version
references.

---

## Part 3: Reviewer Personas

Three personas tailored to your target market:

### Persona 1: Startup Founder (Alex)

**Profile:**

- **Role:** Founder/CTO at Series A startup (20-50 employees)
- **Looking for:** Contract help, possible future core partner
- **Engagement type:** Contract-to-hire
- **Time budget:** 3-5 minutes (reads carefully, makes own decisions)

**Evaluation Lens:**

- Can this person ship without hand-holding?
- Do they have the breadth to wear multiple hats?
- Will they fit our scrappy, fast-moving culture?
- Do I see potential co-founder/partner material?

**Must-haves:**

- Evidence of autonomous, end-to-end delivery
- Comfort with ambiguity and scope changes
- Modern tech stack familiarity
- Startup-compatible communication style

**Red flags:**

- Only big-company experience
- Vague project descriptions
- No evidence of initiative/ownership
- Overly formal or corporate tone

**Blindspots:**

- May undervalue deep specialization
- May overweight "culture fit" vs. skills

---

### Persona 2: Engineering Hiring Manager (Morgan)

**Profile:**

- **Role:** Engineering Manager/Director at mid-stage company (50-200
  employees)
- **Looking for:** Lead/Senior Engineer for specific project(s)
- **Engagement type:** Full-time employee
- **Time budget:** 2-4 minutes initial, 10+ minutes if interested

**Evaluation Lens:**

- Can they hit the ground running on our stack?
- Will they elevate the team's capabilities?
- Do their projects demonstrate real technical depth?
- Is there a clear career progression?

**Must-haves:**

- Relevant technology experience
- Quantified achievements (metrics, scale, impact)
- Evidence of mentorship/leadership
- Clear, recent work history

**Red flags:**

- Employment gaps without explanation
- Outdated technology stack
- Vague responsibilities ("worked on," "helped with")
- No progression over career arc

**Blindspots:**

- May discount non-traditional backgrounds
- May overweight recency vs. depth of experience

---

### Persona 3: Strategic Leader (Jordan)

**Profile:**

- **Role:** VP Engineering / CTO at growth-stage company (100-500
  employees)
- **Looking for:** Someone to bridge teams, find efficiency gains, or
  lead new initiatives
- **Engagement type:** Contract-to-hire
- **Time budget:** 1-2 minutes scan, delegates deep review

**Evaluation Lens:**

- Can they see the big picture across systems/teams?
- Do they have a track record of organizational impact?
- Will they reduce my cognitive load or add to it?
- Can they communicate up, down, and across?

**Must-haves:**

- Cross-functional experience
- Business outcome framing (not just technical)
- Evidence of strategic thinking
- Executive-level communication

**Red flags:**

- Pure IC history with no broader impact
- Technical jargon without business context
- No evidence of cross-team collaboration
- Inability to articulate "why" behind decisions

**Blindspots:**

- May overlook deep technical skills
- May overvalue credentials/pedigree

---

## Part 4: Review Workflow

### Step 1: Draft Phase

1. Work on resume in `resumes/draft/`
2. Update frontmatter `version` and `last_updated` on significant
   changes
3. Use git commits as waypoints (meaningful commit messages)

### Step 2: Proof Phase

1. Copy resume to `resumes/proof/` when ready for review
2. Update frontmatter `status: proof`
3. Run each persona review (using Claude with persona prompt)
4. Document feedback in frontmatter `reviews` array
5. Iterate based on feedback (may return to draft/)

### Step 3: Pub Phase

1. Copy final resume to `resumes/pub/`
2. Update frontmatter `status: pub`
3. Create git tag for version (e.g., `resume-hybrid-v1.0.0`)
4. This is the version sent to applications

### Review Aggregation

- When 2+ personas agree on an issue: high priority fix
- When personas conflict: investigate the specific concern
- When any persona "rejects": must address before pub

---

## Part 5: Implementation Steps

### Phase A: Create Structure

1. Create `resumes/` directory with `draft/`, `proof/`, `pub/`
   subdirectories
2. Move current resume files to `resumes/draft/`
3. Move `resume-baseline-review.md` to `resumes/proof/` as reference

### Phase B: Add Frontmatter

1. Add YAML frontmatter to each resume file
2. Set initial values (version 1.0.0, status: draft)
3. Define target facets per variant

### Phase C: Define Author Profile

Create a personal profile that guides resume writing and filters
feedback relevance.

1. Create `docs/process/author-profile.md` with:
   - **Context:** Background, current situation, career stage
   - **Objective:** What success looks like, desired outcomes
   - **Audience:** Target companies, roles, engagement types
   - **Constraints:** Non-negotiables, deal-breakers, boundaries
   - **Differentiators:** Unique value, key strengths to emphasize
   - **Narrative:** The story being told across all variants

2. Use this profile to:
   - Guide resume content decisions
   - Filter persona feedback (is this relevant to MY goals?)
   - Maintain consistency across variants
   - Evaluate trade-offs when feedback conflicts

### Phase D: Create Persona Prompts

1. Create `prompts/personas/` directory
2. Write persona definition files:
   - `startup-founder.md`
   - `engineering-hm.md`
   - `strategic-leader.md`
3. Include evaluation criteria, scoring rubric, output format
4. Reference author profile for feedback filtering guidance

### Phase E: Create Change Record Structure

1. Create `changes/` subdirectory in each stage (`draft/`, `proof/`,
   `pub/`)
2. Create `resumes/patterns/` directory for reusable patterns
3. Add `.gitkeep` files to empty directories

### Phase F: Write Process Documentation

1. Create `docs/process/` directory
2. Write `resume-workflow.md` - end-to-end guide
3. Write `persona-review-guide.md` - review execution guide
4. Write `transformation-guide.md` - delta record guide

### Phase G: Final Housekeeping

1. Update `CLAUDE.md` with:
   - Pointer to `docs/process/` for workflow documentation
   - Summary of resume workflow (draft → proof → pub)
   - Location of resumes, feedback, change records, and patterns
2. Update `README.md` with pointer to process docs
3. Add `.gitkeep` files to empty directories
4. Commit reorganization as waypoint

---

## Part 6: Change Records

Track modifications to resumes with structured change records that live
alongside the resumes in each stage.

### Purpose

- Document **what** changed in a resume
- Capture **why** the change was made
- Enable **pattern reuse** when similar rationale applies
- Maintain **audit trail** through draft → proof → pub lifecycle

### Directory Structure

```
resumes/
├── draft/
│   ├── resume-hybrid.md
│   ├── resume-hybrid-feedback.md
│   ├── resume-standard.md
│   ├── resume-standard-feedback.md
│   └── changes/
│       ├── 2026_01_03T14_30_00-change.md
│       └── 2026_01_05T11_45_00-change.md
├── proof/
│   ├── resume-hybrid.md
│   ├── resume-hybrid-feedback.md
│   └── changes/
│       └── 2026_01_06T10_00_00-change.md
├── pub/
│   └── changes/
└── patterns/
    ├── ats-optimization.md
    ├── outcome-framing.md
    └── gap-explanation.md
```

### Change Record Schema

Filename provides ordering (`YYYY_MM_DDTHH_MM_SS-change.md`).
Frontmatter handles references:

```yaml
---
resume: resume-hybrid.md
version: 1.0.0 # version this change applies to
section: "Professional Summary" # or line range, or heading
category: gap-explanation # rationale category
pattern: gap-explanation # null if one-off change
status: applied # proposed | applied | reverted
feedback_ref: "resume-hybrid-feedback.md#engineering-hm-gap-concern" # optional link to feedback
---
```

### Change Record Body

```markdown
# Change: Add timeline gap explanation

## Rationale

See
[Engineering HM feedback](resume-hybrid-feedback.md#engineering-hm-gap-concern) -
timeline gap flagged as blocker.

## Before

> Transitioned from hands-on development to exploring the modern
> development landscape, focusing on AI-augmented workflows.

## After

> Since 2022, developed AI-augmented development methodology through
> independent research and open-source contributions. Built multi-agent
> orchestration systems and spec-driven workflows now shipping in
> production tools.

## Notes

Optional additional context beyond the feedback reference.
```

### Rationale Categories

Tag changes with reusable rationale types:

| Category             | Description                            | Example                                             |
| -------------------- | -------------------------------------- | --------------------------------------------------- |
| `gap-explanation`    | Address employment/timeline gaps       | Add concrete activities for gap period              |
| `ats-optimization`   | Improve ATS parsing/keyword matching   | Remove creative headers, add standard section names |
| `outcome-framing`    | Shift from activity to business impact | "Built X" → "Delivered Y resulting in Z"            |
| `brevity`            | Reduce length for scanning             | Condense 3 bullets to 1                             |
| `expansion`          | Add detail for depth                   | Add metrics, context                                |
| `tone-shift`         | Adjust formality/voice                 | Startup casual → corporate formal                   |
| `audience-targeting` | Customize for specific reader          | Add/remove technical depth                          |
| `persona-feedback`   | Address specific persona critique      | Fix issue raised by Engineering HM review           |

### Collapsing Change Records

Multiple incremental changes can be collapsed into a single record
preserving only the net result.

**Purpose:**

- Refine in steps with ability to rollback or step-around missteps
- Once stable, collapse to a single clean record
- Further refinement picks up from there

**When to collapse:**

- Iterative refinements are stable and working
- Before promoting resume to next stage
- When intermediate steps are no longer useful for rollback

**Collapse workflow:**

1. Identify related change records to collapse (by timestamp range and
   resume/section)
2. Create single new record with current timestamp containing:
   - Original "Before" from earliest record
   - Final "After" from latest record
   - Combined rationale
3. Delete the intermediate records

**Example:**

Before collapse:

- `2026_01_03T14_30_00-change.md`
- `2026_01_04T09_15_22-change.md`
- `2026_01_05T11_45_00-change.md`

After collapse: Single `2026_01_05T16_00_00-change.md` with net change
(original → final)

The intermediate journey is discarded; only the result matters.

### Pattern Library

Reusable patterns in `resumes/patterns/`:

```markdown
# Pattern: Gap Explanation

## When to Apply

- Resume has employment gap > 6 months
- Current explanation is vague or missing
- Reviewer feedback flags the gap as concern

## Approach

1. Replace vague language with specific activities
2. Include concrete deliverables or learning outcomes
3. Connect gap activities to target role relevance
4. Add external validation if available (OSS, consulting, etc.)

## Example Transformations

**Vague:** "Took time to explore new technologies" **Specific:** "Built
[X] using [Y], contributing to [Z] open-source project"

## Trade-offs

- More detail may invite more questions
- Balance specificity with brevity
```

---

## Part 7: Process Documentation

Formalize the workflow for review, iteration, and reuse.

### Documentation Location

```
docs/
├── process/
│   ├── resume-workflow.md       # End-to-end workflow guide
│   ├── persona-review-guide.md  # How to run persona reviews
│   └── transformation-guide.md  # How to create/use transforms
```

### Workflow Documentation Contents

**resume-workflow.md:**

- Overview of draft → proof → pub pipeline
- Frontmatter schema reference
- Git tagging conventions
- When to create new variants vs. modify existing

**persona-review-guide.md:**

- How to invoke each persona review
- Interpreting scores and feedback
- Aggregating multi-persona results
- Iteration protocol (when to re-review)

**transformation-guide.md:**

- Creating transformation records
- Using the pattern library
- Adding new patterns
- Cross-project applicability

### Reuse in Other Projects

The process documentation should be written generically enough to:

- Apply to other document types (cover letters, proposals, etc.)
- Port to different repositories
- Serve as a template for persona-driven review workflows

---

## Decisions Made

| Question                | Decision                             |
| ----------------------- | ------------------------------------ |
| Persona scoring         | Numeric (1-10)                       |
| Feedback location       | Separate files in `resumes/proof/`   |
| Variant relationship    | Hybrid as source of truth            |
| Transformation tracking | Delta records with reusable patterns |

---

## Summary

| Component        | Decision                                                          |
| ---------------- | ----------------------------------------------------------------- |
| Folder structure | `resumes/{draft,proof,pub}/` each with `changes/` subdirectory    |
| Versioning       | YAML frontmatter + git waypoints                                  |
| Personas         | 3 custom: Startup Founder, Engineering HM, Strategic Leader       |
| Scoring          | Numeric (1-10) with separate feedback files                       |
| Variant model    | Hybrid as source of truth, derivation tracked in frontmatter      |
| Change records   | Per-stage `changes/` folders with before/after + rationale        |
| Patterns         | `resumes/patterns/` for reusable transformation patterns          |
| Process docs     | `docs/process/` for workflow, personas, change records            |
| Scope            | Resume files + change records + feedback; rest of docs/ unchanged |
