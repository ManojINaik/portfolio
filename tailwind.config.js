/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#212121',
        'secondary': '#2D2D2D',
        'accent': '#FFC107',
        'text-primary': '#FFFFFF',
        'text-secondary': '#BDBDBD',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 5px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
