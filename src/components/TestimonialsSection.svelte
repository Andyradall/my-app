<script>
	import { onMount } from 'svelte';
	import client from '../lib/sanityClient';

	let testimonials = [];

	onMount(async () => {
		const query = `*[_type == "testimonial"]{
      userName,
      userImage{
        asset->{
          _id,
          url
        },
        alt
      },
      workPlace,ß
      testimonialText
    }`;
		testimonials = await client.fetch(query);
	});
</script>

<article class="relative z-10 text-slate-600 pb-2 md:pb-0 md:pt-2 mx-auto">
  <div class="mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl">
      <section class="">
          <h2 class="font-euclid text-2xl md:text-3xl text-zinc-100 font-semibold pl-6 my-4">
              TESTIMONIALS
          </h2>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-12 items-start gap-10">
          {#each testimonials as testimonial}
              <div
                  class="testimonial-card md:col-span-4 p-8 rounded-3xl bg-zinc-100 bg-opacity-100 backdrop-blur-sm shadow-custom"
              >
                  <div class="testimonial-content mb-4">
                      <p class="font-euclid text-lg text-slate-500">{testimonial.testimonialText}</p>
                  </div>
                  <div class="testimonial-user flex items-center space-x-4">
                      <img
                          class="w-12 h-12 rounded-full testimonial-img"
                          alt="User Img"
                          src={testimonial.userImage.asset.url}
                      />
                      <div>
                          <div class="text-sm font-bold">{testimonial.userName}</div>
                          <div class="text-neutral-800 text-sm font-normal leading-tight">
                              {testimonial.workPlace}
                          </div>
                      </div>
                  </div>
              </div>
          {/each}
      </section>
  </div>
</article>

<style lang="postcss">

	.testimonial-card,
	.testimonial-img {
		position: relative;
	}

	.testimonial-card::before,
    .testimonial-img::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		border: 1.3px solid rgba(178, 183, 192, 0.3); /* transparent border */
		z-index: 1;
		pointer-events: none; /* to allow interaction with the content underneath */
	}
</style>
