<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay, Pagination } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';

	onMount(() => {
		const swiper = new Swiper('.mySwiper', {
			modules: [Autoplay, Pagination],
			loop: true,
			autoplay: {
				delay: 5000
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			
			}
		});
	});
</script>

<article id="about" class="pageSection text-slate-600 pb-24 md:pb-56 md:pt-10 mx-auto">
	<div class="mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl mt-40 mb-30">
		<section class="">
			<h2 class="font-euclid text-2xl md:text-3xl text-slate-550 font-semibold pl-6 my-4">ABOUT ME</h2>
		</section>

		<section class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
			<!-- Text Card -->
			<div
				class="text-card card-one shadow-custom col-span-1 md:col-span-6 rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm outline-4 outline-offset-[-4px] outline-zinc-350/30 p-6 md:p-10"
			>
				<h2 class="font-euclid text-3xl font-semibold pb-3">
					Anders Rådal
				</h2>
				<p class="font-euclid font-normal pb-4 text-lg">
					Born in 84, I grew up with hand me down computers running Ms Dos. 
					I remember playing Wolfenstein 3D, chatting on IRC and doing Yahoo searches, 
					after pulling a network cable across my parents lawn to access the web. 
					I have always been interested in art and design and even graffiti and subcultures.
				</p>
				<h2 class="font-euclid text-3xl font-semibold pb-3">Design with Impact</h2>
				<p class="font-euclid font-normal pb-4 text-lg">
					I fell in love with Interaction design when I realised it allowed me to mix coding, creativity, 
					and business strategy all into one, it was like the stars aligned and it just made sense. 
					In my work, I aim for solutions that look good, works well for the users and creates business growth.
				</p>
			</div>

			<!-- Image Card -->
			<div
				class="image-card card-two shadow-custom col-span-1 md:col-span-6 flex justify-center items-center overflow-hidden outline-2 outline-offset-[-4px] outline-zinc-350/30 rounded-3xl"
			>
				<img
					class="object-cover w-full max-h-[540px] h-full"
					alt="Profile"
					src="/images/about/profil.webp"
					height="620px"
					width="622.55"
					style="object-position: center top;"
				/>
			</div>
		</section>

		<section class="skills-card shadow-custom text-slate-600 bg-zinc-100 backdrop-blur-sm bg-opacity-75 rounded-3xl p-6 md:p-10">
			<!-- Card Header -->
			<header class="text-left">
				<h2 class="font-euclid text-3xl font-semibold pb-2">Skills</h2>
				<p class="font-euclid font-normal max-w-3xl text-lg">My creative and technical toolbox that I use in my projects. This assets allow me to decipher complexity and chaos, and to end up with clear and performant solutions. </p>
			</header>

			<!-- Skills List -->
			<div class="skills flex md:pt-12 md:pb-7 flex-wrap justify-around gap-2">
				<!-- Skill: Customer Research -->
				<article class="skill flex-1 min-w-[180px] m-1 p-4">
					<div class="skill-image flex justify-center py-2 my-2">
						<svg width="50" height="50" viewBox="0 0 50 50" aria-label="research icon" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.9402 23.7964C20.6852 23.7964 18.7635 23.0012 17.1751 21.4108C15.5868 19.8205 14.7926 17.9086 14.7926 15.6753C14.7926 13.4029 15.5878 11.4804 17.1782 9.90771C18.7686 8.335 20.6804 7.54865 22.9137 7.54865C25.1861 7.54865 27.1107 8.3358 28.6875 9.9101C30.2644 11.4844 31.0529 13.3974 31.0529 15.649C31.0529 17.9041 30.2645 19.8258 28.6878 21.414C27.1111 23.0023 25.1952 23.7964 22.9402 23.7964ZM22.9139 20.248C24.2019 20.248 25.2868 19.8002 26.1689 18.9047C27.0509 18.0092 27.4919 16.9326 27.4919 15.6751C27.4919 14.3871 27.0517 13.3022 26.1714 12.4202C25.2911 11.5381 24.2156 11.0971 22.9451 11.0971C21.6745 11.0971 20.5896 11.5389 19.6901 12.4224C18.7908 13.306 18.3411 14.3813 18.3411 15.6486C18.3411 16.9193 18.7888 18.0035 19.6844 18.9013C20.5799 19.7991 21.6564 20.248 22.9139 20.248ZM46.9076 49.4067L39.7281 42.2147C38.9295 42.7967 38.1088 43.1943 37.2661 43.4075C36.4234 43.6207 35.5627 43.7273 34.6839 43.7273C32.1594 43.7273 30.0135 42.8458 28.2462 41.0827C26.479 39.3195 25.5954 37.1785 25.5954 34.6597C25.5954 32.141 26.4778 30.0006 28.2427 28.2385C30.0076 26.4766 32.1506 25.5956 34.6718 25.5956C37.1931 25.5956 39.3347 26.4792 41.0967 28.2464C42.8587 30.0136 43.7397 32.1595 43.7397 34.6841C43.7397 35.5628 43.631 36.4235 43.4136 37.2663C43.1962 38.109 42.7965 38.9273 42.2145 39.7211L49.4066 46.9079L46.9076 49.4067ZM34.6583 40.1789C36.2301 40.1789 37.5431 39.6532 38.5974 38.6019C39.6516 37.5505 40.1787 36.2396 40.1787 34.669C40.1787 33.0985 39.6531 31.785 38.6017 30.7286C37.5504 29.6722 36.2394 29.144 34.6688 29.144C33.0983 29.144 31.7869 29.6705 30.7347 30.7236C29.6825 31.7766 29.1563 33.0897 29.1563 34.6627C29.1563 36.2357 29.6813 37.5483 30.7311 38.6005C31.7809 39.6528 33.09 40.1789 34.6583 40.1789ZM5.93848 42.1399V36.9078C5.93848 35.5648 6.25683 34.417 6.89353 33.4645C7.53023 32.512 8.45056 31.7282 9.65452 31.113C11.2948 30.3061 13.4713 29.5384 16.1842 28.81C18.897 28.0816 21.6782 27.825 24.5277 28.0401C24.1494 28.5575 23.8161 29.1269 23.5279 29.7483C23.2396 30.3698 23.0218 30.9616 22.8746 31.524C20.1746 31.481 17.8218 31.7918 15.8162 32.4564C13.8106 33.121 12.2576 33.7279 11.1572 34.2771C10.6687 34.553 10.2682 34.9242 9.95566 35.3907C9.64316 35.8573 9.48691 36.3754 9.48691 36.9452V38.5915H22.8372C23.2109 39.2276 23.5602 39.8316 23.8851 40.4035C24.2101 40.9754 24.5968 41.5542 25.0451 42.1399H5.93848Z" fill="#20282C"/>
							</svg>							
					</div>
					<ul class="text-center font-euclid text-base space-y-2">
						<li><h3 class="font-euclid text-lg font-bold">Customer Research</h3></li>
						<li>Interviews</li>
						<li>Analytics</li>
						<li>Journey Mapping</li>
						<li>Heuristic Evaluation</li>
					</ul>
				</article>
				<!-- Skill: User Centred Design -->
				<article class="skill flex-1 min-w-[180px] m-1 p-4">
					<div class="skill-image flex justify-center py-2 my-2">
						<svg width="50" height="50" viewBox="0 0 50 50" aria-label="design icon" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.4195 23.0321L23.0198 18.4318L19.3129 14.7373L16.7755 17.2622L14.5382 15.0249L17.088 12.4876L13.269 8.73303L8.68109 13.3458L18.4195 23.0321ZM36.6147 41.3315L41.215 36.6791L37.3835 32.8601L34.8461 35.3974L32.6213 33.1601L35.1586 30.6228L31.5038 26.9554L26.891 31.5682L36.6147 41.3315ZM14.4748 44.0614H5.9388V35.5129L15.9807 25.4585L3.85547 13.3333L13.2168 3.85532L25.4586 16.0451L36.917 4.58672L45.4258 13.0707L33.9551 24.529L46.1573 36.7312L36.7313 46.0927L24.5687 33.9425L14.4747 44.0614H14.4748ZM9.35026 40.6499H13.0085L33.0663 20.5277L29.4204 16.8693L9.35026 36.9792V40.6499ZM31.2433 18.6922L29.4204 16.8693L33.0663 20.5277L31.2433 18.6922Z" fill="#20282C"/>
							</svg>
					</div>
					<ul class="text-center font-euclid text-base space-y-2">
						<li><h3 class="text-lg font-bold">User Centred Design</h3></li>
						<li>Websites</li>
						<li>Applications</li>
						<li>Brand Design</li>
						<li>Enterprise Design</li>
						
					</ul>
				</article>
				<!-- Skill: Facilitation -->
				<article class="skill flex-1 min-w-[180px] m-1 p-4">
					<div class="skill-image flex justify-center m-2 p-2">
						<svg width="50" height="50" viewBox="0 0 50 50" aria-label="users icon" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.73438 42.1399V36.9078C2.73438 35.6319 3.06222 34.4772 3.71792 33.4436C4.37358 32.4101 5.28441 31.6332 6.45042 31.113C9.00174 30.0019 11.3054 29.1991 13.3613 28.7047C15.4173 28.2103 17.5344 27.9631 19.7126 27.9631C21.9068 27.9631 24.0212 28.2082 26.0558 28.6985C28.0905 29.1887 30.3835 29.9936 32.9348 31.113C34.0986 31.6226 35.0175 32.3944 35.6917 33.4286C36.3658 34.4628 36.7029 35.6223 36.7029 36.9071V42.1399H2.73438ZM39.9649 42.1399V36.9328C39.9649 34.7286 39.4114 32.9068 38.3045 31.4674C37.1975 30.0279 35.7329 28.8285 33.9108 27.8691C36.2402 28.1552 38.4369 28.5632 40.501 29.0931C42.5651 29.623 44.2486 30.2268 45.5514 30.9047C46.7221 31.5644 47.6477 32.4128 48.3282 33.4498C49.0087 34.4869 49.349 35.6605 49.349 36.9708V42.1399H39.9649ZM19.7155 24.786C17.3719 24.786 15.4585 24.0444 13.9753 22.5611C12.4921 21.0779 11.7505 19.1634 11.7505 16.8178C11.7505 14.4722 12.4923 12.5577 13.9759 11.0745C15.4595 9.59125 17.3719 8.84964 19.713 8.84964C22.0541 8.84964 23.9683 9.59139 25.4557 11.0749C26.9431 12.5584 27.6868 14.4706 27.6868 16.8116C27.6868 19.1614 26.9442 21.0779 25.4588 22.5611C23.9735 24.0444 22.0591 24.786 19.7155 24.786ZM38.9232 16.8115C38.9232 19.153 38.1798 21.0675 36.6928 22.5549C35.2058 24.0423 33.2901 24.786 30.9457 24.786C30.555 24.786 30.1301 24.7579 29.6709 24.7017C29.2117 24.6454 28.7787 24.5437 28.3718 24.3965C29.2218 23.5119 29.8638 22.4261 30.2978 21.1392C30.7318 19.8523 30.9489 18.4125 30.9489 16.8196C30.9489 15.2269 30.7312 13.8191 30.2959 12.5965C29.8605 11.3738 29.2192 10.2541 28.3718 9.2375C28.7621 9.12611 29.1905 9.03361 29.6571 8.96C30.1237 8.88643 30.5532 8.84964 30.9457 8.84964C33.2871 8.84964 35.202 9.59342 36.6905 11.081C38.179 12.5686 38.9232 14.4788 38.9232 16.8115ZM6.28281 38.5915H33.142V36.9577C33.142 36.4075 32.977 35.8742 32.6472 35.3577C32.3173 34.8413 31.9093 34.4801 31.4232 34.2742C28.9565 33.188 26.8848 32.4581 25.2083 32.0845C23.5318 31.7108 21.6999 31.524 19.7124 31.524C17.7415 31.524 15.903 31.7108 14.1967 32.0845C12.4904 32.4581 10.408 33.188 7.94948 34.2742C7.4717 34.4789 7.07448 34.8397 6.75781 35.3565C6.44115 35.8733 6.28281 36.407 6.28281 36.9577V38.5915ZM19.7104 21.3745C21.0298 21.3745 22.1205 20.9448 22.9824 20.0853C23.8444 19.2258 24.2754 18.1371 24.2754 16.8193C24.2754 15.5015 23.8456 14.4124 22.9861 13.5519C22.1266 12.6914 21.0379 12.2611 19.7201 12.2611C18.4023 12.2611 17.3132 12.6902 16.4527 13.5484C15.5922 14.4066 15.1619 15.4936 15.1619 16.8096C15.1619 18.129 15.591 19.2196 16.4492 20.0816C17.3074 20.9436 18.3945 21.3745 19.7104 21.3745Z" fill="#20282C"/>
							</svg>
							
					</div>
					<ul class="text-center font-euclid text-base space-y-2">
						<li><h3 class="text-lg font-bold">Facilitation</h3></li>
						<li>User Testing</li>
						<li>Design Sprints</li>
						<li>Workshops</li>
						<li>Agile Workflow</li>
					</ul>
				</article>
				<!-- Skill: Figma -->
				<article class="skill flex-1 min-w-[180px] m-1 p-4">
					<div class="skill-image flex justify-center my-2 py-2">
						<svg width="50" height="50" viewBox="0 0 50 50" aria-label="code icon" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_2509_19681)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0782 2H32.595C37.5993 2 41.6731 5.96005 41.6731 10.7142C41.6731 13.4935 40.2794 16.004 38.1205 17.6066C40.2794 19.2113 41.6731 21.7197 41.6731 24.5011C41.6731 29.2532 37.5993 33.2132 32.595 33.2132C30.556 33.2132 28.6721 32.5577 27.1563 31.4575V38.2858C27.1563 43.04 23.0846 47 18.0782 47C13.0738 47 9 43.04 9 38.2858C9 35.5065 10.3938 32.9981 12.5527 31.3934C10.3938 29.7887 9 27.2804 9 24.5011C9 21.7197 10.3938 19.2113 12.5527 17.6066C10.3938 16.004 9 13.4935 9 10.7142C9 5.96005 13.0738 2 18.0782 2ZM23.5168 33.2132H18.0782C15.121 33.2132 12.6395 35.4776 12.6395 38.2858C12.6395 41.0961 15.121 43.3584 18.0782 43.3584C21.0374 43.3584 23.5168 41.0961 23.5168 38.2858V33.2132ZM27.1563 24.5011C27.1563 21.6908 29.6358 19.4264 32.595 19.4264C35.5521 19.4264 38.0336 21.6908 38.0336 24.5011C38.0336 27.3093 35.5521 29.5736 32.595 29.5736C29.6358 29.5736 27.1563 27.3093 27.1563 24.5011ZM18.0099 19.4285C15.0817 19.4615 12.6395 21.7135 12.6395 24.5011C12.6395 27.3093 15.121 29.5736 18.0782 29.5736H23.5168V19.4264H18.0782L18.0099 19.4285ZM23.5168 15.7868V5.64158H18.0782C15.121 5.64158 12.6395 7.90389 12.6395 10.7142C12.6395 13.5245 15.121 15.7868 18.0782 15.7868H23.5168ZM27.1563 15.7868H32.595C35.5521 15.7868 38.0336 13.5245 38.0336 10.7142C38.0336 7.90389 35.5521 5.64158 32.595 5.64158H27.1563V15.7868Z" fill="#20282C"/>
							</g>
							<defs>
							<clipPath id="clip0_2509_19681">
							<rect width="50" height="50" fill="white"/>
							</clipPath>
							</defs>
							</svg>
					</div>
					<ul class="text-center font-euclid text-base space-y-2">
						<li><h3 class="text-lg font-bold">Figma</h3></li>
						<li>Design Systems</li>
						<li>Components</li>
						<li>Prototyping</li>
						<li>Handoff & QA</li>
					</ul>
				</article>
				<!-- Skill: Development -->
				<article class="skill flex-1 min-w-[180px] m-2 p-4">
					<div class="skill-image flex justify-center my-2 pt-1 pb-2">
						<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.7397 32.1354L22.0438 29.8438L17.2 25L21.9792 20.2208L19.6751 17.9291L12.6042 25.0063L19.7397 32.1354ZM30.2605 32.1354L37.3959 25L30.2605 17.8646L27.9564 20.1563L32.8001 25L27.9564 29.8438L30.2605 32.1354ZM5.93872 44.0614V5.92615H44.0739V44.0614H5.93872ZM9.48716 40.5129H40.513V9.48708H9.48716V40.5129Z" fill="#20282C"/>
							</svg>							
					</div>
					<ul class="text-center font-euclid text-base space-y-2">
						<li><h3 class="text-lg font-bold">Development</h3></li>
						<li>Accessibility & SEO</li>
						<li>Responsive Design</li>
					
						<li>HTML5, CSS, JS, Wordpress, SvelteKit, Tailwind, Git</li>
					</ul>
				</article>
			</div>
		</section>

		<section class="mt-6 md:mt-10">
			<h2 class="font-euclid text-2xl md:text-3xl pl-6 font-semibold py-4">BACKGROUND</h2>
		</section>

		<section
			class="split-card flex overflow-clip flex-wrap shadow-custom mb-10 rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm -2 md:max-h-[690px]"
		>
			<div
				class="split-card-image w-full md:w-1/2 bg-slate-950 flex justify-center items-center overflow-hidden"
			>
				<img
					alt="bildeholder"
					src="/images/about/hypergang.webp"
					class="object-contain md:object-scale-down h-auto"
					width="640"
					height="723.6"
					style="object-position: center bottom;"
				/>
			</div>

			<!-- Text Section -->
			<div class="split-card-text w-full md:w-1/2 py-4 px-6 md:px-8">
				<h2 class="font-euclid text-3xl font-semibold my-4">Education</h2>
				<p class="font-euclid font-normal text-lg">
					I finished my <strong>Interaction Design</strong> studies in 2019. Here I learned both
					coding and user centred design. I never stop learning, and completed the
					<strong>Design Lead</strong> study at Hyper Island in 2023. A hybrid work/school environment
					where we focused both on brand design, and on building soft skills like performance in teams
					and leadership.
				</p>

				<h2 class="font-euclid text-3xl font-semibold my-4">Work</h2>
				<p class="font-euclid font-normal text-lg">
					I worked at Studenttorget from 2019 with UX and product design. Here, I refined the user
					experience on <strong>Karrierestart.no</strong>, leading to a 75% growth in users and increased engagement. I recently did an internship at
					<strong>Netlife Design</strong>, where I designed an administrator area for the tool,
					Designmaskinen.
				</p>

				<div class="flex justify-center">
					<button
						class="inline-flex items-center bg-red-500 bg-opacity-80 font-euclid font-medium text-zinc-100 hover:text-zinc-100 my-10 pt-3 pb-3 px-6 rounded-xl transition-all mx-auto"
					>
						<a
							href="https://drive.google.com/file/d/1W6rt980ZRd3HG_2QqSCYhX3zE7FIRdLl/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View my Full Resumé"
							class="resume-btn-custom-link flex items-center translate-y-[0.5px] translate-x-[1px]"
						>
							View my Full Resumé
							<span class="resume-btn-svg-icon ml-0.5 transition-transform">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									viewBox="0 -960 960 960"
									width="20"
								>
									<path
										d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z"
										fill="currentColor"
									/>
								</svg>
							</span>
						</a>
					</button>
				</div>
			</div>
		</section>

		<section class="card-one-two grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
			<!-- Text Card -->
			<div
				class="text-card card-one shadow-custom col-span-1 md:col-span-6 rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm p-6 md:p-10"
			>
				<h2 class="font-euclid text-3xl font-semibold pb-3">Life Beyond Pixels</h2>
				<p class="font-euclid font-normal text-lg pb-4">
					I live in Oslo close to nature, and enjoy to go skiing in the Nordmarka forest, 
					or starting the day with a jog in the park with our dog.
				</p>
				<p class="font-euclid font-normal text-lg">
					I am also very interested in meditation and yoga. 
					It allows me to step into a very focused state that opens up for creativity and flow.
				</p>
			</div>

			<!-- Image Card -->

			<!-- Swiper -->
			<div
				class="swiper mySwiper image-card card-two shadow-custom col-span-1 md:col-span-6 justify-center overflow-hidden bg-opacity-90 backdrop-blur-sm rounded-3xl"
			>
				<div class="swiper-wrapper rounded-3xl image-card">
					<!-- Slide 1 -->
					<div class="swiper-slide  image-card">
						<img
							class="max-h-[520px] w-full rounded-3xl"
							src="/images/about/ulleval2.webp"
							alt="Skibilde"
							width="620"
							height="520"
						/>
					</div>
					<!-- Slide 2 -->
					<div class="swiper-slide image-card rounded-3xl">
						<img
							class="max-h-[520px] w-full"
							src="/images/about/Buddha.webp"
							alt="Buddha"
							width="620"
							height="520"
						/>
					</div>
				</div>
				<!-- Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</section>
	</div>
</article>

<style lang="postcss">
.image-card, .text-card, .skills-card, .split-card {
		position: relative;
	}
.image-card::before, .text-card::before, .skills-card::before, .split-card::before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
  border: 1.3px solid rgba(178, 183, 192,0.3); /* transparent border */
  z-index: 1;
  pointer-events: none; /* to allow interaction with the content underneath */
}

	/* Custom CSS for hover effect */
	.resume-btn-custom-link:hover .resume-btn-svg-icon {
		transform: translateY(-2.5px) translateX(2px); /* Adjust values as needed for the hover effect */
	}

	/* Ensures the SVG icon is slightly lowered to align with the text */
	.resume-btn-svg-icon {
		transform: translateY(-1px);
		transition: transform 0.08s;
	}

	.swiper {
		margin-left: 0;
		margin-right: 0;
	}
	.swiper-pagination {
		bottom: 12px;
	}

    :root {
        --swiper-theme-color: #515255; /* Or any other color you prefer */
    }
</style>
