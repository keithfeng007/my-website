## Context

当前项目 index.html 仅有默认 title "my-website"，无 meta description，无 Open Graph tags，无 canonical URL。App.tsx 缺少 `<main>` 和 `<footer>` 语义标签。无 robots.txt 文件。

## Goals / Non-Goals

**Goals:**
- 有意义的 HTML meta tags（title、description、OG）
- 语义化 HTML 审查和修复
- robots.txt 允许 Google 索引

**Non-Goals:**
- Sitemap.xml
- JSON-LD 结构化数据
- 动态 meta tags（React Helmet）
- 社交分享按钮

## Decisions

### 1. Meta Tags：静态写入 index.html

**选择：在 index.html `<head>` 中直接写入静态 meta tags**

理由：SPA 单页应用，所有页面共享同一 HTML。无需动态 meta tags，静态写入最简单高效。title 和 description 反映个人品牌站定位。

### 2. Open Graph Tags

**选择：添加 og:title、og:description、og:image、og:url、og:type**

理由：社交平台分享时展示正确信息。og:image 使用 favicon.svg 作为占位，后续可替换为专用社交图。

### 3. 语义化 HTML 修复

**选择：**
- App.tsx 添加 `<main>` 包裹内容区域
- App.tsx 添加 `<footer>` 作为页面底部
- Navbar 已有 `<nav>`，无需修改
- Hero/Projects 已使用 `<section>`，无需修改
- ProjectCard 已使用 `<article>`，无需修改

### 4. robots.txt

**选择：`User-agent: *` + `Allow: /`**

理由：最简配置，允许所有爬虫索引全站。

### 5. Canonical URL

**选择：`<link rel="canonical" href="https://username.github.io/my-website/" />`**

理由：防止 GitHub Pages 多域名（github.io 和自定义域名）导致重复内容问题。

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| og:image 占位图不够精美 | 后续替换为专用社交分享图（1200x630） |
| canonical URL 硬编码 | 部署到自定义域名时需手动更新 |
| 静态 meta 无法按页面变化 | SPA 单页应用，当前可接受 |