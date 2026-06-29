## ADDED Requirements

### Requirement: 关于我布局

About Section MUST 使用左右两栏布局。左侧 MUST 展示个人照片，右侧 MUST 展示 3 段个人简介文字。

#### Scenario: 正常展示关于我区域
- **GIVEN** 用户滚动到 About Section
- **WHEN** 页面加载完成
- **THEN** 左侧显示个人照片，右侧显示 3 段个人简介

#### Scenario: 个人照片加载失败
- **GIVEN** 个人照片 URL 无效或加载失败
- **WHEN** 图片无法显示
- **THEN** 显示占位头像 fallback，不影响右侧简介布局

---

### Requirement: 品牌标签

About Section 下方 MUST 展示品牌标签。

#### Scenario: 展示品牌标签
- **GIVEN** About Section 已渲染
- **WHEN** 用户查看简介下方
- **THEN** 以标签形式展示品牌关键词

---

### Requirement: 关于我区域位置

About Section MUST 显示在 Projects Section 下方，Contact Section 上方。

#### Scenario: 页面布局顺序
- **GIVEN** 页面完整渲染
- **WHEN** 用户从上到下浏览
- **THEN** 依次看到 Hero → Projects → About → Contact

---

### Requirement: 照片使用 lazy loading

个人照片 MUST 使用 lazy loading 加载。

#### Scenario: 照片懒加载
- **GIVEN** About Section 不在首屏视口内
- **WHEN** 页面初始加载
- **THEN** 个人照片不立即加载，进入视口附近时才加载