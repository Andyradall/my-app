<script>
	/**
	 * Renders children only after the component has mounted in the browser.
	 * Server-rendered elements don't play `in:` transitions on hydration, so
	 * delaying them until mount makes intro animations (and DOM-dependent code) work.
	 */
	import { onMount } from 'svelte';

	let { children } = $props();
	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	{@render children?.()}
{/if}
