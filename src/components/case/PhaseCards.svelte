<script>
	/**
	 * Numbered project phases as a grid of small cards.
	 * @typedef {{ dates: string, title: string, text: string }} Phase
	 * @typedef {Object} Props
	 * @property {Phase[]} phases
	 * @property {3 | 5} [columns] - columns on large screens
	 */

	/** @type {Props} */
	let { phases, columns = 3 } = $props();

	const lgColumns = { 3: 'lg:grid-cols-3', 5: 'lg:grid-cols-5' };
</script>

<ol class="grid grid-cols-1 sm:grid-cols-2 {lgColumns[columns]} gap-4 font-euclid text-slate-600">
	{#each phases as phase (phase.dates)}
		<li class="p-5 rounded-lg bg-zinc-100 flex flex-col gap-2">
			<span class="text-sm font-medium text-red-500">{phase.dates}</span>
			<span class="text-lg font-medium">{phase.title}</span>
			<span class="text-base font-light text-slate-500">{phase.text}</span>
		</li>
	{/each}
</ol>
