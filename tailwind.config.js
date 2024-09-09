/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      poppins_bold: ['Poppins-Bold', 'sans-serif'],
      poppins_black: ['Poppins-Black', 'sans-serif'], // Add your custom font
    },

    extend: {
      colors: {
        blue: '#1fb6ff',
        white: '#ffff',
        purple: '#7e5bef',
        black: 'black',
        btn_color: '#A3CFFF',
        btn_text_color: '#092A4D',
        red: {
          100: '#D92D20',
        },
        gray: {
          100: '#808080',
          50: '#F5F9FE',
          200: '#E0E5EC',
        },
        banner: {
          1: '#172A3A',
        },
        green: {
          100: '#92E3A9',
        },
      },
      spacing: {
        '2x': '20px',
        '3x': '30px',
      },
      borderRadius: {
        '4xl': '40px',
      },
    },
  },
  plugins: [],
};
