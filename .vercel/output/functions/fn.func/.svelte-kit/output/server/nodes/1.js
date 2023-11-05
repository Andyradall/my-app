

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fc4ccd64.js","_app/immutable/chunks/index.82cd489d.js","_app/immutable/chunks/singletons.e8574e67.js"];
export const stylesheets = [];
export const fonts = [];
