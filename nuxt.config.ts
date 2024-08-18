// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  site: {
    url: 'https://example.com',
    name: 'My Awesome Website'
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap"],
})