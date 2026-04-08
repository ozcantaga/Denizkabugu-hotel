/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'hotel-blue': '#c2d9e7',
        'hotel-cream': '#fdfcf8',
        'hotel-dark': '#2c3e50',
        'hotel-accent': '#a1b1bc',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        hotel: '.5em',
      }
    },
  },
}