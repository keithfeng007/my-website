## Context

当前项目已有 Hero Section、Navbar、Projects Section。App.tsx 中 Projects 和 Contact 之间需要插入 About Section。

## Goals / Non-Goals

**Goals:**
- 左右两栏布局：左侧照片，右侧 3 段简介
- 下方品牌标签
- 照片 lazy loading
- 支持 prefers-reduced-motion

**Non-Goals:**
- 联系我的表单
- 社交媒体链接
- 技能进度条/图表
- 时间线/经历列表

## Decisions

### 1. 布局：Flex 两栏

**选择：`flex flex-col md:flex-row`，移动端纵向堆叠，桌面端左右排列**

理由：纯 Tailwind 实现，响应式自然。左侧照片固定宽度，右侧简介自适应。

### 2. 个人照片：SVG 占位头像

**选择：使用内联 SVG 作为占位头像**

理由：与 ProjectCard 的 FallbackImage 策略一致，零外部依赖。后续替换为真实照片只需改 `src`。

### 3. 品牌标签：Badge 样式

**选择：`inline-flex rounded-full px-4 py-1.5 text-sm` 胶囊标签**

理由：科技感风格，与项目整体调性一致。纯 Tailwind 实现。

### 4. 组件结构

```
src/
  components/
    About/
      About.tsx    — 关于我区域容器
```

### 5. 照片 lazy loading

**选择：`<img loading="lazy" />`**

理由：原生 HTML 属性，零 JS，浏览器原生支持。匹配 config.yaml 中"所有图片使用 lazy loading"的要求。

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| 照片加载失败 | img onError + SVG fallback |
| 移动端两栏挤压 | `flex-col md:flex-row` 堆叠布局 |
| 品牌标签过多换行 | `flex-wrap` 允许自然换行 |