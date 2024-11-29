// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/wedding/', // Replace with your repository name
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: ["nitro-cloudflare-dev"]
})

