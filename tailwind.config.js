module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'], // Update with your paths
    safelist: [
      'hover:scale-105',
      'transition-transform',
      'duration-300'
    ],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  plugins: [],
};
