// tailwind.config.js
module.exports = {
  purge: ['./src/pages/Profile.js', './src/pages/UpdateProfile.js', './src/components/Header.js', './src/pages/BookSession.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        logoColor: '#5538C8',
      },
      fontSize: {
        logoSize: '32px'
      }
    },
  },
  variants: {},
  plugins: [],
};
