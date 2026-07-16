const requireApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key']

  if (!apiKey) {
    return res.status(401).json({ success: false, message: 'Unauthorized: API key is missing.' })
  }

  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(403).json({ success: false, message: 'Forbidden: Invalid API key.' })
  }

  next()
}

module.exports = { requireApiKey }