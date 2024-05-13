/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        basketCard: '800px',
        basketCardProductImage: '250px',
        basketCardProductOwner: '350px',
        basketCardProductCount: '100px'
      },

      height: {
        basketCard: '275px',
        basketCardProductImage: '250px',
        basketCardProductOwner: '250px',
        basketCardProductCount: '250px'

      }
    },
  },
  plugins: [],
}

