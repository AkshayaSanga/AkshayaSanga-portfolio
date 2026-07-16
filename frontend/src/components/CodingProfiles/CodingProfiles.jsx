import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHackerrank, SiLeetcode } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const PROFILES = [
  {
    name: 'GitHub',
    handle: '@AkshayaSanga',
    url: 'https://github.com/AkshayaSanga',
    icon: FaGithub,
    color: '#0f172a',
    bg: 'from-slate-700/30 to-slate-800/20',
    stats: [
      { label: 'Contributions', value: '90+ GitHub Contributions' },
    ],
    description: 'Open source contributions, personal projects, and collaborative work.',
  },
  {
    name: 'LeetCode',
    handle: 'SangaAkshaya',
    url: 'https://leetcode.com/u/SangaAkshaya/',
    icon: SiLeetcode, // Keep leetcode color
    color: '#facc15',
    bg: 'from-yellow-500/20 to-orange-500/10',
    stats: [
      { label: 'Problems Solved', value: '200+ Problems Solved' },
    ],
    description: 'Daily problem solving with focus on DSA and algorithmic thinking.',
  },
  {
    name: 'HackerRank',
    handle: '23891A05I0',
    url: 'https://www.hackerrank.com/profile/23891A05I0',
    icon: SiHackerrank, // Keep hackerrank color
    color: '#2ec866',
    bg: 'from-green-500/20 to-emerald-500/10',
    stats: [
      { label: 'Problem Solving', value: '5★ in Problem Solving' },
    ],
    description: 'Ranked developer with 5-star ratings in JavaScript and Problem Solving.',
  },
  {
    name: 'LinkedIn',
    handle: 'AkshayaSanga',
    url: 'https://www.linkedin.com/in/akshaya-sanga-b9bb07307',
    icon: FaLinkedin, // Keep linkedin color
    color: '#0a66c2',
    bg: 'from-sky-500/20 to-blue-500/10',
    stats: [
      { label: 'Connections',  value: '500+ Connections' },
    ],
    description: 'Professional network, career journey, and tech insights.',
  },
]

export default function CodingProfiles() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="profiles" className="py-28 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-slate-500 text-sm tracking-widest uppercase mb-3">Find me on</p>
          <h2 className="section-heading">Coding <span className="gradient-text">Profiles</span></h2>
          <p className="section-subheading">Platforms where I sharpen my skills and build my developer presence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILES.map((profile, i) => {
            const Icon = profile.icon
            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-slate-50 border border-slate-200/60 rounded-2xl group p-6 flex flex-col hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 cursor-pointer"
              >
                {/* Profile header */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-slate-200"
                  >
                    <Icon size={26} style={{ color: profile.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-semibold text-slate-800 text-lg group-hover:text-primary-600 transition-colors">
                        {profile.name}
                      </h3>
                      <FaExternalLinkAlt
                        size={10}
                        className="text-slate-400 group-hover:text-primary-600 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                    <p className="font-mono text-xs text-slate-500">{profile.handle}</p>
                  </div>
                </div>

                <p className="font-body text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {profile.description}
                </p>

                {/* Stats */}
                <div className="mt-auto">
                  {profile.stats.map(stat => (
                    <div key={stat.label} className="w-full text-center py-2.5 rounded-xl bg-white border border-slate-200/80">
                      <span className="font-display font-medium text-sm text-slate-800">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
