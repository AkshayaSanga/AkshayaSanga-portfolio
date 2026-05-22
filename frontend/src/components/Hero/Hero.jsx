import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'

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
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-400 font-mono text-xs"
      >
        <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
        Computer Science Engineer | Open to Opportunities
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-5xl mx-auto"
      >
        <motion.p variants={item} className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-4">
          Hi there, I'm
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-6"
        >
          Akshaya
          <br />
          <span className="gradient-text">Sanga</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 mb-8 h-12 flex items-center justify-center gap-3"
        >
          <span className="text-slate-500">I build</span>
          <TypeAnimation
            sequence={[
              'Software Development', 2000,
              'Data Analytics',       2000,
              'Machine Learning',     2000,
              'React Interfaces',     2000,
              'Python Scripts',       2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="font-body text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A final-year Computer Science student skilled in Software Development and Data Analytics. Experienced in building data-driven applications, machine learning models, and scalable web solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary group"
          >
            View Projects
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group"
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
              className="p-3 rounded-xl border border-dark-600/60 bg-dark-800/50 text-slate-400
                         hover:text-primary-400 hover:border-primary-500/40 hover:bg-primary-500/5
                         transition-all duration-300 hover:-translate-y-1"
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
        <span className="font-mono text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent animate-pulse" />
      </motion.div>

      {/* Floating tech cards */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-8 md:right-16 hidden lg:block"
      >
        <div className="glass-card glow-border px-4 py-3 font-mono text-xs text-primary-400">
          <span className="text-slate-500">const </span>dev
          <span className="text-slate-500"> = </span>
          <span className="text-accent-cyan">'Akshaya'</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 left-8 md:left-16 hidden lg:block"
      >
        <div className="glass-card glow-border px-4 py-3 font-mono text-xs text-primary-400">
          <span className="text-slate-500">npm run </span>
          <span className="text-accent-cyan">build --prod</span>
        </div>
      </motion.div>
    </section>
  )
}
