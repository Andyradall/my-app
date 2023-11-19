<script>
  import CaseStudyCard from '../components/CaseStudyCard.svelte';
  import { caseStudies } from '../lib/caseStudies.js';
</script>

<section class="text-grey-800 pageSection" id="work">
  <div class=" mx-4 md:mx-16 md:max-w-7xl mt-40 mb-30">
    <section>
      <h2 class="font-euclid text-xl pl-2 md:pl-6 font-semibold my-4">CASE STUDIES:</h2>
    </section>
    <section class="flex flex-wrap gap-10">
      {#each caseStudies as study}
        <div class="w-full sm:w-1/2">
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
