# Persona Review Guide

Guide for executing persona-based resume reviews and incorporating
feedback.

---

## Overview

Persona reviews simulate how different hiring decision-makers evaluate
your resume. Each persona represents a distinct reader type with unique
priorities, time budgets, and evaluation criteria.

---

## Available Personas

| Persona          | File                                | Time Budget | Engagement Type  |
| ---------------- | ----------------------------------- | ----------- | ---------------- |
| Startup Founder  | `docs/personas/startup-founder.md`  | 3-5 min     | Contract-to-hire |
| Engineering HM   | `docs/personas/engineering-hm.md`   | 2-4 min     | Full-time        |
| Strategic Leader | `docs/personas/strategic-leader.md` | 1-2 min     | Contract-to-hire |

### Persona Summaries

**Alex (Startup Founder)**

- Series A startup, 20-50 employees
- Looking for autonomous contributors who can ship without hand-holding
- Values breadth, adaptability, startup culture fit
- Makes own hiring decisions

**Morgan (Engineering Hiring Manager)**

- Mid-stage company, 50-200 employees
- Looking for technical depth and quantified achievements
- Values mentorship evidence and career progression
- Uses structured evaluation process

**Jordan (Strategic Leader)**

- Growth-stage company, 100-500 employees
- Looking for cross-functional, organizational-level impact
- Values business outcome framing and executive communication
- Scans quickly, delegates detailed review

---

## Running a Persona Review

### Step 1: Prepare the Context

Load the persona prompt and resume for review:

```
Files to include in context:
- docs/personas/{persona}.md
- draft/resume-{variant}.md
- docs/process/author-profile.md (for feedback filtering)
```

### Step 2: Invoke the Persona

Use Claude or another LLM with a prompt structure like:

```
You are reviewing a resume as the persona defined in the attached
persona file. Follow the review instructions and output format
specified in that file.

Evaluate the resume against your persona's criteria, scoring on
a 1-10 scale. Reference the author profile to filter feedback
for relevance.

Resume to review: [attach resume file]
```

### Step 3: Execute the Review

The persona will produce structured feedback following the output format
in their persona definition. Each persona has a distinct output
template.

### Step 4: Save the Feedback

Append feedback to the resume's feedback file:

```
draft/resume-{variant}-feedback.md
```

Add a heading anchor for reference in change records:

```markdown
## Engineering HM Review (Morgan) {#engineering-hm-YYYY-MM-DD}

**Date:** 2026-01-05 **Resume:** hybrid **Score:** 7/10

[... structured feedback ...]
```

---

## Interpreting Scores

All personas use a 1-10 scale with consistent interpretation:

| Score | Interpretation | Action                               |
| ----- | -------------- | ------------------------------------ |
| 9-10  | Strong yes     | Fast-track, minimal changes needed   |
| 7-8   | Yes            | Move forward, address minor concerns |
| 5-6   | Maybe          | Significant work needed, iterate     |
| 3-4   | Lean no        | Major concerns must be addressed     |
| 1-2   | No             | Fundamental misalignment             |

### Score Thresholds

- **Score >= 7:** Safe to proceed to next stage
- **Score 5-6:** Iterate and re-review before promotion
- **Score < 5:** Must address before promotion (blocker)

---

## Scoring Factors by Persona

### Startup Founder (Alex)

| Factor               | Weight |
| -------------------- | ------ |
| Autonomy signal      | 25%    |
| Breadth/adaptability | 25%    |
| Culture fit          | 20%    |
| Technical relevance  | 15%    |
| Growth potential     | 15%    |

### Engineering HM (Morgan)

| Factor                | Weight |
| --------------------- | ------ |
| Technical relevance   | 30%    |
| Impact evidence       | 25%    |
| Leadership/mentorship | 20%    |
| Career trajectory     | 15%    |
| Communication clarity | 10%    |

### Strategic Leader (Jordan)

| Factor                | Weight |
| --------------------- | ------ |
| Strategic signal      | 30%    |
| Cross-functional      | 25%    |
| Outcome orientation   | 25%    |
| Communication quality | 15%    |
| Current relevance     | 5%     |

---

## Aggregating Multi-Persona Results

After running all persona reviews, aggregate findings:

### Priority Matrix

| Agreement Level      | Priority | Action                          |
| -------------------- | -------- | ------------------------------- |
| 3/3 personas agree   | Critical | Address immediately             |
| 2/3 personas agree   | High     | Address before promotion        |
| 1/3 persona concerns | Medium   | Evaluate against author profile |
| Personas conflict    | Review   | Investigate specific concern    |

### Aggregation Template

Add a summary section to the feedback file:

```markdown
## Review Aggregation

**Date:** 2026-01-05 **Variant:** hybrid

### Scores

| Persona          | Score | Verdict |
| ---------------- | ----- | ------- |
| Startup Founder  | 7/10  | Yes     |
| Engineering HM   | 6/10  | Maybe   |
| Strategic Leader | 8/10  | Strong  |

### Consensus Issues (2+ personas)

- [Issue]: [Which personas flagged, recommended action]
- [Issue]: [Which personas flagged, recommended action]

### Conflicting Feedback

- [Topic]: Alex says X, Morgan says Y
  - Resolution: [Decision and rationale]

### Blocking Issues

- [Any score < 5 items that must be resolved]

### Next Steps

- [ ] [Action item]
- [ ] [Action item]
```

---

## Iteration Protocol

### When to Re-Review

Re-run a persona review when:

- Score was < 7 and changes were made to address concerns
- Major structural changes since last review
- Publishing to pub/ (confirmation review)
- Adding new content that affects persona's evaluation areas

### When NOT to Re-Review

Skip re-review when:

- Changes were cosmetic (typos, formatting)
- Changes addressed a different persona's concerns
- Score was already >= 8 and changes were minor

### Re-Review Process

1. Update the resume with changes
2. Create change records documenting what was modified
3. Re-run the relevant persona review
4. Append new review to feedback file with updated date
5. Update the aggregation summary

---

## Storing Feedback

### File Location

Feedback files live alongside resumes in the draft directory. Reviews
happen in draft/, then final versions are generated to pub/:

```
draft/
├── resume-hybrid.md
├── resume-hybrid-feedback.md
├── resume-baseline.md
├── resume-baseline-feedback.md
└── changes/
    └── [change records]
pub/
├── resume-hybrid.md
└── resume-baseline.md
```

### Feedback File Structure

```markdown
# Resume Feedback: Hybrid Variant

Aggregated feedback from persona reviews.

---

## Review Aggregation

[Most recent aggregation summary]

---

## Startup Founder Review (Alex) {#startup-founder-2026-01-05}

[Review content]

---

## Engineering HM Review (Morgan) {#engineering-hm-2026-01-05}

[Review content]

---

## Strategic Leader Review (Jordan) {#strategic-leader-2026-01-05}

[Review content]
```

### Linking from Change Records

Change records can reference specific feedback using anchors:

```yaml
feedback_ref: "resume-hybrid-feedback.md#engineering-hm-2026-01-05"
```

This creates traceability from change to the feedback that prompted it.

---

## Filtering Feedback

Not all feedback is actionable or relevant. Use the author profile
(`docs/process/author-profile.md`) to filter:

### Keep Feedback That

- Aligns with target audience and roles
- Is actionable given actual experience
- Improves positioning for stated goals
- Addresses genuine blind spots

### Discard Feedback That

- Optimizes for roles outside target market
- Requires fabrication or misrepresentation
- Conflicts with authentic career narrative
- Would dilute core positioning

### Document Filtering Decisions

When discarding feedback, note why in the aggregation:

```markdown
### Filtered Feedback

- "Add enterprise certifications" (Morgan) - Not targeting enterprise
  roles
- "Remove startup language" (Morgan) - Core audience is startups
```

---

## Related Documentation

- [Resume Workflow Guide](resume-workflow.md) - Overall pipeline
- [Change Record Guide](change-record-guide.md) - Tracking changes from
  feedback
- [Author Profile](author-profile.md) - Filtering context
- Persona definitions: `docs/personas/`
