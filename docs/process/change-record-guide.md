# Change Record Guide

Guide for creating, managing, and collapsing change records (delta
documentation).

---

## Overview

Change records track modifications to resumes with structured
before/after documentation and rationale. They provide:

- **Traceability:** What changed and why
- **Reversibility:** Ability to roll back specific changes
- **Pattern extraction:** Identify reusable transformation approaches
- **Audit trail:** History through the draft stage

---

## Directory Structure

Change records exist only in the draft stage:

```
draft/
└── changes/
    ├── 2026_01_03T14_30_00-change.md
    └── 2026_01_05T11_45_00-change.md

patterns/
├── ats-optimization.md
├── gap-explanation.md
└── outcome-framing.md
```

---

## Creating Change Records

### Filename Format

```
YYYY_MM_DDTHH_MM_SS-change.md
```

- ISO 8601 timestamp with underscores (filesystem compatible)
- Provides natural chronological ordering
- Example: `2026_01_05T14_30_00-change.md`

### When to Create a Change Record

Create a record when:

- Making a significant content change (not typos)
- Addressing specific persona feedback
- Applying a pattern from the library
- Making a change you might want to reverse

Skip records for:

- Typo fixes
- Whitespace/formatting adjustments
- Frontmatter-only updates

---

## Change Record Schema

### Frontmatter

```yaml
---
resume: resume-hybrid.md # Target resume file
version: 1.0.0 # Version this change applies to
section: "Professional Summary" # Section, heading, or line range
category: gap-explanation # Rationale category
pattern: gap-explanation # Pattern name or null if one-off
status: applied # proposed | applied | reverted
feedback_ref: "resume-hybrid-feedback.md#engineering-hm-gap-concern" # Optional
---
```

### Frontmatter Field Reference

| Field          | Required | Description                                    |
| -------------- | -------- | ---------------------------------------------- |
| `resume`       | Yes      | Target resume filename                         |
| `version`      | Yes      | Resume version this change applies to          |
| `section`      | Yes      | Location of change (heading, line range, etc.) |
| `category`     | Yes      | Rationale category (see reference below)       |
| `pattern`      | No       | Pattern from library, `null` if unique change  |
| `status`       | Yes      | Current state: proposed, applied, or reverted  |
| `feedback_ref` | No       | Link to feedback that prompted this change     |

---

## Change Record Body

### Structure

```markdown
# Change: [Brief description]

## Rationale

[Why this change is being made. Reference feedback if applicable.]

## Before

> [Original text, quoted]

## After

> [New text, quoted]

## Notes

[Optional additional context, trade-offs, alternatives considered]
```

### Example

```markdown
# Change: Add timeline gap explanation

## Rationale

See
[Engineering HM feedback](resume-hybrid-feedback.md#engineering-hm-2026-01-05) -
timeline gap flagged as concern affecting score.

## Before

> Transitioned from hands-on development to exploring the modern
> development landscape, focusing on AI-augmented workflows.

## After

> Since 2022, developed AI-augmented development methodology through
> independent research and open-source contributions. Built multi-agent
> orchestration systems and spec-driven workflows now shipping in
> production tools.

## Notes

Trade-off: More specific claims invite verification questions. Balanced
with concrete, verifiable examples.
```

---

## Rationale Categories Reference

Tag changes with standardized rationale types:

| Category             | When to Use                               | Example                                        |
| -------------------- | ----------------------------------------- | ---------------------------------------------- |
| `gap-explanation`    | Addressing employment/timeline gaps       | Add concrete activities for gap period         |
| `ats-optimization`   | Improving ATS parsing/keyword matching    | Replace creative headers with standard ones    |
| `outcome-framing`    | Shifting from activity to business impact | "Built X" becomes "Delivered Y resulting in Z" |
| `brevity`            | Reducing length for faster scanning       | Condense 3 bullets to 1                        |
| `expansion`          | Adding detail for depth                   | Add metrics, context, specifics                |
| `tone-shift`         | Adjusting formality/voice                 | Startup casual to corporate formal             |
| `audience-targeting` | Customizing for specific reader type      | Adjust technical depth for audience            |
| `persona-feedback`   | Addressing specific persona critique      | Fix issue raised in review                     |
| `structural`         | Reorganizing sections/flow                | Reorder bullet points by impact                |
| `correction`         | Fixing factual errors                     | Correct dates, titles, company names           |

---

## Using the Pattern Library

Patterns are reusable transformation templates in `patterns/`.

### When to Use a Pattern

- The change matches a documented pattern's "When to Apply" criteria
- You want consistency with previous similar transformations
- The pattern provides guidance beyond the immediate change

### Referencing Patterns

In the change record frontmatter:

```yaml
pattern: gap-explanation
```

### Pattern File Structure

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
- Ensure claims are verifiable
```

### Creating New Patterns

When you find yourself applying the same type of change repeatedly:

1. Create a new file in `patterns/`
2. Document when to apply, approach, and examples
3. Reference the pattern in future change records

---

## Collapsing Change Records

Multiple incremental changes can be collapsed into a single record
preserving only the net result.

### Purpose

- Refine in steps with ability to rollback
- Collapse once stable for cleaner history
- Further refinement picks up from the collapsed state

### When to Collapse

- Iterative refinements are stable and working
- When intermediate steps are no longer useful for rollback
- Cleaning up history for clarity

### Collapse Workflow

1. **Identify related records** by timestamp range, resume, and section
2. **Verify stability** - ensure the final state is the desired one
3. **Create new collapsed record** with current timestamp containing:
   - Original "Before" from earliest record
   - Final "After" from latest record
   - Combined rationale
   - List of collapsed records in Notes
4. **Delete intermediate records** (or move to an archive folder)
5. **Commit the collapse** with descriptive message

### Collapse Example

**Before collapse:**

```
changes/
├── 2026_01_03T14_30_00-change.md  # First attempt
├── 2026_01_04T09_15_22-change.md  # Refinement
└── 2026_01_05T11_45_00-change.md  # Final polish
```

**After collapse:**

```
changes/
└── 2026_01_05T16_00_00-change.md  # Net change (original -> final)
```

**Collapsed record Notes section:**

```markdown
## Notes

Collapsed from intermediate changes:

- 2026_01_03T14_30_00-change.md
- 2026_01_04T09_15_22-change.md
- 2026_01_05T11_45_00-change.md

Intermediate journey discarded; only net result preserved.
```

---

## Linking to Feedback Files

Change records can reference the specific feedback that prompted them.

### Feedback Reference Format

```yaml
feedback_ref: "resume-hybrid-feedback.md#engineering-hm-2026-01-05"
```

Components:

- **File:** `resume-hybrid-feedback.md` (same directory or relative
  path)
- **Anchor:** `#engineering-hm-2026-01-05` (heading ID in feedback file)

### Creating Linkable Anchors

In feedback files, add anchor IDs to review headings:

```markdown
## Engineering HM Review (Morgan) {#engineering-hm-2026-01-05}
```

### Benefits of Linking

- **Traceability:** Why was this change made?
- **Context:** What was the specific concern?
- **Validation:** Did the change address the feedback?

---

## Status Values

Track change record state:

| Status     | Meaning                             |
| ---------- | ----------------------------------- |
| `proposed` | Change drafted but not yet applied  |
| `applied`  | Change has been made to the resume  |
| `reverted` | Change was applied then rolled back |

### Status Transitions

```
proposed -> applied (change made)
applied -> reverted (change undone)
proposed -> (deleted) (change abandoned)
```

---

## Best Practices

### Do

- Create records for significant changes
- Use consistent category tagging
- Link to feedback when applicable
- Collapse when history becomes cluttered
- Document trade-offs in Notes

### Avoid

- Recording every minor edit
- Vague rationale ("made it better")
- Orphaned records (no clear purpose)
- Letting records accumulate indefinitely

---

## Related Documentation

- [Resume Workflow Guide](resume-workflow.md) - Overall pipeline
- [Persona Review Guide](persona-review-guide.md) - Running reviews
- Pattern library: `patterns/`
