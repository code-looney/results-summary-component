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
        'royal': 'hsl(241, 81%, 54%)',
        'pale': 'hsl(221, 100%, 96%)',
        'dark-gray': 'hsl(224, 30%, 27%)',
        'lavender': ' hsl(241, 100%, 89%)',
        'violet': 'hsla(256, 72%, 46%, 1)',
        'persian': 'hsla(241, 72%, 46%, 0)'
      }
    },
  },
  plugins: [],
}