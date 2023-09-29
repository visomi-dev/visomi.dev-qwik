const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      height: {
        screen: '100svh',
      },
      minHeight: {
        screen: '100svh',
      },
    },
  },
  plugins: [],
};
