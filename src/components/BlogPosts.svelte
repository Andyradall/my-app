<script>
    import { onMount } from 'svelte';
    import client from '../lib/sanityClient'; 
  
    let blogPosts = [];
  
    onMount(async () => {
      const query = `*[_type == "post"]{
        title,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        excerpt,
        categories[]->{
          title
        }
      }`;
      blogPosts = await client.fetch(query);
    });
  </script>
  
<article class="hideSection text-slate-600">
    <section  class="mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl mt-40 mb-30">
    <h2 class="font-euclid text-2xl mt-12 md:text-3xl text-slate-600 font-semibold pl-6 my-4">BLOG</h2>
  </section>

  <section class="flex overflow-x-auto pb-14 mb-2 px-6 space-x-6 z-99">
    {#each blogPosts as post}
      <div class="blog-card flex-none w-[627px] h-[627px] rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm shadow-custom">
        <img class="w-full h-[377px] object-cover rounded-t-3xl" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
        <div class="p-10">
          <h3 class="font-euclid text-3xl text-slate-600 font-semibold mb-4">{post.title}</h3>
          <p class="font-euclid font-normal text-slate-600 text-lg mb-4">{post.excerpt}</p>
          <span class="font-euclid font-normal text-lg text-slate-500">{post.categories[0]?.title}</span>
        </div>
      </div>
    {/each}
  </section>
</article>


  <style lang="postcss">

.hideSection {
  display: none;
}

    .blog-card {
        position: relative;
      }
    .blog-card::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      border: 1.3px solid rgba(178, 183, 192,0.3); /* transparent border */
      z-index: 1;
      pointer-events: none; /* to allow interaction with the content underneath */
    }

    </style>