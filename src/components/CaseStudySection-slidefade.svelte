<script>
	import CaseStudyCard from './CaseStudyCard.svelte';
	import { caseStudies } from '../lib/caseStudies.js';

  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set('.case-card', {autoAlpha: 0, y: 20});
        ScrollTrigger.batch('.case-card', {
            onEnter: batch => gsap.to(batch, {autoAlpha: 1, y: 0, stagger: 0, duration: 0.4, ease: 'power1.out'}),
            start: '30px bottom',
            end: 'bottom top',
        });
    });
</script>

<section id="work" class="text-grey-800 pageSection mx-auto">
  <div class="mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl mt-40 mb-30">
    <section>
      <h2 class="font-euclid text-xl pl-2 md:pl-4 font-semibold my-4">CASE STUDIES:</h2>
    </section>
    <section class="flex flex-wrap gap-10">
      {#each caseStudies as study}
        <div class="w-full md:w-[calc(50%-20px)]">
          <CaseStudyCard
            title={study.title}
            link={study.href}
            ariaLabel={study.ariaLabel}
            category={study.category}
            image={study.image}
            alt={study.alt}
          />
        </div>
      {/each}
    </section>
  </div>
</section>