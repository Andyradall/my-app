<!--script>
  export let portableText;
  
</script>

<a href={portableText.value.href} target="_blank" rel="noopener noreferrer " class="text-blue-600 underline">
  <slot />
</a-->

<!--This update allows for conditional opening of the links, either in same or new page-->
<script lang="ts">
  import type { PortableTextMarkComponentProps } from '@portabletext/svelte';

  export let portableText: PortableTextMarkComponentProps;

  $: href = portableText.value.href;
  $: blank = portableText.value.blank;

  $: targetAttr = blank ? '_blank' : undefined;
  $: relAttr = blank ? 'noopener noreferrer' : undefined;
</script>

<a 
  href={href} 
  target={targetAttr} 
  rel={relAttr} 
  class="text-blue-600 underline"
>
  <slot />
</a>