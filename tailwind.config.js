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
          DEFAULT: "#b2bd4d",
        },
        dark: {
          DEFAULT: "#454541",
        },
        dragon: {
          DEFAULT: "#4843d1",
        },
        electric: {
          DEFAULT: "#ffff33",
        },
        fairy: {
          DEFAULT: "#f5a4f1",
        },
        fighting: {
          DEFAULT: "#f29418",
        },
        fire: {
          DEFAULT: "#eb4e1a",
        },
        flying: {
          DEFAULT: "#93d3f5",
        },
        ghost: {
          DEFAULT: "#4d2a44",
        },
        grass: {
          DEFAULT: "#4bc22b",
        },
        ground: {
          DEFAULT: "#915e24",
        },
        ice: {
          DEFAULT: "#3687e3",
        },
        normal: {
          DEFAULT: "#989da3",
        },
        poison: {
          DEFAULT: "#9d3be3",
        },
        psychic: {
          DEFAULT: "#ed58a2",
        },
        rock: {
          DEFAULT: "#8a876b",
        },
        steel: {
          DEFAULT: "#789fc2",
        },
        water: {
          DEFAULT: "#266ced",
        },
      },
    },
  },
  plugins: [],
};
