<script>
  import { PortableText } from '@portabletext/svelte'; 
  import WorkBack from '../../../components/WorkBack.svelte';
	export let data;
  console.log("Text to identify this specific console.log:", data);
</script>

<header class="relative top-0">
	<WorkBack />
</header>


<article class="mx-auto font-euclid text-slate-600" >
  <main class="md:max-w-6xl mx-auto justify-center px-4 pt-40 pb-20">
    <h2>Post starts</h2>
    {#if data.posts}
    <h1 class="text-[2.75rem] md:text-7xl font-euclid font-bold text-slate-600 py-4">{data.posts.title}</h1>
      <p>{data.posts.excerpt}</p>
    
      <div class="font-euclid font-light">
        <PortableText value={data.posts.body } components={{}} />
      </div>
      <!-- Display other post details as needed -->
    {:else}
      <p>Post not found.</p>
    {/if}
  </main>
</article>

<!--article>
	<header>
		<h1>Sanity + SvelteKit</h1>
	</header>
	<main>
		<h2>Pets</h2>
		{#if data.pets && data.pets.length}
		<ul>
			{#each data.pets as pet}
			<li>{pet.name}</li>
			{/each}
		</ul>
		{:else}
		<p>No pets found.</p>
		{/if}
		<div>
			{#if data.pets && data.pets.length}
			<pre>
			{JSON.stringify(data.pets, null, 2)}
  	  </pre>
			{:else}
			<p>Your data will show up here when you've configured everything correctly</p>
			{/if}
		</div>
	</main>
</article-->
