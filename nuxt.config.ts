import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Module order matters: @nuxtjs/seo (includes sitemap) must be before @nuxt/content
  // so that asSitemapCollection and frontmatter sitemap/robots work correctly.
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxtjs/seo',
    '@nuxt/content',
    'nuxt-studio',
  ],

  runtimeConfig: {
    public: {
      siteUrl: import.meta.env.NUXT_SITE_URL || 'https://theflyer1983.dev',
    }
  },

  site: {
    url: import.meta.env.NUXT_SITE_URL || 'https://theflyer1983.dev',
    name: import.meta.env.NUXT_SITE_NAME
  },

  studio: {
    route: '/admin',
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'TheFlyer1983',
      repo: 'theflyer1983.dev',
      branch: 'main'
    }
  },

  ogImage: {
    enabled: false
  },

  sitemap: {
    xsl: false
  },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  nitro: {
    externals: {
      inline: ['unhead', '@unhead/*']
    },
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
