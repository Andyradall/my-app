

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.dcc94c10.js","_app/immutable/chunks/index.82cd489d.js"];
export const stylesheets = ["_app/immutable/assets/2.6b3e0f8c.css"];
export const fonts = [];
