/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#34519F',
        secondary: '#030304',
        accent: '#E7EAED',
        hover: '#c2d2f3',
        button: '#2563eb',
        hoverButton: '#1d4ed8'
      }
    },
  },
  plugins: [],
};
