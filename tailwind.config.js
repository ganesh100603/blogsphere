/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-scale': 'spinScale 1.5s ease-in-out infinite',
      },
      keyframes: {
        spinScale: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(360deg) scale(1.2)' },
        },
    },
  plugins: [],
}
}
}