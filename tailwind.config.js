/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: '#60c079',
        secondary: '#0a1626',
        acent: '#79f197',
        hover: '#c2d2f3'

      },
    },
  },
  plugins: [],
};
