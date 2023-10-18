/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#E4E4D0',  
        secondary: '#94A684',
        subTittle: '#626262',
        
      },
      fontFamily: {
        poppins: [
          'Poppins'
        ],
        inter: [
          'Inter'
        ],
        prompt: [
          'Prompt'
        ]
        
      },
    },
  },
  plugins: [],
}

