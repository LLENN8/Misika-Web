/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#f5ffff',
        secondary : '#0093cb',
        entah : '#005acd',
        biruMuda : '#bef0ff'
      },

      screens: {
        '2xl' : '1320px',
      },

      fontFamily: {
        'Shantell' : 'Shantell Sans',
      },

    },
  },
  plugins: [],
}

