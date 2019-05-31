const webpack = require('webpack')

const routerBase = process.env.DEPLOY_ENV == 'GH_PAGES' ? {
  router : {
    base: '/web-skills-online/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  css: ["~/node_modules/bootstrap/dist/css/bootstrap.css"],
  plugins: ["~plugins/bootstrap.js"],
  head: {
    title: 'web-skills-online',
    scripts : [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        type: "text/javascript" },
      { src: './assets/main.js',
        type: "text/javascript" }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'App for learning web-development' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /**
      * add external plugins
      */
     vendor: ["jquery", "bootstrap"],
     plugins: [
       new webpack.ProvidePlugin({
         $: "jquery"
       })
     ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  ...routerBase
}

