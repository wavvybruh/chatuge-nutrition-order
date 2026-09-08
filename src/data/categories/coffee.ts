import { MenuCategory } from '@/types/order'
import { COFFEE, SHAKE } from '@/data/images'
import { COFFEE_SHAKE } from '@/data/images'

export const coffee: MenuCategory = {
  id: 'coffee', title: 'Coffee Shakes', priceLabel: '$8.50',
  drinks: [
    { id: 'cf-blondie', name: 'Blondie', category: 'coffee', ingredients: ['Protein Coffee'], price: 8.5, image: COFFEE_SHAKE },
    { id: 'cf-french-vanilla-cap', name: 'French Vanilla Cappuccino', category: 'coffee', ingredients: ['Protein Coffee'], price: 8.5, image: COFFEE_SHAKE },
    { id: 'cf-hazelnut-latte', name: 'Hazelnut Latte', category: 'coffee', ingredients: ['Protein Coffee'], price: 8.5, image: COFFEE_SHAKE },
    { id: 'cf-choc-caramel-cap', name: 'Chocolate Caramel Cappuccino', category: 'coffee', ingredients: ['Protein Coffee'], price: 8.5, image: COFFEE_SHAKE },
    { id: 'cf-caramel-macchiato', name: 'Caramel Macchiato', category: 'coffee', ingredients: ['Protein Coffee'], price: 8.5, image: COFFEE_SHAKE },
  ],
}

export const icedCoffee: MenuCategory = {
  id: 'iced-coffee', title: 'Iced Coffee', priceLabel: '$8.00',
  note: '190-290 Calories / 24g Protein',
  drinks: [
    { id: 'ic-salted-caramel', name: 'Salted Caramel', category: 'iced-coffee', ingredients: ['Protein Coffee'], price: 8, image: COFFEE },
    { id: 'ic-mocha-frappe', name: 'Mocha Frappe', category: 'iced-coffee', ingredients: ['Protein Coffee'], price: 8, image: COFFEE },
    { id: 'ic-cookie-latte', name: 'Cookie Latte', category: 'iced-coffee', ingredients: ['Protein Coffee'], price: 8, image: COFFEE },
    { id: 'ic-pralines-cream', name: 'Pralines + Cream', category: 'iced-coffee', ingredients: ['Protein Coffee'], price: 8, image: SHAKE },
    { id: 'ic-french-vanilla', name: 'French Vanilla', category: 'iced-coffee', ingredients: ['Protein Coffee'], price: 8, image: COFFEE },
    { id: 'ic-chai-latte', name: 'Chai Latte', category: 'iced-coffee', ingredients: ['Protein Coffee'], price: 8, image: COFFEE },
  ],
}
