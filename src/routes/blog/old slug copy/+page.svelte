// [slug]/+page.svelte
<script>
  export let post;
  console.log('Initial value of post prop in +page.svelte:', post); // Check the initial value of the post prop

  $: {
    console.log('Updated value of post prop in +page.svelte:', post); // Check the updated value of the post prop
  }
</script>

<!-- Use the post prop in your markup -->
{#if post}
  <article>
    <h1>{post.title}</h1>
    <p>{post.excerpt}</p>
    <!-- Display other post details as needed -->
  </article>
{:else}
  <p>Post not found.</p>
{/if}