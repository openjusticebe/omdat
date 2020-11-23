export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ECLI - OpenJustice.be',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The goal of OpenJustice.be organisation is to provide libre, free and quality access (open and documented) to case law in Belgium.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    'nuxt-highlightjs'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  styleResources: {
    scss: '@/assets/scss/_variables.scss'
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.REST_API_URL
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GQL_API_URL
        // httpEndpoint: 'https://rickandmortyapi.com/graphql/',
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    hotMiddleware: {
      client: {
        overlay: false
      }
    },
    /*
     ** You can extend webpack config here
     */
    extractCSS: {
      ignoreOrder: true
    },
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'public'
  }
}
