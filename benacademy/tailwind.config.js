/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        richblack: '#001122',
        veronica: '#8C3FFF',
        deepblue: '#006494',
        academic: '#003554',
        darkness: '#051923',
      },
      fontFamily: {
        monty: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

