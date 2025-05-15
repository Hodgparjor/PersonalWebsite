/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F2EAD3', // beige
          dark: '#1A1A1A',  // dark grey/black
        },
        secondary: {
          light: '#DFD7BF', // slightly darker than primary beige
          dark: '#242424',  // slightly lighter than primary dark
        },
        accent: {
          DEFAULT: '#DAA520', // golden
          light: '#FFD700',   // lighter golden
          dark: '#B8860B',    // darker golden
        },
        text: {
          light: '#2D2D2D',
          dark: '#E5E5E5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
