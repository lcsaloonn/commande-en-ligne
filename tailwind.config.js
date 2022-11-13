/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",

      sm: "640px",

      md: "768px",

      ml: "950px",

      lg: "1024px",

      lx: "1100px",

      xl: "1280px",

      xlp: "1340px",

      "2xl": "1536px",
    },
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
