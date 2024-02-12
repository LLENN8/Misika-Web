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
        secondary: '#0093cb',
        entah: '#005acd',
        biruMuda: '#bef0ff'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(25) infinite alternate, blink .7s infinite"
      },
      

      screens: {
        '2xl': '1320px',
      },

      fontFamily: {
        'Shantell': 'Shantell Sans',
      },

    },
  },
  plugins: [],
}

