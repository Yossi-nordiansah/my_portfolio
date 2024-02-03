/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '380px',
      'xxs': '280px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins'],
        inter:['Inter'],
        kanit : ['Kanit']
      }
    },
  },
  variants:{
    extend:{
      lineClamp : ["hover"]
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // require("@tailwindcss/line-clamp")
  ]
}

