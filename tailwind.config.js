/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'primary': '#FF8C00',
        'secondary': '#FFA500',
        'danger': '#FFD700',
      }),
    },
  },
  plugins: [],
}
