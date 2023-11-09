<script>

// BackButton for mobile, make the button sticky on scroll up   
function backButtonFunction() {
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    // If scrolling down and past 300px
    if (st > lastScrollTop && st > 300) {
        document.getElementById('backButton').classList.add('hide-backButtonClass');
    } 
    // If scrolling up or position is less than or equal to 300px
    else {
        document.getElementById('backButton').classList.remove('hide-backButtonClass');
    } 
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
}

</script>

<div id="backButton" class="backButtonClass">
    <button class="back" onclick="location.href='http://www.andersra.com'" aria-label="Back to frontpage" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" fill="#303133"> </path>
        </svg>
        Back
    </button>
</div>

<style>
/* Backbuton on case studies*/
#backButton {
    position: absolute;
    top: 0;
    margin-top: 2vw;
    z-index: 200; 
}

.backButtonClass button.back {
    margin-left: 2vw;
    padding-left: 20px;
    font-family: Euclid Circular B, sans-serif;
    font-size: 16px;
    border: 0px;
    outline: none;
    color: #303133;
    cursor: pointer;
    transition: all .45s ease;
    display: inline-flex;
    align-items: center;
    /*bg test*/
    width: 110px;
    height: 40px;
    position: absolute;
    background: #DDE0E6;
    border-radius: 104px;
}

  .backButtonClass button.back svg {
      margin-right: 0.2em;
      fill: #303133;         
      transition: all .45s ease;
  }
  
  .backButtonClass button.back:hover,
  .backButtonClass button.back:hover svg path {
      color: #616366;  
      fill: #616366;  
      transition: all .45s ease;
      background: #efefef;
  }

.hide-backButtonClass {
  display: none;
}

.hide-backButtonClass {
    display: none !important;
}

@media screen and (max-width:470px) {
    #backButton {
        position: fixed; 
    }
    .backButtonClass button.back {
        margin-left: 2vw;
        background: #efefef;
    }
    .backButtonClass.hide-backButtonClass {
        transform: translateY(-100px) !important;
        transition: ease transform 0.3s !important;
    }
}

</style>