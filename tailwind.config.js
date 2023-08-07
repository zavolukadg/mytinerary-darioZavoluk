/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        minga1: "black",
        minga2: "#F9A8D4"
      },
      backgroundColor: {
        minga1: "#F9A8D4",
        minga2: "black",
      }
    }
  },
  variants: {},
  plugins: []
}

