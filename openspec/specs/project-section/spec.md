# project-section Specification

## Purpose
TBD - created by archiving change add-project-section. Update Purpose after archive.
## Requirements
### Requirement: 项目卡片布局

Projects Section MUST 使用卡片式布局展示项目。每张卡片 MUST 包含项目截图、项目名称、项目简介和 GitHub 链接。MUST 展示至少 4 个项目。

#### Scenario: 正常展示项目卡片
- **GIVEN** 用户滚动到 Projects Section
- **WHEN** 页面加载完成
- **THEN** 以卡片网格形式展示至少 4 个项目，每张卡片包含截图、名称、简介、GitHub 链接

#### Scenario: 项目截图加载失败
- **GIVEN** 项目截图 URL 无效或加载失败
- **WHEN** 图片无法显示
- **THEN** 卡片显示占位图或 fallback 样式，不影响其他卡片布局

---

### Requirement: 悬浮微特效

鼠标悬浮在项目卡片上时 MUST 显示微特效。

#### Scenario: 鼠标悬浮微特效
- **GIVEN** 项目卡片已渲染
- **WHEN** 鼠标悬浮在卡片上
- **THEN** 卡片显示 scale 放大和 shadow 加深效果

#### Scenario: 悬浮特效尊重 prefers-reduced-motion
- **GIVEN** 用户系统设置了 prefers-reduced-motion
- **WHEN** 鼠标悬浮在卡片上
- **THEN** 不显示过渡动画效果，但 hover 状态样式仍生效

---

### Requirement: GitHub 链接

每张项目卡片的 GitHub 链接 MUST 在新标签页打开。

#### Scenario: 点击 GitHub 链接
- **GIVEN** 项目卡片已渲染
- **WHEN** 用户点击 GitHub 链接
- **THEN** 链接在新标签页打开（target="_blank"），含 rel="noopener noreferrer"

#### Scenario: GitHub 链接键盘可访问
- **GIVEN** 用户使用键盘导航
- **WHEN** 用户 Tab 聚焦到 GitHub 链接
- **THEN** 链接显示 focus 样式，按 Enter 可在新标签页打开

---

### Requirement: 项目展示区位置

Projects Section MUST 显示在 Hero Section 下方，id 为 projects。

#### Scenario: 导航跳转到项目区
- **GIVEN** 用户点击导航栏"项目"链接或 Hero CTA 按钮
- **WHEN** 触发锚点跳转
- **THEN** 页面平滑滚动到 id 为 projects 的 section

