## Context

当前项目是 Vite 默认模板，App.tsx 包含计数器和文档链接。需要替换为个人品牌站的 Hero Section。技术栈为 React 19 + Vite 7 + TypeScript + Tailwind CSS v4。

## Goals / Non-Goals

**Goals:**
- 全屏高度 Hero，居中展示个人信息和 CTA
- CSS 渐变底色 + Canvas 粒子叠加，营造科技感
- 亮/暗模式切换，状态持久化，粒子颜色同步
- 首屏性能 < 2 秒

**Non-Goals:**
- 动画效果（粒子以外的过渡/滚动动画）
- 导航栏
- 后端 API
- 响应式布局优化
- SEO / 国际化

## Decisions

### 1. 粒子背景：Canvas 自绘 vs 第三方库

**选择：Canvas 自绘**

理由：零依赖，包体积零增长；完全可控粒子数量、颜色、运动逻辑；首屏性能可控。tsparticles 功能丰富但体积 ~40KB gzip，对首屏 < 2 秒目标有风险。

### 2. 主题管理：React Context + localStorage

**选择：ThemeContext + localStorage + prefers-color-scheme**

理由：轻量，无额外依赖。localStorage 持久化用户偏好，prefers-color-scheme 作为默认值。通过 `<html class="dark">` + Tailwind `dark:` 前缀实现样式切换。

### 3. 防止 FOUC：index.html 内联脚本

**选择：在 `<head>` 中注入一小段内联脚本，在 React 渲染前读取 localStorage 并设置 dark class**

理由：避免暗色模式用户看到白色闪烁。脚本极小（< 200 字节），不影响性能。

### 4. 组件结构

```
src/
  components/
    Hero/
      Hero.tsx           — 主容器，全屏高度，CSS 渐变底色
      ParticleCanvas.tsx — Canvas 粒子背景
      ThemeToggle.tsx    — 亮/暗切换按钮
  contexts/
    ThemeContext.tsx      — 主题状态管理
```

### 5. 粒子降级策略

检测 `prefers-reduced-motion`，若用户偏好减少动效，则跳过 Canvas 渲染，仅显示 CSS 渐变底色。

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|---------|
| Canvas 在低端设备可能卡顿 | prefers-reduced-motion 降级；粒子数量按屏幕面积动态调整 |
| 移动端粒子密度不适 | 粒子数量 = Math.floor(屏幕面积 / 10000)，上限 80 |
| FOUC 闪烁 | index.html 内联脚本提前设置 dark class |
| 文字在粒子上可读性差 | 粒子层 opacity 0.6 + 文字层 z-index 在粒子上方 |