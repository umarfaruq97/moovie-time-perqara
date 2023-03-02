module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: require('./tailwind-custom/colors').colors,
    },
    fontSize: require('./tailwind-custom/font-size').fontSize,
  },
  plugins: [],
}
