<script>
	import CaseStudyCard from './CaseStudyCard.svelte';
	import { caseStudies } from '../lib/caseStudies.js';
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.case-card', {
      duration: 0.35,
      opacity: 0.0,
      scale: 0.92,
      y: 18,
      stagger: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: '#work', 
        start: 'top bottom-=340', // Animation starts when the top of the container hits the bottom-=330px of the viewport
        end: 'center top',
        toggleActions: 'play none none none',
      }
    });
  });
</script>

<section id="work" class="text-grey-800 pageSection mt-40 mb-30 md:mt-50 md:mb50 mx-auto">
  <div class="mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl">
    <section>
      <h2 class="font-euclid text-3xl pl-2 md:pl-4 text-slate-600 font-semibold my-4">CASE STUDIES</h2>
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