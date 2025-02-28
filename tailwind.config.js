/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        './src/*.html',
        "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary_dark: '#fad9b7',
        primary_light: '#1282d3',
        secondary: '#fad8b772',
        accent: '#eceef0',
        dark: '#1d1d1d',
        lightDark: '#43434660',
        light: '#f2f2f2',
      }
    },
    fontFamily: {
      'lexend':['Lexend', 'sans'],
      'quicksand': ['Quicksand','sans']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

