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
    <div className="min-h-screen bg-[#f7f3ee] text-[#2d2a26] relative overflow-x-hidden">
      {/* Classic editorial backdrop */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[950px] h-[440px] z-0"
        style={{ background: 'radial-gradient(ellipse at top, rgba(143, 106, 50, 0.18) 0%, rgba(143, 106, 50, 0.04) 28%, transparent 72%)' }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{ backgroundImage: 'linear-gradient(to right, rgba(32,27,24,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,27,24,0.025) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
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
