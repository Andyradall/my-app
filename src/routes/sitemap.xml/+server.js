export async function GET() {
    const pages = [
        '/',
        '/work/designmaskinen',
        '/work/karrierestart',
        '/work/smab',
        '/work/solarchoice',
        // Add more pages as your site grows
    ];

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(page => `
        <url>
            <loc>https://andersra.com${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.85</priority>
        </url>`).join('')}
    </urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
