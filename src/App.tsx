import { CartProvider } from '@/context/CartContext'
import MenuSection from '@/components/order/MenuSection'
import OrderPanel from '@/components/order/OrderPanel'
import { SITE } from '@/config/site'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <img src={SITE.logoUrl} alt={SITE.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-foreground">{SITE.name}</p>
                <p className="text-xs text-muted-foreground">{SITE.slogan}</p>
              </div>
            </div>
            <a
              href={`tel:${SITE.phone}`}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              {SITE.phone}
            </a>
          </div>
        </header>

        {/* Main two-column layout */}
        <main className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
            {/* Left: Menu */}
            <MenuSection />
            {/* Right: Order panel (sticky) */}
            <div className="lg:sticky lg:top-20 lg:self-start">
              <OrderPanel />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card py-6 text-center text-sm text-muted-foreground">
          <p>{SITE.name} · {SITE.addressLine1}, {SITE.addressLine2}</p>
          <p className="mt-1">{SITE.phone} · <a href={SITE.facebookUrl} className="text-primary underline" target="_blank" rel="noreferrer">Facebook</a></p>
        </footer>
      </div>
    </CartProvider>
  )
}
