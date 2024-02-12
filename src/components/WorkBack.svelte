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
      class="back text-slate-700 bg-slate-100 bg-opacity-80 hover:text-slate-550 rounded-xl font-euclid text-[16px] font-normal flex items-center justify-center w-24 h-9"
      on:click={() => (window.location.href = '/')}
      aria-label="Home to frontpage"
      type="button"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"> </path>
        </svg>
        Home
    </button>
</div>

<style lang="postcss">

#backButton {
    position: absolute;
    top: 0;
    width: 112px;
    margin: 2vw;
    z-index: 20;
}

.back {
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all .25s ease;
}

.back svg {
    margin-right: 0.2em;
    fill: #20282C;
    transition: all .25s ease;
}

.back:hover {
  color: #35434A;
  fill: #35434A;
}

.back:hover svg {
    color: #35434A;
    fill: #35434A;
    transform: translateX(-2px);
    transition: all .25s ease;
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