module.exports = {
  content: ['./src/**/*.{js,svelte}', './src/app.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#F7FBFF',
      grey: {
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
      color: theme('colors.grey.800'), // Adjust the grey shade as needed
      textDecoration: 'none',
      h1: {
        fontFamily: theme('fontFamily.euclid'), // Assuming 'euclid' is defined in your fontFamily theme
        fontSize: '1.875rem', // Equivalent to text-3xl
        fontWeight: 'bold',
      },
      fontFamily: {
        'euclid': ['Euclid Circular B', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 1px 5px rgba(36, 37, 39, .04), 0 2px 9px rgba(36, 37, 39, .06), 0 4px 14px rgba(36, 37, 39, .04)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
