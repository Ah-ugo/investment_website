/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Darkblue: "#164B60",
        BgColor: "linear-gradient(180deg,#0a3a96,#02aeee)",
      },
    },
  },
  plugins: [],
};
