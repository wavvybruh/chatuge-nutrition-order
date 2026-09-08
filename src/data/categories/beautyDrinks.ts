import { MenuCategory } from '@/types/order'
import { BLUE, GREEN, ORANGE, PINK, PURPLE, RAINBOW, YELLOW } from '@/data/images'
const caffeine = 115
export const beautyDrinks: MenuCategory = {
  id: 'beauty-drinks', title: 'Beauty Drinks', priceLabel: '$9.00',
  note: 'Vitamins · Energy · Focus · Biotin · Collagen · 115mg Caffeine',
  drinks: [
    { id: 'bd-aloha', name: 'Aloha', category: 'beauty-drinks', ingredients: ['Peach', 'Raspberry'], price: 9, image: PINK, caffeine },
    { id: 'bd-barbie', name: 'Barbie', category: 'beauty-drinks', ingredients: ['Rainbow Candy', 'Pina Colada'], price: 9, image: RAINBOW, caffeine },
    { id: 'bd-baywatch', name: 'Baywatch', category: 'beauty-drinks', ingredients: ['Mango', 'Watermelon'], price: 9, image: ORANGE, caffeine },
    { id: 'bd-black-beauty', name: 'Black Beauty', category: 'beauty-drinks', ingredients: ['Blue Blast', 'Grape'], price: 9, image: PURPLE, caffeine },
    { id: 'bd-juliette', name: 'Juliette', category: 'beauty-drinks', ingredients: ['Coconut', 'Raspberry'], price: 9, image: PINK, caffeine },
    { id: 'bd-malibu-barbie', name: 'Malibu Barbie', category: 'beauty-drinks', ingredients: ['Pineapple', 'Coconut', 'Strawberry'], price: 9, image: RAINBOW, caffeine },
    { id: 'bd-moana', name: 'Moana', category: 'beauty-drinks', ingredients: ['Banana', 'Pina Colada'], price: 9, image: YELLOW, caffeine },
    { id: 'bd-queen-bee', name: 'Queen Bee', category: 'beauty-drinks', ingredients: ['Blue Blast'], price: 9, image: BLUE, caffeine },
    { id: 'bd-spa-day', name: 'Spa Day', category: 'beauty-drinks', ingredients: ['Cucumber', 'Lime'], price: 9, image: GREEN, caffeine },
    { id: 'bd-summer-lovin', name: "Summer Lovin'", category: 'beauty-drinks', ingredients: ['Coconut', 'Strawberry'], price: 9, image: PINK, caffeine },
  ],
}
