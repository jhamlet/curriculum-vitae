---
description: Review resume with persona (alex, morgan, jordan, or all)
argument-hint: [persona] [variant]
---

# Resume Review Command

**Arguments:** $ARGUMENTS

- **Persona:** `$1` (default: `all`)
- **Variant:** `$2` (default: `all`)

## Instructions

### 1. Validate and Normalize Arguments

**Persona mapping:**

| Input              | Persona File        | Name   |
| ------------------ | ------------------- | ------ |
| `alex`             | startup-founder.md  | Alex   |
| `startup-founder`  | startup-founder.md  | Alex   |
| `morgan`           | engineering-hm.md   | Morgan |
| `engineering-hm`   | engineering-hm.md   | Morgan |
| `jordan`           | strategic-leader.md | Jordan |
| `strategic-leader` | strategic-leader.md | Jordan |
| `all` or empty     | All 3 personas      | —      |

**Valid variants:** `hybrid`, `baseline`, `solutions`, `standard`, `all`
(empty defaults to `all`)

### 2. Confirm if Running Multiple

If persona is `all` OR variant is `all`, use AskUserQuestion to confirm:

> "Running [persona(s)] review(s) on [variant(s)]. Proceed?"

### 3. Launch Review Agents IN PARALLEL

For each persona × variant combination, spawn a Task agent with
`subagent_type: general-purpose`:

**Agent prompt template:**

```
You are reviewing a resume as a specific persona. Follow these instructions exactly.

## Your Persona
Read and adopt: docs/personas/{persona}.md

## Resume to Review
Read: draft/resume-{variant}.md

## Filtering Context
Read: docs/process/author-profile.md

## Instructions
1. Adopt the persona's mindset and evaluation criteria completely
2. Apply the persona's time budget constraint mentally
3. Use the persona's scoring rubric and factors
4. Follow the persona's output format EXACTLY as specified in the persona file
5. Return ONLY the structured feedback in the persona's output format

Do not include any preamble or explanation outside the output format.
```

**Example for `all` personas on `hybrid`:**

- Agent 1: Alex reviews hybrid (parallel)
- Agent 2: Morgan reviews hybrid (parallel)
- Agent 3: Jordan reviews hybrid (parallel)

### 4. Collect Agent Results

Wait for all review agents to complete, then for each review:

- Append to: `draft/resume-{variant}-feedback.md`
- Use heading format:
  `## {Persona Title} Review ({Name}) {#persona-YYYY-MM-DD}`

Example heading:
`## Startup Founder Review (Alex) {#startup-founder-2026-01-05}`

### 5. Launch Aggregation Agent

After all reviews are saved, spawn a follow-up Task agent to aggregate:

**Aggregation agent prompt:**

```
Read the feedback file: draft/resume-{variant}-feedback.md

Update or create the "Review Aggregation" section at the TOP of the file
(after the title). Follow this format from docs/process/persona-review-guide.md:

## Review Aggregation

**Date:** YYYY-MM-DD **Variant:** {variant}

### Scores

| Persona          | Score | Verdict |
| ---------------- | ----- | ------- |
| Startup Founder  | X/10  | Yes/No  |
| Engineering HM   | X/10  | Yes/No  |
| Strategic Leader | X/10  | Yes/No  |

### Consensus Issues (2+ personas)

- [Issue]: [Which personas flagged, recommended action]

### Conflicting Feedback

- [Topic]: [Persona] says X, [Persona] says Y
  - Resolution: [Decision and rationale]

### Blocking Issues

- [Any score < 5 items that must be resolved]

### Next Steps

- [ ] [Action item]
- [ ] [Action item]
```

## File Locations

- Personas: `docs/personas/`
- Resumes: `draft/resume-{variant}.md`
- Feedback: `draft/resume-{variant}-feedback.md`
- Author profile: `docs/process/author-profile.md`
- Review guide: `docs/process/persona-review-guide.md`
