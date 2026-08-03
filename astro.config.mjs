// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // ---------------------------------------------------------------------------
  // GitHub Pages settings.
  //
  // While the site lives at kaizhudda.github.io/smart-money-workshop, `base`
  // must be the repo name. When you connect a custom domain later:
  //   1. set `site` to your domain, e.g. 'https://smartmoneyworkshop.com'
  //   2. delete the `base` line entirely
  // Every internal link goes through src/lib/url.ts, so nothing else changes.
  // ---------------------------------------------------------------------------
  site: 'https://kaizhudda.github.io',
  base: '/smart-money-workshop',

  vite: {
    plugins: [tailwindcss()],
  },
});
