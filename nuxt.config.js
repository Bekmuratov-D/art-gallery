export default {
  target: 'static',

  head: {
    titleTemplate (title) {
      return title ? `${title} — Art Polytech` : 'Art Polytech'
    },
    htmlAttrs: {
      lang: 'ru',
      class: 'page'
    },
    bodyAttrs: {
      class: 'page__body'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'images/x-icons', href: '/favicon.ico' }],
  },

  css: [
    '@/assets/scss/styles.scss',
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module',
    ['@pinia/nuxt', { disableVuex: true }]
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  generate: {
    crawler: false
  },

  axios: {
    baseURL: 'http://213.189.201.56:8080/',
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: 60 * 60 * 24 * 7 // 7 days
        },
        user: {
          property: 'user'
        },
        endpoints: {
          login: { url: '/api/v1/auth/sign-in', method: 'post', propertyName: 'token' },
          logout: false,
          user: {url: '/api/v1/auth', method: 'get', propertyName: 'user'}
        },
        tokenType: 'bearer',
      }
    }
  },

  build: {},
}
