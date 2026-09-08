import { useState } from 'react'
import { MENU } from '@/data/menu'
import DrinkCard from './DrinkCard'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU[0].id)
  const category = MENU.find(c => c.id === activeCategory) ?? MENU[0]

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Place Your Order</h1>
        <p className="mt-1 text-muted-foreground">
          Pick your favorites, choose a quantity, and add them to your order.
        </p>
      </div>

      {/* Category tabs */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {MENU.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              cat.id === activeCategory
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-primary/40'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Price + note */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
          {category.priceLabel}
        </span>
        {category.note && (
          <span className="text-sm text-muted-foreground">{category.note}</span>
        )}
      </div>

      {/* Drink grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {category.drinks.map(drink => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </section>
  )
}
