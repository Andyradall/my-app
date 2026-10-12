<!--script>
  export let portableText;
  
</script>

<a href={portableText.value.href} target="_blank" rel="noopener noreferrer " class="text-blue-600 underline">
  <slot />
</a-->

<!--This update allows for conditional opening of the links, either in same or new page-->
<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';

  interface Props {
    portableText: MarkComponentProps<{ _type: string; _key: string; href?: string; blank?: boolean }>;
    children?: import('svelte').Snippet;
  }

  let { portableText, children }: Props = $props();

  let href = $derived(portableText.value.href);
  let blank = $derived(portableText.value.blank);

  let targetAttr = $derived(blank ? '_blank' : undefined);
  let relAttr = $derived(blank ? 'noopener noreferrer' : undefined);
</script>

<a 
  href={href} 
  target={targetAttr} 
  rel={relAttr} 
  class="text-blue-600 underline"
>
  {@render children?.()}
</a>