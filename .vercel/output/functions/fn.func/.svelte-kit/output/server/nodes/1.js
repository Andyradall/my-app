

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c6a2c717.js","_app/immutable/chunks/index.0a3f2fec.js","_app/immutable/chunks/singletons.f10f0307.js"];
export const stylesheets = [];
export const fonts = [];
