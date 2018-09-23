const router = require('./config/routes.js');
const head = require('./config/head.js');

module.exports = {
  router,
  head,
  plugins: [
    {src: '~/plugins/nuxt-client-init', ssr: false},
    {src: '~/plugins/api-client/binding.js'}
  ],
  transition: 'fade',
  loading: {
    color: '#418000'
  },
  build: {
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
};
