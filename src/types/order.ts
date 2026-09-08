export type FulfillmentMethod = 'pickup' | 'delivery'

export interface DrinkSize {
  label: string
  price: number
}

export interface AddOn {
  id: string
  name: string
  price: number
  description?: string
}

export interface Drink {
  id: string
  name: string
  category: string
  ingredients: string[]
  ingredientsPlaceholder?: boolean
  price: number | null
  sizes?: DrinkSize[]
  image?: string
  caffeine?: number
}

export interface MenuCategory {
  id: string
  title: string
  priceLabel: string
  note?: string
  drinks: Drink[]
}

export interface CartLine {
  lineId: string
  drinkId: string
  name: string
  category: string
  sizeLabel?: string
  unitPrice: number
  quantity: number
  addOns: AddOn[]
}

export type DeliveryDay = 'Tuesday' | 'Thursday'

export interface CustomerInfo {
  fullName: string
  phone: string
  email: string
  fulfillment: FulfillmentMethod
  deliveryDay: DeliveryDay
  schoolId: string
  deliveryInstructions: string
  notes: string
}
