<script>
  import CaseStudyCard from '../components/CaseStudyCard.svelte';
  import { caseStudies } from '../lib/caseStudies.js';

</script>

<section class="text-grey-800 pageSection" id="work">
  <div class="max-w-[1297px] mx-5 md:mx-16 px-16 mt-40 mb-30">
    <section>
      <h2 class="font-euclid text-xl pl-6 font-semibold my-4">CASE STUDIES:</h2>
    </section>
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {#each caseStudies as study}
        <CaseStudyCard 
          title={study.title} 
          link={study.href}
          ariaLabel={study.ariaLabel} 
          category={study.category} 
          image={study.image} 
          alt={study.alt}
        />
      {/each}
    </section>
  </div>
</section>