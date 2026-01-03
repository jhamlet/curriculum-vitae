const express = require("express");
const { marked } = require("marked");
const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = parseInt(process.argv[2]) || 4089;
const ROOT = process.argv[3] ? path.resolve(process.argv[3]) : process.cwd();

// Folders to exclude from sidebar
const EXCLUDED_FOLDERS = new Set([
  "node_modules",
  ".git",
  ".obsidian",
  "_templates",
  "scripts",
  "site",
  "template",
  "bin",
]);

// Configure marked for GFM (tables, strikethrough, etc.)
marked.setOptions({
  gfm: true,
  breaks: false,
});

// Custom renderer for checkboxes
const renderer = new marked.Renderer();
renderer.listitem = function (text) {
  const content = text.text || text;
  if (content.startsWith("[x] ") || content.startsWith("[X] ")) {
    return `<li class="task-item done"><input type="checkbox" checked disabled> ${content.slice(4)}</li>\n`;
  }
  if (content.startsWith("[ ] ")) {
    return `<li class="task-item"><input type="checkbox" disabled> ${content.slice(4)}</li>\n`;
  }
  if (content.startsWith("[-] ")) {
    return `<li class="task-item cancelled"><input type="checkbox" disabled> <del>${content.slice(4)}</del></li>\n`;
  }
  if (content.startsWith("[/] ")) {
    return `<li class="task-item in-progress"><input type="checkbox" disabled> ${content.slice(4)}</li>\n`;
  }
  return `<li>${content}</li>\n`;
};

marked.use({ renderer });

// Generate directory tree for sidebar
function buildDirectoryTree(dirPath, urlBase = "", depth = 0) {
  if (depth > 4) return ""; // Limit depth

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const dirs = entries
    .filter(
      (e) =>
        e.isDirectory() &&
        !e.name.startsWith(".") &&
        !EXCLUDED_FOLDERS.has(e.name),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const files = entries
    .filter(
      (e) => e.isFile() && e.name.endsWith(".md") && !e.name.startsWith("."),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  let html = "";

  for (const dir of dirs) {
    const href = path.join(urlBase, dir.name);
    const fullPath = path.join(dirPath, dir.name);
    const children = buildDirectoryTree(fullPath, href, depth + 1);
    const hasChildren = children.trim().length > 0;

    html += `<li class="tree-folder${hasChildren ? " has-children" : ""}">`;
    if (hasChildren) {
      html += `<span class="tree-toggle">▶</span>`;
    }
    html += `<a href="${href}">${dir.name}</a>`;
    if (hasChildren) {
      html += `<ul class="tree-children">${children}</ul>`;
    }
    html += `</li>\n`;
  }

  for (const file of files) {
    // Skip index files, accessed via folder
    if (file.name === "DASHBOARD.md" || file.name === "README.md") continue;
    const href = path.join(urlBase, file.name);
    const displayName = file.name.slice(0, -3);
    html += `<li class="tree-file"><a href="${href}">${displayName}</a></li>\n`;
  }

  return html;
}

// HTML template
function htmlTemplate(title, content, breadcrumb, currentPath) {
  const sidebarTree = buildDirectoryTree(ROOT, "/");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    :root {
      --bg: #ffffff;
      --sidebar-bg: #f6f8fa;
      --text: #24292e;
      --link: #0366d6;
      --border: #e1e4e8;
      --code-bg: #f6f8fa;
      --table-border: #dfe2e5;
      --hover-bg: #e1e4e8;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0d1117;
        --sidebar-bg: #161b22;
        --text: #c9d1d9;
        --link: #58a6ff;
        --border: #30363d;
        --code-bg: #161b22;
        --table-border: #30363d;
        --hover-bg: #21262d;
      }
    }
    /* Manual theme overrides */
    html.theme-light {
      --bg: #ffffff;
      --sidebar-bg: #f6f8fa;
      --text: #24292e;
      --link: #0366d6;
      --border: #e1e4e8;
      --code-bg: #f6f8fa;
      --table-border: #dfe2e5;
      --hover-bg: #e1e4e8;
    }
    html.theme-dark {
      --bg: #0d1117;
      --sidebar-bg: #161b22;
      --text: #c9d1d9;
      --link: #58a6ff;
      --border: #30363d;
      --code-bg: #161b22;
      --table-border: #30363d;
      --hover-bg: #21262d;
    }
    * { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      background: var(--bg);
      color: var(--text);
      display: flex;
    }
    a { color: var(--link); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* Sidebar */
    .sidebar {
      width: 260px;
      min-width: 260px;
      height: 100vh;
      overflow-y: auto;
      background: var(--sidebar-bg);
      border-right: 1px solid var(--border);
      padding: 1rem;
      position: sticky;
      top: 0;
    }
    .sidebar-header {
      font-weight: 600;
      font-size: 1.1em;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border);
    }
    .sidebar-header a { color: var(--text); }
    .theme-toggle {
      cursor: pointer;
      padding: 0.2em 0.4em;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--bg);
      color: var(--text);
      font-size: 0.85em;
      float: right;
    }
    .theme-toggle:hover { background: var(--hover-bg); }

    /* Tree styles */
    .tree, .tree ul {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }
    .tree ul { padding-left: 1.2em; }
    .tree li {
      padding: 0.15em 0;
      white-space: nowrap;
    }
    .tree-toggle {
      display: inline-block;
      width: 1em;
      cursor: pointer;
      user-select: none;
      font-size: 0.7em;
      transition: transform 0.15s;
    }
    .tree-folder.has-children.open > .tree-toggle {
      transform: rotate(90deg);
    }
    .tree-children {
      display: none;
    }
    .tree-folder.open > .tree-children {
      display: block;
    }
    .tree-folder > a::before { content: "📁 "; font-size: 0.9em; }
    .tree-file > a::before { content: "📄 "; font-size: 0.9em; }
    .tree li a {
      padding: 0.1em 0.3em;
      border-radius: 3px;
    }
    .tree li a:hover {
      background: var(--hover-bg);
      text-decoration: none;
    }

    /* Main content */
    .main-wrapper {
      flex: 1;
      min-width: 0;
      overflow-y: auto;
      height: 100vh;
    }
    .content {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.3em;
    }
    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.25em; border-bottom: none; }
    code {
      background: var(--code-bg);
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-size: 0.9em;
    }
    pre {
      background: var(--code-bg);
      padding: 1em;
      border-radius: 6px;
      overflow-x: auto;
    }
    pre code { background: none; padding: 0; }
    blockquote {
      border-left: 4px solid var(--border);
      margin: 0;
      padding-left: 1em;
      color: #6a737d;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1em 0;
    }
    th, td {
      border: 1px solid var(--table-border);
      padding: 0.5em 1em;
      text-align: left;
    }
    th { background: var(--code-bg); }
    ul, ol { padding-left: 2em; }
    li { margin: 0.25em 0; }
    .task-item { list-style: none; margin-left: -1.5em; }
    .task-item input { margin-right: 0.5em; }
    .task-item.done { color: #6a737d; }
    .task-item.cancelled { color: #6a737d; }
    .breadcrumb {
      font-size: 0.9em;
      margin-bottom: 1em;
      padding-bottom: 0.5em;
      border-bottom: 1px solid var(--border);
    }
    .breadcrumb a { margin: 0 0.25em; }
    .directory-listing {
      list-style: none;
      padding: 0;
    }
    .directory-listing li {
      padding: 0.5em 0;
      border-bottom: 1px solid var(--border);
    }
    .directory-listing .folder::before { content: "📁 "; }
    .directory-listing .file::before { content: "📄 "; }
    hr { border: none; border-top: 1px solid var(--border); margin: 2em 0; }
    img { max-width: 100%; }

    /* Mobile */
    @media (max-width: 768px) {
      body { flex-direction: column; }
      .sidebar {
        width: 100%;
        height: auto;
        max-height: 40vh;
        position: relative;
        border-right: none;
        border-bottom: 1px solid var(--border);
      }
      .main-wrapper { height: auto; }
    }

    /* Print */
    @media print {
      .sidebar { display: none; }
      body { display: block; font-size: 11pt; }
      .main-wrapper {
        height: auto;
        overflow: visible;
      }
      .content {
        max-width: 100%;
        padding: 0;
      }
      :root {
        --bg: white;
        --text: black;
        --link: black;
        --border: #ccc;
        --code-bg: #f5f5f5;
        --table-border: #999;
      }
      a[href^="http"]::after {
        content: " (" attr(href) ")";
        font-size: 0.8em;
      }
      h1, h2, h3, h4, h5, h6 { page-break-after: avoid; }
      pre, blockquote, table, img { page-break-inside: avoid; }
      .breadcrumb { display: none; }
      @page { margin: 0.75in; }
    }
  </style>
</head>
<body>
  <nav class="sidebar">
    <div class="sidebar-header">
      <button class="theme-toggle" title="Toggle theme">🌓</button>
      <a href="/">Curriculum Vitae</a>
    </div>
    <ul class="tree">
      ${sidebarTree}
    </ul>
  </nav>
  <div class="main-wrapper">
    <div class="content">
      <nav class="breadcrumb">${breadcrumb}</nav>
      <main>${content}</main>
    </div>
  </div>
  <script>
    // Toggle folder open/closed
    document.querySelectorAll('.tree-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const folder = toggle.parentElement;
        folder.classList.toggle('open');
      });
    });

    // Expand folders in current path
    const currentPath = "${currentPath}";
    if (currentPath && currentPath !== '/') {
      const parts = currentPath.split('/').filter(Boolean);
      let accumulated = '';
      for (const part of parts) {
        accumulated += '/' + part;
        const link = document.querySelector('.tree a[href="' + accumulated + '"], .tree a[href="' + accumulated + '.md"]');
        if (link) {
          let parent = link.parentElement;
          while (parent && !parent.classList.contains('tree')) {
            if (parent.classList.contains('tree-folder')) {
              parent.classList.add('open');
            }
            parent = parent.parentElement;
          }
        }
      }
    }

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const themes = ['auto', 'light', 'dark'];
    const icons = { auto: '🌓', light: '☀️', dark: '🌙' };

    function getStoredTheme() {
      return localStorage.getItem('theme') || 'auto';
    }

    function applyTheme(theme) {
      document.documentElement.classList.remove('theme-light', 'theme-dark');
      if (theme === 'light') {
        document.documentElement.classList.add('theme-light');
      } else if (theme === 'dark') {
        document.documentElement.classList.add('theme-dark');
      }
      themeToggle.textContent = icons[theme];
      themeToggle.title = 'Theme: ' + theme;
    }

    function cycleTheme() {
      const current = getStoredTheme();
      const next = themes[(themes.indexOf(current) + 1) % themes.length];
      localStorage.setItem('theme', next);
      applyTheme(next);
    }

    themeToggle.addEventListener('click', cycleTheme);
    applyTheme(getStoredTheme());
  </script>
</body>
</html>`;
}

// Generate breadcrumb navigation
function getBreadcrumb(urlPath) {
  const parts = urlPath.split("/").filter(Boolean);
  let crumbs = ['<a href="/">home</a>'];
  let accumulated = "";

  for (let i = 0; i < parts.length; i++) {
    accumulated += "/" + parts[i];
    if (i === parts.length - 1) {
      crumbs.push(`<span>${parts[i]}</span>`);
    } else {
      crumbs.push(`<a href="${accumulated}">${parts[i]}</a>`);
    }
  }

  return crumbs.join(" / ");
}

// Serve static files (images, etc.)
app.use(
  "/attachments",
  express.static(path.join(ROOT, "attachments"), { fallthrough: true }),
);

// Main route handler
app.get("*", (req, res) => {
  let urlPath = decodeURIComponent(req.path);
  let filePath = path.join(ROOT, urlPath);

  // Security: prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    return res.status(403).send("Forbidden");
  }

  try {
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Try DASHBOARD.md first, then README.md as index
      const dashboardPath = path.join(filePath, "DASHBOARD.md");
      if (fs.existsSync(dashboardPath)) {
        return serveMarkdown(dashboardPath, urlPath, res);
      }
      const readmePath = path.join(filePath, "README.md");
      if (fs.existsSync(readmePath)) {
        return serveMarkdown(readmePath, urlPath, res);
      }

      // Otherwise show directory listing
      return serveDirectory(filePath, urlPath, res);
    }

    if (stats.isFile()) {
      if (filePath.endsWith(".md")) {
        return serveMarkdown(filePath, urlPath, res);
      }
      // Serve other files directly
      return res.sendFile(filePath);
    }
  } catch (err) {
    // Try adding .md extension
    if (!filePath.endsWith(".md")) {
      const mdPath = filePath + ".md";
      if (fs.existsSync(mdPath)) {
        return serveMarkdown(mdPath, urlPath, res);
      }
    }

    res
      .status(404)
      .send(
        htmlTemplate(
          "Not Found",
          "<h1>404 - Not Found</h1>",
          getBreadcrumb(urlPath),
          urlPath,
        ),
      );
  }
});

function serveMarkdown(filePath, urlPath, res) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);

  const html = marked(content);
  const title = frontmatter.title || path.basename(filePath, ".md");
  const breadcrumb = getBreadcrumb(urlPath);

  res.send(htmlTemplate(title, html, breadcrumb, urlPath));
}

function serveDirectory(dirPath, urlPath, res) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const breadcrumb = getBreadcrumb(urlPath);

  // Sort: directories first, then files
  const dirs = entries.filter(
    (e) => e.isDirectory() && !e.name.startsWith("."),
  );
  const files = entries.filter((e) => e.isFile() && !e.name.startsWith("."));

  dirs.sort((a, b) => a.name.localeCompare(b.name));
  files.sort((a, b) => a.name.localeCompare(b.name));

  let listItems = "";

  for (const dir of dirs) {
    const href = path.join(urlPath, dir.name);
    listItems += `<li class="folder"><a href="${href}">${dir.name}/</a></li>\n`;
  }

  for (const file of files) {
    const href = path.join(urlPath, file.name);
    const displayName = file.name.endsWith(".md")
      ? file.name.slice(0, -3)
      : file.name;
    listItems += `<li class="file"><a href="${href}">${displayName}</a></li>\n`;
  }

  const title = urlPath === "/" ? "Curriculum Vitae" : path.basename(urlPath);
  const content = `<h1>${title}</h1>\n<ul class="directory-listing">\n${listItems}</ul>`;

  res.send(htmlTemplate(title, content, breadcrumb, urlPath));
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving markdown files from: ${ROOT}`);
});
