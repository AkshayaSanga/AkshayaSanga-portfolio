import { motion } from 'framer-motion'
import { FaDatabase, FaMicrosoft } from 'react-icons/fa'
import { HiBadgeCheck, HiExternalLink } from 'react-icons/hi'
import { SiDocker, SiGooglecloud } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    issuer: 'IBM',
    date: 'Apr 2026',
    credential: 'IBM SkillsBuild',
    link: '#',
    icon: null,
    iconText: 'IBM',
    color: '#052fb3',
    skills: ['Web Development', 'HTML/CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Generative AI for Data Science',
    issuer: 'Microsoft',
    date: 'Sep 2025',
    credential: 'SK7OFUFSFJ2K',
    link: '#',
    icon: FaMicrosoft,
    color: '#00a4ef',
    skills: ['Generative AI', 'Data Science', 'Python'],
  },
  {
    id: 3,
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: 'Sep 2025',
    credential: 'USPOUGPNB6K7',
    link: '#',
    icon: SiGooglecloud,
    color: '#4285F4',
    skills: ['Generative AI', 'Cloud', 'AI Models'],
  },
  {
    id: 4,
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    date: 'Sep 2025',
    credential: 'IBM SkillsBuild',
    link: '#',
    icon: null,
    iconText: 'IBM',
    color: '#052fb3',
    skills: ['Artificial Intelligence', 'Machine Learning'],
  },
  {
    id: 5,
    title: 'Docker Essentials: A Developer Introduction',
    issuer: 'Cognitive Class',
    date: 'Sep 2025',
    credential: 'd82b8550e60243d080ab612e5ff21019',
    link: '#',
    icon: SiDocker,
    color: '#2496ed',
    skills: ['Docker', 'Containers', 'DevOps'],
  },
  {
    id: 6,
    title: 'SQL and Relational Databases 101',
    issuer: 'Cognitive Class',
    date: 'Sep 2025',
    credential: '04838b2e167740128d640effc34fd013',
    link: '#',
    icon: FaDatabase,
    color: '#336791',
    skills: ['SQL', 'Relational Databases', 'Pandas'],
  },
  {
    id: 7,
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    date: 'Sep 2025',
    credential: 'RNGPF5SU50WZ',
    link: '#',
    icon: null,
    iconText: 'AI',
    color: '#10b981',
    skills: ['Artificial Intelligence', 'Machine Learning'],
  },
  {
    id: 8,
    title: 'Machine Learning for All',
    issuer: 'University of London',
    date: 'Sep 2025',
    credential: '2G7QIYWF5EWO',
    link: '#',
    icon: null,
    iconText: 'UoL',
    color: '#8b5cf6',
    skills: ['Machine Learning', 'Data Analysis'],
  },
  {
    id: 9,
    title: 'Excel Basics for Data Analysis',
    issuer: 'IBM',
    date: 'Sep 2025',
    credential: 'T0M8I4M204DO',
    link: '#',
    icon: null,
    iconText: 'IBM',
    color: '#052fb3',
    skills: ['Excel', 'Data Analysis', 'Spreadsheets'],
  },
]

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" className="py-28 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="section-heading">Certi<span className="gradient-text">fications</span></h2>
          <p className="section-subheading">Industry-recognized certifications validating my technical expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#111827] border border-gray-800/60 rounded-2xl group hover:-translate-y-1 hover:border-gray-700 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 overflow-hidden"
              >
                {/* Top gradient strip */}
                <div className="h-1.5" style={{ background: cert.color }} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0B0F19] border border-gray-800/60"
                    >
                      {Icon
                        ? <Icon size={22} style={{ color: cert.color }} />
                        : <span className="font-display font-bold text-sm" style={{ color: cert.color }}>{cert.iconText}</span>
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-gray-100 text-base leading-tight mb-1 group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="font-body text-gray-400 text-xs">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <HiBadgeCheck size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="font-mono text-xs text-gray-500">Issued: {cert.date}</span>
                    <span className="ml-auto font-mono text-xs text-gray-600">{cert.credential}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map(s => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-[#0B0F19] border border-gray-800/60 font-mono text-xs text-gray-300">{s}</span>
                    ))}
                  </div>

                  {/* Link */}
                  {cert.link && cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium text-xs text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      View Credential
                      <HiExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
