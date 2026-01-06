# Resume and Contracting Website Strategy Guide

**Profile:** Jerry Hamlet, Creative Solutions Architect **Prepared:**
December 6, 2025 **Target Launch:** Q1-Q2 2026

---

## 1. Executive Summary

This strategy guide outlines a comprehensive approach to modernizing
Jerry Hamlet's professional presence through two interconnected
projects: a refreshed resume/CV and a contracting services website. The
strategy leverages 27+ years of experience, FAANG credentials (Meta
AR/VR, Netflix TVUI), and the rare combination of deep technical
expertise with design/branding background.

### Key Strategic Decisions

**Brand Positioning:** "Creative Solutions Architect" - Position at the
intersection of design and engineering, emphasizing the ability to
bridge both worlds. This differentiator is rare at the senior/principal
level and should be the cornerstone of all materials.

**Primary Domain:** Use **hamletink.com** as the primary
contracting/consulting website. The name suggests creativity ("ink"
evokes design, writing, signatures) while remaining professional. Use
**hamletzone.com** for personal projects, experiments, or as a redirect.

**Technology Approach:** Leverage existing expertise with modern
tooling:

- Resume: Astro-based static site with automated PDF generation
- Website: Astro or Next.js with content-focused architecture

**Phased Implementation:** Resume first (immediate value), then website
(builds on resume content and establishes consulting presence).

### Recommended Approach Summary

| Project               | Priority | Timeline   | Technology             |
| --------------------- | -------- | ---------- | ---------------------- |
| Resume Modernization  | Phase 1  | 2-4 weeks  | Astro + PDF generation |
| LinkedIn Optimization | Phase 1  | 1 week     | Manual updates         |
| Contracting Website   | Phase 2  | 4-8 weeks  | Astro/Next.js          |
| Content Development   | Ongoing  | Continuous | Case studies, articles |

---

## 2. Implementation Roadmap

### Phase 1: Foundation (Weeks 1-4)

**Week 1-2: Resume Modernization**

- Audit current README.md resume content
- Update experience section (current role still shows Facebook, should
  be Meta)
- Update years of experience (currently says "20 years", should be "27+
  years")
- Add AI/ML integration focus to skills and narrative
- Implement modern web-based resume with PDF export
- Create ATS-optimized plain text version

**Week 2-3: LinkedIn Optimization**

- Implement recommendations from linkedin-profile-optimization.md
  research
- Update headline to include AI/ML focus
- Rewrite summary/about section
- Reach 500+ connections
- Add/reorder skills for search visibility

**Week 3-4: Technical Infrastructure**

- Set up Astro project for resume site
- Configure PDF generation pipeline (Puppeteer or similar)
- Deploy to Vercel/Netlify for immediate availability
- Set up CI/CD for automatic builds

### Phase 2: Website Development (Weeks 5-12)

**Week 5-6: Content Strategy & Information Architecture**

- Define page structure and navigation
- Draft homepage messaging and value proposition
- Outline service offerings
- Identify 3-5 case studies to develop

**Week 7-8: Design & Development**

- Create visual identity (leveraging design background)
- Develop component library
- Build core pages (Home, About, Services, Contact)
- Implement responsive design

**Week 9-10: Case Studies & Content**

- Develop detailed case studies (Meta AR/VR, Netflix TVUI, etc.)
- Write service descriptions
- Create testimonial collection strategy
- Develop initial blog/insights content

**Week 11-12: Launch Preparation**

- SEO optimization
- Performance testing
- Contact form and analytics integration
- Soft launch and feedback collection

### Phase 3: Growth & Iteration (Ongoing)

- Regular content updates (monthly)
- Case study additions as projects complete
- A/B testing for conversion optimization
- Newsletter or content subscription setup
- Client testimonial collection

### Milestone Checkpoints

| Milestone          | Target Date | Deliverable                      |
| ------------------ | ----------- | -------------------------------- |
| Resume v2 Live     | Week 2      | Web resume + PDF download        |
| LinkedIn Optimized | Week 3      | Updated profile per research     |
| Website MVP        | Week 8      | Core pages live on hamletink.com |
| Full Launch        | Week 12     | Complete site with case studies  |

---

## 3. Resume Strategy

### Content Updates Required

**Immediate Fixes:**

1. Update "20 years experience" to "27+ years experience"
2. Change "Facebook" to "Meta" throughout
3. Update current role description (Aug 2018 to Current is 7+ years -
   verify accuracy)
4. Add AI/ML and LLM integration to skills section
5. Update tools list (add modern tools like Vite, remove dated ones)
6. Add TypeScript prominently

**Structural Improvements:**

1. Create stronger opening hook - current summary is functional but not
   compelling
2. Lead with impact metrics where possible
3. Add scale indicators (team sizes, user counts, revenue impact)
4. Ensure ATS compatibility while maintaining design appeal

### Recommended Resume Format

**Primary Format:** Interactive web resume with multiple output options

- Web view: Clean, scannable, with subtle interactivity
- PDF export: Print-optimized, ATS-friendly
- Plain text: For application forms requiring copy/paste

**Content Structure:**

```
1. Header (Name, Title, Contact)
2. Professional Summary (3-4 sentences, keyword-rich)
3. Core Competencies (Skills grid)
4. Professional Experience (Reverse chronological)
5. Selected Projects/Highlights (Optional section for portfolio pieces)
6. Education & Certifications
```

### Sample Updated Summary

```
Creative Solutions Architect with 27+ years bridging design and engineering.
Principal-level expertise in React, TypeScript, and AI/ML integration, honed
at Meta Reality Labs (AR/VR) and Netflix TVUI (100M+ users). Unique combination
of deep technical architecture skills with design, branding, and UX background.
Currently focused on AI-powered UI experiences and modern frontend architectures.
```

### Technical Implementation

**Recommended Stack:**

- **Framework:** Astro (optimal for content-focused sites, fast builds)
- **Styling:** Tailwind CSS or vanilla CSS (demonstrates fundamentals)
- **PDF Generation:** Puppeteer with print stylesheet or react-pdf
- **Hosting:** Vercel or Netlify (free tier sufficient)
- **CI/CD:** GitHub Actions for automated builds

**File Structure:**

```
curriculum-vitae/
  src/
    pages/
      index.astro          # Web resume
    layouts/
      ResumeLayout.astro   # Shared layout
    components/
      Header.astro
      Experience.astro
      Skills.astro
    styles/
      print.css            # PDF-optimized styles
  content/
    resume.json            # Structured content
  public/
    resume.pdf             # Generated PDF
  scripts/
    generate-pdf.js        # PDF generation script
```

### SEO Considerations for Web Resume

- Use semantic HTML (proper heading hierarchy)
- Include meta description with key terms
- Structure data with JSON-LD for Person schema
- Ensure mobile responsiveness
- Keep page weight minimal (<100KB ideally)

---

## 4. Website Strategy

### Purpose & Goals

The contracting website (hamletink.com) serves three primary purposes:

1. **Credibility Building:** Establish authority and trust before
   prospect contact
2. **Lead Generation:** Convert visitors into consultation requests
3. **Differentiation:** Showcase the unique design+engineering
   combination

### Target Audiences

**Primary: Direct Clients**

- Startups needing senior frontend architecture
- Agencies seeking specialized React/TypeScript expertise
- Companies building AR/VR or AI-integrated experiences

**Secondary: Recruiters/Hiring Managers**

- Tech recruiters searching for senior talent
- Engineering managers evaluating candidates
- HR professionals verifying backgrounds

### Information Architecture

**Recommended Page Structure:**

```
hamletink.com/
  / (Home)              # Hero, value prop, recent work, CTA
  /about                # Full bio, philosophy, differentiators
  /services             # Service offerings with pricing guidance
  /work                 # Case studies and portfolio
    /work/meta-arvr     # Individual case study pages
    /work/netflix-tvui
  /insights             # Blog/articles (optional, Phase 3)
  /contact              # Contact form, booking link
```

**Homepage Sections:**

1. Hero: Clear value proposition and primary CTA
2. Social Proof: Client logos or testimonial snippet
3. Services Overview: 3-4 service categories
4. Featured Work: 2-3 case study previews
5. About Teaser: Brief intro with link to full bio
6. Contact CTA: Clear next step

### Service Offerings Framework

Based on experience and market positioning, consider these service
categories:

**1. Frontend Architecture Consulting**

- Design system development
- React/TypeScript architecture review
- Performance optimization audits
- Tech stack recommendations

**2. AI/ML UI Integration**

- LLM-powered interface design
- AI feature prototyping
- Generative AI application development

**3. Specialized Platform Development**

- TV/OTT UI development
- AR/VR interface engineering
- Cross-platform optimization

**4. Technical Leadership**

- Fractional principal engineer
- Team mentoring and upskilling
- Code review and standards development

### Conversion Strategy

**Primary CTA:** "Schedule a Consultation" or "Discuss Your Project"

**Secondary CTAs:**

- Download resume/capability deck
- View case studies
- Subscribe to insights

**Trust Builders:**

- FAANG logos (Meta, Netflix) prominently displayed
- Specific metrics from past projects
- Client testimonials (with permission)
- LinkedIn recommendations integration

---

## 5. Branding Guidelines

### Brand Identity Framework

**Brand Name:** Hamlet Ink (for hamletink.com)

- "Hamlet" - personal, memorable, establishes individual identity
- "Ink" - evokes creativity, design, permanence, signature work

**Tagline Options:**

- "Where Design Meets Engineering"
- "Creative Solutions Architecture"
- "Bridging Design and Code"

### Visual Identity Recommendations

**Color Palette:**

- Primary: Deep, sophisticated tone (navy, charcoal, or dark teal)
- Accent: Vibrant but professional (coral, teal, or amber)
- Neutral: Clean whites and light grays
- Avoid: Generic tech blue, overly corporate palettes

**Typography:**

- Headlines: Modern geometric sans-serif (Inter, Satoshi, or custom)
- Body: Highly readable sans-serif (system fonts for performance)
- Code: Monospace for technical credibility (JetBrains Mono, Fira Code)

**Visual Elements:**

- Clean, minimal aesthetic reflecting technical precision
- Subtle motion/interaction showcasing frontend expertise
- Custom illustrations or graphics leveraging design background
- Avoid stock photography where possible

### Tone & Voice

**For Recruiters/Corporate Clients:**

- Professional, confident, results-focused
- Emphasize scale, metrics, and enterprise experience
- Lead with FAANG credentials

**For Startups/Direct Clients:**

- Approachable, collaborative, solution-oriented
- Emphasize adaptability and breadth of experience
- Highlight hands-on capability alongside strategic thinking

**General Principles:**

- First person ("I" not "we" - emphasize individual expertise)
- Active voice with strong verbs
- Technical accuracy without unnecessary jargon
- Confident but not arrogant

### Brand Consistency Across Touchpoints

| Touchpoint | Key Elements                            | Notes                        |
| ---------- | --------------------------------------- | ---------------------------- |
| Resume     | Clean typography, subtle brand color    | Professional, ATS-compatible |
| Website    | Full brand expression                   | Primary brand showcase       |
| LinkedIn   | Professional photo, consistent headline | Match resume positioning     |
| Email      | Simple signature with link              | Don't over-design            |
| Proposals  | Template with brand elements            | Professional but not flashy  |

---

## 6. Content Framework

### Resume vs. Website Content Allocation

| Content Type         | Resume                   | Website                               | Notes                              |
| -------------------- | ------------------------ | ------------------------------------- | ---------------------------------- |
| Professional Summary | Brief (3-4 sentences)    | Expanded (full About page)            | Resume hooks, website elaborates   |
| Work Experience      | All roles, brief bullets | Selected roles, detailed case studies | Resume complete, website selective |
| Skills/Technologies  | Categorized list         | Contextual throughout                 | Website shows skills in action     |
| Projects             | Brief mentions           | Full case studies                     | Deep dive on website               |
| Testimonials         | None                     | Featured throughout                   | Website-only content               |
| Thought Leadership   | None                     | Blog/insights section                 | Builds authority                   |
| Contact              | Email, phone, links      | Full contact page + form              | Website enables easy outreach      |

### Case Study Framework

Develop 3-5 detailed case studies for the website. Each should follow
this structure:

**1. Overview**

- Client/project name (or anonymized if needed)
- Timeline and role
- Key technologies
- One-sentence result summary

**2. Challenge**

- Business context and goals
- Technical constraints
- Why this problem was hard

**3. Approach**

- Technical decisions and rationale
- Process and methodology
- Collaboration model

**4. Solution**

- Architecture overview (diagrams if possible)
- Key innovations or decisions
- Technologies and tools used

**5. Results**

- Quantified outcomes (metrics)
- Business impact
- User/team feedback

**6. Learnings**

- What worked well
- What you'd do differently
- Broader applicability

### Suggested Case Studies to Develop

1. **Meta AR/VR - Gaia Internal Tool**

   - Focus: Complex data visualization, leadership, scale
   - Angle: Building for data scientists, not consumers

2. **Netflix TVUI - Search Experience**

   - Focus: Performance optimization, scale (30M+ users)
   - Angle: Functional reactive programming in practice

3. **Netflix TVUI - Build Tools**

   - Focus: Developer experience, reducing build times to near-zero
   - Angle: 3+ years of evolution, meeting growing needs

4. **Design + Engineering Integration** (Composite)

   - Focus: How design background informs engineering decisions
   - Angle: Unique differentiator showcase

5. **AI/ML UI Integration** (When available)
   - Focus: Emerging expertise area
   - Angle: Forward-looking capability

### Testimonial Collection Strategy

**Sources:**

1. LinkedIn recommendations (9 existing)
2. Past colleagues at Meta, Netflix, Yahoo
3. Former clients from freelance period
4. Open source community if applicable

**Process:**

1. Identify 5-10 people to request testimonials from
2. Provide specific prompts (e.g., "What was it like working with me on
   X?")
3. Offer to draft for their approval if they're busy
4. Get permission for website use
5. Include name, title, company, and photo if possible

---

## 7. Technology Recommendations

### Resume Project Stack

| Layer          | Technology                               | Rationale                                |
| -------------- | ---------------------------------------- | ---------------------------------------- |
| Framework      | Astro                                    | Fast builds, content-focused, minimal JS |
| Styling        | Tailwind CSS                             | Rapid development, utility-first         |
| Content        | Markdown/MDX or JSON                     | Easy updates, structured data            |
| PDF Generation | Puppeteer + print CSS                    | High-quality output, matches web version |
| Hosting        | Vercel                                   | Free, fast, GitHub integration           |
| Domain         | Custom (via hamletzone.com or subdomain) | Professional appearance                  |

**Alternative:** If preferring to showcase React expertise, Next.js with
static export is also excellent.

### Website Project Stack

| Layer          | Technology                 | Rationale                              |
| -------------- | -------------------------- | -------------------------------------- |
| Framework      | Astro or Next.js           | Content + interactivity balance        |
| Styling        | Tailwind CSS               | Consistency with resume project        |
| CMS (Optional) | MDX files or Keystatic     | Content portability, no vendor lock-in |
| Forms          | Formspree or Netlify Forms | Simple, no backend needed              |
| Analytics      | Plausible or Fathom        | Privacy-focused, lightweight           |
| Hosting        | Vercel or Netlify          | CI/CD built-in, edge delivery          |

### Development Workflow

```
1. Content authoring (Markdown/MDX)
2. Local development (Astro dev server)
3. Commit to GitHub
4. Automatic preview deployment (PR previews)
5. Merge to main triggers production deploy
6. PDF regenerated on build
```

### Performance Targets

- Lighthouse Performance: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <2s
- Total page weight: <200KB (resume), <500KB (website)

---

## 8. Domain Strategy

### Recommended Approach

**Primary Domain: hamletink.com**

- Use for: Contracting/consulting website
- Why: Professional, memorable, creative connotation
- Brand: "Hamlet Ink" as business identity

**Secondary Domain: hamletzone.com**

- Use for: Personal projects, experiments, or redirect to hamletink.com
- Why: Already established (in current resume contact)
- Options:
  1. 301 redirect to hamletink.com (simplest)
  2. Personal site/blog separate from professional
  3. Reserve for future use

### Domain Configuration

**Option A: Redirect hamletzone.com to hamletink.com (Recommended)**

```
hamletzone.com       -> 301 redirect -> hamletink.com
www.hamletzone.com   -> 301 redirect -> hamletink.com
```

**Option B: Different Purposes**

```
hamletink.com        -> Professional consulting site
hamletzone.com       -> Personal site, projects, experiments
```

### Resume/CV Subdomain Options

Consider using a subdomain for the resume:

- `cv.hamletink.com` - Clean, professional
- `resume.hamletink.com` - Self-explanatory
- Or keep as section within main site: `hamletink.com/resume`

### SEO Considerations

- Choose one canonical domain and stick with it
- Use 301 redirects (not 302) for permanent redirects
- Do not mirror content across both domains (duplicate content penalty)
- Consider email consistency: `jerry@hamletink.com` once established

### Email Strategy

**Current:** jerry@hamletzone.com (per existing resume)

**Recommended transition:**

1. Set up jerry@hamletink.com
2. Update resume and LinkedIn
3. Keep hamletzone.com email active as backup/forward
4. Use Google Workspace or Fastmail for reliability

---

## 9. Next Steps

### Immediate Actions (This Week)

1. **Audit Current Resume Content**

   - Review README.md for outdated information
   - List all items needing updates
   - Identify gaps vs. LinkedIn research recommendations

2. **Register/Verify Domain Access**

   - Confirm control of hamletink.com
   - Set up DNS if needed
   - Verify hamletzone.com status

3. **Initialize Project Repository**

   - Create new branch for resume modernization
   - Set up Astro project structure
   - Configure build pipeline

4. **Begin LinkedIn Updates**
   - Update headline immediately
   - Start working on About section
   - Send 4+ connection requests to reach 500+

### Week 2 Actions

5. **Complete Resume Content Updates**

   - Rewrite summary with AI/ML focus
   - Update all experience sections
   - Add quantified achievements where possible

6. **Implement Web Resume**

   - Build basic Astro site structure
   - Create responsive design
   - Implement PDF generation

7. **Deploy Resume**
   - Set up Vercel/Netlify hosting
   - Configure custom domain (if desired)
   - Test PDF download functionality

### Week 3-4 Actions

8. **Complete LinkedIn Optimization**

   - Finish all updates per research document
   - Add/update skills
   - Request endorsements from connections

9. **Begin Website Planning**

   - Finalize information architecture
   - Start drafting homepage copy
   - Outline first case study

10. **Gather Assets**
    - Collect any screenshots/visuals from past projects
    - Reach out for testimonial permissions
    - Document metrics and achievements for case studies

### Decision Points

Before proceeding further, decide:

1. **Domain Strategy:** Redirect hamletzone.com to hamletink.com, or
   keep separate?
2. **Technology Stack:** Astro (recommended) or Next.js for both
   projects?
3. **Content Scope:** How many case studies for initial launch?
4. **Timeline Priority:** Speed to market or comprehensiveness?

---

## Appendix A: Research Sources

### Developer Portfolio Best Practices

- [2025 Developer Portfolio Tips - DEV Community](https://dev.to/wrypa/2025-developer-portfolio-tips-how-to-keep-yours-modern-professional-3l87)
- [30+ Portfolio Design Trends for 2025 - Design Shack](https://designshack.net/articles/trends/portfolio-design/)
- [Best 15 Web Developer Portfolios 2025 - TurnKey](https://turnkeystaffing.com/tech-trends/web-developer-portfolios/)

### Consulting Website Best Practices

- [45 Best Consulting Websites 2025 - Consulting Success](https://www.consultingsuccess.com/best-consulting-websites)
- [10 Steps to Building a Client-Generating Consulting Website - Consulting Success](https://www.consultingsuccess.com/consulting-website)
- [7 Proven Tips for Consulting Website Credibility - Crowdspring](https://www.crowdspring.com/blog/consulting-website-design/)

### Resume Trends

- [Current Resume Trends for 2025 - ResumeBuilder.com](https://www.resumebuilder.com/career-center/resume-trends/)
- [15 Current Resume Trends for 2025 - Resume-Now](https://www.resume-now.com/job-resources/resumes/resume-trends)
- [Resume Trends 2025 - Fast Company](https://www.fastcompany.com/91254592/3-resume-trends-to-watch-in-2025)

### Personal Branding

- [Building a Personal Brand 2025 - The Planet Group](https://www.theplanetgroup.com/blog/building-a-personal-brand-for-specialized-professionals-how-to-stand-out-in-2025)
- [Why Personal Branding Matters for Tech Professionals - DEV Community](https://dev.to/careerbytecode/why-personal-branding-matters-for-tech-professionals-2hh7)
- [Personal Branding Trends 2025 - Brand Professor](https://brand-professor.com/blogs/emerging-personal-branding-trends-2025-what-professionals-need-to-know)

### Static Site Generators

- [Top Five Static Site Generators for 2025 - CloudCannon](https://cloudcannon.com/blog/the-top-five-static-site-generators-for-2025-and-when-to-use-them/)
- [Hugo vs Astro 2025 - Criztec](https://criztec.com/hugo-vs-astro)
- [React-based Static Site Generators 2025 - Crystallize](https://crystallize.com/blog/react-static-site-generators)

### Case Study Best Practices

- [How to Create a Consulting Case Study Portfolio - Consultport](https://consultport.com/succeed-as-consultant/how-to-create-a-great-consulting-case-study-portfolio-as-a-freelancer/)
- [Case Study Portfolios - Toptal](https://www.toptal.com/designers/ui/case-study-portfolio)
- [How to Write Case Studies - Semplice](https://www.semplice.com/how-to-write-case-studies-for-your-portfolio)

### Domain Strategy

- [Using Two Domains for One Website - Adonis Media](https://www.adonis.media/insights/using-two-domains-for-one-website-benefits-and-best-practices)
- [Multiple Domain SEO Strategy - IONOS](https://www.ionos.com/digitalguide/domains/domain-tips/multiple-domain-strategy/)
- [Multiple Domains Pointing to Single Website SEO - Search Engine Journal](https://www.searchenginejournal.com/multiple-domains-pointing-to-single-website-seo/385671/)

---

## Appendix B: Key Statistics

- 89% of US creative directors prioritize candidates with an online
  portfolio
- 85% of tech recruiters value live demos in web developer portfolios
- Interactive demos boost engagement by 55%
- Portfolios with client testimonials convert 60% better
- 80%+ of potential clients check consulting websites before engagement
- 50% of American professionals believe personal brand matters more than
  resume in 2025
- LinkedIn remains the top personal branding platform (64% of
  professionals)

---

_Strategy guide prepared December 6, 2025. Review and update quarterly
or as projects progress._
