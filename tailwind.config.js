/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 50px rgba(73, 55, 43, 0.10)',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
