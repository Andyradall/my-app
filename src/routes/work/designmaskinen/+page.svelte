<script>
	import WorkBack from '../../../components/WorkBack.svelte';
	import { caseStudies } from '../../../lib/caseStudies.js';
	import WorkNav from '../../../components/WorkNav.svelte';
	import WorkFooter from '../../../components/WorkFooter.svelte';
	import SvelteSeo from 'svelte-seo';

	import { onMount } from 'svelte';

	let LightGallery;
	if (typeof window !== 'undefined') {
		import('../../../components/LightGallery.svelte').then((module) => {
			LightGallery = module.default;
		});
	}

	const links = [
		{ id: '#first', title: 'Rebriefing the brief', ariaLabel: 'Navigate to "The brief" section' },
		{ id: '#second', title: 'Design Process', ariaLabel: 'Navigate to "Design Process" section' },
		{ id: '#third', title: 'Final prototype', ariaLabel: 'Navigate to "Final prototype" section' },
		{ id: '#fourth', title: 'Insights', ariaLabel: 'Navigate to "Insights" section' }
	];
</script>

<svelte:head>
	<SvelteSeo
		title="Designmaskinen Product Design Case Study by Anders Rådal"
		description="Designmaskinen Product Design Case Study by Anders Rådal"
		canonical="https://www.andersra.com/work/designmaskinen"
		keywords="Anders Rådal, UX-Design, Product designer, Netlife, Designmaskinen, Internship, Hyper-Island, Hyper Island, Product-design, Oslo, Norway, UX, UI, Design, Portfolio, Anders Rådal UX Portfolio, Anders Rådal UX, Anders Rådal Portfolio, Anders Rådal UX-Design, Anders Rådal Product designer, Anders Rådal Oslo, Anders Rådal Norway, Anders Rådal UX, Anders Rådal UI, Anders Rådal Design, Anders Rådal Portfolio"
		openGraph={{
			title: 'Designmaskinen Product Design Case Study by Anders Rådal',
			description: 'Designmaskinen Product Design Case Study by Anders Rådal',
			images: [
				{
					url: 'https://www.andersra.com/images/thumbs/DMthumb800500.webp',
					width: 800,
					height: 500,
					alt: 'Designmaskinen Thumb'
				}
			],
			url: 'https://www.andersra.com/work/designmaskinen',
			type: 'website'
		}}
		twitter={{
			card: 'summary_large_image',
			site: '@AndersRadal',
			title: 'Designmaskinen Product Design Case Study by Anders Rådal',
			description: 'Designmaskinen Product Design Case Study by Anders Rådal',
			image: 'https://www.andersra.com/images/thumbs/DMthumb800500.webp'
		}}
		jsonLd={{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'Designmaskinen Product Design Case Study by Anders Rådal',
			description: 'Designmaskinen Product Design Case Study by Anders Rådal',
			url: 'https://www.andersra.com/work/designmaskinen'
		}}
	/>
</svelte:head>

{#if LightGallery}
	<svelte:component this={LightGallery} />
{/if}

<header class="relative top-0">
	<WorkBack />
</header>

<article class="mx-auto font-euclid text-slate-600 attachLightGallery">
	<section id="first" class="pageSection md:max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
		<div>
			<h1 class="text-[2.75rem] md:text-7xl font-euclid font-bold text-slate-600 py-4">
				Designmaskinen
				<span class="text-[1.8rem] md:text-4xl font-euclid font-medium text-slate-500 py-4"
					><br />Minimalistic admin area & template builder</span
				>
			</h1>
		</div>
	</section>

	<section
		class="max-w-6xl flex flex-col-reverse md:flex-row mx-auto justify-center pb-10 md:pb-20 px-4"
	>
		<div class="md:flex-1 md:max-w-lg my-4">
			<h2 class=" text-xl font-bold text-slate-600">What is Designmaskinen?</h2>
			<p class=" text-base align-center text-slate-600">
				Designmaskinen is a design tool for both print and digital. <span class="font-semibold"
					>Unlike tools like Canva,</span
				>
				Designmaskinen is unique because of its
				<span class="font-semibold">constraints and fixed templates.</span>
				End users are limited to only use predefined brand colors, typeface and images when creating
				content. This way,
				<span class="font-semibold"
					>the output is always looking great, on-brand and consistent!</span
				> This empowers everyone in the organisation to create stunning designs, and is a total dream
				for the designers responsible for brand guidelines being followed.
			</p>
			<h3 class="font-semibold text-lg">Project Details:</h3>
			<p class="text-base align-center text-slate-600">
				<span class="font-bold">Brief:</span> Design an admin area.
			</p>
			<p class="text-base align-center text-slate-600">
				<span class="font-bold">Team:</span> Randi Giovertsen, Kaja von Dombug, Michaen Hermansen and
				Knut Sorknes.
			</p>
			<p class=" text-base align-center text-slate-600">
				<span class="font-bold">Role:</span> Research, design, prototyping, and testing.<br /><br
				/><span class="font-bold">Link:</span>
				<a
					href="https://www.netlife.com/designmaskinen"
					target="_blank"
					rel="noopener"
					title="Designmaskinen">Netlife design - Designmaskinen</a
				>
			</p>
		</div>
		<div class="md:flex-2 md:max-w-xl m-4">
			<div class="flex items-center justify-center h-full">
				<img
					class="zooming-dark-bg"
					src="/images/designmaskinen/iMac_FREE.webp"
					width="927"
					height="733"
					alt="Designmaskinen mockup"
				/>
			</div>
		</div>
	</section>

	<section class="mt-20 hidden sm:block px-4">
		<div>
			<h1 class="text-3xl font-medium text-slate-600 text-center">Process overview</h1>
		</div>
	</section>

	<section class="hidden sm:block">
		<WorkNav {links} />
	</section>

	<section id="first" class="pageSection bg-slate-100 text-slate-600 py-10 md:pt-32 md:pb-20 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-3xl font-bold mb-4">
				Rebriefing the brief: Design an admin area to ease the job of developers.
			</h2>
			<p class="mb-8">
				Designmaskinens user base grew rapidly. Until now, the developers were manually adding brand
				assets like fonts and colors to the database and hardcoding each design template manually.
				<span class="font-semibold">
					Using developers time to handle these typical CMS tasks were starting to affect the
					business viability,
				</span>
				both being expensive and taking up too much time. The solution? Develop an admin area where power-users
				can manage their templates and assets themself. <br />
			</p>
		</div>
	</section>
	<section class="bg-slate-800 bg-opacity-95 text-zinc-150 md:pb-20">
		<div class="max-w-2xl pt-20 mx-auto">
			<h2 class="pb-4">Research: Customer journey mapping</h2>
			<h3 class="">Explore all possible options</h3>
			<p class="align-center pb-4">
				To design the best possible experience, I investigated all possible pathways for admin users
				to set up Desingmaskinen. From considering purchase, to setting it up for their organisation
				and adding access for their users. I explored multiple potential customer journeys, ensuring
				my coming design decisions would be <span class="font-semibold text-red-350"
					>backed by a solid understanding of user's needs
				</span>and expectations.<br />
			</p>
		</div>
		<div class="max-w-7xl pt-8 pb-10 mx-auto">
			<img
				class="zooming-dark-bg"
				src="/images/designmaskinen/User_journey_Designmaskinen.webp"
				width="2455"
				height="494"
				alt="User journey Designmaskinen"
			/>
		</div>
		<div class="max-w-2xl py-8 mx-auto">
			<h2 class="pb-4">Defining: Minimalistic Architecture</h2>
			<h3 class="">Simplicity creates ease-of-use</h3>
			<p class="">
				One of the core values of Designmaskinen is simplicity, on the wall hangs the slogan: <span
					class="font-semibold text-red-350"
					>"we want to be a Doro phone - but for design"
				</span>
				And so I streamlined the admin area with focus on minimalism and simplicity. My goal and objective?
				Design an <span class="font-semibold text-red-350"> intuitive experience, </span>
				removing all clutter and “extra” pages, to ensure ease of use! <br />
			</p>
		</div>
		<div class="max-w-4xl py-8 mx-auto">
			<img
				src="/images/designmaskinen/Sitemap.webp"
				width="1020"
				height="413"
				class="zooming-dark-bg"
				alt="Sitemap"
			/>
		</div>
	</section>

	<section id="second" class="pageSection bg-slate-100 py-10 md:pt-40 md:pb-20 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Dashboard: Iterative process, identifying areas for improvement.</h2>
			<ul class="pb-10 py-4 list-disc list-inside text-slate-600">
				<p>
					<li>
						The dashboard of the admin area gathers brand assets etc. Playing with the machine
						lingo, Kaja came up with the great name verktøykassa (the toolbox).
					</li>
					<li>
						Goal: <span class="font-semibold"
							>Balance ease of access with minimalism to create an intuitive feel,</span
						> aligning with the brand values.
					</li>
					<li>
						We went from defining <span class="font-semibold">jobs-to-do</span> and functionality requirements,
						via pencil-sketches, to me designing this first “hi-fi” iteration.
					</li>
					<li>
						This first version was <span class="font-semibold">perfect for gathering feedback</span>
						from user-testing and heuristic analysis to give ideas for refinement:
					</li>
				</p>
			</ul>
		</div>

		<div class="max-w-6xl pb-20 mx-auto px-4 py-8">
			<img
				src="/images/designmaskinen/dashboard_old.webp"
				width="1100"
				height="1301"
				alt="Dashboard_old"
				class="zooming-dark-bg"
			/>
		</div>
		<div class="max-w-2xl mx-auto">
			<h2 class="">Dashboard: Final design</h2>
			<p class="">For the finalized design, I integrated:</p>
			<ul class="py-4 list-custom">
				<li>A minimalistic menu design for intuitive navigation.</li>
				<li>Breadcrumbs to improve navigation.</li>
				<li>Polished cards design and grid-based layout for visual consistency.</li>
			</ul>
		</div>
		<div class="max-w-6xl pb-20 mx-auto px-4 py-8">
			<img
				src="/images/designmaskinen/dashboard_new.webp"
				width="1100"
				height="1301"
				alt="Dashboard_new"
				class="zooming-dark-bg"
			/>
		</div>
	</section>

	<section class=" py-10 md:pt-20 bg-slate-50 md:pb-10 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Image area: First iteration</h2>
			<p class="pb-4">
				To avoid having hundreds of images on the dashboard, we decided to create a space for them.
				I started <span class="font-semibold">defining features, then paper sketching.</span> Then,
				working in iterations of interfaces, aiming to
				<span class="font-semibold">"fail fast"</span> and move on to design improved versions. My first
				version held all functionality but could be improved:
			</p>
		</div>
		<div class="max-w-6xl py-8 mx-auto">
			<img
				src="/images/designmaskinen/image_old.webp"
				width="1250"
				height="844"
				alt="Sketch of an image_album"
				class="zooming-white-bg"
			/>
		</div>
	</section>

	<section class=" py-10 md:pt-10 bg-slate-50 md:pb-20 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Image area: Final</h2>
			<p class="pb-4">
				After some rounds of prototyping, testing on users, team presentations, and iterations, I
				had a version that both the team and I were happy with.
				<span class="font-semibold">Highlighted features:</span>
			</p>
		</div>
		<div class="max-w-6xl py-8 mx-auto">
			<img
				src="/images/designmaskinen/image_new.webp"
				width="1250"
				height="844"
				alt="Sketch of an image_album"
				class="zooming-white-bg"
			/>
		</div>
		<div class="max-w-6xl py-8 mx-auto">
			<img
				src="/images/designmaskinen/image_new_edit.webp"
				width="1250"
				height="844"
				alt="Sketch of an image_album"
				class="zooming-white-bg"
			/>
		</div>
	</section>

	<section class="py-4 md:pt-24 md:pb-4 px-4 bg-slate-100 text-slate-600">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-4">Template area.</h2>
			<h3 class="">Repurposing the Image Albums Layout</h3>
			<p class="pb-4">
				During a team meeting we were discussion how the templates area should look. I argued for
				simply reusing the same layout that I developed for the image albums. This suggestion would
				ensure consistency with an established interaction pattern for the app, and address other
				issues we discussed about how to categorise the templates. This ended up being the final
				solution.
			</p>
		</div>
		<div class="max-w-7xl py-8 mx-auto">
			<img
				src="/images/designmaskinen/template.webp"
				width="1250"
				height="844"
				alt="Sketch of an image_album"
				class="zooming-white-bg"
			/>
		</div>
	</section>

	<section class="py-10 md:pt-14 md:pb-24 px-4 bg-slate-100 text-slate-600">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-4">User management.</h2>
			<p class="pb-4">
				I added all basic user management functionality like invite users and edit their
				permissions.
			</p>
		</div>
		<div class="max-w-7xl py-8 mx-auto">
			<img
				src="/images/designmaskinen/brukere_webp.webp"
				width="1250"
				height="844"
				alt="Sketch of an image_album"
				class="zooming-white-bg"
			/>
		</div>
	</section>

	<section class="py-10 md:pt-20 md:pb-20 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">The template builder</h2>
			<p class="">
				DMy contribution to the template builder was going over the <span class="font-semibold"
					>components</span
				>
				in the <span class="font-semibold">design system</span>
				to ensure consistency, also iterating on how options should be organised and shown in the menu.
				And contributing to the discussion of what options we should give the users and what should be
				locked.
			</p>
		</div>
		<div class="max-w-7xl my-10 mx-auto">
			<img
				src="/images/designmaskinen/template_builder.webp"
				width="1440"
				height="1000"
				alt="Template builder"
				class="zooming-white-bg"
			/>
		</div>
	</section>

	<section
		id="third"
		class="pageSection bg-slate-800 bg-opacity-95 text-zinc-150 py-10 md:py-24 px-4"
	>
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Test Drive my Final Prototype.</h2>
			<p>
				My favourite part of any design process is watching the designs come to life in a prototype.
				It's this stage where the nuances surface, often spotlighting areas that can benefit from
				further refinement. Dive into the final prototype:
			</p>
		</div>

		<!-- Prototype for large screens -->
		<figure class="hidden md:flex justify-center w-full">
			<iframe
				title="Figma prototype"
				class="w-full aspect-video"
				width="900"
				height="1200"
				loading="lazy"
				src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fty4hVnsBZqFp9ggI5Im7I5%2FDM_Proto%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D0-3171%26viewport%3D2832%252C1130%252C0.26%26t%3DiomRuflbXBPbaP9k-1%26scaling%3Dscale-down%26starting-point-node-id%3D0%253A3171%26show-proto-sidebar%3D1%26mode%3Ddesign%26hide-ui%3D1"
			/>
		</figure>

		<!-- Message for small screens -->
		<div class="lg:hidden text-2xl mx-auto text-center p-8">
			<var>Prototype only shown on desktop.</var>
		</div>
	</section>

	<section
		id="fourth"
		class="pageSection max-w-6xl flex flex-col-reverse md:flex-row mx-auto justify-center py-10 md:py-24 px-4"
	>
		<div class="md:flex-1 md:max-w-lg md:m-4">
			<h2 class="pb-4">Reflections on My Internship</h2>
			<ul class="list-custom">
				<li>
					<strong>Repeated patterns:</strong> Using repeated patterns ensures users get a recognisable
					system that is intuitive and easy to use. Also this makes the developers work easier, because
					they can reuse components.
				</li>
				<li>
					<strong>Fail fast & test early: </strong> Testing early versions on users to get insights and
					see how things work in action is a great way to harvest feedback to continually improve!
				</li>
				<li>
					<strong>Pros of Consultancies: </strong> There were lots of skilled people working at Netlife
					Design, like a knowledge hub, and a great learning opportunity!
				</li>
				<li>
					<strong>Collaboration:</strong> Working in a cross-functional team with designers and developers
					in the same room, made it quick to ideate and shoot ideas back and forth.
				</li>
				<li>
					<strong>Prioritizing Accessibility:</strong> I learned about designing for the highest accessibility
					and WCAG standards. I learned to design interfaces that can be used on screen readers and navigated
					with a keyboard.
				</li>
				<li>
					<strong>Social Workplace:</strong> There were a lot of social activities to join, we went grilling
					and playing in the park, we went to a design award, we went swimming and doing saunas. I even
					joined their running team for a race - it was a lot of fun there!
				</li>
				<li>
					<strong>Modern Tech Stack:</strong> It was interesting to design for a cutting-edge stack with
					Next.js, Tailwind CSS, Vercel hosting, and Sanity.io for content management.
				</li>
			</ul>
		</div>

		<div class="md:flex-2 md:max-w-xl px-0 py-5 md:p-4">
			<div class=" flex items-center justify-center h-full">
				<div>
					<img
						src="/images/designmaskinen/Team.webp"
						width="716"
						height="538"
						class="zooming-white-bg"
						alt="Team"
					/>
					<p class="">My team during a meeting.</p>
				</div>
			</div>
		</div>
	</section>
</article>

<footer>
	<WorkFooter />
</footer>

<style lang="postcss">
	h2 {
		@apply text-[34px] font-euclid font-medium leading-[48px];
	}
	h3 {
		@apply text-[24px] font-euclid font-normal leading-[48px];
	}
	p {
		@apply text-[18px] font-euclid font-light leading-[30px];
	}
	strong {
		@apply font-euclid font-medium;
	}
	.list-custom {
		@apply text-[18px] font-euclid font-light leading-[30px] list-disc pl-5 space-y-2;
	}
</style>
