<script>
	/**
	 * PageSpeed score tile for dark sections: optional "before" score struck through, then the score.
	 * @typedef {Object} Props
	 * @property {string} label - e.g. "Front page · Mobile"
	 * @property {number} score
	 * @property {number} [before]
	 * @property {string} details - the other category scores
	 * @property {string} lcp
	 */

	/** @type {Props} */
	let { label, score, before, details, lcp } = $props();
</script>

<li class="px-6 py-7 rounded-lg bg-zinc-800 flex flex-col gap-1.5 font-euclid text-zinc-150">
	<span class="text-sm font-light text-zinc-300">{label}</span>
	<span class="flex items-baseline gap-3.5">
		{#if before !== undefined}
			<span class="text-3xl leading-none text-zinc-500 line-through">
				<span class="sr-only">from</span>{before}</span
			>
			<span class="sr-only">to</span>
		{/if}
		<span class="text-7xl leading-none font-medium text-zinc-100">{score}</span>
	</span>
	<span class="text-sm font-light">{details}</span>
	<span class="text-sm font-light text-zinc-300">{lcp}</span>
</li>
