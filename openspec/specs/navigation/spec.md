# navigation Specification

## Purpose
TBD - created by archiving change add-navigation. Update Purpose after archive.
## Requirements
### Requirement: 导航栏布局

Navbar MUST 固定在页面顶部。左侧 MUST 显示品牌标识（logo 或名字），右侧 MUST 包含导航链接（首页、项目、联系我）。

#### Scenario: 正常展示导航栏
- **GIVEN** 用户访问任意页面
- **WHEN** 页面加载完成
- **THEN** 顶部固定显示导航栏，左侧为品牌标识，右侧为"首页"、"项目"、"联系我"三个链接

#### Scenario: 导航栏不遮挡内容
- **GIVEN** 导航栏固定在顶部
- **WHEN** 页面内容渲染
- **THEN** 页面内容从导航栏下方开始，不被遮挡

---

### Requirement: 锚点平滑滚动

导航链接点击后 MUST 平滑滚动到对应的 section。

#### Scenario: 点击导航链接平滑滚动
- **GIVEN** 导航栏已渲染
- **WHEN** 用户点击"项目"导航链接
- **THEN** 页面平滑滚动到 id 为 projects 的 section

#### Scenario: 锚点链接在 GitHub Pages 下可用
- **GIVEN** 项目部署在 GitHub Pages，base path 为 /my-website/
- **WHEN** 用户点击导航链接
- **THEN** 锚点跳转正常工作，不受 base path 影响

---

### Requirement: 滚动模糊背景

导航栏在页面滚动时 MUST 显示背景模糊效果。页面在顶部时导航栏 MUST 为透明背景。

#### Scenario: 页面在顶部时透明
- **GIVEN** 页面未滚动（scrollY === 0）
- **WHEN** 用户查看导航栏
- **THEN** 导航栏背景为透明，无模糊效果

#### Scenario: 页面滚动后显示模糊背景
- **GIVEN** 页面已向下滚动
- **WHEN** 用户查看导航栏
- **THEN** 导航栏显示 backdrop-blur 模糊效果和半透明背景色

#### Scenario: 模糊效果尊重 prefers-reduced-motion
- **GIVEN** 用户系统设置了 prefers-reduced-motion
- **WHEN** 页面滚动
- **THEN** 导航栏背景色变化无过渡动画，但模糊效果仍然生效

---

### Requirement: 导航栏键盘可访问

导航链接 MUST 支持键盘导航。

#### Scenario: Tab 导航
- **GIVEN** 用户使用键盘导航
- **WHEN** 用户按 Tab 键遍历导航
- **THEN** 每个链接依次获得 focus 样式，按 Enter 可触发滚动

