import { MenuCategory } from '@/types/order'
import { RAINBOW, RED, BLUE, PURPLE, ORANGE, YELLOW, GREEN, PINK } from '@/data/images'
const caffeine = 200
export const loadedTeas: MenuCategory = {
  id: 'loaded-teas', title: 'Loaded Teas', priceLabel: '$8.50', note: '200mg Caffeine',
  drinks: [
    { id: 'lt-arnold-palmer', name: 'Arnold Palmer', category: 'loaded-teas', ingredients: ['Lemonade'], price: 8.5, image: YELLOW, caffeine },
    { id: 'lt-bahama-mama', name: 'Bahama Mama', category: 'loaded-teas', ingredients: ['Orange Pineapple', 'Cherry Limeade'], price: 8.5, image: ORANGE, caffeine },
    { id: 'lt-black-pearl', name: 'Black Pearl', category: 'loaded-teas', ingredients: ['Blue Blast', 'Grape'], price: 8.5, image: PURPLE, caffeine },
    { id: 'lt-blue-hawaiian', name: 'Blue Hawaiian', category: 'loaded-teas', ingredients: ['Pina Colada', 'Blue Blast'], price: 8.5, image: BLUE, caffeine },
    { id: 'lt-captain-america', name: 'Captain America', category: 'loaded-teas', ingredients: ['Strawberry', 'Blue Blast'], price: 8.5, image: RAINBOW, caffeine },
    { id: 'lt-cherry-limeade', name: 'Cherry Limeade', category: 'loaded-teas', ingredients: ['Cherry Limeade'], price: 8.5, image: RED, caffeine },
    { id: 'lt-cran-grape', name: 'Cran-Grape', category: 'loaded-teas', ingredients: ['Cranberry', 'Grape'], price: 8.5, image: PURPLE, caffeine },
    { id: 'lt-cucumber-watermelon', name: 'Cucumber Watermelon', category: 'loaded-teas', ingredients: ['Cucumber Lime', 'Watermelon'], price: 8.5, image: GREEN, caffeine },
    { id: 'lt-fanta', name: 'Fanta', category: 'loaded-teas', ingredients: ['Orange', 'Melon'], price: 8.5, image: ORANGE, caffeine },
    { id: 'lt-georgia-peach', name: 'Georgia Peach', category: 'loaded-teas', ingredients: ['Peach', 'Strawberry'], price: 8.5, image: ORANGE, caffeine },
    { id: 'lt-hippie-juice', name: 'Hippie Juice', category: 'loaded-teas', ingredients: ['Pina Colada', 'Pink Lemonade', 'Orange Pineapple', 'Watermelon'], price: 8.5, image: RAINBOW, caffeine },
    { id: 'lt-hulk-smash', name: 'Hulk Smash', category: 'loaded-teas', ingredients: ['[Ingredients to confirm]'], ingredientsPlaceholder: true, price: 8.5, image: GREEN, caffeine },
    { id: 'lt-hurricane', name: 'Hurricane', category: 'loaded-teas', ingredients: ['Watermelon', 'Pina Colada'], price: 8.5, image: PINK, caffeine },
    { id: 'lt-marthas-vineyard', name: "Martha's Vineyard", category: 'loaded-teas', ingredients: ['Blackberry', 'Watermelon'], price: 8.5, image: PURPLE, caffeine },
    { id: 'lt-miami-vice', name: 'Miami Vice', category: 'loaded-teas', ingredients: ['Strawberry', 'Pina Colada'], price: 8.5, image: RED, caffeine },
    { id: 'lt-outer-banks', name: 'Outer Banks', category: 'loaded-teas', ingredients: ['Pineapple', 'Tropical Fruit'], price: 8.5, image: YELLOW, caffeine },
    { id: 'lt-peach-passion', name: 'Peach Passion', category: 'loaded-teas', ingredients: ['Peach'], price: 8.5, image: ORANGE, caffeine },
    { id: 'lt-peach-sangria', name: 'Peach Sangria', category: 'loaded-teas', ingredients: ['Peach', 'Watermelon'], price: 8.5, image: ORANGE, caffeine },
    { id: 'lt-rainbow', name: 'Rainbow', category: 'loaded-teas', ingredients: ['Lemon', 'Blue Blast', 'Strawberry'], price: 8.5, image: RAINBOW, caffeine },
    { id: 'lt-red-dirt', name: 'Red Dirt', category: 'loaded-teas', ingredients: ['Grape', 'Cherry', 'Blue Blast'], price: 8.5, image: RED, caffeine },
    { id: 'lt-wonder-woman', name: 'Wonder Woman', category: 'loaded-teas', ingredients: ['Orange', 'Strawberry', 'Blue Blast'], price: 8.5, image: RAINBOW, caffeine },
  ],
}
