<script>
	import WorkBack from '../../../components/WorkBack.svelte';
	import WorkNav from '../../../components/WorkNav.svelte';
	import WorkFooter from '../../../components/WorkFooter.svelte';
	import PageSpeedGauge from '../../../components/PageSpeedGauge.svelte';
	import SvelteSeo from 'svelte-seo';

	let LightGallery = $state();
	if (typeof window !== 'undefined') {
		import('../../../components/LightGallery.svelte').then((module) => {
			LightGallery = module.default;
		});
	}

	const links = [
		{ id: '#discovery', title: 'Discovery', ariaLabel: 'Discovery' },
		{ id: '#brand', title: 'Brand Direction', ariaLabel: 'Brand Direction' },
		{ id: '#design', title: 'Structure & Design', ariaLabel: 'Structure & Design' },
		{ id: '#build', title: 'Breakdance', ariaLabel: 'Breakdance' },
		{ id: '#sprint2', title: 'Merchant pages', ariaLabel: 'Merchant pages' },
		{ id: '#results', title: 'Results', ariaLabel: 'Results' },
		{ id: '#reflections', title: 'Reflections', ariaLabel: 'Reflections' }
	];

	const seoTitle = 'Subsea.tools: A One-Stop Shop for Subsea Operations | Case study';
	const seoDescription =
		'Brand direction, web design and a WooCommerce catalogue in Breakdance for Subsea.tools, the new umbrella brand from Braaten Technology in Stavanger.';
	const pageUrl = 'https://www.andersra.com/work/subsea-tools';
	const ogImage = 'https://www.andersra.com/images/thumbs/subsea-thumb-800x500@2x.webp';

	// Status badges in the plan / results cards
	const shipBadge =
		'inline-block rounded-full bg-slate-100 px-2.5 text-xs leading-5 font-medium tracking-wide text-slate-600 align-middle';
	const propBadge =
		'inline-block rounded-full border border-dashed border-red-400 bg-red-100 px-2.5 text-xs leading-5 font-medium tracking-wide text-red-600 align-middle';

	// Logged hours by phase (2025), shown as a stacked bar
	const hours = [
		{ label: 'Build 40 h', width: '58.8%', colour: 'bg-slate-700' },
		{ label: 'Brand & design 14 h', width: '20.6%', colour: 'bg-slate-500' },
		{ label: 'Setup & hosting 9 h', width: '13.2%', colour: 'bg-slate-350' },
		{ label: 'Research & structure 4 h', width: '5.9%', colour: 'bg-slate-150' },
		{ label: 'Launch 1 h', width: '1.5%', colour: 'bg-red-400' }
	];

	// Client brand palette: content shown in the Final Direction block only
	const palette = [
		{ hex: '#0B1F2A', text: 'Deep Navy. Backgrounds and hero', border: true },
		{ hex: '#0E3B2E', text: 'Sea Pine. Accent surfaces', border: true },
		{ hex: '#32424A', text: 'Steel Grey. Lines, icons, secondary buttons', border: true },
		{ hex: '#F3F7F9', text: 'Foam White. Cards and light pages' },
		{ hex: '#F46A2E', text: 'Beacon Orange. A sparse safety accent' },
		{ hex: '#F9C80E', text: 'Subsea Yellow. Calls to action and tags' }
	];

	// Client brand fonts, loaded only on this page and subset to the sample text
	const fontSampleText = [
		'IBM PLEX SANS · HEADLINES',
		'One stop shop for subsea operations',
		'INTER · BODY TEXT',
		'Specs, descriptions and everything a buyer reads closely.',
		'JETBRAINS MONO · LABELS AND SPECS',
		'CATEGORIES / LOAD CELL MONITORING'
	].join('');
	const brandFontsHref =
		'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&family=Inter:wght@400&family=JetBrains+Mono:wght@400&display=swap&text=' +
		encodeURIComponent([...new Set(fontSampleText)].join(''));

	const cssSample = `:root {
  --color-deep-navy:     #0B1F2A; /* main background / hero */
  --color-sea-pine:      #0E3B2E; /* accent surfaces */
  --color-steel-grey:    #32424A; /* UI lines, icons */
  --color-foam-white:    #F3F7F9; /* light backgrounds, cards */
  --color-beacon-orange: #F46A2E; /* sparse "safety" accent */
  --color-subsea-yellow: #F9C80E; /* tags / alerts */
  --container-lg: 896px;
  --container-xl: 1120px;
}

.h1-display {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: clamp(2.8rem, 8vw, 4rem);
}`;

	// Tall screenshots are cropped to a portrait card; the zoom shows the full page
	const thumb = 'block w-full aspect-[1/2] object-cover object-top rounded-md shadow-custom';
</script>

<SvelteSeo
	title={seoTitle}
	description={seoDescription}
	canonical={pageUrl}
	keywords="Anders Rådal, Subsea.tools, Braaten Technology, Stavanger, Brand direction, Web design, WooCommerce, Breakdance, WordPress, Case study, UX, UI, Design, Portfolio, Oslo, Norway"
	openGraph={{
		title: seoTitle,
		description: seoDescription,
		images: [
			{
				url: ogImage,
				width: 1600,
				height: 1000,
				alt: 'Subsea.tools front page on a desktop monitor'
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
	<!-- Client brand fonts for the Final Direction samples (stylesheet is linked in that section) -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

{#if LightGallery}
	<LightGallery />
{/if}

<header class="relative top-0">
	<WorkBack />
</header>

<article class="mx-auto font-euclid text-slate-600 attachLightGallery">
	<!-- Hero title -->
	<section class="md:max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
		<div>
			<h1 class="text-[3rem] md:text-7xl font-euclid font-bold text-slate-600 py-4">
				Subsea.tools
				<span class="text-[2rem] md:text-4xl font-euclid font-medium text-slate-500 py-4"
					><br />A One-Stop Shop for Subsea Operations</span
				>
			</h1>
		</div>
	</section>

	<!-- Intro -->
	<section
		class="max-w-6xl flex flex-col-reverse md:flex-row mx-auto justify-center pb-10 md:pb-20"
	>
		<div class="md:flex-1 md:max-w-xl p-4">
			<h2 class="pb-2">Introducing Subsea.tools</h2>
			<ul class="text-[18px] font-euclid font-light leading-[30px] pr-1 space-y-5">
				<li>
					Braaten Technology in Stavanger builds subsea weight-control equipment. Its flagship, the
					Subsea Load Monitor (SLM), gives real-time weight control at depth without a lift wire
					from the surface. Subsea.tools is their new umbrella brand: one shop where offshore buyers
					find, compare and request subsea equipment, starting with Braaten's own products.
				</li>
				<li>
					<strong class="font-semibold">Starting point:</strong> A strong domain name, three products
					and no website. Founders Martin Johansen and Trygve Aleksander Årdal wanted something real to
					show at a subsea symposium in Brazil in late November.
				</li>
				<li>
					<strong class="font-semibold">Project Brief & Objectives:</strong> Phase 1, a professional storefront:
					a modern front page, a WooCommerce product catalogue with categories and downloadable datasheets,
					and a quote request on every product. Phase 2, optional: open the shop to approved suppliers
					as a marketplace. Built so that a small team can add products without me.
				</li>
				<li>
					<strong class="font-semibold">My Role:</strong> End to end: discovery workshop, competitor review,
					brand direction and stylescapes, sitemap, UX/UI in Figma, development in WordPress with WooCommerce
					and Breakdance, and launch.
				</li>
				<li>
					<strong class="font-semibold">Key Tools & Timeline:</strong> Figma, Notion, WordPress, WooCommerce,
					Breakdance, one.com. Pitched in June 2025, kickoff workshop in early October, then designed
					and built between 26 October and 11 December 2025, part-time, with 68 logged hours. About, Contact
					and For Merchants were created later.
				</li>
			</ul>
		</div>
		<figure class="md:flex-2 md:max-w-xl m-4">
			<div class="flex items-center justify-center h-full">
				<img
					src="/images/subsea-tools/subsea-intro-mockup.webp"
					srcset="/images/subsea-tools/subsea-intro-mockup.webp 576w, /images/subsea-tools/subsea-intro-mockup-760.webp 760w, /images/subsea-tools/subsea-intro-mockup@2x.webp 1152w"
					sizes="(min-width: 768px) 576px, calc(100vw - 32px)"
					width="576"
					height="457"
					fetchpriority="high"
					class="zooming-white-bg"
					alt="The live Subsea.tools front page shown on a desktop monitor: 'One stop shop for subsea operations' over a dark underwater scene, with a yellow See Products button"
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
		<div class="flex flex-col md:flex-row gap-8">
			<div class="flex-1 min-w-0 p-7 rounded-lg border border-zinc-200 flex flex-col gap-4">
				<span class="text-sm font-medium tracking-wide text-slate-400"
					>THE PLAN I SENT MARTIN & TRYGVE · 30 OCT</span
				>
				<ol class="list-custom-ordered">
					<li>Sitemap and three stylescapes to land one direction</li>
					<li>A shop demo ready by 20 November</li>
					<li>Front page, categories and product pages first</li>
					<li>About, Contact and For Merchants in the next round</li>
				</ol>
				<blockquote>
					<p class="italic">
						"I'll start with the front page, categories and product pages so it's ready as fast as
						possible. Then I'll take About, Contact and For Merchants in the next round."
					</p>
				</blockquote>
				<span class="text-sm font-light text-slate-400"
					>From my mail to the founders, 30 Oct 2025 (translated)</span
				>
			</div>
			<div class="flex-1 min-w-0 p-7 rounded-lg bg-zinc-100 flex flex-col gap-4">
				<span class="text-sm font-medium tracking-wide text-slate-400">WHAT ACTUALLY HAPPENED</span>
				<ol class="list-custom-ordered">
					<li>
						Two stylescapes became three, and one direction was picked in a single round
						<span class={shipBadge}>Done 10 Nov</span>
					</li>
					<li>
						The demo deadline moved from 20 to 25 November <span class={propBadge}>Moved</span>
					</li>
					<li>
						Three rounds of Figma drafts in three days <span class={shipBadge}>Done 18 Nov</span>
					</li>
					<li>
						Front page, shop, two categories and three product pages, behind a password for the trip
						<span class={shipBadge}>Shipped 11 Dec</span>
					</li>
					<li>
						About, Contact and For Merchants <span class={shipBadge}>Shipped 2026</span>
					</li>
				</ol>
			</div>
		</div>

		<ol class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			<li class="p-5 rounded-lg bg-zinc-100 flex flex-col gap-2">
				<span class="text-sm font-medium text-red-500">01 · 26.06–01.07</span>
				<span class="text-lg font-medium">Pitch</span>
				<span class="text-base font-light text-slate-500"
					>Competitor research, stack choice and a phased proposal.</span
				>
			</li>
			<li class="p-5 rounded-lg bg-zinc-100 flex flex-col gap-2">
				<span class="text-sm font-medium text-red-500">02 · 03.10–10.11</span>
				<span class="text-lg font-medium">Discovery & direction</span>
				<span class="text-base font-light text-slate-500"
					>Kickoff workshop, competitor review, sitemap, three stylescapes and a decision.</span
				>
			</li>
			<li class="p-5 rounded-lg bg-zinc-100 flex flex-col gap-2">
				<span class="text-sm font-medium text-red-500">03 · 11.11–18.11</span>
				<span class="text-lg font-medium">Setup & design</span>
				<span class="text-base font-light text-slate-500"
					>Hosting, Breakdance, an imagery brief and three rounds of drafts.</span
				>
			</li>
			<li class="p-5 rounded-lg bg-zinc-100 flex flex-col gap-2">
				<span class="text-sm font-medium text-red-500">04 · 21.11–25.11</span>
				<span class="text-lg font-medium">Build</span>
				<span class="text-base font-light text-slate-500"
					>Front page, shop, categories and product pages behind a password.</span
				>
			</li>
			<li class="p-5 rounded-lg bg-zinc-100 flex flex-col gap-2">
				<span class="text-sm font-medium text-red-500">05 · 11.12–19.12</span>
				<span class="text-lg font-medium">Launch</span>
				<span class="text-base font-light text-slate-500"
					>Password removed, then two products marked "coming soon" at the CEO's request.</span
				>
			</li>
			<li class="p-5 rounded-lg bg-zinc-100 flex flex-col gap-2">
				<span class="text-sm font-medium text-red-500">06 · 2026</span>
				<span class="text-lg font-medium">Sprint 2</span>
				<span class="text-base font-light text-slate-500"
					>About, Contact and For Merchants, with one request form for the whole site.</span
				>
			</li>
		</ol>

		<div class="flex flex-col gap-3">
			<span class="text-base font-medium"
				>68 logged hours in 2025, more than half of them building</span
			>
			<div
				class="flex h-3.5 rounded-full overflow-hidden"
				role="img"
				aria-label="Logged hours by phase: build 40, brand and design 14, setup and hosting 9, research and structure 4, launch 1"
			>
				{#each hours as part (part.label)}
					<span class={part.colour} style="width: {part.width}"></span>
				{/each}
			</div>
			<ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm font-light text-slate-500">
				{#each hours as part (part.label)}
					<li class="flex items-center gap-2">
						<span class="size-2.5 rounded-xs {part.colour}"></span>{part.label}
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Discovery (dark) -->
	<section
		id="discovery"
		class="pageSection bg-slate-800/95 text-zinc-150 pt-16 md:pt-28 pb-16 md:pb-24 px-4"
	>
		<div class="mx-auto sm:max-w-2xl">
			<h2 class="pb-2">Discovery: One Shop Instead of Five Phone Calls</h2>
			<h3>A workshop to kick off</h3>
			<p class="pb-2">
				In early October I ran a kickoff workshop with Martin, with printed sheets for a
				user-centred design canvas, personality sliders, How Might We questions and a brand pyramid.
				His word for the gap was a "one stop shop": nobody in the industry offers one, because
				engineers, buyers and suppliers each sit on their own island. Subsea.tools should be that
				place, and the name is exactly what buyers type into Google.
			</p>
			<h3>What the competitors do</h3>
			<p class="pb-2">
				I went through Norwegian Offshore Rental, Ashtead Technology, RTS, Pronomic, Envirent and
				IKM Subsea, which already runs subseatools.no. Almost all of them sell through a catalogue
				and a "request a quote" button. They speak only to oil and gas, while Braaten also saw
				demand in offshore wind, aquaculture and subsea mining. And the tone is corporate, where the
				founders wanted to come across as human and direct.
			</p>
		</div>
		<div class="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
			<figure>
				<img
					src="/images/subsea-tools/competitor-ikm.webp"
					width="1000"
					height="1249"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-dark-bg"
					alt="IKM Subsea's subseatools.no front page: 'Cutting Edge Solutions' over a deep blue background with orange tool categories"
				/>
				<figcaption class="text-zinc-150">
					IKM Subsea's subseatools.no: the near-namesake.
				</figcaption>
			</figure>
			<figure>
				<img
					src="/images/subsea-tools/competitor-nor.webp"
					width="1000"
					height="1250"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-dark-bg"
					alt="Norwegian Offshore Rental front page in bright blue: 'Equipment you can count on. People you can trust.'"
				/>
				<figcaption class="text-zinc-150">
					Norwegian Offshore Rental: catalogue plus quote request.
				</figcaption>
			</figure>
			<figure>
				<img
					src="/images/subsea-tools/competitor-rts.webp"
					width="1000"
					height="1250"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-dark-bg"
					alt="Rental Technology and Services front page"
				/>
				<figcaption class="text-zinc-150">RTS: built for oil and gas buyers only.</figcaption>
			</figure>
		</div>

		<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
			<h3>Mapping the buyer</h3>
			<p>
				In the workshop I worked through the questions from a user-centred design canvas with
				Martin: what drives the engineers and buyers who would use the shop, what they fear, and
				what they need. Trust came out on top: when a supplier fails to deliver on a large subsea
				project, the client pays for the downtime.
			</p>
		</div>
		<ol class="max-w-4xl mx-auto mt-8 flex flex-col border-b border-zinc-700">
			<li class="flex flex-col sm:flex-row gap-1 sm:gap-6 py-5 border-t border-zinc-700">
				<span class="sm:w-32 sm:shrink-0 text-sm font-medium text-red-350">Motivation</span>
				<span class="text-lg font-light"
					>Save time and money, and find suppliers they can rely on.</span
				>
			</li>
			<li class="flex flex-col sm:flex-row gap-1 sm:gap-6 py-5 border-t border-zinc-700">
				<span class="sm:w-32 sm:shrink-0 text-sm font-medium text-red-350">Fears</span>
				<span class="text-lg font-light"
					>Equipment that fails, late or wrong deliveries, and suppliers who disappear.</span
				>
			</li>
			<li class="flex flex-col sm:flex-row gap-1 sm:gap-6 py-5 border-t border-zinc-700">
				<span class="sm:w-32 sm:shrink-0 text-sm font-medium text-red-350">Needs</span>
				<span class="text-lg font-light">Trust, stability and a professional first impression.</span
				>
			</li>
			<li class="flex flex-col sm:flex-row gap-1 sm:gap-6 py-5 border-t border-zinc-700">
				<span class="sm:w-32 sm:shrink-0 text-sm font-medium text-red-350">Answer</span>
				<span class="text-lg font-light"
					>One place with clear specs, downloadable datasheets, and one engineering contact who
					handles the dialogue with every supplier.</span
				>
			</li>
		</ol>
		<div class="mx-auto sm:max-w-2xl mt-10">
			<p>
				We also landed on three audiences, not one: buyers, the suppliers who would list their
				products later, and the partners and clients they meet at conventions in Norway and Brazil.
			</p>
		</div>
	</section>

	<!-- Brand direction -->
	<section id="brand" class="pageSection py-16 md:py-28 px-4">
		<div class="mx-auto sm:max-w-2xl">
			<h2 class="pb-2">Brand Direction: Hel Ved</h2>
			<p>
				Martin described the way he works as <em>hel ved</em>, a Norwegian expression for someone
				solid and genuine all the way through. In the workshop we talked the brand through
				personality sliders: elite, but reaching a little toward mass appeal; serious, but pulled a
				little toward playful; and leaning rebel, as challengers in a conservative industry without
				going all the way.
			</p>
		</div>
		<div
			class="mx-auto sm:max-w-2xl mt-10 flex flex-col gap-7"
			role="img"
			aria-label="Personality sliders: mostly elite with a little mass appeal, serious with a pull toward playful, leaning rebel"
		>
			{#each [['Conventional', 'Rebel', '65%'], ['Elite', 'Mass appeal', '30%'], ['Serious', 'Playful', '35%']] as [left, right, position] (left)}
				<div class="flex flex-col gap-2.5">
					<div class="flex justify-between text-sm font-medium">
						<span>{left}</span><span>{right}</span>
					</div>
					<div class="relative h-1.5 rounded-full bg-zinc-200">
						<span
							class="absolute -top-[7px] -ml-2.5 size-5 rounded-full bg-slate-600"
							style="left: {position}"
						></span>
					</div>
				</div>
			{/each}
		</div>

		<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
			<h3>Three stylescapes, one round</h3>
			<p>
				I started with two stylescapes, then added a third on 28 October: lighter, more minimal and
				more expressive, because the founders wanted to be serious rebels who challenge the industry
				rather than blend in. On 30 October I sent all three with the sitemap, so they could react
				to something concrete before anything was built.
			</p>
		</div>
		<div class="max-w-6xl mx-auto mt-10 flex flex-col gap-12">
			<figure>
				<img
					src="/images/subsea-tools/stylescape-a-hel-ved.webp"
					width="2008"
					height="458"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-white-bg"
					alt="Stylescape A, Hel ved: deep navy background, a subsea lift render, the line 'One-stop shop for subsea-operasjoner' and a product card for a load cell"
				/>
				<figcaption>
					<strong>A · Hel ved / Classic Offshore.</strong> Safe, industrial and solid: deep navy, clean
					type and warm details. The coordinates in the corner point to Sletter, a small island outside
					Stenebråten.
				</figcaption>
			</figure>
			<figure>
				<img
					src="/images/subsea-tools/stylescape-b-rebel-precision.webp"
					width="2008"
					height="458"
					loading="lazy"
					class="w-full h-auto rounded-md zooming-white-bg"
					alt="Stylescape B, Rebel Precision: dark, technical and high-contrast"
				/>
				<figcaption>
					<strong>B · Rebel Precision / Modern Ocean Tech.</strong> Dark, technical and energetic.
				</figcaption>
			</figure>
			<figure>
				<img
					src="/images/subsea-tools/stylescape-c-nordic-naval.webp"
					width="1992"
					height="440"
					loading="lazy"
					class="w-full h-auto rounded-md border border-zinc-200 zooming-white-bg"
					alt="Stylescape C, Nordic Naval Minimal: light and Nordic, close to a classic webshop"
				/>
				<figcaption>
					<strong>C · Nordic Naval Minimal / Whitecap.</strong> Light and Nordic, closer to a classic
					webshop.
				</figcaption>
			</figure>
		</div>
		<div class="mx-auto sm:max-w-2xl mt-14">
			<blockquote class="p-6 rounded-lg bg-zinc-100 flex flex-col gap-2.5">
				<p class="italic">
					"I've given Anders the go-ahead based on 'Hel ved', which you liked, Trygve."
				</p>
				<span class="text-sm font-light text-slate-400"
					>Martin Johansen to Trygve Aleksander Årdal, 10 Nov 2025 (translated)</span
				>
			</blockquote>
			<p class="pt-6">
				It was a good choice: the direction closest to how they describe themselves, and solid
				enough for buyers who need to trust the equipment. With one clear decision, the fonts and
				colours could go straight on to their own designer and into the build.
			</p>
		</div>
	</section>

	<!-- Final direction (dark) -->
	<section class="bg-slate-800/95 text-zinc-150 py-16 md:py-28 px-4">
		<div class="mx-auto sm:max-w-2xl">
			<h2 class="pb-2">The Final Direction: Clean + Heritage</h2>
			<p>
				"Hel ved" carried straight into the build: mature, robust, reliable and precise. A clean
				industrial look with warm details, and safety colours used only where something needs
				attention.
			</p>
		</div>
		<div class="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
			<div>
				<h3>Feeling</h3>
				<p>
					Calm authority from deep navy, with underwater photography for depth. Trust comes from
					order: clear specs, real renders and no clutter.
				</p>
			</div>
			<div>
				<h3>Typography</h3>
				<p>
					IBM Plex Sans for headlines, with an engineered feel. Inter for body text. JetBrains Mono
					for small technical labels and specs.
				</p>
			</div>
			<div>
				<h3>Logo</h3>
				<p>
					A simple wordmark for now. The full logo was still being decided while the stand for
					Brazil was printed.
				</p>
			</div>
		</div>
		<div class="max-w-6xl mx-auto mt-16 flex flex-col gap-5">
			<h3>Colour</h3>
			<!-- Client palette: brand content, scoped to this block -->
			<ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
				{#each palette as colour (colour.hex)}
					<li class="flex flex-col gap-2">
						<span
							class="h-22 rounded-md {colour.border ? 'border border-zinc-700' : ''}"
							style="background: {colour.hex}"
						></span>
						<span class="text-sm font-medium text-zinc-100">{colour.hex}</span>
						<span class="text-sm font-light text-zinc-300">{colour.text}</span>
					</li>
				{/each}
			</ul>
			<!-- Client fonts: stylesheet in the body so it only loads with this page and doesn't block the first paint -->
			<link rel="stylesheet" href={brandFontsHref} />
			<div
				class="mt-6 px-8 py-10 rounded-lg flex flex-wrap gap-x-12 gap-y-6 items-end"
				style="background: #0B1F2A; color: #FFFFFF"
			>
				<div class="basis-full flex flex-col gap-2.5">
					<span
						class="text-xs tracking-widest"
						style="font-family: 'JetBrains Mono', monospace; color: #9FB0B9"
						>IBM PLEX SANS · HEADLINES</span
					>
					<span
						class="text-4xl md:text-5xl leading-tight"
						style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 600"
						>One stop shop for subsea operations</span
					>
				</div>
				<div class="flex-1 basis-80 flex flex-col gap-2.5">
					<span
						class="text-xs tracking-widest"
						style="font-family: 'JetBrains Mono', monospace; color: #9FB0B9">INTER · BODY TEXT</span
					>
					<span
						class="text-lg leading-relaxed max-w-md"
						style="font-family: Inter, sans-serif; color: #F3F7F9"
						>Specs, descriptions and everything a buyer reads closely.</span
					>
				</div>
				<div class="flex-1 basis-80 flex flex-col gap-2.5">
					<span
						class="text-xs tracking-widest"
						style="font-family: 'JetBrains Mono', monospace; color: #9FB0B9"
						>JETBRAINS MONO · LABELS AND SPECS</span
					>
					<span
						class="text-base tracking-widest"
						style="font-family: 'JetBrains Mono', monospace; color: #F9C80E"
						>CATEGORIES / LOAD CELL MONITORING</span
					>
				</div>
			</div>
		</div>
	</section>

	<!-- Structure & design -->
	<section id="design" class="pageSection py-16 md:py-28 px-4">
		<div class="mx-auto sm:max-w-2xl">
			<h2 class="pb-2">Structure & Design: Two Clicks to Any Product</h2>
			<h3>Sitemap 1.0</h3>
			<p>
				The sitemap kept the shop shallow: from the front page a buyer reaches a category and then a
				product. Every product page answers the same three questions: what it is, where the
				datasheet is, and who to ask. The sitemap also set the sprint split. Everything a buyer in
				Brazil would click came first; About, Contact and For Merchants came second.
			</p>
		</div>
		<figure class="mx-auto md:max-w-5xl mt-10">
			<img
				src="/images/subsea-tools/sitemap-1-0.webp"
				width="1462"
				height="1247"
				loading="lazy"
				class="w-full h-auto rounded-md shadow-custom zooming-white-bg"
				alt="Subsea.tools sitemap 1.0: landing page linked to category pages, sub-category, product page, About, Contact and For Merchants, each with its sections listed"
			/>
			<figcaption>Sitemap 1.0, sent with the stylescapes on 30 October.</figcaption>
		</figure>

		<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
			<h3>Three drafts in three days</h3>
			<p>
				Between 16 and 18 November I went through three rounds in Figma of the front page, the
				category overview, a category page and a product page. The hero went dark and underwater,
				with an overlay so the headline stays readable. The categories became image cards, and the
				Subsea Load Monitor became the featured product.
			</p>
		</div>
		<div class="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
			<figure class="mx-auto w-full max-w-[720px]">
				<img
					src="/images/subsea-tools/draft1-landing.webp"
					width="720"
					height="2288"
					loading="lazy"
					class="{thumb} zooming-white-bg"
					alt="Front page, first Figma draft"
				/>
				<figcaption>Figma design: front page, first draft, 16 Nov</figcaption>
			</figure>
			<figure class="mx-auto w-full max-w-[720px]">
				<img
					src="/images/subsea-tools/draft4-landing.webp"
					width="720"
					height="2273"
					loading="lazy"
					class="{thumb} zooming-white-bg"
					alt="Front page, final Figma draft"
				/>
				<figcaption>Figma design: front page, final draft, the one I built</figcaption>
			</figure>
			<figure class="mx-auto w-full max-w-[720px]">
				<img
					src="/images/subsea-tools/draft4-product.webp"
					width="720"
					height="2165"
					loading="lazy"
					class="{thumb} zooming-white-bg"
					alt="Product page draft for the SLM 20 with gallery, specs, request and datasheet buttons, video and mechanical specifications"
				/>
				<figcaption>Figma design: product page, final draft</figcaption>
			</figure>
		</div>

		<div class="max-w-6xl mx-auto mt-14 flex flex-col md:flex-row gap-12 items-start">
			<div class="md:flex-1 min-w-0">
				<h3 class="pb-2">A product page built for engineers</h3>
				<ol class="list-custom-ordered">
					<li>
						<strong>Three-quarter render first.</strong> The gallery opens on an angle that shows the
						front and side at once.
					</li>
					<li>
						<strong>Key specs beside the image.</strong> Capacity, accuracy and depth rating, before any
						marketing copy.
					</li>
					<li>
						<strong>Two actions.</strong> "Send request" and "Data sheet", nothing else competing.
					</li>
					<li><strong>Related products and FAQ</strong> to keep a buyer in the shop.</li>
				</ol>
			</div>
			<div class="md:flex-[1.5] min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
				<img
					src="/images/subsea-tools/category-load-cells.webp"
					width="720"
					height="1246"
					loading="lazy"
					class="w-full h-auto max-w-[720px] rounded-md shadow-custom zooming-white-bg"
					alt="Load cells category page: dark hero, filter sidebar and a grid of load cell product cards"
				/>
				<img
					src="/images/subsea-tools/all-categories.webp"
					width="720"
					height="1151"
					loading="lazy"
					class="w-full h-auto max-w-[720px] rounded-md shadow-custom zooming-white-bg"
					alt="All products page with category cards and a product grid"
				/>
			</div>
		</div>

		<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
			<h3>Renders were the real dependency</h3>
			<p>
				Good renders would decide whether the shop looked premium or homemade, so on 13 November I
				briefed Eirik, Braaten's engineer: SLA, SLM and MasterBlaster on a neutral background,
				front, side and a three-quarter view, plus hero material with depth and particles. I
				converted everything to WebP.
			</p>
		</div>
		<figure class="max-w-6xl mx-auto mt-10">
			<div class="flex flex-wrap gap-4 items-stretch">
				<div
					class="flex-[1_1_140px] min-w-0 p-4 rounded-lg border border-zinc-200 flex items-center justify-center"
				>
					<img
						src="/images/subsea-tools/render-slm-34.webp"
						width="263"
						height="421"
						loading="lazy"
						class="max-w-full max-h-[260px] w-auto h-auto zooming-white-bg"
						alt="SLM render, three-quarter view"
					/>
				</div>
				<div
					class="flex-[1_1_140px] min-w-0 p-4 rounded-lg border border-zinc-200 flex items-center justify-center"
				>
					<img
						src="/images/subsea-tools/render-slm-side.webp"
						width="400"
						height="640"
						loading="lazy"
						class="max-w-full max-h-[260px] w-auto h-auto zooming-white-bg"
						alt="SLM render, side view"
					/>
				</div>
				<div
					class="flex-[1_1_140px] min-w-0 p-4 rounded-lg border border-zinc-200 flex items-center justify-center"
				>
					<img
						src="/images/subsea-tools/render-slm-front.webp"
						width="400"
						height="640"
						loading="lazy"
						class="max-w-full max-h-[260px] w-auto h-auto zooming-white-bg"
						alt="SLM render, front view"
					/>
				</div>
				<div
					class="flex-[2_1_300px] min-w-0 p-4 rounded-lg border border-zinc-200 flex items-center justify-center"
				>
					<img
						src="/images/subsea-tools/render-masterblaster.webp"
						width="1138"
						height="640"
						loading="lazy"
						class="max-w-full max-h-[260px] w-auto h-auto zooming-white-bg"
						alt="MasterBlaster cleaning tool render"
					/>
				</div>
				<div
					class="flex-[1_1_140px] min-w-0 p-4 rounded-lg border border-zinc-200 flex items-center justify-center"
				>
					<img
						src="/images/subsea-tools/render-sla.webp"
						width="360"
						height="640"
						loading="lazy"
						class="max-w-full max-h-[260px] w-auto h-auto zooming-white-bg"
						alt="SLA render"
					/>
				</div>
			</div>
			<figcaption>
				SLM from three angles, the MasterBlaster and the SLA. Renders by Eirik Nelvik, Braaten
				Technology.
			</figcaption>
		</figure>
		<div class="max-w-6xl mx-auto mt-10">
			<div
				class="md:max-w-[50%] p-6 rounded-lg bg-red-100 border border-dashed border-red-300 flex flex-col gap-2.5"
			>
				<span class="{propBadge} self-start">Parked for phase 2</span>
				<p>
					An interactive 3D model buyers can rotate and click for part details, built from a
					simplified CAD export with glTF and Three.js. The right idea, but the wrong moment:
					getting the shop live came first.
				</p>
			</div>
		</div>
	</section>

	<!-- Build (dark) -->
	<section id="build" class="pageSection bg-slate-800/95 text-zinc-150 py-16 md:py-28 px-4">
		<div class="mx-auto sm:max-w-2xl">
			<h2 class="pb-2">Building with WooCommerce and Breakdance</h2>
			<h3>A real catalogue, in catalogue mode</h3>
			<p class="pb-2">
				WooCommerce gives Braaten a real product catalogue with categories, attributes and
				datasheets, and it can grow into a marketplace later without a re-platform. Version one has
				no prices or cart, just "Send request" on every product. That matches how the industry buys,
				and leaves room for prices on off-the-shelf items later, which the founders wanted.
			</p>
			<h3>Why Breakdance</h3>
			<p class="pb-2">
				I chose Breakdance for its tight WooCommerce integration and its focus on lean, fast output.
				It also keeps the site simple for Braaten's team to update on their own later.
			</p>
			<p class="pb-2">
				Subsea was my first build in it. I had expected a library of ready-made blocks and found
				almost none, and I did not want to set padding by hand in every panel, so I brought my own
				utility classes into it.
			</p>
			<h3>Same CSS framework, new palette</h3>
			<p class="pb-6">
				I reused the utility-first framework I built for Autentisitet: design tokens as CSS custom
				properties, a flex row system and fluid type with clamp(). Moving it to Subsea meant
				swapping the palette and fonts, not writing new CSS.
			</p>
			<pre
				class="overflow-x-auto rounded-lg bg-slate-850 px-6 py-5 font-mono text-sm leading-6 text-zinc-150"><code
					>{cssSample}</code
				></pre>
		</div>

		<div class="max-w-6xl mx-auto mt-16 flex flex-col gap-4">
			<h3 class="sm:max-w-2xl sm:mx-auto w-full">Built in Breakdance</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<figure>
					<img
						src="/images/subsea-tools/category-hero.webp"
						width="1440"
						height="650"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-dark-bg"
						alt="Built category hero: 'Load cells' over a dark underwater scene with category tabs"
					/>
					<figcaption class="text-zinc-150">Category hero, 23 November.</figcaption>
				</figure>
				<figure class="w-full max-w-[800px]">
					<img
						src="/images/subsea-tools/live-slm.webp"
						width="800"
						height="500"
						loading="lazy"
						class="w-full h-auto rounded-md zooming-dark-bg"
						alt="The live SLM product page: a red and steel load monitor render in a gallery, with main specs, a Send request button and a Data sheet link on a white background"
					/>
					<figcaption class="text-zinc-150">The SLM product page, live.</figcaption>
				</figure>
			</div>
		</div>

		<div class="mx-auto sm:max-w-2xl mt-16">
			<h3>An invite-only demo for Brazil</h3>
			<p class="pb-2">
				Until launch the shop sat behind a password and a noindex tag, so Martin could show it at
				the symposium in Brazil without Google indexing a half-finished shop. Getting the password
				protection to work on the host took a night of server errors on 25 November. The password
				came off on 11 December.
			</p>
			<h3>Hosting reality</h3>
			<p>
				The domain still held an abandoned one.com page-builder site. I moved it into an /old/
				folder, installed WordPress by hand and spent an evening on DNS and database errors before
				the build could start. I'd budget for that next time.
			</p>
		</div>
	</section>

	<!-- Sprint 2 -->
	<section id="sprint2" class="pageSection py-16 md:py-28 px-4">
		<div class="mx-auto sm:max-w-2xl">
			<h2 class="pb-2">Sprint 2: The People Behind the Shop</h2>
			<p class="pb-2">
				With the shop live, the next step was the company pages: About, Contact and For Merchants.
			</p>
			<p>
				Discovery had shown that trust decides a purchase in this industry. So these pages put names
				and faces on the shop, and give buyers one place to ask.
			</p>
		</div>
		<div class="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
			<figure class="flex flex-col gap-3 w-full max-w-[800px] mx-auto">
				<img
					src="/images/subsea-tools/live-about.webp"
					width="800"
					height="2500"
					loading="lazy"
					class="{thumb} zooming-white-bg"
					alt="About page: hero 'Built by people who work below the surface', the story of the company, four key facts, three values and a team section with portraits"
				/>
				<figcaption class="flex flex-col gap-1.5">
					<span class="text-lg font-medium">About</span>
					<span class="text-slate-500"
						>"Built by people who work below the surface." The story from the first SLM idea in
						2016, the values under the heading "Hel ved, all the way through", and five people
						buyers can call by name.</span
					>
				</figcaption>
			</figure>
			<figure class="flex flex-col gap-3 w-full max-w-[800px] mx-auto">
				<img
					src="/images/subsea-tools/live-contact.webp"
					width="800"
					height="1000"
					loading="lazy"
					class="{thumb} zooming-white-bg"
					alt="Contact page: hero 'Talk to an engineer, not a call centre', a request form beside a dark card with email, phone and address, and a named contact below"
				/>
				<figcaption class="flex flex-col gap-1.5">
					<span class="text-lg font-medium">Contact</span>
					<span class="text-slate-500"
						>"Talk to an engineer, not a call centre." One request form for the whole site, with a
						topic and the product filled in from the page the buyer came from, next to a direct
						email, a phone number and a named contact.</span
					>
				</figcaption>
			</figure>
			<figure class="flex flex-col gap-3 w-full max-w-[800px] mx-auto">
				<img
					src="/images/subsea-tools/live-for-merchants.webp"
					width="800"
					height="1500"
					loading="lazy"
					class="{thumb} zooming-white-bg"
					alt="For Merchants page: hero 'Put your equipment in front of subsea buyers', three reasons to list, four steps from application to first enquiry, requirements and an FAQ"
				/>
				<figcaption class="flex flex-col gap-1.5">
					<span class="text-lg font-medium">For Merchants</span>
					<span class="text-slate-500"
						>The first step toward the marketplace: four steps from application to first enquiry,
						and clear requirements for suppliers.</span
					>
				</figcaption>
			</figure>
		</div>
		<div class="mx-auto sm:max-w-2xl mt-16 md:mt-20">
			<h3>A marketplace without the junk</h3>
			<p>
				Martin's brief for suppliers was to be "Amazon for subsea tools" without what Amazon also
				attracts. On the page that became four plain requirements: a registered company, a named
				contact who answers quickly, a datasheet and real specs for every product, and accepted
				merchant terms. Every listing is reviewed before it goes live.
			</p>
		</div>
	</section>

	<!-- Results -->
	<section id="results" class="pageSection py-16 md:py-28 px-4 bg-slate-100/20">
		<div class="mx-auto sm:max-w-2xl">
			<h2 class="pb-2">Results</h2>
			<p>
				Subsea.tools went public on 11 December 2025, inside the estimate from the June proposal: a
				front page, a shop, two categories (Load Cells and Cleaning Technology) and three products,
				each with specs, a gallery and a quote request. On 19 December Trygve asked to mark two of
				the three products "coming soon": he did not want to market products before they could be
				delivered.
			</p>
			<h3 class="pt-4">PageSpeed Insights</h3>
			<p>
				Tested on 11 November 2026. On desktop all three pages score 99 or 100 for performance. On
				mobile the product page scores 95, while the front page and About sit just under 80:
				WooCommerce and Breakdance load scripts and styles that block the first paint, and the
				browser finds the hero image late. That is the next thing to fix.
			</p>
		</div>
		<ul class="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			<li class="px-6 py-7 rounded-lg bg-white border border-zinc-200 flex flex-col gap-5">
				<span class="text-lg font-medium">Front page</span>
				<div class="flex gap-6">
					<PageSpeedGauge score={99} label="Desktop" lcp="LCP 0.9 s" />
					<PageSpeedGauge score={77} label="Mobile" lcp="LCP 4.5 s" />
				</div>
				<span class="text-sm font-light text-slate-500"
					>Accessibility 98–100 · Best Practices 100 · SEO 100</span
				>
			</li>
			<li class="px-6 py-7 rounded-lg bg-white border border-zinc-200 flex flex-col gap-5">
				<span class="text-lg font-medium">SLM product page</span>
				<div class="flex gap-6">
					<PageSpeedGauge score={100} label="Desktop" lcp="LCP 0.6 s" />
					<PageSpeedGauge score={95} label="Mobile" lcp="LCP 2.3 s" />
				</div>
				<span class="text-sm font-light text-slate-500"
					>Accessibility 97 · Best Practices 100 · SEO 100</span
				>
			</li>
			<li class="px-6 py-7 rounded-lg bg-white border border-zinc-200 flex flex-col gap-5">
				<span class="text-lg font-medium">About page</span>
				<div class="flex gap-6">
					<PageSpeedGauge score={99} label="Desktop" lcp="LCP 0.9 s" />
					<PageSpeedGauge score={79} label="Mobile" lcp="LCP 4.5 s" />
				</div>
				<span class="text-sm font-light text-slate-500"
					>Accessibility 94 · Best Practices 100 · SEO 100</span
				>
			</li>
		</ul>

		<div class="max-w-6xl mx-auto mt-14 flex flex-col md:flex-row gap-6">
			<div class="flex-1 min-w-0 p-6 rounded-lg bg-zinc-100 flex flex-col gap-2.5">
				<span class="{shipBadge} self-start">Shipped</span>
				<p>
					Brand direction approved in one round, a password-protected demo for the Brazil trip, and
					a public storefront with a catalogue ready to take more suppliers when phase 2 starts.
				</p>
			</div>
			<div class="flex-1 min-w-0 p-6 rounded-lg bg-zinc-100 flex flex-col gap-2.5">
				<span class="{shipBadge} self-start">Shipped in sprint 2</span>
				<p>
					About, Contact and For Merchants, with one request form and a single engineering team
					answering for every product on the site.
				</p>
			</div>
		</div>

		<div class="mx-auto sm:max-w-2xl mt-16 md:mt-24">
			<h3>Seen in Brazil</h3>
			<p>
				In late November 2025 the demo travelled to a subsea symposium in Brazil, where Braaten
				showed the Subsea Load Monitor on their stand under both names: Braaten Technology and
				Subsea.tools.
			</p>
		</div>
		<figure class="mx-auto md:max-w-5xl mt-10">
			<img
				src="/images/subsea-tools/brazil-stand.webp"
				width="1300"
				height="867"
				loading="lazy"
				class="w-full h-auto rounded-md zooming-white-bg"
				alt="Braaten Technology's stand at a subsea symposium in Brazil: a dark wall with two load monitors under the heading 'SLM, Monitor de carga subáquatica', a screen, and a counter with the Braaten and Subsea.tools logos and a laptop showing the Subsea.tools front page"
			/>
			<figcaption>
				Braaten's stand in Brazil, November 2025, with Subsea.tools on the counter and on the
				laptop.
			</figcaption>
		</figure>
	</section>

	<!-- Reflections -->
	<section id="reflections" class="pageSection md:max-w-2xl mx-auto py-10 md:py-28 px-4">
		<h2 class="pb-2">Reflections & Learnings</h2>
		<div class="mx-auto sm:max-w-2xl">
			<ul class="list-custom">
				<li>
					<strong>A deadline is a design tool.</strong> Asking "what does a buyer in Brazil click?" made
					the sprint split obvious and kept the demo focused.
				</li>
				<li>
					<strong>Start with a workshop.</strong> One session with printed canvases turned a free conversation
					into a brand direction, a buyer map and a sitemap.
				</li>
				<li>
					<strong>Clear options decide faster.</strong> On SMAB we needed three rounds of stylescapes.
					Here, three distinct directions got a decision in one.
				</li>
				<li>
					<strong>Reuse pays.</strong> Bringing my CSS framework from Autentisitet made the build mostly
					configuration.
				</li>
				<li>
					<strong>Breakdance is a great fit for WordPress.</strong> It is fast to build in and capable
					of 100/100 PageSpeed scores, and easy enough that the client can handle updates later with a
					short training. And it comes without the bloat and hidden costs of many other builders.
				</li>
				<li>
					<strong>Plan for the deadline moving.</strong> The demo slipped from 20 to 25 November, and
					a week out I was still in Figma and new to Breakdance. Cutting Figma time and designing in the
					builder got it over the line.
				</li>
				<li>
					<strong>Brief content dependencies on day one.</strong> Renders and the logo sat with the client's
					team, so asking early meant they arrived in time to build around.
				</li>
			</ul>
		</div>
	</section>
</article>

<footer>
	<WorkFooter />
</footer>

<style lang="postcss">
	@reference "../../../global.css";

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
