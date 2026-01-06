# Fractional.io Profile Publish Plan

**Status:** Ready **Created:** 2026-01-06

## Task

Create Fractional.io profile content. Different from LinkedIn - targets
founders seeking fractional leadership, not recruiters.

## Why Special Case Needed

| Platform      | Audience                  | Positioning                      |
| ------------- | ------------------------- | -------------------------------- |
| LinkedIn      | Recruiters, hiring mgrs   | Job-seeker, keyword optimization |
| Fractional.io | Founders seeking advisors | Advisory/leadership, outcomes    |

## Deliverables

1. `docs/research/fractional-profile-optimization.md` - Research
   synthesis
2. `pub/resume-fractional.md` - Transformed profile content

## Execution Steps

### Step 1: Create Research Doc

Create `docs/research/fractional-profile-optimization.md` with:

- Platform overview (Fractional.io: director+ community, Softr-based,
  paid for visibility)
- Profile sections: Headline, Bio, Expertise, Industries, Availability,
  Rate
- Positioning shift: "I help companies achieve Y" not "I can do X"
- Trust signals: outcomes > credentials, founder testimonials >
  colleague endorsements
- Stats: 71% CEOs vet public footprint, 38% higher fees for visible
  expertise

### Step 2: Transform Content

Create `pub/resume-fractional.md` by transforming from
`draft/resume-hybrid.md`:

**Headline transformation:**

- Before: "Principal UI Engineer | AI/ML Specialist | Ex-Meta, Netflix"
- After: "Fractional Tech Leadership | AI Integration & Product Velocity
  for Series A-B Startups"

**Bio transformation:**

- Before: Career summary, years of experience
- After: Problems solved, outcomes delivered, engagement model
  (hrs/week)

**Expertise transformation:**

- Before: "React, TypeScript, GraphQL, Node.js"
- After: "AI-powered product development, Technical team scaling,
  MVP→production architecture"

**Rate transformation:**

- Before: $175-200/hr
- After: Monthly retainer ($5k+/month)

### Step 3: Format

```bash
npx prettier --write docs/research/fractional-profile-optimization.md pub/resume-fractional.md
```

## Reference Files

- `docs/research/linkedin-profile-optimization.md` - Pattern reference
- `docs/process/author-profile.md` - Rate and positioning info
- `draft/resume-hybrid.md` - Source content

## Research Source (from life vault)

Full research available at:
`~/Dropbox/vaults/life/projects/2026-01-income-search/fractional-profile-research.md`
