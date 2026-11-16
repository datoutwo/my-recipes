// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://datoutwo.github.io',
  base: '/my-recipes',
  i18n: {
    locales: ['zh-TW', 'en', 'de'],
    defaultLocale: 'zh-TW',
    routing: { prefixDefaultLocale: false },
  },
});
