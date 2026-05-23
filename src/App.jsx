import React, { useState, useEffect } from 'react'
import Navbar     from './components/Navbar'
import Home       from './components/Home'
import About      from './components/About'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Education  from './components/Education'
import Contact    from './components/Contact'

export default function App() {
  const [dark, setDark] = useState(true)

  // Apply dark class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Scroll-reveal observer
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io  = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />

        {/* Footer */}
          <div className="border-t border-white/8 px-8 py-4 sm:px-10 lg:px-14">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Anush Adhikari · Built with React, Tailwind CSS &amp; react-simple-typewriter.
            </p>
          </div>
          
      </main>
    </>
  )
}
