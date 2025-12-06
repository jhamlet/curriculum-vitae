# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run build    # Single build - outputs to ./site
npm run watch    # Watch mode - rebuilds on changes
npm run serve    # Serve the ./site directory locally
npm start        # Watch + serve combined
```

## Architecture

This is a Metalsmith-based static site generator that converts the resume (written in Markdown) to a print-ready HTML page.

**Build Pipeline** (`bin/build.js`):
1. Filters to Markdown files only
2. Converts Markdown to HTML (metalsmith-markdown)
3. Wraps in EJS template (metalsmith-layouts)
4. Compiles LESS to CSS
5. Outputs static site to `./site`

**Key Files**:
- `README.md` - The actual resume content in Markdown format
- `template/layout.ejs` - HTML wrapper template
- `template/layout.less` - Print-optimized stylesheet (8.5" letter width, two-column layout with blue sidebar)

**Output**: Static HTML designed for printing - standard letter dimensions with a sidebar for contact/skills and main area for experience.
