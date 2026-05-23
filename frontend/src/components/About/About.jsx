import { motion } from 'framer-motion'
import { HiAcademicCap, HiCode, HiDatabase, HiLightningBolt, HiServer } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const HIGHLIGHTS = [
  { icon: HiCode,          label: 'Frontend',  value: 'React.js',   color: 'text-blue-400' },
  { icon: HiServer,        label: 'Backend',   value: 'Node.js',    color: 'text-blue-500' },
  { icon: HiDatabase,      label: 'Database',  value: 'MongoDB',    color: 'text-cyan-400' },
  { icon: HiLightningBolt, label: 'Projects',  value: '10+',        color: 'text-indigo-400' },
]

const STATS = [
  { label: 'Projects Built',     value: '10+' },
  { label: 'Technologies',       value: '15+' },
  { label: 'LeetCode Problems',  value: '200+' },
  { label: 'Certifications',     value: '5+' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="py-28 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-5 text-gray-400 leading-relaxed font-body text-base">
              <p>
                I'm <span className="text-blue-400 font-semibold">Akshaya Sanga</span>, a passionate Full-Stack Developer
                with a strong foundation in building modern, scalable web applications from end to end.
              </p>
              <p>
                I specialize in the <span className="text-gray-100">MERN stack</span> — MongoDB, Express.js, React, and Node.js —
                and love turning complex problems into clean, efficient solutions. I care deeply about writing readable code,
                designing intuitive UIs, and shipping reliable products.
              </p>
              <p>
                When I'm not coding, you'll find me solving challenges on LeetCode, exploring new technologies,
                or contributing to open-source projects. I'm currently seeking opportunities where I can grow,
                contribute, and make a meaningful impact.
              </p>
            </div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-8 bg-[#111827] border border-gray-800/60 p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-gray-700 transition-colors"
            >
              <div className="p-3 rounded-xl bg-[#0B0F19] border border-gray-800/60 text-blue-400 flex-shrink-0">
                <HiAcademicCap size={24} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-gray-100 text-sm sm:text-base">B.Tech in Computer Science Engineering</h4>
                <p className="font-mono text-xs text-gray-500 mt-1">Expected Graduation: 2027</p>
              </div>
            </motion.div>

            {/* Highlight chips */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {HIGHLIGHTS.map(({ icon: Icon, label, value, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="bg-[#111827] border border-gray-800/60 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:-translate-y-1 hover:border-gray-700 transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg bg-[#0B0F19] border border-gray-800/60 ${color}`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500">{label}</p>
                    <p className="font-display font-semibold text-gray-100 text-sm">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Stats / visual side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Avatar placeholder / decorative card */}
            <div className="relative mx-auto max-w-sm">
              <div className="bg-[#111827] border border-gray-800/60 p-1 rounded-3xl overflow-hidden shadow-sm">
                <div className="rounded-3xl bg-[#0B0F19] aspect-square flex items-center justify-center relative overflow-hidden">
                  {/* Abstract code art */}
                  <div className="absolute inset-0 flex flex-col justify-center px-8 py-6 font-mono text-xs text-blue-500/20 leading-6 select-none overflow-hidden">
                    {[
                      "const akshaya = {",
                      "  role: 'Full-Stack Dev',",
                      "  stack: ['React', 'Node'],",
                      "  db: 'MongoDB',",
                      "  passion: 'Building',",
                      "  available: true,",
                      "};",
                      "",
                      "akshaya.build();",
                    ].map((line, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="block"
                      >
                        {line}
                      </motion.span>
                    ))}
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-28 h-28 rounded-full border-2 border-blue-500/50 mx-auto mb-4 shadow-lg shadow-blue-500/20 overflow-hidden bg-[#111827]">
                      <img 
                        src="/profile.jpeg" 
                        alt="Akshaya Sanga" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-display font-semibold text-gray-100 text-xl">Akshaya Sanga</p>
                    <p className="text-blue-400 font-mono text-xs mt-1">Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-[#111827] border border-gray-800/60 rounded-xl px-3 py-2 shadow-sm"
              >
                <p className="font-mono text-xs text-blue-400">Open to Work ✓</p>
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {STATS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="bg-[#111827] border border-gray-800/60 rounded-2xl p-5 text-center shadow-sm hover:-translate-y-1 hover:border-gray-700 transition-all duration-300"
                >
                  <p className="font-display font-bold text-3xl text-blue-500">{value}</p>
                  <p className="font-mono text-xs text-gray-500 mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
