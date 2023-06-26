export default {
  // srr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'learn-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   'bootstrap/dist/css/bootstrap.min.css'
  // ],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  script: [
   {
     src: "bootstrap/bootstrap.bundle.min.js",
     type: "text/javascript"
   }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/crypto.js',
    '@/plugins/vue-axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/router',
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv',{filename :'.env.' + process.env.NODE_ENV}]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    '~/exspress/index.js'
  ]
}

