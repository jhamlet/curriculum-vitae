# Astro Framework Overview

**For:** Senior Frontend Engineer (React/TypeScript background)
**Purpose:** Informed decision-making for resume/contracting website
**Date:** December 6, 2025

---

## TL;DR

- **Astro ships zero JavaScript by default** - renders to static HTML, hydrates only interactive "islands" you explicitly mark
- **Framework-agnostic** - use your existing React components alongside Astro's native `.astro` syntax; no rewrites required
- **Content-first architecture** - built-in content collections with Zod validation, MDX support, and file-based routing
- **Performance by design** - achieves 100 Lighthouse scores out of the box; 40% faster load times than React SPAs
- **Ideal for this project** - perfect fit for resume site and content-focused contracting website; overkill for app-like experiences

---

## 1. Core Concepts

### What Astro Is

Astro is a **content-focused web framework** that pioneered the "Islands Architecture" pattern. Unlike React/Next.js which start with JavaScript and optionally reduce it, Astro starts with zero JavaScript and lets you opt-in to interactivity component by component.

### The Mental Model Shift

| Traditional SPA               | Astro                      |
| ----------------------------- | -------------------------- |
| JavaScript renders everything | HTML renders everything    |
| Hydrate entire page           | Hydrate individual islands |
| Ship framework to client      | Ship only what's needed    |
| Optimize to reduce JS         | Zero JS is the default     |

### Key Differentiators from React/Next.js

1. **Zero JS by default**: Every page is static HTML until you explicitly add client-side behavior
2. **Component islands**: Interactive components hydrate independently, not as a single app
3. **Framework agnostic**: Mix React, Vue, Svelte, or Solid in the same project
4. **No virtual DOM overhead**: Server-rendered components never reach the client
5. **Content collections**: First-class support for structured content (Markdown/MDX) with TypeScript schemas

---

## 2. Architecture Deep Dive

### Islands Architecture

The core innovation is treating interactive UI as isolated "islands" in a sea of static HTML:

```
+------------------------------------------+
|  Static HTML (server-rendered)           |
|  +----------+          +--------------+  |
|  | React    |          | Interactive  |  |
|  | Island   |          | Island       |  |
|  | (hydrated)|         | (hydrated)   |  |
|  +----------+          +--------------+  |
|                                          |
|  More static content...                  |
+------------------------------------------+
```

Each island:

- Renders in isolation
- Uses any UI framework
- Hydrates independently based on your directive
- Never affects other islands

### Hydration Directives

Astro provides granular control over when JavaScript loads:

```astro
<!-- Load immediately (like React default) -->
<ReactComponent client:load />

<!-- Load when browser is idle -->
<ReactComponent client:idle />

<!-- Load when scrolled into view -->
<ReactComponent client:visible />

<!-- Load only on specific media query -->
<ReactComponent client:media="(max-width: 768px)" />

<!-- Never hydrate, client-render only -->
<ReactComponent client:only="react" />
```

**Performance contract**: Astro renders the component to static HTML first, then decides when (or if) to hydrate. Until hydration, the component is inert markup.

### Build Process

```
Source Files (.astro, .jsx, .md)
        |
        v
    Astro Compiler
        |
        v
   Static HTML + Minimal JS
        |
        v
     /dist folder
        |
        v
   Deploy anywhere (CDN)
```

Build characteristics:

- Astro 4.0+: 80% faster builds than previous versions
- Output is static HTML + optimized JS bundles only for islands
- No runtime framework shipped to client for static content

---

## 3. The .astro Component Format

### Basic Structure

```astro
---
// Frontmatter (server-side JavaScript/TypeScript)
// Runs at build time or request time, never in browser

import Header from '../components/Header.astro';
import ReactCounter from '../components/Counter.tsx';

const title = "My Page";
const items = await fetch('/api/data').then(r => r.json());
---

<!-- Template (HTML-like, renders on server) -->
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <Header />

    <!-- Static content -->
    <ul>
      {items.map(item => <li>{item.name}</li>)}
    </ul>

    <!-- Interactive island -->
    <ReactCounter client:visible initialCount={0} />
  </body>
</html>

<style>
  /* Scoped by default - only affects this component */
  ul {
    list-style: none;
  }
</style>
```

### Key Syntax Differences from JSX

| JSX                    | Astro                               |
| ---------------------- | ----------------------------------- |
| `className`            | `class`                             |
| `camelCase` attributes | `kebab-case` attributes             |
| Requires single root   | Multiple root elements OK           |
| `onClick` handlers     | Use `<script>` or framework islands |

### Frontmatter Capabilities

The code fence (`---`) runs **only on the server**:

```astro
---
// Safe to use here:
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');

// Database queries
import { db } from '../lib/database';
const users = await db.query('SELECT * FROM users');

// Environment variables (server-only)
const apiKey = import.meta.env.SECRET_API_KEY;

// File system access
import fs from 'node:fs';
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
---
```

---

## 4. Project Structure

```
my-astro-project/
├── astro.config.mjs      # Astro configuration
├── package.json
├── tsconfig.json
├── public/               # Static assets (fonts, favicons)
│   └── favicon.svg
└── src/
    ├── components/       # Astro and framework components
    │   ├── Header.astro
    │   └── Counter.tsx   # React component
    ├── layouts/          # Page layouts
    │   └── BaseLayout.astro
    ├── pages/            # File-based routing
    │   ├── index.astro   # -> /
    │   ├── about.astro   # -> /about
    │   └── posts/
    │       └── [slug].astro  # -> /posts/:slug
    ├── content/          # Content collections
    │   └── blog/
    │       ├── post-1.md
    │       └── post-2.mdx
    └── styles/
        └── global.css
```

### File-Based Routing

| File                           | Route          |
| ------------------------------ | -------------- |
| `src/pages/index.astro`        | `/`            |
| `src/pages/about.astro`        | `/about`       |
| `src/pages/posts/index.astro`  | `/posts`       |
| `src/pages/posts/[slug].astro` | `/posts/:slug` |
| `src/pages/[...path].astro`    | Catch-all      |

---

## 5. Content Collections

Content Collections are Astro's answer to managing structured content with type safety.

### Setup

```typescript
// src/content.config.ts (Astro 5.x)
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

### Querying Content

```astro
---
import { getCollection, getEntry } from 'astro:content';

// Get all non-draft posts
const posts = await getCollection('blog', ({ data }) => !data.draft);

// Get single entry
const post = await getEntry('blog', 'my-first-post');
---
```

### Rendering Content

```astro
---
import { getEntry, render } from 'astro:content';

const post = await getEntry('blog', Astro.params.slug);
const { Content } = await render(post);
---

<article>
  <h1>{post.data.title}</h1>
  <Content />  <!-- Rendered markdown -->
</article>
```

---

## 6. React Integration

### Installation

```bash
npx astro add react
```

This configures:

- `@astrojs/react` integration
- React and ReactDOM dependencies
- TypeScript JSX support

### Using React Components

```astro
---
// src/pages/index.astro
import InteractiveWidget from '../components/InteractiveWidget.tsx';
import StaticCard from '../components/StaticCard.tsx';
---

<!-- Renders to static HTML only -->
<StaticCard title="No JavaScript" />

<!-- Hydrates on client -->
<InteractiveWidget client:load />
```

### React Component Example

```tsx
// src/components/Counter.tsx
import { useState } from "react";

interface Props {
  initialCount?: number;
}

export default function Counter({ initialCount = 0 }: Props) {
  const [count, setCount] = useState(initialCount);

  return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>;
}
```

### What Works

- All React hooks (`useState`, `useEffect`, `useContext`, etc.)
- React context providers (wrap islands individually)
- CSS-in-JS libraries (may need streaming disabled)
- Third-party React component libraries
- React 18 and 19 features

### What to Know

- Each island is an independent React root
- Context doesn't share between islands by default
- For shared state across islands, use external state (Zustand, Nanostores)
- React components without `client:*` directives render to static HTML

### Migrating Existing React Apps

Astro can wrap entire React applications:

```astro
---
import App from '../legacy-react-app/App.tsx';
---

<App client:load />
```

This works but defeats Astro's purpose. Better to progressively extract static parts.

---

## 7. Styling

### Scoped Styles (Default)

```astro
<h1>Hello</h1>

<style>
  /* Only affects this component's <h1> */
  h1 {
    color: blue;
  }
</style>
```

### Global Styles

```astro
<style is:global>
  /* Affects entire page */
  body {
    font-family: system-ui;
  }
</style>
```

### Tailwind CSS

```bash
npx astro add tailwind
```

Configuration (Astro 5.x with Tailwind 4):

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Usage:

```astro
<div class="flex items-center gap-4 p-6 bg-slate-100 rounded-lg">
  <h1 class="text-2xl font-bold">Styled with Tailwind</h1>
</div>
```

---

## 8. Comparison: Astro vs Next.js vs Metalsmith

| Feature            | Astro                  | Next.js            | Metalsmith    |
| ------------------ | ---------------------- | ------------------ | ------------- |
| **Primary Use**    | Content sites          | Full-stack apps    | Static sites  |
| **JavaScript**     | Zero by default        | Always shipped     | None          |
| **React Support**  | Via integration        | Native             | Manual        |
| **Routing**        | File-based             | File-based         | Plugin-based  |
| **Content**        | Collections + MDX      | MDX (manual setup) | Plugins       |
| **SSR**            | Optional               | Default            | No            |
| **Build Speed**    | Fast                   | Medium             | Fast          |
| **Learning Curve** | Low (from React)       | Low (React devs)   | Medium        |
| **Bundle Size**    | Minimal                | Framework overhead | Zero          |
| **Interactivity**  | Islands                | Full app           | Manual        |
| **TypeScript**     | Native                 | Native             | Manual        |
| **Active Dev**     | Very active            | Very active        | Minimal       |
| **Best For**       | Blogs, docs, marketing | Apps, dashboards   | Simple static |

### When to Choose Each

**Choose Astro when:**

- Content is primary, interactivity is secondary
- Performance/Core Web Vitals are critical
- You want to use React for specific components, not entire pages
- Building blogs, documentation, marketing sites, portfolios
- You need MDX with type-safe frontmatter

**Choose Next.js when:**

- Building a web application (dashboards, SaaS, e-commerce)
- Need extensive server-side logic, API routes, middleware
- Real-time features are required
- Team is fully invested in React ecosystem
- ISR (Incremental Static Regeneration) is needed

**Keep Metalsmith when:**

- Existing setup works and maintenance is minimal
- No interactivity needed
- Team prefers plugin-based architecture
- (Note: Metalsmith has minimal active development)

---

## 9. Deployment

### Static Hosting (Recommended for This Project)

Both Vercel and Netlify auto-detect Astro:

**Vercel:**

```bash
# Just push to GitHub - Vercel auto-detects
# Or manual:
npm run build
npx vercel --prod
```

**Netlify:**

```bash
# Push to GitHub with netlify.toml or:
npm run build
npx netlify deploy --prod --dir=dist
```

### Configuration

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hamletink.com",
  output: "static", // Default, generates static HTML
  // output: 'server', // For SSR
  // output: 'hybrid', // Mix of static and server
});
```

### Zero-Config Deployment

For static sites (like a resume), no adapter needed:

1. `npm run build` creates `/dist`
2. Deploy `/dist` to any static host
3. Done

---

## 10. Practical Considerations

### Learning Curve for React Developers

**Familiar:**

- JSX-like template syntax
- Component-based architecture
- TypeScript support
- npm/node ecosystem
- Vite-based dev server

**New Concepts:**

- `.astro` file format (easy transition)
- Frontmatter code fence
- Hydration directives
- Content collections
- Islands mental model

**Estimated ramp-up time:** 1-2 days to be productive, 1 week to be proficient

### PDF Generation Compatibility

For the resume project's PDF generation requirement:

```javascript
// scripts/generate-pdf.js
import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("http://localhost:4321/resume", { waitUntil: "networkidle0" });
await page.pdf({
  path: "public/resume.pdf",
  format: "letter",
  printBackground: true,
});
await browser.close();
```

Astro's static HTML output is ideal for Puppeteer-based PDF generation:

- Clean HTML structure
- Print stylesheet support
- No JavaScript timing issues

### Limitations to Know

1. **Not for SPAs**: If you need client-side routing with React Router, use Next.js
2. **Island isolation**: Sharing state between islands requires external stores
3. **Newer ecosystem**: Fewer tutorials/Stack Overflow answers than Next.js
4. **File-based routing**: Same naming collision issues as Next.js (many `index.astro` files)
5. **Astro Studio shutdown**: Managed database service ended (Sept 2024) - use external DBs

---

## 11. Decision Framework for This Project

### Resume Website

| Requirement           | Astro Fit |
| --------------------- | --------- |
| Static HTML output    | Perfect   |
| Minimal JavaScript    | Perfect   |
| PDF generation        | Excellent |
| Fast builds           | Excellent |
| Content-focused       | Perfect   |
| React optional        | Yes       |
| Vercel/Netlify deploy | Trivial   |

**Verdict: Astro is the right choice**

### Contracting Website

| Requirement        | Astro Fit                          |
| ------------------ | ---------------------------------- |
| Marketing pages    | Perfect                            |
| Case studies (MDX) | Perfect                            |
| Contact form       | Good (use Formspree/Netlify Forms) |
| Blog/insights      | Perfect                            |
| Interactive demos  | Good (islands)                     |
| SEO                | Excellent                          |

**Verdict: Astro is the right choice**

### When to Reconsider

Switch to Next.js if the project evolves to need:

- User authentication/sessions
- Database-backed dashboards
- Real-time features
- Complex client-side routing
- Server actions/mutations

---

## 12. Quick Start

### Create New Project

```bash
npm create astro@latest curriculum-vitae
# Choose: Empty template
# TypeScript: Yes
# Install dependencies: Yes
```

### Add React Support

```bash
npx astro add react
```

### Add Tailwind

```bash
npx astro add tailwind
```

### Project Structure for Resume

```
curriculum-vitae/
├── astro.config.mjs
├── src/
│   ├── pages/
│   │   └── index.astro      # Web resume
│   ├── layouts/
│   │   └── ResumeLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Experience.astro
│   │   └── Skills.astro
│   ├── content/
│   │   └── resume.json      # Structured data
│   └── styles/
│       └── print.css        # PDF styles
├── public/
│   └── resume.pdf           # Generated
└── scripts/
    └── generate-pdf.js
```

### Run Development Server

```bash
npm run dev
# Open http://localhost:4321
```

### Build for Production

```bash
npm run build
# Output in /dist
```

---

## 13. Resources

### Official Documentation

- [Astro Docs](https://docs.astro.build/) - Comprehensive and well-written
- [Astro Tutorial](https://docs.astro.build/en/tutorial/) - Build a blog step-by-step
- [React Integration Guide](https://docs.astro.build/en/guides/integrations-guide/react/)

### Key Concepts

- [Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Deployment Guides](https://docs.astro.build/en/guides/deploy/)

### Community

- [Astro Discord](https://astro.build/chat) - Active community
- [GitHub Discussions](https://github.com/withastro/astro/discussions)
- [Astro Blog](https://astro.build/blog/) - Release notes and tutorials

### Comparisons

- [Astro vs Next.js](https://www.contentful.com/blog/astro-next-js-compared/)
- [Astro vs Other SSGs](https://docs.astro.build/en/guides/migrate-to-astro/)

---

## Summary

Astro is purpose-built for exactly this use case: a content-focused website (resume) that needs excellent performance, minimal JavaScript, and the ability to add React interactivity where needed. The learning curve for a React developer is minimal, and the output is ideal for both web viewing and PDF generation.

**Recommendation**: Proceed with Astro for both the resume project and contracting website.

---

_Research compiled December 6, 2025_
