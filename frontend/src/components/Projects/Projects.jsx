import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa'
import { HiStar } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'
import PROJECTS from '../../../../projects.json'

const CATEGORIES = ['All', 'Data Analytics', 'Software Dev']

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-28 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-slate-500 text-sm tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subheading">A selection of projects that showcase my technical depth and creativity</p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-[#fffdf9] border border-[#e5d8c4] text-[#5d5047] hover:text-primary-600 hover:border-[#caa76d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative w-full h-[380px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full bg-[#fffdf9] border border-[#e5d8c4] rounded-2xl flex flex-col overflow-hidden shadow-sm" style={{ backfaceVisibility: 'hidden' }}>
          <div className="h-32 bg-[#f7f1ea] flex items-center justify-center relative overflow-hidden border-b border-[#e5d8c4]">
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 font-display font-bold text-xl text-white shadow-sm"
                style={{ background: project.accentColor }}
              >
                {project.title.charAt(0)}
              </div>
            </div>
            {project.featured && (
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-[#fffdf9] border border-[#e5d8c4] shadow-sm">
                <HiStar size={10} className="text-primary-600" />
                <span className="font-mono text-xs text-primary-600">Featured</span>
              </div>
            )}
            <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-[#fffdf9] border border-[#e5d8c4] font-mono text-[10px] text-[#6d625a] uppercase tracking-wider">{project.category}</div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-display font-bold text-[#1c1816] text-lg mb-2">
              {project.title}
            </h3>
            <p className="font-body text-[#5d5047] text-sm leading-relaxed flex-1 mb-6 line-clamp-3">
              {project.description}
            </p>
            <div className="mt-auto flex items-center justify-center gap-2 font-mono text-xs text-[#8b7967]">
              <FaInfoCircle />
              <span>Hover for details</span>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full bg-[#fffdf9] border border-[#d7bf96] rounded-2xl flex flex-col overflow-hidden shadow-lg shadow-[#d7bf96]/15" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="p-6 flex flex-col flex-1">
            <h4 className="font-display font-bold text-[#1c1816] text-lg mb-2">
              {project.title}
            </h4>
            <p className="font-body text-[#5d5047] text-sm leading-relaxed flex-1 mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-[#f7f1ea] border border-[#e5d8c4] font-mono text-xs text-[#5d5047]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-xs py-2.5 px-4 rounded-lg border border-[#e5d8c4] text-[#5d5047] hover:bg-[#f7f1ea] hover:text-[#1c1816] transition-colors duration-200"
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary text-xs py-2.5 px-4"
                  onClick={e => e.stopPropagation()}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}