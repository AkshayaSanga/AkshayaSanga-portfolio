import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Profiles',     href: '#profiles' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-dark-900/80 backdrop-blur-xl border-b border-dark-700/50 shadow-xl shadow-dark-950/50'
            : 'py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => handleNavClick(e, '#hero')}
            className="font-display text-xl font-bold group"
          >
            <span className="text-white group-hover:text-primary-400 transition-colors duration-200">AS</span>
            <span className="text-primary-400">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className={`nav-link ${active === link.href.slice(1) ? 'active text-primary-400' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
          >
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden text-slate-300 hover:text-primary-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1,  y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden"
          >
            <div className="mx-4 rounded-2xl glass-card border border-dark-600/60 overflow-hidden">
              <ul className="flex flex-col divide-y divide-dark-700/50">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1,  x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={e => handleNavClick(e, link.href)}
                      className="flex items-center px-6 py-4 text-slate-300 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-200 font-body"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <li className="p-4">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
