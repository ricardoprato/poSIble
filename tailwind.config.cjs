/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: '#20e36b',
      secondary: '#f9e92f',
      complementary: '#3736E3',
      blue: '#4876fa',
      backg: '#16F0E5',
      alert: '#be3e82',
      white: '#fff',
      black: '#000',
    }
  },
  plugins: [],
}
