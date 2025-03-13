module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Enables dark mode based on a class
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      // Enable dark mode variants for your utilities
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}
