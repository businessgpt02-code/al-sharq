/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#102E6A', // Deep navy blue
          dark: '#020617', // Very dark for cinematic sections
          grey: '#333333', // Charcoal grey
          steel: '#708090', // Steel Grey
          silver: '#C0C0C0', // Metallic silver accent
          light: '#F8F9FA',
          electric: '#00D1FF', // Electric Blue Glow
          accent: '#38BDF8', // Cyan accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
