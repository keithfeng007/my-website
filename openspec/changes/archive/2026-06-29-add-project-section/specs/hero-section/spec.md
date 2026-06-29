## MODIFIED Requirements

### Requirement: CTA 按钮

Hero Section CTA 按钮的锚点 MUST 指向 Projects Section（id=projects）。当前已指向 `#projects`，此变更确认该行为正确。

#### Scenario: CTA 跳转到项目展示区
- **GIVEN** Hero Section 已渲染
- **WHEN** 用户点击 CTA 按钮
- **THEN** 页面平滑滚动到 id 为 projects 的 Projects Section