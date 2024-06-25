module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Enables dark mode based on a class
  theme: {
    extend: {
      // Customize your theme here
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
