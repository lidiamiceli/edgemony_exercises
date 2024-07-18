/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Kumbh Sans', 'sans-serif'],
    },
    borderRadius: {
      'custom': '10px',
    },
  },
  plugins: [],
}}

