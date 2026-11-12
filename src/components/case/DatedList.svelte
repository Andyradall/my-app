<script>
	/**
	 * A dated list (e.g. rounds of feedback): date on the left, title and text on the right.
	 * @typedef {{ date: string, title: string, text: string }} Entry
	 * @typedef {Object} Props
	 * @property {Entry[]} items
	 */

	/** @type {Props} */
	let { items } = $props();
</script>

<ol class="max-w-4xl mx-auto flex flex-col border-b border-zinc-200 font-euclid text-slate-600">
	{#each items as item (item.date)}
		<li class="flex flex-col sm:flex-row gap-1 sm:gap-6 py-5 border-t border-zinc-200">
			<span class="sm:w-24 sm:shrink-0 text-sm font-medium text-red-500">{item.date}</span>
			<div class="flex flex-col gap-1.5">
				<span class="text-lg font-medium">{item.title}</span>
				<span class="text-[18px] font-light leading-[30px]">{item.text}</span>
			</div>
		</li>
	{/each}
</ol>
