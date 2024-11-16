<script>
	import WorkBack from '../../../components/WorkBack.svelte';
	import { caseStudies } from '../../../lib/caseStudies.js';
	import WorkNav from '../../../components/WorkNav.svelte';
	import WorkFooter from '../../../components/WorkFooter.svelte';
	import SvelteSeo from 'svelte-seo';
   
	import { onMount } from 'svelte';

	let LightGallery;
	if (typeof window !== 'undefined') {
        import('../../../components/LightGallery.svelte').then(module => {
            LightGallery = module.default;
        });
    }

	const links = [
		{ id: '#first', title: 'The challenge', ariaLabel: 'Navigate to "The challenge" section' },
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

<article class="mx-auto font-euclid text-slate-600 attachLightGallery" >
	<section id="first" class="pageSection md:max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
		<div>
			<h1 class="text-[2.75rem] md:text-7xl font-euclid font-bold text-slate-600 py-4">
				Designmaskinen
				<span class="text-[1.8rem] md:text-4xl font-euclid font-medium text-slate-500 py-4"
					><br />Designing an Admin Area & Template Builder</span
				>
			</h1>
		</div>
	</section>

	<section
		class="max-w-6xl flex flex-col-reverse md:flex-row mx-auto justify-center pb-10 md:pb-20 px-4"
	>
		<div class="md:flex-1 md:max-w-lg my-4">
			<h2 class=" text-xl font-bold text-slate-600">Case overview</h2>
			<p class=" text-base align-center text-slate-600">
				In Spring 2023, during my three-month internship at Netlife Design, I contributed to the
				development of Designmaskinen, a specialized design tool for creating print and digital
				designs. Unlike other design tools like Canva, Designmaskinen is unique in its constraints,
				allowing users to edit specific elements like text and color within certain parameters, such
				as only using brand colors. This approach ensures consistent design, a major selling point
				for the tool.
			</p>
			<h3 class=" text-lg font-medium">Project Details</h3>
			<p class=" text-base align-center text-slate-600">
				<span class="font-bold">Project Brief:</span> Design an intuitive admin area for Designmaskinen.
			</p>
			<p class=" text-base align-center text-slate-600">
				<span class="font-bold">Team Members:</span> Randi Giovertsen, Kaja von Dombug, Michaen Hermansen
				and Knut Sorknes.
			</p>
			<p class=" text-base align-center text-slate-600">
				<span class="font-bold">My Role:</span> Research, design, prototyping, and testing.<br /><br
				/><span class="font-bold">Related Link:</span>
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
					class="zooming-white-bg"
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

	<section id="first" class="pageSection bg-slate-800 bg-opacity-95 text-zinc-150 py-10 md:pt-32 md:pb-20 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-3xl font-bold mb-4">Understanding the Challenge</h2>
			<p class="mb-8">
				As Designmaskinen's user base grew, the earlier system of developers manually coding
				templates and handling CMS tasks became unsustainable. The solution? An admin area
				empowering customers to build templates and independently manage their brand assets.<br />
			</p>
		</div>
		<div class="max-w-2xl mx-auto">
			<h2 class="text-3xl font-medium pb-4">Exploring Designmaskinen</h2>
			<h3 class="text-2xl font-medium">Features Snapshot</h3>
			<p class="mb-8">
				Current version of Designmaskinen. Here the users can edit the text, pictures and change
				between different color themes on this template. The end result will automatically follow
				the brand guidelines.
			</p>
		</div>
		<div class="max-w-4xl mx-auto">
			<img
				src="/images/designmaskinen/Designmaskinenscale.webp"
				class="w-full h-auto mb-4 zooming-dark-bg"
				width="1200"
				height="948"
				alt="Designmaskinenscale"
			/>
		</div>

		<div class="max-w-2xl pt-20 mx-auto">
			<h2 class="pb-4">Mapping the Customer Journey</h2>
			<h3 class="">Focus on Admin User Experience</h3>
			<p class="align-center pb-4">
				To create a best possible experience, I decided to visualize the ideal pathway for an admin
				user, from purchasing Designmaskinen to setting it up for end-users. I explored multiple
				potential customer journeys, ensuring each design decision would be backed by a solid
				understanding of the user's flow, needs, and expectations.<br />
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
			<h2 class="pb-4">Streamlining the Architecture</h2>
			<h3 class="">Embracing Simplicity</h3>
			<p class="">
				We initially had a bigger sitemap, but as one of the core values of the designmachine was
				simplicity, with the slogan "we want to be a Doro phone - but for design", I streamlined the
				admin area. The objective? An intuitive design with no unneded pages, ensuring ease of use.<br
				/>
			</p>
		</div>
		<div class="max-w-4xl py-8 mx-auto">
			<img src="/images/designmaskinen/Sitemap.webp" width="1020" height="413" class="zooming-dark-bg" alt="Sitemap" />
		</div>
	</section>

	<section id="second" class="pageSection py-10 md:pt-40 md:pb-20 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-4">Designing the brand assets toolbox</h2>
			<h3 class="">The Core of the Admin Area:</h3>
			<p class="pb-10">
				Vertøykassa (the toolbox), is the core of the admin area. Here we decided to gather all
				brand assets. While I had a few initial sketches to guide me, I mostly relied on my own
				ideas for the design details.
			</p>
		</div>
		<div class="max-w-6xl pb-20 mx-auto px-4">
			<img
				src="/images/designmaskinen/Skisser_malbygger-1.webp"
				width="1250"
				height="552"
				alt="Skisser_malbygger-1"
				class="zooming-white-bg"
			/>
		</div>
		<div class="max-w-2xl mx-auto">
			<h2 class="">Design Evolution of the Toolbox</h2>
			<h3 class="">Experimentation and Refinement:</h3>
			<p class="">My design journey was a combination of exploration and refinement:</p>
			<ul class="py-4 list-custom">
				<li>
					Explored various left menu designs, from collapsable/docking styles to the most
					uncomplicated design for user-friendliness and minimised cognitive load.
				</li>
				<li>Experimented with different card designs and functionalities.</li>
			</ul>
			<p class="">For the finalized design, I integrated:</p>
			<ul class="py-4 list-custom">
				<li>A streamlined menu design for intuitive navigation.</li>
				<li>Breadcrumbs to improve navigation further.&nbsp;</li>
				<li>Polished cards design and grid-based layout for visual consistency.&nbsp;</li>
			</ul>
		</div>
	</section>

	<section class="flex flex-col md:flex-row mx-auto justify-around py-16 bg-slate-100 bg-opacity-20 px-4">
		<div class="md:flex-1 md:max-w-md m-4">
			<div>
				<img
					src="/images/designmaskinen/Itr1_1.webp"
					width="1106"
					height="1382"
					alt="brand assets v 1"
					class="zooming-white-bg"
				/>
				<p class=" text-base">Version 1.</p>
			</div>
		</div>
		<div class="md:flex-2 md:max-w-md m-4">
			<div>
				<img
					src="/images/designmaskinen/Admin_Verkt_ykasse.webp"
					width="1440"
					height="1800"
					alt="Admin_Verkt_ykasse"
					class="zooming-white-bg"
				/>
				<p class=" text-base">Version 2.&nbsp;</p>
			</div>
		</div>
		<div class="md:flex-3 md:max-w-md m-4">
			<div>
				<img
					src="/images/designmaskinen/Admin_Verkt_ykasse_final.webp"
					width="1440"
					height="1800"
					alt="Admin Verktøykasse final"
					class="zooming-white-bg"
				/>
				<p class=" text-base">Version 3 - final</p>
			</div>
		</div>
	</section>

	<section class=" py-10 md:pt-20 md:pb-10 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Designing the Image Album</h2>
			<p class="pb-4">
				Some clients have many images so to avoid having hundreds of images in the assets toolbox,
				we decided to show only the latest three images, and put the rest of the images into an
				albums area. To figure out how this would look I first created paper sketches, then started
				to design and prototype in Figma. A key feature wanted was an option to categorise the
				images.
			</p>
		</div>
		<div class="max-w-4xl mx-auto">
			<img
				src="/images/designmaskinen/IMG_1885_2_2.webp"
				width="997"
				height="558"
				alt="Sketch of an image_album"
				class="zooming-white-bg"
			/>
		</div>
	</section>

	<section class="pt-10 pb-20 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">First Iteration of the Albums Area</h2>
			<p class="pb-5">
				I worked in iterations, prototyping and testing to getting user feedback. My goal was to
				"fail fast" and move on to design improved versions. This first version was functional but
				had several areas for improvement:
			</p>
		</div>
		<div class="max-w-2xl mx-auto">
			<ul class="list-custom">
				<li>
					<strong>Iconography Challenge:</strong> Image edit options (like zoom, edit name, or delete)
					appeared in a small menu above the selected image on click. But due to the absence of accompanying
					text for icons, accessibility was compromised. Developer feedback also highlighted potential
					navigation challenges when navigating using keyboard "tab", prompting me to rethink this approach.
				</li>
				<li>
					<strong>Modal Limitations:</strong> Editing was initially conceptualized in a modal
					window. But modals can disrupt user flow and pose mobile adaptation challenges.<br />
				</li>
			</ul>
		</div>
	</section>

	<section class="flex flex-col md:flex-row mx-auto justify-around py-16 bg-slate-100 bg-opacity-20 px-4">
		<div class="md:flex-1 md:max-w-2xl m-4">
			<img
				src="/images/designmaskinen/Admin_Verkt_ykasse_Bilder_1.webp"
				width="1440"
				height="1000"
				alt="Image_albums 1"
				class="zooming-white-bg"
			/>
			<p class="text-base">Version 1.</p>
		</div>
		<div class="md:flex-1 md:max-w-2xl m-4">
			<img
				src="/images/designmaskinen/Admin_Verkt_ykasse_Bilder_1v2.webp"
				width="1440"
				height="1000"
				alt="Image_albums iteration 1 with lightbox"
				class="zooming-white-bg"
			/>
			<p class="text-base">
				Version 1. Edit and change image description in input field in a modal window.&nbsp;
			</p>
		</div>
	</section>

	<section class="py-10 md:pt-24 md:pb-24 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-4">Refined Image Albums Layout</h2>
			<p class="">
				After some rounds of prototyping, testing on users, team presentations, and iterations, I
				had a version that both the team and I were happy with. Highlighted features include:
			</p>
			<ul class="list-custom">
				<li>
					<strong>Navigation Clarity:</strong> Added breadcrumbs on the top of the page, making navigating
					and understanding where you are easy. Also added space for a small text about the area.
				</li>
				<li>
					<strong>Material Design:</strong> For image categorization, I transitioned to a Material Design-inspired
					tagging system.
				</li>
				<li>
					<strong>Copy Optimization:</strong> Copy also improved based on user feedback: We changed wording
					from "New Gallery" to "New Album".
				</li>
				<li>
					<strong>Menu Transition:</strong> I proposed and implemented a slide-in menu, eliminating the
					earlier modal window approach. The consensus was in favor of its enhanced user experience.
				</li>
				<li>
					<strong>Simplicity Wins:</strong> After refactoring the sitemap, there was no point in having
					a hamburger menu, so I removed it.
				</li>
				<li>
					<strong>Keyboard Navigation:</strong> Easy to navigate using a keyboard. Simplified the
					tab visual que and removed the dropshadow.<br />
				</li>
			</ul>
		</div>
	</section>

	<section class="flex flex-col md:flex-row mx-auto justify-around py-16 bg-slate-100 bg-opacity-20 px-4">
		<div class="md:flex-1 md:max-w-2xl m-4">
			<img
				src="/images/designmaskinen/Admin_Verkt_ykasse_Bilder_Final_1.webp"
				width="1440"
				height="1000"
				alt="Image_albums iteration 2"
				class="zooming-white-bg"
			/>
			<p class="text-base">Final version of image albums.&nbsp;</p>
		</div>
		<div class="md:flex-2 md:max-w-2xl m-4">
			<img
				src="/images/designmaskinen/Admin_Verkt_ykasse_Bilder_Final_Menu.webp"
				width="1440"
				height="1000"
				alt="Image_albums iteration 2 with menu"
				class="zooming-white-bg"
			/>
			<p class=" text-base align-center text-slate-600">
				Final version with slide in edit field showing.&nbsp;
			</p>
		</div>
	</section>

	<section class="py-10 md:pt-24 md:pb-24 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-4">Designing the Template Management</h2>
			<h3 class="">Repurposing the Image Albums Layout</h3>
			<p class="pb-4">
				We had a lot of discussions about how this area should look.&nbsp;During a team meeting I
				proposed reusing the same layout that I developed for the image albums. This suggestion
				would both ensure consistency, and address other issues we discussed.&nbsp;This ended up
				being the solution we used.&nbsp;
			</p>
			<h3 class="">Print or Post?&nbsp;CMYK or RGB?</h3>
			<p class="">
				One particular challenge that emerged was managing the different color profiles for print
				(CMYK) versus digital designs for platforms like social media (RGB). This raised interesting
				questions about the optimal way to present these options within the template settings and if
				and how color profile could be changeable after the template is created.
			</p>
		</div>
	</section>

	<section class="flex flex-col md:flex-row mx-auto justify-evenly py-16 bg-slate-100 bg-opacity-20 px-4">
		<div class="md:flex-1/3 md:max-w-xl m-4">
			<img
				src="/images/designmaskinen/Admin_Maler_Some.webp"
				width="1440"
				height="1000"
				alt="Admin_Maler_Some"
				class="zooming-white-bg"
			/>
			<p class="text-base">Template management area.&nbsp;</p>
		</div>
		<div class="md:flex-1/3 md:max-w-xl m-4">
			<img
				src="/images/designmaskinen/Admin_Maler_Some_edit.webp"
				width="1440"
				height="1000"
				alt="Admin_Maler_Some_edit"
				class="zooming-white-bg"
			/>
			<p class="text-base">Edit options.&nbsp;</p>
		</div>
		<div class="md:flex-1/3 md:max-w-xl m-4">
			<img
				src="/images/designmaskinen/Admin_Nymal.webp"
				width="1440"
				height="1000"
				alt="Admin New template"
				class="zooming-white-bg"
			/>
			<p class="text-base">New template, choosing format changes colour profile (RGB/CMYK)</p>
		</div>
	</section>

	<section class="py-10 md:pt-24 md:pb-24 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Building the User Management</h2>
			<p class="">
				When talking to users, most of them did not think they would be uploading a profile image to
				their user profile on a design app. so I opted for using the first letter of the user name
				as a placeholder - A clever trick that I believe designers for Google / Gmail came up with.
				This minimalist approach not only respects user preferences but also adds a touch of
				personalized elegance.
			</p>
		</div>
	</section>

	<section class="flex flex-col md:flex-row mx-auto justify-around py-16 bg-slate-100 bg-opacity-20 px-4">
		<div class="md:flex-1 md:max-w-2xl m-4">
			<img
				src="/images/designmaskinen/User_areas.webp"
				width="915"
				height="645"
				alt="User areas sketch"
				class="zooming-white-bg"
			/>
			<p class="text-base">First sketch.</p>
		</div>
		<div class="md:flex-2 md:max-w-2xl m-4">
			<img
				src="/images/designmaskinen/Brukere.webp"
				width="1440"
				height="1000"
				alt="User area management"
				class="zooming-white-bg"
			/>
			<p class="text-base">User management final.</p>
		</div>
	</section>

	<section class="py-10 md:pt-20 md:pb-20 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Refining the Template Builder</h2>
			<p class="">
				Diving deep into the intricacies of the template builder, I dedicated a week to overhauling
				its modular menu design. My focus was on streamlining the menu, categorizing options in an
				intuitive manner, and ensuring consistency across the layout.
			</p>
		</div>
		<div class="max-w-4xl my-10 mx-auto">
			<img
				src="/images/designmaskinen/Malbygger_Tekst.webp"
				width="1440"
				height="1000"
				alt="Template builder"
				class="zooming-white-bg"
			/>
		</div>
	</section>

	<section id="third" class="pageSection bg-slate-800 bg-opacity-95 text-zinc-150 py-10 md:py-24 px-4">
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
			></iframe>
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
					<strong>Challenging my Bias:</strong> Before going into this, I had this perception of consultants
					as conform and perhaps a bit sharp elbowed. However, the team
					at Netlife completely defied this image – they were actually very down to earth!
					There were a lot of skilled and very collaborative people gathered in one
					environment and that was amazing. I learned a lot from my internship!
				</li>
				<li>
					<strong>Collaboration:</strong> Working in a cross-functional team with developers, having
					the developers in the same room as me. It made it quick to ideate and shoot ideas back and
					forth between designers and developers.
				</li>
				<li>
					<strong>Prioritizing Accessibility:</strong> I learned about designing for the highest accessibility
					and WCAG standards. I learned to design interfaces that can be used on screen readers and navigated
					with a keyboard.
				</li>
				<li>
					<strong>Modern Tech Stack:</strong> It was interesting to design for a cutting-edge stack featuring
					Next.js, Tailwind CSS, Vercel hosting, and Sanity.io for content management.
				</li>
				<li>
					<strong>Process Awareness Post-Hyper:</strong> I notice that I am much more process aware now
					than before Hyper, I am aware of where in the double diamond process we are, and allow myself
					more freedom and am less strict on myself in the divergent phases - this makes it easier for
					me to be more creative!
				</li>
				<li>
					<strong>Social Workplace:</strong> There were a lot of social activities to join, we went grilling
					and playing in the park, we went to a design award, we went swimming and doing saunas. I even
					joined their running team for a race - it was a lot of fun there!
				</li>
			</ul>
		</div>

		<div class="md:flex-2 md:max-w-xl px-0 py-5 md:p-4">
			<div class=" flex items-center justify-center h-full">
				<div>
					<img src="/images/designmaskinen/Team.webp" width="716" height="538" class="zooming-white-bg" alt="Team" />
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
