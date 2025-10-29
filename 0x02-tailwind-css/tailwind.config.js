/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    "bg-blue-200",
    "bg-blue-400",
    "bg-blue-500",
    "bg-red-200",
    "bg-red-400",
    "bg-red-500",
    "bg-green-200",
    "bg-yellow-200",
    "grid",
    "grid-cols-2",
    "gap-2",
    "gap-4",
    "p-2",
    "p-4",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
