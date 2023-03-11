/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)"
      },
      backgroundImage: {
        hero: "url('/src/Assets/images/mobile/hero.jpg)",
        heroDesktop : "url('/src/Assets/images/desktop/image-hero.jpg')"
      }
    },
  },
  plugins: [],
}