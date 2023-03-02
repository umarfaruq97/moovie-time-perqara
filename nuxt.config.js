export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Moovie Time - Perqara Assesment',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/perqara-logo.ico',
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      // font 'Work Sans Serif' diambil dari CDN fonts googleapis
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/tailwind.css', '@/assets/styles/reset.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  // configuration moment.js agar dapat memiliki string bahasa indonesia
  moment: {
    locales: ['id'],
  },
  // konfigurasi untuk axios, proxy dan nuxt/auth
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
  },
  //  untuk keperluan cross-environment. Built in dari framework Nuxt JS
  publicRuntimeConfig: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.PRODUCTION_API_URL
        : process.env.NODE_ENV === 'staging'
        ? process.env.STAGING_API_URL
        : process.env.DEVELOPMENT_API_URL,
  },
  // untuk keperluan proxy endpoint BE/Gateway agar tidak terekspos ke public. Menggunakan plugin @nuxtjs/proxy
  proxy: {
    '/api': {
      target: `${process.env[`${process.env.NODE_ENV.toUpperCase()}_API_URL`]}`,
      pathRewrite: { '^/api': '' },
    },
  },
}
