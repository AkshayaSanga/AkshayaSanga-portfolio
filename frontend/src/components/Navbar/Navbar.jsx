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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active,   setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm shadow-slate-100/50' : 'py-5'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => handleClick(e, '#hero')}
            className="font-bold text-slate-900 text-sm tracking-tight hover:text-blue-600 transition-colors"
          >
            Akshaya Sanga
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleClick(e, link.href)}
                  className={`nav-link ${active === link.href.slice(1) ? 'active !text-blue-600 font-semibold' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-xs px-4 py-2 rounded-lg"
          >
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[56px] z-40 md:hidden px-4"
          >
            <div className="rounded-xl bg-white border border-slate-200/80 overflow-hidden shadow-2xl shadow-slate-200/40">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleClick(e, link.href)}
                  className="flex items-center px-5 py-3.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 border-b border-slate-100 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="p-4">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-xs py-2.5">
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
