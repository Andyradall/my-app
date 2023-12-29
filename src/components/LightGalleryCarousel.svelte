<script>
    import { onMount } from 'svelte';
    import lightGallery from 'lightgallery';
    // Import necessary CSS
    import 'lightgallery/css/lightgallery.css';  

    onMount(() => {
        const galleryElement = document.querySelector('.attachLightGalleryCarousel');
        
        lightGallery(galleryElement, {
            selector: '.lg-item',
            autoplay: true,
            dynamic: true,
            thumbnail: false, 
            controls: false, 
            download: false,
            pause: 10000, // 10 seconds for each slide
            pager: true, // Enable pagination
            licenseKey: 'A7D7BC77-424B-4F41-9D39-CC54DE0C34AC',
            // ... other carousel-specific options
        });
    });
</script>