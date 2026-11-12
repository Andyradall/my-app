<script>
	/**
	 * Palette decision diagram: candidate colours on the left, the final pair on the right.
	 * @typedef {{ hex: string, text: string, tall?: boolean }} Chip
	 * @typedef {Object} Props
	 * @property {string} ariaLabel
	 * @property {string} candidatesLabel
	 * @property {Chip[][]} candidates - rows of candidate chips
	 * @property {string} finalLabel
	 * @property {Chip[]} final
	 */

	/** @type {Props} */
	let { ariaLabel, candidatesLabel, candidates, finalLabel, final } = $props();
</script>

<div
	class="flex flex-col md:flex-row gap-6 items-stretch font-euclid text-slate-600"
	role="img"
	aria-label={ariaLabel}
>
	<div class="flex-1 min-w-0 flex flex-col gap-2.5">
		<span class="text-sm font-medium tracking-wide text-slate-400">{candidatesLabel}</span>
		{#each candidates as row, i (i)}
			<div class="flex gap-2.5">
				{#each row as chip (chip.hex)}
					<div class="flex-1 flex flex-col gap-1.5">
						<span class="rounded-md {chip.tall ? 'h-18' : 'h-10'}" style="background: {chip.hex}"
						></span>
						<span class="text-sm">{chip.text}</span>
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<div class="flex items-center justify-center text-3xl text-slate-300" aria-hidden="true">
		<span class="md:hidden">↓</span><span class="hidden md:inline">→</span>
	</div>
	<div class="flex-1 min-w-0 flex flex-col gap-2.5">
		<span class="text-sm font-medium tracking-wide text-slate-400">{finalLabel}</span>
		{#each final as chip (chip.hex)}
			<div class="flex flex-col gap-1.5">
				<span class="rounded-md {chip.tall ? 'h-18' : 'h-10'}" style="background: {chip.hex}"
				></span>
				<span class="text-sm">{chip.text}</span>
			</div>
		{/each}
	</div>
</div>
