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
        primary: '#0095C3', //actual blue
        secondary: '#FE8210', //actual orange
        tertiary: "#FFB950",
        valid: '#00C12B',
        error: "#CB4242"
      },
    },
  },
  plugins: []
}
