

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.05b14fcc.js","_app/immutable/chunks/index.0a3f2fec.js"];
export const stylesheets = ["_app/immutable/assets/0.dd343eb6.css"];
export const fonts = [];
