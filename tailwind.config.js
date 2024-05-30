/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        AlmostBlack: "#111111",
        AlmostWhite: "#cfd0d5",
        SecondaryColor: "#e1a142",
      },
    },
  },
  plugins: [],
};
