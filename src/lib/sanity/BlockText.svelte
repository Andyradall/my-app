<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { BlockComponentProps } from '@portabletext/svelte';

  interface Props {
    portableText: BlockComponentProps;
    children?: Snippet;
  }

  let { portableText, children }: Props = $props();

  // `spans` is the block's own content array; `children` is the rendered snippet
  let value = $derived(portableText.value);
  let style = $derived(value.style);
  let spans = $derived(value.children);
  // Legacy 'link' blocks carry an href directly on the block
  let href = $derived((value as { href?: string }).href);
</script>
<!-- Optimized Render Logic -->
{#if style === 'h2'}
  <h2 class="text-[34px] font-euclid font-medium leading-[48px] text-slate-600 py-2">{@render children?.()}</h2>
{:else if style === 'h3'}
  <h3 class="text-[24px] font-euclid font-normal leading-[48px] text-slate-600 py-1">{@render children?.()}</h3>
{:else if style === 'normal'}
  <p class="text-[18px] font-euclid font-light text-slate-600 leading-[30px] pt-2 pb-3">{@render children?.()}</p>
{:else if style === 'link'}
  <a {href} target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">{spans[0]?.text}</a>
{:else}

  <!-- Fallback for unhandled styles -->
  <div class="font-euclid text-base text-red">{@render children?.()}</div>
{/if}
