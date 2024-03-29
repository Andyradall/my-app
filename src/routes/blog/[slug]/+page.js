import client from '$lib/sanityClient';

/*
export async function load({ params }) {
  return {
    props: { post: { title: 'Static Title', excerpt: 'Static excerpt' } }
  };
  console.log('post');
  console.log('post.title');
}
*/
export async function load({ params }) {
    console.log('load function called with params:', params); // Check if load is called

    // Construct the query to fetch the post by slug
    const query = `*[_type == "post" && slug.current == $slug][0]`;
    console.log('Sanity query:', query); // Check the query

    const data = await client.fetch(query, { slug: params.slug });
    console.log('Post-Data fetched from Sanity:', data); // Check the fetched post

    if (!data) {
      console.log('No data found for slug:', params.slug); // Check if no post was found
      return {
        status: 404,
        error: new Error('Post not found')
      };
    }
  
    console.log('Returning post from load function:', data); // Check the returned post
    return {
      posts: data
    };
}