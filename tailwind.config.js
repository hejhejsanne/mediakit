/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8b5cf6", // Violet
          light: "#ede9fe",
          dark: "#6d28d9",
        },
        secondary: {
          DEFAULT: "#ec4899", // Pink
          light: "#fdf2f8",
          dark: "#db2777",
        },
      },
    },
  },
  plugins: [],
};
