<script>
  // If you have any scripts or style imports, they should be here.
  import '../global.css';
  import { fade } from 'svelte/transition';
  import { partytownSnippet } from '@builder.io/partytown/integration'
  import { onMount } from 'svelte'
/*   import { page } from '$app/stores';*/

  // Add the Partytown script to the DOM head
  let scriptEl
  onMount(
    () => {
      if (scriptEl) {
        scriptEl.textContent = partytownSnippet()
      }
    }
  )

</script>

<!-- Your page content will be injected inside this slot -->
<div in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
  <slot></slot>
</div>

<svelte:head>
  <script>
    partytown = {
      forward: ['dataLayer.push'],
      resolveUrl: (url) => {
        const siteUrl = 'https://svelteportfolio-six.vercel.app//proxytown'
  
        if (url.hostname === 'www.googletagmanager.com') {
          const proxyUrl = new URL(`${siteUrl}/gtm`)
  
          const gtmId = new URL(url).searchParams.get('id')
          gtmId && proxyUrl.searchParams.append('id', gtmId)
  
          return proxyUrl
        } else if (url.hostname === 'www.google-analytics.com') {
          const proxyUrl = new URL(`${siteUrl}/ga`)
  
          return proxyUrl
        }
  
        return url
      }
    }
  </script>

  <!-- Config options -->
  <script>
    // Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  </script>


  <script bind:this={scriptEl}></script>

   <!-- Insert `partytownSnippet` here -->

   <!-- GTM script + config -->
   <script
     type="text/partytown"
     src="https://www.googletagmanager.com/gtag/js?id=G-D0STFGWW5L"></script>
   <script type="text/partytown">
     window.dataLayer = window.dataLayer || []
 
     function gtag() {
       dataLayer.push(arguments)
     }
 
     gtag('js', new Date())
     gtag('config', 'G-D0STFGWW5L', {
       page_path: window.location.pathname
     })
   </script>

  <!--script>
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3744201,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  </script-->
  <script type="text/partytown">
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
    </script>
</svelte:head>


