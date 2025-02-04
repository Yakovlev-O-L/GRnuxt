// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', 'shadcn-nuxt', '@nuxtjs/tailwindcss', '@pinia/nuxt','@prisma/nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  prisma: {
    installCLI: true,
    installClient: true,
    generateClient: true,
    installStudio: false,
    autoSetupPrisma: true
  },
})