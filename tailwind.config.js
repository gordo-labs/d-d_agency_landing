/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        ".25": ".0625rem",
      },
      fontSize: {
        xxs: ".625rem",
      },
      spacing: {
        128: "32rem",
        basic: "52rem",
        "basic-sm": "50rem",
      },
    },
  },
  plugins: [],
};
