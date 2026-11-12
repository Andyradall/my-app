<script>
	import StatusTag from './StatusTag.svelte';

	/**
	 * "Shipped" / "Proposed, not shipped" box with a status tag and a short text.
	 * @typedef {Object} Props
	 * @property {'shipped' | 'proposed'} [variant]
	 * @property {string} label
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {Props} */
	let { variant = 'shipped', label, children } = $props();
</script>

<div
	class="flex-1 min-w-0 p-6 rounded-lg flex flex-col gap-2.5 font-euclid text-slate-600 {variant ===
	'proposed'
		? 'bg-red-100 border border-dashed border-red-300'
		: 'bg-zinc-100'}"
>
	<span class="self-start">
		<StatusTag variant={variant === 'proposed' ? 'proposed' : 'done'}>{label}</StatusTag>
	</span>
	<p class="text-[18px] font-light leading-[30px]">{@render children()}</p>
</div>
