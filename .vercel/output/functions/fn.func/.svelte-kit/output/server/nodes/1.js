

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2fbd3042.js","_app/immutable/chunks/index.0a3f2fec.js","_app/immutable/chunks/singletons.2e8d0a58.js"];
export const stylesheets = [];
export const fonts = [];
