import { join } from 'path'
import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    partytownVite({
      // `dest` specifies where files are copied to in production
      dest: join(process.cwd(), 'static', '~partytown')
    })
  ]
}


export default config;

