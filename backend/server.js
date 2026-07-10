require('dotenv').config()
const express    = require('express')
const cors       = require('cors')
const helmet     = require('helmet')
const morgan     = require('morgan')
const rateLimit  = require('express-rate-limit')
const connectDB  = require('./config/db')
const contactRoutes = require('./routes/contact')
const { errorHandler, notFound } = require('./middleware/errorHandler')

const app  = express()
const PORT = process.env.PORT || 5000

// ── Connect to MongoDB ────────────────────────────────────────────────────────
connectDB()

// ── Security middleware ───────────────────────────────────────────────────────
app.use(helmet())
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173',
    'https://akshayasanga.vercel.app',
  ],
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

// ── Global rate limiter ───────────────────────────────────────────────────────
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: { success: false, message: 'Too many requests, please slow down.' },
  standardHeaders: true,
  legacyHeaders: false,
}))

// ── Request parsing ───────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// ── Logging ───────────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'))
}

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Akshaya Portfolio API is running 🚀',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  })
})

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRoutes)

// ── 404 & Error handlers ──────────────────────────────────────────────────────
app.use(notFound)
app.use(errorHandler)

// ── Start server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`)
  console.log(`🌐 Health: http://localhost:${PORT}/api/health\n`)
})

module.exports = app
