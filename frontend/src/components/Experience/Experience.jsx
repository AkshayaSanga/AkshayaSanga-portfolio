import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiExternalLink, HiLocationMarker } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const EXPERIENCES = [
  {
    id: 1,
    role: 'Artificial Intelligence Intern',
    company: 'IBM SkillsBuild (in collaboration with Edunet Foundation)',
    type: 'Internship',
    location: 'Remote',
    duration: '6 Weeks (Completed)',
    description: [
      'Completed a 6-week internship in Artificial Intelligence under IBM SkillsBuild, in collaboration with Edunet Foundation.',
      'Gained hands-on exposure to core Artificial Intelligence and Machine Learning concepts, including data preprocessing, model understanding, and real-world AI applications through structured learning modules and practical exercises.',
      'Developed strong analytical thinking and problem-solving skills by exploring how AI systems are designed and applied to solve industry-relevant problems. Strengthened ability to work with data-driven insights and understand end-to-end AI workflows.'
    ],
    skills: ['Artificial Intelligence', 'Machine Learning Fundamentals', 'Data Analytics', 'Problem Solving', 'Analytical Thinking', 'Python'],
    certificateLink: '/ibm-certificate.pdf',
  }
]

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-28 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-3">My Journey</p>
          <h2 className="section-heading">Work <span className="gradient-text">Experience</span></h2>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card glow-border p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-500 to-accent-cyan opacity-80" />
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-6 pl-2 md:pl-0">
                <div>
                  <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-1.5 group-hover:text-primary-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-body text-slate-300 text-base md:text-lg mb-4 flex items-center gap-2">
                    <HiBriefcase className="text-primary-500 flex-shrink-0" />
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-slate-500">
                    <span className="flex items-center gap-1.5"><HiCalendar size={14} /> {exp.duration}</span>
                    <span className="flex items-center gap-1.5"><HiLocationMarker size={14} /> {exp.location}</span>
                    <span className="px-2 py-1 rounded-md bg-dark-700/50 border border-dark-600 text-primary-400/80">{exp.type}</span>
                  </div>
                </div>
                <a
                  href={exp.certificateLink}
                  target={exp.certificateLink !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 hover:text-primary-300 transition-colors bg-primary-500/10 hover:bg-primary-500/20 px-3.5 py-2.5 rounded-lg border border-primary-500/20 shrink-0 self-start w-fit"
                >
                  View Certificate
                  <HiExternalLink size={14} />
                </a>
              </div>
              <div className="space-y-3 mb-7 pl-2 md:pl-0">
                {exp.description.map((desc, index) => (
                  <p key={index} className="font-body text-slate-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-dark-700/50 pl-2 md:pl-0">
                {exp.skills.map(skill => (
                  <span key={skill} className="tag text-xs">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}