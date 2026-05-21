import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiServer, HiDatabase, HiLightningBolt } from 'react-icons/hi'

const HIGHLIGHTS = [
  { icon: HiCode,          label: 'Frontend',  value: 'React.js',   color: 'text-blue-400' },
  { icon: HiServer,        label: 'Backend',   value: 'Node.js',    color: 'text-primary-400' },
  { icon: HiDatabase,      label: 'Database',  value: 'MongoDB',    color: 'text-green-400' },
  { icon: HiLightningBolt, label: 'Projects',  value: '10+',        color: 'text-yellow-400' },
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
            <div className="space-y-5 text-slate-400 leading-relaxed font-body text-base">
              <p>
                I'm <span className="text-primary-400 font-semibold">Akshaya Sanga</span>, a passionate Full-Stack Developer
                with a strong foundation in building modern, scalable web applications from end to end.
              </p>
              <p>
                I specialize in the <span className="text-white">MERN stack</span> — MongoDB, Express.js, React, and Node.js —
                and love turning complex problems into clean, efficient solutions. I care deeply about writing readable code,
                designing intuitive UIs, and shipping reliable products.
              </p>
              <p>
                When I'm not coding, you'll find me solving challenges on LeetCode, exploring new technologies,
                or contributing to open-source projects. I'm currently seeking opportunities where I can grow,
                contribute, and make a meaningful impact.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {HIGHLIGHTS.map(({ icon: Icon, label, value, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass-card glow-border p-4 flex items-center gap-3"
                >
                  <div className={`p-2 rounded-lg bg-dark-700/50 ${color}`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-500">{label}</p>
                    <p className="font-display font-semibold text-white text-sm">{value}</p>
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
                className="btn-primary"
              >
                Get in Touch
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
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
              <div className="glass-card glow-border p-1 rounded-3xl overflow-hidden">
                <div className="rounded-3xl bg-gradient-to-br from-dark-800 to-dark-700 aspect-square flex items-center justify-center relative overflow-hidden">
                  {/* Abstract code art */}
                  <div className="absolute inset-0 flex flex-col justify-center px-8 py-6 font-mono text-xs text-primary-500/30 leading-6 select-none overflow-hidden">
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
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/30">
                      <span className="font-display font-bold text-5xl text-dark-950">AS</span>
                    </div>
                    <p className="font-display font-bold text-white text-xl">Akshaya Sanga</p>
                    <p className="text-primary-400 font-mono text-xs mt-1">Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card glow-border px-3 py-2"
              >
                <p className="font-mono text-xs text-primary-400">Open to Work ✓</p>
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
                  className="glass-card glow-border p-5 text-center"
                >
                  <p className="font-display font-bold text-3xl gradient-text">{value}</p>
                  <p className="font-mono text-xs text-slate-500 mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
