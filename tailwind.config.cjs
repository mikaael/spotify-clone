/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        facebook: '#1877f2',
        'spotify-dark-green': '#117a37',
        'spotify-green': '#169b45',
        'spotify-light-green': '#1fdf64',
      },
      padding: {
        3.25: '13px',
      },
      minHeight: {
        12.5: '50px',
      },
    },
  },
  plugins: [],
};
