const systemPrompt = `You are Aura, a warm, concise shopping assistant for Serein, a thoughtful homewares store. Help people choose carefully. Recommend from: Halo table lamp ($148, hand-finished stoneware), Moss linen throw ($96, European flax linen), Quiet morning mug ($42, speckled ceramic). Answer in under 70 words and never make unsupported product claims.`

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const message = String(req.body?.message || '').slice(0, 1000)
  if (!message) return res.status(400).json({ error: 'A message is required.' })
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'Assistant not configured.' })

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'gpt-4.1-mini', instructions: systemPrompt, input: message }),
  })
  if (!response.ok) return res.status(502).json({ error: 'Assistant request failed.' })
  const result = await response.json()
  return res.status(200).json({ reply: result.output_text || 'I’m sorry, I could not finish that recommendation.' })
}
