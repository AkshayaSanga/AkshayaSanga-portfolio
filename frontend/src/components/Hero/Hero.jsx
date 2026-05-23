import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'

const SOCIAL_LINKS = [
  { icon: FaGithub,   href: 'https://github.com/AkshayaSanga',    label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/akshaya-sanga-b9bb07307', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/SangaAkshaya/', label: 'LeetCode' },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1da967 1px, transparent 1px), linear-gradient(90deg, #1da967 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800/80 bg-[#111827] text-gray-300 font-mono text-xs shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        Computer Science Engineer | Open to Opportunities
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-5xl mx-auto"
      >
        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gray-100 leading-tight mb-6"
        >
          Akshaya Sanga
        </motion.h1>

        <motion.p
          variants={item}
          className="font-body text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 space-y-3"
        >
          <span className="block">
            Computer Science Engineering student focused on full-stack development, problem solving, and scalable web applications.
          </span>
          <span className="block">
            Skilled in React, Node.js, MongoDB, Python, and Data Structures & Algorithms.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors group"
          >
            View Projects
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors group"
          >
            <HiDownload className="group-hover:translate-y-0.5 transition-transform duration-200" />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-6">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-gray-800/60 bg-[#111827] text-gray-400
                         hover:text-blue-400 hover:border-gray-700 hover:shadow-lg hover:shadow-black/20
                         transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent animate-pulse" />
      </motion.div>

      {/* Floating tech cards */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-8 md:right-16 hidden lg:block"
      >
        <div className="bg-[#111827] border border-gray-800/60 rounded-2xl shadow-sm px-4 py-3 font-mono text-xs text-blue-400">
          <span className="text-gray-500">const </span>dev
          <span className="text-gray-500"> = </span>
          <span className="text-blue-300">'Akshaya'</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 left-8 md:left-16 hidden lg:block"
      >
        <div className="bg-[#111827] border border-gray-800/60 rounded-2xl shadow-sm px-4 py-3 font-mono text-xs text-blue-400">
          <span className="text-gray-500">npm run </span>
          <span className="text-blue-300">build --prod</span>
        </div>
      </motion.div>
    </section>
  )
}
