import { MenuCategory } from '@/types/order'
import { BLUE, COFFEE, GREEN, PINK, RAINBOW, SHAKE, YELLOW } from '@/data/images'
export const classicShakes: MenuCategory = {
  id: 'classic-shakes', title: 'Classic Shakes', priceLabel: '$8.50',
  note: '200-250 Calories / 24-27g Protein',
  drinks: [
    { id: 'cs-banana-pudding', name: 'Banana Pudding', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: YELLOW },
    { id: 'cs-banana-nut', name: 'Banana Nut', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: YELLOW },
    { id: 'cs-blueberry-cheesecake', name: 'Blueberry Cheesecake', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: BLUE },
    { id: 'cs-brownie-batter', name: 'Brownie Batter', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: COFFEE },
    { id: 'cs-butter-pecan', name: 'Butter Pecan', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: SHAKE },
    { id: 'cs-cinnamon-toast-crunch', name: 'Cinnamon Toast Crunch', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: SHAKE },
    { id: 'cs-cake-batter', name: 'Cake Batter', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: YELLOW },
    { id: 'cs-dreamsicle', name: 'Dreamsicle', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: SHAKE },
    { id: 'cs-elvis', name: 'Elvis (Choc or Vanilla)', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: COFFEE },
    { id: 'cs-fruity-pebbles', name: 'Fruity Pebbles', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: RAINBOW },
    { id: 'cs-german-chocolate', name: 'German Chocolate', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: COFFEE },
    { id: 'cs-keylime-pie', name: 'Keylime Pie', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: GREEN },
    { id: 'cs-lemon-pound-cake', name: 'Lemon Pound Cake', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: YELLOW },
    { id: 'cs-mint-choc-chip', name: 'Mint Chocolate Chip', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: GREEN },
    { id: 'cs-oatmeal-cookie', name: 'Oatmeal Cookie', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: SHAKE },
    { id: 'cs-oreo-cheesecake', name: 'Oreo Cheesecake', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: COFFEE },
    { id: 'cs-pecan-pie', name: 'Pecan Pie', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: SHAKE },
    { id: 'cs-peanut-butter-cup', name: 'Peanut Butter Cup', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: COFFEE },
    { id: 'cs-snickers', name: 'Snickers (or White Choc)', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: COFFEE },
    { id: 'cs-strawberry-cheesecake', name: 'Strawberry Cheesecake', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: PINK },
    { id: 'cs-turtle-cheesecake', name: 'Turtle Cheesecake', category: 'classic-shakes', ingredients: ['Protein Shake'], price: 8.5, image: COFFEE },
  ],
}
