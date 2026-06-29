## Why

个人品牌站需要一个首屏视觉冲击区（Hero Section），让访客在 3 秒内了解我是谁、做什么，并引导他们查看我的项目。当前首页是 Vite 默认模板，没有任何个人品牌信息。

## What Changes

- 新增全屏高度 Hero Section，居中展示姓名、职业、一句话介绍及 CTA 按钮
- 新增 Canvas 粒子背景，叠加在 CSS 渐变底色之上
- 新增亮/暗模式切换功能（ThemeToggle 组件 + ThemeContext）
- 替换当前 App.tsx 中的 Vite 默认内容

## Capabilities

### New Capabilities
- `hero-section`: 全屏 Hero 区域，包含个人信息展示、CTA 按钮、粒子背景、主题切换

### Modified Capabilities
（无现有能力需要修改）

## Impact

- **App.tsx**: 当前模板代码将被替换为 Hero Section
- **App.css**: 将被移除，所有样式迁移至 Tailwind CSS
- **新增依赖**: 无（Canvas 粒子自绘，不引入第三方库）
- **新增文件**: Hero.tsx, ParticleCanvas.tsx, ThemeToggle.tsx, ThemeContext.tsx
- **index.html**: 需注入内联脚本防止主题闪烁（FOUC）

## Out-of-Scope（严禁开发）

- ❌ 动画效果（粒子以外的过渡动画、滚动动画等）
- ❌ 导航栏
- ❌ 后端 API
- ❌ 响应式布局优化（仅保证桌面端可用）
- ❌ SEO 优化
- ❌ 国际化