## Phase 1: 主题基础设施

- [x] 1.1 创建 ThemeContext.tsx，提供 theme / toggleTheme，读取 localStorage + prefers-color-scheme 默认值
- [x] 1.2 在 index.html `<head>` 中注入内联脚本，防止暗色模式 FOUC
- [x] 1.3 在 main.tsx 中包裹 ThemeProvider，在 App 外层

## Phase 2: 粒子背景组件

- [x] 2.1 创建 ParticleCanvas.tsx，实现轻量粒子系统（粒子类 + requestAnimationFrame 驱动）
- [x] 2.2 粒子颜色根据 theme 动态切换（亮色：半透明白/蓝；暗色：半透明紫/青）
- [x] 2.3 添加 prefers-reduced-motion 检测，降级为不渲染粒子
- [x] 2.4 添加 resize 监听（debounce 200ms），组件卸载时清理 animationFrame 和事件监听

## Phase 3: Hero Section 组装

- [x] 3.1 创建 Hero.tsx，全屏高度容器，CSS 渐变底色（亮/暗各一套）
- [x] 3.2 居中展示姓名、职业、一句话介绍（使用 Tailwind 排版）
- [x] 3.3 添加 CTA 按钮，跳转项目链接，支持键盘 focus 样式
- [x] 3.4 创建 ThemeToggle.tsx，太阳/月亮图标切换按钮，支持键盘操作

## Phase 4: 集成与清理

- [x] 4.1 替换 App.tsx 内容为 Hero Section，移除 App.css，删除 Vite 模板相关资源
- [x] 4.2 验证亮/暗模式切换正常，粒子颜色同步更新
- [x] 4.3 验证 prefers-reduced-motion 下降级为静态渐变
- [x] 4.4 验证 CTA 链接在 GitHub Pages base path 下正确跳转