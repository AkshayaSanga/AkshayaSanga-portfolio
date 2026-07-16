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
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl mx-auto w-full"
      >
        {/* Status badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">
            Available for internships & SDE roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-[-0.04em] leading-[1.05] mb-5"
        >
          Akshaya Sanga
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="text-base md:text-lg font-medium text-blue-600 tracking-[-0.01em] mb-3"
        >
          Software Engineer · Full-Stack Developer · AI Developer
        </motion.p>

        {/* Short bio */}
        <motion.p
          variants={item}
          className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed mb-10"
        >
          Final-year B.Tech CSE student with CGPA 8.4, building scalable web & AI applications.
          202 LeetCode problems solved. IBM SkillsBuild AI Intern.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            View Projects <HiArrowRight size={14} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <HiDownload size={14} /> Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-3">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-400
                         hover:text-slate-900 hover:border-slate-300 shadow-sm
                         flex items-center justify-center
                         transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-slate-300 to-transparent" />
      </div>
    </section>
  )
}
