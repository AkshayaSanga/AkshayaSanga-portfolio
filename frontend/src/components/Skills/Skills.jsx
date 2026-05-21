import { motion } from 'framer-motion'
import { FaChartBar, FaCss3Alt, FaDatabase, FaHtml5, FaJava } from 'react-icons/fa'
import {
  SiGit, SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiVercel
} from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const SKILL_GROUPS = [
  {
    category: 'Languages & Web',
    color: 'from-blue-500/20 to-cyan-500/10',
    accent: '#3b82f6',
    skills: [
      { name: 'Python',      icon: SiPython,       level: 90, color: '#3776ab' },
      { name: 'Java',        icon: FaJava,         level: 85, color: '#e32c2e' },
      { name: 'JavaScript',  icon: SiJavascript,   level: 80, color: '#f7df1e' },
      { name: 'React.js',    icon: SiReact,        level: 80, color: '#61dafb' },
      { name: 'HTML5',       icon: FaHtml5,        level: 92, color: '#e34f26' },
      { name: 'CSS3',        icon: FaCss3Alt,      level: 88, color: '#264de4' },
    ],
  },
  {
    category: 'Data Analytics & ML',
    color: 'from-primary-500/20 to-emerald-500/10',
    accent: '#1da967',
    skills: [
      { name: 'Machine Learning', icon: FaChartBar, level: 85, color: '#1da967' },
      { name: 'SQL',        icon: FaDatabase,  level: 85, color: '#336791' },
      { name: 'Power BI',   icon: FaChartBar,  level: 75, color: '#f2c811' },
      { name: 'Tableau',    icon: FaChartBar,  level: 70, color: '#e97627' },
      { name: 'Node.js',    icon: SiNodedotjs, level: 75, color: '#339933' },
    ],
  },
  {
    category: 'Tools & Ecosystem',
    color: 'from-purple-500/20 to-pink-500/10',
    accent: '#7c3aed',
    skills: [
      { name: 'Git',    icon: SiGit,    level: 88, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, level: 87, color: '#ffffff' },
      { name: 'MongoDB',icon: SiMongodb,level: 80, color: '#47a248' },
      { name: 'Postman',icon: SiPostman,level: 80, color: '#ff6c37' },
      { name: 'Vercel', icon: SiVercel, level: 80, color: '#ffffff' },
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
      className="glass-card glow-border p-4 group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-dark-700/60 group-hover:scale-110 transition-transform duration-300">
          <Icon size={20} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-white text-sm truncate">{name}</p>
          <p className="font-mono text-xs text-slate-500">{level}%</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1 rounded-full bg-dark-700/80 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </div>
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
          <p className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-3">What I work with</p>
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
              <div className={`rounded-3xl bg-gradient-to-br ${group.color} border border-dark-600/30 p-8`}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-1 h-6 rounded-full"
                    style={{ background: group.accent }}
                  />
                  <h3 className="font-display font-bold text-white text-xl">{group.category}</h3>
                  <span className="font-mono text-xs text-slate-500 ml-auto">{group.skills.length} skills</span>
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
