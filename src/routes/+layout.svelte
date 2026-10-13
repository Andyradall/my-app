<script>
	import '../global.css';
	import { partytownSnippet } from '@qwik.dev/partytown/integration';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import Hotjar from '@hotjar/browser';

	let { data, children } = $props();

	// Add Partytown script -> DOM head
	let scriptEl = $state();

	onMount(() => {
		//partytown
		if (scriptEl) {
			// eslint-disable-next-line svelte/no-dom-manipulating -- Partytown needs its snippet injected
			scriptEl.textContent = partytownSnippet();
		}

		// Function to initialize Hotjar after user interaction
		const initHotjar = () => {
			const siteId = 1949695;
			const hotjarVersion = 6;

			try {
				Hotjar.init(siteId, hotjarVersion);
			} catch (error) {
				console.error('Failed to initialize Hotjar:', error);
			}

			// Remove the event listeners after Hotjar has been initialized
			window.removeEventListener('click', initHotjar);
			window.removeEventListener('scroll', initHotjar);
		};

		// Add event listeners for the click and scroll events
		window.addEventListener('click', initHotjar);
		window.addEventListener('scroll', initHotjar);
	});

	// Fly transition for all except landingpage:
	let transitionParams = {
		in: { easing: cubicIn, y: 50, duration: 500 }
	};
</script>

<!-- Fly transition-->
{#key data.pathname}
	<div in:fly|global={transitionParams.in}>
		{@render children?.()}
	</div>
{/key}

<svelte:head>
	<!-- Config options -->
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push']
		};
	</script>
	<script bind:this={scriptEl}></script>
	<!-- GTM script + config -->
	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-D0STFGWW5L"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-D0STFGWW5L', {
			page_path: window.location.pathname
		});
	</script>
</svelte:head>
