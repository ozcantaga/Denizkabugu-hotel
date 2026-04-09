/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'hotel-blue': '#c2d9e7',
        'hotel-cream': '#fdfcf8',
        'hotel-dark': '#2c3e50',
        'hotel-accent': '#a1b1bc',
        'hotel-blue': '#ADD8E6', // Logonuzdaki o tatlı açık mavi tonu
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        hotel: '.5em',
      }
    },
  },
  plugins: [],
}