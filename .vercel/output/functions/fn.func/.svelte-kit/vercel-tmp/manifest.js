export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/.DS_Store","fonts/euclid-circular-b/Euclid-Circular-B-Bold-Italic.ttf","fonts/euclid-circular-b/Euclid-Circular-B-Bold.ttf","fonts/euclid-circular-b/Euclid-Circular-B-Italic.ttf","fonts/euclid-circular-b/Euclid-Circular-B-Light-Italic.ttf","fonts/euclid-circular-b/Euclid-Circular-B-Light.ttf","fonts/euclid-circular-b/Euclid-Circular-B-Medium-Italic.ttf","fonts/euclid-circular-b/Euclid-Circular-B-Medium.ttf","fonts/euclid-circular-b/Euclid-Circular-B-Regular.ttf","fonts/euclid-circular-b/Euclid-Circular-B-SemiBold-Italic.ttf","fonts/euclid-circular-b/Euclid-Circular-B-SemiBold.ttf","images/.DS_Store","images/about/CodeIco.svg","images/about/FigIco.svg","images/about/ResearchIco.svg","images/about/ServiceDesignIco.svg","images/about/Skibilde.webp","images/about/UserIco.svg","images/about/bildeholder.webp","images/about/profil-1.webp","images/backgrounds/transparent_transformed_noisetiny.gif","images/thumbs/DMthumb800500.webp","images/thumbs/KSthumb8005001.webp","images/thumbs/Smabthumb800500.webp","images/thumbs/Solarthumblg-1.webp"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".webp":"image/webp",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.bdbbe789.js","app":"_app/immutable/entry/app.f536530a.js","imports":["_app/immutable/entry/start.bdbbe789.js","_app/immutable/chunks/index.0a3f2fec.js","_app/immutable/chunks/singletons.9264016e.js","_app/immutable/entry/app.f536530a.js","_app/immutable/chunks/index.0a3f2fec.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
