## Context

当前项目已有 Hero Section（含 ParticleCanvas + ThemeToggle），但缺少全局导航。ThemeToggle 目前嵌在 Hero 右上角，需要迁移到 Navbar 中统一管理。

## Goals / Non-Goals

**Goals:**
- 固定顶部导航栏，品牌标识 + 锚点导航
- 平滑滚动到对应 section
- 滚动时 backdrop-blur 模糊背景
- ThemeToggle 迁移至 Navbar

**Non-Goals:**
- 搜索功能
- 多级下拉菜单
- 用户登录/注册
- 移动端汉堡菜单
- 滚动监听高亮当前 section

## Decisions

### 1. 导航栏实现：纯 CSS + scroll 事件

**选择：`position: fixed` + `useEffect` 监听 scroll**

理由：零依赖，轻量。通过 `window.scrollY` 判断是否添加 `backdrop-blur` class。不引入第三方滚动库。

### 2. 平滑滚动：CSS `scroll-behavior: smooth`

**选择：在 `index.css` 中设置 `html { scroll-behavior: smooth }`，导航链接使用 `<a href="#section-id">`**

理由：原生 CSS 方案，零 JS，性能最优。兼容所有现代浏览器。

### 3. ThemeToggle 迁移

**选择：从 Hero.tsx 中移除 ThemeToggle，在 Navbar.tsx 中引入**

理由：ThemeToggle 属于全局功能，应在全局导航中而非局部 Hero 中。

### 4. 组件结构

```
src/
  components/
    Navbar/
      Navbar.tsx    — 顶部固定导航栏
    Hero/
      Hero.tsx      — 移除 ThemeToggle，增加 pt 补偿导航栏高度
```

### 5. 模糊背景策略

- `scrollY === 0`：`bg-transparent`，无 blur
- `scrollY > 0`：`bg-white/80 dark:bg-gray-900/80` + `backdrop-blur-md`
- 过渡使用 `transition-colors duration-300`（尊重 prefers-reduced-motion 时移除 transition）

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| scroll 事件性能 | 使用 `passive: true`，不触发重排 |
| 锚点跳转被导航栏遮挡 | 目标 section 添加 `scroll-margin-top` 补偿导航栏高度 |
| GitHub Pages base path | 使用纯锚点 `#id`，不受 base path 影响 |