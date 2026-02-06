import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        robots: z.enum(['index, follow', 'noindex, follow', 'index, nofollow', 'noindex, nofollow']).default('index, follow'),
        sitemapPriority: z.enum(['0.0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0']).default('0.8'),
        sitemapChangeFrequency: z.enum(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).default('weekly'),
        cannonical: z.string().url().max(255).optional(),
        sitemapCategories: z.enum(['about', 'contact']).optional(),
      }),
    }),
  }
});
