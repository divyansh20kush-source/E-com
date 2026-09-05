/**
 * Vercel-style serverless endpoint.
 * Set RESEND_API_KEY, ORDER_FROM_EMAIL, MERCHANT_EMAIL, and PUBLIC_STORE_URL.
 * In production, verify the customer identity and re-price items against your product database.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { items = [], subtotal = 0, customerEmail, paymentMethod } = req.body || {}
  if (!items.length) return res.status(400).json({ error: 'An order needs at least one item.' })
  if (!/^\S+@\S+\.\S+$/.test(customerEmail || '')) return res.status(400).json({ error: 'A valid customer email is required.' })
  if (paymentMethod !== 'cash_on_delivery') return res.status(400).json({ error: 'Cash on delivery is the only available payment method.' })
  if (!process.env.RESEND_API_KEY || !process.env.ORDER_FROM_EMAIL || !process.env.MERCHANT_EMAIL) {
    return res.status(503).json({ error: 'Order email is not configured.' })
  }

  const trackingId = `KND-${crypto.randomUUID().slice(0, 8).toUpperCase()}`
  const origin = process.env.PUBLIC_STORE_URL || 'https://your-store.example'
  const trackingUrl = `${origin}/track/${trackingId}`
  const invoiceLines = items.map((item) => `<li>${item.quantity} × ${item.name} — $${item.price * item.quantity}</li>`).join('')
  const invoice = `<h1>Thank you for shopping with Serein.</h1><p>Aura reviewed your order and prepared this invoice.</p><ul>${invoiceLines}</ul><p><strong>Total due on delivery: $${subtotal}</strong></p><p><strong>Payment method: Cash on delivery</strong></p><p>Tracking ID: <strong>${trackingId}</strong><br><a href="${trackingUrl}">Follow your order</a></p>`

  // Resend is called directly so this endpoint has no provider SDK dependency.
  const sendEmail = (to, subject, html) => fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: process.env.ORDER_FROM_EMAIL, to: [to], subject, html }),
    })
  const [merchantEmail, customerInvoice] = await Promise.all([
    sendEmail(process.env.MERCHANT_EMAIL, `New Serein order ${trackingId}`, `<h1>New order received</h1>${invoice}`),
    sendEmail(customerEmail, `Your Serein order ${trackingId}`, invoice),
  ])
  if (!merchantEmail.ok || !customerInvoice.ok) return res.status(502).json({ error: 'Unable to send order email.' })

  return res.status(201).json({ trackingId, trackingUrl })
}
