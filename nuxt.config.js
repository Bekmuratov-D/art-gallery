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
  ],

  generate: {
    crawler: false
  },

  axios: {
    baseURL: '/',
  },

  build: {},
}
