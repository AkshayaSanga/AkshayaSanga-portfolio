import axios from 'axios'
import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiLocationMarker, HiMail, HiPaperAirplane } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const CONTACT_INFO = [
  { icon: HiMail,           label: 'Email',    value: 'sangaakshaya7@gmail.com', href: 'mailto:sangaakshaya7@gmail.com' },
  { icon: HiLocationMarker, label: 'Location', value: 'Hyderabad, Telangana, IN', href: null },
]

const SOCIAL = [
  { icon: FaGithub,   href: 'https://github.com/AkshayaSanga',    label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/akshaya-sanga-b9bb07307', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/AKSHAYA18449883',      label: 'Twitter' },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm]       = useState(INITIAL)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    const { name, email, subject, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all required fields.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address.')
      return
    }
    setLoading(true)
    try {
      const API_URL = import.meta.env.VITE_API_URL || ''
      await axios.post(`${API_URL}/api/contact`, form)
      toast.success('Message sent! I\'ll get back to you soon 🚀')
      setForm(INITIAL)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary-400 text-sm tracking-widest uppercase mb-3">Let's connect</p>
          <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subheading">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card glow-border p-8">
              <h3 className="font-display font-bold text-white text-xl mb-6">Contact Information</h3>
              <div className="space-y-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-500 mb-0.5">{label}</p>
                      {href
                        ? <a href={href} className="font-body text-slate-300 hover:text-primary-400 transition-colors text-sm">{value}</a>
                        : <p className="font-body text-slate-300 text-sm">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-dark-700/50">
                <p className="font-mono text-xs text-slate-500 mb-4">Find me on</p>
                <div className="flex gap-3">
                  {SOCIAL.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-xl border border-dark-600/60 bg-dark-800/50 text-slate-400 hover:text-primary-400 hover:border-primary-500/40 hover:bg-primary-500/5 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-card glow-border p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-400 animate-pulse" />
                <span className="font-display font-semibold text-white text-sm">Currently Available</span>
              </div>
              <p className="font-body text-slate-400 text-sm leading-relaxed">
                Open to full-time roles, freelance projects, and interesting collaborations. Response within 24–48 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card glow-border p-8">
              <h3 className="font-display font-bold text-white text-xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Your Name *"
                    name="name"
                    type="text"
                    placeholder="AkshayaSanga"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Email Address *"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, collaboration..."
                  value={form.subject}
                  onChange={handleChange}
                />
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-dark-800/60 border border-dark-600/60 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 font-body text-sm
                               focus:outline-none focus:border-primary-500/60 focus:bg-dark-800/80 focus:ring-1 focus:ring-primary-500/20
                               transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 group"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-xs text-slate-400 mb-2 uppercase tracking-wider">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-dark-800/60 border border-dark-600/60 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 font-body text-sm
                   focus:outline-none focus:border-primary-500/60 focus:bg-dark-800/80 focus:ring-1 focus:ring-primary-500/20
                   transition-all duration-200"
      />
    </div>
  )
}
