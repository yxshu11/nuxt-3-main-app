export default defineNuxtConfig({
  modules: [
    '../nuxt-3-homepage/pages',
    '../nuxt-3-listing-pages/pages',
    '../nuxt-3-product-details-page/pages',
    '@sephora-asia/listing-pages-ui/pages'
  ],
  extends: [
    '../nuxt-3-homepage',
    '../nuxt-3-listing-pages',
    '../nuxt-3-product-details-page'
  ],
  ssr: true,
  runtimeConfig: {
    public: {
      theme: {
        primaryColor: 'SEPHORA_BLACK'
      }
    }
  },
})
