import ParticleCanvas from './ParticleCanvas'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-900"
    >
      <ParticleCanvas />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pt-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-7xl">
          Your Name
        </h1>
        <p className="text-xl font-medium text-blue-600 dark:text-cyan-400 md:text-2xl">
          Full-Stack Developer
        </p>
        <p className="max-w-lg text-lg text-gray-600 dark:text-gray-300">
          Building elegant solutions with modern web technologies. Passionate about clean code and great user experiences.
        </p>

        <a
          href="#projects"
          className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-300"
        >
          View My Projects
        </a>
      </div>
    </section>
  )
}
