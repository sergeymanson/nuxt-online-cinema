const webpack = require('webpack')
const router = require('./config/routes.js')
const head = require('./config/head.js')

module.exports = {
  router,
  head,
  loading: { color: '#3B8070' },
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
