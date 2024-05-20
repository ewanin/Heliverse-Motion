/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-color-primary': 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
        'gradient-color-secondary': 'linear-gradient(180deg, #0D061F 0%, #251E35 100%)',
      },
      colors: {
        black_primary: '#0e0f1a',
        black_secondary: '#0d051f',
        white_primary: '#eee5ff',
        white_secondary: '#eee5ffbd',
      },
      screens: {
        '2xl': '2200px',
      },
    },
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
}