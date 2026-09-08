import { MenuCategory } from '@/types/order'
import { BLUE, ORANGE, PINK, RAINBOW, RED } from '@/data/images'
const sizes = [{ label: 'Small', price: 4 }, { label: 'Large', price: 7 }]
export const kidsHydration: MenuCategory = {
  id: 'kids-hydration', title: 'Kids Hydration Drinks', priceLabel: '$4 Small / $7 Large',
  note: 'Vitamins · Electrolytes · 40-60 Calories / 6-9g Sugar',
  drinks: [
    { id: 'kh-aquaman', name: 'Aquaman', category: 'kids-hydration', ingredients: ['Grape', 'Blue Blast'], price: null, sizes, image: BLUE },
    { id: 'kh-barbie', name: 'Barbie', category: 'kids-hydration', ingredients: ['Strawberry'], price: null, sizes, image: PINK },
    { id: 'kh-captain-america', name: 'Captain America', category: 'kids-hydration', ingredients: ['Strawberry', 'Blue Blast'], price: null, sizes, image: RAINBOW },
    { id: 'kh-cinderella', name: 'Cinderella', category: 'kids-hydration', ingredients: ['Blue Raspberry'], price: null, sizes, image: BLUE },
    { id: 'kh-little-mermaid', name: 'Little Mermaid', category: 'kids-hydration', ingredients: ['Orange', 'Blue Blast'], price: null, sizes, image: RAINBOW },
    { id: 'kh-nemo', name: 'Nemo', category: 'kids-hydration', ingredients: ['Orange', 'Orange Pineapple'], price: null, sizes, image: ORANGE },
    { id: 'kh-peppa-pig', name: 'Peppa Pig', category: 'kids-hydration', ingredients: ['Rainbow Candy', 'Pina Colada'], price: null, sizes, image: RAINBOW },
    { id: 'kh-spiderman', name: 'Spiderman', category: 'kids-hydration', ingredients: ['Cherry Limeade'], price: null, sizes, image: RED },
    { id: 'kh-unicorn', name: 'Unicorn', category: 'kids-hydration', ingredients: ['Watermelon', 'Blue Blast'], price: null, sizes, image: RAINBOW },
    { id: 'kh-gummi-bear', name: 'Gummi Bear', category: 'kids-hydration', ingredients: ['Strawberry', 'Watermelon'], price: null, sizes, image: PINK },
  ],
}
