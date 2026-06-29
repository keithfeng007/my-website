## Why

个人品牌站缺少项目展示区域。访客无法了解开发者的项目作品。需要在 Hero Section 下方添加项目展示区，以卡片形式展示项目截图、名称、简介和 GitHub 链接。

## What Changes

- 新增 Projects Section，位于 Hero Section 下方，卡片式布局展示项目
- 每张项目卡片包含：项目截图、项目名称、项目简介、GitHub 链接
- 最少展示 4 个项目
- 鼠标悬浮卡片时有微特效（scale + shadow）
- 替换 App.tsx 中 `#projects` 占位 section 为真实 Projects 组件
- Hero Section CTA 按钮锚点已指向 `#projects`，无需修改

## Capabilities

### New Capabilities
- `project-section`: 项目展示区，卡片布局，悬浮微特效

### Modified Capabilities
- `hero-section`: CTA 按钮锚点确认指向 `#projects`（当前已正确，无需代码修改）

## Impact

- **App.tsx**: 替换 `#projects` 占位 section 为 Projects 组件
- **新增文件**: Projects.tsx, ProjectCard.tsx
- **新增资源**: 项目截图占位图（使用 placeholder 或 SVG）
- **新增依赖**: 无

## Out-of-Scope（严禁开发）

- ❌ 项目详情页
- ❌ 项目搜索功能
- ❌ 项目分类/标签筛选
- ❌ 项目数据从 API 动态获取
- ❌ 项目截图的懒加载优化（后续单独处理）