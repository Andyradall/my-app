<!-- Changes from BgAnimated 2, puts the red circle in the Hero-->
<script>
  import { onMount } from 'svelte';

  let windowWidth = 800; // Default width

  onMount(() => {
    windowWidth = window.innerWidth;

    const resizeHandler = () => {
      windowWidth = window.innerWidth;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  });

  const colors = [
    "#9FA5B0", // Base gray-blue
    "#B0B5BD", // Lighter shade of gray-blue
    "#8F949E", // Darker shade of gray-blue
    "#35434A", // Base dark blue-gray
    "#4A5A62", // Lighter shade of dark blue-gray
    "#4A5A62", // Lighter shade of dark blue-gray (x2)
    "#2E3A40", // Darker shade of dark blue-gray
    "#4A5A62", // Lighter shade of dark blue-gray (x3)
    "#717E84", // Slate 350
    "#B32F19", // Darker shade of red-orange (the circle we want to position)
  ];

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  let circles = [];
  let durationRange;
  let numCircles;

  $: {
    circles = [];
    let circleConfig;
    if (windowWidth <= 768) {
      /* Mobile Configuration */
      circleConfig = {
        cxRange: [370, 500],
        cyRange: [35, 620],
        rxRange: [485, 620],
        ryRange: [33, 64],
      };
      durationRange = [20, 30];
      numCircles = 12;
    } else {
      /* Desktop Configuration */
      circleConfig = {
        cxRange: [55, 750],
        cyRange: [0, 850],
        rxRange: [240, 400],
        ryRange: [90, 170],
      };
      durationRange = [16, 25];
      numCircles = 16;
    }

    for (let i = 0; i < numCircles; i++) {
      const colorIndex = i % colors.length;
      const color = colors[colorIndex];

      let cx, cy, rx, ry;

      rx = getRandom(...circleConfig.rxRange);
      ry = getRandom(...circleConfig.ryRange);

      if (color === '#B32F19') {
        /* Set the circle with color '#B32F19' to the middle top */
        cx = windowWidth / 3;
        cy = 50; // Adjust if you want it slightly lower than the top
      } else {
        /* Random positions for other circles */
        cx = getRandom(...circleConfig.cxRange);
        cy = getRandom(...circleConfig.cyRange);
      }

      circles.push({
        cx,
        cy,
        rx,
        ry,
        fill: `url(#gradient${colorIndex})`,
        transformX: getRandom(-250, 250),
        transformY: getRandom(-100, 100),
        duration: getRandom(...durationRange),
        delay: getRandom(0, 5),
      });
    }
  }

  /* Generate gradients for each color */
  let gradients = colors
    .map(
      (color, index) => `
    <radialGradient id="gradient${index}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.77" /> 
      <stop offset="20%" stop-color="${color}" stop-opacity="0.6" />
      <stop offset="40%" stop-color="${color}" stop-opacity="0.4" />
      <stop offset="60%" stop-color="${color}" stop-opacity="0.18" />
      <stop offset="80%" stop-color="${color}" stop-opacity="0.08" />
      <stop offset="100%" stop-color="${color}" stop-opacity="0" />
    </radialGradient>
  `
    )
    .join('');
</script>

<div class="grain"></div>
<svg class="full-svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="none">
  <rect width="100%" height="100%" fill="#ECEDEF" opacity="0.75" />
  <defs>
    {@html gradients}
  </defs>

  {#each circles as circle, index}
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

<style>
  @keyframes moveAnimation {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(var(--transformX), var(--transformY), 0);
    }
  }

  .animatedCircle {
    animation: moveAnimation var(--duration) infinite ease-in-out var(--delay);
    opacity: 0.40;
    will-change: transform;
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
    opacity: 0.1;
    z-index: 0;
  }
</style>
