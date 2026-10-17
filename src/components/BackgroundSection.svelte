<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay, Pagination } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import { resumeLink } from '../lib/resumeLink.js';

	// Spam protection: the address is split up and only assembled on click,
	// so it never appears as one string in the HTML or the JS bundle.
	const emailParts = ['andershr2', 'gmail.com'];

	function sendEmail() {
		window.location.href = `mailto:${emailParts.join('@')}`;
	}

	onMount(() => {
		new Swiper('.mySwiper', {
			modules: [Autoplay, Pagination],
			loop: true,
			autoplay: {
				delay: 5000
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		});
	});
</script>

<article class="relative z-10 text-slate-600 pb-24 md:pb-56 mx-auto">
	<div class="mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl mb-30">
		<section class="mt-4 md:mt-2">
			<h2 class="font-euclid text-2xl md:text-3xl pl-6 font-semibold py-4">BACKGROUND</h2>
		</section>

		<section
			class="split-card flex overflow-clip flex-wrap shadow-custom mb-10 rounded-3xl bg-zinc-100/75 backdrop-blur-xs -2 md:max-h-[690px]"
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
				<p class="font-euclid font-normal text-lg pb-4">
					I hold a BSc with First-class Honours, focused on innovation and interaction design.
					Design lead diploma from Hyper Island. An ongoing mindfulness teacher education finishing
					summer 2027.
				</p>
				<p class="font-euclid font-normal text-lg">
					I’m currently developing my own application combining AI with biometrics and timeless
					Eastern wisdom traditions.
				</p>
				<h2 class="font-euclid text-3xl font-semibold mt-8 mb-4">Rå Design – Anders Rådal</h2>
				<p class="font-euclid font-normal text-lg pb-4">
					Currently offering my services as a freelance studio.
				</p>
				<p class="font-euclid font-normal text-lg">
					Contact me if you are serious about figuring it out and growing your presence online.
				</p>

				<div class="flex flex-wrap gap-4 my-8">
					<a
						href={resumeLink}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View my Resumé, opens in a new window"
						class="resume-btn-custom-link inline-flex items-center justify-center min-w-[200px] border border-red-500/80 bg-zinc-100/60 font-euclid font-medium text-red-500 py-3 px-6 rounded-xl transition-all hover:bg-zinc-100"
					>
						View my Resumé
						<span class="resume-btn-svg-icon ml-0.5 transition-transform">
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
					<button
						type="button"
						onclick={sendEmail}
						class="inline-flex items-center justify-center min-w-[200px] bg-red-500/80 font-euclid font-medium text-zinc-100 py-3 px-6 rounded-xl transition-all hover:bg-red-500"
					>
						Send me an email
					</button>
				</div>
			</div>
		</section>

		<section class="card-one-two grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
			<!-- Text Card -->
			<div
				class="text-card card-one shadow-custom col-span-1 md:col-span-6 rounded-3xl bg-zinc-100/75 backdrop-blur-xs p-6 md:p-10"
			>
				<h2 class="font-euclid text-3xl font-semibold pb-3">Life Beyond Pixels</h2>
				<p class="font-euclid font-normal text-lg pb-4">
					I am a cross-country ski bum, living in a co-living project at Oslo Science Park, close to
					the forest. I love to go into nature to find calm and reflect between projects.
				</p>
				<p class="font-euclid font-normal text-lg">
					A daily yoga and mindfulness practice allows me to step into a state where noise melts
					away and I am left with creativity and focused flow.
				</p>
			</div>

			<!-- Image Card -->

			<!-- Swiper -->
			<div
				class="swiper mySwiper image-card card-two shadow-custom col-span-1 md:col-span-6 justify-center overflow-hidden backdrop-blur-xs rounded-3xl"
			>
				<div class="swiper-wrapper rounded-3xl image-card">
					<!-- Slide 1 -->
					<div class="swiper-slide image-card">
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
	.image-card,
	.text-card,
	.split-card {
		position: relative;
	}
	.image-card::before,
	.text-card::before,
	.split-card::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		border: 1.3px solid rgba(178, 183, 192, 0.3); /* transparent border */
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
