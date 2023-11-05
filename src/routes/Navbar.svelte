<script>
    import anime from 'animejs';
    import { onMount, afterUpdate } from 'svelte';

    // set #hero as active
    let isActive = false; 
    
    // On component mount, we'll check the condition
    onMount(() => {
        // If the current window location hash is "#hero", set isActive to true
        if (window.location.hash === "#hero") {
            isActive = true;
        }
    });
    
    // set the size correct from start 
    let effectX = 0;     // Initial position
    let effectWidth = 0; // Initial width
    
    afterUpdate(() => {
        const activeLink = document.querySelector('#main-navigation > ul > li > a.active');
    
        if (activeLink) {
            // Adjusting for the padding
            effectX = activeLink.offsetLeft - 8; // Subtracted 8 for the left padding
            effectWidth = activeLink.offsetWidth + 16; // Added 16 for total padding (8 on each side)
        }
    });
    
    // Cache navigation links and sections
    let pageNavigationLinks;
    let pageSections;
    let pageSectionIdToNavigationLink = {};
    let pageInitialX;
    
    // throttle function, enforces a minimum time interval
    function throttle(fn, interval) {
      var lastCall, timeoutId;
      return function () {
          var now = new Date().getTime();
          if (lastCall && now < (lastCall + interval) ) {
              // if we are inside the interval we wait
              clearTimeout(timeoutId);
              timeoutId = setTimeout(function () {
                  lastCall = now;
                  fn.call();
              }, interval - (now - lastCall) );
          } else {
              // otherwise, we directly call the function 
              lastCall = now;
              fn.call();
          }
      };
    }
    



    function highlightPageNavigation() {
        const currentActiveLink = document.querySelector('#main-navigation > ul > li > a.active');
        if (currentActiveLink && currentActiveLink.classList.contains('menu-custom-link')) {
            return; // Exit if the active link is an external link
        }

        const scrollPosition = window.scrollY;
        const offset = -160;
        let matchedPageSections = {};

        pageSections.forEach((section) => {
            const sectionTop = section.offsetTop + offset;
            const id = section.getAttribute('id');
            if (id === 'resume' || id === 'linkedin') {
                return; // Continue with the next iteration
            }
            if (!matchedPageSections[id] && scrollPosition >= sectionTop) {
                matchedPageSections[id] = true;
                const navLink = pageSectionIdToNavigationLink[id];
                if (!navLink.classList.contains('active')) {
                    pageNavigationLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                    const x = navLink.offsetLeft - 8;
                    const width = navLink.offsetWidth + 16;
                    anime({
                        targets: '.menu-effect',
                        left: `${x}px`,
                        width: `${width}px`,
                        duration: 600,
                        endDelay: 1000
                    });
                }
            }
        });
    }
    
    onMount(() => {
        // Cache navigation links and sections
        pageNavigationLinks = document.querySelectorAll('#main-navigation > ul > li > a:not(.menu-custom-link)');
        pageSections = Array.from(document.querySelectorAll('.pageSection')).reverse();

        // Map each section id to their corresponding navigation link
        pageSections.forEach(section => {
            let id = section.getAttribute('id');
            let correspondingNavLink = document.querySelector(`#main-navigation > ul > li > a[href="#${id}"]`);
            pageSectionIdToNavigationLink[id] = correspondingNavLink;
        });
    
        // Calculate the initial X position from the first navigation link
        const firstNavLink = pageNavigationLinks[0];
        if (firstNavLink) {
            pageInitialX = firstNavLink.offsetLeft;
        }
        const pageEffectElement = document.querySelector('.menu-effect');
        if (pageEffectElement) {
            pageEffectElement.style.left = `${pageInitialX}px`;
        }

        // Add scroll listener
        window.addEventListener('scroll', throttle(highlightPageNavigation, 50));
    });
</script>

    

<nav>
<div id="nav-container">
<div id="main-navigation" class="main-navbar" role="navigation" aria-label="Main Navigation">
    <div class="menu-effect-container">
        <div class="menu-effect"></div>
    </div>

<ul>
    <li>
        <a href="#hero" class:active={isActive} aria-label="Anders Rådal">Anders Rådal</a>
    </li>
    <li>
        <a href="#work" aria-label="Case Studies">Case Studies</a>
    </li>
    <li>
        <a href="#about" aria-label="About me">About me</a>
    </li>
    <li>
        <a href="https://drive.google.com/file/d/1W6rt980ZRd3HG_2QqSCYhX3zE7FIRdLl/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Read more in my resume, opens in a new window" class="menu-custom-link">
            Resumé
            <span class="menu-svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" fill="currentColor"></path>
                </svg>
            </span>
        </a>
    </li>
    <li>
        <a href="https://www.linkedin.com/in/andersraa/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn, opens in a new window" class="menu-custom-link">
            LinkedIn
            <span class="menu-svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M215.522-152.348 151.869-216l460.892-460.891H356.413v-91h411v411h-91v-256.348L215.522-152.348Z" fill="currentColor"></path>
                </svg>
            </span>
        </a>
    </li>
</ul>
</div>
</div> 
</nav>

<style>

/*html {
    scroll-behavior: smooth;
}*/

/* nav container for centering nav */
  #nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

    .menu-custom-link {
        display: inline-flex; 
        align-items: baseline; 
    }

    .menu-custom-link:hover, .menu-custom-link:focus {
        color: #616366 !important; 
    }

    .menu-svg-icon {
        margin-left: 2px; 
        transform: translateY(3px);
        transition: transform 0.1s; 
    }

    .menu-custom-link:hover .menu-svg-icon {
        transform: translateY(1px) translateX(2px);
    }

    .menu-svg-icon svg path {
        fill: currentColor; 
    }

  @media (max-width: 768px) {

    .menu-custom-link {
        display: none;  /* Hide custom links */
    }

	.menu-effect {
transform: translateX(4px);
}
    
    #nav-container {
        width: 92% !important;
        margin: 0 auto !important;
    }
    
    .main-navbar {
        width: 92% !important;
        margin: 0 auto !important;
        top: 12px !important;
        padding: 0px 4px !important;
        max-height: 48px !important;
    } 

    .main-navbar a {
        font-size: calc(0.9em)!important; 
        padding: 3px 4px !important; 
        white-space: nowrap;  
    }
  
    .main-navbar ul {
        padding: 4px 16px !important;
        margin: 4px !important;  /* Reset default margin */
        gap: 0!important;
        display: flex;  /* Use flexbox */
        justify-content: center;  /* Center items horizontally */
	    justify-content: space-between;
        margin-block-start: 0!important;
        margin-block-end: 0!important;
        padding-inline-start: 40px!important;
    }       
    .menu-effect {
        max-height: 32px; 
    }
	/*.skibilde {
max-height: 343px !important;
   }*/

}

  /* Main navigation styles */

    .main-navbar {
        position: fixed;
        top: 24px;
       /* left: 50%;
        transform: translateX(-50%);*/
        padding: 0px 8px;
        align-items: center;
       /* width: 318px; */
        height: 64px;
        /*background-color: #F6FAFF !important; */
        border: 1px solid #DDE0E6;
        border-radius: 198px;
        z-index: 100;
        overflow: visible;
        /*padding: 0 38px;*/
        background: #F7FBFF !important;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.01), 
                    0px 4px 6px 0px rgba(0, 0, 0, 0.03), 
                    0px 2px 3px 0px rgba(0, 0, 0, 0.02);
      }
    
    .main-navbar ul {
        list-style-type: none;
        padding: 16px 0;
        margin: 0;
        display: flex;
        /*justify-content: space-between;*/
        position: relative;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    
    .main-navbar li {
        /*margin: 0;*/
        display: flex;
        padding: 0 8px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    
    .main-navbar a {
        font-family: Euclid Circular B, sans-serif; 
        color: #242527;
        /*font-size: 20px;*/
        font-size: calc(1em + 2px); /* Increase the font size by 4px */  
        font-style: normal;
        font-weight: 500;
        line-height: 33.33px; /* 166.65% */
        z-index: 102;
        text-decoration: none;
        z-index: 103;
        position: relative;
        padding: 0 20px;
    }
    
    .main-navbar a:hover {
        color: #616366; /* Hover effect */
    }
    
    .menu-effect-container {
        width: 163px;
        height: 48px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        /*top: -7px;*/
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }
    
    .menu-effect {
        opacity: 1; 
        background: #DDE0E6;
        /*min-width: 90.5677px;*/
        height: 48px;
        position: absolute;
        /*left: 1px; /*old Initial position if code live on Work page */
        /*left: 109.372px; */ /*Initial position if code live on About page */
        border-radius: 104px;
        z-index: 101; 
    } 


</style>