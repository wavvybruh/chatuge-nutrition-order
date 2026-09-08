import { CartLine, CustomerInfo } from '@/types/order'

// Webhook URL is set via Netlify env var — filled in after GHL webhook is created
const WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL as string

export async function submitOrderToCrm(
  lines: CartLine[],
  info: CustomerInfo,
  subtotal: number,
  squarePaymentId: string,
) {
  if (!WEBHOOK_URL) {
    console.warn('GHL webhook URL not configured — skipping CRM submission')
    return
  }

  const payload = {
    // Contact fields
    first_name: info.fullName.split(' ')[0] ?? info.fullName,
    last_name: info.fullName.split(' ').slice(1).join(' ') || '',
    phone: info.phone,
    email: info.email || undefined,
    // Order summary
    fulfillment: info.fulfillment,
    delivery_day: info.fulfillment === 'delivery' ? info.deliveryDay : null,
    school: info.fulfillment === 'delivery' ? info.schoolId : null,
    delivery_instructions: info.deliveryInstructions || null,
    notes: info.notes || null,
    order_total: subtotal,
    square_payment_id: squarePaymentId,
    // Line items as readable string
    order_items: lines.map(l => {
      const addOnStr = l.addOns.length > 0 ? ` + ${l.addOns.map(a => a.name).join(', ')}` : ''
      return `${l.quantity}x ${l.name}${l.sizeLabel ? ` (${l.sizeLabel})` : ''}${addOnStr}`
    }).join('\n'),
  }

  await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}
