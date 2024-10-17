/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
  200: "#4B46CB",
  600: "#364bff",
  900: "#182775",
  950: "#131e4f",
};

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#ffffff",
        gray: colors.gray,
        indigo: colors.indigo,
        neutral: colors.neutral, // Used mainly for text color
        background: "#191919",
        primary: "#322BC3",
        secondary: "#082D8F",
        muted: "#CCCEF1",
        destructive: colors.red,

        // Old colors, came with the templated, ideally should not be used
        orange: {
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fb713b",
          400: "#fa5a15",
          500: "#e14d0b",
          600: "#ea580c",
        }, // Primary colors, used mainly for links, buttons and svg icons
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          400: "#facc15",
          500: "#eab308",
        }, // Accent colors, used mainly for star color, heading and buttons
        red: colors.red, // Used for bookmark icon
        zinc: colors.zinc, // Used mainly for box-shadow
        // Important for starlight
        accent: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
