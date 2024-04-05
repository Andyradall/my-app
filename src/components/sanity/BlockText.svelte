<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';

  // Accept the portableText prop
  export let portableText: BlockComponentProps;

  
  // Destructure needed properties from portableText
  $: ({ value } = portableText);
  $: ({ style, children, _key } = value);

  // Optional: Check if the block is preceded by a heading, similar to the example
  $: precededByHeading = ['h1', 'h2', 'h3', 'h4', 'h5'].includes(children?.[0]?.style);
</script>
<!-- Optimized Render Logic -->
{#if style === 'h2'}
  <h2 class="font-euclid font-bold text-slate-600 py-2 text-3xl"><slot /></h2>
{:else if style === 'h3'}
  <h3 class="font-euclid font-semibold text-slate-600 py-1 text-2xl"><slot /></h3>
{:else if style === 'normal'}
  <p class="font-euclid font-normal text-slate-600 text-lg py-2"><slot /></p>
{:else}
  <!-- Fallback for unhandled styles -->
  <div class="font-euclid text-base text-red"><slot /></div>
{/if}