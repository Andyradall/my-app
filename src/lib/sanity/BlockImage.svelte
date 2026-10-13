<script lang="ts">
	import { urlFor } from './image';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	interface Props {
		portableText: CustomBlockComponentProps<{
			image: {
				extension: string;
				url: string;
				aspectRatio: number;
			};
			caption: string;
		}>;
	}

	let { portableText }: Props = $props();

	let { value } = $derived(portableText);
</script>

<figure>
	<img src={urlFor(value).url()} alt={value.caption} class="my-2" />
</figure>
