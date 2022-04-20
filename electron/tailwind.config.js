module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "omniya": "#a0002c",
        "omniya-dark": "#6f0000",
        "omniya-light": "#e80000",
        "omniya-gold": "#e9c763",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
