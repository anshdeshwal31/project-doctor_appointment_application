/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': 'rgb(95 ,111 ,255)',
        "gray": "rgb(234 239 255)"
      },
      // scale:{
      //   "80":"0.8"
      // }
    },
  },
  plugins: [],
}