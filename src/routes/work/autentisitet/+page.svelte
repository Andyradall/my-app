<script>
	import WorkBack from '../../../components/WorkBack.svelte';
	import WorkNav from '../../../components/WorkNav.svelte';
	import WorkFooter from '../../../components/WorkFooter.svelte';
	import PlanVsActual from '../../../components/case/PlanVsActual.svelte';
	import PhaseCards from '../../../components/case/PhaseCards.svelte';
	import PaletteMix from '../../../components/case/PaletteMix.svelte';
	import ColourSwatches from '../../../components/case/ColourSwatches.svelte';
	import DatedList from '../../../components/case/DatedList.svelte';
	import OutcomeBox from '../../../components/case/OutcomeBox.svelte';
	import CodeBlock from '../../../components/case/CodeBlock.svelte';
	import ScoreTile from '../../../components/case/ScoreTile.svelte';
	import SvelteSeo from 'svelte-seo';

	let LightGallery = $state();
	if (typeof window !== 'undefined') {
		import('../../../components/LightGallery.svelte').then((module) => {
			LightGallery = module.default;
		});
	}

	const links = [
		{ id: '#brand', title: 'Brand Exploration', ariaLabel: 'Brand Exploration' },
		{ id: '#design', title: 'Design & Feedback', ariaLabel: 'Design & Feedback' },
		{ id: '#surfaces', title: 'Every Surface', ariaLabel: 'Every Surface' },
		{ id: '#build', title: 'Bricks', ariaLabel: 'Bricks' },
		{ id: '#calendar', title: 'Events', ariaLabel: 'Events' },
		{ id: '#results', title: 'Results', ariaLabel: 'Results' },
		{ id: '#reflections', title: 'Reflections', ariaLabel: 'Reflections' }
	];

	const seoTitle = 'Autentisitet.no: Brand, Design & a 100/100 Bricks Build | Case study';
	const seoDescription =
		'Brand workshop, stylescapes, UX/UI in Figma and a WordPress build in Bricks for Autentisitet.no, the coaching and breathwork practice of Andreas Aubert.';
	const pageUrl = 'https://www.andersra.com/work/autentisitet';
	const ogImage = 'https://www.andersra.com/images/thumbs/thumb-autentisitet-1389x868.webp';

	const img = '/images/autentisitet/';

	const planQuote =
		'"The first three steps we can do lightly and quickly – enough to anchor the choices in values without locking us in."';

	const phases = [
		{
			dates: '01 · 18.08–15.09',
			title: 'Identity & landing page',
			text: 'Workshop, stylescapes, palette, landing page design, user test and feedback rounds.'
		},
		{
			dates: '02 · 18.09–26.09',
			title: 'Subpages & system',
			text: 'Final stylescape, social media starting point, four subpages.'
		},
		{
			dates: '03 · 27.09–11.10',
			title: 'Build',
			text: 'Password-protected staging, my own CSS framework, building section by section.'
		},
		{
			dates: '04 · 13.10–26.10',
			title: 'Launch & performance',
			text: 'Mobile menu, staging to production on 17 Oct, then PageSpeed from 67 to 99.'
		},
		{
			dates: '05 · 28.10–07.11',
			title: 'SEO & polish',
			text: 'Schema, video loading, Google Business Profile, privacy pages.'
		}
	];

	// Old site palette (content)
	const oldPalette = ['#BBC57F', '#69704D', '#000000', '#FFFFFF'];

	// Client palette: brand content, shown in the Final Direction section only
	const palette = [
		{ hex: '#243D32', text: 'Primary green. Deep, serious, grounding', border: true },
		{ hex: '#3A5547', text: 'Secondary green', border: true },
		{ hex: '#1A2D24', text: 'Text. AAA contrast on every background', border: true },
		{ hex: '#F0FE79', text: 'Yellow. About 10%, for buttons and details' },
		{ hex: '#D8DED4', text: 'Mist' },
		{ hex: '#F0F3ED', text: 'Warm grey' },
		{ hex: '#FBFDF9', text: 'Off-white' }
	];

	const feedback = [
		{
			date: '7 Sep',
			title: 'User test and first meeting',
			text: 'I user tested the page with a friend. Speak to "you" instead of "I", fewer menu items, real photos of Andreas instead of stock and AI images, and one clear action: book a paid trial session, not a free chat.'
		},
		{
			date: '12 Sep',
			title: 'His business course mentor',
			text: 'She liked the colours and design, but the hero I had designed hid the most important thing. The page should open with Andreas himself, a clear value proposition and a button, and sell the 12-week programme as the main product. I rebuilt the page around that the next day.'
		},
		{
			date: '16 Sep',
			title: "Andreas' own notes",
			text: 'He wanted "online and physical meetings" and his regions visible right away. Putting that in the headline would have weakened it, so I added a small proof strip at the bottom of the hero instead: "Siden 2005 • Online og fysiske møter • Oslo, Østfold, Agder, Vestfold og Telemark".'
		}
	];

	// Client brand fonts for the type sample only, subset to the sample text
	const fontSampleText = [
		'Fra stagnasjon til frihet',
		'«Klar for å bli den du egentlig er?»',
		'Inter for body text, set at 18px so long, personal texts are easy to read.'
	].join('');
	const brandFontsHref =
		'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@400&display=swap&text=' +
		encodeURIComponent([...new Set(fontSampleText)].join(''));

	const cssSample = `:root {
  --color-primary:   #243D32;
  --color-secondary: #3A5547;
  --color-accent:    #F0FE79;
  --color-text:      #1A2D24;
  --container-lg: 896px;
  --container-xl: 1120px;
}

.d-1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.25rem, 8vw, 5rem); /* 36 → 80px */
  line-height: 1.08;
}`;

	const phpSample = `// functions.php (simplified)
add_action('wp_head', function () {
  if (!is_front_page()) return;
  // LCP hero: one file per breakpoint
  preload('image', 'bgheronymobil.webp', '(max-width: 478px)');
  preload('image', 'bgherony2.webp',     '(min-width: 479px)');
  // Only the fonts needed above the fold
  preload('font', 'playfair-display-400.woff2');
  preload('font', 'inter-400.woff2');
}, 5);`;

	const eventsSample = `register_post_type('arrangement', [
  'public'      => true,
  'has_archive' => true,
  'rewrite'     => ['slug' => 'arrangementer'],
  'menu_icon'   => 'dashicons-calendar-alt',
]);

// Fields: event_date · event_place · event_url
// [aut_event_daydate]       → "Fredag 19.03"
// [aut_event_month_heading] → "Mars 2026"`;

	const scoreDetails = 'Performance · 100 Accessibility · 100 Best Practices · 100 SEO';
</script>

<SvelteSeo
	title={seoTitle}
	description={seoDescription}
	canonical={pageUrl}
	keywords="Anders Rådal, Autentisitet.no, Andreas Aubert, Brand workshop, Stylescapes, Web design, WordPress, Bricks, PageSpeed, SEO, Case study, UX, UI, Design, Portfolio, Oslo, Norway"
	openGraph={{
		title: seoTitle,
		description: seoDescription,
		images: [
			{
				url: ogImage,
				width: 1389,
				height: 868,
				alt: 'Autentisitet.no front page on a laptop'
			}
		],
		url: pageUrl,
		type: 'website'
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@AndersRadal',
		title: seoTitle,
		description: seoDescription,
		image: ogImage
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: seoTitle,
		description: seoDescription,
		url: pageUrl
	}}
/>

<svelte:head>
	<!-- Client brand fonts for the Final Direction type sample (stylesheet is linked in that section) -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

{#if LightGallery}
	<LightGallery />
{/if}

<header class="relative top-0">
	<WorkBack />
</header>

<main>
	<article class="mx-auto font-euclid text-slate-600 attachLightGallery">
		<!-- Hero title -->
		<section class="md:max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
			<div>
				<h1
					class="text-[2.75rem] min-[380px]:text-[3rem] md:text-7xl leading-tight font-euclid font-bold text-slate-600 py-4"
				>
					Autentisitet.no
					<span class="text-[2rem] md:text-4xl leading-tight font-euclid font-medium text-slate-500"
						><br />Brand, Design & a 100/100 Bricks Build</span
					>
				</h1>
				<a
					href="https://autentisitet.no"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit autentisitet.no, opens in a new window"
					class="live-link inline-flex items-center font-euclid font-medium text-lg text-red-500 hover:text-red-550 mt-2"
				>
					Visit autentisitet.no
					<span class="live-link-icon ml-0.5 transition-transform">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20"
							viewBox="0 -960 960 960"
							width="20"
							aria-hidden="true"
						>
							<path
								d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z"
								fill="currentColor"
							/>
						</svg>
					</span>
				</a>
			</div>
		</section>

		<!-- Intro -->
		<section
			class="max-w-6xl flex flex-col-reverse md:flex-row mx-auto justify-center pb-10 md:pb-20"
		>
			<div class="md:flex-1 md:max-w-xl p-4">
				<h2 class="pb-2">Introducing Autentisitet.no</h2>
				<ul class="text-[18px] font-euclid font-light leading-[30px] pr-1 space-y-5">
					<li>
						Andreas Aubert is a teacher, coach and writer. Through Autentisitet.no he offers a
						12-week one-to-one programme, breathwork groups and courses, and men's groups. It
						started with events: in July 2025 we hosted Freedom Breathwork in the garden of my
						shared house, and in September a second session followed "by popular demand".
					</li>
					<li>
						<strong class="font-semibold">Starting point:</strong> The old site still went by "Unfolding
						Authenticity", ran on a dated WordPress theme and leaned on stock photos, with Lato and a
						pale olive palette. Built in an outdated page builder, it was also slow. It said little about
						what Andreas actually offers.
					</li>
					<li>
						<strong class="font-semibold">Project Brief & Objectives:</strong> Rebuild autentisitet.no
						to strengthen Andreas' brand and help him succeed with his programme, groups and events. Stay
						on WordPress to keep his content, SEO and costs. Our meeting on 7 September set the rules:
						speak to "you", not about "me", keep the menu short, swap stock and AI images for real photos,
						make one clear action (book a paid trial session), and launch first, then polish.
					</li>
					<li>
						<strong class="font-semibold">My Role:</strong> End to end: brand workshop, stylescapes, UX/UI
						in Figma, user testing, development in WordPress with Bricks, SEO and launch. Beyond the website
						I gave his social media manager, Social by Malene, the visual profile to work from, designed
						event banners and co-hosted the breathwork sessions we also used as photo shoots.
					</li>
					<li>
						<strong class="font-semibold">Key Tools & Timeline:</strong> Figma, Notion, WordPress, Bricks,
						PageSpeed Insights, Search Console, Hotjar. 18 August to 7 November 2025, about 12 weeks.
						In 2026 I added an events calendar and a blog, and moved the newsletter to Mailchimp.
					</li>
				</ul>
			</div>
			<figure class="md:flex-2 md:max-w-xl m-4">
				<div class="flex items-center justify-center h-full">
					<img
						src="{img}mockup.webp"
						srcset="{img}mockup-640.webp 640w, {img}mockup-960.webp 960w, {img}mockup.webp 1315w"
						sizes="(min-width: 768px) 576px, calc(100vw - 32px)"
						width="1315"
						height="924"
						fetchpriority="high"
						class="zooming-white-bg"
						alt="The Autentisitet.no front page on a laptop and a phone: a deep green hero asking 'Klar for ekte endring i livet ditt?' with a portrait of Andreas and two buttons"
					/>
				</div>
			</figure>
		</section>

		<!-- Process overview -->
		<section id="process" class="max-w-6xl mx-auto px-4 pb-4">
			<h2>Process overview</h2>
		</section>

		<section class="hidden sm:block">
			<WorkNav {links} />
		</section>

		<section class="max-w-6xl mx-auto px-4 pt-8 md:pt-12 pb-16 md:pb-24 flex flex-col gap-8">
			<PlanVsActual
				planLabel="THE PLAN I SENT ANDREAS · 8–9 AUG"
				plan={[
					'A short workshop: personality sliders, value pyramid, maybe a User Centered Design Canvas',
					'Stylescapes to explore the visual language',
					'A style guide / brand book',
					'The landing page'
				]}
				quote={planQuote}
				source="From my follow-up mail to Andreas, 9 Aug 2025 (translated)"
				actualLabel="WHAT ACTUALLY HAPPENED"
				actual={[
					{ text: 'Personality sliders with Andreas', tag: 'Done' },
					{
						text: 'Stylescapes in two rounds (two, then six), narrowed to three directions and one final palette',
						tag: 'Done'
					},
					{
						text: 'A brand document with palette, type and rationale, so the brand stays consistent on every platform',
						tag: 'Done'
					},
					{
						text: 'Landing page, then four subpages, a full build, SEO and launch',
						tag: 'Shipped 17 Oct'
					}
				]}
			/>
			<PhaseCards {phases} columns={5} />
		</section>

		<!-- Brand exploration (dark) -->
		<section
			id="brand"
			class="pageSection bg-slate-800/95 text-zinc-150 pt-16 md:pt-28 pb-16 md:pb-24 px-4"
		>
			<div class="mx-auto sm:max-w-2xl">
				<h2 class="pb-2">Brand Exploration: From Workshop to Three Directions</h2>
				<h3>Where we started</h3>
				<p>
					The old site still went by "Unfolding Authenticity". A sunlit forest, a stock silhouette
					leaping a chasm and pale green text did little to show who Andreas is or what a session
					with him is like.
				</p>
				<div class="flex flex-wrap gap-3 items-center mt-4">
					<span class="text-sm text-zinc-300">Old palette and type:</span>
					{#each oldPalette as hex (hex)}
						<span
							class="size-9 rounded-md {hex === '#000000' ? 'border border-zinc-600' : ''}"
							style="background: {hex}"
							title={hex}
						></span>
					{/each}
					<span class="text-sm">#BBC57F · #69704D · black · white · Lato</span>
				</div>
			</div>
			<figure class="mx-auto md:max-w-4xl mt-10">
				<!-- svelte-ignore a11y_img_redundant_alt (alt text is verbatim from images.md; "photo" describes the content) -->
				<img
					src="{img}old-site.webp"
					srcset="{img}old-site-900.webp 900w, {img}old-site.webp 1145w"
					sizes="(min-width: 928px) 896px, calc(100vw - 32px)"
					width="1145"
					height="1045"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-dark-bg"
					alt="The old Autentisitet.no front page, branded Unfolding Authenticity, with a forest hero image and a stock photo of a man jumping between two cliffs"
				/>
				<figcaption class="text-zinc-150">The old front page, before the redesign.</figcaption>
			</figure>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>A brand workshop with personality sliders</h3>
				<p>
					Andreas first placed the brand where he felt it was today, then where he wanted it to go.
					Today it read as fairly serious, conventional, classic and an authority. The vision pulled
					toward playful, eccentric and younger, with more appeal to feelings, while still speaking
					to a premium audience. His own summary was the most useful line of the day:
					<em>"Vil være på begge sider av skalaene"</em>, he wants to be on both sides of the
					scales.
				</p>
			</div>
			<div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
				<figure>
					<img
						src="{img}ws-current.webp"
						width="1417"
						height="836"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-dark-bg"
						alt="Personality sliders for the current brand: close to serious, conventional, authority and mature and classic"
					/>
					<figcaption class="text-zinc-150">Where the brand is today.</figcaption>
				</figure>
				<figure>
					<img
						src="{img}ws-vision.webp"
						width="1368"
						height="808"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-dark-bg"
						alt="Personality sliders for Andreas' vision, with marks on both ends of several scales and handwritten notes: 'Vil være på begge sider av skalaene', 'Vil denne veien?', 'Eksentrisk', 'Appellere mer til følser'"
					/>
					<figcaption class="text-zinc-150">
						Where Andreas wants it to go: more playful, eccentric and emotional.
					</figcaption>
				</figure>
			</div>
		</section>

		<!-- Stylescapes -->
		<section class="py-16 md:py-28 px-4">
			<div class="mx-auto sm:max-w-2xl">
				<h2 class="pb-2">Six Stylescapes, Three Directions</h2>
				<p class="pb-2">
					Since Andreas wanted to sit on both sides of the scales, I made the options clearly
					different. Two first stylescapes on 20 August, then a second round of six, grouped into
					three directions. Each one shows the same content in a different voice: hero, typography,
					colour, imagery and buttons.
				</p>
				<p>
					His first reactions were concrete: he preferred Playfair over Poppins, and he did not like
					black. Inter became the body font from that meeting on.
				</p>
			</div>
			<div class="max-w-6xl mx-auto mt-14 flex flex-col gap-14">
				<figure>
					<img
						src="{img}sc-kraft.webp"
						width="1600"
						height="360"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-white-bg"
						alt="Stylescape 'Struktur, Kraft, Modig': bold geometric sans serif on black with a saturated colour block and a black-and-white portrait of Andreas"
					/>
					<figcaption>
						<strong>01 · Struktur, Kraft, Modig</strong> (structure, strength, courage). Powerful
						and more masculine: black backgrounds, white Poppins, an acid signal yellow and a calm
						deep green, also tried in a muted orange. Andreas:
						<em>"A lot of black… it could feel heavy, even a bit scary."</em>
					</figcaption>
				</figure>
				<figure>
					<img
						src="{img}sc-glede.webp"
						width="1600"
						height="360"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-white-bg"
						alt="Stylescape 'Glede, Mening, Frihet': expressive collage with motion-blurred flowers, soap bubbles, torn paper and a high-contrast serif"
					/>
					<figcaption>
						<strong>02 · Glede, Mening, Frihet</strong> (joy, meaning, freedom). Openness, a little
						madness and lots of contrast: broken structures, flowing image edges, soap bubbles and a
						mustard-yellow signal colour, with Playfair as the human touch. Andreas:
						<em>"A bit glamour blogger, with the soap bubbles and the pinkish red."</em>
					</figcaption>
				</figure>
				<figure>
					<img
						src="{img}sc-flyt.webp"
						width="1600"
						height="360"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-white-bg"
						alt="Stylescape 'Flyt, Jording': calm serif headlines, deep forest green, warm off-white and a small yellow button"
					/>
					<figcaption>
						<strong>03 · Flyt, Jording</strong> (flow, grounding). Calm and more exclusive: lots of whitespace,
						a light Playfair, thin lines, a grainy overlay and yellow used only as a 10% accent. My own
						note at the time: safe, maybe a little boring and easy to overlook.
					</figcaption>
				</figure>
			</div>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>Testing the directions on a real page</h3>
				<p>
					Stylescapes are good for talking about feelings but bad at showing how a long page reads.
					On 2 September I put the directions on the landing page structure, with real headlines,
					lists and testimonials. Seeing them side by side settled it for me: mature the layout, add
					whitespace, and let go of the black version.
				</p>
			</div>
			<div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each [['ctx-3', 'Landing page draft in olive green and off-white', 'Olive and off-white'], ['ctx-4', 'Landing page draft in black and deep teal with lime buttons', 'Black, teal and lime'], ['ctx-5', 'Landing page draft with a navy-to-terracotta dusk gradient', 'Experiment: "ugly-pretty" gradients'], ['ctx-8', 'Landing page draft with navy sections and a sage footer', 'Navy and sage']] as [file, alt, caption] (file)}
					<figure class="mx-auto w-full max-w-[640px]">
						<img
							src="{img}{file}.webp"
							width="640"
							height="1280"
							loading="lazy"
							class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
							{alt}
						/>
						<figcaption>{caption}</figcaption>
					</figure>
				{/each}
			</div>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>Mixing a new green</h3>
				<p>
					With 01 too dark and 02 too loud, the calm third direction became the base, and the job
					was to keep it from being bland. I had two candidate greens: one was a nice shade but too
					warm and muddy, the other had exactly the right depth but was a touch too cold. So I mixed
					one in between, then matched a yellow to it and built the background and text shades from
					the pair.
				</p>
			</div>
			<div class="max-w-6xl mx-auto mt-10">
				<PaletteMix
					ariaLabel="Palette decision: candidate green 39442B too warm and muddy, candidate 1B3B36 right depth but too cold, final 243D32 in between; candidate yellows FAFE86 and C3FF00, final F0FE79"
					candidatesLabel="CANDIDATES"
					candidates={[
						[
							{ hex: '#39442B', text: '#39442B · too warm, muddy', tall: true },
							{ hex: '#1B3B36', text: '#1B3B36 · right depth, too cold', tall: true }
						],
						[
							{ hex: '#FAFE86', text: '#FAFE86 · light, airy' },
							{ hex: '#C3FF00', text: '#C3FF00 · too acid' }
						]
					]}
					finalLabel="FINAL PAIR"
					final={[
						{
							hex: '#243D32',
							text: '#243D32 · serious and grounded, warm enough to feel human',
							tall: true
						},
						{ hex: '#F0FE79', text: '#F0FE79 · warmth and impact, saved for buttons and details' }
					]}
				/>
			</div>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>Selling the direction</h3>
				<p>
					For the presentation on 5 September I chose not to jump straight to the final page. I
					planned it as a walk through the process: the first stylescapes, the next round, and then
					the final version, so the choice would feel earned. I presented the result as a
					combination of three of the stylescapes, with a green that is both serious and grounded.
					Andreas also warmed to one of the lighter directions. The note I sent with the delivery
					the next day kept it short:
				</p>
				<blockquote class="mt-4 p-6 rounded-lg bg-zinc-100 flex flex-col gap-2.5">
					<p class="italic">
						"The palette combines the earthy, serious deep green with a warm, energetic yellow that
						we mostly use for calls to action. It gives the site calm and authority, with one clear
						point of light and warmth where we want to lead attention."
					</p>
					<span class="text-sm font-light text-slate-400"
						>Delivery note to Andreas, 6 Sep 2025 (translated)</span
					>
				</blockquote>
			</div>
			<div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
				<img
					src="{img}var-D.webp"
					width="1000"
					height="225"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-white-bg"
					alt="Flyt, Jording variant in olive green"
				/>
				<img
					src="{img}var-E.webp"
					width="1000"
					height="225"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-white-bg"
					alt="Flyt, Jording variant in petrol green and taupe"
				/>
				<img
					src="{img}var-F.webp"
					width="1000"
					height="225"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-white-bg"
					alt="Flyt, Jording variant in navy and terracotta"
				/>
			</div>
		</section>

		<!-- Final direction (dark) -->
		<section class="bg-slate-800/95 text-zinc-150 py-16 md:py-28 px-4">
			<div class="mx-auto sm:max-w-2xl">
				<h2 class="pb-2">The Final Direction: Stylescape F</h2>
				<p>
					The final stylescape came with a short written rationale, so every later decision could
					point back to it. The same text later became the starting point for his social media.
				</p>
			</div>
			<figure class="max-w-6xl mx-auto mt-12">
				<img
					src="{img}sc-final.webp"
					width="1600"
					height="360"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-dark-bg"
					alt="Final Stylescape F: Flyt and Jording headline over a garden portrait, deep green panel, off-white text column with a yellow 'Bestill prøvetime' button"
				/>
			</figure>
			<div class="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
				<div>
					<h3>Feeling</h3>
					<p>
						Calm and a little more exclusive. Lots of whitespace and no overlapping elements. A
						modern broken grid in large open areas, so content can breathe and fade or slide in
						gently.
					</p>
				</div>
				<div>
					<h3>Graphic elements</h3>
					<p>
						Organic texture shapes behind sections at 2–4% opacity tie the page together. Thin lines
						break things up. A faint grain on photos adds warmth, with large soft corners and no
						drop shadows.
					</p>
				</div>
				<div>
					<h3>Typography</h3>
					<p>
						Playfair Display Regular for headlines: more human than a sans and never corporate.
						Playfair Italic for big quotes. Inter at 18px for body text, on an 8-px scale for
						spacing and type.
					</p>
				</div>
			</div>
			<div class="max-w-6xl mx-auto mt-16 flex flex-col gap-5">
				<h3>Colour</h3>
				<!-- Client palette: brand content, scoped to this block -->
				<ColourSwatches colours={palette} dark />
				<!-- Client fonts: stylesheet in the body so it only loads with this page and doesn't block the first paint -->
				<link rel="stylesheet" href={brandFontsHref} />
				<div
					class="mt-6 px-8 py-10 rounded-lg flex flex-wrap gap-x-12 gap-y-6 items-end"
					style="background: #FBFDF9; color: #1A2D24"
				>
					<span
						class="text-4xl md:text-6xl leading-tight"
						style="font-family: 'Playfair Display', Georgia, serif">Fra stagnasjon til frihet</span
					>
					<span
						class="text-2xl md:text-3xl leading-snug italic"
						style="font-family: 'Playfair Display', Georgia, serif"
						>«Klar for å bli den du egentlig er?»</span
					>
					<span class="text-lg leading-relaxed max-w-md" style="font-family: Inter, sans-serif"
						>Inter for body text, set at 18px so long, personal texts are easy to read.</span
					>
				</div>
			</div>
		</section>

		<!-- Designing the landing page -->
		<section id="design" class="pageSection py-16 md:py-28 px-4">
			<div class="mx-auto sm:max-w-2xl">
				<h2 class="pb-2">Designing the Landing Page</h2>
				<h3>Iterating in Figma</h3>
				<p>
					The landing page went through many rounds over two weeks. The building blocks stayed the
					same: who it's for, the 12-week programme, testimonials, the other offers and who Andreas
					is. The order, the density and the colours changed a lot.
				</p>
			</div>
			<div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each [['it-12', 'Landing page version 12', 'Version 12'], ['it-13', 'Landing page version 13 with a dusk palette', 'Version 13: alternative palette'], ['it-16f', 'Landing page version 16f in green', 'Version 16f: presented 5–6 Sep'], ['it-16k', 'Landing page version 16k, the final layout', 'Version 16k: after feedback']] as [file, alt, caption] (file)}
					<figure class="mx-auto w-full max-w-[640px]">
						<img
							src="{img}{file}.webp"
							width="640"
							height="1280"
							loading="lazy"
							class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
							{alt}
						/>
						<figcaption>{caption}</figcaption>
					</figure>
				{/each}
			</div>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>Three rounds of feedback</h3>
				<p>The biggest changes came from listening, not from polishing.</p>
			</div>
			<div class="mt-8">
				<DatedList items={feedback} />
			</div>

			<div class="max-w-6xl mx-auto mt-14 flex flex-col lg:flex-row gap-12 lg:items-start">
				<div class="lg:flex-1 min-w-0">
					<h3>Every change, explained</h3>
					<p class="pb-4">
						I delivered the revised page on 15 September with notes in the margin, written so
						Andreas could follow the reasoning and pick up terms like CTA along the way:
					</p>
					<ol class="list-custom-ordered">
						<li>
							<strong>New hero.</strong> Clearer focus on what you get, with Andreas as the face of it.
							Two clear buttons and a gentle note that places are limited.
						</li>
						<li>
							<strong>"Kjenner du deg igjen?"</strong> Five pain points the reader recognises, tied straight
							to the solution: the 12-week programme.
						</li>
						<li>
							<strong>Main offer clarified.</strong> What you gain, how we work and what's included.
						</li>
						<li>
							<strong>Trust moved up.</strong> Testimonials moved higher and trimmed to their strongest
							lines, to avoid a wall of text.
						</li>
						<li>
							<strong>Lead magnet.</strong> A free 5-minute guided breathing session in exchange for an
							email address (not yet shipped).
						</li>
						<li>
							<strong>Calmer About section.</strong> His training folded into accordions, with a booking
							button added.
						</li>
						<li>
							<strong>Secondary offers.</strong> Breathwork and men's groups as cards that lead to their
							own pages.
						</li>
						<li>
							<strong>Mentor quotes.</strong> A second trust section with short quotes from his teachers.
						</li>
						<li>
							<strong>Offer repeated.</strong> The programme again near the end, with small trust markers.
						</li>
						<li><strong>FAQ</strong> to answer doubts before they stop a booking.</li>
						<li><strong>Newsletter</strong> as a last catch for visitors who aren't ready yet.</li>
					</ol>
				</div>
				<div class="lg:flex-[1.4] min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-4">
					{#each [['annot-1', '2511', "Annotated landing page, part 1: hero, 'Kjenner du deg igjen?' and the 12-week programme with notes in the margin"], ['annot-2', '2372', 'Annotated landing page, part 2: testimonials, breathing-session lead magnet and the About section'], ['annot-3', '2093', 'Annotated landing page, part 3: mentor quotes, repeated offer, FAQ, newsletter and footer']] as [file, height, alt] (file)}
						<img
							src="{img}{file}.webp"
							width="1200"
							{height}
							loading="lazy"
							class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
							{alt}
						/>
					{/each}
				</div>
			</div>

			<div class="mx-auto sm:max-w-2xl mt-14 flex">
				<OutcomeBox label="Shipped">
					Portrait hero with value proposition and two buttons, proof strip, "Kjenner du deg
					igjen?", the 12-week offer, testimonials, secondary offer cards, FAQ, newsletter signup
					and a low-friction contact form.
				</OutcomeBox>
			</div>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>Rolling the system out</h3>
				<p>
					With the landing page settled, I made the Men's Groups page the template for the rest, and
					the same building blocks became four more pages in about a week: Breathwork, Men's Groups,
					Life Coaching and Contact. Each follows the same rhythm: a hero with one action, quick
					facts, the story, a testimonial, an FAQ and a closing call to action. On the contact page
					the form is the whole point: as little friction as possible, with trust elements below it
					and a plain email address for people who don't like forms.
				</p>
			</div>
			<div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each [['sub-breath', 'Breathwork subpage design', 'Breathwork'], ['sub-mann', "Men's groups subpage design", "Mannsgrupper (men's groups)"], ['sub-livs', 'Life coaching subpage design', 'Livsveiledning (life coaching)'], ['sub-kontakt', 'Contact page design with booking form', 'Kontakt (contact)']] as [file, alt, caption] (file)}
					<figure class="mx-auto w-full max-w-[640px]">
						<img
							src="{img}{file}.webp"
							width="640"
							height="1280"
							loading="lazy"
							class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
							{alt}
						/>
						<figcaption>{caption}</figcaption>
					</figure>
				{/each}
			</div>
		</section>

		<!-- One brand, every surface -->
		<section id="surfaces" class="pageSection py-16 md:py-28 px-4 bg-slate-100/20">
			<div class="mx-auto sm:max-w-2xl">
				<h2 class="pb-2">One Brand, Every Surface</h2>
				<p>
					My main priority was that people recognise Andreas wherever they meet him: on the website,
					on Instagram, on a Facebook event and in the room. The website is only one of those
					surfaces.
				</p>
			</div>

			<div class="max-w-6xl mx-auto mt-14 flex flex-col md:flex-row gap-12 md:items-center">
				<div class="md:flex-1 min-w-0">
					<h3>Handing the brand to his social media manager</h3>
					<p class="pb-2">
						In September Andreas started working with Malene at Social by Malene, who writes his
						posts and builds them in Canva. I sent her Stylescape F with the rationale for fonts and
						colours, plus a few Instagram accounts that do this well. A compact brand document, so
						the brand stays consistent on every platform.
					</p>
					<p>
						Her drafts picked up the colours and fonts right away. To give her more to work with, I
						made brand-coloured background textures with the same subtle grain as the website, and
						we refined the templates together.
					</p>
				</div>
				<figure class="md:flex-1 min-w-0 max-w-[480px] w-full">
					<img
						src="{img}brand-type.webp"
						width="800"
						height="1000"
						loading="lazy"
						class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
						alt="Brand sheet: the Autentisitet palette as seven circles above type samples in Playfair Display and Inter"
					/>
					<figcaption>Palette and type for social media.</figcaption>
				</figure>
			</div>

			<figure class="mx-auto md:max-w-2xl mt-14">
				<img
					src="{img}malene-brief.webp"
					width="1000"
					height="1089"
					loading="lazy"
					class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
					alt="The brand description sent to Social by Malene, in Norwegian: feeling, graphic profile, images, fonts and colours for Stylescape F"
				/>
				<figcaption>
					The description I sent Malene with Stylescape F and the palette, 22 September 2025
					(Norwegian).
				</figcaption>
			</figure>

			<figure class="max-w-6xl mx-auto mt-14">
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
					{#each [['ig-andreas', "Instagram post: 'Velkommen hit! Jeg er Andreas' with a cut-out portrait on deep green"], ['ig-barndom', "Instagram post: 'Svaret på hva du lengter etter i dag ligger kanskje i barndommen din' in white and yellow Playfair on deep green, with a portrait of Andreas"], ['ig-selvutvikling', 'Instagram post on the light mist background: a notebook and a coffee cup above a headline in deep green Playfair'], ['ig-problemet', 'Instagram post: a text-only quote card with grain texture, deep green headline and a yellow italic question']] as [file, alt] (file)}
						<img
							src="{img}{file}.webp"
							width="739"
							height="924"
							loading="lazy"
							class="mx-auto w-full max-w-[739px] h-auto rounded-md zooming-white-bg"
							{alt}
						/>
					{/each}
				</div>
				<figcaption>
					Live posts from @autentisitet.no in 2026, built on the templates made together with Social
					by Malene.
				</figcaption>
			</figure>

			<figure class="mx-auto md:max-w-4xl mt-14">
				<img
					src="{img}fb-livs.webp"
					width="1400"
					height="580"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-white-bg"
					alt="Facebook cover: 'Autentisitet og personlig vekst' on deep green with his services, training, regions and a round portrait of Andreas"
				/>
				<figcaption>Facebook cover in line with the new website, October 2025.</figcaption>
			</figure>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>Making our own photos</h3>
				<p>
					Real photos of Andreas at work were the biggest gap. From the 7 September meeting the rule
					was clear: no stock or AI images, and consent from participants before using photos from
					events. So we turned his breathwork sessions into photo shoots as well. I co-hosted the
					first one in our garden, set up with blankets, cushions and lamps between the trees, and
					the photos from these sessions now carry the website, the event banners and Instagram. For
					the next session we added music. People loved it.
				</p>
			</div>
			<div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
				<figure>
					<img
						src="{img}event-garden.webp"
						width="1600"
						height="1009"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-white-bg"
						alt="A garden set up for a breathwork session: blankets and mats on the grass, white curtains hung between trees and two floor lamps"
					/>
					<figcaption>The garden, set up for Freedom Breathwork, July 2025.</figcaption>
				</figure>
				<figure>
					<!-- svelte-ignore a11y_img_redundant_alt (alt text is verbatim from images.md; "photo" describes the content) -->
					<img
						src="{img}fb-event.webp"
						width="1200"
						height="620"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-white-bg"
						alt="Facebook event banner: 'Breathwork workshop, Slipp stress og uro, med Andreas Aubert' next to a photo from a session"
					/>
					<figcaption>A photo from a session, reused on a Facebook event banner.</figcaption>
				</figure>
			</div>
		</section>

		<!-- Build (dark) -->
		<section id="build" class="pageSection bg-slate-800/95 text-zinc-150 py-16 md:py-28 px-4">
			<div class="mx-auto sm:max-w-2xl">
				<h2 class="pb-2">Building for Speed with Bricks</h2>
				<h3>Choosing the tool</h3>
				<p class="pb-2">
					The site stayed on WordPress so Andreas can keep editing his own content. I compared
					Bricks, Breakdance, Oxygen and SeedProd. Breakdance had more ready-made blocks; Bricks won
					on lean output and performance. Iterating in a builder is slower than iterating in design,
					so Andreas and I settled the design in Figma first and I built it once.
				</p>
				<h3>A small CSS framework of my own</h3>
				<p class="pb-6">
					I spent two days weighing Automatic.css with Frames against Core Framework, and then
					rolled my own: Tailwind-style utility classes on top of design tokens taken straight from
					the stylescape. Later I added simple rules for widths, so I never had to think about them
					again: 896px for focused content, 1120px for wide sections, and about 810px for long
					reading.
				</p>
				<CodeBlock code={cssSample} />
			</div>

			<div class="max-w-6xl mx-auto mt-16">
				<div class="mx-auto sm:max-w-2xl">
					<h3>From Figma to Bricks</h3>
					<p class="pb-4">
						Work in progress: screenshots from the first days of the build, section by section. The
						finished pages are shown under Results.
					</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each [['fig-hero', '1051', "Figma design of the hero: 'Klar for ekte endring i livet ditt?' with a portrait, two buttons and the proof strip", 'Hero in Figma.'], ['build-hero', '977', 'The same hero being built in Bricks, 1 October 2025', 'The same hero mid-build in Bricks, 1 October (work in progress).'], ['fig-offer', '1321', 'Figma design of the 12-week offer section with gains, method and extras', 'The 12-week offer in Figma.'], ['build-offer', '1005', 'The offer section being built in Bricks with the structure panel open, 2 October 2025', 'Mid-build in Bricks, 2 October (work in progress).']] as [file, height, alt, caption] (file)}
						<figure>
							<img
								src="{img}{file}.webp"
								width="1400"
								{height}
								loading="lazy"
								class="w-full h-auto rounded-md zooming-dark-bg"
								{alt}
							/>
							<figcaption class="text-zinc-150">{caption}</figcaption>
						</figure>
					{/each}
				</div>
			</div>

			<div class="mx-auto sm:max-w-2xl mt-16">
				<h3>Staging and launch</h3>
				<p class="pb-2">
					The old site stayed live while I built on a password-protected copy at
					dev.autentisitet.no, set up by hand over FTP with indexing blocked. On 17 October the new
					site went live.
				</p>
				<h3>Launch day: 67 on mobile</h3>
				<p class="pb-2">
					The first PageSpeed test after launch gave 67 on mobile and 98 on desktop, with a Largest
					Contentful Paint of about 10 seconds. A big part of it was my own hero rule, which forced
					the first screen to be at least 1240px tall. Fixing that came first, then:
				</p>
				<ul class="list-custom pb-6">
					<li>
						Preload the hero image as WebP, with separate files for mobile and desktop, plus only
						the two fonts above the fold.
					</li>
					<li>
						Remove the Bricks icon font I never used, plus its colour-palette stylesheet and the
						empty child-theme CSS.
					</li>
					<li>
						A small script of my own loads Hotjar only after the page has finished loading. We get
						the analytics, and the page stays fast.
					</li>
					<li>Long cache headers on static assets.</li>
					<li>
						Turn the video testimonial into a click-to-play facade with a WebP poster. That took the
						Breathwork page from 84 to 99.
					</li>
				</ul>
				<CodeBlock code={phpSample} />
				<h3 class="pt-6">Technical SEO</h3>
				<ul class="list-custom">
					<li>FAQPage schema on every page with an FAQ, plus business and video schema.</li>
					<li>Page titles and descriptions written for local searches like "breathwork i Oslo".</li>
					<li>
						301 redirects from the old site's URLs (/counselling/, /mentoring/, /testimonials/,
						/breathwork-2/ and more) to their new homes.
					</li>
					<li>Google Business Profile and Search Console set up after launch.</li>
				</ul>
			</div>
		</section>

		<!-- Events calendar -->
		<section id="calendar" class="pageSection py-16 md:py-28 px-4 bg-slate-100/20">
			<div class="mx-auto sm:max-w-2xl">
				<h2 class="pb-2">An Events Calendar Andreas Runs Himself</h2>
				<p class="pb-2">
					In February 2026 Andreas asked for a proper events page. Until then, his workshops and
					men's groups around Oslo, Agder, Vestfold, Østfold and Telemark were a hand-edited list of
					links in a text block.
				</p>
				<p>
					The site runs on Bricks with my own CSS and very few plugins, and I wanted to keep it that
					way. So instead of reaching for ACF, I wrote a small must-use plugin: a custom post type,
					Arrangement, with three fields (date, place and link) and three categories. A Bricks query
					loop renders the list. Two shortcodes print the Norwegian weekday and date ("Fredag
					19.03") and a heading for each month, and events more than two months old fold away behind
					a "Vis eldre events" button.
				</p>
			</div>
			<div class="max-w-6xl mx-auto mt-12 flex flex-col gap-8">
				<div class="flex flex-col md:flex-row gap-8 md:items-start">
					<figure class="md:basis-[340px] md:shrink-0 w-full max-w-[340px] mx-auto md:mx-0">
						<img
							src="{img}events-sketch.webp"
							width="900"
							height="1200"
							loading="lazy"
							class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
							alt="Paper wireframe sketch of the events list: date and weekday on the left, event text in the middle, place and category badge on the right"
						/>
						<figcaption>Paper sketch of one event row, 16 February 2026.</figcaption>
					</figure>
					<div class="flex-1 min-w-0 flex flex-col gap-6">
						<figure>
							<img
								src="{img}events-design.webp"
								width="1053"
								height="379"
								loading="lazy"
								class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
								alt="The designed events list: weekday and date badges, event titles, place and category tags"
							/>
							<figcaption>The same row, designed and built the same day.</figcaption>
						</figure>
						<CodeBlock code={eventsSample} />
					</div>
				</div>
				<figure>
					<img
						src="{img}events-builder.webp"
						width="1600"
						height="674"
						loading="lazy"
						class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
						alt="Bricks builder with the events query loop settings on the left and the rendered events list in the canvas"
					/>
					<figcaption>The query loop in Bricks, March 2026.</figcaption>
				</figure>
				<figure class="max-w-[820px]">
					<img
						src="{img}wp-events.webp"
						width="1600"
						height="1837"
						loading="lazy"
						class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
						alt="WordPress admin showing the Arrangementer list with 13 published events and an annotation pointing to 'Legg til arrangement'"
					/>
					<figcaption>
						What Andreas sees: a list of events and one button to add a new one.
					</figcaption>
				</figure>
			</div>
			<div class="mx-auto sm:max-w-2xl mt-14">
				<p>
					The same approach carried the rest of phase two: a blog page, and newsletter signups wired
					straight from Bricks forms to Kit, then moved to Mailchimp when Andreas switched
					providers, still without a plugin.
				</p>
			</div>
		</section>

		<!-- Results (dark) -->
		<section id="results" class="pageSection bg-slate-800/95 text-zinc-150 py-16 md:py-28 px-4">
			<div class="mx-auto sm:max-w-2xl">
				<h2 class="pb-2">Results</h2>
				<h3>PageSpeed Insights</h3>
				<p>
					From 67 on mobile on launch day to 98–100 three weeks later. Tested on 9 November 2025, on
					the front page and on the Breathwork page, which carries a video testimonial.
				</p>
			</div>
			<ul class="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<ScoreTile
					label="Front page · Mobile"
					before={67}
					score={98}
					details={scoreDetails}
					lcp="LCP from about 10 s to 2.4 s"
				/>
				<ScoreTile
					label="Front page · Desktop"
					score={100}
					details={scoreDetails}
					lcp="LCP 0.6 s"
				/>
				<ScoreTile
					label="Breathwork page · Mobile"
					before={84}
					score={99}
					details={scoreDetails}
					lcp="LCP 1.9 s"
				/>
				<ScoreTile
					label="Breathwork page · Desktop"
					score={100}
					details={scoreDetails}
					lcp="LCP 0.6 s"
				/>
			</ul>
			<div class="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
				<figure>
					<img
						src="{img}psi-home-mobile.webp"
						width="1000"
						height="964"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-dark-bg"
						alt="PageSpeed Insights for autentisitet.no on mobile: 98 performance, 100 accessibility, 100 best practices, 100 SEO"
					/>
					<figcaption class="text-zinc-150">Front page, mobile.</figcaption>
				</figure>
				<figure>
					<img
						src="{img}psi-home-desktop.webp"
						width="1000"
						height="964"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-dark-bg"
						alt="PageSpeed Insights for autentisitet.no on desktop: 100 in all four categories"
					/>
					<figcaption class="text-zinc-150">Front page, desktop.</figcaption>
				</figure>
			</div>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>Found in search, and by AI</h3>
				<p class="pb-2">
					Within weeks of launch, the site showed up where Andreas' clients actually look:
				</p>
				<ul class="list-custom">
					<li><strong>#1 on Google</strong> for "livsveiledning oslo".</li>
					<li>
						<strong>Named in Google's AI Overview</strong> for both "breathwork i oslo" and "mannsgrupper
						oslo".
					</li>
					<li>
						<strong>"breathwork oslo"</strong> moved from page 3 to pages 1–2 after the video and schema
						fixes.
					</li>
				</ul>
			</div>
			<div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
				{#each [['serp-livs', '648', "Google search for 'livsveiledning oslo' with Autentisitet.no as the first result", '"livsveiledning oslo", 30 Oct 2025.'], ['serp-bw', '1390', "Google AI Overview for 'breathwork i oslo' listing Autentisitet.no among providers", '"breathwork i oslo", 5 Nov 2025.'], ['serp-mann', '829', "Google AI Overview for 'mannsgrupper oslo' describing Autentisitet.no's men's groups", '"mannsgrupper oslo", 9 Nov 2025.']] as [file, height, alt, caption] (file)}
					<figure>
						<img
							src="{img}{file}.webp"
							width="1100"
							{height}
							loading="lazy"
							class="w-full h-auto rounded-md zooming-dark-bg"
							{alt}
						/>
						<figcaption class="text-zinc-150">{caption}</figcaption>
					</figure>
				{/each}
			</div>

			<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
				<h3>An outside view</h3>
				<blockquote class="flex flex-col gap-2.5">
					<p class="italic">"Good text, good flow, clear buttons."</p>
					<span class="text-sm font-light text-zinc-300"
						>Mathilde Junge, reviewing the site in a web meeting, 11 Nov 2025 (translated)</span
					>
				</blockquote>
			</div>

			<div
				class="max-w-6xl mx-auto mt-16 md:mt-24 flex flex-col md:flex-row gap-12 md:items-center"
			>
				<div class="md:flex-1 min-w-0">
					<h3>And the rooms are full</h3>
					<p>
						The real measure is people in the room. Andreas' breathwork events now fill up, and
						participants love the sessions. Between July 2025 and January 2026 his events list
						included sessions in Oslo, Tvedestrand, Kristiansand, Horten, Sandefjord, Spydeberg,
						Mandal and Grimstad.
					</p>
				</div>
				<div class="md:flex-[1.4] min-w-0 grid grid-cols-2 gap-4">
					<figure>
						<img
							src="{img}event-house-hosts.webp"
							width="1200"
							height="1600"
							loading="lazy"
							class="w-full aspect-[3/4] object-cover rounded-md zooming-dark-bg"
							alt="Andreas and Anders sitting side by side in meditation, leading a breathwork session in a living room"
						/>
						<figcaption class="text-zinc-150">
							Co-hosting a session at our house, 22 March 2026.
						</figcaption>
					</figure>
					<figure>
						<img
							src="{img}event-prindsen-still.webp"
							width="1200"
							height="1600"
							loading="lazy"
							class="w-full aspect-[3/4] object-cover rounded-md zooming-dark-bg"
							alt="Andreas sitting cross-legged on the floor of a bright yoga studio, smiling toward the group"
						/>
						<figcaption class="text-zinc-150">Andreas at Prindsen Yoga, 15 March 2026.</figcaption>
					</figure>
				</div>
			</div>
		</section>

		<!-- Reflections -->
		<section id="reflections" class="pageSection md:max-w-2xl mx-auto py-10 md:py-28 px-4">
			<h2 class="pb-2">Reflections & Learnings</h2>
			<div class="mx-auto sm:max-w-2xl">
				<ul class="list-custom">
					<li>
						<strong>Values lead to visuals.</strong> Every design decision traces back to the exploration:
						the workshop gave the values, the values gave the stylescapes, and the stylescapes gave the
						palette, type and layout. The result is anchored in who Andreas is, not in my taste.
					</li>
					<li>
						<strong>Show the path, not just the answer.</strong> Walking Andreas through the stylescapes
						before the final page made the choice feel like ours, not mine.
					</li>
					<li>
						<strong>Test on a real page.</strong> The stylescapes started the conversation. Seeing them
						on the actual landing page made the decision.
					</li>
					<li>
						<strong>Feedback moves a design further than fine-tuning.</strong> One round of outside feedback
						put Andreas and his offer at the top of the page.
					</li>
					<li>
						<strong>Explain decisions in the client's language.</strong> Annotations in the margin turned
						a design review into a conversation about selling his programme.
					</li>
					<li>
						<strong>Performance is a design decision.</strong> Fonts, image sizes and how video loads
						are choices made long before the build.
					</li>
					<li>
						<strong>Bricks suits clients who need custom solutions and top performance.</strong> It gives
						me full control of the markup and CSS, and Andreas still edits his own content in WordPress.
					</li>
					<li>
						<strong>Fewer tools, less friction.</strong> A small CSS framework of my own and almost no
						plugins made every later change predictable.
					</li>
					<li>
						<strong>Seeing the whole journey.</strong> As designer, developer and co-host of his events,
						I could follow a visitor from an Instagram post to a full room.
					</li>
				</ul>
			</div>
		</section>
	</article>
</main>

<footer>
	<WorkFooter />
</footer>

<style lang="postcss">
	@reference "../../../global.css";

	/* Live-site link under the title */
	.live-link-icon {
		transform: translateY(-1px);
		transition: transform 0.08s;
	}
	.live-link:hover .live-link-icon {
		transform: translateY(-2.5px) translateX(2px);
	}

	h2 {
		@apply text-[34px] font-euclid font-medium leading-[48px];
	}
	h3 {
		@apply text-[24px] font-euclid font-normal leading-[48px];
	}
	p {
		@apply text-[18px] font-euclid font-light leading-[30px];
	}
	figcaption {
		@apply font-euclid font-light text-base mt-2;
	}
	strong {
		@apply font-euclid font-medium;
	}
	.list-custom {
		@apply text-[18px] font-euclid font-light leading-[30px] list-disc pl-5 space-y-2;
	}
	/* Same as .list-custom, numbered */
	.list-custom-ordered {
		@apply text-[18px] font-euclid font-light leading-[30px] list-decimal pl-6 space-y-2;
	}
</style>
