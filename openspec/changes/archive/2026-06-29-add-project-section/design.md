## Context

当前项目已有 Hero Section 和 Navbar。App.tsx 中 `#projects` section 为占位内容，需要替换为真实的项目展示组件。

## Goals / Non-Goals

**Goals:**
- 卡片式项目展示区，位于 Hero 下方
- 每张卡片含截图、名称、简介、GitHub 链接
- 至少 4 个项目
- 鼠标悬浮微特效（scale + shadow）
- 支持 prefers-reduced-motion 降级

**Non-Goals:**
- 项目详情页
- 项目搜索/筛选
- API 动态获取项目数据
- 图片懒加载优化

## Decisions

### 1. 项目数据：静态 JSON 数组

**选择：在 Projects.tsx 中定义静态项目数据数组**

理由：零依赖，简单直接。后续需要动态化时只需替换数据源，组件无需改动。

### 2. 卡片布局：CSS Grid

**选择：Tailwind `grid grid-cols-1 md:grid-cols-2` 两列布局**

理由：4 个项目两列排列最合适，响应式单列。纯 Tailwind 实现，无额外依赖。

### 3. 项目截图：SVG 占位图

**选择：使用内联 SVG 作为项目截图占位**

理由：无需外部图片资源，构建体积最小。后续替换为真实截图只需改 `image` 字段。

### 4. 悬浮微特效

**选择：`hover:scale-[1.02] hover:shadow-xl transition-transform duration-200`**

理由：轻量 CSS 方案，配合 `prefers-reduced-motion` 降级为无过渡。

### 5. 组件结构

```
src/
  components/
    Projects/
      Projects.tsx      — 项目展示区容器
      ProjectCard.tsx   — 单个项目卡片
```

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| 截图加载失败 | ProjectCard 中 img 加 onError fallback |
| GitHub 链接安全 | `rel="noopener noreferrer"` |
| prefers-reduced-motion | `motion-reduce:transition-none` |