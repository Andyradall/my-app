<script>
	import StatusTag from './StatusTag.svelte';

	/**
	 * Two cards side by side: the plan as sent to the client, and what actually happened.
	 * @typedef {{ text: string, tag?: string, variant?: 'done' | 'proposed' }} Outcome
	 * @typedef {Object} Props
	 * @property {string} planLabel
	 * @property {string[]} plan
	 * @property {string} [quote]
	 * @property {string} [source]
	 * @property {string} actualLabel
	 * @property {Outcome[]} actual
	 */

	/** @type {Props} */
	let { planLabel, plan, quote = '', source = '', actualLabel, actual } = $props();
</script>

<div class="flex flex-col md:flex-row gap-8 font-euclid text-slate-600">
	<div class="flex-1 min-w-0 p-7 rounded-lg border border-zinc-200 flex flex-col gap-4">
		<span class="text-sm font-medium tracking-wide text-slate-400">{planLabel}</span>
		<ol class="list-decimal pl-6 space-y-2 text-[18px] font-light leading-[30px]">
			{#each plan as step (step)}
				<li>{step}</li>
			{/each}
		</ol>
		{#if quote}
			<blockquote>
				<p class="text-[18px] font-light leading-[30px] italic">{quote}</p>
			</blockquote>
		{/if}
		{#if source}
			<span class="text-sm font-light text-slate-400">{source}</span>
		{/if}
	</div>
	<div class="flex-1 min-w-0 p-7 rounded-lg bg-zinc-100 flex flex-col gap-4">
		<span class="text-sm font-medium tracking-wide text-slate-400">{actualLabel}</span>
		<ol class="list-decimal pl-6 space-y-2 text-[18px] font-light leading-[30px]">
			{#each actual as item (item.text)}
				<li>
					{item.text}
					{#if item.tag}<StatusTag variant={item.variant}>{item.tag}</StatusTag>{/if}
				</li>
			{/each}
		</ol>
	</div>
</div>
