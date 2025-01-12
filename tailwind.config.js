/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily:{
      Inter: ['Inter' , 'sans-serif'],
    },
    extend:{
      screens:{
        "2md": "960px"
      },
      colors:{
        primary: '#7E3AF2',
        secondaryText:'#6B7280',
        mainText:'#111928'
      }
    },
  },
  plugins: [],
}

