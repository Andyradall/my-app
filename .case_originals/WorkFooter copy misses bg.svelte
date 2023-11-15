<script>
    // Import Case studies arrsy
	import { caseStudies } from '../src/lib/caseStudies.js';
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

<section class="bg-grey-100 font-euclid relative">
	<div class="max-w-2xl mx-auto flex justify-between px-2 py-4 bg-grey-100">
		<div class="flex-1 flex flex-col p-8 absolute left-0">
			<a href={prevCaseStudy.href} class="flex flex-col items-start">
				<ul>
					<li
						class="flex items-center uppercase text-lg text-grey-700 hover:text-grey-700 font-medium"
					>
						<svg
							class="prev-arrow fill-current mr-2"
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
					<li class="font-normal text-grey-800 hover:text-grey-700 text-2xl">
						{prevCaseStudy.title}
					</li>
				</ul>
			</a>
		</div>

		<div class="flex-1 flex flex-col p-8 absolute right-0">
			<a href={nextCaseStudy.href} class="flex flex-col items-end">
				<ul>
					<li
						class="flex items-center uppercase text-lg text-grey-700 hover:text-grey-700 font-medium"
					>
						Next
						<svg
							class="next-arrow fill-current ml-2"
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
					<li class="font-normal text-grey-800 hover:text-grey-700 text-2xl">
						{nextCaseStudy.title}
					</li>
				</ul>
			</a>
		</div>
	</div>
</section>

<style>
	section div {
		background-color: rgb(235 238 244);
	}

	a:hover .prev-arrow {
		transform: translateX(-3px);
		transition: transform 0.2s ease-out;
	}

	a:hover .next-arrow {
		transform: translateX(3px);
		transition: transform 0.2s ease-out;
	}

	a:hover .text-grey-800 {
		color: #515255; /* grey-700 */
	}
</style>
