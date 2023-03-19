/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        facebook: '#1877f2',
      },
      minHeight: {
        12.5: '50px',
      },
    },
  },
  plugins: [],
};
