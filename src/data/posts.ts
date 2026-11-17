/* ================= 自动生成文件 ================= */

// 本文件由 scripts/generate-posts.mjs 自动生成。
// 请直接编辑 src/content/blog/*.md，不要手动修改本文件。

export const posts = [
  { slug: 'markdown-editor-complete-showcase', title: 'NarCard 编辑器完整功能与公式展示', iso: '2026-11-16', short: 'Nov 16', display: 'Nov 16, 2026', tags: ['Markdown', 'Editor', 'Formula', 'Showcase'], category: 'Guide', variant: 0,
    excerpt: '一篇可直接作为写作手册使用的示例文章，集中展示 Markdown 排版、代码、提示块、表格、媒体、任务列表与 KaTeX 数学公式。' },
  { slug: 'a-quiet-introduction', title: 'A Quiet Introduction', iso: '2025-01-10', short: 'Jan 10', display: 'Jan 10, 2025', tags: ['Example', 'Notes'], category: 'Notes', variant: 0,
    excerpt: 'A short example entry for demonstrating the template.' },
  { slug: 'building-a-small-static-site', title: 'Building a Small Static Site', iso: '2025-01-10', short: 'Jan 10', display: 'Jan 10, 2025', tags: ['Example', 'Notes'], category: 'Notes', variant: 0,
    excerpt: 'A short example entry for demonstrating the template.' },
] as const;

export type DemoPost = (typeof posts)[number];

export const tagCounts = [...new Set<string>(posts.flatMap((post) => [...post.tags]))]
  .map((tag) => ({ tag, count: posts.filter((post) => post.tags.some((value) => value === tag)).length }))
  .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
