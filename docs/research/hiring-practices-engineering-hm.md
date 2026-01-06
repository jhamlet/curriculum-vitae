# Engineering Hiring Manager Practices Research

**Research Date:** 2026-01-05 **Subject:** How Engineering Managers and
Directors at mid-stage companies (50-200 employees) evaluate senior/lead
engineer candidates **Sources:** Will Larson (lethain.com), Gergely
Orosz (Pragmatic Engineer), Aline Lerner (interviewing.io), industry
research, engineering leadership blogs

---

## Key Findings

1. **Resume screening time is brutally short.** Eye-tracking research
   shows 7-11 seconds for initial screening. The "6-second resume" myth
   is approximately accurate. Engineering managers who inherit
   candidates from recruiters may spend 30-60 seconds before deciding on
   a phone screen.

2. **Technical depth beats breadth for IC roles; breadth matters more
   for leadership.** Senior engineers need demonstrable depth in at
   least one area. Staff+ and management candidates need breadth to
   operate across domains and guide teams.

3. **Employment gaps are less disqualifying than unexplained patterns.**
   Modern hiring managers increasingly accept gaps. What matters is the
   narrative around career choices. Multiple short stints without
   explanation is the real red flag.

4. **Metrics that matter are outcome-focused, not activity-focused.**
   "Led team of 8" matters less than "Reduced p99 latency by 40%."
   Business impact trumps team size.

5. **Mentorship evidence is evaluated through demonstration, not
   description.** Will Larson recommends having candidates actually
   mentor someone during the interview process. Claims about mentorship
   on resumes carry less weight.

6. **Contract vs full-time bias exists but is manageable.** Contractors
   are sometimes perceived as less committed, but strong deliverables
   and long engagements counter this. The key is framing: "Independent
   Consultant" outperforms "Freelancer."

---

## Resume Screening Process

### Time Budget Reality

| Screening Phase       | Time Spent       | What Gets Attention          |
| --------------------- | ---------------- | ---------------------------- |
| Initial ATS filter    | 0 seconds (auto) | Keywords, job titles         |
| Recruiter first pass  | 7-15 seconds     | Company names, years, titles |
| Hiring manager review | 30-90 seconds    | Recent role, impact metrics  |
| Shortlist deep review | 3-5 minutes      | Full work history, red flags |

**Source:**
[Ladders Eye-Tracking Study (2018)](https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/541582/)
reported 7.4 seconds average. More recent studies suggest 11.2 seconds,
but this is still milliseconds per bullet point.

### What Gets Looked at First

According to eye-tracking and hiring manager interviews:

1. **Current/most recent job title and company** (50%+ of scan time)
2. **Years of experience in role type** (engineering vs management)
3. **Recognizable company names** (brand recognition creates shortcuts)
4. **Skills section keywords** (ATS matching)
5. **Education** (decreasing importance for senior roles)

**Practical implication:** The first 3-4 lines of your resume carry
disproportionate weight. Front-load the most important information.

> "There are two things that all recruiters and hiring managers want to
> know immediately: your years of engineering experience and years of
> management experience." — Ex-Google recruiter, via
> [IGotAnOffer](https://igotanoffer.com/blogs/tech/engineering-manager-resume)

### Filter Criteria (Pass/Fail)

**Automatic rejection triggers:**

- Missing keywords that match job requirements
- Obvious mismatch in experience level
- Formatting that breaks ATS parsing
- Typos in job title or company names

**Moves to "maybe" pile:**

- Sufficient experience but unclear impact
- Right skills but unclear relevance to role
- Strong background but non-obvious fit

**Moves to "yes" pile:**

- Clear match to requirements + quantified impact
- Recognizable companies + relevant progression
- Evidence of scope matching or exceeding the role

---

## Technical Assessment

### Depth vs Breadth Evaluation

**For Senior IC roles (L5-L6 equivalent):**

Hiring managers prioritize depth. They want to see:

- Expertise in technologies relevant to the role
- Evidence of solving hard problems in a specific domain
- Architectural thinking within that domain
- Production experience (shipping and maintaining systems)

> "It is important to go deep in at least one area, and it is almost
> always better to hire people who have a solid depth of experience in
> the tools and technology they are using." —
> [ACM Queue: Breadth and Depth](https://queue.acm.org/detail.cfm?id=3138817)

**For Staff+ and Leadership roles:**

Breadth becomes more important:

- Can they operate across multiple technical domains?
- Do they understand how systems interact?
- Can they guide decisions outside their expertise?

> "A senior engineer's skill set is about depth in their specialization,
> combined with enough breadth to make sound technical decisions for
> their project." —
> [DistantJob](https://distantjob.com/blog/staff-engineer-vs-senior-engineer/)

### Will Larson's Staff+ Interview Problem

From [lethain.com](https://lethain.com/staff-plus-interview-process/):

> "Many interview processes look at Staff-plus engineers as Senior
> engineers who are a bit better at everything - a bit faster, clearer
> in communication, and more nuanced in architecture discussions. This
> usually causes Staff-plus engineers to perform poorly on these loops."

**The implication:** Staff engineers often code less than Senior
engineers and may be slower at rote programming tasks. Effective
evaluation focuses on judgment, mentorship, and architectural thinking
rather than coding speed.

### How Technical Depth is Assessed from a Resume

Engineering managers infer technical depth from:

1. **Scope of systems worked on** (scale metrics: users, QPS, data
   volume)
2. **Duration in a technical domain** (depth requires time)
3. **Specificity of descriptions** (vague = shallow)
4. **Trade-off language** ("chose X because Y, accepting Z")
5. **Production evidence** (mentions of oncall, incidents, scaling)

**Red flags for technical depth:**

- Listing 30+ technologies with no depth indicators
- Generic descriptions that could apply to any engineer
- No mention of architectural decisions or trade-offs
- Heavy use of buzzwords without substance

---

## Impact & Metrics

### What Kinds of Quantified Achievements Actually Matter

**Tier 1: Business outcome metrics**

- Revenue impact: "Increased conversion by 15%, adding $2M ARR"
- Cost reduction: "Reduced infrastructure spend by 40%"
- Customer impact: "Decreased customer-reported bugs by 60%"

**Tier 2: System performance metrics**

- Reliability: "Improved uptime from 99.5% to 99.95%"
- Performance: "Reduced p99 latency from 800ms to 120ms"
- Scale: "Grew system to handle 10x traffic without architecture change"

**Tier 3: Team/process metrics**

- Velocity: "Increased deployment frequency from weekly to daily"
- Quality: "Reduced defect escape rate by 50%"
- Growth: "Mentored 3 engineers to promotion"

**Tier 4: Activity metrics (least valuable)**

- Team size: "Managed team of 8" (less impactful alone)
- Project count: "Delivered 5 projects" (what was the outcome?)
- Technology breadth: "Used 12 frameworks" (so what?)

> "Use numbers to clearly demonstrate the impact their actions had.
> Always use at least one metric per achievement." —
> [IGotAnOffer Engineering Manager Resume Guide](https://igotanoffer.com/blogs/tech/engineering-manager-resume)

### How to Quantify When You Don't Have Exact Numbers

From
[Resume Worded](https://resumeworded.com/how-to-quantify-resume-key-advice):

> "If you don't have exact figures but know you made a positive impact,
> give a conservative estimate. For instance, 'helped reduce code
> redundancies by approximately 25%.'"

**Acceptable approaches:**

- Use ranges: "Reduced costs by 30-40%"
- Use approximations: "Approximately 50% faster"
- Use comparisons: "2x improvement over previous system"
- Use team consensus: "Estimated to save 10 hours/week per engineer"

### Metrics That Backfire

- Numbers without context ("Wrote 50,000 lines of code")
- Metrics that seem inflated ("Increased efficiency by 10,000%")
- Activity metrics positioned as achievements ("Attended 200 meetings")
- Team metrics claimed as individual ("My team shipped...")

---

## Career Trajectory Assessment

### How Hiring Managers Evaluate Progression

**Positive progression signals:**

- Increasing scope of responsibility over time
- Movement from individual work to team-level impact
- Taking on harder problems or larger systems
- Expanding from single-team to cross-team work

**Neutral patterns (context-dependent):**

- Lateral moves at the same level (depends on narrative)
- Moving from large to small company (or vice versa)
- Switching between IC and management tracks
- Gaps of 6-12 months

**Concerning patterns:**

- Decreasing scope or responsibility over time
- Multiple roles with vague or identical descriptions
- Job hopping without clear progression
- Scope that doesn't match stated seniority

### Employment Gap Perception

**Current industry consensus:**

> "Employment gaps happen to everyone, whether for personal growth,
> family, or even a career pivot. But when gaps are left unexplained,
> hiring managers might start wondering if there's more to the story." —
> [ApplicantStack](https://www.applicantstack.com/blog/is-a-gap-a-red-flag-on-a-candidates-resume/)

**What mitigates gap concerns:**

1. **Brief explanation on resume:** "Career sabbatical for family
   caregiving" or "Took time for skill development in ML"
2. **Evidence of activity during gap:** Consulting, open source,
   courses, certifications
3. **Strong performance before and after:** The gap matters less if the
   rest of the career is solid
4. **Confidence in addressing it:** Defensive explanations raise flags

**What makes gaps worse:**

- Multiple gaps without explanation
- Gaps combined with job hopping
- Gaps at inflection points (after promotion, after company exit)
- Vague or evasive explanations

### Job Hopping: The Real Red Flag

> "Job hopping is considered one of the biggest red flags on a resume...
> Employers don't typically hire job-hoppers because hiring is costly.
> They don't want to have to replace you in a year's time." —
> [Enhancv](https://enhancv.com/blog/what-are-red-flags-on-a-resume/)

**What counts as job hopping:**

- 3+ roles under 2 years each
- Pattern of leaving at 12-18 months
- No roles longer than 2-3 years

**What doesn't count:**

- Contract roles (expected to be shorter)
- Startup failures (legitimate, if explained)
- Single short stint in otherwise stable career
- Early career exploration (first 3-5 years)

---

## Team Fit Signals

### Leadership Evidence Hiring Managers Look For

**From resume:**

- Mentorship or coaching mentioned in bullet points
- Cross-team or cross-functional collaboration
- Technical leadership without management title
- Project ownership and delegation

**From interviews (what they probe for):**

> "Managers must be able to make decisions in the presence of ambiguity
> to create clarity for their reports and teams." —
> [Asana: Hiring Engineering Managers](https://asana.com/inside-asana/hiring-engineering-managers-interview-process)

### Mentorship and Coaching Signals

Will Larson's recommended approach (from
[staffeng.com](https://staffeng.com/guides/staff-plus-interview-process/)):

> "Have a panel of three to four folks they might be expected to mentor
> come with questions. Watching folks redirect roughly framed questions
> into a useful discussion is an especially great insight into their
> ability to mentor in their new role."

**What hiring managers look for:**

- Evidence of junior engineer growth under candidate's guidance
- Explicit mention of onboarding, training, or coaching
- Code review and knowledge-sharing activities
- Creating documentation, standards, or processes

### Collaboration Evidence

**Strong signals:**

- Working with product, design, or other functions
- Leading initiatives that required coordination
- Resolving conflicts or aligning stakeholders
- Operating in ambiguous situations with multiple owners

**Weak signals:**

- "Worked with the team to..." (vague)
- Collaboration only within direct team
- Following processes rather than improving them

---

## Full-Time vs Contract Evaluation

### How Contract Work is Perceived

**Common biases (that candidates should address):**

- Contractors may be seen as less committed
- Concern about ability to work within team structures
- Questions about why not full-time employed
- Assumptions about gaps between contracts

**How to mitigate:**

1. **Use professional framing:** "Independent Consultant" or "Principal
   Consultant" rather than "Freelancer"
2. **Show long engagements:** 6+ month contracts demonstrate commitment
3. **Include contract-to-hire conversions:** Proves you were valued
4. **Quantify impact:** Same metrics approach as full-time roles

> "The most important part of listing freelance work is to reflect the
> time spent... Using 'Self-Employed' as your title may not get your
> resume past Applicant Tracking Systems." —
> [Upwork](https://www.upwork.com/resources/how-to-list-freelance-work-on-resumes)

### What Makes Contract Work Valuable to Hiring Managers

**Positive aspects:**

- Diverse experience across multiple companies/industries
- Adaptability and quick ramp-up ability
- Self-direction and autonomy
- Exposure to different tech stacks and problems

**Key evidence to provide:**

- Named clients (if NDA permits)
- Duration of engagements
- Repeat clients or referrals
- Scope expansion during engagement

---

## Common Mistakes

### Resume Mistakes Senior Engineers Make

1. **Listing duties instead of achievements:** "Responsible for..."
   instead of "Improved... by..."

2. **Technology laundry lists:** 40 technologies with no depth
   indication

3. **Missing metrics:** No quantification of impact

4. **Burying the lead:** Important information below the fold

5. **Vague scope descriptions:** "Worked on" instead of "Owned" or "Led"
   or "Implemented"

6. **Over-explaining early career:** Senior roles should dominate the
   resume; early roles can be compressed

7. **No story arc:** Roles appear disconnected rather than building on
   each other

### Interview Mistakes

From [Will Larson](https://lethain.com/common-hiring-manager-mistakes/)
and
[Asana](https://asana.com/inside-asana/hiring-engineering-managers-interview-process):

1. **Describing rather than demonstrating:** Talking about mentorship vs
   showing mentorship ability

2. **Not asking substantive questions:** Shows lack of genuine interest

3. **Taking credit for team outcomes:** "I" when it was clearly "we"

4. **Inability to explain work simply:** Jargon-heavy explanations
   suggest shallow understanding

5. **No opinions on trade-offs:** Can't articulate why chose X over Y

6. **Speaking negatively about previous employers:** Signals risk

### Aline Lerner's Key Insight

From
[interviewing.io](https://blog.alinelerner.com/ive-been-an-engineer-and-a-recruiter-hiring-is-broken-heres-why-and-heres-what-it-should-be-like-instead/):

> "Resumes don't identify the best candidates... If you don't have top
> brands, better wording won't help. If you do have top brands, the
> wording doesn't matter."

**The implication:** For candidates without FAANG/top-tier pedigree, the
path to getting interviews often isn't resume optimization—it's finding
ways to demonstrate skills directly (referrals, portfolios, direct
outreach with evidence).

---

## Mid-Stage Company (50-200 Employees) Specifics

### How This Context Differs from Startups or Enterprise

**Differences from early-stage startups:**

- More structured hiring process (dedicated recruiters)
- Clearer role definitions and expectations
- Less emphasis on "scrappy" and more on "scalable"
- Engineering managers have more hiring training

**Differences from large enterprise:**

- Faster decision timelines (2-4 weeks vs 6-12 weeks)
- Less bureaucracy but more ambiguity
- Hiring manager has more influence vs HR process
- Culture fit weighted more heavily

### What Series B-C Engineering Managers Prioritize

From
[Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/state-of-the-tech-market-in-2025-hiring-managers):

> "There's a growing expectation that every hire—especially on lean
> teams—should unlock outsized impact, not just fill a seat."

**Priority order:**

1. Can they deliver independently after onboarding?
2. Will they raise the bar for the team?
3. Do they fit the culture and working style?
4. Can they grow into larger scope?
5. Are they a long-term retention bet?

### 2025 Market Reality

The current hiring market is more selective:

> "Hiring managers are taking their time to find the 'right' person, and
> don't settle for candidates who don't check all the boxes." —
> [Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/state-of-the-tech-market-in-2025-hiring-managers)

**Implications for candidates:**

- Must match more requirements, not just core ones
- Competition is higher for fewer roles
- Resume quality matters more in a buyer's market
- Referrals and warm introductions increasingly valuable

---

## Sources

### Primary Sources (Engineering Leadership Blogs)

- [Will Larson - lethain.com](https://lethain.com/)
  - [Staff-plus interview processes](https://lethain.com/staff-plus-interview-process/)
  - [Some common hiring manager mistakes](https://lethain.com/common-hiring-manager-mistakes/)
  - [Interviewing senior engineering leaders](https://lethain.com/interviewing-senior-eng-leaders/)
  - [Designing interview loops](https://lethain.com/designing-interview-loops/)
  - [Getting to yes: solving engineering manager hiring loops](https://lethain.com/getting-to-yes/)

- [Gergely Orosz - The Pragmatic Engineer](https://blog.pragmaticengineer.com/)
  - [State of the tech market 2025: hiring managers](https://newsletter.pragmaticengineer.com/p/state-of-the-tech-market-in-2025-hiring-managers)
  - [The Tech Resume Inside Out](https://thetechresume.com/)
  - [A senior engineer/EM job search story](https://blog.pragmaticengineer.com/a-senior-engineer-em-job-search-story/)

- [Aline Lerner - interviewing.io](https://blog.alinelerner.com/)
  - [Hiring is broken](https://blog.alinelerner.com/ive-been-an-engineer-and-a-recruiter-hiring-is-broken-heres-why-and-heres-what-it-should-be-like-instead/)
  - [Why resume writing is snake oil](https://interviewing.io/blog/why-resume-writing-is-snake-oil)

### Research Studies and Industry Reports

- [Ladders Eye-Tracking Study (2018)](https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/541582/)
- [LeadDev: 6 engineering hiring trends for 2025](https://leaddev.com/hiring/6-engineering-hiring-trends-to-look-out-for-in-2025)
- [Centum Search: 2025 Startup Hiring Trends](https://www.centumsearch.com/2025-startup-hiring-trends-every-founder-talent-leader-needs-to-know)

### Resume and Hiring Guidance

- [IGotAnOffer: Engineering Manager Resume](https://igotanoffer.com/blogs/tech/engineering-manager-resume)
- [Resume Worded: How to Quantify Resume](https://resumeworded.com/how-to-quantify-resume-key-advice)
- [Tech Interview Handbook: Resume Guide](https://www.techinterviewhandbook.org/resume/)
- [Asana: Hiring Engineering Managers](https://asana.com/inside-asana/hiring-engineering-managers-interview-process)

### Red Flags and Gap Research

- [ApplicantStack: Is a Gap a Red Flag?](https://www.applicantstack.com/blog/is-a-gap-a-red-flag-on-a-candidates-resume/)
- [Enhancv: 20 Resume Red Flags](https://enhancv.com/blog/what-are-red-flags-on-a-resume/)
- [Resume Worded: 10 Resume Red Flags](https://resumeworded.com/resume-red-flags-2023-key-advice)

### Technical Depth and Career Progression

- [ACM Queue: Breadth and Depth](https://queue.acm.org/detail.cfm?id=3138817)
- [DistantJob: Staff Engineer vs Senior Engineer](https://distantjob.com/blog/staff-engineer-vs-senior-engineer/)
- [staffeng.com: Staff+ Interview Process](https://staffeng.com/guides/staff-plus-interview-process/)

### Contract/Freelance Positioning

- [Upwork: How to List Freelance Work](https://www.upwork.com/resources/how-to-list-freelance-work-on-resumes)
- [LinkedIn: How to List Freelance Work](https://www.linkedin.com/pulse/how-list-freelance-work-resume-get-hired-by-linkedin-news)

---

_Research completed: 2026-01-05_
