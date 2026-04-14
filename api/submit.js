export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { targetName, name, position, phone, content } = req.body

    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://f.kdocs.cn/api/v3/form/4i4mtYWA/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        field_1719222524619: targetName,
        field_1719222546618: name,
        field_1719222562112: position,
        field_1719222574215: phone,
        field_1719222587412: content,
      }),
    })

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
    return res.status(200).json({ success: true })

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message })
  }
}

export const config = {
  api: { bodyParser: true }
}