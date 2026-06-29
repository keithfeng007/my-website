# hero-section Specification

## Purpose
TBD - created by archiving change add-hero-section. Update Purpose after archive.
## Requirements
### Requirement: Hero 信息展示

Hero Section MUST 以全屏高度居中展示用户的姓名、职业和一句话介绍。

#### Scenario: 正常展示个人信息
- **GIVEN** 用户访问首页
- **WHEN** 页面加载完成
- **THEN** 全屏高度区域内居中显示姓名、职业、一句话介绍

#### Scenario: 文字在粒子背景上可读
- **GIVEN** 粒子背景正在渲染
- **WHEN** 用户查看文字内容
- **THEN** 文字与背景之间有足够对比度，确保可读性

---

### Requirement: CTA 按钮

Hero Section CTA 按钮的锚点 MUST 指向 Projects Section（id=projects）。当前已指向 `#projects`，此变更确认该行为正确。

#### Scenario: CTA 跳转到项目展示区
- **GIVEN** Hero Section 已渲染
- **WHEN** 用户点击 CTA 按钮
- **THEN** 页面平滑滚动到 id 为 projects 的 Projects Section

### Requirement: Canvas 粒子背景

Hero Section MUST 使用 Canvas 绘制粒子效果，叠加在 CSS 渐变底色之上。当用户偏好减少动效时 MUST 降级为静态渐变。

#### Scenario: 正常渲染粒子
- **GIVEN** 浏览器支持 Canvas
- **WHEN** Hero Section 加载
- **THEN** Canvas 粒子在 CSS 渐变底色上渲染并持续运动

#### Scenario: prefers-reduced-motion 降级
- **GIVEN** 用户系统设置了 prefers-reduced-motion
- **WHEN** Hero Section 加载
- **THEN** 不渲染 Canvas 粒子，仅显示 CSS 渐变底色

#### Scenario: 窗口 resize
- **GIVEN** 粒子正在渲染
- **WHEN** 用户调整浏览器窗口大小
- **THEN** Canvas 尺寸重新计算（debounce 200ms），粒子继续正常渲染

#### Scenario: 组件卸载清理
- **GIVEN** 粒子 Canvas 正在运行
- **WHEN** Hero Section 组件卸载
- **THEN** cancelAnimationFrame 被调用，事件监听被移除，无内存泄漏

---

### Requirement: 亮/暗模式切换

ThemeToggle MUST 从 Hero Section 内部移至 Navbar 右侧。

#### Scenario: ThemeToggle 在 Navbar 中可用
- **GIVEN** 导航栏已渲染
- **WHEN** 用户查看导航栏右侧
- **THEN** ThemeToggle 按钮显示在导航链接之后

#### Scenario: 切换功能不受影响
- **GIVEN** ThemeToggle 已移至 Navbar
- **WHEN** 用户点击 ThemeToggle
- **THEN** 主题切换、localStorage 持久化、粒子颜色同步更新均正常工作

