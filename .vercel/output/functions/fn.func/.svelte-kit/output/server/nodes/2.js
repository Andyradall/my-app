

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.96c64f71.js","_app/immutable/chunks/index.0a3f2fec.js"];
export const stylesheets = ["_app/immutable/assets/2.844a54f9.css"];
export const fonts = [];
