## ADDED Requirements

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

Hero Section MUST 包含一个 CTA 按钮，点击后跳转到项目页面。CTA 按钮 MUST 支持键盘导航。

#### Scenario: 点击 CTA 跳转项目
- **GIVEN** Hero Section 已渲染
- **WHEN** 用户点击 CTA 按钮
- **THEN** 页面跳转至项目链接地址

#### Scenario: CTA 按钮键盘可访问
- **GIVEN** 用户使用键盘导航
- **WHEN** 用户 Tab 聚焦到 CTA 按钮
- **THEN** 按钮显示 focus 样式，按 Enter 可触发跳转

#### Scenario: GitHub Pages base path
- **GIVEN** 项目部署在 GitHub Pages，base path 为 /my-website/
- **WHEN** CTA 指向站内页面
- **THEN** 链接 MUST 包含 /my-website/ 前缀

---

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

用户 MUST 能在亮色和暗色模式之间切换。主题偏好 MUST 持久化到 localStorage。首次访问 MUST 跟随系统 prefers-color-scheme。MUST 防止首屏闪烁（FOUC）。

#### Scenario: 默认跟随系统
- **GIVEN** 用户首次访问，未设置过主题偏好
- **WHEN** 页面加载
- **THEN** 主题跟随系统 prefers-color-scheme 设置

#### Scenario: 手动切换主题
- **GIVEN** 页面已加载
- **WHEN** 用户点击 ThemeToggle 按钮
- **THEN** 主题在亮/暗之间切换，localStorage 持久化选择，粒子颜色同步更新

#### Scenario: 防止首屏闪烁（FOUC）
- **GIVEN** 用户之前选择了暗色模式
- **WHEN** 页面重新加载
- **THEN** 在 React 渲染前，<html> 已有 dark class，无闪烁

#### Scenario: ThemeToggle 键盘可访问
- **GIVEN** 用户使用键盘导航
- **WHEN** 用户 Tab 聚焦到 ThemeToggle 按钮
- **THEN** 按钮显示 focus 样式，按 Enter/Space 可切换主题
