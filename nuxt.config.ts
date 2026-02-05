import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/content',
    'nuxt-studio'
  ],

  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'your-username',
      repo: 'your-repo',
      branch: 'main'
    }
  },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': `public, max-age=${604800}, must-revalidate`,
          'Netlify-CDN-Cache-Control': `public, max-age=${604800}, stale-while-revalidate=${604800}, durable`
        }
      }
    }
  }
});
