## ADDED Requirements

### Requirement: HTML Meta Tags

index.html MUST 包含有意义的 title、meta description 和 Open Graph tags。MUST 包含 canonical URL。

#### Scenario: 搜索引擎索引
- **GIVEN** 搜索引擎爬虫访问页面
- **WHEN** 解析 HTML head
- **THEN** 读取到有意义的 title、meta description、canonical URL

#### Scenario: 社交平台分享
- **GIVEN** 用户在社交平台分享页面链接
- **WHEN** 平台抓取 Open Graph tags
- **THEN** 显示正确的标题、描述和图片

#### Scenario: canonical URL 包含 base path
- **GIVEN** 项目部署在 GitHub Pages，base path 为 /my-website/
- **WHEN** 页面加载
- **THEN** canonical URL MUST 包含 /my-website/ 前缀

---

### Requirement: 语义化 HTML

页面 MUST 使用正确的语义化 HTML 标签（header、main、section、article、nav、footer）。

#### Scenario: 页面语义结构完整
- **GIVEN** 页面完整渲染
- **WHEN** 使用辅助技术或爬虫解析页面
- **THEN** 页面包含 `<header>`（含 `<nav>`）、`<main>`（含 `<section>`）、`<footer>`

#### Scenario: 缺少 footer 语义标签
- **GIVEN** 当前页面无 `<footer>` 标签
- **WHEN** 页面渲染
- **THEN** MUST 添加 `<footer>` 语义标签

---

### Requirement: robots.txt

MUST 添加 robots.txt，允许 Google 爬虫索引全站。

#### Scenario: 爬虫访问 robots.txt
- **GIVEN** 搜索引擎爬虫请求 /robots.txt
- **WHEN** 读取文件内容
- **THEN** 允许所有爬虫索引全站内容

#### Scenario: robots.txt 包含 Sitemap 引用（边界）
- **GIVEN** robots.txt 不包含 Sitemap 引用
- **WHEN** 爬虫解析 robots.txt
- **THEN** 不影响索引，Sitemap 为 out-of-scope