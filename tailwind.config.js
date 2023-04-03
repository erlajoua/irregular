/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09569C', //actual blue
        primary_2: "rgba(0, 67, 88, 0.42)", //42%
        secondary: '#FFB950', //actual orange
        tertiary: "#FFB950",
        valid: '#00C12B',
        error: "#CB4242",
        black_input: "rgba(0, 0, 0, 0.31)"
      },
    },
  },
  plugins: []
}
