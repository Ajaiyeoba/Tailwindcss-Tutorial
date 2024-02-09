/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        primary: '#ff6363', 
        secondary: {
          100: '#e2e2d5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Agbalumo']
      }
    },
  },
  plugins: [],
}

