/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '2 rem',
      center: true,
    },
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

