import ProjectCard, { type ProjectData } from './ProjectCard'

const PROJECTS: ProjectData[] = [
  {
    title: 'React Dashboard',
    description: 'A modern admin dashboard built with React, TypeScript, and Tailwind CSS. Features real-time charts, dark mode, and responsive layout.',
    github: 'https://github.com/username/react-dashboard',
    image: '/projects/react-dashboard.png',
  },
  {
    title: 'CLI Task Manager',
    description: 'A lightweight command-line task manager written in Go. Supports priorities, tags, and persistent storage with SQLite.',
    github: 'https://github.com/username/cli-task-manager',
    image: '/projects/cli-task-manager.png',
  },
  {
    title: 'API Gateway',
    description: 'A high-performance API gateway built with Node.js. Supports rate limiting, authentication, and request transformation.',
    github: 'https://github.com/username/api-gateway',
    image: '/projects/api-gateway.png',
  },
  {
    title: 'Markdown Editor',
    description: 'A browser-based Markdown editor with live preview, syntax highlighting, and export to PDF. Built with Vue 3 and CodeMirror.',
    github: 'https://github.com/username/markdown-editor',
    image: '/projects/markdown-editor.png',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-gray-50 px-6 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-50">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}