## Phase 1: 项目卡片组件

- [x] 1.1 创建 ProjectCard.tsx，接收项目数据 props，渲染截图、名称、简介、GitHub 链接
- [x] 1.2 实现 hover 微特效（scale + shadow），添加 prefers-reduced-motion 降级
- [x] 1.3 GitHub 链接 `target="_blank" rel="noopener noreferrer"`，支持键盘 focus 样式
- [x] 1.4 项目截图加载失败时显示 SVG fallback

## Phase 2: 项目展示区容器

- [x] 2.1 创建 Projects.tsx，定义静态项目数据（至少 4 个项目）
- [x] 2.2 使用 CSS Grid 两列布局渲染 ProjectCard 列表
- [x] 2.3 section id="projects"，添加 scroll-mt-16 补偿导航栏

## Phase 3: 集成与验证

- [x] 3.1 替换 App.tsx 中 #projects 占位 section 为 Projects 组件
- [x] 3.2 验证导航栏"项目"链接和 Hero CTA 按钮均平滑滚动到 Projects Section
- [x] 3.3 验证悬浮微特效正常，prefers-reduced-motion 下降级
- [x] 3.4 验证 GitHub 链接在新标签页打开，键盘可访问