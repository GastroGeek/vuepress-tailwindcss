module.exports = {
  title: 'VuePress + Tailwindcss',
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
}
