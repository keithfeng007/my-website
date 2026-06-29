## Why

个人品牌站缺少"关于我"区域，访客无法深入了解开发者的背景、技能和个性。需要在 Projects Section 和 Contact Section 之间添加 About Section，展示个人照片、简介和品牌标签。

## What Changes

- 新增 About Section，位于 Projects Section 下方
- 左侧展示个人照片，右侧展示 3 段个人简介
- 下方展示品牌标签
- 在 App.tsx 中引入 About 组件

## Capabilities

### New Capabilities
- `about-section`: 关于我区域，个人照片 + 简介 + 品牌标签

### Modified Capabilities
（无现有能力需要修改）

## Impact

- **App.tsx**: 在 Projects 和 Contact 之间插入 About 组件
- **新增文件**: About.tsx
- **新增资源**: 个人照片占位图
- **新增依赖**: 无

## Out-of-Scope（严禁开发）

- ❌ 联系我的表单
- ❌ 社交媒体链接
- ❌ 技能进度条/图表
- ❌ 时间线/经历列表