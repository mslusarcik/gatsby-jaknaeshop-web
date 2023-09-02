/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "993px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#fff",
        "white-v2": "#F0F4EF",
        primary: "#FEC82E",
        secondary: "#222",
        tertiary: "#A51E23",
        greyV1: "#555",
        greyV2: "#8B828F",
      },
      brightness: {
        25: ".25",
      },
      borderRadius: {
        egg: "80% 15% 55% 50% / 55% 15% 80% 50%",
      },
    },
  },
  plugins: [],
}
