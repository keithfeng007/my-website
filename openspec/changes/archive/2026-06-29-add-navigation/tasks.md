## Phase 1: Navbar 组件

- [x] 1.1 创建 Navbar.tsx，固定顶部布局，左侧品牌标识，右侧导航链接（首页、项目、联系我）
- [x] 1.2 实现 scroll 监听，scrollY > 0 时添加 backdrop-blur + 半透明背景，scrollY === 0 时透明
- [x] 1.3 将 ThemeToggle 从 Hero.tsx 移至 Navbar.tsx 右侧
- [x] 1.4 导航链接使用 `<a href="#id">`，支持键盘 focus 样式

## Phase 2: 平滑滚动与布局调整

- [x] 2.1 在 index.css 中添加 `html { scroll-behavior: smooth }`
- [x] 2.2 Hero.tsx 移除 ThemeToggle，添加顶部 padding 补偿导航栏高度
- [x] 2.3 App.tsx 引入 Navbar，为后续 section 预留占位锚点（#projects、#contact）

## Phase 3: 验证

- [x] 3.1 验证导航链接平滑滚动到对应 section
- [x] 3.2 验证滚动时模糊背景效果正常，顶部时透明
- [x] 3.3 验证 ThemeToggle 在 Navbar 中功能正常
- [x] 3.4 验证键盘 Tab 导航可用