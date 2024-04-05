<script>
  import { PortableText } from '@portabletext/svelte'; 
  import WorkBack from '../../../components/WorkBack.svelte';
  import BlockText from '../../../components//sanity/BlockText.svelte';
  import BlockImage from '../../../components/sanity/BlockImage.svelte';
  import SvelteSeo from 'svelte-seo';
  import { urlFor } from '../../../components/sanity/image';

  export let data;
//  console.log("Text to identify this specific console.log:", data);
  console.log("BlockText imported successfully", BlockText);
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
	<WorkBack />
</header>

<article class="mx-auto font-euclid text-slate-600" >
  <main class="md:max-w-4xl mx-auto justify-center px-4 pt-40 md:pt50 pb-20">
    <h2 class="text-slate-500">#CATEGORY #UXDESIGN #BLOGG</h2>
    {#if data.posts}
      <h1 class="text-4xl md:text-6xl font-euclid font-bold text-slate-600 py-4">{data.posts.title}</h1>
      <p class="text-3xl">{data.posts.excerpt}</p>
      <img src={urlFor(data.posts.mainImage).url()} alt={`Cover Image for ${data.posts.title}`} class="max-w-full h-auto rounded-sm my-4" />
      <!--img class="w-full h-[377px] object-cover rounded-sm" src={data.posts.mainImage.asset.url} alt={data.posts.mainImage.alt} /-->
      <div class="py-8 font-euclid text-lg font-light">
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
