<script>
  import { PortableText } from '@portabletext/svelte'; 
  import BlogBack from '../../../components/BlogBack.svelte';
  import BlockText from '../../../lib/sanity/BlockText.svelte';
  import BlockImage from '../../../lib/sanity/BlockImage.svelte';
  import SvelteSeo from 'svelte-seo';
  import { urlFor } from '../../../lib/sanity/image';


  export let data;
  
// console.log(data);
// console.log("BlockText imported successfully", BlockText);
// console.log(JSON.stringify(data.posts.body, null, 2));
</script>

<svelte:head>
  <SvelteSeo
  title={`${data.posts.title} by Anders Rådal`}
  description={data.posts.excerpt}
  canonical={`https://www.andersra.com/work/${data.posts.slug}`}
  openGraph={{
      title: `${data.posts.title} by Anders Rådal`,
      description: data.posts.excerpt,
      images: data.posts.mainImage ? [
          {
              url: urlFor(data.posts.mainImage).url(),
              width: 800,
              height: 600,
              alt: data.posts.title,
          }
      ] : [],
      url: `https://www.andersra.com/work/${data.posts.slug}`,
  }}
  twitter={{
      card: 'summary_large_image',
      site: '@AndersRadal',
      title: `${data.posts.title} by Anders Rådal`,
      description: data.posts.excerpt,
      image: data.posts.mainImage ? urlFor(data.posts.mainImage).url() : undefined,
  }}
/>

</svelte:head>

<header class="relative top-0">
	<BlogBack />
</header>

<article class="mx-auto font-euclid text-lg text-slate-600">
  <main class="md:max-w-3xl mx-auto justify-center px-4 pt-40 md:pt50 pb-20">
    <h2 class=" text-slate-500">
      {#each data.posts.categories as category, index (index)}
      #{category}{' '}
  {/each}
    </h2>
    {#if data.posts}
      <h1 class="text-4xl md:text-6xl font-euclid 
      font-bold text-slate-600 leading-[198px] pt-2 pb-6">{data.posts.title}</h1>
      <p class="text-3xl">{data.posts.excerpt}</p>
      
      <img src={urlFor(data.posts.mainImage).url()} alt={`Cover Image for ${data.posts.title}`} class="max-w-full h-auto rounded-sm my-4" />
     
      <p class=" text-slate-500">
        Published at {new Date(data.posts.publishedAt).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>
      <div class="py-8  text-lg font-light">
        <PortableText
        value={data.posts.body}
        components={{
            block: {
               normal: BlockText, 
               h2: BlockText,
               h3: BlockText, 
            },
            types: {
            image: BlockImage,
        }
        }}
    />
      </div>
    {:else}
      <p>Post not found.</p>
    {/if}
   


  </main>
</article>

<!--style lang="postcss">
	h2 {
		@apply text-[34px] font-euclid font-medium leading-[48px];
	}
	h3 {
		@apply text-[24px] font-euclid font-normal leading-[48px];
	}
	p {
		@apply text-[18px] font-euclid font-light leading-[30px];
	}
	.list-custom {
		@apply text-[18px] font-euclid font-normal leading-[30px] list-disc pl-5 space-y-2;
	}
</style-->

