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
    <div className="min-h-screen bg-dark-950 relative overflow-x-hidden">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[60%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent-cyan/4 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-primary-700/5 blur-[80px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0c1a24',
            color: '#e2e8f0',
            border: '1px solid #1a3347',
            fontFamily: 'DM Sans, sans-serif',
          },
          success: { iconTheme: { primary: '#1da967', secondary: '#020408' } },
          error:   { iconTheme: { primary: '#ef4444', secondary: '#020408' } },
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
