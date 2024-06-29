/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "50%": { transform: "translateX(-40%)" },
        },
        scroll2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        scroll: "scroll 120s linear infinite",
        scroll2: "scroll 8s linear infinite",
        blink: "blink 2s infinite",
      },
      boxShadow: {
        regionSelector:
          "0 0px 1.5rem 0.3rem rgba(252, 57, 83, 0.3) inset, 0 0rem 1rem 0.5rem rgba(0, 0, 0, 0.2)",
        regionSelectorRegion:
          "0 0px 2rem 0.5rem rgba(255, 255, 255, 0.6) inset",
        regionSelectorLine:
          "0 0px 1rem 0.25rem rgba(255, 255, 255, 0.1) inset, 0 0rem 1rem 0.5rem rgba(0, 0, 0, 0.4)",
        regionSelectorClose:
          "0rem 0px 3rem 0.5rem rgba(0, 0, 0, 0.3) inset, 0 0rem 1rem 0.5rem rgba(0, 0, 0, 0.3)",
        regionDisplay:
          "0 0px 1rem 0.125rem rgba(19, 250, 227, .5) inset, 0 0rem 1rem 0.5rem rgba(0, 0, 0, 0.3)",
        pokemonDetailsSprite: "0 0px 2rem 0.5rem rgba(0, 0, 0, 0.6) inset",
      },
      borderWidth: {
        0.75: "0.75rem",
      },
      colors: {
        bug: {
          DEFAULT: "#008000",
        },
        dark: {
          DEFAULT: "#666666",
        },
        dragon: {
          DEFAULT: "#00cccc",
        },
        electric: {
          DEFAULT: "#ffff33",
        },
        fairy: {
          DEFAULT: "#ff4dff",
        },
        fighting: {
          DEFAULT: "#ff9933",
        },
        fire: {
          DEFAULT: "#ff1a1a",
        },
        flying: {
          DEFAULT: "#a6a6a6",
        },
        ghost: {
          DEFAULT: "#9933ff",
        },
        grass: {
          DEFAULT: "#4dff4d",
        },
        ground: {
          DEFAULT: "#b38f00",
        },
        ice: {
          DEFAULT: "#80ffff",
        },
        normal: {
          DEFAULT: "#80002a",
        },
        poison: {
          DEFAULT: "#400080",
        },
        psychic: {
          DEFAULT: "#e600ac",
        },
        rock: {
          DEFAULT: "#993300",
        },
        steel: {
          DEFAULT: "#80ffbf",
        },
        water: {
          DEFAULT: "#1a75ff",
        },
      },
    },
  },
  plugins: [],
};
