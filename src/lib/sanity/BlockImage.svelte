<script lang="ts">
	import { urlFor } from './image';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<{
		image: {
			extension: string;
			url: string;
			aspectRatio: number;
		};
		caption: string;
	}>;

	$: ({ value } = portableText);
</script>

<figure>
	<img src={urlFor(value).url()} alt={value.caption} class="my-2" />
</figure>
