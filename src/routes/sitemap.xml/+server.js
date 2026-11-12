import client from '#lib/sanityClient.js';

// Must match the canonical URLs (www); andersra.com redirects to www
const siteUrl = 'https://www.andersra.com';

export async function GET() {
	const pages = [
		'/',
		'/work/autentisitet',
		'/work/designmaskinen',
		'/work/karrierestart',
		'/work/smab',
		'/work/solarchoice',
		'/work/subsea-tools',
		'/blog'
		// Add more pages as your site grows
	];

	// Blog posts from Sanity, with their real last-changed date.
	// If Sanity can't be reached, the static pages are still served.
	let posts = [];
	try {
		posts = await client.fetch(
			`*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
		);
	} catch (error) {
		console.error('Sitemap: could not fetch blog posts from Sanity', error);
	}

	const now = new Date().toISOString();
	const entries = [
		...pages.map((page) => ({ loc: page, lastmod: now })),
		...posts.map((post) => ({ loc: `/blog/${post.slug}`, lastmod: post._updatedAt }))
	];

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${entries
					.map(
						(entry) => `
        <url>
            <loc>${siteUrl}${entry.loc}</loc>
            <lastmod>${entry.lastmod}</lastmod>
            <priority>0.85</priority>
        </url>`
					)
					.join('')}
    </urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
