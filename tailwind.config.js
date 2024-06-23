/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "50%": { transform: "translateX(-40%)" },
        },
      },
      animation: {
        scroll: "scroll 120s linear infinite",
      },
    },
  },
  plugins: [],
};
