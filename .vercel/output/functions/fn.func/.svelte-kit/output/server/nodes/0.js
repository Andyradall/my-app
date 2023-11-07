

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5d3abdd9.js","_app/immutable/chunks/index.82cd489d.js"];
export const stylesheets = ["_app/immutable/assets/0.c070fb5e.css"];
export const fonts = [];
