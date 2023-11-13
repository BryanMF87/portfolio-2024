/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--roboto)"],
      },
      colors: {
        ccHighlight: '#FF1B6B', // hot pink
        ccOffBlack: '#171717',
        ccOffWhite: '#f5f5f5',
        ccGray: '#777777',
        ccGray2: '#212121',
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-100px * 10))",
          },
        },
      },
    },
  },
  plugins: [],
}
