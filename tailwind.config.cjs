module.exports = {
  content: ['./src/**/*.{js,svelte}', './src/app.html'],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#F7FBFF',
        'grey': {
          50: '#F1F5FE',
          100: '#EBEEF4',
          200: '#DDE0E6',
          250: '#B6B9BD',
          300: '#9C9EA2',
          400: '#616366',
          500: '#515255',
          600: '#404244',
          700: '#303133',
          800: '#242527',
          900: '#18191B',
        },  
      },

    extend: {    
      fontFamily: {
      'euclid': ['Euclid Circular B', 
      'system-ui',
      '-apple-system', 
      'BlinkMacSystemFont', 
      '"Segoe UI"', 
      'Roboto', 
      '"Helvetica Neue"', 
      'Arial', 
      '"Noto Sans"', 
      'sans-serif']
    },

    boxShadow: {
      'custom': '0 1px 5px rgba(36, 37, 39, .04), 0 2px 9px rgba(36, 37, 39, .06), 0 4px 14px rgba(36, 37, 39, .04)'
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}