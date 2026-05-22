# 🚀 AkshayaSanga — Portfolio Hub

> Full-stack developer portfolio built with React, Node.js, Express, and MongoDB for AkshayaSanga.

![Tech Stack](https://img.shields.io/badge/Stack-MERN-3b82f6?style=flat-square)
![Frontend](https://img.shields.io/badge/Frontend-React_+_Tailwind-61dafb?style=flat-square)
![Backend](https://img.shields.io/badge/Backend-Node_+_Express-2563eb?style=flat-square)
![Database](https://img.shields.io/badge/Database-MongoDB-0284c7?style=flat-square)

---

## 📁 Folder Structure

```
akshaya-portfolio/
├── frontend/                    # React + Vite + Tailwind
│   ├── public/
│   │   └── resume.pdf           # Place your resume here
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/          # Sticky navbar with active detection
│   │   │   ├── Hero/            # Typing animation, CTAs, floating cards
│   │   │   ├── About/           # Bio, stats, highlights
│   │   │   ├── Skills/          # Tech stack with animated progress bars
│   │   │   ├── Projects/        # Filterable project cards
│   │   │   ├── Certifications/  # Certificate cards with links
│   │   │   ├── CodingProfiles/  # Platform stats cards
│   │   │   ├── Contact/         # Form + contact info
│   │   │   └── Footer/          # Footer with links
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css            # Global styles + Tailwind
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                     # Node.js + Express
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── middleware/
│   │   └── errorHandler.js      # Global error handling
│   ├── models/
│   │   └── Contact.js           # Mongoose schema
│   ├── routes/
│   │   └── contact.js           # REST endpoints + validation + email
│   ├── server.js                # Express app entry point
│   ├── .env.example
│   └── package.json
│
├── vercel.json                  # Vercel deployment config
├── render.yaml                  # Render deployment config
├── package.json                 # Root (concurrently scripts)
└── README.md
```

---

## ⚡ Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/AkshayaSanga/AkshayaSanga-portfolio.git
cd AkshayaSanga-portfolio
npm run install:all
```

### 2. Configure Environment

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your MongoDB URI and email credentials
```

### 3. Run Development Servers

```bash
npm run dev
# Frontend → http://localhost:5173
# Backend  → http://localhost:5000
```

---

## 🌐 API Endpoints

| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| GET    | /api/health            | Health check           |
| POST   | /api/contact           | Submit contact form    |
| GET    | /api/contact           | List all messages      |
| PATCH  | /api/contact/:id/status | Update message status |
| DELETE | /api/contact/:id       | Delete a message       |

### POST /api/contact — Request Body
```json
{
  "name":    "John Doe",
  "email":   "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd love to work with you on..."
}
```

### POST /api/contact — Success Response
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "data": { "id": "...", "createdAt": "..." }
}
```

---

## 🗃️ MongoDB Schema — Contact

```js
{
  name:      String,   // required, 2–60 chars
  email:     String,   // required, valid email
  subject:   String,   // optional, max 120 chars
  message:   String,   // required, 10–2000 chars
  status:    String,   // "new" | "read" | "replied"
  ipAddress: String,   // auto-captured
  createdAt: Date,     // auto
  updatedAt: Date,     // auto
}
```

---

## 🚀 Deployment

### Frontend → Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel --prod

# Set environment variable in Vercel dashboard:
# VITE_API_URL = https://akshaya-portfolio-backend.onrender.com
```

### Backend → Render

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repository
4. Set **Root Directory** to `backend`
5. Build command: `npm install`
6. Start command: `npm start`
7. Add environment variables:
   - `MONGODB_URI`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_TO`
   - `FRONTEND_URL`
   - `NODE_ENV=production`

---

## 🎨 Customization

### Update Personal Info
| File | What to Update |
|------|---------------|
| `frontend/src/components/Hero/Hero.jsx` | Name, role, social links |
| `frontend/src/components/About/About.jsx` | Bio, stats |
| `frontend/src/components/Skills/Skills.jsx` | Tech stack, proficiency |
| `frontend/src/components/Projects/Projects.jsx` | Project cards |
| `frontend/src/components/Certifications/Certifications.jsx` | Certifications |
| `frontend/src/components/CodingProfiles/CodingProfiles.jsx` | Profile URLs & stats |
| `frontend/src/components/Contact/Contact.jsx` | Email, phone, location |
| `frontend/src/components/Footer/Footer.jsx` | Social links |
| `frontend/public/resume.pdf` | Your actual resume |

### Color Theme
Edit `frontend/tailwind.config.js` → `colors.primary` to change the accent color.

---

## 🔒 Security Features

- Helmet.js (HTTP security headers)
- CORS whitelist
- Rate limiting (global + per-endpoint)
- Input validation (express-validator)
- Request body size limit (10kb)
- MongoDB injection protection (Mongoose)

---

## 📦 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, Vite, Tailwind CSS 3      |
| Animations | Framer Motion, TypeAnimation        |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB, Mongoose                   |
| Email      | Nodemailer (Gmail SMTP)             |
| Security   | Helmet, express-rate-limit, CORS    |
| Deployment | Vercel (frontend), Render (backend) |

---

## 📄 License

MIT © AkshayaSanga
