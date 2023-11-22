<script>
  // If you have any scripts or style imports, they should be here.
  import '../global.css';
  import { fade } from 'svelte/transition';
  import { partytownSnippet } from '@builder.io/partytown/integration'
  import { onMount } from 'svelte'
  import SvelteSeo from "svelte-seo";
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

<SvelteSeo
title="Anders Rådal Portfolio"
description="Portfolio for Anders Rådal - Product & UX Designer"
canonical="https://www.andersra.com"
keywords="Anders Rådal, UX-Design, Product designer, Oslo, Norway, UX, UI, Design, Portfolio, Hyper Island, Hyper-Island, Anders Rådal UX Portfolio, Anders Rådal UX, Anders Rådal Portfolio, Anders Rådal UX-Design, Anders Rådal Product designer, Anders Rådal Oslo, Anders Rådal Norway, Anders Rådal UX, Anders Rådal UI, Anders Rådal Design, Anders Rådal Portfolio"
openGraph={{
  title: "Anders Rådal UX Portfolio",
  description: "Portfolio for Anders Rådal - Product & UX Designer",
  image: "https://www.andersra.com/PageThumb.webp",
  url: "https://www.andersra.com",
  type: "website",
}}
twitter={{
  card: "summary_large_image",
  site: "@AndersRadal",
  title: "Portfolio for Anders Rådal - Product & UX Designer",
  description: "Portfolio for Anders Rådal - Product & UX Designer",
  image: "https://www.andersra.com/PageThumb.webp",
}}
jsonLd={{
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Anders Rådal Portfolio",
  description: "Portfolio for Anders Rådal - Product & UX Designer",
  url: "https://www.andersra.com/",
}}
/>

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


