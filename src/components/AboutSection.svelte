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
			<h2 class="font-euclid text-3xl text-slate-550 font-semibold pl-6 my-4">ABOUT ME</h2>
		</section>

		<section class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
			<!-- Text Card -->
			<div
				class="text-card card-one shadow-custom col-span-1 md:col-span-6 rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm border-2 border-zinc-350/30 p-6 md:p-10"
			>
				<h2 class="font-euclid text-3xl font-semibold pb-3">
					Anders Rådal
				</h2>
				<p class="font-euclid font-normal pb-4 text-lg">
					Born in 84, I grew up with hand me down computers running Ms Dos. 
					I remember playing Wolfenstein 3D and chatting on IRC, 
					after pulling a network cable across my parents lawn to access the web. 
					I have always been interested in art and design and even graffiti and subcultures.
				</p>
				<h2 class="font-euclid text-3xl font-semibold pb-3">Designin with Impact</h2>
				<p class="font-euclid font-normal pb-4 text-lg">
					I fell in love with Interaction design when I realised it allowed me to mix coding, creativity, 
					and business strategy all into one, it was like the stars aligned and it just made sense. 
					In my work, I aim for solutions that look good, works well for the users and creates business growth.
				</p>
			</div>

			<!-- Image Card -->
			<div
				class="image-card card-two shadow-custom col-span-1 md:col-span-6 flex justify-center items-center overflow-hidden box-border border-2 border-zinc-350/30 rounded-3xl"
			>
				<img
					class="object-cover w-full max-h-[540px] h-full"
					alt="Profile"
					src="/images/about/profil-1.webp"
					height="620px"
					width="622.55"
					style="object-position: center top;"
				/>
			</div>
		</section>

		<section class="skills-card shadow-custom text-slate-600 bg-zinc-100 backdrop-blur-sm bg-opacity-75 border-2 border-zinc-350/30 rounded-3xl p-6 md:p-10">
			<!-- Card Header -->
			<header class="text-left">
				<h2 class="font-euclid text-3xl font-semibold pb-2">Skills</h2>
				<p class="font-euclid font-normal max-w-3xl text-lg">My creative and technical toolbox that I use in my projects. This assets allow me to decipher complexity and chaos, and to end up with clear and performant solutions. </p>
			</header>

			<!-- Skills List -->
			<div class="skills flex md:pt-16 md:pb-10 flex-wrap justify-around gap-2">
				<!-- Skill: Customer Research -->
				<article class="skill flex-1 min-w-[180px] m-1 p-4">
					<div class="skill-image flex justify-center py-2 my-2">
						<svg
							width="48"
							height="48"
							viewBox="0 0 48 48"
							aria-label="research"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_1309_1277)">
								<path
									d="M33.2308 20.3077C33.2308 16.75 31.9663 13.7067 29.4375 11.1779C26.9087 8.64904 23.8654 7.38462 20.3077 7.38462C16.75 7.38462 13.7067 8.64904 11.1779 11.1779C8.64904 13.7067 7.38462 16.75 7.38462 20.3077C7.38462 23.8654 8.64904 26.9087 11.1779 29.4375C13.7067 31.9663 16.75 33.2308 20.3077 33.2308C23.8654 33.2308 26.9087 31.9663 29.4375 29.4375C31.9663 26.9087 33.2308 23.8654 33.2308 20.3077ZM48 44.3077C48 45.3077 47.6346 46.1731 46.9038 46.9038C46.1731 47.6346 45.3077 48 44.3077 48C43.2692 48 42.4038 47.6346 41.7115 46.9038L31.8173 37.0385C28.375 39.4231 24.5385 40.6154 20.3077 40.6154C17.5577 40.6154 14.9279 40.0817 12.4183 39.0144C9.90865 37.9471 7.74519 36.5048 5.92788 34.6875C4.11058 32.8702 2.66827 30.7067 1.60096 28.1971C0.533654 25.6875 0 23.0577 0 20.3077C0 17.5577 0.533654 14.9279 1.60096 12.4183C2.66827 9.90865 4.11058 7.74519 5.92788 5.92788C7.74519 4.11058 9.90865 2.66827 12.4183 1.60096C14.9279 0.533654 17.5577 0 20.3077 0C23.0577 0 25.6875 0.533654 28.1971 1.60096C30.7067 2.66827 32.8702 4.11058 34.6875 5.92788C36.5048 7.74519 37.9471 9.90865 39.0144 12.4183C40.0817 14.9279 40.6154 17.5577 40.6154 20.3077C40.6154 24.5385 39.4231 28.375 37.0385 31.8173L46.9327 41.7115C47.6442 42.4231 48 43.2885 48 44.3077Z"
									fill="#2A363B"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1309_1277">
									<rect width="48" height="48" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<ul class="text-center font-euclid text-base space-y-2">
						<li><h3 class="font-euclid text-lg font-bold">Customer Research</h3></li>
						<li>Interviews</li>
						<li>Journey Mapping</li>
						<li>Insights Analysis</li>
						<li>Heuristic Evaluation</li>
					</ul>
				</article>
				<!-- Skill: User Centred Design -->
				<article class="skill flex-1 min-w-[180px] m-1 p-4">
					<div class="skill-image flex justify-center py-2 my-2">
						<svg
							width="48"
							height="49"
							viewBox="0 0 48 49"
							aria-label="pen"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M35.3019 22.6971L39.488 18.5092L29.4893 8.50625L25.3032 12.6942L14.2647 1.67754C12.185 -0.403077 8.79881 -0.403077 6.71909 1.67754L1.65311 6.74572C-0.426609 8.82634 -0.426609 12.214 1.65311 14.2946L12.6649 25.3113L0 38.0084V48.0114H9.99864L22.6903 35.3142L33.7021 46.3309C36.2351 48.865 39.648 47.9313 41.2477 46.3309L46.3137 41.2627C48.3934 39.1821 48.3934 35.7944 46.3137 33.7138L35.3019 22.6971ZM16.4778 21.5235L5.43926 10.5068L10.4786 5.43867L13.8648 8.82634L10.7185 12.0006L14.478 15.7617L17.6509 12.5875L21.5171 16.4553L16.4778 21.5235ZM37.4882 42.5697L26.4764 31.5531L31.5424 26.4849L35.4085 30.3528L32.2356 33.527L35.9951 37.2882L39.168 34.1139L42.5542 37.5016L37.4882 42.5697ZM47.2203 10.7736C47.4674 10.5268 47.6635 10.2337 47.7973 9.911C47.9311 9.58831 48 9.24238 48 8.89303C48 8.54368 47.9311 8.19775 47.7973 7.87506C47.6635 7.55237 47.4674 7.25925 47.2203 7.01247L40.9811 0.770606C39.7279 -0.483101 37.9948 -0.00295782 37.2216 0.770606L32.3423 5.65206L42.3409 15.655L47.2203 10.7736Z"
								fill="#2A363B"
							/>
						</svg>
					</div>
					<ul class="text-center font-euclid text-base space-y-2">
						<li><h3 class="text-lg font-bold">User Centred Design</h3></li>
						<li>Websites</li>
						<li>Applications</li>
						<li>Enterprise Design</li>
						<li>Brand Design</li>
					</ul>
				</article>
				<!-- Skill: Facilitation -->
				<article class="skill flex-1 min-w-[180px] m-1 p-4">
					<div class="skill-image flex justify-center m-2 p-2">
						<svg
							width="58"
							height="48"
							viewBox="0 0 58 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_1309_1281)">
								<path
									d="M13.05 0C14.9728 0 16.8169 0.790176 18.1765 2.1967C19.5362 3.60322 20.3 5.51088 20.3 7.5C20.3 9.48912 19.5362 11.3968 18.1765 12.8033C16.8169 14.2098 14.9728 15 13.05 15C11.1272 15 9.28311 14.2098 7.92348 12.8033C6.56384 11.3968 5.8 9.48912 5.8 7.5C5.8 5.51088 6.56384 3.60322 7.92348 2.1967C9.28311 0.790176 11.1272 0 13.05 0ZM46.4 0C48.3228 0 50.1669 0.790176 51.5265 2.1967C52.8862 3.60322 53.65 5.51088 53.65 7.5C53.65 9.48912 52.8862 11.3968 51.5265 12.8033C50.1669 14.2098 48.3228 15 46.4 15C44.4772 15 42.6331 14.2098 41.2735 12.8033C39.9138 11.3968 39.15 9.48912 39.15 7.5C39.15 5.51088 39.9138 3.60322 41.2735 2.1967C42.6331 0.790176 44.4772 0 46.4 0ZM0 28.0031C0 22.4813 4.33187 18 9.66969 18H13.5394C14.9803 18 16.3488 18.3281 17.5813 18.9094C17.4634 19.5844 17.4091 20.2875 17.4091 21C17.4091 24.5813 18.9316 27.7969 21.3331 30H1.93031C0.87 30 0 29.1 0 28.0031ZM36.7303 30H36.6669C39.0775 27.7969 40.5909 24.5813 40.5909 21C40.5909 20.2875 40.5275 19.5937 40.4188 18.9094C41.6513 18.3187 43.0197 18 44.4606 18H48.3303C53.6681 18 58 22.4813 58 28.0031C58 29.1094 57.13 30 56.0697 30H36.7303ZM20.3 21C20.3 18.6131 21.2166 16.3239 22.8482 14.636C24.4797 12.9482 26.6926 12 29 12C31.3074 12 33.5203 12.9482 35.1518 14.636C36.7834 16.3239 37.7 18.6131 37.7 21C37.7 23.3869 36.7834 25.6761 35.1518 27.364C33.5203 29.0518 31.3074 30 29 30C26.6926 30 24.4797 29.0518 22.8482 27.364C21.2166 25.6761 20.3 23.3869 20.3 21ZM11.6 45.4969C11.6 38.5969 17.0103 33 23.6803 33H34.3197C40.9897 33 46.4 38.5969 46.4 45.4969C46.4 46.875 45.3216 48 43.9803 48H14.0197C12.6875 48 11.6 46.8844 11.6 45.4969Z"
									fill="#2A363B"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1309_1281">
									<rect width="58" height="48" fill="white" />
								</clipPath>
							</defs>
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
						<svg
							width="44"
							height="48"
							viewBox="0 0 44 48"
							aria-label="Figma"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.6777 47.4668C19.778 47.4668 23.0859 43.9344 23.0859 39.5557V31.6446H15.6777C11.5774 31.6446 8.26953 35.177 8.26953 39.5557C8.26953 43.9344 11.5774 47.4668 15.6777 47.4668ZM8.26953 23.7334C8.26953 19.3547 11.5774 15.8223 15.6777 15.8223H23.0859V31.6446H15.6777C11.5774 31.6446 8.26953 28.1121 8.26953 23.7334ZM8.26953 7.91114C8.26953 3.53242 11.5774 0 15.6777 0H23.0859V15.8223H15.6777C11.5774 15.8223 8.26953 12.2899 8.26953 7.91114ZM23.0859 0H30.494C34.5944 0 37.9022 3.53242 37.9022 7.91114C37.9022 12.2899 34.5944 15.8223 30.494 15.8223H23.0859V0ZM37.9022 23.7334C37.9022 28.1121 34.5944 31.6446 30.494 31.6446C26.3937 31.6446 23.0859 28.1121 23.0859 23.7334C23.0859 19.3547 26.3937 15.8223 30.494 15.8223C34.5944 15.8223 37.9022 19.3547 37.9022 23.7334Z"
								fill="#2A363B"
							/>
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
					<div class="skill-image flex justify-center my-2 py-2">
						<svg
							width="58"
							height="48"
							viewBox="0 0 58 48"
							fill="none"
							aria-label="code"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_1309_1287)">
								<path
									d="M53.2729 -0.315918H4.72945C3.55904 -0.315918 2.43656 0.14987 1.60896 0.978978C0.78135 1.80809 0.316406 2.9326 0.316406 4.10513V43.8946C0.316406 45.0671 0.78135 46.1916 1.60896 47.0208C2.43656 47.8499 3.55904 48.3156 4.72945 48.3156H53.2729C54.4434 48.3156 55.5658 47.8499 56.3934 47.0208C57.221 46.1916 57.686 45.0671 57.686 43.8946V4.10513C57.686 2.9326 57.221 1.80809 56.3934 0.978978C55.5658 0.14987 54.4434 -0.315918 53.2729 -0.315918ZM19.2925 28.863C19.7607 29.2148 20.0702 29.7384 20.1529 30.3188C20.2357 30.8992 20.0849 31.4887 19.7338 31.9578C19.3827 32.4268 18.86 32.7368 18.2806 32.8198C17.7013 32.9027 17.1128 32.7516 16.6447 32.3999L7.81858 25.7683C7.54454 25.5624 7.32212 25.2954 7.16892 24.9884C7.01573 24.6815 6.93597 24.343 6.93597 23.9999C6.93597 23.6567 7.01573 23.3182 7.16892 23.0113C7.32212 22.7043 7.54454 22.4373 7.81858 22.2314L16.6447 15.5999C17.1128 15.2481 17.7013 15.0971 18.2806 15.18C18.86 15.2629 19.3827 15.573 19.7338 16.042C20.0849 16.511 20.2357 17.1005 20.1529 17.6809C20.0702 18.2613 19.7607 18.7849 19.2925 19.1367L12.8191 23.9999L19.2925 28.863ZM35.5353 9.13408L26.7092 40.0814C26.6339 40.3655 26.5029 40.6317 26.3238 40.8644C26.1447 41.0972 25.921 41.2918 25.6659 41.4369C25.4108 41.582 25.1294 41.6747 24.8381 41.7095C24.5469 41.7444 24.2516 41.7207 23.9695 41.6399C23.6875 41.559 23.4244 41.4227 23.1956 41.2388C22.9667 41.0548 22.7768 40.8271 22.6369 40.5688C22.4971 40.3104 22.41 40.0268 22.3808 39.7343C22.3517 39.4419 22.381 39.1466 22.4671 38.8657L31.2932 7.91829C31.4629 7.36493 31.8424 6.90031 32.3503 6.62426C32.8582 6.34822 33.4539 6.28277 34.0094 6.44199C34.565 6.60121 35.036 6.97239 35.3213 7.47577C35.6066 7.97915 35.6834 8.57456 35.5353 9.13408ZM50.1838 25.7683L41.3577 32.3999C40.8896 32.7516 40.3011 32.9027 39.7218 32.8198C39.1424 32.7368 38.6197 32.4268 38.2686 31.9578C37.9175 31.4887 37.7667 30.8992 37.8495 30.3188C37.9322 29.7384 38.2417 29.2148 38.7099 28.863L45.1833 23.9999L38.7099 19.1367C38.4781 18.9625 38.2828 18.7443 38.1352 18.4945C37.9875 18.2447 37.8904 17.9683 37.8495 17.6809C37.8085 17.3935 37.8244 17.1009 37.8963 16.8197C37.9682 16.5385 38.0947 16.2742 38.2686 16.042C38.4424 15.8097 38.6603 15.6141 38.9096 15.4662C39.1589 15.3183 39.4349 15.221 39.7218 15.18C40.0086 15.1389 40.3007 15.1549 40.5814 15.2269C40.8621 15.299 41.1259 15.4257 41.3577 15.5999L50.1838 22.2314C50.4579 22.4373 50.6803 22.7043 50.8335 23.0113C50.9867 23.3182 51.0664 23.6567 51.0664 23.9999C51.0664 24.343 50.9867 24.6815 50.8335 24.9884C50.6803 25.2954 50.4579 25.5624 50.1838 25.7683Z"
									fill="#2A363B"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1309_1287">
									<rect width="58" height="48" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<ul class="text-center font-euclid text-base space-y-2">
						<li><h3 class="text-lg font-bold">Development</h3></li>
						<li>Accessibility</li>
						<li>Responsive Design</li>
						<li>SEO</li>
						<li>HTML5, CSS, JS, <br />SvelteKit, Tailwind, Git</li>
					</ul>
				</article>
			</div>
		</section>

		<section class="mt-6 md:mt-10">
			<h2 class="font-euclid text-3xl pl-6 font-semibold py-4">BACKGROUND</h2>
		</section>

		<section
			class="split-card flex overflow-clip flex-wrap shadow-custom mb-10 rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm border-2 border-zinc-350/30 md:max-h-[690px]"
		>
			<div
				class="split-card-image w-full md:w-1/2 bg-slate-950 flex justify-center items-center overflow-hidden"
			>
				<img
					alt="bildeholder"
					src="/images/about/bildeholder.webp"
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
					experience on <strong>Karrierestart.no</strong>, transforming the onboarding processes,
					and driving user engagement. I recently did an internship at
					<strong>Netlife Design</strong>, where I designed an administrator area for the tool,
					Designmaskinen.
				</p>

				<div class="flex justify-center">
					<!-- This is the containing div that centers the button -->
					<button
						class="inline-flex items-center bg-red-500 bg-opacity-85 font-euclid font-medium text-zinc-100 hover:text-zinc-100 my-10 py-2.5 px-6 rounded-xl transition-all mx-auto"
					>
						<a
							href="https://drive.google.com/file/d/1W6rt980ZRd3HG_2QqSCYhX3zE7FIRdLl/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View my Full Resumé"
							class="resume-btn-custom-link flex items-center"
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
				class="text-card card-one shadow-custom col-span-1 md:col-span-6 rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm border-2 border-zinc-350/30 p-6 md:p-10"
			>
				<h2 class="font-euclid text-3xl font-semibold pb-3">Life Beyond Pixels</h2>
				<p class="font-euclid font-normal text-lg pb-4">
					I live in Oslo close to nature, and enjoy to go skiing and cycling in the Nordmarka forest, 
					or starting the day with a jog in Frognerparken with our dog.
				</p>
				<p class="font-euclid font-normal text-lg">
					I am also very interested in meditation and yoga. 
					It allows me to step into a very focused state that opens up for creativity and flow.
				</p>
			</div>

			<!-- Image Card -->

			<!-- Swiper -->
			<div
				class="swiper mySwiper image-card card-two shadow-custom col-span-1 md:col-span-6 justify-center overflow-hidden bg-opacity-90 backdrop-blur-sm border-2 border-zinc-350/30 rounded-3xl"
			>
				<div class="swiper-wrapper">
					<!-- Slide 1 -->
					<div class="swiper-slide">
						<img
							class=" max-h-[520px] w-full "
							src="/images/about/Skibilde5.webp"
							alt="Skibilde"
							width="473"
							height="487"
						/>
					</div>
					<!-- Slide 2 -->
					<div class="swiper-slide">
						<img
							class=" max-h-[520px] w-full"
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
