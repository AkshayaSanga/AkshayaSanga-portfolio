import { motion } from 'framer-motion'
import { HiBadgeCheck, HiExternalLink } from 'react-icons/hi'
import { SiCoursera, SiGoogle, SiMeta, SiUdemy } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Meta Front-End Developer',
    issuer: 'Meta (via Coursera)',
    date: 'Dec 2023',
    credential: 'META-FED-2023',
    link: '#',
    icon: SiMeta,
    color: '#3b82f6',
    bg: 'from-blue-600/20 to-indigo-600/10',
    skills: ['React', 'HTML/CSS', 'JavaScript', 'UX/UI'],
  },
  {
    id: 2,
    title: 'Google IT Automation with Python',
    issuer: 'Google (via Coursera)',
    date: 'Oct 2023',
    credential: 'GOOGLE-PYTHON-2023',
    link: '#',
    icon: SiGoogle,
    color: '#0ea5e9',
    bg: 'from-sky-600/20 to-blue-600/10',
    skills: ['Python', 'Automation', 'Git', 'APIs'],
  },
  {
    id: 3,
    title: 'The Complete Web Developer Bootcamp',
    issuer: 'Udemy',
    date: 'Aug 2023',
    credential: 'UDEMY-WEB-2023',
    link: '#',
    icon: SiUdemy,
    color: '#4f46e5',
    bg: 'from-indigo-600/20 to-blue-600/10',
    skills: ['MERN Stack', 'REST APIs', 'MongoDB', 'Auth'],
  },
  {
    id: 4,
    title: 'Node.js, Express & MongoDB Bootcamp',
    issuer: 'Coursera',
    date: 'Jun 2023',
    credential: 'COURSERA-NODE-2023',
    link: '#',
    icon: SiCoursera,
    color: '#2563eb',
    bg: 'from-blue-500/20 to-cyan-500/10',
    skills: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
  },
  {
    id: 5,
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'Mar 2024',
    credential: 'AWS-CPE-2024',
    link: '#',
    icon: null,
    iconText: 'AWS',
    color: '#0284c7',
    bg: 'from-cyan-600/20 to-sky-600/10',
    skills: ['Cloud', 'EC2', 'S3', 'Lambda'],
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
                className="glass-card glow-border group hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
              >
                {/* Top gradient strip */}
                <div className={`h-1.5 bg-gradient-to-r ${cert.bg.replace('/20', '').replace('/10', '')}`}
                  style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}66)` }}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}33` }}
                    >
                      {Icon
                        ? <Icon size={22} style={{ color: cert.color }} />
                        : <span className="font-display font-bold text-sm" style={{ color: cert.color }}>{cert.iconText}</span>
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-white text-base leading-tight mb-1 group-hover:text-primary-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="font-body text-slate-400 text-xs">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <HiBadgeCheck size={16} className="text-primary-400 flex-shrink-0" />
                    <span className="font-mono text-xs text-slate-500">Issued: {cert.date}</span>
                    <span className="ml-auto font-mono text-xs text-dark-500">{cert.credential}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map(s => (
                      <span key={s} className="tag text-xs">{s}</span>
                    ))}
                  </div>

                  {/* Link */}
                  {cert.link && cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-primary-400 hover:text-primary-300 transition-colors group/link"
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
