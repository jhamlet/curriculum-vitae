# Resume Workflow Guide

End-to-end guide for the draft and publish resume pipeline.

---

## Overview

The resume workflow uses a two-stage pipeline that moves documents from
active editing to generated output formats.

```
draft/     -->     pub/
 (edit)          (generate)
```

| Stage   | Purpose                                             | Exit Criteria            |
| ------- | --------------------------------------------------- | ------------------------ |
| `draft` | Active editing, feedback, persona reviews           | Ready for publication    |
| `pub`   | Generated output formats (txt, pdf, html, linkedin) | Tagged, archived via git |

---

## Directory Structure

```
draft/                              # Work-in-progress (markdown source)
├── resume-hybrid.md
├── resume-hybrid-feedback.md       # Aggregated review feedback
├── resume-standard.md
├── resume-standard-feedback.md
└── changes/                        # Change records
    └── YYYY_MM_DDTHH_MM_SS-change.md
pub/                                # Generated output formats
├── resume-hybrid.txt
├── resume-hybrid.pdf
├── resume-hybrid.html
├── resume-hybrid-linkedin.txt      # LinkedIn-optimized text
├── resume-standard.txt
├── resume-standard.pdf
└── resume-standard.html
patterns/                           # Reusable transformation patterns
├── ats-optimization.md
├── gap-explanation.md
└── outcome-framing.md
```

### Naming Conventions

- **Resume source files:** `draft/resume-{variant}.md`
- **Feedback files:** `draft/resume-{variant}-feedback.md`
- **Change records:** `draft/changes/YYYY_MM_DDTHH_MM_SS-change.md` (ISO
  8601, underscores for filesystem compatibility)
- **Generated outputs:** `pub/resume-{variant}.{ext}` where ext is txt,
  pdf, html, or linkedin variant
- **Patterns:** `patterns/{pattern-name}.md` (kebab-case)

---

## Frontmatter Schema

Every resume file requires YAML frontmatter for metadata and tracking.

```yaml
---
title: "Resume - Hybrid Variant"
variant: hybrid # baseline | hybrid | solutions | standard
version: 1.0.0 # semver
status: draft # draft | pub
last_updated: 2026-01-05 # ISO date

# Derivation lineage
base: null # null for source-of-truth (hybrid), variant name for derived

# Target facets
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

# Review tracking
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

### Field Reference

| Field          | Required | Description                                              |
| -------------- | -------- | -------------------------------------------------------- |
| `title`        | Yes      | Human-readable title                                     |
| `variant`      | Yes      | Unique identifier for this resume variant                |
| `version`      | Yes      | Semantic version (increment on significant changes)      |
| `status`       | Yes      | Current pipeline stage                                   |
| `last_updated` | Yes      | Date of last modification                                |
| `base`         | Yes      | Parent variant for derivation tracking (`null` = source) |
| `target`       | No       | Target audience facets                                   |
| `focus`        | No       | Key optimization areas for this variant                  |
| `reviews`      | No       | Persona review tracking                                  |

---

## Git Tagging Conventions

Published resumes are archived with semantic version tags.

### Tag Format

```
resume-{variant}-v{major}.{minor}.{patch}
```

### Examples

```bash
# First published version
git tag resume-hybrid-v1.0.0

# Minor update (improved wording)
git tag resume-hybrid-v1.1.0

# Patch (typo fix)
git tag resume-hybrid-v1.0.1

# Major revision (significant restructure)
git tag resume-hybrid-v2.0.0

# Push tags to remote
git push origin --tags
```

### When to Increment

| Change Type                  | Version Bump |
| ---------------------------- | ------------ |
| Typo fix, formatting         | Patch        |
| New bullet, improved wording | Minor        |
| Restructure, new section     | Major        |
| New variant from scratch     | 1.0.0        |

---

## Publication Criteria

### Draft to Pub

Generate output formats to `pub/` when:

- [ ] Content is complete (no placeholder text)
- [ ] Frontmatter is fully populated
- [ ] Self-review complete (read aloud, check for errors)
- [ ] All persona reviews completed (scores recorded)
- [ ] No persona "rejects" (score < 4) outstanding
- [ ] High-priority feedback addressed (2+ personas agree)
- [ ] Conflicting feedback investigated and resolved
- [ ] Final proofread complete

**Process:**

1. Update frontmatter in draft: `status: pub`, bump version if needed
2. Generate output formats to `pub/` (txt, pdf, html, linkedin)
3. Commit with message: `pub(resume): publish {variant} v{version}`
4. Create git tag: `git tag resume-{variant}-v{version}`

---

## Creating New Variants vs. Modifying Existing

### Create a New Variant When

- Targeting a fundamentally different audience
- Testing a significantly different positioning strategy
- Need to preserve an existing variant unchanged
- Experimenting without risk to a working version

### Modify Existing When

- Iterating on feedback within same audience
- Fixing errors or improving clarity
- Updating for new experience or skills
- Routine maintenance and polish

### Derivation Model

The `hybrid` variant is the source of truth. Other variants derive from
it:

```
hybrid (base: null)
├── standard (base: hybrid)  # ATS-optimized format
├── solutions (base: hybrid) # Solutions-oriented framing
└── baseline (base: hybrid)  # Reference version
```

When `hybrid` changes, consider whether derived variants need updates.
Track significant derivation changes in change records.

---

## Workflow Summary

1. **Draft:** Edit freely, experiment, run persona reviews, collect
   feedback, address concerns
2. **Pub:** Generate output formats (txt, pdf, html, linkedin), tag, use
   for applications
3. **Archive:** Previous versions preserved via git tags

Change records in `draft/changes/` track modifications during editing.
Collapse incremental changes before publication.

---

## Related Documentation

- [Persona Review Guide](persona-review-guide.md) - Running persona
  reviews
- [Change Record Guide](change-record-guide.md) - Creating and managing
  change records
- [Author Profile](author-profile.md) - Target market and positioning
  context
- Persona definitions: `prompts/personas/`
- Pattern library: `patterns/`
