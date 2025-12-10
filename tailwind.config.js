/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Colores principales
        'primary-1': '#FF1CDA',
        'primary-2': '#0013FF',
        // Colores secundarios
        'secondary-1': '#6722d3',
        'secondary-2': '#00e700',
        'secondary-3': '#ff9550',
        // Colores legacy (mantener para compatibilidad)
        'festival-pink': '#FF1CDA',
        'festival-blue': '#0013FF',
        'festival-green-light': '#00e700',
        'festival-green-dark': '#09A603',
        'festival-yellow': '#F2C12E',
      },
      fontFamily: {
        // Tipografía principal - FuturaT PT Cond (bloques largos de texto)
        'primary': ['"Futura PT Condensed"', 'Oswald', 'Arial Narrow', 'sans-serif'],
        // Tipografía secundaria - Monument Extended (palabras clave y bloques cortos)
        'secondary': ['"Monument Extended"', 'Space Grotesk', 'Impact', 'Arial Black', 'sans-serif'],
        // Mantener Anton para títulos grandes
        'display': ['Anton', 'Impact', 'Arial Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
