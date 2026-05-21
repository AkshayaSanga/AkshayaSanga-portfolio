import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiStar } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const PROJECTS = [
  {
    id: 1,
    title: 'AI-Based Retail Analytics',
    description: 'Data analytics platform for retail sales analysis and forecasting. Implemented data cleaning, transformation, and applied machine learning models to generate predictive insights.',
    tags: ['Python', 'SQL', 'Machine Learning', 'Power BI'],
    github: 'https://github.com/AkshayaSanga/ai-retail-analytics-platform',
    demo: '',
    featured: true,
    category: 'Data Analytics',
    gradient: 'from-blue-600/20 to-cyan-600/10',
    accentColor: '#3b82f6',
  },
  {
    id: 2,
    title: 'Credit Risk Analysis System',
    description: 'Predictive system to assess loan default risk using machine learning techniques and classification algorithms. Integrated model explainability to enhance decision-making.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/AkshayaSanga/credit-risk-analysis-system',
    demo: '',
    featured: true,
    category: 'Data Analytics',
    gradient: 'from-primary-600/20 to-emerald-600/10',
    accentColor: '#1da967',
  },
  {
    id: 3,
    title: 'Stock Market Dashboard',
    description: 'Interactive dashboard to analyze and visualize stock market trends. Processed historical financial data using Python to identify patterns and support data-driven decisions.',
    tags: ['Python', 'Data Visualization', 'Pandas'],
    github: 'https://github.com/AkshayaSanga/Stock-Market-Analytics-Dashboard',
    demo: '', 
    featured: false,
    category: 'Data Analytics',
    gradient: 'from-amber-600/20 to-yellow-600/10',
    accentColor: '#f59e0b',
  },
  {
    id: 4,
    title: 'CareerForge AI',
    description: 'An intelligent tool built with TypeScript to help streamline career progression and technical development.',
    tags: ['TypeScript', 'AI', 'Web'],
    github: 'https://github.com/AkshayaSanga/careerforge-ai',
    demo: '',
    featured: false,
    category: 'Software Dev',
    gradient: 'from-purple-600/20 to-pink-600/10',
    accentColor: '#a855f7',
  },
  {
    id: 5,
    title: 'Dev Portfolio Hub',
    description: 'My personal developer portfolio featuring a modern dark theme, Framer Motion animations, a working backend contact form, and a fully responsive layout.',
    tags: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    github: 'https://github.com/AkshayaSanga/AkshayaSanga-portfolio',
    demo: 'https://akshayasanga.vercel.app',
    featured: false,
    category: 'Software Dev',
    gradient: 'from-teal-600/20 to-cyan-600/10',
    accentColor: '#14b8a6',
  },
]

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
          <p className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-3">What I've built</p>
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
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'glass-card border border-dark-600/50 text-slate-400 hover:text-primary-400 hover:border-primary-500/30'
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card glow-border group flex flex-col overflow-hidden hover:-translate-y-2 transition-transform duration-300"
    >
      {/* Card header */}
      <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
          }}
        />
        <div className="text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 font-display font-bold text-xl text-dark-950"
            style={{ background: project.accentColor }}
          >
            {project.title.charAt(0)}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30">
            <HiStar size={10} className="text-yellow-400" />
            <span className="font-mono text-xs text-yellow-400">Featured</span>
          </div>
        )}
        <div className="absolute top-3 left-3 tag">{project.category}</div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-primary-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-body text-slate-400 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center text-xs py-2 px-3"
            >
              <FaGithub size={14} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center text-xs py-2 px-3"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
