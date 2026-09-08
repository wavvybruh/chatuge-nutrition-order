import { MenuCategory } from '@/types/order'
import { BLUE, ORANGE, PINK, PURPLE, RED, YELLOW } from '@/data/images'
export const refreshers: MenuCategory = {
  id: 'refreshers', title: 'Refreshers', priceLabel: '$10.00',
  note: 'Available add-ons: Energy · Mental Clarity · Hydration · Aloe · Boba',
  drinks: [
    { id: 'rf-strawberry-sunrise', name: 'Strawberry Sunrise', category: 'refreshers', ingredients: [], price: 10, image: RED },
    { id: 'rf-bayou-blueberry', name: 'Bayou Blueberry', category: 'refreshers', ingredients: [], price: 10, image: BLUE },
    { id: 'rf-mango-dragonfruit', name: 'Mango Dragonfruit', category: 'refreshers', ingredients: [], price: 10, image: PURPLE },
    { id: 'rf-watermelon-fresca', name: 'Watermelon Fresca', category: 'refreshers', ingredients: [], price: 10, image: PINK },
    { id: 'rf-pineapple-twist', name: 'Pineapple Twist', category: 'refreshers', ingredients: [], price: 10, image: YELLOW },
    { id: 'rf-peach-bliss', name: 'Peach Bliss', category: 'refreshers', ingredients: [], price: 10, image: ORANGE },
    { id: 'rf-blackberry-dream', name: 'Blackberry Dream', category: 'refreshers', ingredients: [], price: 10, image: PURPLE },
  ],
}
