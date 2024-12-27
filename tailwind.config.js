/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      'underline': {
        '3px': '3px solid #000',
      }, 
    },
  },
  plugins: [],
}

