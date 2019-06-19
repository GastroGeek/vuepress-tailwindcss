module.exports = {
  title: 'VuePress + Tailwindcss',
  // configureWebpack(cfg) {
  //   cfg.plugins.push(require('tailwindcss'))
  //   cfg.plugins.push(require('autoprefixer'))

  //   cfg.resolve.alias['tailwindcss'] = 'tailwindcss'
  // }
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
}
