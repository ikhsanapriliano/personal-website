/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#f2e0b0",
        "primary-2": "#cba075",
        "primary-3": "#583f37",
        "secondary-1": "#212529",
        "secondary-2": "#343a40",
        "secondary-3": "#495057",
        "secondary-4": "#e9ecef",
      },
    },
    screens: {
      xs: "300px",
      sm: "350px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
