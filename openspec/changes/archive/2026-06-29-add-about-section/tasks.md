## Phase 1: About 组件

- [ ] 1.1 创建 About.tsx，左右两栏布局（flex-col md:flex-row），左侧照片占位 + 右侧 3 段简介
- [ ] 1.2 照片使用 `<img loading="lazy" />`，onError 显示 SVG fallback
- [ ] 1.3 下方品牌标签（Badge 胶囊样式，flex-wrap）
- [ ] 1.4 section 添加合适 id 和 scroll-mt-16

## Phase 2: 集成与验证

- [ ] 2.1 在 App.tsx 中 Projects 和 Contact 之间插入 About 组件
- [ ] 2.2 验证左右两栏布局正常，移动端堆叠
- [ ] 2.3 验证照片 lazy loading 和 fallback
- [ ] 2.4 验证品牌标签展示正常