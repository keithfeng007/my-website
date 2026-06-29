## Why

个人品牌站当前只有 Hero Section，缺少全局导航。用户无法快速跳转到不同内容区域。需要一个固定在顶部的导航栏，提供品牌标识和页面内锚点导航。

## What Changes

- 新增 Navbar 组件，固定在页面顶部，包含左侧品牌标识和右侧导航链接
- 导航链接（首页、项目、联系我）点击后平滑滚动到对应 section
- 导航栏滚动时添加背景模糊效果（backdrop-blur）
- 将 ThemeToggle 从 Hero 内部移至 Navbar 右侧
- 在 App.tsx 中引入 Navbar，为后续 section 预留锚点

## Capabilities

### New Capabilities
- `navigation`: 顶部固定导航栏，品牌标识 + 锚点导航 + 滚动模糊背景

### Modified Capabilities
- `hero-section`: ThemeToggle 从 Hero 内部移至 Navbar，Hero 不再独立包含主题切换按钮

## Impact

- **App.tsx**: 需引入 Navbar 组件，调整布局结构
- **Hero.tsx**: 移除 ThemeToggle，调整 Hero 顶部间距（为固定导航栏留出空间）
- **新增文件**: Navbar.tsx
- **新增依赖**: 无

## Out-of-Scope（严禁开发）

- ❌ 搜索功能
- ❌ 多级下拉菜单
- ❌ 用户登录和注册
- ❌ 移动端汉堡菜单
- ❌ 导航高亮当前 section 的滚动监听