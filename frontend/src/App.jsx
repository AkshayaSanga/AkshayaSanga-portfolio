import About from './components/About/About'
import Certifications from './components/Certifications/Certifications'
import CodingProfiles from './components/CodingProfiles/CodingProfiles'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">

      {/* Subtle background pattern */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0"
        style={{ background: 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{ backgroundImage: 'radial-gradient(circle at center, #e0e0e0 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1 }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
