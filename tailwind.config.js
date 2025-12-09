/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'festival-pink': '#F22ED2',
        'festival-blue': '#0C2FF2',
        'festival-green-light': '#0BD904',
        'festival-green-dark': '#09A603',
        'festival-yellow': '#F2C12E',
      },
    },
  },
  plugins: [],
};
