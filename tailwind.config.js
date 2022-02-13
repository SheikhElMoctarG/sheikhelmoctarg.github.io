module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './pligins/**/*{js,ts}',
    './nuxt.config.{js,ts}'

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        "tajawal": ["Tajawal"]
      },
      
        // "gradintColor": ["background-image: linear-gradient(#F9C729,#FB9633);"]
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
