import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
