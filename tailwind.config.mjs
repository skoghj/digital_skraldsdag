/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mobilM: "375px",
        mobilL: "425px",
        tablet: "768px",
        laptop: "1280px",
        laptopL: "1440px",
        latptopxl: "1920px",
        laptop2xl: "2560px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
