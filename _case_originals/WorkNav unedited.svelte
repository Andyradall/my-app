<script>
// Casestudy sub navigation script:
function caseStudyNavFunction() {

// Opacity hack to hide effect before its needed 
    // Calculate the bottom position of the first section
    var firstSectionBottom = jQuery('#first').offset().top + jQuery('#first').height() - 160;
    // On window scroll, adjust the opacity of the .effect element based on scroll position
    jQuery(window).on('scroll', function() {
        var scrollPosition = jQuery(window).scrollTop();

        // Check if user scrolled past the first section
        //if (scrollPosition >= firstSectionTop) {
        if (scrollPosition > firstSectionBottom) {
            jQuery('.effect').css('opacity', '1');  // Show the .effect
        } else {
            jQuery('.effect').css('opacity', '0');  // Hide the .effect
        }
    });
// opacity hact end


//Scroll smooth after clicking jumpto link
(function(jQuery) {
    jQuery(document).on('click', 'a[href^="#"]', function(e) {
     var id = jQuery(this).attr('href');
     var $id = jQuery(id);
     if ($id.length === 0) {
     return;
     }
     e.preventDefault();
     var pos = $id.offset().top;
     jQuery('body, html').animate({scrollTop: pos},800);
     jQuery("body.open-menu #overlay-menu .menu-icon").trigger("click");
    });
    })(jQuery);
 

// Sticky subheader on scroll over
    jQuery(document).ready(function() {
        //Enter Your Class or ID
        var $stickyMenu = jQuery('#sub-navigation');
        var stickyNavTop = jQuery($stickyMenu).offset().top;
    
        //Get Height of Navbar Div
        var navHeight = jQuery($stickyMenu).height(); 
        var stickyNav = function(){
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > stickyNavTop) { 
                jQuery($stickyMenu).addClass('sticky');
                jQuery('html').css('padding-top', navHeight + 'px')
            } else {
                jQuery($stickyMenu).removeClass('sticky');
                jQuery('html').css('padding-top', '0')
            }
        };
        stickyNav();
        jQuery(window).scroll(function() {
            stickyNav();
        });
    });

// cache the navigation links 
var $navigationLinks = jQuery('#sub-navigation > ul > li > a');
// cache (in reversed order) the sections
var $sections = jQuery(jQuery(".section").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = jQuery(this).attr('id');
    sectionIdTonavigationLink[id] = jQuery('#sub-navigation > ul > li > a[href=\\#' + id + ']');
});

// Calculate the initial X position from the first navigation link
var initialX;

jQuery(document).ready(function() {
    initialX = $navigationLinks.first().offset().left;

    // Set the initial position of .effect
    var effectElement = document.querySelector('.effect');
    effectElement.style.left = `${initialX}px`; // Set the initial position based on the first navigation link
});

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

// Highlight the active section's corresponding navigation link
function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = jQuery(window).scrollTop();

    // Define an offset value. For instance, if you want it to trigger 100px before the h2, use -100.
    var offset = -160;

    // Keep track of matched sections to avoid duplicates
    var matchedSections = {};

    // iterate the sections
    $sections.each(function() {
        var currentSection = jQuery(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top + offset; // Added offset here
        var id = currentSection.attr('id');

        // if the section has already been matched or if the current scroll position is within the section
        if (!matchedSections[id] && scrollPosition >= sectionTop) {
            // Mark this section as matched
            matchedSections[id] = true;
            
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id];
            // if the link is not active
            if (!$navigationLink.hasClass('active')) {
                // remove .active class from all the links
                $navigationLinks.removeClass('active');
                // add .active class to the current link
                $navigationLink.addClass('active');

                // Adjusting for the padding 
                var x = $navigationLink.offset().left - 20; // Subtracted 20 for the left padding
                var width = $navigationLink.outerWidth() + 40; // Added 40 for total padding (20 on each side)
                
                anime({
                    targets: '.effect',
                    left: `${x}px`,
                    width: `${width}px`, // Set the new width
                    duration: 600,
                    endDelay: 1000,
                });
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}

// Throttle to increase performance: 
jQuery(window).scroll( throttle(highlightNavigation,50) );

}
</script>

<div id="sub-navigation" class="header-navbar">
    <button class="back" onclick="location.href='http://www.andersra.com'" aria-label="Back to frontpage" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/>
        </svg> Back
    </button>

    <div class="con-effect">
        <div class="effect"></div>
    </div>
<ul>
    <li><a href="#first" aria-label="Navigate to 'The challenge' section">The challenge</a></li>
    <li><a href="#second" aria-label="Navigate to 'Design Process' section">Design Process</a></li>
    <li><a href="#third" aria-label="Navigate to 'Final prototype' section">Final prototype</a></li>
    <li><a href="#fourth" aria-label="Navigate to 'Insights' section">Insights</a></li>
</ul>
</div>

   



<style>
* case study styles navbar */
.header-navbar .remover {
    transition: ease transform 0.3s !important;
    } 
    
    .header-navbar.sticky .remover {
    display: none;
    } 
    
    .header-navbar {
      border-bottom: 1px solid #ebeef4;
      padding: 0;
      margin: 0;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      background: #fff;
      height: 96px;
      padding: 2px 0;
      transition: all 200ms ease;
    }
    
    .header-navbar.sticky {
      padding: 0;
      margin: 0;
      height: 52px;
      position: fixed;
      top: 0;
      z-index: 20;
      opacity: 1;
      box-shadow: 0 1px 2px rgba(0,0,0,0.06), 
      0 2px 4px rgba(0,0,0,0.06), 
      0 4px 8px rgba(0,0,0,0.06), 
      0 8px 16px rgba(0,0,0,0.06),
      0 16px 32px rgba(0,0,0,0.06), 
      0 32px 64px rgba(0,0,0,0.06);
    }
    
    .header-navbar ul {
      padding: 0;
      margin: 0 4rem 0 4rem;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      background: #fff;
      }
      
      @media screen and (max-width: 460px) {
        .header-navbar ul {
          margin: 0 1rem 0 1rem;}
      }
    
    .header-navbar li {
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;
      border-radius: 20px;
      transition: all .45s ease;
    }
   
    .header-navbar a{
      font-family: Euclid Circular B, sans-serif; 
      /*padding: 2px 0 0 0;*/
      color: #616366;
      font-size: 16px;
      z-index: 20;
      text-decoration: none;
    }

    .header-navbar a.active {
      z-index: 5!important;
      color: #242527 !important; 
    }

    @media screen and (max-width: 460px) {
      .header-navbar a{
        font-size: 10px;
      }
    }
    
    /* :not excludes class for specific use */
    .header-navbar a:active:not(.back) {
      transform: scale(1.2);
    }
    
    /* potential problem */
    /* .active {
      z-index: 5!important;
      color: #242527 !important;  
    }  */
    
  .header-navbar button.back {
      opacity: 0;
      padding-left: 2vw;
      font-family: Euclid Circular B, sans-serif; 
      font-size: 17px;
      border: 0px;
      outline: none;
      background: none;
      color: #303133;     
      height: 52px;
      cursor: pointer;
      transition: all .45s ease;
      display: inline-flex;  
      align-items: center;  
  }
  
  .header-navbar button.back svg {
      margin-right: 0.2em;
      fill: #303133;         
  }
  
  .header-navbar button.back:hover,
  .header-navbar button.back:hover svg path {
      color: #616366;  
      fill: #616366;  
  }
    
    .header-navbar.sticky button.back {
      opacity: 1; 
    }
    
    .con-effect {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0px;
      /*overflow: hidden;*/
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .effect { 
      opacity: 0;
      background: #DDE0E6;
      width: 164px;
      height: 40px;
      position: absolute;
      left: 130px;
      border-radius: 104px;
    }
  

</style>