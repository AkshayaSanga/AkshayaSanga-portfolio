import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodechef, SiGeeksforgeeks, SiHackerrank, SiLeetcode } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const PROFILES = [
  {
    name: 'GitHub',
    handle: '@AkshayaSanga',
    url: 'https://github.com/AkshayaSanga',
    icon: FaGithub,
    color: '#ffffff',
    bg: 'from-slate-700/30 to-slate-800/20',
    stats: [
      { label: 'Repositories', value: '9' },
      { label: 'Stars',        value: '3' },
      { label: 'Contributions', value: '90+' },
    ],
    description: 'Open source contributions, personal projects, and collaborative work.',
  },
  {
    name: 'LeetCode',
    handle: 'SangaAkshaya',
    url: 'https://leetcode.com/u/SangaAkshaya/',
    icon: SiLeetcode,
    color: '#ffa116',
    bg: 'from-yellow-600/20 to-orange-600/10',
    stats: [
      { label: 'Problems Solved', value: '400+' },
      { label: 'Contest Rating',  value: '1550+' },
      { label: 'Top Percentage',  value: '30%' },
    ],
    description: 'Daily problem solving with focus on DSA and algorithmic thinking.',
  },
  {
    name: 'HackerRank',
    handle: '23891A05I0',
    url: 'https://www.hackerrank.com/profile/23891A05I0',
    icon: SiHackerrank,
    color: '#00ea64',
    bg: 'from-primary-600/20 to-emerald-600/10',
    stats: [
      { label: 'Problem Solving', value: '5★' },
      { label: 'Certifications',  value: '2' },
      { label: 'Badges',          value: '10+' },
    ],
    description: 'Ranked developer with 5-star ratings in JavaScript and Problem Solving.',
  },
  {
    name: 'LinkedIn',
    handle: 'AkshayaSanga',
    url: 'https://www.linkedin.com/in/akshaya-sanga-b9bb07307',
    icon: FaLinkedin,
    color: '#0a66c2',
    bg: 'from-blue-600/20 to-cyan-600/10',
    stats: [
      { label: 'Connections',  value: '500+' },
      { label: 'Endorsements', value: '40+' },
      { label: 'Followers',    value: '300+' },
    ],
    description: 'Professional network, career journey, and tech insights.',
  },
  {
    name: 'GeeksforGeeks',
    handle: 'SangaAkshaya',
    url: 'https://geeksforgeeks.org/user/SangaAkshaya',
    icon: SiGeeksforgeeks,
    color: '#2f8d46',
    bg: 'from-green-600/20 to-teal-600/10',
    stats: [
      { label: 'Coding Score',   value: '600+' },
      { label: 'Problems',       value: '150+' },
      { label: 'Institute Rank', value: 'Top 10' },
    ],
    description: 'Articles, problems, and contributions to the developer community.',
  },
  {
    name: 'CodeChef',
    handle: 'SangaAkshaya',
    url: 'https://codechef.com/users/SangaAkshaya',
    icon: SiCodechef,
    color: '#5b4638',
    bg: 'from-amber-600/20 to-yellow-600/10',
    stats: [
      { label: 'Rating',        value: '1600+' },
      { label: 'Global Rank',   value: 'Top 20%' },
      { label: 'Stars',         value: '3★' },
    ],
    description: 'Competitive programming and monthly coding contests.',
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
          <p className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-3">Find me on</p>
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
                className="glass-card glow-border group p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                {/* Profile header */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${profile.bg} border`}
                    style={{ borderColor: `${profile.color}33` }}
                  >
                    <Icon size={26} style={{ color: profile.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-white text-lg group-hover:text-primary-400 transition-colors">
                        {profile.name}
                      </h3>
                      <FaExternalLinkAlt
                        size={10}
                        className="text-slate-600 group-hover:text-primary-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                    <p className="font-mono text-xs text-slate-500">{profile.handle}</p>
                  </div>
                </div>

                <p className="font-body text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {profile.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {profile.stats.map(stat => (
                    <div key={stat.label} className="text-center p-2 rounded-xl bg-dark-800/50 border border-dark-700/40">
                      <p className="font-display font-bold text-sm" style={{ color: profile.color }}>{stat.value}</p>
                      <p className="font-mono text-xs text-slate-600 mt-0.5 leading-tight">{stat.label}</p>
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
