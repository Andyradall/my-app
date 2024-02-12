<script>
    // Import Case studies arrsy
	import { caseStudies } from '../lib/caseStudies.js';
	// Get the current path
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	const currentPath = get(page).url.pathname;

	// Find the current case study index
	const currentIndex = caseStudies.findIndex((cs) => cs.href === currentPath);

	// Calculate previous and next indices
	const prevIndex = (currentIndex - 1 + caseStudies.length) % caseStudies.length;
	const nextIndex = (currentIndex + 1) % caseStudies.length;

	// Get previous and next case studies
	const prevCaseStudy = caseStudies[prevIndex];
	const nextCaseStudy = caseStudies[nextIndex];
</script>

<section class="bg-slate-100 bg-opacity-50 font-euclid pt-6 pb-8">
	<div class="max-w-full mx-auto flex justify-between items-stretch px-5 md:px-8 py-4">
		<div class="first-div flex-1 flex flex-col justify-between">
			<a href={prevCaseStudy.href} class="flex flex-col items-start" aria-label="Previous case Study">
				<ul>
					<li
						class="flex items-center uppercase text-lg text-slate-600 hover:text-slate-600 font-medium"
					>
						<svg
							class="prev-arrow fill-current mr-1"
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path
								d="M401.196-232.348 153.304-480l247.892-247.652 63.652 65.174L327.87-525.5h478.826v91H327.87l136.978 136.978-63.652 65.174Z"
							/>
						</svg>
						Prev
					</li>
					<li class="font-normal text-slate-800 hover:text-slate-500 text-2xl">
						{prevCaseStudy.title}
					</li>
				</ul>
			</a>
		</div>

		<div class="second-div flex-1 flex flex-col justify-between">
			<a href={nextCaseStudy.href} class="flex flex-col text-right items-end" aria-label="Next case Study">
				<ul class="w-full">
					<li class="flex justify-end items-center uppercase text-lg text-slate-600 hover:text-slate-600 font-medium">
						Next
						<svg
							class="next-arrow text-right fill-current ml-1"
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path
								d="m560.239-232.348-63.652-65.174L633.565-434.5H151.869v-91h481.696L496.587-662.478l63.652-65.174L808.131-480 560.239-232.348Z"
							/>
						</svg>
					</li>
					<li class="font-normal text-slate-800 hover:text-slate-500 text-2xl">
						{nextCaseStudy.title}
					</li>
				</ul>
			</a>
		</div>
	</div>
</section>

<style>
.first-div {
    left: 0;
    padding-left: 0; /* or a smaller value */
}

.second-div {
    right: 0;
    padding-right: 0; /* or a smaller value */
}

	section div {
		/* background-color: rgb(235 238 244); */
		background-color: #E5EBED;
	}

	a:hover .prev-arrow {
		transform: translateX(-3px);
		transition: transform 0.1s ease-out;
	}

	a:hover .next-arrow {
		transform: translateX(3px);
		transition: transform 0.1s ease-out;
	}

	a:hover .text-grey-800 {
		color: #515255; /* grey-700 */
	}
</style>
