/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        sm: '400px',
        md: '680px',
        lg: '1000px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
