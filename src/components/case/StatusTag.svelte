<script>
	/**
	 * Small status pill used in case studies ("Done", "Shipped 17 Oct", "Proposed").
	 * @typedef {Object} Props
	 * @property {'done' | 'proposed'} [variant]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {Props} */
	let { variant = 'done', children } = $props();
</script>

<span
	class="inline-block rounded-full px-2.5 text-xs leading-5 font-medium tracking-wide align-middle not-italic {variant ===
	'proposed'
		? 'border border-dashed border-red-400 bg-red-100 text-red-600'
		: 'bg-slate-100 text-slate-600'}">{@render children()}</span
>
