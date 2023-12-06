/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          40: '#343541',
          30: '#8e8ea0',
          20: '#c5c5d2',
          10: '#ececf1',
        },
        black: '#000000',
      },
    },
  },
  plugins: [],
};
