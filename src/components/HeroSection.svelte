<script>
	import NavArrow from '../components/NavArrow.svelte';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let inView = false;

	const options = {
    threshold: 0.7, // 1 means the whole element must be visible, 0 means any part
  };
  function handleInViewChange(isInView) {
    inView = isInView;
  }
</script>
<section use:inview={options} on:enter={handleInViewChange} in:fade={{ duration: 400 }} class:visible={inView} id="hero" class="hero pageSection max-w-3xl md:max-w-5xl text-grey-800 mx-auto pt-44 md:pt-80 pb-20 md:pb-50 text-gray-800">
	<div class="text-center">
		<h1>
			<span class="block font-euclid font-bold text-[4rem] md:text-[5.125rem] leading-[5.5rem] pb-10">
			  From Complexity to Clarity.
			</span>
			<br />
			<span class="font-euclid font-normal text-[1.875rem] leading-[2.875rem]">
			  I design digital products that delight users and drive business success. Explore my case studies:
			</span>
		  </h1>
		<NavArrow />
	</div>
</section>


<style lang="postcss">
.hero {
    opacity: 0;
    transition: opacity 0.6s;
  }
.hero.visible {
    opacity: 1;
  }
</style>