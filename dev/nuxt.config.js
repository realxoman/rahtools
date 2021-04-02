export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rahtools',
    htmlAttrs: {
      lang: 'fa',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{src:"/js/bootstrap.bundle.min.js"}]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/bootstrap.min.css',
        '~assets/css/stylus',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
