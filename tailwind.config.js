/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000c38",
        secondary: "#40b93c",
      },
     
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}



// #010A26 
// #011140
// #50BF3F
// #F2F2F2
// #0D0D0D



// #43BB3C
// #040C3C
// #D5D9DD
// #9499AC

// #151f28
// #b6ccd7