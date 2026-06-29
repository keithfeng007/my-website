## MODIFIED Requirements

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