export const SITE = {
  name: 'Chatuge Nutrition',
  slogan: 'Live Healthy, Drink Happy',
  tagline: "Hayesville's newest nutrition-on-the-go destination!",
  addressLine1: '964 NC 69 STE 13',
  addressLine2: 'Hayesville, NC 28904',
  phone: '(828) 557-7523',
  facebookUrl: 'https://www.facebook.com/ChatugeNutrition',
  logoUrl: 'https://vibe.filesafe.space/1788305080923227568/attachments/8f341e7d-d91d-4d13-ade9-818cbfec7912.jpg',
}

export const DELIVERY_DAYS = ['Tuesday', 'Thursday'] as const

export const PARTICIPATING_SCHOOLS = [
  { id: 'school-1', label: '[School 1 — Name Needed]' },
  { id: 'school-2', label: '[School 2 — Name Needed]' },
  { id: 'school-3', label: '[School 3 — Name Needed]' },
]

// Square — filled in from Netlify env vars at build time
export const SQUARE_APP_ID = import.meta.env.VITE_SQUARE_APP_ID as string
export const SQUARE_LOCATION_ID = import.meta.env.VITE_SQUARE_LOCATION_ID as string
export const IS_PRODUCTION = import.meta.env.PROD
