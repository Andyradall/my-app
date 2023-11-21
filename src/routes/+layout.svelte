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
  <!-- Config options -->
  <script>
    // Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  </script>

  <!-- `partytownSnippet` is inserted here -->
  <script bind:this={scriptEl}></script>
  <script lang="text/partytown">
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3744201,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  </script>

</svelte:head>