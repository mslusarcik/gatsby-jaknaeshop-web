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
      borderRadius: {
        egg: "80% 15% 55% 50% / 55% 15% 80% 50%",
      },
    },
  },
  plugins: [],
}
