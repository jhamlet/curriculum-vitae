<objective>
Compare three resume variations against current market expectations for a senior/principal Creative Solutions Engineer role. Identify gaps and provide actionable improvements.

You are acting as a professional career coach and advisor. Your goal is to find the best way to promote the candidate's capabilities aligned with market needs and industry expectations.
</objective>

<context>
The candidate (Jerry Hamlet) has created three resume variations targeting AI-augmented development and solutions architecture roles:

Resume files to analyze:

- `./resume-solutions.md` - Solution-oriented (outcomes-first, value proposition lead)
- `./resume-standard.md` - Standard/terse (ATS-friendly, traditional format)
- `./resume-hybrid.md` - Hybrid (solution-leaning with traditional structure)

Existing research to leverage:

- `./docs/research/market-demand-analysis.md` - Market research on demand
- `./docs/guides/positioning-strategy.md` - Positioning strategy guide

Target positioning: Senior/Principal level, AI-augmented problem solver, $175-200/hr range, Series A-B startups and enterprise innovation teams.
</context>

<research_phase>
Thoroughly analyze market expectations using multiple approaches:

1. **Local Research First**: Read and synthesize existing market research documents
2. **Web Research**: If local research is insufficient, conduct web searches for:
   - Current job postings for "Solutions Architect", "Principal Engineer", "Staff Engineer" with AI/ML focus
   - What hiring managers look for in senior technical candidates (2024-2025)
   - Resume trends for AI-augmented development roles
   - Skills and qualifications in demand for solution-focused engineering roles

3. **Agent Strategy**: Use researcher agents to:
   - Save individual research findings to `./docs/research/market-comparison-research.md`
   - Have follow-up agent(s) synthesize findings into actionable insights
     </research_phase>

<analysis_requirements>
Identify 8-10 "market questions" - the key things hiring managers and recruiters look for when evaluating candidates at this level. Examples of question categories:

- Technical depth and breadth
- Leadership and influence
- Business impact and outcomes
- AI/ML proficiency evidence
- Communication and collaboration
- Problem-solving approach
- Culture fit signals
- Growth trajectory

For each market question:

1. Define what the market is looking for (with evidence from research)
2. Evaluate how each of the three resumes addresses (or fails to address) this question
3. Rate coverage: ✅ Strong | ⚠️ Partial | ❌ Missing
4. Provide specific, actionable recommendations if gaps exist
   </analysis_requirements>

<output>
Create a structured markdown document saved to: `./docs/analysis/resume-market-fit.md`

Structure:

```markdown
# Resume to Market Fit Analysis

## Executive Summary

[2-3 paragraph overview of findings]

## Market Questions Analysis

### Question 1: [Question Title]

**What the market looks for:** [Description with evidence]

| Resume    | Coverage | Assessment         |
| --------- | -------- | ------------------ |
| Solutions | ✅/⚠️/❌ | [Brief assessment] |
| Standard  | ✅/⚠️/❌ | [Brief assessment] |
| Hybrid    | ✅/⚠️/❌ | [Brief assessment] |

**Recommendations:** [Specific improvements if needed]

[Repeat for all 8-10 questions]

## Resume-Specific Action Items

### resume-solutions.md

- [ ] [Actionable item 1]
- [ ] [Actionable item 2]

### resume-standard.md

- [ ] [Actionable item 1]
- [ ] [Actionable item 2]

### resume-hybrid.md

- [ ] [Actionable item 1]
- [ ] [Actionable item 2]

## Priority Recommendations

[Top 3-5 changes that would have the biggest impact across all resumes]
```

</output>

<verification>
Before completing, verify:
- [ ] All three resume files have been read and analyzed
- [ ] Existing market research documents have been incorporated
- [ ] 8-10 distinct market questions have been identified with evidence
- [ ] Each resume has been evaluated against each question
- [ ] Recommendations are specific, actionable, and prioritized
- [ ] Output file is saved to correct location
- [ ] Format with prettier after saving
</verification>

<success_criteria>

- Analysis identifies genuine gaps, not just generic advice
- Recommendations are specific enough to implement (e.g., "Add a bullet about X to the Y section" not "improve technical depth")
- Market questions are grounded in actual market research, not assumptions
- Each resume variation's strengths and weaknesses relative to its purpose are acknowledged
  </success_criteria>
