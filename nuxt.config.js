const webpack = require('webpack')
const router = require('./config/routes.js')
const head = require('./config/head.js')

module.exports = {
  router,
  head,
  plugins: [
    {src: '~/plugins/nuxt-client-init.js', ssr: false},
    {src: '~/plugins/element.js'},
  ],
  transition: 'fade',
  loading: {
    color: '#418000'
  },
  modules: [],
  build: {
    plugins: [
      new webpack.LoaderOptionsPlugin({ options: {} }),
    ],
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true
            }
          })
      }
    }
  }
}
