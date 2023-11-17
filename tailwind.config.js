/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'aileron': ['Aileron'],

      'mont': ['Montserrat'],

      'caveat': ['Caveat Brush'],

      'permanent': ['Permanent Marker'],
    },
    extend: {
      keyframes: {
        example: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        'example': 'example 1.2s ease-in-out infinite',
        // Clase de animación que utiliza los keyframes definidos
      },
    },
  },
  plugins: [],
}