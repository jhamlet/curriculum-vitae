# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working
with code in this repository.

## Co-Project

This project is related to another folder I am using to track my work on
finding a job: ~/Dropbox/vaults/life/projects/2026-01-income-search/

## Resume Workflow

This project uses a structured resume development workflow with two
stages:

| Stage     | Location | Purpose                                     |
| --------- | -------- | ------------------------------------------- |
| **draft** | `draft/` | Active editing, work-in-progress            |
| **pub**   | `pub/`   | Generated output (txt, pdf, html, linkedin) |

### Key Locations

- **Resumes:** `draft/resume-{variant}.md`
- **Feedback:** `draft/resume-{variant}-feedback.md`
- **Change Records:** `draft/changes/YYYY_MM_DDTHH_MM_SS-change.md`
- **Patterns:** `patterns/` (reusable transformation patterns)
- **Personas:** `docs/personas/` (reviewer persona prompts)

### Process Documentation

See `docs/process/` for detailed guides:

- `author-profile.md` - Context, objectives, audience, constraints
- `author-profile-hamletink.md` - Contracting profile (extends base)
- `resume-workflow.md` - End-to-end draft → pub pipeline
- `persona-review-guide.md` - How to run persona reviews
- `change-record-guide.md` - Creating and collapsing change records

### Identity Model

| Identity       | Email                | Use Case                          |
| -------------- | -------------------- | --------------------------------- |
| **Hamletzone** | jerry@hamletzone.com | Employment, LinkedIn, traditional |
| **Hamletink**  | jerry@hamletink.com  | Contracting, fractional, advisory |

### Variant Model

- **hybrid** is the source-of-truth (base: null)
- Other variants (baseline, solutions, standard) derive from hybrid
- Changes to hybrid should be considered for propagation to derived
  variants

### Research & Strategy

- `docs/research/` - Market research, comparatives
- `docs/guides/` - Positioning strategy, LinkedIn optimization
- `docs/analysis/` - Resume-to-market fit analysis
