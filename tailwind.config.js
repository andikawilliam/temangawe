module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./build/*.html',],
  },
  theme: {
    extend: {
      fontSize: {
        '3vh' : '3vh',
        '4vh' : '4vh',
        '4.5vh' : '4.5vh',
        '5vh' : '5vh',
        '6vh' : '6vh',
        '7vh' : '7vh',
        '8vh' : '8vh',
      },
      backgroundPosition: {
        'right-cup': '57% 100%',
      },
      colors: {
        'red-teman': '#a42828',
        'black-gawe': '#3E3131',
      },
      height: {
        '1/2': '50vh'
      },
      minHeight: {
        '1/2screen': '50vh',
        '3/5screen': '60vh',
        '4/5screen': '80vh',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
