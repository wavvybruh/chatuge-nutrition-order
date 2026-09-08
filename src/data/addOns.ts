import { AddOn } from '@/types/order'

export const ADD_ONS: AddOn[] = [
  { id: 'ao-nrg',            name: 'NRG',             price: 2   },
  { id: 'ao-green-tea',      name: 'Green Tea',        price: 2   },
  { id: 'ao-aloe',           name: 'Aloe',             price: 2   },
  { id: 'ao-lift-off',       name: 'Lift Off',         price: 2.5 },
  { id: 'ao-best-defense',   name: 'Best Defense',     price: 3   },
  { id: 'ao-cr7',            name: 'CR7',              price: 2.5 },
  { id: 'ao-h3o',            name: 'H3O',              price: 2.5 },
  { id: 'ao-immunity',       name: 'Immunity Essentials', price: 3 },
  { id: 'ao-beauty-booster', name: 'Beauty Booster',   price: 2.5 },
  { id: 'ao-beverage-mix',   name: 'Beverage Mix',     price: 2.5 },
  { id: 'ao-probiotic',      name: 'Simply Probiotic', price: 2.5 },
  { id: 'ao-peach-mango',    name: 'Peach Mango Protein', price: 2.5 },
  { id: 'ao-wild-berry',     name: 'Wild Berry Protein',  price: 2.5 },
  { id: 'ao-fiber',          name: 'Fiber',            price: 2   },
  { id: 'ao-prolessa',       name: 'Prolessa Duo',     price: 5   },
]

export const SPECIALTY_ONLY_IDS = new Set(['ao-peach-mango', 'ao-wild-berry'])

export const ADD_ON_BY_ID: Record<string, AddOn> = Object.fromEntries(
  ADD_ONS.map((a) => [a.id, a]),
)

export const KITCHEN_SINK: AddOn = {
  id: 'kitchen-sink',
  name: 'Kitchen Sink',
  price: 2,
  description: '17g protein · 109 cal · 9 carbs · 200mg caffeine · Vitamins · Biotin · Collagen',
}

export const REFRESHER_ADD_ONS: AddOn[] = [
  { id: 'rf-energy',         name: 'Energy',          price: 1 },
  { id: 'rf-mental-clarity', name: 'Mental Clarity',  price: 1 },
  { id: 'rf-hydration',      name: 'Hydration',       price: 1 },
  { id: 'rf-aloe',           name: 'Aloe',            price: 1 },
  { id: 'rf-boba',           name: 'Boba',            price: 1 },
]
