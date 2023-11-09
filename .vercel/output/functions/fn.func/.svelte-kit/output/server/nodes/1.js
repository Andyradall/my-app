

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f7e3417d.js","_app/immutable/chunks/index.0a3f2fec.js","_app/immutable/chunks/singletons.f93adec1.js"];
export const stylesheets = [];
export const fonts = [];
