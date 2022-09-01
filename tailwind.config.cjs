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
      primary: '#2BE370',
      secondary: '#E3C020',
      complementary: '#3736E3',
      darkBlue: '#181863',
      blue: '#4876fa',
      lightBlue: '#16F0E5',
      yellow: '#E3BE14',
      lightYellow: '#FBF07B',
      red: '#E3544D',
      alert: '#be3e82',
      white: '#fff',
      black: '#000',
    }
  },
  plugins: [],
}
