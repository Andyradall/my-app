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


<section id="work" class="pageSection pt-40 pb-40">
  <h2 class="font-euclid font-medium">CASE STUDIES:</h2>

  <div class="flex flex-wrap">
    {#each caseStudies as study}
      <div class="w-full sm:w-1/2 p-2"> 
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
  </div>
</section>
