/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '156px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'main': 'hsl(241, 100%, 89%)',
        'slate': ' hsl(252, 100%, 67%)',
        'royal': 'hsl(241, 81%, 54%)',
        'pale': 'hsl(221, 100%, 96%)',
        'dark-gray': 'hsl(224, 30%, 27%)',
        'lavender': ' hsl(241, 100%, 89%)',
        'violet': 'hsla(256, 72%, 46%, 1)',
        'persian': 'hsla(241, 72%, 46%, 0)',
        'light-red': 'hsl(0, 300%, 67%)',
        'orangey': 'hsl(39, 100%, 56%)',
        'green-teal': ' hsl(166, 100%, 37%)',
        'cobalt': 'hsl(234, 85%, 45%)',
      }
    },
  },
  plugins: [],
}