const express  = require('express')
const router   = express.Router()
const rateLimit = require('express-rate-limit')
const { body, validationResult } = require('express-validator')
const nodemailer = require('nodemailer')
const Contact  = require('../models/Contact')

// Rate limiter: max 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many messages sent. Please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
})

// Validation rules
const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 60 }).withMessage('Name must be 2–60 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Enter a valid email address')
    .normalizeEmail(),
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 120 }).withMessage('Subject cannot exceed 120 characters'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be 10–2000 characters'),
]

// Nodemailer transporter
const createTransporter = () =>
  nodemailer.createTransport({
    host:   process.env.EMAIL_HOST || 'smtp.gmail.com',
    port:   parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

// Send notification email
const sendEmail = async ({ name, email, subject, message }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return

  const transporter = createTransporter()
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to:   process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] ${subject || 'New Contact Message'} - ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #020408; color: #e2e8f0; border-radius: 12px; overflow: hidden; border: 1px solid #1a3347;">
        <div style="background: linear-gradient(135deg, #1da967, #00f5d4); padding: 24px 32px;">
          <h1 style="margin:0; color: #020408; font-size: 22px; font-weight: 700;">New Contact Message</h1>
          <p style="margin: 4px 0 0; color: #020408; opacity: 0.8; font-size: 13px;">From your portfolio website</p>
        </div>
        <div style="padding: 32px;">
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 90px;">Name</td><td style="padding: 8px 0; color: #e2e8f0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1da967;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px;">Subject</td><td style="padding: 8px 0; color: #e2e8f0;">${subject || 'No Subject'}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #0c1a24; border-radius: 8px; border-left: 3px solid #1da967;">
            <p style="margin: 0; color: #94a3b8; font-size: 13px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="padding: 16px 32px; border-top: 1px solid #1a3347; text-align: center;">
          <p style="margin: 0; color: #475569; font-size: 12px;">AkshayaSanga Portfolio — ${new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

// POST /api/contact
router.post('/', contactLimiter, validateContact, async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
        errors:  errors.array(),
      })
    }

    const { name, email, subject, message } = req.body
    const ipAddress = req.ip || req.headers['x-forwarded-for']

    // Try to save to MongoDB (Fallback for local offline mode)
    let contactId = 'offline-mode-id'
    let createdAt = new Date()
    try {
      const contact = await Contact.create({ name, email, subject, message, ipAddress })
      contactId = contact._id
      createdAt = contact.createdAt
    } catch (err) {
      console.warn('⚠️ MongoDB save skipped (Offline Mode)')
    }

    // Send email notification (non-blocking)
    sendEmail({ name, email, subject, message }).catch(err =>
      console.warn('Email send failed (non-fatal):', err.message)
    )

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: { id: contactId, createdAt },
    })
  } catch (error) {
    next(error)
  }
})

// GET /api/contact (admin - list all messages)
router.get('/', async (req, res, next) => {
  try {
    const { page = 1, limit = 20, status } = req.query
    const filter = status ? { status } : {}

    const [messages, total] = await Promise.all([
      Contact.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit))
        .select('-ipAddress'),
      Contact.countDocuments(filter),
    ])

    res.json({
      success: true,
      data: messages,
      pagination: { page: parseInt(page), limit: parseInt(limit), total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    next(error)
  }
})

// PATCH /api/contact/:id/status
router.patch('/:id/status', async (req, res, next) => {
  try {
    const { status } = req.body
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value' })
    }
    const updated = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true })
    if (!updated) return res.status(404).json({ success: false, message: 'Message not found' })
    res.json({ success: true, data: updated })
  } catch (error) {
    next(error)
  }
})

// DELETE /api/contact/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ success: false, message: 'Message not found' })
    res.json({ success: true, message: 'Message deleted successfully' })
  } catch (error) {
    next(error)
  }
})

module.exports = router
