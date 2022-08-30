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
      darkBlue: '#181863',
      blue: '#4876fa',
      lightBlue: '#16F0E5',
      yellow: '#E3BE14',
      lightYellow: '#FBF07B',
      green: '#09E35D',
      red: '#E31409',
      alert: '#be3e82',
      white: '#fff',
      black: '#000',
    }
  },
  plugins: [],
}
