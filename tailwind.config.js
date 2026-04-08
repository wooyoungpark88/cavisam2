/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f1f1f1",
        card: "#ffffff",
        brand: "#026eff",
        header: "#000000",
        border: {
          DEFAULT: "#cccccc",
          light: "rgba(204,204,204,0.8)",
        },
        text: {
          primary: "#313131",
          secondary: "#626262",
          muted: "#9c9c9c",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "5px",
      },
    },
  },
  plugins: [],
};
