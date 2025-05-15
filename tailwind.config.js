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
          light: '#EDE8E2', // beige 1. F2EAD3 2. EDE8E2 3. E8E1D4
          dark: '#1A1A1A',  // dark grey/black
        },
        secondary: {
          light: '#E5DDD2', //  slightly darker than primary beige 1. DFD7BF 2. E5DDD2 3. D1C6B4
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
