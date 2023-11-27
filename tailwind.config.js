/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#f2e0b0",
        "primary-2": "#cba075",
        "primary-3": "#583f37",
      },
    },
  },
  plugins: [],
};
