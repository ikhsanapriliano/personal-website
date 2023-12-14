/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#212529",
        "primary-2": "#343a40",
        "primary-3": "#495057",
        "primary-4": "#e9ecef",
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
