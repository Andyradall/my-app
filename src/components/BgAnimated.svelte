<script>

  import { onMount } from 'svelte';

  let windowWidth;
  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      windowWidth = window.innerWidth;
    });
  }

    const colors = [
      "#CF381C", "#909BA1", "#9FAAB0", "#717E84", 
      "#CF381C", "#909BA1", "#D96049", "#717E84",
    ];



    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }


  let circles = [];
  let durationRange;
  $: {
    circles = [];
    let circleConfig;
    if (windowWidth <= 768) { /* Mobile */
      circleConfig = {
        cxRange: [370, 500], /* X coordinates */
        cyRange: [35, 620], /* Y coordinates */
        rxRange: [485, 620], /* X sizes */
        ryRange: [33, 64] /* Y sizes */
      };
      durationRange = [20, 30]; /* Speed */
    } else { /* Desktop */
      circleConfig = {
        cxRange: [75, 700],
        cyRange: [0, 900],
        rxRange: [240, 380],
        ryRange: [105, 170]
      };
      durationRange = [16, 25]; /* Speed (smaller = faster) */
    }

    for (let i = 0; i < 2; i++) {
      colors.forEach((color, index) => {
        circles.push({
          cx: getRandom(...circleConfig.cxRange),
          cy: getRandom(...circleConfig.cyRange),
          rx: getRandom(...circleConfig.rxRange),
          ry: getRandom(...circleConfig.ryRange),
          fill: `url(#gradient${index})`,
          transformX: getRandom(-250, 245),
          transformY: getRandom(-250, 245),
          duration: getRandom(...durationRange),
          delay: getRandom(0, 5),
        });
      });
    }
  }

    /* Generate gradients for each color */
    let gradients = colors.map((color, index) => `
      <radialGradient id="gradient${index}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.77" /> 
          <stop offset="20%" stop-color="${color}" stop-opacity="0.6" />
          <stop offset="40%" stop-color="${color}" stop-opacity="0.4" />
          <stop offset="60%" stop-color="${color}" stop-opacity="0.18" />
          <stop offset="80%" stop-color="${color}" stop-opacity="0.080" />
          <stop offset="100%" stop-color="${color}" stop-opacity="0" />
      </radialGradient>
    `).join('');
</script>
<div class="grain"></div>
<svg class="full-svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="none">
    
    <rect width="100%" height="100%" fill="#ECEDEF" opacity="0.61" />
    <defs>
      {@html gradients}
    </defs>

    {#each circles as circle, index (index)}
      <ellipse
        class="animatedCircle"
        cx={circle.cx}
        cy={circle.cy}
        rx={circle.rx}
        ry={circle.ry}
        fill={circle.fill} 
        style={`--transformX: ${circle.transformX}px; --transformY: ${circle.transformY}px; --duration: ${circle.duration}s; --delay: ${circle.delay}s;`}
      />
    {/each}
</svg>
  <style lang="postcss">
    @keyframes moveAnimation {
      0%, 100% {
        transform: translate3d(0, 0, 0);
      }
      25% {
        transform: translate3d(var(--transformX), var(--transformY), 0);
      }
      50% {
        transform: translate3d(0, 0, 0);
      }
      75% {
        transform: translate3d(var(--transformX), var(--transformY), 0);
      }
    }
  
    .animatedCircle {
      animation: moveAnimation var(--duration) infinite ease-in-out var(--delay);
      opacity: 0.35;
    }
  
    .full-svg-bg {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.81;
    }

    .grain {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('/images/backgrounds/bg_grain.webp');
  background-repeat: repeat;
  opacity: .14;
  z-index: 0;
}
  </style>
  