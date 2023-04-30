/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: {
            light: '#7beca3',
            DEFAULT: '#18cc57',
            dark: '#008000',
          },
        },
        facebook: '#1877f2',
        spotify: {
          green: {
            light: '#1fdf64',
            DEFAULT: '#169b45',
            dark: '#117a37',
          },
        },
        label: {
          blue: {
            DEFAULT: '#0d72ea',
            greyish: '#2e77d0',
          },
        },
      },
      screens: {
        '2xs': '425px',
        xs: '480px',
      },
      maxWidth: {
        '4.5xl': '60.625rem',
      },
    },
  },
  plugins: [],
};
