import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiStar } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const PROJECTS = [
  {
    id: 1,
    title: 'MetroVision',
    description: 'A full-stack Smart City Operations Platform with dashboards, complaints management, GIS command center mapping, emergency alerts, and role-based administration.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Leaflet', 'TypeScript', 'Python'],
    github: 'https://github.com/AkshayaSanga/MetroVision',
    demo: 'https://urban-os-omega.vercel.app',
    featured: true,
    category: 'Software Dev',
    gradient: 'from-blue-600/20 to-indigo-600/10',
    accentColor: '#2563eb',
  },
  {
    id: 2,
    title: 'BackendForge API',
    description: 'A production-ready, API-first backend template with JWT auth, role-based access control, file uploads, Redis caching, Alembic database migrations, and unit testing.',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Alembic', 'Pytest'],
    github: 'https://github.com/AkshayaSanga/backendforge-api',
    demo: '',
    featured: true,
    category: 'Software Dev',
    gradient: 'from-indigo-600/20 to-purple-600/10',
    accentColor: '#7c3aed',
  },
  {
    id: 3,
    title: 'AI-Based Retail Analytics',
    description: 'Built a full-stack retail analytics platform with interactive dashboards, data visualization, and machine learning-based sales forecasting.',
    tags: ['Python', 'SQL', 'Machine Learning', 'Power BI'],
    github: 'https://github.com/AkshayaSanga/ai-retail-analytics-platform',
    demo: '',
    featured: true,
    category: 'Data Analytics',
    gradient: 'from-blue-600/20 to-cyan-600/10',
    accentColor: '#3b82f6',
  },
  {
    id: 4,
    title: 'Credit Risk Analysis System',
    description: 'Developed a predictive credit risk assessment system using classification algorithms. Integrated model explainability and robust backend logic to enhance financial decision-making.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/AkshayaSanga/credit-risk-analysis-system',
    demo: '',
    featured: true,
    category: 'Data Analytics',
    gradient: 'from-blue-600/20 to-cyan-600/10',
    accentColor: '#3b82f6',
  },
  {
    id: 5,
    title: 'CareerForge AI',
    description: 'An intelligent tool built with TypeScript to help streamline career progression and technical development.',
    tags: ['TypeScript', 'AI', 'Web'],
    github: 'https://github.com/AkshayaSanga/careerforge-ai',
    demo: '',
    featured: false,
    category: 'Software Dev',
    gradient: 'from-indigo-600/20 to-blue-600/10',
    accentColor: '#4f46e5',
  },
  {
    id: 6,
    title: 'Dev Portfolio Hub',
    description: 'My personal developer portfolio featuring a modern classic light theme, Framer Motion animations, a working backend contact form, and a fully responsive layout.',
    tags: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    github: 'https://github.com/AkshayaSanga/AkshayaSanga-portfolio',
    demo: 'https://akshayasanga.vercel.app',
    featured: false,
    category: 'Software Dev',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    accentColor: '#2563eb',
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
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-slate-300'
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
      className="bg-slate-50 border border-slate-200/60 rounded-2xl group flex flex-col overflow-hidden hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300"
    >
      {/* Card header */}
      <div className="h-32 bg-slate-100/50 flex items-center justify-center relative overflow-hidden border-b border-slate-200/60">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(15,23,42,0.05) 50%, transparent 70%)',
          }}
        />
        <div className="text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 font-display font-bold text-xl text-white shadow-sm"
            style={{ background: project.accentColor }}
          >
            {project.title.charAt(0)}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-slate-200/80 shadow-sm animate-pulse">
            <HiStar size={10} className="text-blue-600" />
            <span className="font-mono text-xs text-blue-600">Featured</span>
          </div>
        )}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white border border-slate-200/80 font-mono text-[10px] text-slate-500 uppercase tracking-wider">{project.category}</div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-body text-slate-600 text-sm leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 font-mono text-xs text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-xs py-2.5 px-4 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <FaGithub size={14} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-xs py-2.5 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
