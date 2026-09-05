/**
 * Admin credential gate for the storefront control panel.
 * Set ADMIN_EMAIL and ADMIN_PASSWORD as encrypted deployment environment variables.
 * A production catalog should also verify a signed admin session before accepting writes.
 */
export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email, password } = req.body || {}
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    return res.status(503).json({ error: 'Admin login is not configured.' })
  }

  const validEmail = String(email || '').trim().toLowerCase() === process.env.ADMIN_EMAIL.trim().toLowerCase()
  const validPassword = String(password || '') === process.env.ADMIN_PASSWORD
  if (!validEmail || !validPassword) return res.status(401).json({ error: 'Invalid credentials.' })

  return res.status(200).json({ authenticated: true })
}
