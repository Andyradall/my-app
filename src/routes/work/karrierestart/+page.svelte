<script>
	import WorkBack from '../../../components/WorkBack.svelte';
	import { caseStudies } from '../../../lib/caseStudies.js';
	import WorkNav from '../../../components/WorkNav.svelte';
	import WorkFooter from '../../../components/WorkFooter.svelte';
	import SvelteSeo from "svelte-seo";
	import LightGallery from '../../../components/LightGallery.svelte'

	const links = [
		{ id: '#first', title: 'Research & Hooked', ariaLabel: 'Research & Hooked' },
		{ id: '#second', title: 'Onboarding Guide', ariaLabel: 'Onboarding Guide' },
		{ id: '#third', title: 'Psychological Hacks', ariaLabel: 'Psychological Hacks' },
		{ id: '#fourth', title: 'Onboarding Stories', ariaLabel: 'Onboarding Stories' },
		{ id: '#fifth', title: 'Results', ariaLabel: 'Results' }
	];
</script>

<svelte:head>
	<SvelteSeo
	title="Karrierestart UX Design Case Study by Anders Rådal"
	description="Karrierestart UX Design Case Study by Anders Rådal"
	canonical="https://www.andersra.com/work/karrierestart"
	keywords="Anders Rådal, Karrierestart, Karrierestart UX, UX-Design, Product designer, Oslo, Norway, UX, UI, Design, Portfolio, Anders Rådal UX Portfolio, Anders Rådal UX, Anders Rådal Portfolio, Anders Rådal UX-Design, Anders Rådal Product designer, Anders Rådal Oslo, Anders Rådal Norway, Anders Rådal UX, Anders Rådal UI, Anders Rådal Design, Anders Rådal Portfolio"
	openGraph={{
	  title: "Karrierestart UX Design Case Study by Anders Rådal",
	  description: "Karrierestart UX Design Case Study by Anders Rådal",
	  images: [
				{
					url: 'https://www.andersra.com/images/thumbs/KSthumb8005001.webp',
					width: 800,
					height: 500,
					alt: 'Karrierestart Thumb'
				}
			],
	  url: "https://www.andersra.com/work/karrierestart",
	  type: "website",
	}}
	twitter={{
	  card: "summary_large_image",
	  site: "@AndersRadal",
	  title: "Karrierestart UX Design Case Study by Anders Rådal",
	  description: "Karrierestart UX Design Case Study by Anders Rådal",
	  image: "https://www.andersra.com/images/thumbs/KSthumb8005001.webp",
	}}
	jsonLd={{
	  "@context": "https://schema.org",
	  "@type": "WebSite",
	  name: "Karrierestart UX Design Case Study by Anders Rådal",
	  description: "Karrierestart UX Design Case Study by Anders Rådal",
	  url: "https://www.andersra.com/work/karrierestart",
	}}
	/>
</svelte:head>

<header class="relative top-0">
	<WorkBack />
</header>

<LightGallery />
<article class="mx-auto font-euclid text-grey-800 attachLightGallery">
	<section id="first" class="pageSection md:max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
		<div>
			<h1 class="text-[2.95rem] md:text-7xl font-euclid font-black text-grey-800 md:py-4">
				Karrierestart
				<span
					class="block text-[2rem] leading-[3rem] md: md:text-4xl font-euclid font-medium text-grey-400 md:py-4"
				>
					<br />Improving the Onboarding Experience for Job Portal</span
				>
			</h1>
		</div>
	</section>

	<section class="max-w-6xl flex flex-col-reverse md:flex-row mx-auto justify-center mb-20">
		<div class="md:flex-1 md:max-w-xl m-4">
			<h2 class="pb-2">Challenge & Context</h2>
			<div class="pb-8">
				<p>
					During 2020-2021 at Karrierestart, we noticed a substantial drop-off rate after sign-up.
					Many users weren't fully leveraging the full potential of the portal, leading us to a
					mission: revamp for better engagement.
				</p>
				<p>
					The project was particularly complex due to the platform's multi-sided nature, catering to
					both job-seekers, companies, and freelancers. At the same time covid put a strain on our
					resources. Our focus? Enhance UX without imposing heavy changes on our developers.<strong
					/>
				</p>
			</div>
			<div>
				<h3>Project Snapshot:</h3>
				<ul class="list-custom">
					<li>
						<strong>Team:</strong> Founder Bjarne Vasset, UI designer Gurveer Dhindsa, and myself.
					</li>
					<li>
						<strong>Role:</strong> UX and product designer, responsible for all UX related aspects of
						the project.
					</li>
					<li><strong>Deliverables:</strong> Research findings, design specs.</li>
					<li><strong>Format:</strong> Desktop and mobile</li>
					<li><strong>Tools:</strong> Figma, Zeplin.</li>
					<li>
						<strong>Link: </strong><a
							href="https://www.karrierestart.no"
							target="_blank"
							rel="noopener"
							class="underline underline-offset-2 text-grey-600"
							title="Karrierestart"
						>
							Karrierestart</a
						>
					</li>
				</ul>
			</div>
		</div>
		<figure class="md:flex-2 md:max-w-xl md:m-4">
			<div class="flex items-center justify-center h-full">
				<div><img src="/images/karrierestart/MacBook_Pro_16_01_FREE.webp" class="zooming-white-bg" alt="KS mockup" /></div>
			</div>
		</figure>
	</section>

	<section class="mt-20 hidden sm:block">
		<div>
			<h2 class="text-3xl font-medium text-grey-800 text-center">Process overview</h2>
		</div>
	</section>
	
	<section class="hidden sm:block">
		<WorkNav {links} />
	</section>

	<section id="first" class="pageSection bg-grey-100 py-10 px-4 md:py-20">
		<div class="md:max-w-2xl mx-auto">
			<h2 class="pb-2">Doing Research in Covid Lockdown</h2>
			<p>
				The objective was clear: enhance profile content on KS by increaing engagement. At the same
				time, there were challenges, like layoffs and the pandemic restrictions. The question we
				grappled with was, "How do we get user insights under these conditions?"
			</p>
			<h3>Proactive Measures:</h3>
			<p>
				To get insight into user behavior, I took initiative to integrate Hotjar on the portal. Its
				recordings and heatmaps vividly depicted areas where the user journey stuttered.
				Furthermore, I set up a feedback module, so we could zoom in on specific user pain points.
			</p>
			<h3>Remote Insights:</h3>
			<p>
				Traditional face-to-face interviews were off the table. Instead, I dispatched surveys for
				insights and turned to remote platforms like Teston.io and Usertesting.com. The remote
				validation of our designs turned out to be highly effective.
			</p>
			<h3>Fostering User Engagement:</h3>
			<p>
				With an eye on further amplifying user engagement, I studied Nir Eyal's Hook model. Then I
				explored ways to incorporate this framework into our platform.
			</p>
		</div>

		<figure class="md:max-w-5xl py-5 md:py-8 mx-auto">
			<img src="/images/karrierestart/Screenshot_2023_02_10_at_17_08_2.webp" class="zooming-white-bg" alt="Hotjar Module" />
			<figcaption>
				Hotjar feedback module gave me a lot of actionable feedback that I used to improve user
				exerience! Here on the whitelabled Aleris Company profile.
			</figcaption>
		</figure>

		<div class="md:max-w-2xl mx-auto">
			<h2 class="pb-2">Key Actionable Insights</h2>
			<p class="pb-4">
				Through our research, several revelations stood out, shaping our approach and guiding the
				evolution of the Karrierestart platform. The insights became the pillars of our design
				strategy.
			</p>

			<ul class="list-custom list-disc pl-5">
				<li>
					<p>
						<strong class="font-medium">Enhance User Guidance:</strong> It was essential to offer users
						simple instructions on how to use the service to its fullest potential.
					</p>
				</li>
				<li>
					<p>
						<strong class="font-medium">Gamify User Experience:</strong> Incorporating gamification
						elements like progress bars, badges, and challenges to motivate users and make the
						experience more enjoyable.<br /><strong>Reduce Cognitive Load:</strong> Prioritizing
						essential features and minimizing the visual prominence of advanced options ensured that
						users weren't overwhelmed, leading to smoother navigation.<br />
					</p>
				</li>
				<li>
					<p>
						<strong class="font-medium">Leverage Behavioral Psychology:</strong> We integrated techniques
						such as variable rewards and nudges to subtly steer user behavior, aiming to magnify engagement
						levels.
					</p>
				</li>
				<li>
					<p>
						<strong class="font-medium">Simplification and Standardization:</strong> To ensure consistency
						and foster collaboration, we built a design system and transitioned all design work to Figma.
					</p>
				</li>
			</ul>
		</div>
	</section>

	<section class="bg-[#111111]">
		<figure class="sm:max-w-6xl mx-auto py-20">
			<img src="/images/karrierestart/Frame_10.webp" class="zooming-dark-bg" alt="Nir Eyal summary" />
		</figure>
	</section>

	<section id="second" class="pageSection py-10 md:py-20 px-4">
		<div class="max-w-2xl py-4 mx-auto">
			<h2 class="pb-2">Designing the Onboarding Guide</h2>
			<p class="pb-2">I designed onboarding guides that we put on all the profiles.</p>

			<ul class="list-custom list-disc pl-5">
				<li>
					<p>
						<strong class="font-medium">Company Profile:</strong> In the company profile it was important to make it very
						simple to get started, and not overwhelm the users with complexity causing them to leave.
					</p>
				</li>
				<li>
					<p>
						<strong class="font-medium">Progressive Unlocking:</strong> I designed the onboarding so that as users earned
						new badges, new sections and functionalities became accessible, gradually increasing their
						engagement with the platform.
					</p>
				</li>
				<li>
					<p>
						<strong class="font-medium">Professionalism in Job Ads:</strong> We made certain steps like having a logo and
						"about us" text mandatory for publishing job ads, this ensured a consistently polished appearance
						for all published job listings.
					</p>
				</li>
			</ul>
		</div>
		<figure class="max-w-6xl mx-auto py-5">
			<img src="/images/karrierestart/Aleris23.webp" class="zooming-white-bg" alt="Onboarding guide step 1" />
			<figcaption>First step of onboarding guide.</figcaption>
		</figure>
		<figure class="max-w-6xl mx-auto py-5">
			<img src="/images/karrierestart/onb33.webp" class="zooming-white-bg" alt="onboarding step 3" />
			<figcaption>Step 3 of onboarding guide.</figcaption>
		</figure>

		<figure class="max-w-6xl mx-auto py-5">
			<img src="/images/karrierestart/onb4w3.webp" class="zooming-white-bg" alt="Onboarding alternative" />

			<figcaption>
				Alternative more tactile view of step 3. I explored and discarded many different solutions
				like this in the ideation phase.
			</figcaption>
		</figure>
	</section>

	<section id="third" class="pageSection bg-grey-100 py-10 md:py-16 px-4 mx-auto">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Variable rewards and nudges. Messages, badges, likes and followers.</h2>

			<h3>Congratulatory Milestones</h3>
			<p>
				As users reached significant content milestones, I integrated congratulatory messages with
				confetti effect. These not only served as dopamine boosts in line with the Hooked
				methodology, but also oriented users towards the subsequent steps to enhance their profile.
			</p>
		</div>
		<figure class="max-w-6xl py-5 mx-auto">
			<img src="/images/karrierestart/Freelance2.webp" class="zooming-white-bg" alt="Freelance congrats message" />
			<figcaption>Motivational message from freelancer profile.</figcaption>
		</figure>
	</section>

	<section class="md:py-24 py-8 mx-auto px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Engagement Ecosystem</h2>
			<p>
				I created a ecosystem of triggers to sustain users attention. For instance, a simple "like"
				on a portfolio project instantly notified the user via email, infusing vibrancy and a sense
				of community within the platform. Additionally, the incorporation of followers and
				recommendations further enriched user engagement.
			</p>
		</div>
		<figure class="max-w-5xl py-5 mx-auto">
			<img src="/images/karrierestart/Congratulatory.webp" class="zooming-white-bg" alt="Freelance user profile" />
			<figcaption>Here showing Likes and Followers in a user profile.</figcaption>
		</figure>
	</section>

	<section id="fourth" class="pageSection py-10 md:py-20 mx-auto px-4 bg-grey-100">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Stories and Guides</h2>
			<p class="pb-4 md:pb-2">
				To better serve the user's need for information, I created stories to convey a lot of
				information quickly and easily. The challenging element here was working with the developers
				to and creating the CMS for creating the stories and getting the code perfect. I decided to
				use Undraw for all illustrations on the portal as it provided a free and consistent resource
				for illustrations fitting well with the overall brand.
			</p>
		</div>

		<figure class="max-w-6xl mx-auto py-4 md:py-10">
			<img
				src="/images/karrierestart/Candidate_test_with_illustrations_20pct_smaller_-scaled.webp"
				alt="Stories sketch"
				class="zooming-white-bg"
			/>
			<figcaption><p>From story ideation process</p></figcaption>
		</figure>

		<figure class="max-w-6xl mx-auto py-4 md:py-10">
			<img src="/images/karrierestart/ksscreent_.webp" alt="Screenshot" class="zooming-white-bg" />
			<figcaption><p>Screenshot from live page.</p></figcaption>
		</figure>

		<figure class="max-w-6xl mx-auto py-4 md:py-10">
			<img src="/images/karrierestart/Storyedit.webp" class="zooming-white-bg" alt="Storyedit CMS" />
			<figcaption>
				<p>
					Some designs from CMS of stories, we created many customisation options for the stories.
				</p>
			</figcaption>
		</figure>
	</section>

	<section id="fifth" class="pageSection pt-12 pb-14 md:mt-8 md:pt-28 md:pb-40 px-4">
		<div class="max-w-2xl mx-auto">
			<h2 class="pb-2">Summary and Outcome</h2>
			<p class="pb-4">
				Through my experience improving onboarding on a 200k+ user portal, I gained a better
				understanding of how to retain and activate users.
			</p>

			<h3>Key outcomes</h3>
			<ul class="list-custom pl-5 list-disc">
				<li>
					<p>
						<strong>Enhanced Engagement:</strong> Our improvements resulted in a rise in user engagement.
						This was evident in the richer content they uploaded and their heightened frequency of visits.
					</p>
				</li>
				<li>
					<p>
						<strong>Analytics Proficiency:</strong> This project further honed my skills in agile analytics,
						particularly with tools like Hotjar.
					</p>
				</li>
				<li>
					<p>
						<strong>Team Collaboration:</strong> The collaborative nature of this project deepened my
						experience in working cohesively with fellow designers and developers.
					</p>
				</li>
				<li>
					<p>
						<strong>Tangible Impact:</strong> In the grand scheme, our onboarding enhancements culminated
						in a significant increase in user retention and engagement. This ripple effect was also visible
						in the increased number of job postings and subsequent applications on the portal.
					</p>
				</li>
			</ul>
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
	.list-custom {
		@apply text-[18px] font-euclid font-normal leading-[30px] space-y-2;
	}
</style>
