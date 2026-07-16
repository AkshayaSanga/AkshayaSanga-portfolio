import { FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'

const NAV = [
  { label: 'About',          href: '#about' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Profiles',       href: '#profiles' },
  { label: 'Contact',        href: '#contact' },
]

const SOCIAL = [
  { icon: FaGithub,   href: 'https://github.com/AkshayaSanga',      label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/akshaya-sanga-b9bb07307', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/AKSHAYA18449883',        label: 'Twitter' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/SangaAkshaya/', label: 'LeetCode' },
  { icon: SiGeeksforgeeks, href: 'https://share.google/9yZ9sNh21z9IIKx5O', label: 'GeeksforGeeks' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold mb-3">
              <span className="text-slate-900">AS</span>
              <span className="text-blue-600">.</span>
            </div>
            <p className="font-body text-slate-500 text-sm leading-relaxed max-w-xs">
              Final-year CSE student specializing in Software Development and Data Analytics.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-blue-600 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <a href="mailto:sangaakshaya7@gmail.com" className="block font-body text-sm text-slate-500 hover:text-blue-600 transition-colors">
                sangaakshaya7@gmail.com
              </a>
              <p className="font-body text-sm text-slate-500">Hyderabad, Telangana, IN</p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-5 text-xs py-2 px-4 inline-flex"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-slate-500 flex items-center gap-1.5">
            Designed & Built by{' '}
            <span className="text-blue-600 font-semibold">AkshayaSanga</span>
            <span className="flex items-center gap-1 text-slate-400">
              with <FaHeart size={10} className="text-red-500" /> using React & Tailwind
            </span>
          </p>
          <p className="font-mono text-xs text-slate-400">
            © {new Date().getFullYear()} AkshayaSanga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
