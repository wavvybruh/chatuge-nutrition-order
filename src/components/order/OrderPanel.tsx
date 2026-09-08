import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { useCart } from '@/context/CartContext'
import { submitOrderToCrm } from '@/lib/orderTracking'
import { ADD_ONS, KITCHEN_SINK, REFRESHER_ADD_ONS, SPECIALTY_ONLY_IDS } from '@/data/addOns'
import { AddOn, CustomerInfo, DeliveryDay, FulfillmentMethod } from '@/types/order'
import { SQUARE_APP_ID, SQUARE_LOCATION_ID, IS_PRODUCTION } from '@/config/site'

declare const Square: any

const EMPTY_INFO: CustomerInfo = {
  fullName: '', phone: '', email: '',
  fulfillment: 'pickup', deliveryDay: 'Thursday',
  schoolId: '', deliveryInstructions: '', notes: '',
}

function availableAddOns(category: string): AddOn[] {
  const isRefresher  = category === 'refreshers'
  const isSpecialty  = category === 'specialty-drinks'
  if (isRefresher) return REFRESHER_ADD_ONS
  return ADD_ONS.filter(a => SPECIALTY_ONLY_IDS.has(a.id) ? isSpecialty : true)
}

export default function OrderPanel() {
  const { lines, updateQuantity, setLineAddOns, removeLine, subtotal, clearCart } = useCart()
  const [info, setInfo] = useState<CustomerInfo>(EMPTY_INFO)
  const [submitting, setSubmitting] = useState(false)
  const [paid, setPaid] = useState(false)
  const cardRef = useRef<any>(null)
  const paymentsRef = useRef<any>(null)
  const appleRef = useRef<any>(null)
  const googleRef = useRef<any>(null)

  // Load Square Web Payments SDK
  useEffect(() => {
    const script = document.createElement('script')
    script.src = IS_PRODUCTION
      ? 'https://web.squarecdn.com/v1/square.js'
      : 'https://sandbox.web.squarecdn.com/v1/square.js'
    script.async = true
    script.onload = initSquare
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  const amountCents = useMemo(() => Math.round(subtotal * 100), [subtotal])

  const buildPaymentRequest = useCallback((payments: any) =>
    payments.paymentRequest({
      countryCode: 'US',
      currencyCode: 'USD',
      total: { amount: (amountCents / 100).toFixed(2), label: 'Chatuge Nutrition' },
    }),
    [amountCents])

  const initSquare = useCallback(async () => {
    if (!SQUARE_APP_ID || !SQUARE_LOCATION_ID) return
    try {
      const payments = Square.payments(SQUARE_APP_ID, SQUARE_LOCATION_ID)
      paymentsRef.current = payments

      // Card form
      const card = await payments.card()
      await card.attach('#card-container')
      cardRef.current = card

      // Apple Pay
      try {
        const request = buildPaymentRequest(payments)
        const ap = await payments.applePay(request)
        await ap.attach('#apple-pay-button')
        appleRef.current = ap
      } catch (_) { /* Apple Pay not available on this device/browser */ }

      // Google Pay
      try {
        const request = buildPaymentRequest(payments)
        const gp = await payments.googlePay(request)
        await gp.attach('#google-pay-button')
        googleRef.current = gp
      } catch (_) { /* Google Pay not available */ }
    } catch (e) {
      console.error('Square init error', e)
    }
  }, [amountCents, buildPaymentRequest])

  const handlePay = async (method: 'card' | 'apple' | 'google') => {
    if (!info.fullName.trim() || !info.phone.trim() || lines.length === 0) {
      toast.error('Please add drinks and fill out your name and phone first.')
      return
    }
    setSubmitting(true)
    try {
      const source = method === 'card'   ? cardRef.current
                   : method === 'apple'  ? appleRef.current
                   : googleRef.current
      const result = await source.tokenize()
      if (result.status !== 'OK') {
        toast.error(result.errors?.[0]?.message ?? 'Card error — please try again.')
        return
      }

      const chargeRes = await fetch('/api/square-charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sourceId: result.token, amountCents, note: `Order for ${info.fullName}` }),
      })
      const chargeData = await chargeRes.json()
      if (!chargeRes.ok) {
        toast.error(chargeData.error ?? 'Payment failed. Please try again.')
        return
      }

      // Record order in CRM
      await submitOrderToCrm(lines, info, subtotal, chargeData.paymentId)

      setPaid(true)
      clearCart()
      toast.success('Payment successful! Your order is confirmed 🎉')
    } catch (e) {
      toast.error('Something went wrong. Please try again or call us.')
    } finally {
      setSubmitting(false)
    }
  }

  const isValid = useMemo(() => {
    if (!info.fullName.trim() || !info.phone.trim() || lines.length === 0) return false
    if (info.fulfillment === 'delivery' && !info.schoolId) return false
    return true
  }, [info, lines])

  if (paid) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mb-4 text-5xl">🎉</div>
        <h2 className="text-xl font-bold text-foreground">Order Confirmed!</h2>
        <p className="mt-2 text-muted-foreground">
          Thanks, {info.fullName.split(' ')[0]}! We received your order and payment.
          We'll have it ready for you soon.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Questions? Call us at <a href="tel:+18285577523" className="text-primary underline">(828) 557-7523</a>
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-6 py-4">
        <h2 className="text-lg font-bold text-foreground">Your Order</h2>
        {lines.length > 0 && (
          <button onClick={clearCart} className="mt-1 text-xs text-muted-foreground underline">
            Clear order
          </button>
        )}
      </div>

      <div className="divide-y divide-border">
        {/* ── Order lines ── */}
        {lines.length === 0 ? (
          <p className="px-6 py-8 text-center text-sm text-muted-foreground">
            Add drinks from the menu to get started.
          </p>
        ) : (
          <div className="max-h-72 overflow-y-auto divide-y divide-border">
            {lines.map(line => {
              const options = availableAddOns(line.category)
              const selectedIds = new Set(line.addOns.map(a => a.id))
              const toggleAddOn = (a: AddOn) => {
                const next = selectedIds.has(a.id)
                  ? line.addOns.filter(x => x.id !== a.id)
                  : [...line.addOns, a]
                setLineAddOns(line.lineId, next)
              }
              const lineTotal = (line.unitPrice + line.addOns.reduce((s, a) => s + a.price, 0)) * line.quantity
              return (
                <div key={line.lineId} className="px-6 py-4">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {line.name}{line.sizeLabel && ` (${line.sizeLabel})`}
                      </p>
                      <p className="text-xs text-muted-foreground">${line.unitPrice.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => updateQuantity(line.lineId, line.quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-primary">
                        <Minus size={12} />
                      </button>
                      <span className="w-5 text-center text-sm font-semibold">{line.quantity}</span>
                      <button onClick={() => updateQuantity(line.lineId, line.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-primary">
                        <Plus size={12} />
                      </button>
                      <span className="ml-2 text-sm font-bold text-foreground">${lineTotal.toFixed(2)}</span>
                      <button onClick={() => removeLine(line.lineId)}
                        className="ml-1 text-muted-foreground hover:text-destructive">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  {/* Add-ons */}
                  {options.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {options.map(a => (
                        <button key={a.id} onClick={() => toggleAddOn(a)}
                          className={`rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors ${
                            selectedIds.has(a.id)
                              ? 'border-accent bg-accent text-accent-foreground'
                              : 'border-border bg-background text-muted-foreground'
                          }`}>
                          {a.name} +${a.price.toFixed(2)}
                        </button>
                      ))}
                      <button onClick={() => toggleAddOn(KITCHEN_SINK)}
                        className={`rounded-full border-2 px-2 py-0.5 text-xs font-bold transition-colors ${
                          selectedIds.has(KITCHEN_SINK.id)
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-primary bg-background text-primary'
                        }`}>
                        Kitchen Sink +$2
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* ── Customer info ── */}
        <div className="px-6 py-4 space-y-3">
          <h3 className="font-semibold text-sm text-foreground">Your Information</h3>

          <select value={info.fulfillment}
            onChange={e => setInfo(p => ({ ...p, fulfillment: e.target.value as FulfillmentMethod }))}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
            <option value="pickup">Pickup at Chatuge Nutrition</option>
            <option value="delivery">School Delivery (Tue / Thu)</option>
          </select>

          {info.fulfillment === 'delivery' && (
            <>
              <select value={info.deliveryDay}
                onChange={e => setInfo(p => ({ ...p, deliveryDay: e.target.value as DeliveryDay }))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
                <option value="Tuesday">Tuesday</option>
                <option value="Thursday">Thursday</option>
              </select>
              <input placeholder="School name *" value={info.schoolId}
                onChange={e => setInfo(p => ({ ...p, schoolId: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
              <input placeholder="Delivery instructions" value={info.deliveryInstructions}
                onChange={e => setInfo(p => ({ ...p, deliveryInstructions: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
            </>
          )}

          <input placeholder="Full name *" value={info.fullName}
            onChange={e => setInfo(p => ({ ...p, fullName: e.target.value }))}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
          <input placeholder="Mobile phone *" value={info.phone}
            onChange={e => setInfo(p => ({ ...p, phone: e.target.value }))}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
          <input placeholder="Email (optional)" value={info.email}
            onChange={e => setInfo(p => ({ ...p, email: e.target.value }))}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
          <textarea placeholder="Order notes (optional)" value={info.notes}
            onChange={e => setInfo(p => ({ ...p, notes: e.target.value }))}
            rows={2}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm resize-none" />
        </div>

        {/* ── Total ── */}
        {lines.length > 0 && (
          <div className="px-6 py-3 flex justify-between items-center">
            <span className="font-bold text-foreground">Total</span>
            <span className="text-xl font-bold text-foreground">${subtotal.toFixed(2)}</span>
          </div>
        )}

        {/* ── Payment ── */}
        <div className="px-6 py-4 space-y-3">
          <h3 className="font-semibold text-sm text-foreground">Secure Payment</h3>

          {/* Apple Pay */}
          <div id="apple-pay-button" className={appleRef.current ? '' : 'hidden'} />
          {/* Google Pay */}
          <div id="google-pay-button" className={googleRef.current ? '' : 'hidden'} />

          {/* Card form */}
          <div id="card-container" className="rounded-lg border border-input bg-background p-3 min-h-[90px]" />

          <button
            onClick={() => handlePay('card')}
            disabled={!isValid || submitting}
            className="w-full rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground transition-opacity disabled:opacity-40">
            {submitting ? 'Processing…' : `Pay $${subtotal.toFixed(2)}`}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            🔒 Secured by Square · All major cards accepted
          </p>
        </div>
      </div>
    </div>
  )
}
