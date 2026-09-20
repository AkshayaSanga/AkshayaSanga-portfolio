import { motion } from 'framer-motion'
import { CgCPlusPlus } from 'react-icons/cg'
import { FaChartBar, FaCss3Alt, FaDatabase, FaHtml5, FaJava, FaServer } from 'react-icons/fa6'
import {
    SiDocker,
    SiGit, SiGithub,
    SiJavascript,
    SiPython,
    SiReact
} from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    accent: '#4338ca',
    skills: [
      { name: 'Python',      icon: SiPython,       level: 90, color: '#3776ab' },
      { name: 'Java',        icon: FaJava,         level: 85, color: '#e32c2e' },
      { name: 'JavaScript',  icon: SiJavascript,   level: 80, color: '#f7df1e' },
      { name: 'C++',         icon: CgCPlusPlus,    level: 70, color: '#00599c' },
      { name: 'SQL',         icon: FaDatabase,     level: 85, color: '#336791' },
    ],
  },
  {
    category: 'AI & Generative AI',
    accent: '#0d9488',
    skills: [
      { name: 'Machine Learning', icon: FaChartBar, level: 88, color: '#1da967' },
      { name: 'LLMs',            icon: FaChartBar, level: 82, color: '#10b981' },
      { name: 'RAG',             icon: FaChartBar, level: 80, color: '#14b8a6' },
      { name: 'Prompt Engineering', icon: FaChartBar, level: 80, color: '#22c55e' },
      { name: 'Hugging Face',    icon: FaChartBar, level: 78, color: '#f59e0b' },
    ],
  },
  {
    category: 'Full-Stack Development',
    accent: '#db2777',
    skills: [
      { name: 'React',       icon: SiReact,        level: 85, color: '#61dafb' },
      { name: 'FastAPI',     icon: FaServer,       level: 82, color: '#009688' },
      { name: 'REST APIs',   icon: FaServer,       level: 80, color: '#8b5cf6' },
      { name: 'HTML',        icon: FaHtml5,        level: 90, color: '#e34f26' },
      { name: 'CSS',         icon: FaCss3Alt,      level: 86, color: '#264de4' },
    ],
  },
  {
    category: 'Data & ML',
    accent: '#16a34a',
    skills: [
      { name: 'Pandas',            icon: FaChartBar, level: 85, color: '#3b82f6' },
      { name: 'NumPy',             icon: FaChartBar, level: 82, color: '#4f46e5' },
      { name: 'Scikit-learn',      icon: FaChartBar, level: 80, color: '#16a34a' },
      { name: 'Data Preprocessing', icon: FaChartBar, level: 84, color: '#f59e0b' },
      { name: 'Feature Engineering', icon: FaChartBar, level: 80, color: '#ef4444' },
    ],
  },
  {
    category: 'Core CS',
    accent: '#ca8a04',
    skills: [
      { name: 'DSA',       icon: FaServer,  level: 88, color: '#f59e0b' },
      { name: 'OOP',       icon: FaServer,  level: 85, color: '#14b8a6' },
      { name: 'DBMS',      icon: FaDatabase, level: 82, color: '#3b82f6' },
      { name: 'OS',        icon: FaServer,  level: 78, color: '#a78bfa' },
    ],
  },
  {
    category: 'Tools',
    accent: '#64748b',
    skills: [
      { name: 'Git',      icon: SiGit,      level: 88, color: '#f05032' },
      { name: 'GitHub',   icon: SiGithub,   level: 87, color: '#0f172a' },
      { name: 'Docker',   icon: SiDocker,   level: 75, color: '#2496ed' },
      { name: 'Jupyter',  icon: FaChartBar, level: 80, color: '#f59e0b' },
    ],
  },
]

function SkillCard({ name, icon: Icon, level, color, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 group hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 shadow-sm"
    >
      <div className={`flex items-center gap-3 ${level > 0 ? 'mb-3' : ''}`}>
        <div className="p-2 rounded-lg bg-white group-hover:scale-110 transition-transform duration-300 border border-slate-200/60">
          <Icon size={20} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-medium text-slate-800 text-sm truncate">{name}</p>
          {level > 0 && <p className="font-mono text-xs text-slate-500 mt-0.5">{level}%</p>}
        </div>
      </div>
      {/* Progress bar */}
      {level > 0 && (
        <div className="h-1 rounded-full bg-slate-200/80 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
          />
        </div>
      )}
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-28 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-slate-500 text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="section-heading">Tech <span className="gradient-text">Stack</span></h2>
          <p className="section-subheading">Technologies and tools I use to craft full-stack solutions</p>
        </motion.div>

        <div className="space-y-12">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
            >
              <div className="rounded-3xl bg-slate-50 border border-slate-200/60 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-1 h-6 rounded-full"
                    style={{ background: group.accent }}
                  />
                  <h3 className="font-display font-semibold text-slate-800 text-xl">{group.category}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
                  {group.skills.map((skill, si) => (
                    <SkillCard
                      key={skill.name}
                      {...skill}
                      delay={gi * 0.1 + si * 0.06}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}