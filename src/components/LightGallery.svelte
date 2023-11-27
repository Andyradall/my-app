<script>
    import { onMount } from 'svelte';
    import lightGallery from 'lightgallery';
    import 'lightgallery/css/lightgallery.css';  
    import 'lightgallery/css/lg-medium-zoom.css';
    import lgMediumZoom from 'lightgallery/plugins/MediumZoom';

    /* Note to future self. How to use lightgallery (this how to I will remove and add to my app documentation) */
    /* Script adds lightgallery to any <article> containing class="attachLightGallery" */
    /* Import with script: "import LightGallery from '../../../components/LightGallery.svelte'" html: "<LightGallery />" ; */ 
    /* Use it by adding to specific images with .zooming-white-bg or .zooming-dark-bg */ 
  

    onMount(() => {
    const articleElement = document.querySelector('.attachLightGallery');
        
        lightGallery(articleElement, {
        plugins: [lgMediumZoom,],
        selector: '.zooming-white-bg',
        licenseKey: 'ZmFjZWJvb2s6MjAyMTA5MjYtMTYyMzE=',
        backgroundColor: 'rgba(255,255,255, .985)',
        margin: 104,
        scale: 2,
        zoom: true,
        mediumZoom: true,
        closeOnScroll: true,
        closeOnTap: true, 
        zoomFromOrigin: true,
       // getCaptionFromTitleOrAlt: true, 
       // subHtmlSelectorRelative: true,
        //subHtmlSelector: 'figcaption', 
      });
      lightGallery(articleElement, {
        plugins: [lgMediumZoom,],
        selector: '.zooming-dark-bg',
        licenseKey: 'ZmFjZWJvb2s6MjAyMTA5MjYtMTYyMzE=',
        backgroundColor: 'rgba(0,0,0, .985)',
        margin: 104,
        scale: 2,
        zoom: true,
        mediumZoom: true,
        closeOnScroll: true,
        closeOnTap: true, 
        zoomFromOrigin: true,
      //  getCaptionFromTitleOrAlt: false, 
      //  subHtmlSelectorRelative: true,
      //  subHtmlSelector: 'figcaption' 
    });
    });
</script>   