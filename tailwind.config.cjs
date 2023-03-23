/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: {
            light: "#7beca3",
            DEFAULT: "#18cc57",
            dark: "#008000",
          },
        },
        facebook: "#1877f2",
        spotify: {
          green: {
            light: "#1fdf64",
            DEFAULT: "#169b45",
            dark: "#117a37",
          },
        },
        label: {
          blue: {
            DEFAULT: "#0d72ea",
            greyish: "#2e77d0",
          },
        },
      },
      padding: {
        3.25: "13px",
      },
      minHeight: {
        12.5: "50px",
      },
    },
  },
  plugins: [],
};
