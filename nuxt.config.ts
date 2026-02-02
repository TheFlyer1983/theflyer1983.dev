import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/hints', '@nuxt/ui', '@nuxt/test-utils'],

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  nitro: {
    preset: 'netlify',
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': `public, max-age=${604800}, s-maxage=${604800}`,
          'Netlify-CDN-Cache-Control': `public, max-age=${604800}, s-maxage=${604800}`
        }
      }
    }
  }
});
