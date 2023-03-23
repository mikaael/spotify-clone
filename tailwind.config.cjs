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
      height: {
        25: "6.25rem",
      },
      padding: {
        3.25: "0.8125rem",
        19: "4.75rem",
        27: "6.75rem",
        "3/50": "6%",
        "1/25": "4%",
      },
      minWidth: {
        6: "1.5rem",
      },
      minHeight: {
        12.5: "3.125rem",
      },
    },
  },
  plugins: [],
};
