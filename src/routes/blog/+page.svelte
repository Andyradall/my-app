<script>
	import { onMount } from 'svelte';
	import client from '../../lib/sanityClient';
	//import WorkBack from '../../components/WorkBack.svelte';
	import NavbarBlog from '../..//components/NavbarBlog.svelte';
	import BgAnimated from '../../components/BgAnimated.svelte';

	let blogPosts = [];

	onMount(async () => {
		const query = `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        excerpt,
        publishedAt,
        categories[]->{
          title
        }
      }`;
		blogPosts = await client.fetch(query);
	});
</script>

<header class="relative">
	<div class="absolute top-0 left-0">
		<!--WorkBack /-->
	</div>
</header>
<NavbarBlog />
<BgAnimated />

<article id="hero" />
<article id="work" />
<article id="services" />
<article id="about" />
<article id="blog" class="mt-20 mb-80 text-slate-600">
	<section class="pageSection mx-4 md:mx-auto md:min-mx-16 md:max-w-7xl">
		<section class="text-slate-600 mx-auto pt-24 md:pt-26 pb-10 md:pb-10">
			<div class="mx-auto">
				<h1 class="font-euclid max-w-xs md:max-w-4xl pl-2 text-left">
					<span
						class="mx-auto block font-bold text-5xl md:text-7xl leading-[4rem] md:leading-[8.5rem] pb-4 md:pb-6 text-slate-600"
					>
						The blog..
					</span>
					<span
						class="mx-auto block font-semibold text-3xl md:text-[2.15rem] leading-[3.5rem] text-slate-600"
					>
							I created the blog to learn Sanity CMS, and to have a place to write and reflect on my
							journey in design and code.
						
					</span>
				</h1>
			</div>
		</section>
		<h1 class="font-euclid text-3xl mt-12 md:text-4xl text-slate-600 font-semibold pl-6 my-4">
			BLOG ARCHIVE
		</h1>
	</section>

	<section
		class="grid grid-cols-1 md:grid-cols-12 items-start gap-10 md:mx-auto md:min-mx-16 md:max-w-7xl pb-20"
	>
		{#each blogPosts as post}
			{#if post.slug && post.slug.current}
				<a
					href={`/blog/${post.slug.current}`}
					class="blog-card col-span-12 md:col-span-6 rounded-3xl bg-zinc-100 bg-opacity-75 backdrop-blur-sm shadow-custom pt-10 pb-10"
				>
					<span class="font-euclid font-medium text-lg text-slate-500 px-10"
						>{new Date(post.publishedAt).toLocaleDateString(undefined, {
							day: 'numeric',
							month: 'numeric',
							year: 'numeric'
						})} in {post.categories[0]?.title}</span
					>
					<div class="px-10 py-4">
						<h3 class="font-euclid text-3xl text-slate-600 font-semibold mb-4 hover:underline">
							{post.title}
						</h3>
						<p class="font-euclid font-normal text-slate-600 text-lg mb-4">{post.excerpt}</p>
					</div>
				</a>
			{/if}
		{/each}
	</section>
</article>

<style lang="postcss">
	.blog-card::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		border: 1.3px solid rgba(178, 183, 192, 0.3);
		z-index: 1;
		pointer-events: none;
	}
</style>
