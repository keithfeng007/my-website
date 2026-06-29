## Why

个人品牌站缺少基础 SEO 优化。当前 `index.html` 的 title 为默认的 "my-website"，无 meta description，无 robots.txt，语义化 HTML 不完整。搜索引擎和社交平台无法正确索引和展示站点信息。

## What Changes

- 优化 `index.html` 的 HTML tags（title、meta description、Open Graph、canonical）
- 审查并修复语义化 HTML 问题（确保正确使用 header/main/section/article/nav/footer）
- 添加 `public/robots.txt`，允许 Google 爬虫索引

## Capabilities

### New Capabilities
- `seo`: 基础 SEO 优化，HTML meta tags + 语义化 HTML + robots.txt

### Modified Capabilities
（无现有能力需要修改需求，仅实现层面的优化）

## Impact

- **index.html**: 添加 meta description、Open Graph tags、canonical URL
- **App.tsx**: 添加 `<main>` 和 `<footer>` 语义标签
- **Navbar.tsx**: 确认已有 `<nav>` 语义标签
- **新增文件**: `public/robots.txt`
- **新增依赖**: 无

## Out-of-Scope（严禁开发）

- ❌ Sitemap.xml 生成
- ❌ 结构化数据（JSON-LD）
- ❌ SEO 分析/监控工具集成
- ❌ 动态 meta tags（React Helmet 等）
- ❌ 社交媒体分享按钮