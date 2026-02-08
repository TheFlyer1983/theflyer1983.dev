import { defineContentConfig, defineCollection } from '@nuxt/content';
import { asSeoCollection } from '@nuxtjs/seo/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSeoCollection(
        {
          type: 'page',
          source: '**/*.md',
          schema: z.object({
            robots: z
              .enum([
                'index, follow',
                'noindex, follow',
                'index, nofollow',
                'noindex, nofollow'
              ])
              .default('index, follow'),
            categories: z.enum(['about', 'contact']).optional(),
            /** Fallback for lastmod if sitemap.lastmod is not set. */
            date: z.string().optional()
          })
        },
        {
          name: 'content'
        }
      )
    )
  }
});
