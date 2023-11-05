

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.435ae789.js","_app/immutable/chunks/index.82cd489d.js"];
export const stylesheets = ["_app/immutable/assets/2.b0c47ba6.css"];
export const fonts = [];
