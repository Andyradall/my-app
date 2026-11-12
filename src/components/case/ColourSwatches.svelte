<script>
	/**
	 * A grid of brand colour swatches (client palette shown as content).
	 * @typedef {{ hex: string, text: string, border?: boolean }} Swatch
	 * @typedef {Object} Props
	 * @property {Swatch[]} colours
	 * @property {boolean} [dark] - true when shown on a dark section
	 */

	/** @type {Props} */
	let { colours, dark = false } = $props();
</script>

<ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 font-euclid">
	{#each colours as colour (colour.hex)}
		<li class="flex flex-col gap-2">
			<span
				class="h-22 rounded-md {colour.border
					? dark
						? 'border border-zinc-700'
						: 'border border-zinc-200'
					: ''}"
				style="background: {colour.hex}"
			></span>
			<span class="text-sm font-medium {dark ? 'text-zinc-100' : 'text-slate-600'}"
				>{colour.hex}</span
			>
			<span class="text-sm font-light {dark ? 'text-zinc-300' : 'text-slate-400'}"
				>{colour.text}</span
			>
		</li>
	{/each}
</ul>
