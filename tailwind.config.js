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
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0" },
          "50%, 100%": { backgroundPosition: "600px" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-.8%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        shine: "shine 3s linear infinite",
        animation: "bounce 20s infinite",
      },
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-bg-patterns")],
};
