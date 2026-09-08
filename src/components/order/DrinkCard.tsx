import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { Drink } from '@/types/order'
import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'

export default function DrinkCard({ drink }: { drink: Drink }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [sizeIndex, setSizeIndex] = useState(0)
  const activeSize = drink.sizes?.[sizeIndex]
  const unitPrice = activeSize ? activeSize.price : drink.price

  const handleAdd = () => {
    addToCart(drink, quantity, activeSize?.label, unitPrice ?? 0)
    toast.success(`Added ${quantity} × ${drink.name}${activeSize ? ` (${activeSize.label})` : ''} to your order`)
    setQuantity(1)
  }

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      {drink.image && (
        <img src={drink.image} alt={drink.name} className="h-36 w-full object-cover" />
      )}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-foreground leading-tight">{drink.name}</h3>
          {drink.caffeine != null && (
            <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
              {drink.caffeine}mg
            </span>
          )}
        </div>

        {drink.ingredients.length > 0 && (
          <p className="text-xs text-muted-foreground">
            {drink.ingredients.join(' · ')}
            {drink.ingredientsPlaceholder && (
              <span className="ml-1 italic text-destructive/70">needs confirmation</span>
            )}
          </p>
        )}

        {/* Size selector */}
        {drink.sizes ? (
          <div className="flex flex-wrap gap-1 mt-auto">
            {drink.sizes.map((size, i) => (
              <button
                key={size.label}
                onClick={() => setSizeIndex(i)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                  i === sizeIndex
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-muted-foreground'
                }`}
              >
                {size.label} · ${size.price.toFixed(2)}
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-auto text-sm font-bold text-foreground">
            {unitPrice != null ? `$${unitPrice.toFixed(2)}` : 'Price TBD'}
          </p>
        )}

        {/* Qty + add */}
        <div className="flex items-center gap-2 pt-1">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary">
            <Minus size={14} />
          </button>
          <span className="w-6 text-center text-sm font-semibold">{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary">
            <Plus size={14} />
          </button>
          <button onClick={handleAdd}
            className="ml-auto rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  )
}
