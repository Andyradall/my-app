

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2696932a.js","_app/immutable/chunks/index.82cd489d.js"];
export const stylesheets = ["_app/immutable/assets/0.447080cd.css"];
export const fonts = [];
