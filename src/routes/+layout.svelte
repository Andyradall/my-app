<script>
  // If you have any scripts or style imports, they should be here.
  import '../global.css';
  import { partytownSnippet } from '@builder.io/partytown/integration'
  import { onMount } from 'svelte'
  import SvelteSeo from "svelte-seo";

  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  export let data;
  import Navbar from './Navbar.svelte';
  import { page } from '$app/stores';


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

  let transitionParams = {
    in: { easing: cubicIn, y: 50, duration: 500},
    //out: { easing: cubicIn, y: -50, duration: 300 }
  };
</script>

{#if data.pathname === '/'}
  <Navbar />
{/if}

{#key data.pathname}
  <div in:fly={transitionParams.in}>
    <slot />
  </div>
{/key}

<svelte:head>

<SvelteSeo
title="Anders Rådal Portfolio"
description="Portfolio for Anders Rådal - Product & UX Designer"
canonical="https://www.andersra.com"
keywords="Anders Rådal, UX-Design, Product designer, Oslo, Norway, UX, UI, Design, Portfolio, Hyper Island, Hyper-Island, Anders Rådal UX Portfolio, Anders Rådal UX, Anders Rådal Portfolio, Anders Rådal UX-Design, Anders Rådal Product designer, Anders Rådal Oslo, Anders Rådal Norway, Anders Rådal UX, Anders Rådal UI, Anders Rådal Design, Anders Rådal Portfolio"
openGraph={{
  title: "Anders Rådal UX Portfolio",
  description: "Portfolio for Anders Rådal - Product & UX Designer",
  images: [
    {
      url: "https://www.andersra.com/PageThumb.webp",
      width: 700,
      height: 493,
      alt: "Page Thumbnail", 
    }  ],
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
  <script type="text/javascript">
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

  <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "jyzjmwnkmx");
  </script>

</svelte:head>


