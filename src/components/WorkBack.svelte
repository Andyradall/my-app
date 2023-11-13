<script>

import { onMount } from 'svelte';

let lastScrollTop = 0;
let hideButton = false;

onMount(() => {
  window.addEventListener('scroll', () => {
    const st = window.scrollY || document.documentElement.scrollTop;
    
    // Check if scrolling down and past 300px
    if (st > lastScrollTop && st > 300) {
      hideButton = true;
    } 
    // Check if scrolling up or position is less than or equal to 300px
    else {
      hideButton = false;
    }
    // Update lastScrollTop for the next scroll event
    lastScrollTop = st <= 0 ? 0 : st;
  });
});


</script>

<div id="backButton" class="absolute top-0 m-[2vw] z-20" class:hide-backButton={hideButton}>
    <button
      class="back text-grey-700 bg-grey-200 hover:bg-grey-100 hover:text-grey-600 rounded-full font-euclid text-base flex items-center justify-center pl-5 w-28 h-10"
      on:click={() => (window.location.href = '/')}
      aria-label="Back to frontpage"
      type="button"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" fill="#303133"> </path>
        </svg>
        Back
    </button>
</div>

<style lang="postcss">

#backButton {
    position: absolute;
    top: 0;
    margin: 2vw;
    z-index: 20;
}

.back {
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all .45s ease;
}

.back svg {
    margin-right: 0.2em;
    fill: #303133;
    transition: all .45s ease;
}

.back:hover,
.back:hover svg {
    color: #616366;
    fill: #616366;
    transform: translateX(-2px);
    transition: all .45s ease;
}

@media screen and (max-width: 470px) {
    #backButton {
        position: fixed; 
    }
}

.hide-backButton {
    display: none;
}
</style>