<script>
	export let data;
  console.log("Text to identify this specific console.log:", data);
</script>

<article>
  <header>
    <h1>Sanity + SvelteKit</h1>
  </header>
  <main>
    <h2>Post starts</h2>
    {#if data.posts}
      <h1 class="font-euclid font-bold text-lg">{data.posts.title}</h1>
      <p>{data.posts.excerpt}</p>
      <p class="font-euclid font-light">{data.posts.body}</p>
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
