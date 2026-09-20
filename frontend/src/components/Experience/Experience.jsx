import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiExternalLink, HiLocationMarker } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const EXPERIENCES = [
  {
    id: 1,
    role: 'AI Intern',
    company: 'FlyRank.ai',
    type: 'Internship',
    location: 'Remote',
    duration: 'Jul 2026 – Sep 2026',
    description: [
      'Completed an AI internship focused on AI fluency and machine learning, covering practical ML workflows and AI applications.',
      'Worked on data wrangling, embeddings, clustering, intent modeling, opportunity modeling, and insight-to-action workflows.',
      'Applied structured problem-solving to build real-world AI-driven use cases and data-informed decision systems.'
    ],
    skills: ['AI Fluency', 'Machine Learning', 'Data Wrangling', 'Embeddings'],
    certificateLink: '#',
  },
  {
    id: 2,
    role: 'Artificial Intelligence Intern',
    company: 'Edunet Foundation',
    type: 'Internship',
    location: 'Remote',
    duration: 'Aug 2025 – Sep 2025',
    description: [
      'Completed an AI-focused internship through IBM SkillsBuild and Edunet Foundation, working with Python, ML, and data analysis.',
      'Practiced data preprocessing, exploratory analysis, model development, and debugging through hands-on assignments.',
      'Built a solid foundation in end-to-end ML workflows from dataset understanding to model evaluation.'
    ],
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Model Development'],
    certificateLink: 'http://localhost:3000/#',
  },
  {
    id: 3,
    role: 'Competitive Programmer',
    company: 'DSA & Problem Solving',
    type: 'Continuous Practice',
    location: 'Online',
    duration: '200+ Problems',
    description: [
      'Solved 200+ Data Structures and Algorithms problems across coding platforms with a focus on optimization and logic building.',
      'Strengthened debugging, edge-case analysis, and efficient algorithm design across arrays, graphs, trees, and dynamic programming.',
      'Developed disciplined approach to coding interviews and scalable software problem solving.'
    ],
    skills: ['DSA', 'Problem Solving', 'Algorithms', 'Efficiency'],
    certificateLink: '#',
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
          <p className="font-mono text-slate-500 text-sm tracking-widest uppercase mb-3">My Journey</p>
          <h2 className="section-heading">Experience & <span className="gradient-text">Achievements</span></h2>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#f9f5ef] border border-[#e5d8c4] rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 hover:border-[#d7bf96] hover:shadow-lg hover:shadow-[#d7bf96]/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8f6a32] to-[#caa76d]" />
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-6 pl-2 md:pl-0">
                <div>
                  <h3 className="font-display font-semibold text-[#1c1816] text-xl md:text-2xl mb-1.5 group-hover:text-[#6d4d2e] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-body text-[#413a34] text-base md:text-lg mb-4 flex items-center gap-2">
                    <HiBriefcase className="text-[#6d4d2e] flex-shrink-0" />
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#5d5047]">
                    <span className="flex items-center gap-1.5"><HiCalendar size={14} /> {exp.duration}</span>
                    <span className="flex items-center gap-1.5"><HiLocationMarker size={14} /> {exp.location}</span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#e5d8c4] text-[#413a34]">{exp.type}</span>
                  </div>
                </div>
                <a
                  href={exp.certificateLink}
                  target={exp.certificateLink !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#6d4d2e] hover:text-[#4a3828] transition-colors bg-[#f3ebdf] hover:bg-[#eadcc0] px-4 py-2.5 rounded-lg border border-[#d7bf96] shrink-0 self-start w-fit"
                >
                  View Certificate
                  <HiExternalLink size={14} />
                </a>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-7 pl-2 md:pl-0 font-body text-[#544d49] text-sm leading-relaxed">
                {exp.description.map((desc, index) => (
                  <li key={index}>
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[#e5d8c4] pl-2 md:pl-0">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded-md bg-white border border-[#e5d8c4] font-mono text-xs text-[#413a34]">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}