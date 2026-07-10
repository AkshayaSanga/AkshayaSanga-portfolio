import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiExternalLink, HiLocationMarker } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const EXPERIENCES = [
  {
    id: 1,
    role: 'Artificial Intelligence Intern',
    company: 'IBM SkillsBuild & Edunet Foundation',
    type: 'Internship',
    location: 'Remote',
    duration: '6 Weeks',
    description: [
      'Engineered data preprocessing pipelines and trained foundational machine learning models using Python.',
      'Developed practical AI workflows to analyze real-world datasets and derive actionable insights.',
      'Completed structured industry projects focusing on the end-to-end ML lifecycle and AI system design.'
    ],
    skills: ['Python', 'Machine Learning', 'Data Analytics', 'AI Workflows'],
    certificateLink: '/ibm-certificate.pdf',
  },
  {
    id: 2,
    role: 'Hackathon Participant',
    company: 'VHack 2.0 — Vignan Institute',
    type: 'Hackathon',
    location: 'On-site',
    duration: 'Feb 2024',
    description: [
      'Prototyped and built a complete software solution within a strict 24-hour time constraint.',
      'Collaborated with a cross-functional team to design the architecture and implement core MVP features.',
      'Demonstrated rapid development, problem-solving, and effective technical communication.'
    ],
    skills: ['Rapid Prototyping', 'System Architecture', 'Team Collaboration'],
    certificateLink: '/vhack-certificate.jpeg',
  },
  {
    id: 3,
    role: 'Machine Learning Workshop',
    company: 'Innomatics Research Labs',
    type: 'Workshop',
    location: 'Hybrid',
    duration: '5 Days',
    description: [
      'Completed an intensive hands-on workshop focused on full-lifecycle machine learning and model deployment.',
      'Bridged the gap between theoretical ML algorithms and practical, production-ready AI applications.',
      'Gained experience with model serving techniques and end-to-end deployment architectures.'
    ],
    skills: ['Model Deployment', 'Algorithms', 'AI Architecture', 'Machine Learning'],
    certificateLink: '/innomatics-certificate.jpg',
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
          <h2 className="section-heading">Experience & <span className="gradient-text">Achievements</span></h2>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#111827] border border-gray-800/60 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 hover:border-gray-700 hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50" />
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-6 pl-2 md:pl-0">
                <div>
                  <h3 className="font-display font-semibold text-gray-100 text-xl md:text-2xl mb-1.5 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-body text-gray-300 text-base md:text-lg mb-4 flex items-center gap-2">
                    <HiBriefcase className="text-blue-500 flex-shrink-0" />
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-gray-500">
                    <span className="flex items-center gap-1.5"><HiCalendar size={14} /> {exp.duration}</span>
                    <span className="flex items-center gap-1.5"><HiLocationMarker size={14} /> {exp.location}</span>
                    <span className="px-2.5 py-1 rounded-md bg-[#0B0F19] border border-gray-800/60 text-gray-400">{exp.type}</span>
                  </div>
                </div>
                <a
                  href={exp.certificateLink}
                  target={exp.certificateLink !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2.5 rounded-lg border border-blue-500/20 shrink-0 self-start w-fit"
                >
                  View Certificate
                  <HiExternalLink size={14} />
                </a>
              </div>
              <div className="space-y-3 mb-7 pl-2 md:pl-0">
                {exp.description.map((desc, index) => (
                  <p key={index} className="font-body text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800/60 pl-2 md:pl-0">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded-md bg-[#0B0F19] border border-gray-800/60 font-mono text-xs text-gray-300">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}