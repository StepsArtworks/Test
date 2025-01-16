/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|hover:bg|border|from|to)-(emerald|violet|blue|orange|rose|cyan)-(50|100|200|600)/,
    },
  ],
};