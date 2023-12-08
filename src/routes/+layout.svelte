<script>
	import '../global.css';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import Hotjar from '@hotjar/browser';

	export let data;

	// Add Partytown script -> DOM head
	let scriptEl;
	onMount(() => {

    if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}

    // Initialize Hotjar
    const siteId = 1949695;
    const hotjarVersion = 6; 

  try {
    Hotjar.init(siteId, hotjarVersion);
  } catch (error) {
    console.error('Failed to initialize Hotjar:', error);
  }
	});

	// Fly transition -->
	let transitionParams = {
		in: { easing: cubicIn, y: 50, duration: 500 }
		// out: { easing: cubicIn, y: -50, duration: 300 }
	};
</script>

<!-- Fly transition -->
{#key data.pathname}
	<div in:fly={transitionParams.in}>
		<slot />
	</div>
{/key}

<svelte:head>
	<script>
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://www.andersra.com//proxytown';

				if (url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`);

					const gtmId = new URL(url).searchParams.get('id');
					gtmId && proxyUrl.searchParams.append('id', gtmId);

					return proxyUrl;
				} else if (url.hostname === 'www.google-analytics.com') {
					const proxyUrl = new URL(`${siteUrl}/ga`);

					return proxyUrl;
				}

				return url;
			}
		};
	</script>

	<!-- Config options -->
	<!-- Config options -->
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push']
		};
	</script>

	<script bind:this={scriptEl}></script>

	<!-- Insert `partytownSnippet` here -->

	<!-- GTM script + config -->
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

	<!-- Clarity script -->
	<!--script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jyzjmwnkmx");
  </script->

  <!-- Hotjar script -->
	<!--script type="text/javascript">
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3744201, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  </script-->
</svelte:head>
