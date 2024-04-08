import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import client from '../sanityClient'; 

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
    return builder.image(source);
}

// function urlFor(source) {
//     return builder.image(source);
// }