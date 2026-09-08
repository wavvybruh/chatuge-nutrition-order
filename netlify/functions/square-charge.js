import { randomUUID } from 'crypto'

export default async function handler(req, context) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const { sourceId, amountCents, note } = await req.json()

  if (!sourceId || !amountCents) {
    return new Response(JSON.stringify({ error: 'Missing sourceId or amountCents' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    })
  }

  const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN
  const SQUARE_LOCATION_ID  = process.env.SQUARE_LOCATION_ID

  if (!SQUARE_ACCESS_TOKEN || !SQUARE_LOCATION_ID) {
    return new Response(JSON.stringify({ error: 'Square not configured' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    })
  }

  const body = {
    source_id: sourceId,
    idempotency_key: randomUUID(),
    amount_money: { amount: amountCents, currency: 'USD' },
    location_id: SQUARE_LOCATION_ID,
    note: note || 'Chatuge Nutrition Online Order',
  }

  const res = await fetch('https://connect.squareup.com/v2/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SQUARE_ACCESS_TOKEN}`,
      'Square-Version': '2024-01-18',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()

  if (!res.ok) {
    return new Response(JSON.stringify({ error: data.errors?.[0]?.detail ?? 'Payment failed' }), {
      status: res.status, headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ paymentId: data.payment.id }), {
    status: 200, headers: { 'Content-Type': 'application/json' },
  })
}

export const config = { path: '/api/square-charge' }
