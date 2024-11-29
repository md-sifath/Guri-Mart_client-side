/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgorundImage: {
        'hero-Image': 'url("bg.png")',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        dois: [' "Dosis"', 'sans-serif'],
      },
    },
  },
  safelist: [
    {
      pattern: /bg-(red|blue|green|yellow|sky|pink|gray|orange)-300/,
    },
    {
      pattern: /text-(red|blue|green|yellow|sky|pink|gray)-400/,
    },
  ],
  plugins: [],
};
