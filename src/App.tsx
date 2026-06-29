import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <section id="contact" className="flex min-h-screen items-center justify-center scroll-mt-16">
          <p className="text-2xl text-gray-500 dark:text-gray-400">Contact — Coming Soon</p>
        </section>
      </main>
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
