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
      fontSize: {
        "2xs": "0.6875rem",
      },
      width: {
        33: "8.25rem",
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
        "3/25": "12%",
      },
      minWidth: {
        6: "1.5rem",
      },
      minHeight: {
        12.5: "3.125rem",
      },
      gridTemplateColumns: {
        footer: "auto 1fr 0.4fr",
      },
      gap: {
        3.75: "0.9375rem",
      },
    },
  },
  plugins: [],
};
