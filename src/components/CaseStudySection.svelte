<script>
  import CaseStudyCard from './CaseStudyCard.svelte';
  
  let caseStudies = [
  {
    title: 'Designmaskinen',
    href: '/work/designmaskinen',
    ariaLabel: 'Designmaskinen Case Study',
    category: 'UX | PRODUCT DESIGN | 2023',
    image: '/images/thumbs/DMthumb800500.webp',
    alt: 'Designmaskinen Case Study',
  },
  {
    title: 'Svenska Mässkonsult',
    href: '/work/smab',
    ariaLabel: 'Svenska Mässkonsult Case Study',
    category: 'BRANDING | WEB DESIGN | 2023',
    image: '/images/thumbs/Smabthumb800500.webp',
    alt: 'Svenska Mässkonsult Case Study',
  },
  {
    title: 'Solar Choice',
    href: '/work/solarchoice',
    ariaLabel: 'Solar Choice Case Study',
    category: 'BRAND DESIGN | 2022',
    image: '/images/thumbs/Solarthumblg-1.webp',
    alt: 'Solar Choice Case Study',
  },
  {
    title: 'Karrierestart',
    href: '/work/karrierestart',
    ariaLabel: 'Karrierestart Case Study',
    category: 'UX | PRODUCT DESIGN | 2021',
    image: '/images/thumbs/KSthumb8005001.webp',
    alt: 'Karrierestart Case Study',
  }
];
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