import { join } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';
import tailwindcss from '@tailwindcss/vite';
import { partytownVite } from '@qwik.dev/partytown/utils';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    tailwindcss(),
    sveltekit({
      adapter: adapter(),
      preprocess: vitePreprocess()
    }),
    partytownVite({
      // `dest` specifies where files are copied to in production
      dest: join(process.cwd(), 'static', '~partytown')
    })
  ],
  ssr: {
    // gsap's ESM entry lacks "type": "module", so Vercel's runtime can't import it; bundle it instead
    noExternal: ['gsap']
  },
  build: {
    rollupOptions: {
      external: ['lightgallery/plugins/MediumZoom']
    }
  }
}

export default config;


