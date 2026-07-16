import { Toaster } from 'react-hot-toast'
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
    <div className="min-h-screen bg-white relative overflow-x-hidden">

      {/* Very subtle top glow — barely visible, professional */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0"
        style={{ background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#0f172a',
            border: '1px solid #e2e8f0',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '13px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(15,23,42,0.05)',
          },
          success: { iconTheme: { primary: '#2563eb', secondary: '#fff' } },
          error:   { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
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
