/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': 'hsl(241, 100%, 89%)',
        'slate': ' hsl(252, 100%, 67%)',
        'royal': 'hsl(241, 81%, 54%)'
      }
    },
  },
  plugins: [],
}