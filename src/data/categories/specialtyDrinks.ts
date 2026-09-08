import { MenuCategory } from '@/types/order'
import { BLUE, CREAM, GREEN, ORANGE, PINK, PURPLE } from '@/data/images'
const caffeine = 115
export const specialtyDrinks: MenuCategory = {
  id: 'specialty-drinks', title: 'Specialty Drinks', priceLabel: '$9.50',
  note: 'Vitamins · Energy · Focus · Biotin · Collagen · Protein · 115mg Caffeine',
  drinks: [
    { id: 'sd-bae', name: 'Bae', category: 'specialty-drinks', ingredients: ['Peach Mango Protein', 'Raspberry'], price: 9.5, image: PINK, caffeine },
    { id: 'sd-casanova', name: 'Casanova', category: 'specialty-drinks', ingredients: ['Peach Mango Protein', 'Wild Berry Protein', 'Blue Blast'], price: 9.5, image: BLUE, caffeine },
    { id: 'sd-chatuge-cooler', name: 'Chatuge Cooler', category: 'specialty-drinks', ingredients: ['Peach Mango Protein', 'Wild Berry Protein', 'Coconut', 'Cucumber Lime', 'Watermelon'], price: 9.5, image: BLUE, caffeine },
    { id: 'sd-cosmo', name: 'Cosmo', category: 'specialty-drinks', ingredients: ['Wild Berry Protein'], price: 9.5, image: GREEN, caffeine },
    { id: 'sd-daisy-duke', name: 'Daisy Duke', category: 'specialty-drinks', ingredients: ['Wild Berry Protein', 'Strawberry', 'Watermelon'], price: 9.5, image: PINK, caffeine },
    { id: 'sd-desert-peach', name: 'Desert Peach', category: 'specialty-drinks', ingredients: ['Peach Mango Protein', 'Blue Blast'], price: 9.5, image: BLUE, caffeine },
    { id: 'sd-galaxy', name: 'Galaxy', category: 'specialty-drinks', ingredients: ['Wild Berry Protein', 'Grape'], price: 9.5, image: PURPLE, caffeine },
    { id: 'sd-hasselhoff', name: 'Hasselhoff', category: 'specialty-drinks', ingredients: ['Wild Berry Protein', 'Coconut'], price: 9.5, image: CREAM, caffeine },
    { id: 'sd-jimmy-buffet', name: 'Jimmy Buffet', category: 'specialty-drinks', ingredients: ['Peach Mango Protein', 'Piña Colada'], price: 9.5, image: CREAM, caffeine },
    { id: 'sd-mercedes', name: 'Mercedes', category: 'specialty-drinks', ingredients: ['Peach Mango Protein', 'Strawberry', 'Raspberry'], price: 9.5, image: PINK, caffeine },
    { id: 'sd-yellowstone', name: 'Yellowstone', category: 'specialty-drinks', ingredients: ['Peach Mango Protein', 'Passion Fruit'], price: 9.5, image: ORANGE, caffeine },
  ],
}
