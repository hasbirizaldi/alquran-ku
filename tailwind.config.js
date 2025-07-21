/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      writingMode: {
        horizontal: "horizontal-tb",
        vertical: "vertical-rl",
        "vertical-lr": "vertical-lr",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "ultra-loose": "3",
      },
    },
  },
  plugins: [],
};
