import { join } from 'path'
import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils'

const config = {
  plugins: [
    sveltekit(),
    partytownVite({
      dest: join(__dirname, '.svelte-kit', 'output', 'client'), // specify your output directory here
    }),
  ],
};

export default config;

