<research_objective>
Create a high-level understanding document about Astro, the static site generator recommended in the project's strategy guide. This document will help a senior engineer with 27+ years of web development experience come up to speed on Astro quickly.

The reader is already familiar with: React, JavaScript/TypeScript, build tools (Webpack, Vite), and static site generation concepts. Focus on what makes Astro unique and how it differs from familiar tools.
</research_objective>

<context>
**Why Astro was recommended** (from ./docs/guides/resume-website-strategy.md):
- Fast builds, content-focused, minimal JS overhead
- Suitable for both resume project and contracting website
- Alternative mentioned: Next.js with static export

**Reader profile:**
- Senior frontend engineer, 27+ years experience
- Strong React, JavaScript, HTML/CSS background
- Familiar with Meta's internal tools, Netflix TVUI architecture
- Currently uses: Metalsmith (this repo's current build system)

**Purpose:**
- Enable informed decision-making about tech stack choice
- Provide enough understanding to start building with Astro
- Compare against familiar alternatives (React/Next.js, current Metalsmith setup)
</context>

<research_areas>
1. **What is Astro?**
   - Core philosophy and design principles
   - When to use it vs. alternatives
   - Key differentiators from React/Next.js

2. **Architecture & Mental Model**
   - Islands architecture explained
   - Component model (how it handles React, Vue, etc.)
   - Build process and output
   - Zero JS by default concept

3. **Getting Started Essentials**
   - Project structure
   - File-based routing
   - Content collections
   - Styling approaches

4. **Practical Considerations**
   - Learning curve for React developers
   - Integration with existing React components
   - PDF generation compatibility
   - Deployment options (Vercel, Netlify)

5. **Trade-offs**
   - When Astro is the right choice
   - When to use Next.js instead
   - Limitations to be aware of
</research_areas>

<deliverables>
Create a comprehensive but scannable document with:

1. **TL;DR** - 3-5 bullet points for quick understanding
2. **Core Concepts** - What makes Astro different
3. **Architecture Overview** - How it works under the hood
4. **Quick Start Guide** - Getting a project running
5. **React Integration** - Using React components in Astro
6. **Comparison Table** - Astro vs Next.js vs Metalsmith
7. **Decision Framework** - When to choose Astro
8. **Resources** - Official docs, tutorials, community

Save to: `./docs/research/astro-framework-overview.md`
</deliverables>

<verification>
Before completing, verify:
- Document is written for an experienced developer (no beginner explanations)
- Core concepts are explained with enough depth to be useful
- Practical examples or code snippets are included where helpful
- Comparison with Next.js and current Metalsmith setup is clear
- Document answers: "Should I use Astro for this resume project?"
</verification>

<success_criteria>
- Research document saved to ./docs/research/astro-framework-overview.md
- Document is scannable (good use of headers, bullets, tables)
- Reader can understand Astro's value proposition in 5 minutes
- Reader has enough context to start building with Astro
- Honest assessment of trade-offs included
</success_criteria>
