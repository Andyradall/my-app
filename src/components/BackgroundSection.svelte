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

<article id="background" class="relative z-10 text-slate-600 pb-24 md:pb-56 mx-auto">
	<div class="mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl mb-30">
        <section class="mt-4 md:mt-4">
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
    .image-card, .text-card, .split-card {
            position: relative;
        }
    .image-card::before, .text-card::before, .split-card::before{
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
    