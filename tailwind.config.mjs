/** @type {import('tailwindcss').Config} */
const colors = {
  'grimwild-blue': 'rgba(90, 107, 140, 1)',
  'grimwild-dark': 'rgba(31, 38, 28, 1)',
  'grimwild-light': 'rgba(242, 241, 223, 1)',
  'grimwild-yellow': 'rgba(217, 197, 98, 1)',
  'grimwild-yellow-dark': 'rgba(191, 167, 94, 1)'
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};

