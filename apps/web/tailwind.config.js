/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    /** ui package */
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-company": {
          50: "#edf9ff",
          100: "#d7f1ff",
          200: "#b7e8ff",
          300: "#86dcff",
          400: "#4dc6ff",
          500: "#24a8ff",
          600: "#0d89ff",
          700: "#0670ef",
          800: "#0d5ac0",
          900: "#114e97",
          950: "#133a6f",
        },
        "green-company": {
          50: "#ebfef6",
          100: "#cefde8",
          200: "#a1f9d5",
          300: "#65f0c2",
          400: "#28dfa7",
          500: "#03d69d",
          600: "#00a177",
          700: "#008163",
          800: "#00664f",
          900: "#005443",
          950: "#002f27",
        },
        "dark-company": {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#4d4d4d",
          700: "#434343",
          800: "#383838",
          900: "#313131",
          950: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
}
