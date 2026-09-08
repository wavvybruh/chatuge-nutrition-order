import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'
import { AddOn, CartLine, Drink } from '@/types/order'

interface CartContextValue {
  lines: CartLine[]
  addToCart: (drink: Drink, qty: number, sizeLabel?: string, unitPrice?: number) => void
  updateQuantity: (lineId: string, qty: number) => void
  setLineAddOns: (lineId: string, addOns: AddOn[]) => void
  removeLine: (lineId: string) => void
  clearCart: () => void
  subtotal: number
  totalItems: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])

  const addToCart = useCallback((drink: Drink, qty: number, sizeLabel?: string, unitPrice?: number) => {
    const price = unitPrice ?? drink.price ?? 0
    const lineId = `${drink.id}-${sizeLabel ?? 'default'}`
    setLines(prev => {
      const existing = prev.find(l => l.lineId === lineId)
      if (existing) return prev.map(l => l.lineId === lineId ? { ...l, quantity: l.quantity + qty } : l)
      return [...prev, { lineId, drinkId: drink.id, name: drink.name, category: drink.category, sizeLabel, unitPrice: price, quantity: qty, addOns: [] }]
    })
  }, [])

  const updateQuantity = useCallback((lineId: string, qty: number) => {
    setLines(prev => {
      if (qty <= 0) return prev.filter(l => l.lineId !== lineId)
      return prev.map(l => l.lineId === lineId ? { ...l, quantity: qty } : l)
    })
  }, [])

  const setLineAddOns = useCallback((lineId: string, addOns: AddOn[]) => {
    setLines(prev => prev.map(l => l.lineId === lineId ? { ...l, addOns } : l))
  }, [])

  const removeLine = useCallback((lineId: string) => {
    setLines(prev => prev.filter(l => l.lineId !== lineId))
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const subtotal = useMemo(() =>
    lines.reduce((sum, l) => sum + (l.unitPrice + l.addOns.reduce((s, a) => s + a.price, 0)) * l.quantity, 0),
    [lines])

  const totalItems = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines])

  const value = useMemo(() => ({ lines, addToCart, updateQuantity, setLineAddOns, removeLine, clearCart, subtotal, totalItems }),
    [lines, addToCart, updateQuantity, setLineAddOns, removeLine, clearCart, subtotal, totalItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
