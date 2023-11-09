

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.857deb24.js","_app/immutable/chunks/index.0a3f2fec.js"];
export const stylesheets = ["_app/immutable/assets/2.6f9ecf9f.css"];
export const fonts = [];
